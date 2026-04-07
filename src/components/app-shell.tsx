"use client";

import { startTransition, useEffect, useMemo, useState } from "react";

type SectionId = "home" | "gallery" | "contact" | "pricing" | "team";

type Slide = {
  id: string;
  tone: string;
  variant: "monolith" | "steps" | "portal" | "ledger" | "studio" | "stack";
};

type Project = {
  id: string;
  name: string;
  title: string;
  summary: string;
  note: string;
  year: string;
  sector: string;
  client: string;
  tags: string[];
  accent: string;
  height: string;
  slides: Slide[];
};

type TeamMember = {
  name: string;
  role: string;
  note: string;
};

type PricingPlan = {
  name: string;
  price: string;
  cadence: string;
  summary: string;
  items: string[];
};

type ContactLink = {
  label: string;
  href: string;
};

type PhoneNumber = {
  label: string;
  href: string;
  value: string;
};

type AppShellProps = {
  initialSection?: SectionId;
};

const sectionPathMap: Record<SectionId, string> = {
  home: "/",
  gallery: "/gallery",
  contact: "/contact",
  pricing: "/pricing",
  team: "/team",
};

const tabBar: Array<{ section: SectionId; label: string; icon: string }> = [
  { section: "home", label: "Home", icon: "home" },
  { section: "gallery", label: "Gallery", icon: "photo_library" },
  { section: "contact", label: "Contact Us", icon: "mail" },
  { section: "pricing", label: "Pricing", icon: "payments" },
  { section: "team", label: "Team", icon: "groups" },
];

const projects: Project[] = [
  {
    id: "foodhunt",
    name: "FoodHunt",
    title: "The Dispatch Table",
    summary:
      "A marketplace designed to feel immediate, warm, and operationally disciplined across the entire ordering journey.",
    note:
      "The system relied on intentional hierarchy, dense service states, and a visual rhythm that kept movement legible under pressure.",
    year: "2024",
    sector: "Commerce",
    client: "FoodHunt",
    tags: ["Next.js", "Node.js", "Realtime"],
    accent: "#f97316",
    height: "min-h-[27rem]",
    slides: [
      { id: "fh-1", tone: "from-[#2f231b] to-[#161312]", variant: "portal" },
      { id: "fh-2", tone: "from-[#33271f] to-[#161312]", variant: "studio" },
      { id: "fh-3", tone: "from-[#2a211d] to-[#111111]", variant: "stack" },
    ],
  },
  {
    id: "dzpatch",
    name: "DzPatch",
    title: "The Silent Grid",
    summary:
      "An operational logistics interface built to make routing, fulfillment, and dispatch feel almost invisible.",
    note:
      "We compressed complexity into a quiet operational surface so teams could move faster without visual panic.",
    year: "2025",
    sector: "Logistics",
    client: "DzPatch",
    tags: ["Systems", "Frontend", "Ops"],
    accent: "#22c55e",
    height: "min-h-[22rem]",
    slides: [
      { id: "dz-1", tone: "from-[#1c2724] to-[#121414]", variant: "steps" },
      { id: "dz-2", tone: "from-[#24322b] to-[#0e1110]", variant: "monolith" },
      { id: "dz-3", tone: "from-[#192421] to-[#101010]", variant: "portal" },
    ],
  },
  {
    id: "novypay",
    name: "NovyPay",
    title: "The Quiet Ledger",
    summary:
      "A payment product language centered on trust, speed, and calm financial visibility for modern African businesses.",
    note:
      "Noise was removed aggressively, letting spacing, contrast, and motion carry the feeling of confidence.",
    year: "2025",
    sector: "Fintech",
    client: "NovyPay",
    tags: ["Fintech", "UI/UX", "Platform"],
    accent: "#8b5cf6",
    height: "min-h-[30rem]",
    slides: [
      { id: "np-1", tone: "from-[#211b33] to-[#111113]", variant: "ledger" },
      { id: "np-2", tone: "from-[#261e39] to-[#141318]", variant: "monolith" },
      { id: "np-3", tone: "from-[#1a1730] to-[#0f1012]", variant: "studio" },
    ],
  },
  {
    id: "xworks",
    name: "X-Works",
    title: "The Chain Atelier",
    summary:
      "A decentralized marketplace framed as a product of ritual, precision, and quiet confidence.",
    note:
      "The work leaned into contrast and atmosphere so advanced systems felt inviting rather than intimidating.",
    year: "2024",
    sector: "Web3",
    client: "X-Works",
    tags: ["Web3", "Smart Contracts", "Product"],
    accent: "#f59e0b",
    height: "min-h-[24rem]",
    slides: [
      { id: "xw-1", tone: "from-[#2e2316] to-[#111111]", variant: "stack" },
      { id: "xw-2", tone: "from-[#3b2810] to-[#121212]", variant: "portal" },
      { id: "xw-3", tone: "from-[#261b0d] to-[#101010]", variant: "ledger" },
    ],
  },
  {
    id: "academy",
    name: "Illusion Academy",
    title: "The Learning Chamber",
    summary:
      "An on-chain learning surface built with a slower, more ceremonial sense of progression.",
    note:
      "Each interaction was designed to feel considered, almost architectural, rather than dashboard-like.",
    year: "2025",
    sector: "Education",
    client: "Illusion Academy",
    tags: ["Education", "Motion", "Web3"],
    accent: "#38bdf8",
    height: "min-h-[26rem]",
    slides: [
      { id: "ac-1", tone: "from-[#132635] to-[#0f1112]", variant: "steps" },
      { id: "ac-2", tone: "from-[#183140] to-[#111315]", variant: "studio" },
      { id: "ac-3", tone: "from-[#102734] to-[#0f1011]", variant: "monolith" },
    ],
  },
];

