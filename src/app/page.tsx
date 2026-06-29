import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { LeadForm } from "@/components/LeadForm";
import { Logo, RaspberryMark } from "@/components/Logo";
import { cases } from "@/data/cases";

const services = [
  {
    title: "Сайты с админкой",
    desc: "Разработка веб-сайтов под ключ: корпоративные сайты, многостраничники и порталы с собственной панелью управления. Контент, новости, каталоги и заявки редактируются без программиста — через понятную админку.",
    points: ["Своя CMS под задачу", "Каталоги и справочники", "Мультиязычность", "Формы и заявки", "SEO и аналитика"],
    icon: "site",
  },
  {
    title: "Лендинги",
    desc: "Продающие одностраничники под продукт, услугу или мероприятие. Быстрая загрузка, аналитика и понятная структура, которая ведёт к заявке.",
    points: ["Продуманная структура", "SEO и аналитика", "Адаптив под мобильные"],
    icon: "landing",
  },
  {
    title: "Технические задания",
    desc: "ТЗ на разработку сайтов и систем: интервью с заказчиком, сбор требований, описание архитектуры и API до старта разработки.",
    points: ["Сбор требований", "Архитектура и API", "Сценарии и роли", "Критерии приёмки"],
    icon: "spec",
  },
  {
    title: "Пользовательская документация",
    desc: "Справки, руководства и инструкции, которые снижают нагрузку на поддержку. Превращаем сложное в понятное — для пользователей и команды.",
    points: ["Структура справки", "Инструкции и гайды", "UX-тексты интерфейса", "Аналитика обращений"],
    icon: "docs",
  },
];

