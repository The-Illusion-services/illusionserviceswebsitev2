const values = [
  {
    label: "Handcrafted",
    description: "Each piece is carefully handmade.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#B7924A" strokeWidth="1.25">
        <path d="M18 28s-10-6-10-13a6 6 0 0110-4.6A6 6 0 0128 15c0 7-10 13-10 13z" />
        <path d="M14 12c1-2 2.5-3 4-3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Quality Materials",
    description: "Premium fabrics and thoughtful details.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#B7924A" strokeWidth="1.25">
        <path d="M18 4 Q22 10 28 12 Q22 14 18 22 Q14 14 8 12 Q14 10 18 4Z" />
        <path d="M18 22v8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Rooted in Culture",
    description: "Inspired by African heritage and art.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#B7924A" strokeWidth="1.25">
        <ellipse cx="18" cy="19" rx="10" ry="12" />
        <path d="M18 7 C16 10 14 13 14 19 C14 25 16 28 18 31" />
        <path d="M18 7 C20 10 22 13 22 19 C22 25 20 28 18 31" />
        <line x1="8" y1="16" x2="28" y2="16" />
        <line x1="8" y1="22" x2="28" y2="22" />
      </svg>
    ),
  },
  {
    label: "Made for You",
    description: "Timeless designs that celebrate your style.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#B7924A" strokeWidth="1.25">
        <polygon points="18,5 21.5,14 31,14 23.5,19.5 26.5,29 18,23 9.5,29 12.5,19.5 5,14 14.5,14" />
      </svg>
    ),
  },
  {
    label: "Small Business",
    description: "Thank you for supporting a dream and a purpose.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#B7924A" strokeWidth="1.25">
        <path d="M18 28s-10-6.5-10-13.5a6 6 0 0110-4.6A6 6 0 0128 14.5C28 21.5 18 28 18 28z" />
      </svg>
    ),
  },
];

export default function WhyUwakstar() {
  return (
    <section className="bg-[#FFFCF7] py-20 md:py-28">
      <div className="w-[min(calc(100%-64px),1280px)] mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <p
            className="text-[#B7924A] text-[11px] font-medium tracking-[0.24em] uppercase mb-3"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Why Uwakstar
          </p>
          <h2
            className="text-[#24211D] font-light"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(34px, 4vw, 52px)",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
            }}
          >
            More than accessories—made with meaning
          </h2>
          <div className="w-10 h-[1px] bg-[#B7924A] mx-auto mt-5" />
        </div>

        {/* Values */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6">
          {values.map((v) => (
            <div key={v.label} className="flex flex-col items-center text-center gap-3">
              <div>{v.icon}</div>
              <p
                className="text-[#24211D] text-[12px] font-semibold tracking-[0.06em] uppercase"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {v.label}
              </p>
              <p
                className="text-[#6F665C] text-[13px] leading-[1.6]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
