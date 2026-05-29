"use client";
import { useState } from "react";

const navLinks = ["Shop", "New In", "Collections", "About", "The Story"];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#FFFCF7] border-b border-[#E6DED2] sticky top-0 z-50">
      <div className="w-[min(calc(100%-64px),1280px)] mx-auto flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <div className="flex flex-col leading-none">
          <span
            className="text-[#B7924A] font-[var(--font-body)] text-[13px] font-semibold tracking-[0.28em] uppercase"
            style={{ fontFamily: "var(--font-body)" }}
          >
            UWAKSTAR
          </span>
          <span
            className="text-[#B7924A] font-[var(--font-body)] text-[10px] font-medium tracking-[0.32em] uppercase"
            style={{ fontFamily: "var(--font-body)" }}
          >
            DESIGNS
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-[#24211D] text-[11px] font-medium tracking-[0.08em] uppercase hover:text-[#B7924A] transition-colors duration-200"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Right Icons */}
        <div className="hidden md:flex items-center gap-5">
          {/* Search */}
          <button aria-label="Search" className="text-[#24211D] hover:text-[#B7924A] transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="7" />
              <line x1="16.5" y1="16.5" x2="22" y2="22" />
            </svg>
          </button>
          {/* Account */}
          <button aria-label="Account" className="text-[#24211D] hover:text-[#B7924A] transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
            </svg>
          </button>
          {/* Cart */}
          <button aria-label="Cart" className="text-[#24211D] hover:text-[#B7924A] transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
          </button>
        </div>

        {/* Mobile: cart + hamburger */}
        <div className="flex md:hidden items-center gap-4">
          <button aria-label="Cart" className="text-[#24211D]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
          </button>
          <button
            aria-label="Toggle menu"
            className="text-[#24211D]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#FFFCF7] border-t border-[#E6DED2] px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-[#24211D] text-[12px] font-medium tracking-[0.1em] uppercase"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
