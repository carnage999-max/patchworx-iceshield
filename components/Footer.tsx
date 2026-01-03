import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-arctic-navy border-t border-midnight-blue/50 mt-20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand - Takes full width on mobile, 1 column on large screens */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4 group cursor-pointer">
              <Image
                src="/patchworx-ice-logo.png"
                alt="Patchworx IceShield Logo"
                width={40}
                height={40}
                className="w-10 h-10 rounded-xl group-hover:scale-110 transition-transform duration-200"
              />
              <h3 className="text-iceshield-blue text-xl font-bold group-hover:text-frost-blue transition-colors">
                IceShield®
              </h3>
            </div>
            <p className="text-frost-blue/80 text-sm lg:text-base mb-6 leading-relaxed max-w-sm">
              Advanced winter road protection. Move beyond salt.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-snow-white font-semibold mb-4 tracking-tight">Product</h4>
            <ul className="space-y-3 text-sm lg:text-base">
              <li>
                <Link href="/#how-it-works" className="text-frost-blue/80 hover:text-iceshield-blue transition-all duration-200 hover:translate-x-1 inline-block">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/#safety" className="text-frost-blue/80 hover:text-iceshield-blue transition-all duration-200 hover:translate-x-1 inline-block">
                  Safety & Performance
                </Link>
              </li>
              <li>
                <Link href="/#pilot" className="text-frost-blue/80 hover:text-iceshield-blue transition-all duration-200 hover:translate-x-1 inline-block">
                  Pilot Program
                </Link>
              </li>
              <li>
                <Link href="/#scalability" className="text-frost-blue/80 hover:text-iceshield-blue transition-all duration-200 hover:translate-x-1 inline-block">
                  Scalability
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-snow-white font-semibold mb-4 tracking-tight">Company</h4>
            <ul className="space-y-3 text-sm lg:text-base">
              <li>
                <Link href="/#patchworx" className="text-frost-blue/80 hover:text-iceshield-blue transition-all duration-200 hover:translate-x-1 inline-block">
                  About Patchworx
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-frost-blue/80 hover:text-iceshield-blue transition-all duration-200 hover:translate-x-1 inline-block">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/#environmental" className="text-frost-blue/80 hover:text-iceshield-blue transition-all duration-200 hover:translate-x-1 inline-block">
                  Environmental Impact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-snow-white font-semibold mb-4 tracking-tight">Legal</h4>
            <ul className="space-y-3 text-sm lg:text-base">
              <li>
                <Link href="/privacy" className="text-frost-blue/80 hover:text-iceshield-blue transition-all duration-200 hover:translate-x-1 inline-block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-frost-blue/80 hover:text-iceshield-blue transition-all duration-200 hover:translate-x-1 inline-block">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-midnight-blue/50 mb-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs lg:text-sm text-infrastructure-blue/80">
          <p className="text-center md:text-left">
            &copy; 2025-2026 Patchworx Inc. IceShield® is a registered trademark.
          </p>
          <p className="text-center md:text-right font-medium text-frost-blue/60">
            Engineered for cold. Built to last.
          </p>
        </div>
      </div>
    </footer>
  );
}
