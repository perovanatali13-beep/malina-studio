import { Logo } from "./Logo";

const nav = [
  { href: "#services", label: "Услуги" },
  { href: "#how", label: "Как работаем" },
  { href: "#cases", label: "Кейсы" },
  { href: "#tech", label: "Технологии" },
  { href: "#about", label: "О студии" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-berry-deep/10 bg-cream/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-5 sm:py-4">
        <a href="#top" aria-label="Студия Малина" className="shrink-0">
          <Logo height={52} priority className="h-9 w-auto sm:h-[52px]" />
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
          className="btn-leaf shrink-0 whitespace-nowrap bg-berry px-3 py-2 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-berry-deep sm:px-5 sm:py-2.5 sm:text-sm"
        >
          Оставить заявку
        </a>
      </div>
    </header>
  );
}
