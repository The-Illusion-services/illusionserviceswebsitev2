import Image from "next/image";

export default function FounderSpotlight() {
  return (
    <section className="bg-[#EFE8DA]">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[480px]">
        {/* Image */}
        <div className="relative w-full min-h-[360px] md:min-h-[480px]">
          <Image
            src="/client-work/uwakstar/Images/Homepage/founder-spotlight.jpg"
            alt="Uwakstar Designs founder holding a handcrafted Ankara-print clutch in a bright studio."
            fill
            className="object-cover object-top"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center px-8 md:px-16 py-16">
          <p
            className="text-[#B7924A] text-[11px] font-medium tracking-[0.24em] uppercase mb-4"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Founder Spotlight
          </p>
          <h2
            className="text-[#24211D] font-light mb-2"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(32px, 3.5vw, 48px)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Designed with heart,
            <br />
            made to inspire
          </h2>
          <div className="w-10 h-[1px] bg-[#B7924A] my-5" />
          <p
            className="text-[#6F665C] text-[15px] leading-[1.7] mb-8 max-w-[400px]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Uwakstar Designs was born from a love of fabric, culture, and the
            desire to create pieces that empower. Every item is handmade with
            care and a deep respect for tradition.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center self-start bg-[#B7924A] text-white border border-[#B7924A] px-8 py-[14px] text-[11px] font-medium tracking-[0.16em] uppercase hover:bg-[#9a7a3e] hover:border-[#9a7a3e] transition-colors duration-300"
            style={{ fontFamily: "var(--font-body)", minHeight: "46px" }}
          >
            Meet the Founder
          </a>
        </div>
      </div>
    </section>
  );
}
