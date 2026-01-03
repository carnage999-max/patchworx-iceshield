"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-snow-white/95 backdrop-blur-sm border-b border-frost-blue/20">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo - All Devices */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Image
            src="/patchworx-ice-logo.png"
            alt="Patchworx IceShield"
            width={44}
            height={44}
            className="w-11 h-11 rounded-2xl"
          />
          <span className="hidden md:inline text-2xl font-bold text-arctic-navy">IceShield®</span>
        </Link>

        {/* Mobile Centered Site Name */}
        <span className="md:hidden flex-1 text-center text-lg font-bold text-arctic-navy">IceShield®</span>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {isHomePage ? (
            <>
              <a href="#problem" onClick={(e) => handleSmoothScroll(e, "problem")} className="text-arctic-navy hover:text-iceshield-blue transition-colors cursor-pointer">
                The Problem
              </a>
              <a href="#how-it-works" onClick={(e) => handleSmoothScroll(e, "how-it-works")} className="text-arctic-navy hover:text-iceshield-blue transition-colors cursor-pointer">
                How It Works
              </a>
              <a href="#safety" onClick={(e) => handleSmoothScroll(e, "safety")} className="text-arctic-navy hover:text-iceshield-blue transition-colors cursor-pointer">
                Safety
              </a>
              <a href="#pilot" onClick={(e) => handleSmoothScroll(e, "pilot")} className="text-arctic-navy hover:text-iceshield-blue transition-colors cursor-pointer">
                Pilot Program
              </a>
            </>
          ) : (
            <>
              <Link href="/" className="text-arctic-navy hover:text-iceshield-blue transition-colors">
                Home
              </Link>
              <Link href="/#how-it-works" className="text-arctic-navy hover:text-iceshield-blue transition-colors">
                How It Works
              </Link>
              <Link href="/#pilot" className="text-arctic-navy hover:text-iceshield-blue transition-colors">
                Pilot Program
              </Link>
            </>
          )}

          {/* CTA Button */}
          <Link
            href="/contact"
            className="bg-iceshield-blue text-white px-6 py-2 rounded-xl transition-all duration-200 hover:shadow-lg font-semibold"
          >
            Request a Pilot
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-arctic-navy hover:text-iceshield-blue transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`h-0.5 w-full bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
            <span className={`h-0.5 w-full bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`h-0.5 w-full bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-frost-blue/5 border-t border-frost-blue/20 px-6 py-4 space-y-4">
          {isHomePage ? (
            <>
              <a href="#problem" onClick={(e) => handleSmoothScroll(e, "problem")} className="block text-arctic-navy hover:text-iceshield-blue transition-colors">
                The Problem
              </a>
              <a href="#how-it-works" onClick={(e) => handleSmoothScroll(e, "how-it-works")} className="block text-arctic-navy hover:text-iceshield-blue transition-colors">
                How It Works
              </a>
              <a href="#safety" onClick={(e) => handleSmoothScroll(e, "safety")} className="block text-arctic-navy hover:text-iceshield-blue transition-colors">
                Safety
              </a>
              <a href="#pilot" onClick={(e) => handleSmoothScroll(e, "pilot")} className="block text-arctic-navy hover:text-iceshield-blue transition-colors">
                Pilot Program
              </a>
            </>
          ) : (
            <>
              <Link href="/" className="block text-arctic-navy hover:text-iceshield-blue transition-colors" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
              <Link href="/#how-it-works" className="block text-arctic-navy hover:text-iceshield-blue transition-colors" onClick={() => setMenuOpen(false)}>
                How It Works
              </Link>
              <Link href="/#pilot" className="block text-arctic-navy hover:text-iceshield-blue transition-colors" onClick={() => setMenuOpen(false)}>
                Pilot Program
              </Link>
            </>
          )}
          <Link
            href="/contact"
            className="block w-full bg-iceshield-blue text-white px-6 py-2 rounded-xl text-center font-semibold hover:shadow-lg transition-all"
            onClick={() => setMenuOpen(false)}
          >
            Request a Pilot
          </Link>
        </div>
      )}
    </header>
  );
}
