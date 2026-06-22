import Image from "next/image";

const LOGO_RATIO = 538 / 524;

export function Logo({
  height = 48,
  priority = false,
  className = "",
}: {
  height?: number;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Image
      src="/logo.png"
      alt="Студия Малина"
      width={Math.round(height * LOGO_RATIO)}
      height={height}
      priority={priority}
      className={className}
    />
  );
}

export function RaspberryMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      {/* leaf */}
      <path
        d="M20 10c-1.5-4-5.5-6.5-9.5-6 0 4 2.5 7.8 6.6 9.2"
        stroke="var(--color-leaf)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* berry cluster */}
      {[
        [20, 16],
        [15.2, 19],
        [24.8, 19],
        [17.6, 23.5],
        [22.4, 23.5],
        [20, 28],
      ].map(([cx, cy], i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r="3.4"
          fill={i % 2 === 0 ? "var(--color-berry)" : "var(--color-berry-deep)"}
        />
      ))}
    </svg>
  );
}
