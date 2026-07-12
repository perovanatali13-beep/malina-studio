import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { LeadForm } from "@/components/LeadForm";
import { Logo, RaspberryMark } from "@/components/Logo";
import { cases } from "@/data/cases";

const services = [
  {
    title: "Сайты с админкой",
    desc: "Корпоративные сайты, многостраничники и порталы с собственной панелью управления. Контент редактируется без программиста — через понятную админку.",
    points: ["Своя CMS под задачу", "Каталоги и справочники", "Мультиязычность RU/EN", "Формы и заявки", "SEO и аналитика"],
    price: "от 10 000 ₽",
    icon: "site",
  },
  {
    title: "Лендинги",
    desc: "Продающие одностраничники под продукт, услугу или мероприятие. Быстрая загрузка и структура, ведущая к заявке.",
    points: ["Продуманная структура", "Адаптив под мобильные", "SEO и аналитика", "Форма заявки или бронирования"],
    price: "от 4 000 ₽",
    icon: "landing",
  },
  {
    title: "Технические задания",
    desc: "ТЗ на разработку сайтов и систем: сбор требований, описание архитектуры и API до старта разработки.",
    points: ["Сбор требований", "Архитектура и API", "Сценарии и роли", "Критерии приёмки"],
    price: "от 15 000 ₽",
    icon: "spec",
  },
  {
    title: "Документация",
    desc: "Справки, руководства и инструкции, снижающие нагрузку на поддержку. Превращаю сложное в понятное.",
    points: ["Структура справки", "Инструкции и гайды", "UX-тексты интерфейса", "Аналитика обращений"],
    price: "от 3 000 ₽",
    icon: "docs",
  },
  {
    title: "SEO-настройка",
    desc: "Базовая SEO-оптимизация готового сайта: мета-теги, Яндекс Вебмастер, Google Search Console, аналитика.",
    points: ["Мета-теги и Open Graph", "Яндекс Вебмастер", "Google Search Console", "Яндекс Метрика"],
    price: "от 2 000 ₽",
    icon: "seo",
  },
];

const plans = [
  {
    title: "Лендинг",
    note: "Одностраничник, срок 2–3 дня",
    price: "4 000 ₽",
    popular: false,
    points: [
      "1 страница",
      "Адаптив под мобильные",
      "Форма заявки или кнопка в мессенджер",
      "Базовые мета-теги",
      "Размещение на Vercel",
    ],
  },
  {
    title: "Сайт с админкой",
    note: "До 3 страниц, срок 5–7 дней",
    price: "10 000 ₽",
    popular: true,
    points: [
      "До 3 страниц",
      "Своя CMS — редактируете сами",
      "Адаптив под мобильные",
      "SEO-база + Open Graph",
      "Яндекс Метрика + Вебмастер",
      "Передача всех доступов",
      "Инструкция по управлению",
    ],
  },
  {
    title: "Под ключ",
    note: "Полный цикл, срок от 2 недель",
    price: "35 000 ₽",
    popular: false,
    points: [
      "Неограниченное количество страниц",
      "Своя CMS + мультиязычность",
      "Полная SEO-настройка",
      "Google Analytics + Search Console",
      "Пользовательская документация",
      "1 месяц поддержки включён",
      "Обучение работе с сайтом",
    ],
  },
];

const steps = [
  {
    n: "01",
    title: "Разбираюсь в задаче",
    desc: "Интервью, сбор требований и метрик. Фиксирую цель, аудиторию и то, как будет измеряться результат.",
  },
  {
    n: "02",
    title: "Проектирую",
    desc: "Структура, сценарии, архитектура и при необходимости ТЗ. Договариваюсь обо всём до того, как написана первая строчка кода.",
  },
  {
    n: "03",
    title: "Создаю",
    desc: "Разработка сайта или лендинга с админкой, настройка SEO и аналитики. Использую современный стек и AI-инструменты, чтобы двигаться быстрее.",
  },
  {
    n: "04",
    title: "Сопровождаю",
    desc: "Документация, обучение и поддержка. Вы можете сами управлять контентом, а я остаюсь на связи.",
  },
];

