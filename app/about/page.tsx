import Link from "next/link";

export default function PatchworxIntegration() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-b from-arctic-navy to-midnight-blue py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-center mb-6">Patchworx &amp; IceShield®</h1>
          <p className="text-frost-blue text-lg text-center max-w-2xl mx-auto">
            Winter protection is one part of a complete pavement lifecycle solution. Patchworx delivers year-round value.
          </p>
        </div>
      </section>

      {/* The Full Lifecycle */}
      <section className="bg-arctic-navy py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-16">The Complete Pavement Lifecycle</h2>

          <div className="space-y-6 max-w-4xl mx-auto">
            {/* Spring */}
            <div className="bg-midnight-blue p-10 rounded-lg border-l-4 border-frost-blue">
              <div className="flex gap-6 items-start">
                <div className="text-3xl font-bold text-frost-blue flex-shrink-0">Spring</div>
                <div className="flex-1">
                  <h3 className="text-snow-white text-xl font-semibold mb-2">Repair &amp; Seal</h3>
                  <p className="text-frost-blue">
                    After winter, Patchworx assesses damage and executes targeted repairs. Pothole patching, crack sealing, and surface treatments restore pavement condition before summer traffic.
                  </p>
                </div>
              </div>
            </div>

            {/* Summer */}
            <div className="bg-midnight-blue p-10 rounded-lg border-l-4 border-iceshield-blue">
              <div className="flex gap-6 items-start">
                <div className="text-3xl font-bold text-iceshield-blue flex-shrink-0">Summer</div>
                <div className="flex-1">
                  <h3 className="text-snow-white text-xl font-semibold mb-2">Maintenance &amp; Optimization</h3>
                  <p className="text-frost-blue">
                    Preventive maintenance: crack sealing, microsurfacing, and regular inspections extend pavement life and reduce emergency repairs.
                  </p>
                </div>
              </div>
            </div>

            {/* Fall */}
            <div className="bg-midnight-blue p-10 rounded-lg border-l-4 border-frost-blue">
              <div className="flex gap-6 items-start">
                <div className="text-3xl font-bold text-frost-blue flex-shrink-0">Fall</div>
                <div className="flex-1">
                  <h3 className="text-snow-white text-xl font-semibold mb-2">Preparation</h3>
                  <p className="text-frost-blue">
                    Patchworx applies surface treatments and readies roads for winter. Anti-adhesion coating applied. Equipment inspected. Crew trained.
                  </p>
                </div>
              </div>
            </div>

            {/* Winter */}
            <div className="bg-midnight-blue p-10 rounded-lg border-l-4 border-iceshield-blue">
              <div className="flex gap-6 items-start">
                <div className="text-3xl font-bold text-iceshield-blue flex-shrink-0">Winter</div>
                <div className="flex-1">
                  <h3 className="text-snow-white text-xl font-semibold mb-2">IceShield® Protection</h3>
                  <p className="text-frost-blue">
                    Anti-adhesion treatment + engineered traction grit ensure safety without salt corrosion. Minimal pavement damage throughout season.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Synergy Benefits */}
      <section className="bg-midnight-blue py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-16">Synergies Between Repair &amp; IceShield®</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-snow-white text-xl font-semibold">Reduced Repair Costs</h3>
              <p className="text-frost-blue mb-4">
                IceShield® eliminates salt damage. Spring repairs drop 70–80%. Budgets freed for proactive maintenance instead of damage control.
              </p>
              <div className="space-y-3">
                <div className="bg-arctic-navy p-6 rounded-lg border border-infrastructure-blue">
                  <p className="text-frost-blue text-sm">
                    <strong className="text-iceshield-blue">Traditional approach:</strong> Salt damage requires expensive repairs every spring.
                  </p>
                </div>
                <div className="bg-arctic-navy p-6 rounded-lg border border-infrastructure-blue">
                  <p className="text-frost-blue text-sm">
                    <strong className="text-iceshield-blue">With IceShield®:</strong> Minimal damage means routine maintenance only.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-snow-white text-xl font-semibold">Extended Pavement Life</h3>
              <p className="text-frost-blue mb-4">
                Pavement lasts longer when protected from salt. IceShield® roads reach end-of-life 5–8 years later than salt-managed roads.
              </p>
              <div className="space-y-3">
                <div className="bg-arctic-navy p-6 rounded-lg border border-infrastructure-blue">
                  <p className="text-frost-blue text-sm">
                    <strong className="text-iceshield-blue">20-year cost:</strong> IceShield® roads see 30% less total rehabilitation cost.
                  </p>
                </div>
                <div className="bg-arctic-navy p-6 rounded-lg border border-infrastructure-blue">
                  <p className="text-frost-blue text-sm">
                    <strong className="text-iceshield-blue">Result:</strong> Major overlays/resurfacing delayed by years.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-snow-white text-xl font-semibold">Predictable Maintenance Budgets</h3>
              <p className="text-frost-blue mb-4">
                Without unpredictable salt damage, maintenance spending becomes consistent and forecastable year-to-year.
              </p>
              <div className="space-y-3">
                <div className="bg-arctic-navy p-6 rounded-lg border border-infrastructure-blue">
                  <p className="text-frost-blue text-sm">
                    <strong className="text-iceshield-blue">Financial planning:</strong> Easier to justify multi-year budgets.
                  </p>
                </div>
                <div className="bg-arctic-navy p-6 rounded-lg border border-infrastructure-blue">
                  <p className="text-frost-blue text-sm">
                    <strong className="text-iceshield-blue">Benefit:</strong> More resources for emergencies and capacity additions.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-snow-white text-xl font-semibold">Integrated Contractor Relationship</h3>
              <p className="text-frost-blue mb-4">
                Single vendor (Patchworx) manages winter protection + spring repairs. No coordination gaps. Seamless handoff between seasons.
              </p>
              <div className="space-y-3">
                <div className="bg-arctic-navy p-6 rounded-lg border border-infrastructure-blue">
                  <p className="text-frost-blue text-sm">
                    <strong className="text-iceshield-blue">Efficiency:</strong> Fewer contracts. Better continuity.
                  </p>
                </div>
                <div className="bg-arctic-navy p-6 rounded-lg border border-infrastructure-blue">
                  <p className="text-frost-blue text-sm">
                    <strong className="text-iceshield-blue">Quality:</strong> Same team across entire pavement lifecycle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patchworx Capabilities */}
      <section className="bg-arctic-navy py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-16">Why Patchworx?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-midnight-blue p-8 rounded-lg border border-infrastructure-blue">
              <h3 className="text-snow-white font-semibold text-xl mb-4">Infrastructure Expertise</h3>
              <p className="text-frost-blue text-sm mb-4">
                Decades of pavement engineering. Not a marketing company. We understand municipal procurement and engineering requirements.
              </p>
              <div className="text-iceshield-blue font-semibold text-sm">✓ Technical credibility</div>
            </div>

            <div className="bg-midnight-blue p-8 rounded-lg border border-infrastructure-blue">
              <h3 className="text-snow-white font-semibold text-xl mb-4">Proven Track Record</h3>
              <p className="text-frost-blue text-sm mb-4">
                Multi-year pilot programs in Canada and northern US. Real data. Real municipalities. Real savings.
              </p>
              <div className="text-iceshield-blue font-semibold text-sm">✓ Verifiable results</div>
            </div>

            <div className="bg-midnight-blue p-8 rounded-lg border border-infrastructure-blue">
              <h3 className="text-snow-white font-semibold text-xl mb-4">End-to-End Solution</h3>
              <p className="text-frost-blue text-sm mb-4">
                Winter protection + spring repair + summer maintenance. One partner. Complete pavement lifecycle management.
              </p>
              <div className="text-iceshield-blue font-semibold text-sm">✓ Integrated service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Total Value Proposition */}
      <section className="bg-midnight-blue py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-16">Total Value Proposition</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-arctic-navy p-8 rounded-lg border border-iceshield-blue">
              <h3 className="text-snow-white font-semibold text-lg mb-3">Safety First</h3>
              <p className="text-frost-blue">
                Fewer accidents. Better traction. Predictable road conditions. Lives saved.
              </p>
            </div>

            <div className="bg-arctic-navy p-8 rounded-lg border border-iceshield-blue">
              <h3 className="text-snow-white font-semibold text-lg mb-3">Infrastructure Protection</h3>
              <p className="text-frost-blue">
                No salt corrosion. Pavement lasts longer. Bridges, guardrails, vehicles protected. Cumulative savings over decades.
              </p>
            </div>

            <div className="bg-arctic-navy p-8 rounded-lg border border-iceshield-blue">
              <h3 className="text-snow-white font-semibold text-lg mb-3">Environmental Stewardship</h3>
              <p className="text-frost-blue">
                Zero chloride runoff. Drinking water protected. Aquatic ecosystems safe. Soil integrity maintained. Future-proof regulations.
              </p>
            </div>

            <div className="bg-arctic-navy p-8 rounded-lg border border-iceshield-blue">
              <h3 className="text-snow-white font-semibold text-lg mb-3">Economic Advantage</h3>
              <p className="text-frost-blue">
                40–60% lower annual winter management cost. 30% fewer spring repairs. Multi-year budget predictability. Better ROI than salt.
              </p>
            </div>

            <div className="bg-iceshield-blue bg-opacity-10 p-8 rounded-lg border border-iceshield-blue text-center">
              <p className="text-frost-blue text-lg font-semibold">
                Patchworx IceShield®: Winter protection that protects everything—people, infrastructure, environment, and budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-arctic-navy py-20 lg:py-32 border-t border-midnight-blue">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">Ready to Transform Your Winter Strategy?</h2>
          <p className="text-frost-blue text-lg max-w-2xl mx-auto">
            Patchworx IceShield® is the complete answer to winter road management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/pilot-program"
              className="bg-iceshield-blue text-arctic-navy px-8 py-3 rounded font-semibold hover:bg-frost-blue transition-all duration-200"
            >
              Request a Pilot
            </Link>
            <Link
              href="/contact"
              className="border border-frost-blue text-frost-blue px-8 py-3 rounded font-semibold hover:border-iceshield-blue hover:text-iceshield-blue transition-all duration-200"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
