"use client";

import { useState } from "react";

const services = [
  "Сайт с админкой",
  "Лендинг",
  "Техническое задание",
  "Пользовательская документация",
  "Другое / не определился",
];

type Status = "idle" | "loading" | "success" | "error";

export function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      contact: String(formData.get("contact") ?? ""),
      service: String(formData.get("service") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Не удалось отправить заявку");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Что-то пошло не так");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-leaf/30 bg-white p-10 text-center shadow-sm">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-leaf/10 text-2xl">
          🍓
        </div>
        <h3 className="font-display text-2xl font-semibold text-ink">
          Заявка отправлена!
        </h3>
        <p className="mt-3 text-ink-soft">
          Спасибо. Свяжемся с вами в течение одного рабочего дня и обсудим
          задачу.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-berry hover:text-berry-deep"
        >
          Отправить ещё одну заявку
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-berry-deep/10 bg-white p-7 shadow-sm sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Как вас зовут *">
          <input
            name="name"
            required
            minLength={2}
            placeholder="Имя"
            className="form-input"
          />
        </Field>
        <Field label="Email или телефон *">
          <input
            name="contact"
            required
            placeholder="you@mail.com или +7…"
            className="form-input"
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Что нужно сделать">
          <select name="service" defaultValue="" className="form-input">
            <option value="" disabled>
              Выберите услугу
            </option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Расскажите о задаче">
          <textarea
            name="message"
            rows={4}
            placeholder="Пара слов о проекте, сроках и о том, что уже есть"
            className="form-input resize-none"
          />
        </Field>
      </div>

      {status === "error" && (
        <p className="mt-4 text-sm font-medium text-berry-deep">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-leaf mt-6 w-full bg-berry px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-berry-deep disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Отправляем…" : "Отправить заявку"}
      </button>
      <p className="mt-4 text-center text-xs text-ink-soft/80">
        Нажимая кнопку, вы соглашаетесь на обработку контактных данных для
        ответа на заявку.
      </p>

      <style>{`
        .form-input {
          width: 100%;
          border-radius: 0.9rem;
          border: 1px solid color-mix(in srgb, var(--color-berry-deep) 15%, transparent);
          background: var(--color-cream);
          padding: 0.7rem 0.95rem;
          font-size: 0.95rem;
          color: var(--color-ink);
          outline: none;
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        .form-input::placeholder { color: color-mix(in srgb, var(--color-ink-soft) 60%, transparent); }
        .form-input:focus {
          border-color: var(--color-berry);
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-berry) 18%, transparent);
        }
      `}</style>
    </form>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-ink">{label}</span>
      {children}
    </label>
  );
}
