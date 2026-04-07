"use client";

const tools = [
  {
    name: "Airtable",
    color: "#FCB400",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M11.625.8L1.075 4.988a.823.823 0 000 1.528l10.55 4.19a1.65 1.65 0 001.25 0l10.55-4.19a.823.823 0 000-1.528L13.875.8a1.65 1.65 0 00-1.25 0zM.823 10.54a.823.823 0 00-.823.822v8.254a.823.823 0 001.084.778l9.328-3.275a.823.823 0 00.54-.778v-8.254a.823.823 0 00-1.085-.778L.823 10.54zm22.354 0l-9.044-3.231a.823.823 0 00-1.085.778v8.047a.823.823 0 00.54.778l9.044 3.231a.823.823 0 001.085-.778v-8.047a.823.823 0 00-.54-.778z" />
      </svg>
    ),
  },
  {
    name: "Bubble",
    color: "#4FA6F5",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <circle cx="12" cy="12" r="10" opacity="0.3" />
        <circle cx="12" cy="12" r="6" opacity="0.5" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    name: "n8n",
    color: "#EF6633",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <rect x="2" y="8" width="5" height="8" rx="2.5" />
        <rect x="9.5" y="8" width="5" height="8" rx="2.5" />
        <rect x="17" y="8" width="5" height="8" rx="2.5" />
        <line x1="7" y1="12" x2="9.5" y2="12" stroke="currentColor" strokeWidth="1.5" />
        <line x1="14.5" y1="12" x2="17" y2="12" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: "OpenAI",
    color: "#10A37F",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M22.282 9.821a5.985 5.985 0 00-.516-4.91 6.046 6.046 0 00-6.51-2.9A6.065 6.065 0 004.981 4.18a5.985 5.985 0 00-3.998 2.9 6.046 6.046 0 00.743 7.097 5.98 5.98 0 00.51 4.911 6.051 6.051 0 006.515 2.9A5.985 5.985 0 0013.26 24a6.056 6.056 0 005.772-4.206 5.99 5.99 0 003.997-2.9 6.056 6.056 0 00-.747-7.073zM13.26 22.43a4.476 4.476 0 01-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 00.392-.681v-6.737l2.02 1.168a.071.071 0 01.038.052v5.583a4.504 4.504 0 01-4.494 4.494zM3.6 18.304a4.47 4.47 0 01-.535-3.014l.142.085 4.783 2.759a.771.771 0 00.78 0l5.843-3.369v2.332a.08.08 0 01-.033.062L9.74 19.95a4.5 4.5 0 01-6.14-1.646zM2.34 7.896a4.485 4.485 0 012.366-1.973V11.6a.766.766 0 00.388.676l5.815 3.355-2.02 1.168a.076.076 0 01-.071 0l-4.83-2.786A4.504 4.504 0 012.34 7.872zm16.597 3.855l-5.843-3.369 2.02-1.168a.076.076 0 01.071 0l4.83 2.791a4.494 4.494 0 01-.676 8.105v-5.678a.79.79 0 00-.402-.681zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 00-.785 0L9.409 9.23V6.897a.066.066 0 01.028-.061l4.83-2.787a4.5 4.5 0 016.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 01-.038-.057V6.075a4.5 4.5 0 017.375-3.453l-.142.08L8.704 5.46a.795.795 0 00-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
      </svg>
    ),
  },
  {
    name: "Claude",
    color: "#D4956A",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M4.709 15.955l4.72-2.647.08-.23-.08-.128-4.72.08-.3-.302.133-4.72.23-.08.128.08-.08 4.72.302.3 4.72-.133.08.23-.23.128-4.72 2.647-.23-.08-.133-4.72.302-.3 4.72.08.08.128-.08.23-4.72 2.647-.128.08.128.23 4.72-2.647.23.08.133 4.72-.302.3-4.72-.08-.08-.128.08-.23z" />
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z" opacity="0.4" />
      </svg>
    ),
  },
  {
    name: "Softr",
    color: "#5473E8",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M19 7H5a1 1 0 000 2h14a1 1 0 000-2zM15 11H5a1 1 0 000 2h10a1 1 0 000-2zM11 15H5a1 1 0 000 2h6a1 1 0 000-2z" />
      </svg>
    ),
  },
  {
    name: "Make",
    color: "#9B59B6",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <circle cx="5" cy="12" r="2.5" />
        <circle cx="12" cy="12" r="2.5" />
        <circle cx="19" cy="12" r="2.5" />
        <path d="M7.5 12h2M14.5 12h2" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
  {
    name: "Webflow",
    color: "#4353FF",
    icon: (
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
    <div className="relative border-y border-white/8 bg-[#0d1f16]/60 py-5 overflow-hidden">
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0f2318] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0f2318] to-transparent z-10 pointer-events-none" />

      {/* Label */}
      <div className="absolute left-6 inset-y-0 z-20 hidden md:flex items-center">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-white/30 whitespace-nowrap">
          Outils & technos
        </span>
      </div>

      {/* Marquee */}
      <div className="flex animate-marquee whitespace-nowrap md:ml-40">
        {doubled.map((tool, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-2.5 mx-6 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-white/20 transition-colors duration-200 cursor-default"
          >
            <span style={{ color: tool.color }}>{tool.icon}</span>
            <span className="text-sm font-medium text-white/70">{tool.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
