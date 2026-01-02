import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section 
        className="min-h-screen overflow-hidden relative"
        style={{
          backgroundImage: 'url(/ice-cannot-adhere.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-arctic-navy/90 via-arctic-navy/85 to-midnight-blue/90"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
          {/* Desktop: Two Column Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
                  The Shift Away From Salt
                </h1>
                <p className="text-frost-blue text-lg leading-relaxed">
                  Winter road safety doesn't require salt damage. IceShield® is an engineered
                  system that stops ice adhesion and provides traction—without the infrastructure
                  corrosion, environmental runoff, and expensive spring cleanup.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex gap-4 pt-4">
                <Link
                  href="/pilot-program"
                  className="bg-iceshield-blue text-arctic-navy px-8 py-3 rounded font-semibold hover:bg-frost-blue transition-all duration-200"
                >
                  Start a Pilot
                </Link>
                <Link
                  href="/how-it-works"
                  className="border border-frost-blue text-frost-blue px-8 py-3 rounded font-semibold hover:border-iceshield-blue hover:text-iceshield-blue transition-all duration-200"
                >
                  Learn How
                </Link>
              </div>

              {/* Scroll Indicator */}
              <div className="pt-6 animate-bounce">
                <svg className="w-6 h-6 text-frost-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>

            {/* Right Column - Logo Visual */}
            <div className="relative h-full flex items-center justify-center">
              <Image
                src="/patchworx-ice-logo.png"
                alt="Patchworx IceShield Logo"
                width={300}
                height={300}
                className="w-full h-auto rounded-2xl"
                priority
              />
            </div>
          </div>

          {/* Mobile: Vertical Stack (Logo First) */}
          <div className="lg:hidden space-y-8">
            {/* Hero Logo */}
            <div className="flex justify-center">
              <Image
                src="/patchworx-ice-logo.png"
                alt="Patchworx IceShield Logo"
                width={250}
                height={250}
                className="w-64 h-auto rounded-2xl"
                priority
              />
            </div>

            {/* Text Content */}
            <div className="space-y-4">
              <h1 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                The Shift Away From Salt
              </h1>
              <p className="text-frost-blue">
                Winter road safety doesn't require salt damage. IceShield® stops ice adhesion
                and provides traction—without corrosion, runoff, or expensive cleanup.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-3">
              <Link
                href="/pilot-program"
                className="bg-iceshield-blue text-arctic-navy px-6 py-3 rounded font-semibold text-center hover:bg-frost-blue transition-all duration-200"
              >
                Start a Pilot
              </Link>
              <Link
                href="/how-it-works"
                className="border border-frost-blue text-frost-blue px-6 py-3 rounded font-semibold text-center hover:border-iceshield-blue hover:text-iceshield-blue transition-all duration-200"
              >
                Learn How
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section: The Problem */}
      <section className="bg-arctic-navy section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="section-header">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Why Salt Is Failing</h2>
            <p className="text-frost-blue text-lg">
              Road salt solves one problem while creating three others.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Problem 1 */}
            <div className="bg-midnight-blue p-8 rounded-lg border border-infrastructure-blue hover:border-iceshield-blue transition-colors duration-200">
              <div className="w-12 h-12 bg-iceshield-blue rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-arctic-navy" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                </svg>
              </div>
              <h3 className="text-snow-white text-xl font-semibold mb-3">Corrosion &amp; Damage</h3>
              <p className="text-frost-blue">
                Salt accelerates rust on bridges, guardrails, undercarriages, and concrete. Replacement costs exceed millions annually.
              </p>
            </div>

            {/* Problem 2 */}
            <div className="bg-midnight-blue p-8 rounded-lg border border-infrastructure-blue hover:border-iceshield-blue transition-colors duration-200">
              <div className="w-12 h-12 bg-iceshield-blue rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-arctic-navy" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                </svg>
              </div>
              <h3 className="text-snow-white text-xl font-semibold mb-3">Refreeze Risk</h3>
              <p className="text-frost-blue">
                Salt's melting point drops in extreme cold. Below −15°C, it stops working and black ice returns.
              </p>
            </div>

            {/* Problem 3 */}
            <div className="bg-midnight-blue p-8 rounded-lg border border-infrastructure-blue hover:border-iceshield-blue transition-colors duration-200">
              <div className="w-12 h-12 bg-iceshield-blue rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-arctic-navy" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-13.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm0 8c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" />
                </svg>
              </div>
              <h3 className="text-snow-white text-xl font-semibold mb-3">Environmental Impact</h3>
              <p className="text-frost-blue">
                Chloride runoff damages waterways, corrodes ecosystems, and contaminates drinking water sources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: The Insight */}
      <section className="bg-midnight-blue section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-white">Melting Ice Is the Wrong Goal</h2>
              <p className="text-frost-blue text-lg">
                IceShield® works on a different principle: bonded ice remains ice, but is no longer bonded to the pavement surface.
              </p>
              <p className="text-frost-blue text-lg">
                Our anti-adhesion treatment and engineered traction grit provide friction and safety without phase change chemistry. The result:
                traction in extreme cold, no salt damage, and spring cleanup that takes hours instead of months.
              </p>
              <div className="pt-4 space-y-2 font-mono text-sm text-iceshield-blue">
                <p>→ No melting required</p>
                <p>→ Works at −30°C and below</p>
                <p>→ Minimal spring cleanup</p>
              </div>
            </div>

            {/* Visual */}
            <Image
              src="/salt-vs-iceshield.png"
              alt="Salt vs IceShield - comparison diagram"
              width={400}
              height={400}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Section: The System (Summary) */}
      <section className="bg-arctic-navy section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="section-header">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">How IceShield® Works</h2>
            <p className="text-frost-blue text-lg">
              Two engineered components work together to break the bond between ice and pavement.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Component 1 */}
            <div className="bg-midnight-blue p-10 rounded-lg border-l-4 border-iceshield-blue">
              <h3 className="text-snow-white text-2xl font-semibold mb-4">Anti-Adhesion Treatment</h3>
              <p className="text-frost-blue mb-4">
                A pre-winter surface treatment modifies the pavement microstructure to prevent ice from bonding at the molecular level.
              </p>
              <ul className="space-y-2 text-frost-blue text-sm">
                <li>✓ Applied before winter season</li>
                <li>✓ Works in extreme cold (−30°C+)</li>
                <li>✓ Lasts one winter cycle</li>
              </ul>
            </div>

            {/* Component 2 */}
            <div className="bg-midnight-blue p-10 rounded-lg border-l-4 border-frost-blue">
              <h3 className="text-snow-white text-2xl font-semibold mb-4">Engineered Traction Grit</h3>
              <p className="text-frost-blue mb-4">
                Specially formulated mineral aggregate provides consistent friction on bonded ice—no salt, no scaling, no corrosion.
              </p>
              <ul className="space-y-2 text-frost-blue text-sm">
                <li>✓ Applied as needed during winter</li>
                <li>✓ Sweepable (minimal spring cleanup)</li>
                <li>✓ Compatible with standard spreaders</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/how-it-works"
              className="inline-block text-iceshield-blue font-semibold hover:text-frost-blue transition-colors"
            >
              View Full Technical Details →
            </Link>
          </div>
        </div>
      </section>

      {/* Section: Safety Impact (Key Metrics) */}
      <section className="bg-midnight-blue section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="section-header">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Reducing Accidents &amp; Damage</h2>
            <p className="text-frost-blue text-lg">
              Clearer roads. Lower accident rates. Faster recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Metric 1 */}
            <div className="text-center">
              <div className="text-5xl font-bold text-iceshield-blue mb-3">67%</div>
              <p className="text-frost-blue">Reduction in black ice accidents in pilot regions</p>
            </div>

            {/* Metric 2 */}
            <div className="text-center">
              <div className="text-5xl font-bold text-iceshield-blue mb-3">80%</div>
              <p className="text-frost-blue">Less salt-related corrosion damage</p>
            </div>

            {/* Metric 3 */}
            <div className="text-center">
              <div className="text-5xl font-bold text-iceshield-blue mb-3">$2.1M</div>
              <p className="text-frost-blue">Annual savings per 100 miles (salt cleanup + repairs)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Environmental Alignment (Brief) */}
      <section className="bg-arctic-navy section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-white">Zero Chloride. Clear Water.</h2>
              <p className="text-frost-blue text-lg">
                Road salt causes permanent damage to drinking water systems, agricultural land, and aquatic ecosystems.
              </p>
              <p className="text-frost-blue text-lg">
                IceShield® eliminates salt runoff entirely. No chloride. No alkaline spike. Waterways remain safe.
              </p>
            </div>

            {/* Visual Callout */}
            <div className="bg-midnight-blue p-10 rounded-lg border border-infrastructure-blue">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="text-2xl text-iceshield-blue">✓</div>
                  <div>
                    <h4 className="text-snow-white font-semibold mb-1">Waterway Protection</h4>
                    <p className="text-frost-blue text-sm">Zero saline runoff into streams and groundwater.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-2xl text-iceshield-blue">✓</div>
                  <div>
                    <h4 className="text-snow-white font-semibold mb-1">Soil Integrity</h4>
                    <p className="text-frost-blue text-sm">No salt accumulation. Vegetation thrives year-round.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-2xl text-iceshield-blue">✓</div>
                  <div>
                    <h4 className="text-snow-white font-semibold mb-1">Climate Resilience</h4>
                    <p className="text-frost-blue text-sm">Proven in extreme cold. Scales with climate variability.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/environmental"
              className="inline-block text-iceshield-blue font-semibold hover:text-frost-blue transition-colors"
            >
              Full Environmental Report →
            </Link>
          </div>
        </div>
      </section>

      {/* Section: Final CTA */}
      <section className="bg-arctic-navy section border-t border-midnight-blue">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">Ready to Move Beyond Salt?</h2>
          <p className="text-frost-blue text-lg max-w-2xl mx-auto">
            Start with a pilot program. Test IceShield® on 5–10 miles of high-risk road during one winter season.
            See the results yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pilot-program"
              className="bg-iceshield-blue text-arctic-navy px-8 py-3 rounded font-semibold hover:bg-frost-blue transition-all duration-200"
            >
              Request a Pilot
            </Link>
            <Link
              href="/contact"
              className="text-iceshield-blue font-semibold hover:text-frost-blue transition-colors"
            >
              Get in Touch →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
