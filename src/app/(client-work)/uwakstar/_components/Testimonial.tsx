export default function Testimonial() {
  return (
    <section className="bg-[#F8F5EE] py-20 md:py-28">
      <div className="w-[min(calc(100%-64px),800px)] mx-auto text-center">
        {/* Quote mark */}
        <div
          className="text-[#B7924A] mb-4 leading-none"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "80px",
            lineHeight: "0.6",
          }}
          aria-hidden="true"
        >
          &ldquo;
        </div>
        <blockquote
          className="text-[#24211D] font-light"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(20px, 2.5vw, 28px)",
            lineHeight: 1.55,
            letterSpacing: "-0.01em",
          }}
        >
          The quality is exceptional and the pieces are even more beautiful in
          person. I get compliments every time I wear them!
        </blockquote>
        <p
          className="text-[#B8AA98] text-[13px] tracking-[0.1em] mt-6"
          style={{ fontFamily: "var(--font-body)" }}
        >
          — Jasmine R.
        </p>
        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <span className="w-2 h-2 rounded-full bg-[#B7924A]" />
          <span className="w-2 h-2 rounded-full bg-[#E6DED2]" />
          <span className="w-2 h-2 rounded-full bg-[#E6DED2]" />
        </div>
      </div>
    </section>
  );
}
