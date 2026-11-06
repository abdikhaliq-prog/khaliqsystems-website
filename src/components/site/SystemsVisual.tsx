/**
 * Abstract infrastructure visual for the parent-brand hero.
 * Pure CSS/SVG, no imagery — layered grid, orbital rings and node lattice.
 */
export function SystemsVisual() {
  const nodes = [
    { x: 50, y: 18 },
    { x: 20, y: 44 },
    { x: 80, y: 44 },
    { x: 34, y: 76 },
    { x: 66, y: 76 },
    { x: 50, y: 50 },
  ];
  const edges: [number, number][] = [
    [0, 5],
    [1, 5],
    [2, 5],
    [3, 5],
    [4, 5],
    [1, 3],
    [2, 4],
    [0, 1],
    [0, 2],
  ];

  return (
    <div className="relative aspect-square w-full max-w-[520px] select-none">
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--accent)_18%,transparent),transparent_75%)] blur-2xl" />

      <svg
        viewBox="0 0 100 100"
        role="img"
        aria-label="Diagrama abstrato de infraestrutura de sistemas"
        className="relative size-full"
      >
        <defs>
          <linearGradient id="ks-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.65" />
            <stop offset="100%" stopColor="var(--foreground)" stopOpacity="0.12" />
          </linearGradient>
        </defs>

        {[46, 36, 26].map((r, i) => (
          <circle
            key={r}
            cx="50"
            cy="50"
            r={r}
            fill="none"
            stroke="var(--hairline)"
            strokeWidth="0.25"
            strokeDasharray={i === 1 ? "1.2 2.2" : undefined}
          />
        ))}

        {edges.map(([a, b]) => (
          <line
            key={`${a}-${b}`}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="url(#ks-line)"
            strokeWidth="0.3"
          />
        ))}

        {nodes.map((n, i) => (
          <g key={`${n.x}-${n.y}`}>
            <circle
              cx={n.x}
              cy={n.y}
              r={i === 5 ? 3.2 : 1.9}
              fill="var(--background)"
              stroke={i === 5 ? "var(--accent)" : "var(--hairline)"}
              strokeWidth={i === 5 ? "0.5" : "0.35"}
            />
            <circle
              cx={n.x}
              cy={n.y}
              r={i === 5 ? 1.1 : 0.6}
              fill="var(--accent)"
              opacity={i === 5 ? 0.95 : 0.55}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
