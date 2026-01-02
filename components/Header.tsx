"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-arctic-navy border-b border-midnight-blue">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <Image
            src="/patchworx-ice-logo.png"
            alt="Patchworx IceShield Logo"
            width={40}
            height={40}
            className="w-10 h-10 rounded-lg"
          />
          <span className="text-2xl font-bold text-iceshield-blue">IceShield®</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/" className="text-snow-white hover:text-iceshield-blue transition-colors">
            Home
          </Link>
          <Link href="/how-it-works" className="text-snow-white hover:text-iceshield-blue transition-colors">
            How It Works
          </Link>
          <Link href="/safety-cost" className="text-snow-white hover:text-iceshield-blue transition-colors">
            Safety & Cost
          </Link>
          <Link href="/pilot-program" className="text-snow-white hover:text-iceshield-blue transition-colors">
            Pilot Program
          </Link>
          <Link href="/about" className="text-snow-white hover:text-iceshield-blue transition-colors">
            About Patchworx
          </Link>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="bg-iceshield-blue text-arctic-navy px-6 py-2 rounded transition-all duration-200 hover:bg-frost-blue font-semibold"
          >
            Request a Pilot
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-iceshield-blue hover:text-frost-blue"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-midnight-blue px-6 py-4 space-y-4">
          <Link
            href="/"
            className="block text-snow-white hover:text-iceshield-blue transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/how-it-works"
            className="block text-snow-white hover:text-iceshield-blue transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            How It Works
          </Link>
          <Link
            href="/safety-cost"
            className="block text-snow-white hover:text-iceshield-blue transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Safety & Cost
          </Link>
          <Link
            href="/pilot-program"
            className="block text-snow-white hover:text-iceshield-blue transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Pilot Program
          </Link>
          <Link
            href="/about"
            className="block text-snow-white hover:text-iceshield-blue transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            About Patchworx
          </Link>
          <Link
            href="/contact"
            className="block w-full bg-iceshield-blue text-arctic-navy px-6 py-2 rounded text-center font-semibold hover:bg-frost-blue transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Request a Pilot
          </Link>
        </div>
      )}
    </header>
  );
}