const socials: ContactLink[] = [
  { label: "Instagram", href: "https://instagram.com/illusionservices" },
  { label: "LinkedIn", href: "https://linkedin.com/company/illusionservices" },
  { label: "X / Twitter", href: "https://x.com/illusionservices" },
  { label: "Behance", href: "https://behance.net/illusionservices" },
];

const phoneNumbers: PhoneNumber[] = [
  { label: "Studio", href: "tel:+2348012345678", value: "+234 801 234 5678" },
  { label: "Projects", href: "tel:+2348098765432", value: "+234 809 876 5432" },
];

const plans: PricingPlan[] = [
  {
    name: "Starter",
    price: "$2.5k",
    cadence: "per engagement",
    summary: "For landing pages, focused product surfaces, and fast validation work.",
    items: ["1 focused product surface", "Design + frontend build", "2 weeks delivery"],
  },
  {
    name: "Signature",
    price: "$6k",
    cadence: "per engagement",
    summary: "For serious brands that need a polished product experience from concept to launch.",
    items: ["Multi-page product experience", "UX systems + implementation", "4 to 6 weeks delivery"],
  },
  {
    name: "Retainer",
    price: "$3k",
    cadence: "monthly",
    summary: "For teams that want an ongoing design and engineering partner with steady momentum.",
    items: ["Ongoing product refinement", "Priority iteration cycles", "Weekly planning touchpoints"],
  },
];

const team: TeamMember[] = [
  {
    name: "Umoha",
    role: "Creative Direction",
    note: "Shapes the tone, visual restraint, and editorial feel of every surface.",
  },
  {
    name: "Amina",
    role: "Product Design",
    note: "Translates complexity into interfaces that feel immediate and legible.",
  },
  {
    name: "David",
    role: "Engineering",
    note: "Builds the systems layer so the experience stays calm under real use.",
  },
];

function pathToSection(pathname: string): SectionId {
  if (pathname === "/gallery") return "gallery";
  if (pathname === "/contact") return "contact";
  if (pathname === "/pricing") return "pricing";
  if (pathname === "/team") return "team";
  return "home";
}

