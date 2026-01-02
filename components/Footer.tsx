import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-arctic-navy border-t border-midnight-blue mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/patchworx-ice-logo.png"
                alt="Patchworx IceShield Logo"
                width={40}
                height={40}
                className="w-10 h-10 rounded-lg"
              />
              <h3 className="text-iceshield-blue text-xl font-bold">IceShield®</h3>
            </div>
            <p className="text-frost-blue text-sm">
              Advanced winter road protection. Move beyond salt.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-snow-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/how-it-works" className="text-frost-blue hover:text-iceshield-blue transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/safety-cost" className="text-frost-blue hover:text-iceshield-blue transition-colors">
                  Safety & Performance
                </Link>
              </li>
              <li>
                <Link href="/pilot-program" className="text-frost-blue hover:text-iceshield-blue transition-colors">
                  Pilot Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-snow-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-frost-blue hover:text-iceshield-blue transition-colors">
                  About Patchworx
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-frost-blue hover:text-iceshield-blue transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-snow-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-frost-blue hover:text-iceshield-blue transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-frost-blue hover:text-iceshield-blue transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/environmental-disclosure" className="text-frost-blue hover:text-iceshield-blue transition-colors">
                  Environmental Disclosure
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-midnight-blue mb-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-infrastructure-blue">
          <p>&copy; 2025 Patchworx Inc. IceShield® is a registered trademark.</p>
          <p>Engineered for cold. Built to last.</p>
        </div>
      </div>
    </footer>
  );
}
