"use client";

const tools = [
  {
    name: "Airtable",
    color: "#FCB400",
    icon: (
      // Official Airtable logo mark
      <svg viewBox="0 0 200 170" className="w-5 h-5" fill="currentColor">
        <path d="M90 14.3L15.7 44.1c-4 1.6-4 7.1 0 8.7L90.3 82.5c6.2 2.4 13 2.4 19.2 0l74.6-29.7c4-1.6 4-7.1 0-8.7L109.5 14.3C103.3 11.9 96.2 11.9 90 14.3z" />
        <path d="M105.9 94.9v73.3c0 3.5 3.6 5.8 6.8 4.4l83-34.2c2-.8 3.3-2.7 3.3-4.9V60.2c0-3.5-3.6-5.8-6.8-4.4l-83 34.2C107.2 90.8 105.9 92.7 105.9 94.9z" />
        <path d="M88.7 98.5L66.4 88.1l-2.6-1.2L10.3 63.1c-3.3-1.5-7 .8-7 4.4v73c0 2.3 1.4 4.4 3.6 5.1l78.7 28.7c3.2 1.2 6.5-1.2 6.5-4.6V103C92.1 101 90.7 99.4 88.7 98.5z" />
      </svg>
    ),
  },
  {
    name: "Bubble",
    color: "#1BADED",
    icon: (
      // Bubble.io — their iconic stacked circles
      <svg viewBox="0 0 100 100" className="w-5 h-5" fill="currentColor">
        <circle cx="50" cy="50" r="48" opacity="0.25" />
        <circle cx="50" cy="50" r="32" opacity="0.45" />
        <circle cx="50" cy="50" r="18" />
      </svg>
    ),
  },
  {
    name: "n8n",
    color: "#EA4B71",
    icon: (
      // n8n — official logomark path
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12 2a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM5.5 9.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm13 0a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM12 17a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" />
        <path d="M12 6.5v3m-4.5 2.5H5.5m5.5 2.5v3m6.5-5.5h-2.5" strokeWidth="1.5" stroke="currentColor" fill="none" />
      </svg>
    ),
  },
  {
    name: "OpenAI",
    color: "#10A37F",
    icon: (
      // OpenAI official SVG spiral logo
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M22.282 9.821a5.985 5.985 0 00-.516-4.91 6.046 6.046 0 00-6.51-2.9A6.065 6.065 0 004.981 4.18a5.985 5.985 0 00-3.998 2.9 6.046 6.046 0 00.743 7.097 5.98 5.98 0 00.51 4.911 6.051 6.051 0 006.515 2.9A5.985 5.985 0 0013.26 24a6.056 6.056 0 005.772-4.206 5.99 5.99 0 003.997-2.9 6.056 6.056 0 00-.747-7.073zM13.26 22.43a4.476 4.476 0 01-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 00.392-.681v-6.737l2.02 1.168a.071.071 0 01.038.052v5.583a4.504 4.504 0 01-4.494 4.494zM3.6 18.304a4.47 4.47 0 01-.535-3.014l.142.085 4.783 2.759a.771.771 0 00.78 0l5.843-3.369v2.332a.08.08 0 01-.033.062L9.74 19.95a4.5 4.5 0 01-6.14-1.646zM2.34 7.896a4.485 4.485 0 012.366-1.973V11.6a.766.766 0 00.388.676l5.815 3.355-2.02 1.168a.076.076 0 01-.071 0l-4.83-2.786A4.504 4.504 0 012.34 7.872zm16.597 3.855l-5.843-3.369 2.02-1.168a.076.076 0 01.071 0l4.83 2.791a4.494 4.494 0 01-.676 8.105v-5.678a.79.79 0 00-.402-.681zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 00-.785 0L9.409 9.23V6.897a.066.066 0 01.028-.061l4.83-2.787a4.5 4.5 0 016.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 01-.038-.057V6.075a4.5 4.5 0 017.375-3.453l-.142.08L8.704 5.46a.795.795 0 00-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
      </svg>
    ),
  },
  {
    name: "Claude",
    color: "#D4956A",
    icon: (
      // Anthropic / Claude — official A logomark
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M13.827 3.52h3.603L24 20.48h-3.603l-1.422-4.088H8.994l-1.422 4.088H4L10.57 3.52h3.257zm-.401 10.101-2.76-7.988-2.759 7.988h5.519z" />
      </svg>
    ),
  },
  {
    name: "Softr",
    color: "#6674F4",
    icon: (
      // Softr — decreasing stacked bars (their visual identity)
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <rect x="3" y="4" width="18" height="4" rx="2" />
        <rect x="3" y="10" width="13" height="4" rx="2" />
        <rect x="3" y="16" width="8" height="4" rx="2" />
      </svg>
    ),
  },
  {
    name: "Make",
    color: "#6D00CC",
    icon: (
      // Make — their distinctive purple circle-chain logo
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M7.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0a9 9 0 009 0m0 0a4.5 4.5 0 109 0 4.5 4.5 0 00-9 0z" stroke="currentColor" strokeWidth="1.8" fill="none" />
      </svg>
    ),
  },
  {
    name: "Webflow",
    color: "#4353FF",
    icon: (
      // Webflow — official W logo path
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M17.82 8.074S15.83 14.89 15.7 15.3c-.077-.48-1.458-7.226-1.458-7.226C11.988 8.074 10.7 9.92 10.2 11.737c-.077-.434-1.1-3.663-1.1-3.663C6.914 8.074 5.716 10.09 5.716 10.09L3 18.012h4.237s1.127-3.3 1.55-4.58c.077.42 1.156 4.58 1.156 4.58h3.3s1.127-3.3 1.55-4.58c.077.42 1.156 4.58 1.156 4.58h4.237L21 8.074z" />
      </svg>
    ),
  },
];

// Duplicate for seamless loop
const doubled = [...tools, ...tools];

export default function ToolsBanner() {
  return (
    <div className="mt-10 border-y border-white/8 bg-[#0d1f16]/60">
      {/* Label */}
      <div className="text-center pt-4 pb-3 border-b border-white/5">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-white/30">
          Outils & technologies
        </span>
      </div>

      {/* Scrolling strip */}
      <div className="relative overflow-hidden py-4">
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0f2318] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0f2318] to-transparent z-10 pointer-events-none" />

        {/* Marquee */}
        <div className="flex animate-marquee whitespace-nowrap">
          {doubled.map((tool, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-2.5 mx-5 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-white/20 transition-colors duration-200 cursor-default flex-shrink-0"
            >
              <span style={{ color: tool.color }}>{tool.icon}</span>
              <span className="text-sm font-medium text-white/70">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
