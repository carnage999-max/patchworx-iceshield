import Link from "next/link";

export default function Scalability() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-b from-arctic-navy to-midnight-blue py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-center mb-6">Scalability &amp; Deployment</h1>
          <p className="text-frost-blue text-lg text-center max-w-2xl mx-auto">
            From pilot to network-wide rollout. How to scale IceShield® across your road system.
          </p>
        </div>
      </section>

      {/* Deployment Progression */}
      <section className="bg-arctic-navy py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-16">Deployment Progression</h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {/* Phase 1 */}
            <div className="bg-midnight-blue p-10 rounded-lg border-l-4 border-iceshield-blue">
              <div className="flex gap-6 items-start">
                <div className="text-3xl font-bold text-iceshield-blue flex-shrink-0">1</div>
                <div className="flex-1">
                  <h3 className="text-snow-white text-xl font-semibold mb-2">Pilot (1 season)</h3>
                  <p className="text-frost-blue mb-3">5–10 miles. One winter. Proof of concept.</p>
                  <p className="text-frost-blue text-sm">Decision: confidence level for expansion.</p>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="bg-midnight-blue p-10 rounded-lg border-l-4 border-frost-blue">
              <div className="flex gap-6 items-start">
                <div className="text-3xl font-bold text-iceshield-blue flex-shrink-0">2</div>
                <div className="flex-1">
                  <h3 className="text-snow-white text-xl font-semibold mb-2">Regional Rollout (Year 1–2)</h3>
                  <p className="text-frost-blue mb-3">50–100 miles. High-risk segments: bridges, curves, intersections. Proven corridors.</p>
                  <p className="text-frost-blue text-sm">Crew training. Supply chain scaling. Budget integration.</p>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="bg-midnight-blue p-10 rounded-lg border-l-4 border-iceshield-blue">
              <div className="flex gap-6 items-start">
                <div className="text-3xl font-bold text-iceshield-blue flex-shrink-0">3</div>
                <div className="flex-1">
                  <h3 className="text-snow-white text-xl font-semibold mb-2">Municipal / Statewide Deployment (Year 2–4)</h3>
                  <p className="text-frost-blue mb-3">500–5000+ miles. Full road network. All jurisdictions.</p>
                  <p className="text-frost-blue text-sm">Significant operational efficiency. Full budget transformation. Zero salt strategy.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-iceshield-blue bg-opacity-10 p-10 rounded-lg border border-iceshield-blue text-center">
            <p className="text-frost-blue text-lg">
              Each phase is independent. You can pause, adjust, or expand based on real results.
            </p>
          </div>
        </div>
      </section>

      {/* Pavement Compatibility */}
      <section className="bg-midnight-blue py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-16">Pavement Compatibility</h2>

          <p className="text-frost-blue text-lg text-center max-w-2xl mx-auto mb-12">
            IceShield® works on any road surface. No special pavement required.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-arctic-navy p-8 rounded-lg border border-infrastructure-blue">
              <h3 className="text-snow-white font-semibold text-xl mb-4">Asphalt</h3>
              <p className="text-frost-blue mb-4">
                Standard hot-mix asphalt (HMA). No modification needed. Anti-adhesion treatment bonds to surface.
              </p>
              <div className="text-iceshield-blue font-semibold text-sm">✓ Full compatibility</div>
            </div>

            <div className="bg-arctic-navy p-8 rounded-lg border border-infrastructure-blue">
              <h3 className="text-snow-white font-semibold text-xl mb-4">Concrete</h3>
              <p className="text-frost-blue mb-4">
                Portland cement concrete (PCC). Treatment penetrates surface pores. Grit sits on ice, not the concrete.
              </p>
              <div className="text-iceshield-blue font-semibold text-sm">✓ Full compatibility</div>
            </div>

            <div className="bg-arctic-navy p-8 rounded-lg border border-infrastructure-blue">
              <h3 className="text-snow-white font-semibold text-xl mb-4">Porous Pavements</h3>
              <p className="text-frost-blue mb-4">
                Permeable asphalt & porous concrete. Treatment compatible. Drainage maintained.
              </p>
              <div className="text-iceshield-blue font-semibold text-sm">✓ Full compatibility</div>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Continuity */}
      <section className="bg-arctic-navy py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-16">Operational Continuity</h2>

          <p className="text-frost-blue text-lg text-center max-w-2xl mx-auto mb-12">
            IceShield® integrates with existing winter maintenance systems. No major operational disruption.
          </p>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-midnight-blue p-8 rounded-lg border border-infrastructure-blue">
              <h3 className="text-snow-white font-semibold text-lg mb-3">Pre-Season (October)</h3>
              <p className="text-frost-blue text-sm">
                Add anti-adhesion treatment to seasonal road preparation. 1–2 additional workdays per road segment.
              </p>
            </div>

            <div className="bg-midnight-blue p-8 rounded-lg border border-infrastructure-blue">
              <h3 className="text-snow-white font-semibold text-lg mb-3">Winter Operations (Nov–March)</h3>
              <p className="text-frost-blue text-sm">
                Replace salt with engineered grit. Same spreaders. Same crew schedule. Same plow operations. Material is the only variable.
              </p>
            </div>

            <div className="bg-midnight-blue p-8 rounded-lg border border-infrastructure-blue">
              <h3 className="text-snow-white font-semibold text-lg mb-3">Spring Cleanup (April–May)</h3>
              <p className="text-frost-blue text-sm">
                Replace multi-week sludge removal with quick sweeping. One crew, one week instead of six weeks.
              </p>
            </div>

            <div className="bg-midnight-blue p-8 rounded-lg border border-infrastructure-blue">
              <h3 className="text-snow-white font-semibold text-lg mb-3">Summer Maintenance</h3>
              <p className="text-frost-blue text-sm">
                Pavement repairs decrease dramatically. More resources for routine maintenance & proactive patching.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Supply Chain & Logistics */}
      <section className="bg-midnight-blue py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-16">Supply Chain &amp; Logistics</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-frost-blue text-lg">
                Patchworx manages sourcing, storage, and just-in-time delivery of materials. Your crew applies; we supply.
              </p>

              <div className="space-y-4">
                <div className="bg-arctic-navy p-6 rounded-lg border border-infrastructure-blue">
                  <h4 className="text-iceshield-blue font-semibold mb-2">Anti-Adhesion Treatment</h4>
                  <p className="text-frost-blue text-sm">
                    Delivered pre-season. Pre-measured for road segments. Application done by your crew.
                  </p>
                </div>

                <div className="bg-arctic-navy p-6 rounded-lg border border-infrastructure-blue">
                  <h4 className="text-iceshield-blue font-semibold mb-2">Engineered Traction Grit</h4>
                  <p className="text-frost-blue text-sm">
                    Bulk delivery to municipal storage facility. Used throughout winter as needed (like salt stockpiles).
                  </p>
                </div>

                <div className="bg-arctic-navy p-6 rounded-lg border border-infrastructure-blue">
                  <h4 className="text-iceshield-blue font-semibold mb-2">Inventory Management</h4>
                  <p className="text-frost-blue text-sm">
                    Patchworx tracks usage. Reorders automatically. You never run short.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-arctic-navy p-10 rounded-lg border border-infrastructure-blue">
              <h3 className="text-snow-white font-semibold text-lg mb-6">Scaling Example</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-3xl font-bold text-iceshield-blue mb-2">Pilot (Year 1)</div>
                  <p className="text-frost-blue text-sm">10 miles: 50 tons grit + treatment</p>
                </div>
                <div className="border-t border-infrastructure-blue pt-6">
                  <div className="text-3xl font-bold text-iceshield-blue mb-2">Regional (Year 2)</div>
                  <p className="text-frost-blue text-sm">100 miles: 500 tons grit + treatment</p>
                </div>
                <div className="border-t border-infrastructure-blue pt-6">
                  <div className="text-3xl font-bold text-iceshield-blue mb-2">Statewide (Year 4)</div>
                  <p className="text-frost-blue text-sm">5,000 miles: 25,000 tons grit annually</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Licensing Model */}
      <section className="bg-arctic-navy py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-16">Licensing Model Overview</h2>

          <p className="text-frost-blue text-lg text-center max-w-2xl mx-auto mb-12">
            IceShield® is licensed, not purchased. You pay per-mile for materials + service. No inventory risk.
          </p>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-midnight-blue p-8 rounded-lg border border-infrastructure-blue">
              <h3 className="text-snow-white font-semibold text-lg mb-3">Material Cost</h3>
              <p className="text-frost-blue text-sm mb-3">
                Per-mile annual fee covers anti-adhesion treatment + unlimited grit during winter season.
              </p>
              <div className="text-iceshield-blue font-semibold">Typical: $1,200–1,800 per mile/year</div>
            </div>

            <div className="bg-midnight-blue p-8 rounded-lg border border-infrastructure-blue">
              <h3 className="text-snow-white font-semibold text-lg mb-3">No Inventory Cost</h3>
              <p className="text-frost-blue text-sm mb-3">
                Patchworx manages storage. You receive material as needed. No warehousing, no spoilage, no waste.
              </p>
            </div>

            <div className="bg-midnight-blue p-8 rounded-lg border border-infrastructure-blue">
              <h3 className="text-snow-white font-semibold text-lg mb-3">Scaling Benefits</h3>
              <p className="text-frost-blue text-sm mb-3">
                Volume discounts available at 500+, 1000+, 5000+ mile tiers. Larger deployments cost less per mile.
              </p>
            </div>

            <div className="bg-iceshield-blue bg-opacity-10 p-8 rounded-lg border border-iceshield-blue text-center">
              <p className="text-frost-blue text-sm">
                Total cost comparison still shows 40–60% savings vs. salt, even with IceShield® licensing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Mitigation */}
      <section className="bg-midnight-blue py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-16">Scaling Without Risk</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-arctic-navy p-8 rounded-lg border border-infrastructure-blue">
              <h3 className="text-snow-white font-semibold text-lg mb-3">Phased Rollout</h3>
              <p className="text-frost-blue text-sm">
                No need to commit 5,000 miles immediately. Start regional, expand based on results. Each phase is independent.
              </p>
            </div>

            <div className="bg-arctic-navy p-8 rounded-lg border border-infrastructure-blue">
              <h3 className="text-snow-white font-semibold text-lg mb-3">Crew Training Progression</h3>
              <p className="text-frost-blue text-sm">
                Training scaled with deployment. Pilot crew becomes mentors for regional rollout. Knowledge built over time.
              </p>
            </div>

            <div className="bg-arctic-navy p-8 rounded-lg border border-infrastructure-blue">
              <h3 className="text-snow-white font-semibold text-lg mb-3">Financial Flexibility</h3>
              <p className="text-frost-blue text-sm">
                Move budget from salt/cleanup to IceShield® licensing gradually. No sudden budget shock. Cash flow improvements visible immediately.
              </p>
            </div>

            <div className="bg-arctic-navy p-8 rounded-lg border border-infrastructure-blue">
              <h3 className="text-snow-white font-semibold text-lg mb-3">Regulatory Support</h3>
              <p className="text-frost-blue text-sm">
                Patchworx provides compliance documentation & environmental reporting for regulatory requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-arctic-navy py-20 lg:py-32 border-t border-midnight-blue">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">Plan Your Scaling Strategy</h2>
          <p className="text-frost-blue text-lg max-w-2xl mx-auto">
            From pilot to network-wide deployment. Patchworx provides a roadmap tailored to your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/contact"
              className="bg-iceshield-blue text-arctic-navy px-8 py-3 rounded font-semibold hover:bg-frost-blue transition-all duration-200"
            >
              Get a Scaling Plan
            </Link>
            <Link
              href="/pilot-program"
              className="border border-frost-blue text-frost-blue px-8 py-3 rounded font-semibold hover:border-iceshield-blue hover:text-iceshield-blue transition-all duration-200"
            >
              Start a Pilot
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
