import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#F8F5EE] overflow-hidden">
      <div className="w-[min(calc(100%-64px),1280px)] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-0 md:gap-12 min-h-[520px] md:min-h-[600px]">
        {/* Left: text */}
        <div className="py-16 md:py-24 pr-0 md:pr-8 order-2 md:order-1">
          <p
            className="text-[#B7924A] text-[11px] font-medium tracking-[0.24em] uppercase mb-5"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Handcrafted. Cultural. Timeless.
          </p>
          <h1
            className="text-[#24211D] font-light leading-[0.95] tracking-[-0.035em] mb-5"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(52px, 6.5vw, 88px)",
            }}
          >
            Elevate the everyday
          </h1>
          <div className="w-12 h-[1px] bg-[#B7924A] mb-6" />
          <p
            className="text-[#6F665C] text-[15px] leading-[1.7] max-w-[340px] mb-8"
            style={{ fontFamily: "var(--font-body)" }}
          >
            African-print clutches, crossbody bags, and fabric-wrapped
            earrings—designed to celebrate your style and your story.
          </p>
          <a
            href="#shop"
            className="inline-flex items-center justify-center bg-[#B7924A] text-white border border-[#B7924A] px-8 py-[14px] text-[11px] font-medium tracking-[0.16em] uppercase hover:bg-[#9a7a3e] hover:border-[#9a7a3e] transition-colors duration-300"
            style={{ fontFamily: "var(--font-body)", minHeight: "46px" }}
          >
            Shop the Collection
          </a>
        </div>

        {/* Right: image */}
        <div className="relative w-full order-1 md:order-2 h-[340px] md:h-full md:min-h-[600px]">
          <Image
            src="/client-work/uwakstar/Images/Homepage/hero-luxury-still-life.jpg"
            alt="Cream and gold handcrafted Uwakstar crossbody bag with fabric-wrapped earrings and white rose on ivory surface."
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>
    </section>
  );
}