const tech = [
  {
    title: "Код на GitHub",
    desc: "Исходный код проекта храню на GitHub — прозрачная история изменений и версионирование на каждом этапе.",
  },
  {
    title: "Хостинг на Vercel",
    desc: "Размещаю сайт на современном хостинге Vercel: быстрая загрузка, HTTPS и стабильная работа без вашего участия.",
  },
  {
    title: "Доступы — у вас",
    desc: "Передаю заказчику все доступы: к репозиторию, хостингу и домену. Проект полностью ваш, без привязки ко мне.",
  },
  {
    title: "Яндекс Метрика",
    desc: "Подключаю и настраиваю Яндекс Метрику, чтобы видеть посещаемость, источники трафика и поведение пользователей.",
  },
  {
    title: "Яндекс Вебмастер",
    desc: "Регистрирую сайт в Яндекс Вебмастере для корректной индексации и контроля над позициями в поиске.",
  },
  {
    title: "Google Analytics и Search Console",
    desc: "Настраиваю Google Analytics для сквозной аналитики и целей, а также подключаю Google Search Console для индексации и контроля сайта в Google.",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main id="top" className="flex-1 overflow-x-hidden">
        <Hero />
        <Services />
        <How />
        <Cases />
        <Tech />
        <Pricing />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -right-32 -top-24 h-96 w-96 rounded-full bg-berry-bright/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 top-40 h-72 w-72 rounded-full bg-leaf/10 blur-3xl" />
      <div className="mx-auto max-w-6xl px-5 pb-20 pt-20 sm:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_360px]">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 rounded-full border border-berry/20 bg-white/60 px-4 py-1.5 text-sm font-medium text-berry-deep">
              <RaspberryMark className="h-4 w-4" /> Веб-студия разработки сайтов
            </span>
            <h1 className="mt-6 font-display text-[2rem] font-bold leading-[1.1] tracking-tight text-ink sm:text-6xl sm:leading-[1.05] md:text-7xl">
              Создаю <span className="text-berry">сайты</span>,
              <br />
              которые работают
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:mt-6 sm:text-lg">
              Лендинги, сайты и порталы под ключ — с понятной админкой, SEO-базой
              и документацией. Все доступы передаю вам.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="btn-leaf bg-berry px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-berry-deep"
              >
                Обсудить проект
              </a>
              <a
                href="#cases"
                className="btn-leaf border border-berry-deep/15 px-7 py-3.5 text-base font-semibold text-ink transition-colors hover:border-berry hover:text-berry"
              >
                Смотреть кейсы
              </a>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-12 gap-y-6">
              {[
                ["15+", "лет в IT"],
                ["30+", "проектов"],
                ["3", "дня — средний срок лендинга"],
              ].map(([big, small]) => (
                <div key={small}>
                  <div className="font-display text-3xl font-bold text-berry sm:text-4xl">
                    {big}
                  </div>
                  <div className="mt-1 max-w-[9rem] text-sm text-ink-soft">
                    {small}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <FounderCard />
        </div>
      </div>
    </section>
  );
}

function FounderCard() {
  return (
    <div className="reveal rounded-3xl border border-berry-deep/10 bg-white p-7 shadow-sm">
      <div className="flex items-center gap-4">
        <Image
          src="/founder.jpg"
          alt="Наталья Малинина — основатель студии Малина"
          width={250}
          height={269}
          className="h-20 w-20 rounded-full object-cover"
        />
        <div>
          <div className="font-display text-xl font-semibold text-ink">
            Наталья Малинина
          </div>
          <div className="text-sm text-ink-soft">
            Основатель · Веб-разработчик
          </div>
        </div>
      </div>
      <p className="mt-5 leading-relaxed text-ink-soft">
        Делаю сайты, которые клиенты умеют использовать сами. Работаю с
        AI-инструментами — это даёт скорость без потери качества. Каждый проект
        передаю с документацией и понятной админкой.
      </p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {["Next.js", "Vercel", "SEO", "AI-разработка", "Figma"].map((t) => (
          <li
            key={t}
            className="rounded-full bg-cream-deep px-3 py-1 text-sm font-medium text-berry-deep"
          >
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ServiceIcon({ name }: { name: string }) {
  const common = {
    fill: "none",
    stroke: "var(--color-berry)",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  const paths: Record<string, React.ReactNode> = {
    site: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" {...common} />
        <path d="M3 8h18M7 6h.01M10 6h.01" {...common} />
      </>
    ),
    landing: (
      <>
        <rect x="6" y="3" width="12" height="18" rx="2" {...common} />
        <path d="M9 7h6M9 11h6M9 15h3" {...common} />
      </>
    ),
    spec: (
      <>
        <path d="M7 3h7l4 4v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" {...common} />
        <path d="M14 3v4h4M9 13l2 2 3-4" {...common} />
      </>
    ),
    docs: (
      <>
        <path d="M5 4a1 1 0 0 1 1-1h8l5 5v11a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4z" {...common} />
        <path d="M14 3v5h5M9 12h6M9 16h4" {...common} />
      </>
    ),
    seo: (
      <>
        <circle cx="11" cy="11" r="7" {...common} />
        <path d="M21 21l-4.3-4.3M8.5 11l2 2 3.5-3.5" {...common} />
      </>
    ),
  };
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <SectionHead
        eyebrow="Услуги"
        title="Пять услуг, один подход"
        text="От идеи до готового продукта с документацией. Закрываю всю цепочку или подключаюсь на нужном этапе."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <article
            key={s.title}
            className="group flex flex-col rounded-3xl border border-berry-deep/10 bg-white p-7 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-berry/8">
              <ServiceIcon name={s.icon} />
            </div>
            <h3 className="mt-5 font-display text-2xl font-semibold text-ink">
              {s.title}
            </h3>
            <p className="mt-3 leading-relaxed text-ink-soft">{s.desc}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {s.points.map((p) => (
                <li
                  key={p}
                  className="rounded-full bg-cream-deep px-3 py-1 text-sm font-medium text-berry-deep"
                >
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-auto flex items-center justify-between pt-6">
              <span className="font-semibold text-berry">{s.price}</span>
              <a
                href="#contact"
                className="text-sm font-semibold text-berry transition-colors hover:text-berry-deep"
              >
                Обсудить →
              </a>
            </div>
          </article>
        ))}
        <article className="flex flex-col justify-center rounded-3xl border border-berry/30 bg-berry/5 p-7">
          <h3 className="font-display text-2xl font-semibold text-ink">
            Не знаете, что нужно?
          </h3>
          <p className="mt-3 leading-relaxed text-ink-soft">
            Расскажите задачу — вместе разберёмся, какой формат подойдёт.
            Консультация бесплатно, без обязательств.
          </p>
          <a
            href="#contact"
            className="btn-leaf mt-6 inline-block bg-berry px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-berry-deep"
          >
            Обсудить задачу
          </a>
        </article>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="bg-cream-deep/40">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <SectionHead
          eyebrow="Цены"
          title="Прозрачные цены под задачу"
          text="Точную стоимость назову после разбора задачи. Ниже — ориентир по основным форматам."
        />
        <div className="mt-12 grid items-start gap-5 md:grid-cols-3">
          {plans.map((p) => (
            <article
              key={p.title}
              className={`relative flex flex-col rounded-3xl bg-white p-7 shadow-sm transition-shadow hover:shadow-md ${
                p.popular
                  ? "border-2 border-berry shadow-md"
                  : "border border-berry-deep/10"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-berry px-4 py-1 text-xs font-bold text-white">
                  ⭐ Популярный
                </span>
              )}
              <h3 className="font-display text-2xl font-semibold text-ink">
                {p.title}
              </h3>
              <div className="mt-4 flex items-baseline gap-1.5">
                <span className="text-sm text-ink-soft">от</span>
                <span className="font-display text-4xl font-bold text-berry">
                  {p.price}
                </span>
              </div>
              <p className="mt-2 text-sm text-ink-soft">{p.note}</p>
              <ul className="mb-8 mt-6 space-y-2.5">
                {p.points.map((point) => (
                  <li key={point} className="flex gap-2.5 text-ink">
                    <span className="text-berry">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`btn-leaf mt-auto inline-block px-6 py-3 text-center text-sm font-semibold transition-colors ${
                  p.popular
                    ? "bg-berry text-white hover:bg-berry-deep"
                    : "border border-berry text-berry hover:bg-berry hover:text-white"
                }`}
              >
                {p.popular ? "Заказать сайт" : "Обсудить проект"}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function How() {
  return (
    <section id="how" className="bg-berry-deep text-cream">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <SectionHead
          dark
          eyebrow="Как работаю"
          title="Прозрачный процесс без сюрпризов"
          text="Договариваемся обо всём до старта разработки и измеряем результат метриками, а не ощущениями."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.n} className="relative">
              <div className="font-display text-5xl font-bold text-berry-bright/70">
                {step.n}
              </div>
              <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-cream/70">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cases() {
  return (
    <section id="cases" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <SectionHead
        eyebrow="Кейсы"
        title="Проекты, которые работают"
        text="Живые сайты, которые можно открыть и потрогать: сайты с собственной админкой и мультиязычностью, лендинги с онлайн-бронированием и оплатой."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {cases.map((c) => (
          <article
            key={c.slug}
            className="group flex flex-col overflow-hidden rounded-3xl border border-berry-deep/10 bg-white shadow-sm transition-shadow hover:shadow-md"
          >
            {c.shots[0] && (
              <Link
                href={`/cases/${c.slug}`}
                className="block overflow-hidden border-b border-berry-deep/10"
              >
                <Image
                  src={c.shots[0].src}
                  alt={c.shots[0].alt}
                  width={c.shots[0].width}
                  height={c.shots[0].height}
                  className="aspect-[16/10] w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </Link>
            )}
            <div className="flex flex-1 flex-col p-6">
              <span
                className={`inline-block w-fit rounded-full px-3 py-1 text-sm font-medium ${
                  c.accent === "leaf"
                    ? "bg-leaf/10 text-leaf"
                    : "bg-berry/10 text-berry"
                }`}
              >
                {c.tag}
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold text-ink">
                {c.title}
              </h3>
              <p className="mt-2 leading-relaxed text-ink-soft">{c.subtitle}</p>
              <Link
                href={`/cases/${c.slug}`}
                className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-berry transition-colors hover:text-berry-deep"
              >
                Подробнее о проекте
                <span aria-hidden>→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Tech() {
  return (
    <section id="tech" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <SectionHead
        eyebrow="Технологии"
        title="Прозрачно и под ваш контроль"
        text="Выкладываю проект на GitHub и размещаю на хостинге Vercel, передаю все доступы заказчику и настраиваю аналитику — Яндекс Метрику, Вебмастер и Google Analytics."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {tech.map((t) => (
          <article
            key={t.title}
            className="rounded-3xl border border-berry-deep/10 bg-white p-7 shadow-sm transition-shadow hover:shadow-md"
          >
            <RaspberryMark className="h-7 w-7" />
            <h3 className="mt-5 font-display text-xl font-semibold text-ink">
              {t.title}
            </h3>
            <p className="mt-3 leading-relaxed text-ink-soft">{t.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHead eyebrow="Обо мне" />
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            Я <b className="text-ink">более 15 лет</b> в IT. За это время делала
            сайты и порталы, писала технические задания, проектировала интерфейсы
            и переписывала документацию так, чтобы пользователи находили ответы
            сами, а поддержка получала меньше обращений.
          </p>
          <div className="mt-8 space-y-5">
            {[
              [
                "Скорость без потери качества",
                "Лендинг — 2–3 дня, многостраничник — неделя. AI-инструменты ускоряют работу, структуру и контент всегда проверяю вручную.",
              ],
              [
                "Все доступы — ваши",
                "Передаю код на GitHub, хостинг на Vercel, домен. Сайт полностью ваш, без привязки ко мне.",
              ],
              [
                "Документация к каждому проекту",
                "К сайту прилагается инструкция — как редактировать контент, добавлять страницы, что делать если что-то пошло не так.",
              ],
            ].map(([t, d]) => (
              <div key={t} className="flex gap-4">
                <RaspberryMark className="h-7 w-7 shrink-0" />
                <div>
                  <div className="font-semibold text-ink">{t}</div>
                  <div className="text-sm text-ink-soft">{d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-berry-deep/10 bg-white p-8 text-center shadow-sm">
          <Image
            src="/founder.jpg"
            alt="Наталья Малинина — веб-разработчик"
            width={250}
            height={269}
            className="mx-auto h-28 w-28 rounded-full object-cover"
          />
          <div className="mt-5 font-display text-2xl font-semibold text-ink">
            Наталья Малинина
          </div>
          <div className="mt-1 text-sm text-ink-soft">
            Веб-разработчик · Основатель студии
          </div>
          <blockquote className="mt-6 border-l-2 border-berry pl-4 text-left text-lg italic leading-relaxed text-ink-soft">
            «Мой принцип — превращать сложное в понятное: и для пользователей,
            которые заходят на сайт, и для команды, которая будет его развивать.»
          </blockquote>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-cream-deep/50">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHead
              eyebrow="Заявка"
              title="Расскажите о вашем проекте"
              text="Опишите задачу — предложу решение, оценю сроки и пришлю релевантные примеры. Отвечу в течение одного рабочего дня."
            />
            <ul className="mt-8 space-y-4">
              {[
                "Бесплатная консультация и оценка задачи",
                "Подберу формат: сайт, лендинг, ТЗ или документация",
                "Пришлю примеры работ под ваш проект",
              ].map((t) => (
                <li key={t} className="flex gap-3 text-ink">
                  <span className="text-berry">✓</span>
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/79159911292"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-leaf inline-flex items-center justify-center gap-2 bg-berry px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-berry-deep"
              >
                WhatsApp +7 915 991-12-92
              </a>
              <a
                href="mailto:malina.studio26@yandex.com"
                className="btn-leaf inline-flex items-center justify-center gap-2 border border-berry-deep/15 px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-berry hover:text-berry"
              >
                malina.studio26@yandex.com
              </a>
            </div>
          </div>
          <LeadForm />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-berry-deep/10 bg-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row">
        <Logo />
        <p className="text-sm text-ink-soft">
          © {new Date().getFullYear()} Студия Малина — разработка и создание
          сайтов под ключ.
        </p>
        <a
          href="#contact"
          className="text-sm font-semibold text-berry hover:text-berry-deep"
        >
          Оставить заявку →
        </a>
      </div>
    </footer>
  );
}

function SectionHead({
  eyebrow,
  title,
  text,
  dark = false,
}: {
  eyebrow: string;
  title?: string;
  text?: string;
  dark?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <span
        className={`text-sm font-bold uppercase tracking-[0.18em] ${
          dark ? "text-berry-bright" : "text-berry"
        }`}
      >
        {eyebrow}
      </span>
      {title ? (
        <h2
          className={`mt-3 font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl ${
            dark ? "text-cream" : "text-ink"
          }`}
        >
          {title}
        </h2>
      ) : null}
      {text ? (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            dark ? "text-cream/70" : "text-ink-soft"
          }`}
        >
          {text}
        </p>
      ) : null}
    </div>
  );
}
