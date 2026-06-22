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

async function forwardLead(lead: Record<string, string>) {
  const text =
    `🍓 Новая заявка — Студия Малина\n\n` +
    `Имя: ${lead.name}\n` +
    `Контакт: ${lead.contact}\n` +
    `Услуга: ${lead.service}\n` +
    `Сообщение: ${lead.message}`;

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (botToken && chatId) {
    await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
    });
    return;
  }

  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (webhook) {
    await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
    });
  }
}
