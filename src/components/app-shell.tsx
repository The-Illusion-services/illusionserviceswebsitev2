"use client";

import { startTransition, useCallback, useEffect, useMemo, useState } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";

type Category = {
  _id: string;
  title: string;
};

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage?: any;
  publishedAt: string;
  body: any;
  tags?: string[];
  categories?: Category[];
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
  };
};

type SectionId = "home" | "gallery" | "contact" | "pricing" | "team" | "insights";

type Slide = {
  id: string;
  tone: string;
  variant: "monolith" | "steps" | "portal" | "ledger" | "studio" | "stack" | "image";
  image?: string;
};

type Project = {
  id: string;
  name: string;
  title: string;
  summary: string;
  note: string;
  outcome: string;
  year: string;
  sector: string;
  client: string;
  tags: string[];
  metrics: string[];
  accent: string;
  height: string;
  slides: Slide[];
};

type TeamMember = {
  name: string;
  role: string;
  note: string;
  credentials: string[];
  links: ContactLink[];
};

type PricingPlan = {
  name: string;
  price: string;
  cadence: string;
  fit: string;
  summary: string;
  items: string[];
  revisions: string;
  timeline: string;
  support: string;
};

type ContactLink = {
  label: string;
  href: string;
};

type ContactFormState = {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
};

type ContactFormErrors = Partial<Record<keyof ContactFormState, string>>;

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
  insights: "/insights",
  contact: "/contact",
  pricing: "/pricing",
  team: "/team",
};

const tabBar: Array<{ section: SectionId; label: string; icon: string }> = [
  { section: "home", label: "Home", icon: "home" },
  { section: "gallery", label: "Portfolio", icon: "photo_library" },
  { section: "insights", label: "Insights", icon: "article" },
  { section: "contact", label: "Contact Us", icon: "mail" },
  { section: "pricing", label: "Pricing", icon: "payments" },
  { section: "team", label: "Team", icon: "groups" },
];

const primaryButtonClass =
  "inline-flex items-center justify-center rounded-full bg-stone-950 px-6 py-3 font-label text-[10px] uppercase tracking-[0.28em] text-stone-50 transition-all duration-300 hover:bg-stone-700 active:scale-[0.99]";

const secondaryButtonClass =
  "inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-6 py-3 font-label text-[10px] uppercase tracking-[0.28em] text-stone-950 transition-all duration-300 hover:border-stone-400 hover:bg-stone-100 active:scale-[0.99]";

const tertiaryButtonClass =
  "inline-flex items-center justify-center font-label text-[10px] uppercase tracking-[0.22em] text-stone-500 transition-colors duration-300 hover:text-stone-950";

