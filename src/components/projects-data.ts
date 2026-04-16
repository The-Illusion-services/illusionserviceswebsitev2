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

export const projects: Project[] = [
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
];
