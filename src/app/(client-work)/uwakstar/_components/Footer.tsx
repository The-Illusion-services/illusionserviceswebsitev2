const shopLinks = ["All Products", "Clutches", "Crossbody Bags", "Earrings", "New In"];
const careLinks = ["Shipping & Delivery", "Returns & Exchanges", "FAQ", "Contact Us"];
const aboutLinks = ["Our Story", "Founder", "Sustainability", "Care Instructions"];

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}

function PinterestIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.428 1.808-2.428.853 0 1.267.64 1.267 1.408 0 .858-.546 2.14-.828 3.33-.236.995.499 1.806 1.476 1.806 1.771 0 3.135-1.867 3.135-4.563 0-2.386-1.716-4.054-4.165-4.054-2.837 0-4.502 2.127-4.502 4.327 0 .856.33 1.775.741 2.276a.3.3 0 01.069.286c-.076.315-.244.995-.277 1.134-.044.183-.146.222-.337.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.966-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.938.29 1.931.446 2.962.446 5.522 0 10-4.477 10-10S17.522 2 12 2z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#F8F5EE] border-t border-[#E6DED2] pt-16 pb-8">
      <div className="w-[min(calc(100%-64px),1280px)] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <span
                className="block text-[#B7924A] text-[13px] font-semibold tracking-[0.28em] uppercase leading-snug"
                style={{ fontFamily: "var(--font-body)" }}
              >
                UWAKSTAR
              </span>
              <span
                className="block text-[#B7924A] text-[10px] font-medium tracking-[0.32em] uppercase"
                style={{ fontFamily: "var(--font-body)" }}
              >
                DESIGNS
              </span>
            </div>
            <p
              className="text-[#6F665C] text-[13px] leading-[1.7] mb-6 max-w-[200px]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Handcrafted accessories inspired by culture and made for you.
            </p>
            <div className="flex items-center gap-4 text-[#6F665C]">
              <a href="#" aria-label="Instagram" className="hover:text-[#B7924A] transition-colors"><InstagramIcon /></a>
              <a href="#" aria-label="Facebook" className="hover:text-[#B7924A] transition-colors"><FacebookIcon /></a>
              <a href="#" aria-label="Pinterest" className="hover:text-[#B7924A] transition-colors"><PinterestIcon /></a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4
              className="text-[#24211D] text-[11px] font-semibold tracking-[0.16em] uppercase mb-5"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Shop
            </h4>
            <ul className="flex flex-col gap-3">
              {shopLinks.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-[#6F665C] text-[13px] hover:text-[#24211D] transition-colors"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4
              className="text-[#24211D] text-[11px] font-semibold tracking-[0.16em] uppercase mb-5"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Customer Care
            </h4>
            <ul className="flex flex-col gap-3">
              {careLinks.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-[#6F665C] text-[13px] hover:text-[#24211D] transition-colors"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4
              className="text-[#24211D] text-[11px] font-semibold tracking-[0.16em] uppercase mb-5"
              style={{ fontFamily: "var(--font-body)" }}
            >
              About
            </h4>
            <ul className="flex flex-col gap-3">
              {aboutLinks.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-[#6F665C] text-[13px] hover:text-[#24211D] transition-colors"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4
              className="text-[#24211D] text-[11px] font-semibold tracking-[0.16em] uppercase mb-5"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Join Our Community
            </h4>
            <p
              className="text-[#6F665C] text-[13px] leading-[1.7] mb-5"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Follow us for style inspiration and behind-the-scenes.
            </p>
            <div className="flex items-center gap-4 text-[#6F665C]">
              <a href="#" aria-label="Instagram" className="hover:text-[#B7924A] transition-colors"><InstagramIcon /></a>
              <a href="#" aria-label="Facebook" className="hover:text-[#B7924A] transition-colors"><FacebookIcon /></a>
              <a href="#" aria-label="Pinterest" className="hover:text-[#B7924A] transition-colors"><PinterestIcon /></a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#E6DED2] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-[#B8AA98] text-[12px]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            © 2024 Uwakstar Designs. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="#"
              className="text-[#B8AA98] text-[12px] hover:text-[#6F665C] transition-colors"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[#B8AA98] text-[12px] hover:text-[#6F665C] transition-colors"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