const projects: Project[] = [
  {
    id: "boats",
    name: "Boats",
    title: "RPG Game",
    summary: "We built an immersive gaming experience that actually feels good to play.",
    note: "It's responsive, handles action without lag, and works on whatever device you're holding.",
    outcome: "People stayed because it was fun and it never felt slow.",
    year: "2026",
    sector: "Gaming",
    client: "Internal Engine",
    tags: ["Motion", "Interactive", "Engine"],
    metrics: ["1.2M+ Concurrent Sessions", "68% Day-30 Retention", "Sub-16ms Frame Latency"],
    accent: "#ec4899",
    height: "min-h-[22rem]",
    slides: [
      { id: "b-1", tone: "", variant: "image", image: "/projects/Boats/3.jpeg" },
      { id: "b-2", tone: "", variant: "image", image: "/projects/Boats/4.jpeg" },
      { id: "b-3", tone: "", variant: "image", image: "/projects/Boats/1.jpeg" },
    ],
  },
  {
    id: "dzpatch",
    name: "DzPatch",
    title: "Logistics as a Service",
    summary: "An ops logistics interface. Anyone can integrate it for their apps or website. It is also a dispatch rider hailing solution.",
    note: "Built to make routing, fulfillment, and dispatch feel almost invisible.",
    outcome: "Improved dispatcher routing clarity and cut assignment friction for ops teams.",
    year: "2026",
    sector: "Logistics",
    client: "DzPatch",
    tags: ["Logistics", "SaaS", "Rider Hailing"],
    metrics: ["99.9% API Uptime", "42% Faster Assignment", "Zero Latency Tracking"],
    accent: "#22c55e",
    height: "min-h-[22rem]",
    slides: [
      { id: "dz-1", tone: "", variant: "image", image: "/projects/Dzpatch/1.jpeg" },
      { id: "dz-2", tone: "", variant: "image", image: "/projects/Dzpatch/2.jpeg" },
      { id: "dz-3", tone: "", variant: "image", image: "/projects/Dzpatch/3.jpeg" },
    ],
  },
  {
    id: "foodhunt",
    name: "FoodHunt",
    title: "Food Delivery",
    summary: "A robust food delivery marketplace designed to feel immediate and operationally disciplined.",
    note: "Ensures seamless order flows from restaurant selection to door drops.",
    outcome: "Made the ordering flow faster to understand and easier to complete under pressure.",
    year: "2026",
    sector: "Commerce",
    client: "FoodHunt",
    tags: ["Delivery", "Marketplace", "Commerce"],
    metrics: ["2.4x Delivery Volume", "14s Avg. Checkout", "20k+ Active Riders"],
    accent: "#f97316",
    height: "min-h-[27rem]",
    slides: [
      { id: "fh-1", tone: "", variant: "image", image: "/projects/Foodhunt/1.jpeg" },
      { id: "fh-2", tone: "", variant: "image", image: "/projects/Foodhunt/2.jpeg" },
      { id: "fh-3", tone: "", variant: "image", image: "/projects/Foodhunt/3.jpeg" },
    ],
  },
  {
    id: "academy",
    name: "Illusion Academy",
    title: "Web3 & Crypto Academy",
    summary: "An on-chain educational platform built to help students navigate Web3 domains.",
    note: "Each interaction is designed to feel intentional and guiding.",
    outcome: "Turned a complex learning journey into a calmer path to crypto mastery.",
    year: "2026",
    sector: "Education",
    client: "Illusion Academy",
    tags: ["Education", "Motion", "Web3"],
    metrics: ["94% Lesson Completion", "Over 50k Certificates", "3x Faster Onboarding"],
    accent: "#38bdf8",
    height: "min-h-[26rem]",
    slides: [
      { id: "ac-1", tone: "", variant: "image", image: "/projects/IllusionAcademy/1.jpeg" },
    ],
  },
  {
    id: "novypay",
    name: "NovyPay",
    title: "Off and On Ramp Solution",
    summary: "A payment product centered on trust, speed, and calm financial visibility.",
    note: "Noise was removed aggressively, letting contrast and motion carry confidence.",
    outcome: "Raised payment confidence with a calmer, legible financial workflow.",
    year: "2026",
    sector: "Fintech",
    client: "NovyPay",
    tags: ["Fintech", "UI/UX", "Platform"],
    metrics: ["18% Higher Completion Rate", "31% Faster Transaction Time", "0.01% Error Rate"],
    accent: "#8b5cf6",
    height: "min-h-[30rem]",
    slides: [
      { id: "np-1", tone: "", variant: "image", image: "/projects/NovyPay/2.jpeg" },
      { id: "np-2", tone: "", variant: "image", image: "/projects/NovyPay/3.jpeg" },
      { id: "np-3", tone: "", variant: "image", image: "/projects/NovyPay/1.jpeg" },
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
  { label: "Studio", href: "tel:+2348087356498", value: "+234 808 735 6498" },
];

const plans: PricingPlan[] = [
  {
    name: "Audit",
    price: "$5k",
    cadence: "per engagement",
    fit: "For founders shipping an MVP or fixing a critical product surface fast.",
    summary: "A focused product audit and one rebuilt surface designed to remove confusion before you scale.",
    items: ["1 focused product surface", "Product audit + redesign", "Implementation-ready handoff"],
    revisions: "2 revision rounds",
    timeline: "2 weeks",
    support: "7 days launch follow-through",
  },
  {
    name: "Signature",
    price: "$12k",
    cadence: "per engagement",
    fit: "For brands scaling with precision across multiple flows, pages, or product moments.",
    summary: "A full product experience engagement spanning UX direction, visual systems, and frontend delivery.",
    items: ["Multi-page product experience", "UX systems + implementation", "Launch-ready refinement"],
    revisions: "4 revision rounds",
    timeline: "4 to 6 weeks",
    support: "14 days launch support",
  },
  {
    name: "Retainer",
    price: "$8k",
    cadence: "monthly",
    fit: "For product teams building moats and needing a steady design-engineering partner.",
    summary: "An ongoing partnership for continuous refinement, new surfaces, and faster decision-making.",
    items: ["Ongoing product refinement", "Priority iteration cycles", "Weekly planning touchpoints"],
    revisions: "Weekly iteration cycles",
    timeline: "Month-to-month",
    support: "Continuous collaboration",
  },
];

const team: TeamMember[] = [
  {
    name: "Umoha",
    role: "Creative Direction",
    note: "Shapes the tone, visual restraint, and editorial feel of every surface.",
    credentials: ["Led product work across fintech and commerce", "Design systems + product storytelling"],
    links: [
      { label: "LinkedIn", href: "https://linkedin.com/company/illusionservices" },
      { label: "X", href: "https://x.com/illusionservices" },
      { label: "GitHub", href: "https://github.com/illusionservices" },
      { label: "Behance", href: "https://behance.net/illusionservices" },
    ],
  },
  {
    name: "Amina",
    role: "Product Design",
    note: "Translates complexity into interfaces that feel immediate and legible.",
    credentials: ["Previously on B2B and mobility products", "UX flows, research synthesis, interface systems"],
    links: [
      { label: "LinkedIn", href: "https://linkedin.com/company/illusionservices" },
      { label: "X", href: "https://x.com/illusionservices" },
      { label: "GitHub", href: "https://github.com/illusionservices" },
      { label: "Behance", href: "https://behance.net/illusionservices" },
    ],
  },
  {
    name: "David",
    role: "Engineering",
    note: "Builds the systems layer so the experience stays calm under real use.",
    credentials: ["Frontend architecture + implementation", "Shipped products in logistics and payments"],
    links: [
      { label: "LinkedIn", href: "https://linkedin.com/company/illusionservices" },
      { label: "X", href: "https://x.com/illusionservices" },
      { label: "GitHub", href: "https://github.com/illusionservices" },
      { label: "Behance", href: "https://behance.net/illusionservices" },
    ],
  },
  {
    name: "Zainab",
    role: "Brand Strategy",
    note: "Keeps product voice, positioning, and narrative aligned from first impression to launch.",
    credentials: ["Positioning, naming, and launch narratives", "Works across early-stage and growth brands"],
    links: [
      { label: "LinkedIn", href: "https://linkedin.com/company/illusionservices" },
      { label: "X", href: "https://x.com/illusionservices" },
      { label: "GitHub", href: "https://github.com/illusionservices" },
      { label: "Behance", href: "https://behance.net/illusionservices" },
    ],
  },
  {
    name: "Tobi",
    role: "Frontend Systems",
    note: "Turns interface direction into polished, responsive experiences with careful implementation detail.",
    credentials: ["Design-to-code execution", "Interaction polish and responsive systems"],
    links: [
      { label: "LinkedIn", href: "https://linkedin.com/company/illusionservices" },
      { label: "X", href: "https://x.com/illusionservices" },
      { label: "GitHub", href: "https://github.com/illusionservices" },
      { label: "Behance", href: "https://behance.net/illusionservices" },
    ],
  },
];

function pathToSection(pathname: string): SectionId {
  if (pathname === "/gallery") return "gallery";
  if (pathname === "/contact") return "contact";
  if (pathname === "/pricing") return "pricing";
  if (pathname === "/team") return "team";
  return "home";
}

function SlideScene({ slide, accent, modalMode = false }: { slide: Slide; accent: string; modalMode?: boolean }) {
  if (slide.variant === "image" && slide.image) {
    if (modalMode) {
      return (
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: `linear-gradient(160deg, ${accent}22 0%, #1a1a1a 100%)` }}
        >
          <img
            src={slide.image}
            alt=""
            className="max-h-[80%] w-auto max-w-[70%] object-contain drop-shadow-2xl"
            loading="lazy"
          />
        </div>
      );
    }
    return (
      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden rounded-t-[2rem] flex items-center justify-center bg-white"
      >
        <img
          src={slide.image}
          alt=""
          className="h-full w-auto max-w-full object-contain object-center transition-transform duration-700 ease-out group-hover:scale-105 drop-shadow-xl"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className={`relative h-full w-full overflow-hidden bg-gradient-to-b ${slide.tone}`}
    >
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
    <section className="mx-auto grid h-full w-full max-w-6xl gap-8 py-12 md:py-16">
      <div className="max-w-4xl">

        <h1 className="mt-4 font-headline text-[4.7rem] leading-[0.92] tracking-[-0.06em] text-stone-950 md:text-[7rem]">
          Software isn&apos;t
          <br />
          <span className="italic">built.</span>
          <br />
          It&apos;s written.
        </h1>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/contact"
            className={primaryButtonClass}
          >
            Let&apos;s Talk
          </a>
          <a
            href="/gallery"
            className={secondaryButtonClass}
          >
            View Portfolio
          </a>
        </div>
      </div>

      <div className="max-w-4xl border-t border-stone-200 pt-6">
        <p className="font-label text-[11px] tracking-[0.18em] text-stone-500">
          Who We&apos;re For
        </p>
        <p className="mt-4 max-w-4xl font-headline text-[1.35rem] leading-relaxed text-stone-700 md:text-[1.6rem]">
          For founders shipping MVPs. Brands scaling to new regions. Product teams
          launching features. And leaders thinking about the numbers.
        </p>
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
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 py-8 md:grid-cols-[0.72fr_1.28fr] md:items-start md:gap-8 md:py-10">
        <div className="max-w-lg md:sticky md:top-8">
          <h2 className="font-headline text-[3.2rem] leading-[0.96] tracking-[-0.045em] text-stone-950 md:text-[3.9rem] xl:text-[4.3rem]">
            Our Portfolio
            <br />
            <span className="text-stone-500">is the Thesis.</span>
          </h2>
          <p className="mt-6 max-w-sm border-l border-stone-300 pl-5 text-[1.02rem] leading-relaxed text-stone-600 md:ml-8">
            Open one and the story unfolds.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <button
              key={project.id}
              aria-label={`Open ${project.name} project details`}
              className={`group block w-full overflow-hidden rounded-[2rem] border border-stone-200 bg-white text-left shadow-[0_24px_60px_rgba(15,23,42,0.06)] transition-transform duration-300 hover:-translate-y-1 hover:border-stone-300 hover:bg-stone-50 ${project.height}`}
              onClick={() => onOpenProject(project.id)}
              style={{ contentVisibility: "auto", containIntrinsicSize: "440px" }}
              type="button"
            >
              <div className="flex h-full flex-col">
                <div className="relative min-h-[16rem] flex-1 overflow-hidden">
                  <SlideScene slide={project.slides[0]} accent={project.accent} />
                </div>
                <div className="border-t border-stone-200 p-5 md:p-6">
                  <div className="flex items-center justify-between gap-4">
                    <h2 className="font-headline text-3xl text-stone-950">{project.name}</h2>
                    <span className="h-3 w-3 rounded-full" style={{ backgroundColor: project.accent }} />
                  </div>
                  <p className="mt-4 text-sm leading-6 text-stone-600">{project.summary}</p>
                  <p className="mt-4 border-l border-stone-200 pl-3 text-sm leading-6 text-stone-800">
                    {project.metrics[0]}
                  </p>
                  <div className="mt-6 flex items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-stone-200 px-2.5 py-1 font-label text-[10px] uppercase tracking-[0.18em] text-stone-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
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

function InsightsSection({ 
  onOpenPost 
}: { 
  onOpenPost: (id: string) => void 
}) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await client.fetch(`
          *[_type == "post"] | order(publishedAt desc) {
            _id,
            title,
            slug,
            mainImage,
            publishedAt,
            tags,
            categories[]->{
              _id,
              title
            }
          }
        `);
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch insights:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section className="h-full overflow-y-auto no-scrollbar">
      <div className="mx-auto grid w-full max-w-7xl gap-8 py-8 md:grid-cols-[0.7fr_1.3fr] md:items-start md:py-10">
        <div className="max-w-md md:sticky md:top-8">
          <p className="font-label text-[11px] tracking-[0.18em] text-stone-500">
            Insights
          </p>
          <h2 className="mt-4 font-headline text-[2.8rem] leading-[0.95] tracking-[-0.045em] text-stone-950 md:text-[3.4rem] xl:text-[3.8rem]">
            Deliberate
            <br />
            thoughts.
          </h2>
          <p className="mt-5 border-l border-stone-300 pl-4 text-[0.98rem] leading-relaxed text-stone-600 md:pl-5">
            A collection of notes on design, engineering, and the business of shipping products.
          </p>
        </div>

        <div className="grid gap-6">
          {loading ? (
            <div className="flex h-64 items-center justify-center rounded-[2rem] border border-stone-200 bg-stone-50">
              <p className="font-label text-[11px] uppercase tracking-[0.2em] text-stone-400">Loading insights...</p>
            </div>
          ) : posts.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {posts.map((post) => (
                <button
                  key={post._id}
                  onClick={() => onOpenPost(post._id)}
                  className="group flex flex-col overflow-hidden rounded-[2rem] border border-stone-200 bg-white text-left shadow-[0_24px_60px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-stone-300"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                    {post.mainImage ? (
                      <img
                        src={urlFor(post.mainImage).width(800).url()}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">
                        <span className="material-symbols-outlined text-[48px] text-stone-200">
                          article
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3">
                      <span className="font-label text-[10px] uppercase tracking-[0.15em] text-stone-400">
                        {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                      {post.categories?.[0] && (
                        <span className="h-1 w-1 rounded-full bg-stone-300" />
                      )}
                      <span className="font-label text-[10px] uppercase tracking-[0.15em] text-stone-500">
                        {post.categories?.[0]?.title}
                      </span>
                    </div>
                    <h3 className="mt-3 font-headline text-2xl leading-tight text-stone-950 group-hover:text-stone-700">
                      {post.title}
                    </h3>
                    <div className="mt-auto pt-6 flex flex-wrap gap-2">
                      {post.tags?.slice(0, 2).map(tag => (
                        <span key={tag} className="rounded-full border border-stone-100 bg-stone-50 px-2.5 py-1 font-label text-[9px] uppercase tracking-[0.12em] text-stone-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="flex h-64 flex-col items-center justify-center rounded-[2rem] border border-stone-200 bg-stone-50 p-12 text-center">
              <span className="material-symbols-outlined text-[48px] text-stone-300">
                auto_stories
              </span>
              <p className="mt-4 font-headline text-xl text-stone-950">Writing in progress.</p>
              <p className="mt-2 text-sm text-stone-500">
                Check back soon for our latest thoughts.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [form, setForm] = useState<ContactFormState>({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof ContactFormState, boolean>>>({});
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "success">("idle");

  const validateForm = (values: ContactFormState): ContactFormErrors => {
    const nextErrors: ContactFormErrors = {};

    if (!values.name.trim()) nextErrors.name = "Please share your name.";
    if (!values.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!values.message.trim()) nextErrors.message = "A short brief helps us respond well.";

    return nextErrors;
  };

  const updateField = (field: keyof ContactFormState, value: string) => {
    setForm((current) => {
      const next = { ...current, [field]: value };
      if (touched[field]) {
        setErrors(validateForm(next));
      }
      return next;
    });
    if (submitState !== "idle") {
      setSubmitState("idle");
    }
  };

  const markTouched = (field: keyof ContactFormState) => {
    setTouched((current) => ({ ...current, [field]: true }));
    setErrors((current) => ({
      ...current,
      ...validateForm(form),
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateForm(form);
    setTouched({
      name: true,
      email: true,
      projectType: true,
      budget: true,
      message: true,
    });
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitState("idle");
      return;
    }

    setSubmitState("submitting");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitState("success");
      setForm({
        name: "",
        email: "",
        projectType: "",
        budget: "",
        message: "",
      });
      setTouched({});
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitState("idle");
      alert("Something went wrong. Please try again or email us directly.");
    }
  };

  return (
    <section className="h-full overflow-y-auto no-scrollbar md:overflow-hidden">
      <div className="mx-auto grid h-full w-full max-w-7xl gap-8 py-8 md:grid-cols-[1.1fr_0.9fr] md:items-stretch md:py-10">
        <div className="flex h-full flex-col rounded-[2rem] border border-stone-200 bg-white p-6 shadow-[0_24px_60px_rgba(15,23,42,0.06)] md:p-7">
          <p className="font-label text-[11px] tracking-[0.18em] text-stone-500">
            Contact Us
          </p>
          <h2 className="mt-4 max-w-lg font-headline text-[2.6rem] leading-[0.95] tracking-[-0.04em] text-stone-950 md:text-[3.2rem] xl:text-[3.6rem]">
            Let&apos;s make
            <br />
            it clear.
          </h2>
          <p className="mt-4 max-w-xl border-l border-stone-300 pl-4 text-[0.98rem] leading-relaxed text-stone-600 md:pl-5">
            Send the brief. We&apos;ll shape scope, timeline, and next steps within 24 hours.
          </p>

          <form className="mt-8 grid flex-1 grid-cols-1 gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
            <label className="grid gap-2">
              <span
                id="contact-name-label"
                className="flex items-center justify-between gap-3 font-label text-[11px] font-bold uppercase tracking-[0.14em] text-stone-900"
              >
                <span>Name</span>
                <span className="text-[10px] tracking-[0.12em] text-stone-400">Required</span>
              </span>
              <input
                id="contact-name"
                aria-describedby={touched.name && errors.name ? "contact-name-error" : undefined}
                aria-labelledby="contact-name-label"
                required
                type="text"
                placeholder="Your name"
                value={form.name}
                onBlur={() => markTouched("name")}
                onChange={(event) => updateField("name", event.target.value)}
                aria-invalid={errors.name ? "true" : "false"}
                className={`rounded-[1.5rem] border bg-stone-50 px-4 py-3 font-body text-[0.98rem] text-stone-900 outline-none transition-all duration-300 placeholder:text-stone-400 focus:border-stone-400 ${
                  errors.name ? "border-[#d97706]/50 bg-[#fffaf2]" : "border-stone-200"
                }`}
              />
              {touched.name && errors.name ? (
                <span id="contact-name-error" className="text-[0.85rem] leading-6 text-[#b45309]">
                  {errors.name}
                </span>
              ) : null}
            </label>

            <label className="grid gap-2">
              <span
                id="contact-email-label"
                className="flex items-center justify-between gap-3 font-label text-[11px] font-bold uppercase tracking-[0.14em] text-stone-900"
              >
                <span>Email</span>
                <span className="text-[10px] tracking-[0.12em] text-stone-400">Required</span>
              </span>
              <input
                id="contact-email"
                aria-describedby={touched.email && errors.email ? "contact-email-error" : undefined}
                aria-labelledby="contact-email-label"
                required
                type="email"
                placeholder="you@company.com"
                value={form.email}
                onBlur={() => markTouched("email")}
                onChange={(event) => updateField("email", event.target.value)}
                aria-invalid={errors.email ? "true" : "false"}
                className={`rounded-[1.5rem] border bg-stone-50 px-4 py-3 font-body text-[0.98rem] text-stone-900 outline-none transition-all duration-300 placeholder:text-stone-400 focus:border-stone-400 ${
                  errors.email ? "border-[#d97706]/50 bg-[#fffaf2]" : "border-stone-200"
                }`}
              />
              {touched.email && errors.email ? (
                <span id="contact-email-error" className="text-[0.85rem] leading-6 text-[#b45309]">
                  {errors.email}
                </span>
              ) : null}
            </label>

            <label className="grid gap-2">
              <span
                id="contact-project-type-label"
                className="flex items-center justify-between gap-3 font-label text-[11px] font-bold uppercase tracking-[0.14em] text-stone-900"
              >
                <span>Project Type</span>
                <span className="text-[10px] tracking-[0.12em] text-stone-400">Optional</span>
              </span>
              <input
                id="contact-project-type"
                aria-labelledby="contact-project-type-label"
                type="text"
                placeholder="Web app, design..."
                value={form.projectType}
                onBlur={() => markTouched("projectType")}
                onChange={(event) =>
                  updateField("projectType", event.target.value)
                }
                className="rounded-[1.5rem] border border-stone-200 bg-stone-50 px-4 py-3 font-body text-[0.98rem] text-stone-900 outline-none transition-all duration-300 placeholder:text-stone-400 focus:border-stone-400"
              />
            </label>

            <label className="grid gap-2">
              <span
                id="contact-budget-label"
                className="flex items-center justify-between gap-3 font-label text-[11px] font-bold uppercase tracking-[0.14em] text-stone-900"
              >
                <span>Budget</span>
                <span className="text-[10px] tracking-[0.12em] text-stone-400">Optional</span>
              </span>
              <input
                id="contact-budget"
                aria-labelledby="contact-budget-label"
                type="text"
                placeholder="Target budget range"
                value={form.budget}
                onBlur={() => markTouched("budget")}
                onChange={(event) =>
                  updateField("budget", event.target.value)
                }
                className="rounded-[1.5rem] border border-stone-200 bg-stone-50 px-4 py-3 font-body text-[0.98rem] text-stone-900 outline-none transition-all duration-300 placeholder:text-stone-400 focus:border-stone-400"
              />
            </label>

            <label className="grid gap-2 md:col-span-2">
              <span
                id="contact-message-label"
                className="flex items-center justify-between gap-3 font-label text-[11px] font-bold uppercase tracking-[0.14em] text-stone-900"
              >
                <span>Message</span>
                <span className="text-[10px] tracking-[0.12em] text-stone-400">Required</span>
              </span>
              <textarea
                id="contact-message"
                aria-describedby={touched.message && errors.message ? "contact-message-error" : undefined}
                aria-labelledby="contact-message-label"
                required
                placeholder="What are we building?"
                rows={4}
                value={form.message}
                onBlur={() => markTouched("message")}
                onChange={(event) => updateField("message", event.target.value)}
                aria-invalid={errors.message ? "true" : "false"}
                className={`resize-none rounded-[1.5rem] border bg-stone-50 px-4 py-3 font-body text-[0.98rem] text-stone-900 outline-none transition-all duration-300 placeholder:text-stone-400 focus:border-stone-400 ${
                  errors.message ? "border-[#d97706]/50 bg-[#fffaf2]" : "border-stone-200"
                }`}
              />
              {touched.message && errors.message ? (
                <span id="contact-message-error" className="text-[0.85rem] leading-6 text-[#b45309]">
                  {errors.message}
                </span>
              ) : null}
            </label>

            <button
              type="submit"
              disabled={submitState === "submitting"}
              className={`${primaryButtonClass} mt-2 w-fit gap-3 disabled:cursor-not-allowed disabled:opacity-70 md:col-span-2`}
            >
              {submitState === "submitting" ? "Sending..." : "Let's Talk"}
              <span className="material-symbols-outlined text-[18px]">north_east</span>
            </button>
            {submitState === "success" ? (
              <p aria-live="polite" className="md:col-span-2 text-[0.92rem] leading-6 text-stone-900 font-headline bg-stone-50 p-4 rounded-2xl border border-stone-200">
                Inquiry received. We&apos;ll be in touch within 24 hours.
              </p>
            ) : null}
          </form>
        </div>

        <aside className="grid h-full gap-5 rounded-[2rem] border border-stone-200 bg-[#f5f1e8] p-6 shadow-[0_24px_60px_rgba(15,23,42,0.05)] md:p-7">
          <div className="rounded-[2rem] border border-stone-200 bg-white p-5">
            <p className="font-label text-[11px] tracking-[0.18em] text-stone-500">
              Reach Directly
            </p>
            <div className="mt-4 space-y-3">
              <a
                href="mailto:theillusionservices@gmail.com"
                className="block font-headline text-[1.15rem] text-stone-950 transition-colors hover:text-stone-600 xl:text-[1.3rem]"
              >
                theillusionservices@gmail.com
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-stone-200 bg-white p-5">
            <p className="font-label text-[11px] tracking-[0.18em] text-stone-500">
              Phone Numbers
            </p>
            <div className="mt-4 grid gap-3">
              {phoneNumbers.map((phone) => (
                <a
                  key={phone.value}
                  href={phone.href}
                  className="flex items-center justify-between gap-4 rounded-[1.5rem] border border-stone-200 bg-stone-50 px-3 py-3 transition-colors hover:border-stone-300 hover:bg-white"
                >
                  <span className="font-label text-[11px] tracking-[0.14em] text-stone-500">
                    {phone.label}
                  </span>
                  <span className="font-headline text-[0.98rem] text-stone-950">
                    {phone.value}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-stone-200 bg-white p-5">
            <p className="font-label text-[11px] tracking-[0.18em] text-stone-500">
              Social Media
            </p>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between gap-4 rounded-[1.5rem] border border-stone-200 bg-stone-50 px-3 py-3 font-headline text-[0.95rem] text-stone-950 transition-colors hover:border-stone-300 hover:bg-white"
                >
                  <span>{social.label}</span>
                  <span className="material-symbols-outlined text-[18px] text-stone-500">
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
      <div className="mx-auto w-full max-w-7xl py-8 md:py-10">
        <div className="max-w-3xl">
          <p className="font-label text-[11px] tracking-[0.18em] text-stone-500">
            Pricing
          </p>
          <h2 className="mt-4 font-headline text-[2.8rem] leading-[0.95] tracking-[-0.045em] text-stone-950 md:text-[3.5rem] xl:text-[4rem]">
            Clear scopes.
            <br />
            Serious delivery.
          </h2>
          <p className="mt-6 max-w-2xl text-[1.02rem] leading-8 text-stone-700">
            Choose the engagement that matches your stage, urgency, and how much
            product depth you need.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => onNavigate("contact")}
              className={primaryButtonClass}
            >
              Let&apos;s Talk
            </button>
            <button
              type="button"
              onClick={() => onNavigate("gallery")}
              className={secondaryButtonClass}
            >
              View Portfolio
            </button>
          </div>
          <p className="mt-4 text-[0.92rem] leading-6 text-stone-500 md:hidden">
            Swipe horizontally to compare plans.
          </p>
        </div>

        <div className="-mx-1 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-2 no-scrollbar md:mx-0 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:px-0 md:pb-0">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`min-w-[18.75rem] snap-start flex h-full min-h-[19rem] flex-col rounded-[2rem] border p-6 shadow-[0_24px_60px_rgba(15,23,42,0.06)] md:min-w-0 ${
                plan.name === "Signature"
                  ? "border-stone-300 bg-[#f5f1e8]"
                  : "border-stone-200 bg-white"
              }`}
              style={{ contentVisibility: "auto", containIntrinsicSize: "560px" }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-label text-[11px] tracking-[0.18em] text-stone-500">
                    {plan.name}
                  </p>
                  <p className="mt-3 font-headline text-[2.7rem] leading-none tracking-[-0.05em] text-stone-950 xl:text-[3rem]">
                    {plan.price}
                  </p>
                  <p className="mt-4 max-w-sm text-[1rem] leading-7 text-stone-700">
                    {plan.fit}
                  </p>
                </div>
                <span className="rounded-full border border-stone-200 px-3 py-1 font-label text-[10px] uppercase tracking-[0.22em] text-stone-500">
                  {plan.cadence}
                </span>
              </div>

              <p className="mt-6 max-w-sm border-l border-stone-300 pl-4 text-[0.96rem] leading-7 text-stone-600">
                {plan.summary}
              </p>

              <div className="mt-8 border-t border-stone-200 pt-6">
                <div className="grid gap-3">
                  {plan.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between gap-3 rounded-[1.5rem] border border-stone-200 bg-white/70 px-4 py-3"
                    >
                      <span className="text-[0.98rem] leading-6 text-stone-900">
                        {item}
                      </span>
                      <span className="h-2.5 w-2.5 rounded-full bg-stone-400" />
                    </div>
                  ))}
                </div>
                <div className="mt-6 grid gap-3">
                  <div className="flex items-center justify-between gap-4 rounded-[1.5rem] border border-stone-200 bg-white px-4 py-3">
                    <span className="font-label text-[11px] tracking-[0.14em] text-stone-500">
                      Timeline
                    </span>
                    <span className="text-[0.96rem] text-stone-900">{plan.timeline}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4 rounded-[1.5rem] border border-stone-200 bg-white px-4 py-3">
                    <span className="font-label text-[11px] tracking-[0.14em] text-stone-500">
                      Revisions
                    </span>
                    <span className="text-[0.96rem] text-stone-900">{plan.revisions}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4 rounded-[1.5rem] border border-stone-200 bg-white px-4 py-3">
                    <span className="font-label text-[11px] tracking-[0.14em] text-stone-500">
                      Support
                    </span>
                    <span className="max-w-[11rem] text-right text-[0.96rem] leading-6 text-stone-900">
                      {plan.support}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-6">
                <button
                  type="button"
                  onClick={() => onNavigate("contact")}
                  className={`w-full ${
                    plan.name === "Signature"
                      ? primaryButtonClass
                      : secondaryButtonClass
                  }`}
                >
                  Let&apos;s Talk
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
      <div className="mx-auto grid h-full w-full max-w-7xl gap-8 py-8 md:grid-cols-[0.8fr_1.2fr] md:items-start md:py-10">
        <div className="max-w-2xl md:sticky md:top-8">
          <p className="font-label text-[11px] tracking-[0.18em] text-stone-500">
            Team
          </p>
          <h2 className="mt-4 font-headline text-[2.8rem] leading-[0.95] tracking-[-0.045em] text-stone-950 md:text-[3.4rem] xl:text-[3.8rem]">
            Small studio.
            <br />
            Deliberate work.
          </h2>
          <p className="mt-5 max-w-xl border-l border-stone-300 pl-4 text-[0.98rem] leading-relaxed text-stone-600 md:pl-5">
            A tight team of designers and engineers working with clarity, speed,
            and care.
          </p>
          <p className="mt-4 max-w-xl text-[0.95rem] leading-7 text-stone-500">
            Work spans commerce, logistics, fintech, web3, and education.
          </p>
          <button
            type="button"
            onClick={() => onNavigate("contact")}
            className={`${secondaryButtonClass} mt-8 gap-3 px-5`}
          >
            Let&apos;s Talk
            <span className="material-symbols-outlined text-[18px]">
              north_east
            </span>
          </button>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {team.map((member) => (
            <article
              key={member.name}
              className="flex h-full min-h-[18rem] flex-col rounded-[2rem] border border-stone-200 bg-white p-6 shadow-[0_24px_60px_rgba(15,23,42,0.06)]"
              style={{ contentVisibility: "auto", containIntrinsicSize: "420px" }}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-label text-[11px] tracking-[0.18em] text-stone-500">
                    {member.role}
                  </p>
                  <h2 className="mt-3 font-headline text-[2.2rem] leading-none tracking-[-0.05em] text-stone-950">
                    {member.name}
                  </h2>
                </div>
                <span className="h-2.5 w-2.5 rounded-full bg-stone-400" />
              </div>

              <p className="mt-6 font-headline text-[0.95rem] leading-relaxed text-stone-600">
                {member.note}
              </p>

              <div className="mt-6 grid gap-2">
                {member.credentials.map((item) => (
                  <div
                    key={`${member.name}-${item}`}
                    className="rounded-[1.5rem] border border-stone-200 bg-stone-50 px-4 py-3 text-[0.92rem] leading-6 text-stone-700"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {member.links.map((link) => (
                  <a
                    key={`${member.name}-${link.label}`}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between gap-2 rounded-full border border-stone-200 bg-stone-50 px-3 py-2 font-label text-[10px] uppercase tracking-[0.18em] text-stone-600 transition-colors hover:border-stone-300 hover:bg-white hover:text-stone-950"
                  >
                    <span>{link.label}</span>
                    <span className="material-symbols-outlined text-[14px]">
                      north_east
                    </span>
                  </a>
                ))}
              </div>

              <div className="mt-auto border-t border-stone-200 pt-6">
                <p className="font-label text-[11px] tracking-[0.14em] text-stone-500">
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
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const imageSlides = project.slides.filter(s => s.variant === "image" && s.image);
  const [zoomedIndex, setZoomedIndex] = useState<number | null>(null);

  const slideNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (zoomedIndex !== null) {
      setZoomedIndex((zoomedIndex + 1) % imageSlides.length);
    }
  };

  const slidePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (zoomedIndex !== null) {
      setZoomedIndex((zoomedIndex - 1 + imageSlides.length) % imageSlides.length);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[rgba(255,255,255,0.96)] md:backdrop-blur-xl">
      {zoomedIndex !== null && imageSlides[zoomedIndex] && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-white/95 backdrop-blur-md transition-all cursor-zoom-out"
          onClick={() => setZoomedIndex(null)}
        >
          <button 
            type="button" 
            className="absolute top-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900 transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); setZoomedIndex(null); }}
            aria-label="Close zoom"
          >
            <span className="material-symbols-outlined">close</span>
          </button>

          {imageSlides.length > 1 && (
            <>
              <button 
                type="button" 
                className="absolute left-6 top-1/2 -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-full bg-white border border-stone-200 text-stone-600 hover:bg-stone-50 hover:text-stone-900 transition-colors shadow-lg z-10 hidden md:flex"
                onClick={slidePrev}
                aria-label="Previous image"
              >
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
              <button 
                type="button" 
                className="absolute right-6 top-1/2 -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-full bg-white border border-stone-200 text-stone-600 hover:bg-stone-50 hover:text-stone-900 transition-colors shadow-lg z-10 hidden md:flex"
                onClick={slideNext}
                aria-label="Next image"
              >
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </>
          )}

          <div className="relative flex items-center justify-center w-full h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img 
              key={imageSlides[zoomedIndex].id}
              src={imageSlides[zoomedIndex].image!} 
              alt="Zoomed project view" 
              className="max-h-[90vh] max-w-full object-contain drop-shadow-[0_24px_64px_rgba(0,0,0,0.12)] rounded-xl transition-opacity animate-in fade-in duration-300"
            />
          </div>
        </div>
      )}

      <div className="absolute inset-0 hidden scale-[0.985] opacity-[0.3] blur-md md:block">
        <div className="h-full w-full bg-[linear-gradient(180deg,#ffffff,#f1ede5)]" />
      </div>
      <div className="relative min-h-screen bg-white lg:grid lg:min-h-screen lg:grid-cols-[minmax(0,0.64fr)_minmax(22rem,0.36fr)]">
        <section className="relative min-h-[50svh] overflow-hidden border-y border-stone-200 bg-white sm:min-h-[55svh] lg:min-h-screen lg:border-r lg:border-y-0">
          {/* Multi-image collage — cleanly presented side-by-side */}
          <div className="absolute inset-0 flex items-center justify-center gap-6 px-10 py-10 overflow-hidden">
            {imageSlides.map((slide, i) => {
              const total = imageSlides.length;
              // Clean staggered layout without messy rotation
              const offsets = total === 1
                ? ["translate-y-0"]
                : total === 2
                ? ["-translate-y-4", "translate-y-4"]
                : ["-translate-y-6", "translate-y-0", "translate-y-6"];
              return (
                <div
                  key={slide.id}
                  className={`relative flex-shrink-0 transform transition-transform duration-700 ease-out hover:-translate-y-2 ${offsets[i] ?? ""}`}
                  style={{ width: total === 1 ? "45%" : total === 2 ? "38%" : "28%" }}
                >
                  <button 
                    type="button"
                    className="w-full text-left cursor-zoom-in transition-transform hover:scale-[1.02] active:scale-100"
                    onClick={() => setZoomedIndex(i)}
                    aria-label="Zoom image"
                  >
                    <img
                      src={slide.image!}
                      alt=""
                      className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.08)] mix-blend-darken"
                      loading="lazy"
                    />
                  </button>
                </div>
              );
            })}
            {/* Fallback for non-image slides */}
            {project.slides.every(s => s.variant !== "image") && (
              <div className="absolute inset-0">
                <SlideScene slide={project.slides[0]} accent={project.accent} />
              </div>
            )}
          </div>
        </section>

        <aside className="flex min-h-[58svh] flex-col overflow-y-auto px-6 py-6 no-scrollbar sm:px-8 sm:py-8 lg:min-h-screen lg:px-10 lg:py-8">
          <div className="flex min-h-full flex-col">
            <div
              className="mb-6 h-1.5 w-20 rounded-full"
              style={{ backgroundColor: project.accent }}
            />
            <div className="flex items-center justify-end gap-4">
              <button
                className={`${tertiaryButtonClass} gap-3 text-[11px] tracking-[0.18em]`}
                onClick={onClose}
                type="button"
              >
                Exit Gallery
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="mt-7 lg:mt-8">
              <p
                className="font-label text-[11px] tracking-[0.18em]"
                style={{ color: project.accent }}
              >
                {project.name}
              </p>
              <h2 className="max-w-sm font-headline text-[clamp(2.35rem,5vw,3.25rem)] leading-[0.9] tracking-[-0.04em] text-stone-950">
                {project.title}
              </h2>
              <p className="mt-4 max-w-sm font-headline text-[0.95rem] leading-relaxed text-stone-700 lg:text-[1rem]">
                {project.summary}
              </p>
              <p className="mt-3 max-w-sm text-[0.92rem] leading-relaxed text-stone-500">
                {project.note}
              </p>
              <div
                className="mt-6 rounded-[2rem] border bg-white px-5 py-5"
                style={{ borderColor: `${project.accent}33` }}
              >
                <p
                  className="font-label text-[11px] tracking-[0.14em]"
                  style={{ color: project.accent }}
                >
                  Outcome
                </p>
                <p className="mt-2 text-sm leading-6 text-stone-800">
                  {project.outcome}
                </p>
              </div>
            </div>

              <div className="mt-8 border-t border-stone-200 pt-6">
                <p
                  className="font-label text-[11px] tracking-[0.18em]"
                  style={{ color: project.accent }}
                >
                  Proof Points
                </p>
                <div className="mt-4 grid gap-3">
                  {project.metrics.map((metric, index) => (
                  <div
                    key={metric}
                    className="flex items-start gap-3 rounded-[1.5rem] border bg-white px-3 py-3 text-sm text-stone-800"
                    style={{ borderColor: `${project.accent}22` }}
                  >
                    <span
                      className="mt-1 h-2.5 w-2.5 rounded-full"
                      style={{
                        backgroundColor: project.accent,
                        opacity: 1 - index * 0.18,
                      }}
                    />
                    <span>{metric}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t border-stone-200 pt-5">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-3 text-[0.92rem] leading-6 text-stone-600">
                <span>
                  <span className="text-stone-500">Year</span> {project.year}
                </span>
                <span>
                  <span className="text-stone-500">Sector</span> {project.sector}
                </span>
                <span>
                  <span className="text-stone-500">Client</span> {project.client}
                </span>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border px-3 py-1"
                    style={{ borderColor: `${project.accent}33` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function PostOverlay({
  post,
  onClose,
}: {
  post: Post;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-white">
      <div className="mx-auto min-h-screen max-w-4xl px-6 py-12 md:px-10 md:py-16">
        <header className="mb-12 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="font-label text-[11px] uppercase tracking-[0.2em] text-stone-400">
              {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
            <span className="h-1 w-1 rounded-full bg-stone-200" />
            <span className="font-label text-[11px] uppercase tracking-[0.2em] text-stone-500">
              {post.categories?.[0]?.title}
            </span>
          </div>
          <button
            onClick={onClose}
            className={`${tertiaryButtonClass} gap-2`}
            type="button"
          >
            Close
            <span className="material-symbols-outlined">close</span>
          </button>
        </header>

        <article className="prose prose-stone max-w-none">
          <h1 className="font-headline text-[3rem] leading-[0.95] tracking-[-0.05em] text-stone-950 md:text-[4rem]">
            {post.title}
          </h1>

          {post.mainImage && (
            <div className="my-12 overflow-hidden rounded-[2.5rem] bg-stone-50">
              <img
                src={urlFor(post.mainImage).width(1600).url()}
                alt={post.title}
                className="w-full object-cover"
              />
            </div>
          )}

          <div className="rich-text font-body text-[1.1rem] leading-relaxed text-stone-700 md:text-[1.2rem]">
            <PortableText 
              value={post.body} 
              components={{
                block: {
                  h2: ({children}) => <h2 className="mt-12 mb-6 font-headline text-4xl text-stone-950">{children}</h2>,
                  h3: ({children}) => <h3 className="mt-10 mb-4 font-headline text-3xl text-stone-950">{children}</h3>,
                  normal: ({children}) => <p className="mb-6">{children}</p>,
                },
                types: {
                  image: ({value}) => (
                    <figure className="my-12 overflow-hidden rounded-[2rem] bg-stone-50">
                      <img
                        src={urlFor(value).width(1200).url()}
                        alt={value.alt || ''}
                        className="w-full"
                      />
                      {value.caption && <figcaption className="p-4 text-center text-sm text-stone-400">{value.caption}</figcaption>}
                    </figure>
                  )
                }
              }}
            />
          </div>

          <footer className="mt-16 border-t border-stone-100 pt-10">
            <div className="flex flex-wrap gap-3">
              {post.tags?.map(tag => (
                <span key={tag} className="rounded-full border border-stone-100 bg-stone-50 px-4 py-2 font-label text-[11px] uppercase tracking-[0.15em] text-stone-500">
                  {tag}
                </span>
              ))}
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
}

export default function AppShell({
  initialSection = "home",
}: AppShellProps) {
  const [activeSection, setActiveSection] = useState<SectionId>(initialSection);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const selectedProject = useMemo(
    () => projects.find((project) => project.id === selectedId) ?? null,
    [selectedId],
  );

  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const data = await client.fetch('*[_type == "post"]');
      setPosts(data);
    };
    fetchPosts();
  }, []);

  const selectedPost = useMemo(
    () => posts.find((post) => post._id === selectedPostId) ?? null,
    [selectedPostId, posts],
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
        if (nextSection !== "insights") {
          setSelectedPostId(null);
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
      if (section !== "insights") {
        setSelectedPostId(null);
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

  const openPost = (id: string) => {
    setSelectedPostId(id);
    if (activeSection !== "insights") {
      navigateSection("insights");
    }
  };

  const closePost = () => {
    setSelectedPostId(null);
  };

  const stepSlide = useCallback((direction: -1 | 1) => {
    if (!selectedProject) return;
    const total = selectedProject.slides.length;
    setSlideIndex((current) => (current + direction + total) % total);
  }, [selectedProject]);

  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        stepSlide(-1);
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        stepSlide(1);
      }
      if (event.key === "Escape") {
        event.preventDefault();
        closeProject();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject, stepSlide]);

  return (
    <main className="site-shell relative flex min-h-screen flex-col overflow-hidden bg-transparent px-6 pb-28 pt-6 text-stone-950 md:px-10 md:pb-32 md:pt-8">
      <header className="mx-auto flex w-full max-w-7xl justify-end" />

      <div key={activeSection} className="section-enter relative flex-1 min-h-0">
        {activeSection === "home" ? <HomeSection /> : null}
        {activeSection === "gallery" ? (
          <GallerySection onOpenProject={openProject} />
        ) : null}
        {activeSection === "insights" ? (
          <InsightsSection onOpenPost={openPost} />
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
          onClose={closeProject}
        />
      ) : null}

      {selectedPost ? (
        <PostOverlay
          post={selectedPost}
          onClose={closePost}
        />
      ) : null}

      <div
        className={`pointer-events-none fixed inset-x-0 bottom-6 z-40 flex justify-center px-6 transition-opacity duration-300 md:bottom-8 md:px-10 ${
          selectedProject || selectedPost ? "hidden" : "opacity-100"
        }`}
      >
        <nav className="pointer-events-auto flex items-center gap-2 rounded-full border border-stone-200 bg-white/90 px-2 py-2 shadow-[0_20px_50px_rgba(15,23,42,0.12)] backdrop-blur-md">
          {tabBar.map((item) => (
            <button
              key={item.label}
              type="button"
              aria-label={item.label}
              aria-current={activeSection === item.section ? "page" : undefined}
              onClick={() => navigateSection(item.section)}
              className={`flex h-11 items-center justify-center gap-2 rounded-full px-3 transition-colors ${
                activeSection === item.section
                  ? "bg-stone-950 text-white"
                  : "text-stone-500 hover:bg-stone-100 hover:text-stone-950"
              }`}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className="hidden font-label text-[10px] uppercase tracking-[0.22em] md:inline">
                {item.label}
              </span>
            </button>
          ))}
        </nav>
      </div>
    </main>
  );
}
