const publications = [
  { name: "bella & co.", style: "italic" },
  { name: "VERVE", style: "normal" },
  { name: "The Collective", style: "italic" },
  { name: "WOVEN", style: "normal" },
  { name: "LUXE LIVING", style: "normal" },
  { name: "STYLE & SOUL", style: "normal" },
];

export default function AsSeenIn() {
  return (
    <section className="bg-[#FFFCF7] py-16 md:py-20">
      <div className="w-[min(calc(100%-64px),1280px)] mx-auto">
        <p
          className="text-center text-[#B8AA98] text-[11px] font-medium tracking-[0.24em] uppercase mb-10"
          style={{ fontFamily: "var(--font-body)" }}
        >
          As Seen In
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16">
          {publications.map((p) => (
            <span
              key={p.name}
              className="text-[#B8AA98] hover:text-[#7A6040] transition-colors duration-200"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(16px, 2vw, 22px)",
                fontStyle: p.style,
                letterSpacing: "0.04em",
              }}
            >
              {p.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
