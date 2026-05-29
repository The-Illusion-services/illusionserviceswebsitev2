import Image from "next/image";

const collections = [
  {
    name: "Clutches",
    description: "Effortless style for every occasion.",
    image: "/client-work/uwakstar/Images/Homepage/collection-clutches.jpg",
    alt: "Colorful Ankara-print clutch arranged on a soft ivory boutique surface.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#B7924A" strokeWidth="1.25">
        <rect x="6" y="13" width="24" height="16" rx="2" />
        <path d="M13 13v-2a5 5 0 0110 0v2" />
        <line x1="14" y1="21" x2="22" y2="21" />
      </svg>
    ),
  },
  {
    name: "Crossbody Bags",
    description: "Designed for life on the go.",
    image: "/client-work/uwakstar/Images/Homepage/collection-crossbody-bags.jpg",
    alt: "Champagne gold crossbody bag styled on a neutral luxury background.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#B7924A" strokeWidth="1.25">
        <rect x="8" y="14" width="20" height="15" rx="2" />
        <path d="M14 14v-3a4 4 0 018 0v3" />
        <path d="M4 17 Q18 10 32 17" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Fabric-Wrapped Earrings",
    description: "Bold, lightweight, unforgettable.",
    image: "/client-work/uwakstar/Images/Homepage/collection-fabric-wrapped-earrings.jpg",
    alt: "Fabric-wrapped Ankara hoop earrings displayed on a minimal gold stand.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#B7924A" strokeWidth="1.25">
        <circle cx="13" cy="20" r="6" />
        <circle cx="23" cy="20" r="6" />
        <line x1="13" y1="8" x2="13" y2="14" />
        <line x1="23" y1="8" x2="23" y2="14" />
        <circle cx="13" cy="7" r="1.5" />
        <circle cx="23" cy="7" r="1.5" />
      </svg>
    ),
  },
];

export default function Collections() {
  return (
    <section className="bg-[#FFFCF7] py-20 md:py-28">
      <div className="w-[min(calc(100%-64px),1280px)] mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p
            className="text-[#B7924A] text-[11px] font-medium tracking-[0.24em] uppercase mb-3"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Shop by Collection
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
            Find your perfect piece
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map((c) => (
            <div key={c.name} className="group flex flex-col">
              {/* Image */}
              <div className="relative w-full aspect-[3/2] overflow-hidden">
                <Image
                  src={c.image}
                  alt={c.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              {/* Card body */}
              <div className="border border-t-0 border-[#E6DED2] px-6 py-6 flex flex-col items-center text-center flex-1">
                <div className="mt-1 mb-3">{c.icon}</div>
                <h3
                  className="text-[#24211D] text-[13px] font-medium tracking-[0.12em] uppercase mb-1"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {c.name}
                </h3>
                <p
                  className="text-[#6F665C] text-[13px] leading-[1.6] mb-4"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {c.description}
                </p>
                <a
                  href="#"
                  className="text-[#24211D] text-[11px] font-medium tracking-[0.14em] uppercase inline-flex items-center gap-1 hover:text-[#B7924A] transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Shop Now →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
