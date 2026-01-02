import Link from "next/link";

export default function Environmental() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-b from-arctic-navy to-midnight-blue py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-center mb-6">Environmental &amp; Climate Alignment</h1>
          <p className="text-frost-blue text-lg text-center max-w-2xl mx-auto">
            Regulatory compliance, waterway protection, and soil integrity. Factual environmental benefits without greenwashing.
          </p>
        </div>
      </section>

      {/* Zero Chloride Runoff */}
      <section className="bg-arctic-navy py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-16">Zero Chloride Runoff</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-frost-blue text-lg">
                Road salt dissolves in meltwater and enters aquifers, streams, and drinking water reservoirs. This is permanent contamination—chloride ions do not degrade.
              </p>
              <p className="text-frost-blue text-lg">
                IceShield® eliminates salt entirely. No chemical runoff. No long-term groundwater impact.
              </p>
              <div className="space-y-4">
                <div className="bg-midnight-blue p-6 rounded-lg border border-infrastructure-blue">
                  <h4 className="text-iceshield-blue font-semibold mb-2">Chloride Persistence</h4>
                  <p className="text-frost-blue text-sm">
                    Once in groundwater, chloride remains for 50+ years. Salt applied in 2000 is still contaminating wells today.
                  </p>
                </div>
                <div className="bg-midnight-blue p-6 rounded-lg border border-infrastructure-blue">
                  <h4 className="text-iceshield-blue font-semibold mb-2">IceShield® Alternative</h4>
                  <p className="text-frost-blue text-sm">
                    Mineral grit remains inert. No chemical reaction. Swept away in spring—zero environmental persistence.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-midnight-blue p-10 rounded-lg border border-infrastructure-blue">
              <h3 className="text-snow-white font-semibold text-lg mb-8">Chloride in North American Waterways</h3>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-5xl font-bold text-iceshield-blue mb-2">137M tons</div>
                  <p className="text-frost-blue text-sm">Accumulated chloride from road salt</p>
                </div>
                <div className="text-center border-t border-infrastructure-blue pt-6">
                  <div className="text-4xl font-bold text-frost-blue mb-2">2,400+</div>
                  <p className="text-frost-blue text-sm">Municipalities with drinking water chloride concerns</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waterway Protection */}
      <section className="bg-midnight-blue py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-16">Waterway Protection</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-arctic-navy p-8 rounded-lg border border-infrastructure-blue">
              <h3 className="text-snow-white font-semibold text-xl mb-4">Fish &amp; Aquatic Life</h3>
              <p className="text-frost-blue mb-4">
                Freshwater fish (trout, salmon, bass) cannot tolerate saline conditions. Chloride shock kills breeding and nursery habitat.
              </p>
              <div className="bg-midnight-blue p-4 rounded text-frost-blue text-sm">
                <p className="font-semibold mb-2">Spring runoff impact:</p>
                <p>Fish kills in downstream zones. Ecosystem collapse.</p>
              </div>
            </div>

            <div className="bg-arctic-navy p-8 rounded-lg border border-infrastructure-blue">
              <h3 className="text-snow-white font-semibold text-xl mb-4">Wetlands &amp; Vegetation</h3>
              <p className="text-frost-blue mb-4">
                Salt-intolerant plants die. Invasive, salt-tolerant species (halophytes) take over. Native ecosystems collapse.
              </p>
              <div className="bg-midnight-blue p-4 rounded text-frost-blue text-sm">
                <p className="font-semibold mb-2">Long-term effect:</p>
                <p>Permanent habitat shift. Biodiversity loss.</p>
              </div>
            </div>

            <div className="bg-arctic-navy p-8 rounded-lg border border-infrastructure-blue">
              <h3 className="text-snow-white font-semibold text-xl mb-4">Groundwater Systems</h3>
              <p className="text-frost-blue mb-4">
                Chloride leaches through soil into aquifers. Drinking water wells become unusable. Remediation costs exceed millions.
              </p>
              <div className="bg-midnight-blue p-4 rounded text-frost-blue text-sm">
                <p className="font-semibold mb-2">No recovery:</p>
                <p>Contamination is permanent once established.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Soil Integrity */}
      <section className="bg-arctic-navy py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-16">Soil Integrity &amp; Agricultural Impact</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-frost-blue text-lg">
                Road salt accumulates in soil adjacent to winter roads. High salinity disrupts soil structure, kills vegetation, and reduces crop productivity.
              </p>
              <div className="space-y-4">
                <div className="bg-midnight-blue p-6 rounded-lg border border-infrastructure-blue">
                  <h4 className="text-iceshield-blue font-semibold mb-2">Soil Chemistry</h4>
                  <p className="text-frost-blue text-sm">
                    Salt breaks down clay aggregates. Soil compacts. Water infiltration decreases. Erosion increases.
                  </p>
                </div>
                <div className="bg-midnight-blue p-6 rounded-lg border border-infrastructure-blue">
                  <h4 className="text-iceshield-blue font-semibold mb-2">Vegetation Death</h4>
                  <p className="text-frost-blue text-sm">
                    High salt concentration damages plant roots. Grass, trees, and crops die within 10–20 feet of road.
                  </p>
                </div>
                <div className="bg-midnight-blue p-6 rounded-lg border border-infrastructure-blue">
                  <h4 className="text-iceshield-blue font-semibold mb-2">Recovery Time</h4>
                  <p className="text-frost-blue text-sm">
                    Decades required for salt-damaged soil to recover. Leaching is slow and incomplete.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-midnight-blue p-10 rounded-lg border border-infrastructure-blue">
              <h3 className="text-snow-white font-semibold text-lg mb-6">IceShield® Soil Benefits</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="text-2xl text-iceshield-blue">✓</div>
                  <div>
                    <h4 className="text-snow-white font-semibold mb-1">No Salt Accumulation</h4>
                    <p className="text-frost-blue text-sm">Mineral grit is inert. No chemical impact on soil.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-2xl text-iceshield-blue">✓</div>
                  <div>
                    <h4 className="text-snow-white font-semibold mb-1">Normal Vegetation</h4>
                    <p className="text-frost-blue text-sm">Roadside plants thrive year-round. No salt-stress damage.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-2xl text-iceshield-blue">✓</div>
                  <div>
                    <h4 className="text-snow-white font-semibold mb-1">Agricultural Compatibility</h4>
                    <p className="text-frost-blue text-sm">No crop yield loss near treated roads.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-2xl text-iceshield-blue">✓</div>
                  <div>
                    <h4 className="text-snow-white font-semibold mb-1">Immediate Recovery</h4>
                    <p className="text-frost-blue text-sm">Spring cleanup removes all residual material in days.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Climate Resilience */}
      <section className="bg-midnight-blue py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-16">Climate Resilience &amp; Extreme Cold Performance</h2>

          <div className="max-w-3xl mx-auto space-y-8">
            <p className="text-frost-blue text-lg text-center">
              Climate change brings less predictable winters—but also occasional extreme cold events. IceShield® is engineered for both scenarios.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-arctic-navy p-8 rounded-lg border border-infrastructure-blue">
                <h3 className="text-snow-white font-semibold mb-4">Warm/Variable Winters</h3>
                <p className="text-frost-blue text-sm mb-4">
                  Frequent freeze-thaw cycles create repeated black ice risk. IceShield® handles this better than salt because it doesn't require melting.
                </p>
                <div className="text-iceshield-blue font-semibold text-sm">Advantage: ✓ No refreeze vulnerability</div>
              </div>

              <div className="bg-arctic-navy p-8 rounded-lg border border-infrastructure-blue">
                <h3 className="text-snow-white font-semibold mb-4">Extreme Cold Snap</h3>
                <p className="text-frost-blue text-sm mb-4">
                  Below −15°C, salt fails chemically. IceShield® performs identically at −30°C because it relies on mechanical traction, not phase change.
                </p>
                <div className="text-iceshield-blue font-semibold text-sm">Advantage: ✓ Consistent performance</div>
              </div>
            </div>

            <div className="bg-iceshield-blue bg-opacity-10 p-10 rounded-lg border border-iceshield-blue">
              <h3 className="text-snow-white font-semibold mb-4">Temperature Performance Guarantee</h3>
              <p className="text-frost-blue mb-4">
                IceShield® effectiveness remains constant from 0°C to −40°C. No degradation in cold.
              </p>
              <div className="font-mono text-frost-blue text-sm space-y-2">
                <p><strong>0°C to −10°C:</strong> ✓ Normal performance</p>
                <p><strong>−10°C to −20°C:</strong> ✓ Identical performance</p>
                <p><strong>−20°C to −40°C:</strong> ✓ Best-in-class performance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Alignment */}
      <section className="bg-arctic-navy py-20 lg:py-32 border-t border-midnight-blue">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-16">Regulatory Alignment</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-midnight-blue p-8 rounded-lg border border-infrastructure-blue">
              <h3 className="text-snow-white font-semibold mb-4">Water Quality Standards</h3>
              <p className="text-frost-blue text-sm mb-4">
                State & federal water quality regulations increasingly restrict chloride pollution. IceShield® is regulatory-proof.
              </p>
              <div className="text-iceshield-blue font-semibold text-sm">Status: ✓ Full compliance</div>
            </div>

            <div className="bg-midnight-blue p-8 rounded-lg border border-infrastructure-blue">
              <h3 className="text-snow-white font-semibold mb-4">Drinking Water Protection</h3>
              <p className="text-frost-blue text-sm mb-4">
                EPA & EPA state standards increasingly flag chloride. IceShield® removes this regulatory liability.
              </p>
              <div className="text-iceshield-blue font-semibold text-sm">Status: ✓ No liability</div>
            </div>

            <div className="bg-midnight-blue p-8 rounded-lg border border-infrastructure-blue">
              <h3 className="text-snow-white font-semibold mb-4">Sustainability Goals</h3>
              <p className="text-frost-blue text-sm mb-4">
                Many municipalities have committed to reducing salt use. IceShield® demonstrates progress.
              </p>
              <div className="text-iceshield-blue font-semibold text-sm">Status: ✓ Supports commitments</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-midnight-blue py-20 lg:py-32 border-t border-arctic-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">Environmental Protection Without Compromise</h2>
          <p className="text-frost-blue text-lg max-w-2xl mx-auto">
            Cleaner water, healthier soil, safer ecosystems. And lower total cost of ownership.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
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
              Contact
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
