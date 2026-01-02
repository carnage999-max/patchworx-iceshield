import Link from "next/link";

export default function SaltProblem() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-b from-arctic-navy to-midnight-blue py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-center mb-6">The Salt Problem</h1>
          <p className="text-frost-blue text-lg text-center max-w-2xl mx-auto">
            Why road salt is failing—and costing municipalities millions in hidden damage.
          </p>
        </div>
      </section>

      {/* Corrosion & Infrastructure Damage */}
      <section className="bg-arctic-navy py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-16">Corrosion &amp; Infrastructure Damage</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-frost-blue text-lg">
                Road salt accelerates the rust cycle in every piece of steel infrastructure: bridges, guardrails, culverts, and vehicle undercarriages.
              </p>
              <div className="space-y-4">
                <div className="bg-midnight-blue p-6 rounded-lg border border-infrastructure-blue">
                  <h3 className="text-iceshield-blue font-semibold mb-2">Bridges & Structures</h3>
                  <p className="text-frost-blue text-sm">
                    Chloride penetrates concrete and corrodes embedded rebar. Damage is irreversible once started.
                  </p>
                </div>
                <div className="bg-midnight-blue p-6 rounded-lg border border-infrastructure-blue">
                  <h3 className="text-iceshield-blue font-semibold mb-2">Guardrails & Posts</h3>
                  <p className="text-frost-blue text-sm">
                    Salt accelerates rust. Safety systems fail sooner. Replacement frequency increases.
                  </p>
                </div>
                <div className="bg-midnight-blue p-6 rounded-lg border border-infrastructure-blue">
                  <h3 className="text-iceshield-blue font-semibold mb-2">Vehicles & Equipment</h3>
                  <p className="text-frost-blue text-sm">
                    Salt spray corrodes brake lines, suspension, and frames. Vehicle lifecycle shortens by 30–40%.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-midnight-blue p-10 rounded-lg border border-infrastructure-blue">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-iceshield-blue mb-2">$5.7B</div>
                  <p className="text-frost-blue text-sm">Annual US infrastructure damage from road salt</p>
                </div>
                <div className="text-center border-t border-infrastructure-blue pt-6">
                  <div className="text-4xl font-bold text-frost-blue mb-2">24 million tons</div>
                  <p className="text-frost-blue text-sm">Road salt applied annually in North America</p>
                </div>
                <div className="text-center border-t border-infrastructure-blue pt-6">
                  <div className="text-4xl font-bold text-iceshield-blue mb-2">$2.1M</div>
                  <p className="text-frost-blue text-sm">Damage cost per 100 miles annually</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cold Temperature Failure */}
      <section className="bg-midnight-blue py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-16">Cold Temperature Failure</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-arctic-navy p-10 rounded-lg border border-infrastructure-blue">
              <h3 className="text-snow-white font-semibold mb-6">Salt Effectiveness by Temperature</h3>
              <div className="space-y-4 font-mono text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-frost-blue">0°C to −10°C</span>
                  <span className="text-iceshield-blue font-bold">✓ Effective</span>
                </div>
                <div className="h-px bg-infrastructure-blue"></div>
                <div className="flex justify-between items-center">
                  <span className="text-frost-blue">−10°C to −15°C</span>
                  <span className="text-frost-blue font-bold">⚠ Reduced</span>
                </div>
                <div className="h-px bg-infrastructure-blue"></div>
                <div className="flex justify-between items-center">
                  <span className="text-frost-blue">Below −15°C</span>
                  <span className="text-iceshield-blue font-bold">✗ Fails</span>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <p className="text-frost-blue text-lg">
                Salt's eutectic point (where it stops melting ice) drops significantly in extreme cold. Below −15°C, salt becomes chemically ineffective.
              </p>
              <div className="bg-midnight-blue p-6 rounded-lg border-l-4 border-iceshield-blue">
                <h3 className="text-snow-white font-semibold mb-2">The Result</h3>
                <p className="text-frost-blue">
                  In regions where winter temperatures regularly drop below −15°C, salt provides no chemical benefit—only corrosion damage.
                </p>
              </div>
              <div className="bg-midnight-blue p-6 rounded-lg border-l-4 border-frost-blue">
                <h3 className="text-snow-white font-semibold mb-2">Black Ice Risk</h3>
                <p className="text-frost-blue">
                  When salt fails, black ice returns. Vehicles encounter hidden ice on surfaces that look wet. Accident rates spike.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Black Ice & Refreeze */}
      <section className="bg-arctic-navy py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-16">Black Ice &amp; Refreeze</h2>

          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-midnight-blue p-10 rounded-lg border border-infrastructure-blue">
              <h3 className="text-snow-white font-semibold mb-4 text-xl">What Is Black Ice?</h3>
              <p className="text-frost-blue mb-4">
                A thin, transparent layer of ice on pavement that is nearly invisible to drivers. It forms when:
              </p>
              <ul className="space-y-2 text-frost-blue">
                <li>1. Salt melts ice during the day</li>
                <li>2. Temperature drops below freezing at night</li>
                <li>3. Meltwater refreezes into a slick, hard surface</li>
              </ul>
            </div>

            <div className="bg-midnight-blue p-10 rounded-lg border border-infrastructure-blue">
              <h3 className="text-snow-white font-semibold mb-4 text-xl">The Danger Cycle</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="text-2xl font-bold text-iceshield-blue flex-shrink-0">1</div>
                  <div>
                    <h4 className="text-snow-white font-semibold mb-1">Melting (Day)</h4>
                    <p className="text-frost-blue text-sm">Salt is applied. Ice melts into water. Roads appear safer.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-2xl font-bold text-iceshield-blue flex-shrink-0">2</div>
                  <div>
                    <h4 className="text-snow-white font-semibold mb-1">Evaporation (Evening)</h4>
                    <p className="text-frost-blue text-sm">Temperature drops. Meltwater evaporates and refreezes on coldest surfaces.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-2xl font-bold text-iceshield-blue flex-shrink-0">3</div>
                  <div>
                    <h4 className="text-snow-white font-semibold mb-1">Black Ice (Night)</h4>
                    <p className="text-frost-blue text-sm">Invisible, slick layer forms. Drivers have no warning. Accidents spike.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-2xl font-bold text-iceshield-blue flex-shrink-0">4</div>
                  <div>
                    <h4 className="text-snow-white font-semibold mb-1">Repeat</h4>
                    <p className="text-frost-blue text-sm">Cycle repeats all winter. Black ice is a symptom of salt's approach.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-iceshield-blue bg-opacity-10 p-10 rounded-lg border border-iceshield-blue">
              <h3 className="text-frost-blue font-semibold mb-3">IceShield® Eliminates This Cycle</h3>
              <p className="text-frost-blue">
                Because IceShield® doesn't require melting, there is no meltwater to refreeze. Ice remains non-bonded and friction is provided by grit. Black ice doesn't form.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Chloride Impact */}
      <section className="bg-midnight-blue py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-16">Environmental Chloride Impact</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-frost-blue text-lg">
                Road salt doesn't stay on roads. Chloride ions leach into groundwater, streams, and drinking water reservoirs—causing permanent damage.
              </p>

              <div className="bg-arctic-navy p-8 rounded-lg border border-infrastructure-blue">
                <h3 className="text-snow-white font-semibold mb-4">Drinking Water Contamination</h3>
                <p className="text-frost-blue text-sm mb-3">
                  Chloride increases water salinity. Vulnerable populations (elderly, infants, kidney disease) are at risk. Treatment costs rise.
                </p>
                <div className="text-iceshield-blue text-sm font-mono">→ 240 municipalities report elevated chloride</div>
              </div>

              <div className="bg-arctic-navy p-8 rounded-lg border border-infrastructure-blue">
                <h3 className="text-snow-white font-semibold mb-4">Aquatic Ecosystem Collapse</h3>
                <p className="text-frost-blue text-sm mb-3">
                  Fish and aquatic plants cannot tolerate saline shock. Spring runoff creates uninhabitable zones in streams and ponds.
                </p>
                <div className="text-iceshield-blue text-sm font-mono">→ Invasive salt-tolerant species takeover</div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-arctic-navy p-8 rounded-lg border border-infrastructure-blue">
                <h3 className="text-snow-white font-semibold mb-4">Soil Degradation</h3>
                <p className="text-frost-blue text-sm mb-3">
                  Salt accumulates in soil, breaking down clay structure and reducing nutrient availability for plants and crops.
                </p>
                <div className="text-iceshield-blue text-sm font-mono">→ Vegetation dies. Erosion accelerates.</div>
              </div>

              <div className="bg-arctic-navy p-8 rounded-lg border border-infrastructure-blue">
                <h3 className="text-snow-white font-semibold mb-4">Long-Term Persistence</h3>
                <p className="text-frost-blue text-sm mb-3">
                  Chloride does not degrade. Once in groundwater, it remains for decades. The damage is cumulative and irreversible.
                </p>
                <div className="text-iceshield-blue text-sm font-mono">→ Future generations inherit contaminated aquifers</div>
              </div>

              <div className="text-center py-8">
                <div className="text-4xl font-bold text-iceshield-blue mb-2">137M tons</div>
                <p className="text-frost-blue">Chloride in North American waterways from road salt</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transition Statement */}
      <section className="bg-arctic-navy py-20 lg:py-32 border-t border-midnight-blue">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center space-y-8">
          <blockquote className="text-2xl text-frost-blue italic font-light">
            "The problem is not winter — it is salt."
          </blockquote>
          <p className="text-frost-blue text-lg">
            Municipalities have relied on salt for decades because alternatives weren't available. Now they are.
          </p>
          <p className="text-snow-white text-lg">
            IceShield® eliminates corrosion, refreeze risk, and environmental damage—without sacrificing safety.
          </p>
          <div className="pt-8">
            <Link
              href="/how-it-works"
              className="inline-block bg-iceshield-blue text-arctic-navy px-8 py-3 rounded font-semibold hover:bg-frost-blue transition-all duration-200"
            >
              See the Solution
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