function SlideScene({ slide, accent }: { slide: Slide; accent: string }) {
  return (
    <div className={`relative h-full w-full overflow-hidden bg-gradient-to-b ${slide.tone}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.09),transparent_32%)]" />
      {slide.variant === "monolith" ? (
        <>
          <div className="absolute bottom-[10%] left-[8%] right-[8%] h-[20%] bg-[linear-gradient(180deg,#d9dbda,#a9aeac)] shadow-[0_-12px_30px_rgba(255,255,255,0.08)]" />
          <div className="absolute bottom-[28%] left-[34%] h-[42%] w-[20%] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(210,210,210,0.68))] shadow-[0_30px_80px_rgba(0,0,0,0.35)]" />
          <div className="absolute bottom-[28%] left-[28%] h-[35%] w-[12%] bg-black/30" />
        </>
      ) : null}
      {slide.variant === "steps" ? (
        <>
          <div className="absolute bottom-[12%] left-[6%] h-[14%] w-[44%] bg-[linear-gradient(180deg,#ccd0cf,#98a09e)]" />
          <div className="absolute bottom-[12%] left-[42%] h-[10%] w-[38%] bg-[linear-gradient(180deg,#d5d8d7,#aab0ae)]" />
          <div className="absolute bottom-[12%] right-[7%] h-[18%] w-[18%] bg-[linear-gradient(180deg,#c2c6c4,#8f9693)]" />
          <div className="absolute bottom-[26%] right-[8%] top-[14%] w-[12%] bg-[linear-gradient(180deg,rgba(255,255,255,0.75),rgba(183,194,190,0.45))]" />
        </>
      ) : null}
      {slide.variant === "portal" ? (
        <>
          <div className="absolute bottom-[18%] left-[16%] right-[16%] h-[26%] rounded-t-[3rem] bg-[linear-gradient(90deg,#c9cbc9,#ececeb,#b8bbbb)] blur-[0.4px]" />
          <div className="absolute bottom-[33%] left-[36%] h-[34%] w-[18%] bg-black/35" />
          <div
            className="absolute bottom-[24%] left-[44%] h-[46%] w-[22%]"
            style={{ background: `linear-gradient(180deg, rgba(255,255,255,0.9), ${accent}22)` }}
          />
          <div className="absolute bottom-[14%] left-0 right-0 h-[16%] bg-[linear-gradient(180deg,#d5d5d4,#aeaeac)]" />
        </>
      ) : null}
      {slide.variant === "ledger" ? (
        <>
          <div className="absolute inset-x-[14%] top-[16%] bottom-[17%] rounded-[2rem] bg-[#0e1014] shadow-[0_20px_70px_rgba(0,0,0,0.35)]" />
          <div className="absolute left-[22%] right-[22%] top-[25%] h-[8%] rounded-full bg-white/6" />
          <div className="absolute left-[22%] right-[22%] top-[38%] h-[18%] rounded-[1.25rem]" style={{ background: `${accent}33` }} />
          <div className="absolute left-[22%] right-[22%] top-[61%] h-[6%] rounded-full bg-white/8" />
          <div className="absolute left-[22%] right-[30%] top-[72%] h-[6%] rounded-full bg-white/8" />
        </>
      ) : null}
      {slide.variant === "studio" ? (
        <>
          <div className="absolute bottom-[12%] left-[8%] right-[8%] h-[18%] bg-[linear-gradient(180deg,#d5d7d6,#a8acab)]" />
          <div className="absolute bottom-[30%] left-[22%] h-[34%] w-[16%] bg-black/30" />
          <div className="absolute bottom-[24%] left-[40%] h-[42%] w-[24%] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(201,201,201,0.65))]" />
        </>
      ) : null}
      {slide.variant === "stack" ? (
        <>
          <div className="absolute bottom-[12%] left-[10%] right-[10%] h-[14%] bg-[linear-gradient(180deg,#d2d3d2,#a8aaaa)]" />
          <div className="absolute bottom-[28%] left-[22%] h-[18%] w-[22%] bg-[linear-gradient(180deg,#c9cbca,#919493)]" />
          <div className="absolute bottom-[33%] left-[48%] h-[28%] w-[22%] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(202,202,202,0.64))]" />
          <div className="absolute bottom-[40%] left-[36%] h-[16%] w-[12%] bg-black/25" />
        </>
      ) : null}
    </div>
  );
}

function HomeSection() {
  return (
    <section className="mx-auto grid h-full w-full max-w-7xl grid-cols-1 gap-10 py-10 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-20 md:py-12">
      <div>
        <h1 className="font-headline text-6xl leading-[0.95] tracking-[-0.05em] text-white md:text-[6.1rem]">
          Software isn&apos;t <span className="italic">built.</span>
          <br />
          It&apos;s written.
        </h1>

        <div className="mt-10 max-w-xl border-l border-stone-800 pl-6 md:ml-24 md:pl-7">
          <p className="font-headline text-2xl italic leading-relaxed text-stone-300 md:text-[2rem]">
            We treat every line of code as a personal letter to the user:
            intentional, precise, and human. We&apos;re here to help you build
            something that actually matters.
          </p>
        </div>
      </div>

      <div className="justify-self-center md:justify-self-end">
        <div className="aspect-[4/5] w-full max-w-[21rem] overflow-hidden bg-stone-950 md:max-w-[25rem]">
          <img
            alt="Macro shot of a fountain pen nib touching textured paper"
            className="h-full w-full object-cover grayscale"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA31VjwJxG5BfxwnB0EPfMUJjNHckKreP9rHQ_VxR385pEHLnGJ_pXKttVLpA6svy28_-XVOIWHR76HSos5r8xznQnp6vusYmne06-9-5posUK76ZpNYRNd0n_aWIkUZln4Rxbd50XVpnES-cX0AN0zMK9DdpSapRKYBLW_qVVPyfoq9abIEX8J41wz9FPGv9DqCDM34DP3g1Dh-moVpL1v8tu0n88ZXG87eKfUA"
          />
        </div>
      </div>
    </section>
  );
}

function GallerySection({
  onOpenProject,
}: {
  onOpenProject: (id: string) => void;
}) {
  return (
    <section className="h-full overflow-y-auto no-scrollbar">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 py-8 md:grid-cols-[0.72fr_1.28fr] md:items-start md:gap-10 md:py-10">
        <div className="max-w-lg md:sticky md:top-10">
          <h1 className="font-headline text-[4rem] leading-[0.94] tracking-[-0.055em] text-white md:text-[4.8rem] xl:text-[5.2rem]">
            Selected
            <br />
            <span className="italic text-stone-300">Works.</span>
          </h1>
          <p className="mt-8 max-w-sm border-l border-stone-700 pl-5 font-headline text-[1.08rem] italic leading-relaxed text-stone-300 md:ml-8">
            Open one and the story unfolds.
          </p>
        </div>

        <div className="columns-1 gap-4 space-y-4 md:columns-2 xl:columns-3">
          {projects.map((project) => (
            <button
              key={project.id}
              className={`group mb-4 block w-full break-inside-avoid overflow-hidden border border-white/10 bg-[#111111] text-left transition-transform duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-[#141414] ${project.height}`}
              onClick={() => onOpenProject(project.id)}
              type="button"
            >
              <div className="flex h-full flex-col">
                <div className="relative min-h-[16rem] flex-1 overflow-hidden">
                  <SlideScene slide={project.slides[0]} accent={project.accent} />
                </div>
                <div className="border-t border-white/6 p-4 md:p-5">
                  <div className="flex items-center justify-between gap-4">
                    <h2 className="font-headline text-3xl text-white">{project.name}</h2>
                    <span className="h-3 w-3 rounded-full" style={{ backgroundColor: project.accent }} />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-stone-400">{project.summary}</p>
                  <div className="mt-5 flex items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="border border-white/10 px-2.5 py-1 font-label text-[10px] uppercase tracking-[0.18em] text-stone-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="font-label text-[11px] uppercase tracking-[0.25em] text-stone-500 transition-colors group-hover:text-white">
                      Open
                    </span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="h-full overflow-y-auto no-scrollbar md:overflow-hidden">
      <div className="mx-auto grid h-full w-full max-w-7xl gap-5 py-6 md:grid-cols-[1.1fr_0.9fr] md:items-stretch md:py-8">
        <div className="flex h-full flex-col border border-white/10 bg-[#0b0b0b] p-5 sm:p-6 md:p-7">
          <p className="font-label text-[10px] uppercase tracking-[0.3em] text-stone-500">
            Contact Us
          </p>
          <h1 className="mt-4 max-w-lg font-headline text-[2.8rem] leading-[0.92] tracking-[-0.05em] text-white md:text-[3.6rem] xl:text-[4rem]">
            Let&apos;s make
            <br />
            it clear.
          </h1>
          <p className="mt-4 max-w-xl border-l border-stone-800 pl-4 font-headline text-[0.95rem] italic leading-relaxed text-stone-300 md:pl-5">
            Send the brief. We&apos;ll shape the right scope fast.
          </p>

          <form className="mt-6 grid flex-1 grid-cols-1 gap-4 md:grid-cols-2">
            <label className="grid gap-2">
              <span className="font-label text-[10px] uppercase tracking-[0.28em] text-stone-500">
                Name
              </span>
              <input
                type="text"
                placeholder="Your name"
                className="border border-white/10 bg-[#111111] px-4 py-2.5 font-headline text-[0.98rem] text-white outline-none transition-colors placeholder:text-stone-600 focus:border-white/25"
              />
            </label>

            <label className="grid gap-2">
              <span className="font-label text-[10px] uppercase tracking-[0.28em] text-stone-500">
                Email
              </span>
              <input
                type="email"
                placeholder="you@company.com"
                className="border border-white/10 bg-[#111111] px-4 py-2.5 font-headline text-[0.98rem] text-white outline-none transition-colors placeholder:text-stone-600 focus:border-white/25"
              />
            </label>

            <label className="grid gap-2 md:col-span-2">
              <span className="font-label text-[10px] uppercase tracking-[0.28em] text-stone-500">
                Project Type
              </span>
              <input
                type="text"
                placeholder="Product design, web app, platform..."
                className="border border-white/10 bg-[#111111] px-4 py-2.5 font-headline text-[0.98rem] text-white outline-none transition-colors placeholder:text-stone-600 focus:border-white/25"
              />
            </label>

            <label className="grid gap-2 md:col-span-2">
              <span className="font-label text-[10px] uppercase tracking-[0.28em] text-stone-500">
                Message
              </span>
              <textarea
                placeholder="What are we building?"
                rows={4}
                className="resize-none border border-white/10 bg-[#111111] px-4 py-3 font-headline text-[0.98rem] text-white outline-none transition-colors placeholder:text-stone-600 focus:border-white/25"
              />
            </label>

            <button
              type="submit"
              className="mt-1 inline-flex w-fit items-center gap-3 bg-white px-6 py-3 font-label text-[10px] uppercase tracking-[0.3em] text-black transition-colors hover:bg-stone-200 md:col-span-2"
            >
              Send Inquiry
              <span className="material-symbols-outlined text-[18px]">north_east</span>
            </button>
          </form>
        </div>

        <aside className="grid h-full gap-4 border border-white/10 bg-[#080808] p-5 sm:p-6 md:p-7">
          <div className="border border-white/8 bg-[#101010] p-4 md:p-5">
            <p className="font-label text-[10px] uppercase tracking-[0.3em] text-stone-500">
              Reach Directly
            </p>
            <div className="mt-4 space-y-3">
              <a
                href="mailto:hello@illusionservices.com"
                className="block font-headline text-[1.15rem] text-white transition-colors hover:text-stone-300 xl:text-[1.3rem]"
              >
                hello@illusionservices.com
              </a>
              <a
                href="mailto:projects@illusionservices.com"
                className="block font-headline text-[0.95rem] italic text-stone-400 transition-colors hover:text-white"
              >
                projects@illusionservices.com
              </a>
            </div>
          </div>

          <div className="border border-white/8 bg-[#101010] p-4 md:p-5">
            <p className="font-label text-[10px] uppercase tracking-[0.3em] text-stone-500">
              Phone Numbers
            </p>
            <div className="mt-4 grid gap-3">
              {phoneNumbers.map((phone) => (
                <a
                  key={phone.value}
                  href={phone.href}
                  className="flex items-center justify-between gap-4 border border-white/8 bg-[#0c0c0c] px-3 py-3 transition-colors hover:border-white/20 hover:bg-[#141414]"
                >
                  <span className="font-label text-[10px] uppercase tracking-[0.24em] text-stone-500">
                    {phone.label}
                  </span>
                  <span className="font-headline text-[0.98rem] text-white">
                    {phone.value}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="border border-white/8 bg-[#101010] p-4 md:p-5">
            <p className="font-label text-[10px] uppercase tracking-[0.3em] text-stone-500">
              Social Media
            </p>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between gap-4 border border-white/8 bg-[#0c0c0c] px-3 py-3 font-headline text-[0.95rem] text-white transition-colors hover:border-white/20 hover:bg-[#141414]"
                >
                  <span>{social.label}</span>
                  <span className="material-symbols-outlined text-[18px] text-stone-400">
                    north_east
                  </span>
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function PricingSection({
  onNavigate,
}: {
  onNavigate: (section: SectionId) => void;
}) {
  return (
    <section className="h-full overflow-y-auto no-scrollbar md:overflow-hidden">
      <div className="mx-auto grid h-full w-full max-w-7xl gap-6 py-6 md:grid-cols-[0.78fr_1.22fr] md:items-center md:py-8">
        <div className="max-w-2xl">
          <p className="font-label text-[10px] uppercase tracking-[0.3em] text-stone-500">
            Pricing
          </p>
          <h1 className="mt-4 font-headline text-[3rem] leading-[0.92] tracking-[-0.055em] text-white md:text-[4rem] xl:text-[4.5rem]">
            Clear scopes.
            <br />
            Quiet confidence.
          </h1>
          <p className="mt-5 max-w-xl border-l border-stone-800 pl-4 font-headline text-[0.96rem] italic leading-relaxed text-stone-300 md:pl-5">
            Focused engagements, fewer moving parts, cleaner delivery.
          </p>
          <button
            type="button"
            onClick={() => onNavigate("contact")}
            className="mt-8 inline-flex items-center gap-3 border border-white/12 px-5 py-3 font-label text-[10px] uppercase tracking-[0.3em] text-white transition-colors hover:border-white/25 hover:bg-[#111111]"
          >
            Start a Conversation
            <span className="material-symbols-outlined text-[18px]">
              north_east
            </span>
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className="flex h-full min-h-[19rem] flex-col border border-white/10 bg-[#0b0b0b] p-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-label text-[10px] uppercase tracking-[0.28em] text-stone-500">
                    {plan.name}
                  </p>
                  <p className="mt-3 font-headline text-[2.6rem] leading-none tracking-[-0.05em] text-white xl:text-[2.9rem]">
                    {plan.price}
                  </p>
                </div>
                <span className="rounded-full border border-white/10 px-3 py-1 font-label text-[10px] uppercase tracking-[0.22em] text-stone-400">
                  {plan.cadence}
                </span>
              </div>

              <p className="mt-4 max-w-sm font-headline text-[0.92rem] leading-relaxed text-stone-300">
                {plan.summary}
              </p>

              <div className="mt-5 border-t border-white/8 pt-4">
                <div className="grid gap-3">
                  {plan.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between gap-3 border border-white/8 bg-[#101010] px-3 py-2.5"
                    >
                      <span className="font-headline text-[0.9rem] text-white">
                        {item}
                      </span>
                      <span className="h-2.5 w-2.5 rounded-full bg-stone-500" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-5">
                <button
                  type="button"
                  onClick={() => onNavigate("contact")}
                  className="inline-flex items-center gap-3 border border-white/12 px-4 py-2.5 font-label text-[10px] uppercase tracking-[0.26em] text-white transition-colors hover:border-white/25 hover:bg-[#111111]"
                >
                  Choose Plan
                  <span className="material-symbols-outlined text-[18px]">
                    north_east
                  </span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamSection({
  onNavigate,
}: {
  onNavigate: (section: SectionId) => void;
}) {
  return (
    <section className="h-full overflow-y-auto no-scrollbar md:overflow-hidden">
      <div className="mx-auto grid h-full w-full max-w-7xl gap-6 py-6 md:grid-cols-[0.8fr_1.2fr] md:items-center md:py-8">
        <div className="max-w-2xl">
          <p className="font-label text-[10px] uppercase tracking-[0.3em] text-stone-500">
            Team
          </p>
          <h1 className="mt-4 font-headline text-[3rem] leading-[0.92] tracking-[-0.055em] text-white md:text-[4rem] xl:text-[4.5rem]">
            Small studio.
            <br />
            Deliberate work.
          </h1>
          <p className="mt-5 max-w-xl border-l border-stone-800 pl-4 font-headline text-[0.96rem] italic leading-relaxed text-stone-300 md:pl-5">
            A tight team of designers and engineers working with clarity, speed,
            and care.
          </p>
          <button
            type="button"
            onClick={() => onNavigate("contact")}
            className="mt-8 inline-flex items-center gap-3 border border-white/12 px-5 py-3 font-label text-[10px] uppercase tracking-[0.3em] text-white transition-colors hover:border-white/25 hover:bg-[#111111]"
          >
            Work With Us
            <span className="material-symbols-outlined text-[18px]">
              north_east
            </span>
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {team.map((member) => (
            <article
              key={member.name}
              className="flex h-full min-h-[18rem] flex-col border border-white/10 bg-[#0b0b0b] p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-label text-[10px] uppercase tracking-[0.28em] text-stone-500">
                    {member.role}
                  </p>
                  <h2 className="mt-3 font-headline text-[2.2rem] leading-none tracking-[-0.05em] text-white">
                    {member.name}
                  </h2>
                </div>
                <span className="h-2.5 w-2.5 rounded-full bg-stone-500" />
              </div>

              <p className="mt-5 font-headline text-[0.95rem] leading-relaxed text-stone-300">
                {member.note}
              </p>

              <div className="mt-auto border-t border-white/8 pt-4">
                <p className="font-label text-[10px] uppercase tracking-[0.24em] text-stone-500">
                  Illusion Services
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectOverlay({
  project,
  slideIndex,
  onClose,
  onStep,
}: {
  project: Project;
  slideIndex: number;
  onClose: () => void;
  onStep: (direction: -1 | 1) => void;
}) {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/94 md:bg-black/88 md:backdrop-blur-xl">
      <div className="absolute inset-0 hidden scale-[0.985] opacity-[0.09] blur-md md:block">
        <div className="h-full w-full bg-black" />
      </div>
      <div className="relative min-h-screen bg-[#070707] lg:grid lg:min-h-screen lg:grid-cols-[minmax(0,0.64fr)_minmax(22rem,0.36fr)]">
        <section className="relative min-h-[42svh] overflow-hidden border-y border-white/8 sm:min-h-[48svh] lg:min-h-screen lg:border-r lg:border-y-0">
          <div className="absolute inset-0 transition-all duration-300 md:duration-500">
            <SlideScene slide={project.slides[slideIndex]} accent={project.accent} />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.26)_100%)]" />
          <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/35 px-3 py-1.5 font-label text-[10px] uppercase tracking-[0.28em] text-stone-300 md:left-6 md:top-6 md:bg-black/25 md:backdrop-blur-md">
            {String(slideIndex + 1).padStart(2, "0")} / {String(project.slides.length).padStart(2, "0")}
          </div>
          <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between md:bottom-6 md:left-6 md:right-6">
            <button
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white transition-colors hover:bg-white/18 md:h-12 md:w-12 md:bg-white/10 md:backdrop-blur-md"
              onClick={() => onStep(-1)}
              type="button"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <button
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white transition-colors hover:bg-white/18 md:h-12 md:w-12 md:bg-white/10 md:backdrop-blur-md"
              onClick={() => onStep(1)}
              type="button"
            >
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </section>

        <aside className="flex min-h-[58svh] flex-col overflow-y-auto px-6 py-5 no-scrollbar sm:px-8 sm:py-6 lg:min-h-screen lg:px-10 lg:py-7">
          <div className="flex min-h-full flex-col">
            <div className="flex items-center justify-end gap-4">
              <button
                className="flex items-center gap-3 font-label text-[11px] uppercase tracking-[0.3em] text-stone-300 transition-colors hover:text-white"
                onClick={onClose}
                type="button"
              >
                Exit Gallery
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="mt-7 lg:mt-8">
              <h2 className="max-w-sm font-headline text-[clamp(2.35rem,5vw,3.25rem)] leading-[0.9] tracking-[-0.04em] text-white">
                {project.title}
              </h2>
              <p className="mt-4 max-w-sm font-headline text-[0.95rem] leading-relaxed text-stone-100 lg:text-[1rem]">
                {project.summary}
              </p>
              <p className="mt-3 max-w-sm font-headline text-[0.88rem] italic leading-relaxed text-stone-500">
                {project.note}
              </p>
            </div>

            <div className="mt-6 border-t border-white/8 pt-5">
              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                <div>
                  <p className="font-label text-[11px] uppercase tracking-[0.28em] text-stone-500">
                    Year
                  </p>
                  <p className="mt-1 font-headline text-[1.05rem] text-white">
                    {project.year}
                  </p>
                </div>
                <div>
                  <p className="font-label text-[11px] uppercase tracking-[0.28em] text-stone-500">
                    Sector
                  </p>
                  <p className="mt-1 font-headline text-[1.05rem] text-white">
                    {project.sector}
                  </p>
                </div>
                <div>
                  <p className="font-label text-[11px] uppercase tracking-[0.28em] text-stone-500">
                    Client
                  </p>
                  <p className="mt-1 font-headline text-[1.05rem] italic text-white">
                    {project.client}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-white/12 px-3 py-1.5 font-label text-[10px] uppercase tracking-[0.2em] text-stone-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-auto border-t border-white/8 pt-5" />
          </div>
        </aside>
      </div>
    </div>
  );
}

export default function AppShell({
  initialSection = "home",
}: AppShellProps) {
  const [activeSection, setActiveSection] = useState<SectionId>(initialSection);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const selectedProject = useMemo(
    () => projects.find((project) => project.id === selectedId) ?? null,
    [selectedId],
  );

  useEffect(() => {
    const handlePopState = () => {
      const nextSection = pathToSection(window.location.pathname);
      startTransition(() => {
        setActiveSection(nextSection);
        if (nextSection !== "gallery") {
          setSelectedId(null);
          setSlideIndex(0);
        }
      });
    };

    handlePopState();
    window.addEventListener("popstate", handlePopState);

    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigateSection = (section: SectionId) => {
    startTransition(() => {
      setActiveSection(section);
      if (section !== "gallery") {
        setSelectedId(null);
        setSlideIndex(0);
      }
    });

    const nextPath = sectionPathMap[section];
    if (window.location.pathname !== nextPath) {
      window.history.pushState({ section }, "", nextPath);
    }
  };

  const openProject = (id: string) => {
    setSlideIndex(0);
    setSelectedId(id);
    if (activeSection !== "gallery") {
      navigateSection("gallery");
    }
  };

  const closeProject = () => {
    setSlideIndex(0);
    setSelectedId(null);
  };

  const stepSlide = (direction: -1 | 1) => {
    if (!selectedProject) return;
    const total = selectedProject.slides.length;
    setSlideIndex((current) => (current + direction + total) % total);
  };

  return (
    <main className="flex min-h-screen flex-col overflow-hidden bg-black px-6 pb-28 pt-6 text-white md:px-10 md:pb-32 md:pt-8">
      <header className="mx-auto flex w-full max-w-7xl justify-end">
        <button
          type="button"
          onClick={() => navigateSection("contact")}
          className="bg-white px-5 py-3 font-label text-[10px] uppercase tracking-[0.28em] text-black transition-colors hover:bg-stone-200 md:px-7"
        >
          Speak with Us
        </button>
      </header>

      <div key={activeSection} className="section-enter relative flex-1 min-h-0">
        {activeSection === "home" ? <HomeSection /> : null}
        {activeSection === "gallery" ? (
          <GallerySection onOpenProject={openProject} />
        ) : null}
        {activeSection === "contact" ? <ContactSection /> : null}
        {activeSection === "pricing" ? (
          <PricingSection onNavigate={navigateSection} />
        ) : null}
        {activeSection === "team" ? <TeamSection onNavigate={navigateSection} /> : null}
      </div>

      {selectedProject ? (
        <ProjectOverlay
          project={selectedProject}
          slideIndex={slideIndex}
          onClose={closeProject}
          onStep={stepSlide}
        />
      ) : null}

      <div
        className={`pointer-events-none fixed inset-x-0 bottom-6 z-40 flex justify-center px-6 transition-opacity duration-300 md:bottom-8 md:px-10 ${
          selectedProject ? "hidden" : "opacity-100"
        }`}
      >
        <nav className="pointer-events-auto flex items-center gap-2 bg-stone-900 px-2 py-2 shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
          {tabBar.map((item) => (
            <button
              key={item.label}
              type="button"
              aria-label={item.label}
              aria-current={activeSection === item.section ? "page" : undefined}
              onClick={() => navigateSection(item.section)}
              className={`flex h-11 w-11 items-center justify-center transition-colors ${
                activeSection === item.section
                  ? "bg-stone-800 text-white"
                  : "text-stone-400 hover:bg-stone-800 hover:text-white"
              }`}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
            </button>
          ))}
        </nav>
      </div>
    </main>
  );
}
