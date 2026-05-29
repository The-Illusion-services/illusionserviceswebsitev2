import Image from "next/image";

const products = [
  {
    name: "Ankara Zip Clutch — Red Wave",
    price: "$35.00",
    image: "/client-work/uwakstar/Images/Homepage/product-ankara-zip-clutch-red-wave.jpg",
    alt: "Red and blue Ankara-print zip clutch with handcrafted details.",
  },
  {
    name: "Luxe Crossbody — Champagne Gold",
    price: "$129.00",
    image: "/client-work/uwakstar/Images/Homepage/product-luxe-crossbody-champagne-gold.jpg",
    alt: "Champagne gold handcrafted crossbody bag with chain strap.",
  },
  {
    name: "Royal Wrap Hoops",
    price: "$24.00",
    image: "/client-work/uwakstar/Images/Homepage/product-royal-wrap-hoops.jpg",
    alt: "Blue and orange fabric-wrapped hoop earrings on a soft ivory background.",
  },
  {
    name: "Sunset Wrap Drops",
    price: "$26.00",
    image: "/client-work/uwakstar/Images/Homepage/product-sunset-wrap-drops.jpg",
    alt: "Orange and black fabric-wrapped drop earrings on a neutral background.",
  },
];

function HeartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B8AA98" strokeWidth="1.5">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  );
}

export default function Bestsellers() {
  return (
    <section className="bg-[#F8F5EE] py-20 md:py-28">
      <div className="w-[min(calc(100%-64px),1280px)] mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p
            className="text-[#B7924A] text-[11px] font-medium tracking-[0.24em] uppercase mb-3"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Bestsellers
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
            Customer favorites
          </h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">
          {products.map((p) => (
            <div key={p.name} className="group flex flex-col">
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#EFE8DA]">
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <button
                  aria-label={`Save ${p.name}`}
                  className="absolute top-3 right-3 p-1.5 bg-white/80 hover:bg-white transition-colors rounded-sm"
                >
                  <HeartIcon />
                </button>
              </div>
              <div className="pt-3 pb-1">
                <p
                  className="text-[#24211D] text-[13px] leading-[1.4] mb-1"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {p.name}
                </p>
                <p
                  className="text-[#6F665C] text-[13px]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {p.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <a
            href="#"
            className="inline-flex items-center justify-center bg-[#B7924A] text-white border border-[#B7924A] px-10 py-[14px] text-[11px] font-medium tracking-[0.16em] uppercase hover:bg-[#9a7a3e] hover:border-[#9a7a3e] transition-colors duration-300"
            style={{ fontFamily: "var(--font-body)", minHeight: "46px" }}
          >
            Shop All Bestsellers
          </a>
        </div>
      </div>
    </section>
  );
}
