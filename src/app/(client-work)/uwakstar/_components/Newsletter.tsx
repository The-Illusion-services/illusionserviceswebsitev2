"use client";
import Image from "next/image";

export default function Newsletter() {
  return (
    <section className="relative overflow-hidden bg-[#EFE8DA] py-20 md:py-24">
      {/* Subtle background image */}
      <div className="absolute inset-0 opacity-30">
        <Image
          src="/client-work/uwakstar/Images/Homepage/newsletter-soft-linen-bg.jpg"
          alt=""
          fill
          className="object-cover object-center"
          aria-hidden="true"
        />
      </div>

      <div className="relative w-[min(calc(100%-64px),640px)] mx-auto text-center">
        <h2
          className="text-[#24211D] font-light mb-3"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(30px, 3.5vw, 44px)",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}
        >
          Be the first to know
        </h2>
        <p
          className="text-[#6F665C] text-[15px] leading-[1.7] mb-8"
          style={{ fontFamily: "var(--font-body)" }}
        >
          New arrivals, exclusive offers, and behind-the-scenes
          access—straight to your inbox.
        </p>
        <form
          className="flex flex-col sm:flex-row gap-0 max-w-[480px] mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Enter your email"
            aria-label="Email address"
            className="flex-1 bg-white border border-[#E6DED2] px-5 py-3.5 text-[14px] text-[#24211D] placeholder-[#B8AA98] outline-none focus:border-[#B7924A] transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          />
          <button
            type="submit"
            className="bg-[#B7924A] text-white border border-[#B7924A] px-8 py-3.5 text-[11px] font-medium tracking-[0.16em] uppercase hover:bg-[#9a7a3e] hover:border-[#9a7a3e] transition-colors duration-300 whitespace-nowrap"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Sign Me Up
          </button>
        </form>
      </div>
    </section>
  );
}
