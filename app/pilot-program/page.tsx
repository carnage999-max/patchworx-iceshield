import Link from "next/link";

export default function PilotProgram() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-b from-arctic-navy to-midnight-blue py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-center mb-6">Pilot Program</h1>
          <p className="text-frost-blue text-lg text-center max-w-2xl mx-auto">
            Start small. Test on 5–10 miles of high-risk road during one winter season. See the results yourself.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-arctic-navy py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-16">Program Overview</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-midnight-blue p-8 rounded-lg border border-infrastructure-blue text-center">
              <div className="text-4xl font-bold text-iceshield-blue mb-3">5–10</div>
              <h3 className="text-snow-white font-semibold mb-2">Miles of Road</h3>
              <p className="text-frost-blue text-sm">High-risk segments (bridges, curves, intersections)</p>
            </div>

            <div className="bg-midnight-blue p-8 rounded-lg border border-infrastructure-blue text-center">
              <div className="text-4xl font-bold text-iceshield-blue mb-3">1</div>
              <h3 className="text-snow-white font-semibold mb-2">Winter Season</h3>
              <p className="text-frost-blue text-sm">Full climate cycle. Full data collection.</p>
            </div>

            <div className="bg-midnight-blue p-8 rounded-lg border border-infrastructure-blue text-center">
              <div className="text-4xl font-bold text-iceshield-blue mb-3">0</div>
              <h3 className="text-snow-white font-semibold mb-2">Upfront Cost</h3>
              <p className="text-frost-blue text-sm">Patchworx funds the pilot. You provide the roads and data.</p>
            </div>

            <div className="bg-midnight-blue p-8 rounded-lg border border-infrastructure-blue text-center">
              <div className="text-4xl font-bold text-iceshield-blue mb-3">8–12</div>
              <h3 className="text-snow-white font-semibold mb-2">Weeks Duration</h3>
              <p className="text-frost-blue text-sm">Nov–March. Peak winter conditions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Control vs Treated */}
      <section className="bg-midnight-blue py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-16">Control vs. Treated Segments</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-arctic-navy p-10 rounded-lg border border-infrastructure-blue">
              <h3 className="text-snow-white font-semibold text-xl mb-6">Control Segment</h3>
              <p className="text-frost-blue mb-6">
                Continues standard winter maintenance (salt, sand, plowing). Your current operations. Serves as baseline for comparison.
              </p>
              <div className="space-y-3 text-frost-blue text-sm">
                <p>✓ Your current budget & crew</p>
                <p>✓ Standard safety expectations</p>
                <p>✓ Normal spring cleanup costs</p>
                <p>✓ Baseline for accident data</p>
              </div>
            </div>

            <div className="bg-arctic-navy p-10 rounded-lg border border-iceshield-blue">
              <h3 className="text-snow-white font-semibold text-xl mb-6">IceShield® Segment</h3>
              <p className="text-frost-blue mb-6">
                Pre-season anti-adhesion treatment + engineered traction grit during winter. Patchworx-provided materials. Your crew applies.
              </p>
              <div className="space-y-3 text-frost-blue text-sm">
                <p>✓ Patchworx provides material</p>
                <p>✓ Your crew applies & manages</p>
                <p>✓ Standard spreader equipment</p>
                <p>✓ Reduced spring cleanup</p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-iceshield-blue bg-opacity-10 p-10 rounded-lg border border-iceshield-blue">
            <h3 className="text-snow-white font-semibold mb-4">Apples-to-Apples Comparison</h3>
            <p className="text-frost-blue">
              Same road, same conditions, same winter. Only variable: treatment method. Results are unambiguous.
            </p>
          </div>
        </div>
      </section>

      {/* One Winter Minimum */}
      <section className="bg-arctic-navy py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-16">Why One Full Winter?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-midnight-blue p-8 rounded-lg border border-infrastructure-blue">
              <h3 className="text-snow-white font-semibold mb-4">Variability</h3>
              <p className="text-frost-blue text-sm">
                Winter weather is unpredictable. One season captures freeze-thaw cycles, extreme cold, wet snow, and black ice conditions.
              </p>
            </div>

            <div className="bg-midnight-blue p-8 rounded-lg border border-infrastructure-blue">
              <h3 className="text-snow-white font-semibold mb-4">Data Integrity</h3>
              <p className="text-frost-blue text-sm">
                Spring cleanup reveals full damage profile. Safety metrics, cost data, and maintenance requirements are complete.
              </p>
            </div>

            <div className="bg-midnight-blue p-8 rounded-lg border border-infrastructure-blue">
              <h3 className="text-snow-white font-semibold mb-4">Crew Confidence</h3>
              <p className="text-frost-blue text-sm">
                Your team learns IceShield® operations, maintenance, and edge cases. By spring, they're experienced operators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Collection */}
      <section className="bg-midnight-blue py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-16">What Data Is Collected?</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-arctic-navy p-8 rounded-lg border border-infrastructure-blue">
              <h3 className="text-snow-white font-semibold text-lg mb-4">Safety Metrics</h3>
              <ul className="space-y-2 text-frost-blue text-sm">
                <li>• Accidents, near-misses, emergency responses (control vs. treated)</li>
                <li>• Weather conditions at time of incidents</li>
                <li>• Visibility, road surface conditions</li>
              </ul>
            </div>

            <div className="bg-arctic-navy p-8 rounded-lg border border-infrastructure-blue">
              <h3 className="text-snow-white font-semibold text-lg mb-4">Operational Data</h3>
              <ul className="space-y-2 text-frost-blue text-sm">
                <li>• Material application rates & costs</li>
                <li>• Crew hours (treatment, maintenance, cleanup)</li>
                <li>• Equipment usage</li>
              </ul>
            </div>

            <div className="bg-arctic-navy p-8 rounded-lg border border-infrastructure-blue">
              <h3 className="text-snow-white font-semibold text-lg mb-4">Pavement Assessment</h3>
              <ul className="space-y-2 text-frost-blue text-sm">
                <li>• Pre & post-winter pavement condition</li>
                <li>• Salt-damage severity (control) vs. IceShield® (treated)</li>
                <li>• Spring repair costs</li>
              </ul>
            </div>

            <div className="bg-arctic-navy p-8 rounded-lg border border-infrastructure-blue">
              <h3 className="text-snow-white font-semibold text-lg mb-4">Environmental Data (optional)</h3>
              <ul className="space-y-2 text-frost-blue text-sm">
                <li>• Groundwater chloride samples (control vs. treated drainage zones)</li>
                <li>• Spring runoff water testing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What Success Looks Like */}
      <section className="bg-arctic-navy py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-16">What Success Looks Like</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-midnight-blue p-8 rounded-lg border border-iceshield-blue">
              <h3 className="text-snow-white font-semibold text-lg mb-3">Safety</h3>
              <p className="text-frost-blue">
                Fewer accidents on IceShield® segment, especially in extreme cold or freeze-thaw conditions.
              </p>
            </div>

            <div className="bg-midnight-blue p-8 rounded-lg border border-iceshield-blue">
              <h3 className="text-snow-white font-semibold text-lg mb-3">Operations</h3>
              <p className="text-frost-blue">
                Material costs and crew hours are lower than equivalent salt-based maintenance. Equipment compatibility confirmed.
              </p>
            </div>

            <div className="bg-midnight-blue p-8 rounded-lg border border-iceshield-blue">
              <h3 className="text-snow-white font-semibold text-lg mb-3">Spring Cleanup</h3>
              <p className="text-frost-blue">
                IceShield® segment requires minimal spring remediation vs. salt-damaged control segment. Visual pavement difference is clear.
              </p>
            </div>

            <div className="bg-midnight-blue p-8 rounded-lg border border-iceshield-blue">
              <h3 className="text-snow-white font-semibold text-lg mb-3">Crew Confidence</h3>
              <p className="text-frost-blue">
                Your operations team is trained and comfortable with IceShield® procedures. Ready to scale.
              </p>
            </div>

            <div className="bg-iceshield-blue bg-opacity-10 p-8 rounded-lg border border-iceshield-blue text-center">
              <p className="text-frost-blue text-lg">
                If pilot results match expectations, you're positioned to expand to network-wide deployment with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline & Logistics */}
      <section className="bg-midnight-blue py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-16">Pilot Timeline &amp; Logistics</h2>

          <div className="max-w-3xl mx-auto space-y-4">
            <div className="flex gap-6 pb-6 border-b border-infrastructure-blue">
              <div className="text-2xl font-bold text-iceshield-blue flex-shrink-0">1</div>
              <div>
                <h3 className="text-snow-white font-semibold mb-1">Kickoff Meeting (August–September)</h3>
                <p className="text-frost-blue text-sm">Identify 5–10 mile test segments. Confirm control & treated roads. Set data-collection protocols.</p>
              </div>
            </div>

            <div className="flex gap-6 pb-6 border-b border-infrastructure-blue">
              <div className="text-2xl font-bold text-iceshield-blue flex-shrink-0">2</div>
              <div>
                <h3 className="text-snow-white font-semibold mb-1">Crew Training (October)</h3>
                <p className="text-frost-blue text-sm">Patchworx trains your team on anti-adhesion treatment application and IceShield® grit management.</p>
              </div>
            </div>

            <div className="flex gap-6 pb-6 border-b border-infrastructure-blue">
              <div className="text-2xl font-bold text-iceshield-blue flex-shrink-0">3</div>
              <div>
                <h3 className="text-snow-white font-semibold mb-1">Pre-Season Treatment (Late October)</h3>
                <p className="text-frost-blue text-sm">Anti-adhesion coating applied to treated segment before first snow.</p>
              </div>
            </div>

            <div className="flex gap-6 pb-6 border-b border-infrastructure-blue">
              <div className="text-2xl font-bold text-iceshield-blue flex-shrink-0">4</div>
              <div>
                <h3 className="text-snow-white font-semibold mb-1">Winter Operations (November–March)</h3>
                <p className="text-frost-blue text-sm">Your crew manages both segments. Patchworx provides material on demand. Monthly data check-ins.</p>
              </div>
            </div>

            <div className="flex gap-6 pb-6 border-b border-infrastructure-blue">
              <div className="text-2xl font-bold text-iceshield-blue flex-shrink-0">5</div>
              <div>
                <h3 className="text-snow-white font-semibold mb-1">Spring Assessment (April–May)</h3>
                <p className="text-frost-blue text-sm">Pavement condition evaluation. Cleanup completion. Cost & data analysis.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="text-2xl font-bold text-iceshield-blue flex-shrink-0">6</div>
              <div>
                <h3 className="text-snow-white font-semibold mb-1">Final Report &amp; Debrief (June)</h3>
                <p className="text-frost-blue text-sm">Results presented. Decision point: expand or conclude. No long-term obligation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-arctic-navy py-20 lg:py-32 border-t border-midnight-blue">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">Ready to See IceShield® In Action?</h2>
          <p className="text-frost-blue text-lg max-w-2xl mx-auto">
            No upfront cost. No long-term obligation. Just one winter of data that will transform your winter maintenance strategy.
          </p>
          <div>
            <Link
              href="/contact"
              className="inline-block bg-iceshield-blue text-arctic-navy px-8 py-3 rounded font-semibold hover:bg-frost-blue transition-all duration-200"
            >
              Request a Pilot
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
