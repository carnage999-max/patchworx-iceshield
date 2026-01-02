import Link from "next/link";
import Image from "next/image";

export default function HowItWorks() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-b from-arctic-navy to-midnight-blue py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-center mb-6">How IceShield® Works</h1>
          <p className="text-frost-blue text-lg text-center max-w-2xl mx-auto">
            Technical clarity on the engineered system that breaks ice bonds without salt chemistry.
          </p>
        </div>
      </section>

      {/* Anti-Adhesion Treatment */}
      <section className="bg-arctic-navy py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-white">Anti-Adhesion Treatment</h2>
              <p className="text-frost-blue text-lg">
                Applied before winter, this surface treatment modifies the pavement microstructure at a molecular level to prevent ice adhesion.
              </p>
              <div className="space-y-4 text-frost-blue">
                <div>
                  <h4 className="text-iceshield-blue font-semibold mb-2">Mechanism</h4>
                  <p>Changes surface energy profile so ice crystals cannot bond strongly to the pavement.</p>
                </div>
                <div>
                  <h4 className="text-iceshield-blue font-semibold mb-2">Application</h4>
                  <p>One pre-season treatment before first snow.</p>
                </div>
                <div>
                  <h4 className="text-iceshield-blue font-semibold mb-2">Duration</h4>
                  <p>Active throughout one winter season.</p>
                </div>
              </div>
            </div>

            <div className="bg-midnight-blue p-10 rounded-lg border border-infrastructure-blue">
              <Image
                src="/tanker-spraying-floor-with-ice-shield.png"
                alt="IceShield anti-adhesion treatment being applied"
                width={400}
                height={300}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Engineered Traction Grit */}
      <section className="bg-midnight-blue py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-white">Engineered Traction Grit</h2>
              <p className="text-frost-blue text-lg">
                A specially formulated mineral aggregate that sits on bonded ice without requiring melting. Provides consistent friction in extreme cold.
              </p>
              <div className="space-y-4 text-frost-blue">
                <div>
                  <h4 className="text-frost-blue font-semibold mb-2">Composition</h4>
                  <p>Non-saline mineral blend engineered for optimal friction profile.</p>
                </div>
                <div>
                  <h4 className="text-frost-blue font-semibold mb-2">Application</h4>
                  <p>Applied as needed during winter (standard snow/ice management schedule).</p>
                </div>
                <div>
                  <h4 className="text-frost-blue font-semibold mb-2">Spring Recovery</h4>
                  <p>Sweepable. No chemical residue. Removed in 1–2 passes.</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 bg-arctic-navy p-10 rounded-lg border border-infrastructure-blue">
              <Image
                src="/grit-cleanup-and-reuse.png"
                alt="IceShield engineered traction grit"
                width={400}
                height={300}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Standard Operations Compatibility */}
      <section className="bg-arctic-navy py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-16">Standard Operations Compatibility</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-midnight-blue p-8 rounded-lg border border-infrastructure-blue">
              <h3 className="text-snow-white font-semibold mb-4">Equipment</h3>
              <p className="text-frost-blue mb-4">
                Uses standard spreaders, plows, and maintenance vehicles. No special equipment required.
              </p>
              <ul className="space-y-2 text-frost-blue text-sm">
                <li>✓ Compatible with salt spreaders</li>
                <li>✓ Works with standard plow trucks</li>
                <li>✓ No equipment modification needed</li>
              </ul>
            </div>

            <div className="bg-midnight-blue p-8 rounded-lg border border-infrastructure-blue">
              <h3 className="text-snow-white font-semibold mb-4">Staffing</h3>
              <p className="text-frost-blue mb-4">
                Operations crews apply treatment and grit using existing winter maintenance protocols.
              </p>
              <ul className="space-y-2 text-frost-blue text-sm">
                <li>✓ No new training required</li>
                <li>✓ Same crew schedule</li>
                <li>✓ Faster operations (no melting wait)</li>
              </ul>
            </div>

            <div className="bg-midnight-blue p-8 rounded-lg border border-infrastructure-blue">
              <h3 className="text-snow-white font-semibold mb-4">Budget</h3>
              <p className="text-frost-blue mb-4">
                Total cost per mile is 40–60% lower than salt-based management over full lifecycle.
              </p>
              <ul className="space-y-2 text-frost-blue text-sm">
                <li>✓ Lower material cost</li>
                <li>✓ Reduced repairs</li>
                <li>✓ Minimal spring cleanup</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bonded vs Non-Bonded (Expanded) */}
      <section className="bg-midnight-blue py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-16">Bonded vs. Non-Bonded Ice</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Bonded Ice */}
            <div className="bg-arctic-navy p-10 rounded-lg border border-infrastructure-blue">
              <h3 className="text-snow-white font-semibold text-xl mb-6">Bonded Ice (Salt Approach)</h3>
              <div className="space-y-4 text-frost-blue">
                <div>
                  <h4 className="text-iceshield-blue font-semibold mb-1">What it is</h4>
                  <p className="text-sm">Ice crystals locked tightly to pavement surface by van der Waals forces.</p>
                </div>
                <div>
                  <h4 className="text-iceshield-blue font-semibold mb-1">The problem</h4>
                  <p className="text-sm">Cannot be removed without melting or mechanical scraping. Causes black ice, slipping.</p>
                </div>
                <div>
                  <h4 className="text-iceshield-blue font-semibold mb-1">Salt's role</h4>
                  <p className="text-sm">Lowers freezing point, but fails at extreme cold (−15°C+). Corrodes infrastructure.</p>
                </div>
              </div>
            </div>

            {/* Non-Bonded Ice */}
            <div className="bg-arctic-navy p-10 rounded-lg border border-iceshield-blue">
              <h3 className="text-snow-white font-semibold text-xl mb-6">Non-Bonded Ice (IceShield®)</h3>
              <div className="space-y-4 text-frost-blue">
                <div>
                  <h4 className="text-frost-blue font-semibold mb-1">What it is</h4>
                  <p className="text-sm">Ice remains on road but has weak adhesion to pavement. Traction grit provides friction.</p>
                </div>
                <div>
                  <h4 className="text-frost-blue font-semibold mb-1">The advantage</h4>
                  <p className="text-sm">Friction without melting. Works in extreme cold. No phase change required.</p>
                </div>
                <div>
                  <h4 className="text-frost-blue font-semibold mb-1">How it happens</h4>
                  <p className="text-sm">Anti-adhesion treatment breaks the bond. Grit provides traction on ice surface.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-midnight-blue p-8 rounded-lg border border-infrastructure-blue">
            <h3 className="text-snow-white font-semibold mb-4">Temperature Performance</h3>
            <div className="space-y-3 text-frost-blue text-sm">
              <p>
                <strong className="text-iceshield-blue">Salt effectiveness:</strong> Drops sharply below −15°C. Becomes ineffective at −20°C and lower.
              </p>
              <p>
                <strong className="text-iceshield-blue">IceShield® effectiveness:</strong> Constant from 0°C to −40°C. Performs better in extreme cold where salt fails.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Works in Extreme Cold */}
      <section className="bg-arctic-navy py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">Why This Works in Extreme Cold</h2>

          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-midnight-blue p-8 rounded-lg border-l-4 border-iceshield-blue">
              <h3 className="text-snow-white font-semibold mb-3">No Chemistry Required</h3>
              <p className="text-frost-blue">
                IceShield® relies on mechanical traction and surface energy, not phase-change chemistry. There is no melting point to fail. Ice remains ice, but friction is provided.
              </p>
            </div>

            <div className="bg-midnight-blue p-8 rounded-lg border-l-4 border-frost-blue">
              <h3 className="text-snow-white font-semibold mb-3">Anti-Adhesion at Molecular Scale</h3>
              <p className="text-frost-blue">
                The treatment modifies pavement surface energy, reducing the van der Waals bond strength between ice and road. This works at any temperature.
              </p>
            </div>

            <div className="bg-midnight-blue p-8 rounded-lg border-l-4 border-iceshield-blue">
              <h3 className="text-snow-white font-semibold mb-3">Grit Friction Always Available</h3>
              <p className="text-frost-blue">
                Traction grit provides consistent friction coefficient across the temperature range. No degradation in cold.
              </p>
            </div>

            <div className="bg-midnight-blue p-8 rounded-lg border-l-4 border-frost-blue">
              <h3 className="text-snow-white font-semibold mb-3">Proven in Coldest Regions</h3>
              <p className="text-frost-blue">
                Tested in Canada and northern US (−30°C+). Data shows superior safety and durability vs. salt in cold climates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-midnight-blue py-20 lg:py-32 border-t border-arctic-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">Ready to Learn More?</h2>
          <p className="text-frost-blue text-lg max-w-2xl mx-auto">
            See how IceShield® performs in real-world conditions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pilot-program"
              className="bg-iceshield-blue text-arctic-navy px-8 py-3 rounded font-semibold hover:bg-frost-blue transition-all duration-200"
            >
              Start a Pilot
            </Link>
            <Link
              href="/contact"
              className="border border-frost-blue text-frost-blue px-8 py-3 rounded font-semibold hover:border-iceshield-blue hover:text-iceshield-blue transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
