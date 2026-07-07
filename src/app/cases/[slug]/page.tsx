import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Logo, RaspberryMark } from "@/components/Logo";
import { cases, getCase, type Shot } from "@/data/cases";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) return {};
  return {
    title: `${c.title} — кейс Студии Малина`,
    description: c.subtitle,
    keywords: [
      c.title,
      `${c.title} кейс`,
      "пример разработки сайта",
      "кейс разработки сайта",
      "сайт с админкой пример",
      "пример сайта с понятной админкой",
      "мультиязычный сайт пример",
      "заказать сайт как в кейсе",
      "студия Малина",
    ],
    alternates: {
      canonical: `/cases/${c.slug}`,
    },
    openGraph: {
      title: `${c.title} — кейс Студии Малина`,
      description: c.subtitle,
      url: `https://malina-studio.online/cases/${c.slug}`,
      type: "article",
      images: c.shots[0] ? [c.shots[0].src] : undefined,
    },
  };
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) notFound();

  const accentChip =
    c.accent === "leaf" ? "bg-leaf/10 text-leaf" : "bg-berry/10 text-berry";

  const caseUrl = `https://malina-studio.online/cases/${c.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        name: `${c.title} — кейс Студии Малина`,
        headline: c.title,
        description: c.subtitle,
        url: caseUrl,
        inLanguage: "ru-RU",
        image: c.shots[0]
          ? `https://malina-studio.online${c.shots[0].src}`
          : undefined,
        author: { "@type": "Organization", name: "Студия Малина" },
        publisher: { "@id": "https://malina-studio.online/#organization" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Главная",
            item: "https://malina-studio.online",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Кейсы",
            item: "https://malina-studio.online/#cases",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: c.title,
            item: caseUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CaseHeader />
      <main className="flex-1">
        {/* Hero / описание */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute -right-32 -top-24 h-96 w-96 rounded-full bg-berry-bright/15 blur-3xl" />
          <div className="mx-auto max-w-6xl px-5 pb-12 pt-12 sm:pt-16">
            <Link
              href="/#cases"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink-soft transition-colors hover:text-berry"
            >
              <span aria-hidden>←</span> Все кейсы
            </Link>

            <div className="mt-8 grid gap-10 lg:grid-cols-5">
              <div className="lg:col-span-3">
                <span
                  className={`inline-block rounded-full px-3 py-1 text-sm font-medium ${accentChip}`}
                >
                  {c.tag}
                </span>
                <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
                  {c.title}
                </h1>
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
                  {c.subtitle}
                </p>

                <h2 className="mt-8 text-sm font-bold uppercase tracking-wide text-berry-deep">
                  Что сделали
                </h2>
                <ul className="mt-3 space-y-2.5">
                  {c.did.map((d) => (
                    <li key={d} className="flex gap-3 text-ink-soft">
                      <Bullet />
                      <span className="leading-relaxed">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-2">
                <div className="rounded-3xl border border-berry-deep/10 bg-white p-7 shadow-sm">
                  <h2 className="text-sm font-bold uppercase tracking-wide text-berry-deep">
                    Преимущества
                  </h2>
                  <ul className="mt-3 space-y-3">
                    {c.wins.map((w) => (
                      <li key={w} className="flex gap-3">
                        <span className="mt-0.5 text-berry">✓</span>
                        <span className="leading-relaxed text-ink">{w}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-leaf mt-7 inline-flex w-full items-center justify-center gap-2 bg-berry px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-berry-deep"
                  >
                    Открыть сайт
                    <span aria-hidden>↗</span>
                  </a>
                  <p className="mt-2 text-center text-xs text-ink-soft">
                    {c.urlLabel}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Скриншоты сайта */}
        {c.shots.length > 0 && (
          <Gallery
            eyebrow="Как выглядит сайт"
            title="Публичная часть"
            shots={c.shots}
            columns="sm:grid-cols-2 lg:grid-cols-3"
          />
        )}

        {/* Скриншоты админки */}
        {c.admin.length > 0 && (
          <section className="bg-berry-deep text-cream">
            <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-berry-bright">
                Админ-панель
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-cream sm:text-4xl">
                Контентом управляет заказчик
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-cream/70">
                Собственная панель управления: новости, страницы, справочники и
                пользователи редактируются без разработчика.
              </p>
              <div className="mt-10 grid gap-6 lg:grid-cols-2">
                {c.admin.map((shot) => (
                  <figure
                    key={shot.src}
                    className="overflow-hidden rounded-2xl border border-cream/10 bg-cream/5 shadow-sm"
                  >
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      width={shot.width}
                      height={shot.height}
                      className="h-auto w-full"
                    />
                    <figcaption className="px-5 py-3 text-sm text-cream/70">
                      {shot.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <div className="rounded-3xl border border-berry-deep/10 bg-cream-deep/50 p-8 text-center sm:p-12">
            <h2 className="font-display text-3xl font-bold text-ink">
              Хотите такой же проект?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-ink-soft">
              Расскажите о вашей задаче — предложим решение, оценим сроки и
              пришлём релевантные примеры.
            </p>
            <Link
              href="/#contact"
              className="btn-leaf mt-7 inline-flex items-center gap-2 bg-berry px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-berry-deep"
            >
              Обсудить проект
            </Link>
          </div>
        </section>
      </main>
      <CaseFooter />
    </>
  );
}

function Gallery({
  eyebrow,
  title,
  shots,
  columns,
}: {
  eyebrow: string;
  title: string;
  shots: Shot[];
  columns: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
      <span className="text-sm font-bold uppercase tracking-[0.18em] text-berry">
        {eyebrow}
      </span>
      <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      <div className={`mt-10 grid gap-6 ${columns}`}>
        {shots.map((shot) => (
          <figure
            key={shot.src}
            className="overflow-hidden rounded-2xl border border-berry-deep/10 bg-white shadow-sm"
          >
            <Image
              src={shot.src}
              alt={shot.alt}
              width={shot.width}
              height={shot.height}
              className="h-auto w-full"
            />
            <figcaption className="px-5 py-3 text-sm text-ink-soft">
              {shot.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function CaseHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-berry-deep/10 bg-cream/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" aria-label="Студия Малина">
          <Logo height={52} priority />
        </Link>
        <Link
          href="/#contact"
          className="btn-leaf bg-berry px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-berry-deep"
        >
          Оставить заявку
        </Link>
      </div>
    </header>
  );
}

function CaseFooter() {
  return (
    <footer className="border-t border-berry-deep/10 bg-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row">
        <Link href="/" aria-label="Студия Малина">
          <Logo />
        </Link>
        <p className="flex items-center gap-2 text-sm text-ink-soft">
          <RaspberryMark className="h-4 w-4" />© {new Date().getFullYear()}{" "}
          Студия Малина
        </p>
        <Link
          href="/#contact"
          className="text-sm font-semibold text-berry hover:text-berry-deep"
        >
          Оставить заявку →
        </Link>
      </div>
    </footer>
  );
}

function Bullet() {
  return <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-berry" />;
}
