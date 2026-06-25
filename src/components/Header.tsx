import { Logo } from "./Logo";
import { Raspberry } from "./Decor";

const nav = [
  { href: "#services", label: "Услуги" },
  { href: "#how", label: "Как работаем" },
  { href: "#cases", label: "Кейсы" },
  { href: "#about", label: "О студии" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-berry-deep/10 bg-cream/80 backdrop-blur-md">
      <Raspberry
        gid="hdr"
        className="pointer-events-none absolute right-3 top-1/2 hidden h-16 w-16 -translate-y-1/2 -rotate-12 xl:block"
      />
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" aria-label="Студия Малина">
          <Logo height={52} priority />
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-berry"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-berry px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-berry-deep"
        >
          Оставить заявку
        </a>
      </div>
    </header>
  );
}
