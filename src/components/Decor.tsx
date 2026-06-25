// Расположение «зёрнышек» (друплетов), из которых складывается ягода малины
const DRUPELETS: [number, number, number][] = [
  [50, 20, 11],
  [37, 29, 11.5], [63, 29, 11.5],
  [28, 40, 12], [50, 39, 12], [72, 40, 12],
  [31, 53, 12], [50, 52, 12], [69, 53, 12],
  [38, 65, 11.5], [62, 65, 11.5],
  [45, 76, 10.5], [57, 76, 10.5],
  [51, 85, 9.5],
];

/** Реалистичная ягода малины (объёмные зёрнышки с бликами) */
export function Raspberry({
  className = "",
  gid = "rasp",
}: {
  className?: string;
  gid?: string;
}) {
  return (
    <svg viewBox="0 0 100 112" className={className} aria-hidden>
      <defs>
        <radialGradient id={`${gid}-d`} cx="0.36" cy="0.30" r="0.78">
          <stop offset="0" stopColor="#ff95ba" />
          <stop offset="0.5" stopColor="#d6346e" />
          <stop offset="1" stopColor="#7a1538" />
        </radialGradient>
      </defs>
      {/* мягкая тень под ягодой */}
      <ellipse cx="50" cy="100" rx="25" ry="6" fill="#7a1538" opacity="0.12" />
      {/* зёрнышки */}
      {DRUPELETS.map(([cx, cy, r], i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r={r}
          fill={`url(#${gid}-d)`}
          stroke="#5e0c28"
          strokeOpacity="0.3"
          strokeWidth="0.6"
        />
      ))}
      {/* блики */}
      {DRUPELETS.map(([cx, cy, r], i) => (
        <ellipse
          key={`h${i}`}
          cx={cx - r * 0.32}
          cy={cy - r * 0.34}
          rx={r * 0.24}
          ry={r * 0.16}
          fill="#ffffff"
          opacity="0.38"
        />
      ))}
    </svg>
  );
}

/**
 * Несколько ягод малины в пустых полях по краям страницы.
 * Видны только на широких экранах, чтобы не пересекаться с контентом.
 */
export function Decor() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 hidden overflow-hidden xl:block"
    >
      <Raspberry
        gid="d1"
        className="absolute left-1 top-[22%] h-16 w-16 -rotate-12 opacity-90"
      />
      <Raspberry
        gid="d2"
        className="absolute right-2 top-[56%] h-16 w-16 rotate-6 opacity-90"
      />
      <Raspberry
        gid="d3"
        className="absolute left-2 top-[84%] h-14 w-14 rotate-[14deg] opacity-90"
      />
    </div>
  );
}
