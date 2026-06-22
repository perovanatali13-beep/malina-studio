import { NextResponse } from "next/server";

export const runtime = "nodejs";

type LeadPayload = {
  name?: string;
  contact?: string;
  service?: string;
  message?: string;
};

function isValidContact(value: string) {
  const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phone = /^[+\d][\d\s()-]{6,}$/;
  return email.test(value) || phone.test(value);
}

export async function POST(request: Request) {
  let data: LeadPayload;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Некорректный запрос" }, { status: 400 });
  }

  const name = (data.name ?? "").trim();
  const contact = (data.contact ?? "").trim();
  const service = (data.service ?? "").trim();
  const message = (data.message ?? "").trim();

  if (name.length < 2) {
    return NextResponse.json(
      { error: "Укажите имя" },
      { status: 422 }
    );
  }
  if (!isValidContact(contact)) {
    return NextResponse.json(
      { error: "Укажите корректный email или телефон" },
      { status: 422 }
    );
  }

  const lead = {
    name,
    contact,
    service: service || "не указана",
    message: message || "—",
    receivedAt: new Date().toISOString(),
  };

  // Заявка попадает в логи (Vercel Runtime Logs) и, если настроено,
  // отправляется во внешний канал: Telegram-бот или произвольный webhook.
  console.log("[lead]", JSON.stringify(lead));

  try {
    await forwardLead(lead);
  } catch (err) {
    // Не роняем ответ пользователю, если внешний канал недоступен —
    // заявка уже зафиксирована в логах.
    console.error("[lead] forward failed", err);
  }

  return NextResponse.json({ ok: true });
}

// Куда отправлять заявки на почту (по умолчанию — ящик студии).
const LEAD_TO_EMAIL = process.env.LEAD_TO_EMAIL ?? "perova.natali13@gmail.com";

async function forwardLead(lead: Record<string, string>) {
  const text =
    `🍓 Новая заявка — Студия Малина\n\n` +
    `Имя: ${lead.name}\n` +
    `Контакт: ${lead.contact}\n` +
    `Услуга: ${lead.service}\n` +
    `Сообщение: ${lead.message}`;

  // 1) Email (основной канал).
  // Если задан RESEND_API_KEY — шлём через Resend (можно с красивого домена).
  // Иначе — через FormSubmit: без ключей и регистрации, нужна одноразовая
  // активация по ссылке из первого письма на LEAD_TO_EMAIL.
  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    await sendEmail(resendKey, lead, text);
  } else {
    await sendViaFormSubmit(lead);
  }

  // 2) Telegram — если настроен бот.
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (botToken && chatId) {
    await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
    });
  }

  // 3) Произвольный webhook — если настроен.
  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (webhook) {
    await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
    });
  }
}

async function sendViaFormSubmit(lead: Record<string, string>) {
  const res = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(LEAD_TO_EMAIL)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: `Заявка с сайта: ${lead.name}`,
        _template: "table",
        _captcha: "false",
        Имя: lead.name,
        Контакт: lead.contact,
        Услуга: lead.service,
        Сообщение: lead.message,
      }),
    }
  );

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`FormSubmit ${res.status}: ${detail}`);
  }
}

async function sendEmail(
  apiKey: string,
  lead: Record<string, string>,
  text: string
) {
  // Адрес отправителя: либо проверенный домен (LEAD_FROM_EMAIL),
  // либо тестовый отправитель Resend (работает на доставку на свой ящик).
  const from = process.env.LEAD_FROM_EMAIL ?? "Студия Малина <onboarding@resend.dev>";
  const html = `
    <div style="font-family:Arial,sans-serif;font-size:15px;color:#1c1014">
      <h2 style="color:#c7245a;margin:0 0 12px">🍓 Новая заявка — Студия Малина</h2>
      <p><b>Имя:</b> ${escapeHtml(lead.name)}</p>
      <p><b>Контакт:</b> ${escapeHtml(lead.contact)}</p>
      <p><b>Услуга:</b> ${escapeHtml(lead.service)}</p>
      <p><b>Сообщение:</b> ${escapeHtml(lead.message)}</p>
      <hr style="border:none;border-top:1px solid #eee;margin:16px 0" />
      <p style="color:#777;font-size:13px">Отправлено с malina-studio.vercel.app</p>
    </div>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [LEAD_TO_EMAIL],
      reply_to: lead.contact.includes("@") ? lead.contact : undefined,
      subject: `Заявка с сайта: ${lead.name}`,
      text,
      html,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Resend ${res.status}: ${detail}`);
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