const steps = [
  {
    n: "01",
    title: "Разбираемся в задаче",
    desc: "Интервью, сбор требований и метрик. Фиксируем цель, аудиторию и то, как будет измеряться результат.",
  },
  {
    n: "02",
    title: "Проектируем",
    desc: "Структура, сценарии, архитектура и при необходимости ТЗ. Договариваемся обо всём до того, как написана первая строчка кода.",
  },
  {
    n: "03",
    title: "Создаём",
    desc: "Разработка сайта или лендинга с админкой, настройка SEO и аналитики. Используем современный стек и AI-инструменты, чтобы двигаться быстрее.",
  },
  {
    n: "04",
    title: "Сопровождаем",
    desc: "Документация, обучение и поддержка. Вы можете сами управлять контентом, а мы остаёмся на связи.",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main id="top" className="flex-1">
        <Hero />
        <Services />
        <How />
        <Cases />
        <Portfolio />
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
      <div className="mx-auto max-w-6xl px-5 pb-20 pt-20 sm:pt-28">
        <div className="reveal max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-berry/20 bg-white/60 px-4 py-1.5 text-sm font-medium text-berry-deep">
            <RaspberryMark className="h-4 w-4" /> Веб-студия разработки сайтов
          </span>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl">
            Превращаем сложное
            <br />
            в <span className="text-berry">понятное</span>, решаем задачи
            бизнеса
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            Мы создаём веб-сайты под ключ: сайты с собственной понятной
            админкой, лендинги, интернет-магазины, технические задания на
            разработку и пользовательскую документацию. Делаем продукты,
            которыми удобно пользоваться и легко управлять.
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
        </div>

        <div className="reveal mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-berry-deep/10 bg-berry-deep/10 sm:grid-cols-4">
          {[
            ["Под ключ", "от ТЗ до документации"],
            ["4", "ключевых услуги"],
            ["Своя CMS", "под каждую задачу"],
            ["RU / EN", "мультиязычные сайты"],
          ].map(([big, small]) => (
            <div key={small} className="bg-cream px-5 py-6">
              <div className="font-display text-2xl font-bold text-berry">
                {big}
              </div>
              <div className="mt-1 text-sm text-ink-soft">{small}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
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
        eyebrow="Что мы делаем"
        title="Четыре услуги, один подход"
        text="От идеи до готового продукта с документацией. Можем закрыть всю цепочку или подключиться на нужном этапе."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {services.map((s) => (
          <article
            key={s.title}
            className="group rounded-3xl border border-berry-deep/10 bg-white p-7 shadow-sm transition-shadow hover:shadow-md"
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
          </article>
        ))}
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
          eyebrow="Как создаём"
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
        text="Два публичных проекта, которые можно открыть и потрогать. Каждый — с собственной админкой и мультиязычностью."
      />
      <div className="mt-12 space-y-12">
        {cases.map((c) => (
          <article key={c.slug}>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <span
                  className={`inline-block rounded-full px-3 py-1 text-sm font-medium ${
                    c.accent === "leaf"
                      ? "bg-leaf/10 text-leaf"
                      : "bg-berry/10 text-berry"
                  }`}
                >
                  {c.tag}
                </span>
                <h3 className="mt-4 font-display text-3xl font-bold text-ink">
                  {c.title}
                </h3>
                <p className="mt-2 max-w-xl text-ink-soft">{c.subtitle}</p>
              </div>
              <Link
                href={`/cases/${c.slug}`}
                className="btn-leaf inline-flex items-center gap-2 bg-berry px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-berry-deep"
              >
                Подробнее о проекте
                <span aria-hidden>→</span>
              </Link>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {c.shots.map((shot) => (
                <Link
                  key={shot.src}
                  href={`/cases/${c.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-berry-deep/10 bg-white shadow-sm transition-shadow hover:shadow-md"
                >
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={shot.width}
                    height={shot.height}
                    className="h-auto w-full transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </Link>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-4">
      <div className="rounded-3xl border border-dashed border-berry/30 bg-white/60 p-8 text-center sm:p-10">
        <h3 className="font-display text-2xl font-semibold text-ink">
          Портфолио по запросу
        </h3>
        <p className="mx-auto mt-3 max-w-2xl text-ink-soft">
          Технические задания на разработку сайтов и систем, примеры лендингов и
          пользовательской документации показываем индивидуально — пришлём
          релевантные вашему проекту примеры по запросу.
        </p>
        <a
          href="#contact"
          className="btn-leaf mt-6 inline-block border border-berry px-6 py-3 text-sm font-semibold text-berry transition-colors hover:bg-berry hover:text-white"
        >
          Запросить примеры
        </a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHead eyebrow="О студии" />
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-soft">
            <p>
              Мы <b className="text-ink">более 15 лет</b> в IT. За это время
              делали сайты и порталы, писали технические задания, проектировали
              интерфейсы и переписывали документацию так, чтобы пользователи
              находили ответы сами, а поддержка получала меньше обращений.
            </p>
            <p>
              Наш принцип —{" "}
              <b className="text-ink">превращать сложное в понятное</b>: и для
              пользователей, которые заходят на сайт, и для команды, которая
              будет его развивать. Поэтому к каждому проекту прилагаются понятная
              админка и документация.
            </p>
            <p>
              Работаем на современном стеке, используем AI-инструменты для
              скорости, настраиваем SEO и аналитику, чтобы решения приносили
              измеримый результат.
            </p>
            <p>
              Наша веб-студия закрывает весь цикл — создание и разработка
              веб-сайтов под ключ, от лендинга до корпоративного сайта и
              интернет-магазина, настройка SEO для продвижения в поисковых
              системах, а затем поддержка и развитие сайта.
            </p>
          </div>
        </div>
        <div className="rounded-3xl border border-berry-deep/10 bg-white p-8 shadow-sm">
          <Logo height={84} className="mb-6" />
          <div className="space-y-5">
            {[
              ["Сайты с админкой", "Управляете контентом сами — без разработчика"],
              ["Документация", "Снижаем нагрузку на поддержку"],
              ["ТЗ и аналитика", "Договариваемся обо всём до старта"],
              ["SEO и метрики", "Решения с измеримым результатом"],
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
              text="Опишите задачу — предложим решение, оценим сроки и пришлём релевантные примеры. Ответим в течение одного рабочего дня."
            />
            <ul className="mt-8 space-y-4">
              {[
                "Бесплатная консультация и оценка задачи",
                "Подберём формат: сайт, лендинг, ТЗ или документация",
                "Пришлём примеры работ под ваш проект",
              ].map((t) => (
                <li key={t} className="flex gap-3 text-ink">
                  <span className="text-berry">✓</span>
                  {t}
                </li>
              ))}
            </ul>
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
          className={`mt-3 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl ${
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
