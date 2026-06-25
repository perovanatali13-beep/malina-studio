const LEAF =
  "M0 0 C 6 -3 9 -11 5 -20 C 4 -13 -4 -13 -5 -20 C -9 -11 -6 -3 0 0 Z";

function Leaf({ scale = 1 }: { scale?: number }) {
  return (
    <g transform={`scale(${scale})`}>
      <path d={LEAF} fill="#3f7d54" fillOpacity={0.16} />
      <path
        d="M0 -1 L 3 -17"
        stroke="#3f7d54"
        strokeOpacity={0.26}
        strokeWidth={0.9}
        fill="none"
      />
    </g>
  );
}

function BerryCluster({ scale = 1 }: { scale?: number }) {
  return (
    <g transform={`scale(${scale})`}>
      <path
        d="M0 -10 L0 -20"
        stroke="#3f7d54"
        strokeOpacity={0.24}
        strokeWidth={1.4}
        fill="none"
      />
      <g fill="#c7245a" fillOpacity={0.16}>
        {[
          [-6, -6], [0, -6], [6, -6],
          [-9, 0], [-3, 0], [3, 0], [9, 0],
          [-6, 6], [0, 6], [6, 6],
          [-3, 11], [3, 11],
          [0, 15],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={4} />
        ))}
      </g>
      <g fill="#7a1538" fillOpacity={0.1}>
        {[
          [0, -6], [-3, 0], [3, 0], [0, 6], [0, 15],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={1.3} />
        ))}
      </g>
    </g>
  );
}

/** Веточка малины: изогнутый стебель, пара листьев и ягода */
function Sprig({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 130 180" className={className} aria-hidden>
      <path
        d="M20 175 C 40 130 30 90 70 50"
        fill="none"
        stroke="#3f7d54"
        strokeOpacity={0.22}
        strokeWidth={2}
        strokeLinecap="round"
      />
      <g transform="translate(33 120) rotate(-40)">
        <Leaf scale={1.5} />
      </g>
      <g transform="translate(46 88) rotate(34)">
        <Leaf scale={1.35} />
      </g>
      <g transform="translate(74 38) scale(1.4)">
        <BerryCluster />
      </g>
    </svg>
  );
}

/** Абстрактная линия с маленьким листком на конце */
function LineLeaf({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 220" className={className} aria-hidden>
      <path
        d="M10 205 C 70 150 60 110 110 95 C 165 78 150 35 205 15"
        fill="none"
        stroke="#7a1538"
        strokeOpacity={0.2}
        strokeWidth={1.8}
        strokeLinecap="round"
      />
      <g transform="translate(205 15) rotate(120)">
        <Leaf scale={1.6} />
      </g>
    </svg>
  );
}

/** Пара ягод */
function Berries({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      <g transform="translate(40 55)">
        <BerryCluster scale={1.3} />
      </g>
      <g transform="translate(82 80)">
        <BerryCluster scale={0.85} />
      </g>
    </svg>
  );
}

/**
 * Деликатные декоративные объекты в пустых полях по краям страницы.
 * Видны только на широких экранах, чтобы не пересекаться с контентом.
 */
export function Decor() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 hidden overflow-hidden xl:block"
    >
      <LineLeaf className="absolute right-[-28px] top-[110px] h-52 w-52" />
      <Sprig className="absolute left-[-16px] top-[58%] h-60 w-44" />
      <Berries className="absolute right-[18px] top-[86%] h-28 w-28" />
    </div>
  );
}
