import Link from "next/link";
import Image from "next/image";

export default function SafetyCost() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-b from-arctic-navy to-midnight-blue py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-center mb-6">Safety &amp; Performance</h1>
          <p className="text-frost-blue text-lg text-center max-w-2xl mx-auto">
            Metrics that justify investment. Data from pilot programs and real-world deployments.
          </p>
        </div>
      </section>

      {/* Accident Reduction */}
      <section className="bg-arctic-navy py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-16">Accident Reduction Metrics</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="text-5xl font-bold text-iceshield-blue mb-2">67%</div>
                <h3 className="text-snow-white font-semibold text-xl">Black Ice Accidents Prevented</h3>
                <p className="text-frost-blue">
                  In pilot regions, treated segments saw 67% fewer accidents on nights with black ice risk.
                </p>
              </div>

              <div className="space-y-4">
                <div className="text-5xl font-bold text-iceshield-blue mb-2">43%</div>
                <h3 className="text-snow-white font-semibold text-xl">Winter Crash Reduction (Overall)</h3>
                <p className="text-frost-blue">
                  Across all weather conditions during winter season, total accident reduction on treated roads.
                </p>
              </div>

              <div className="space-y-4">
                <div className="text-5xl font-bold text-iceshield-blue mb-2">2.1 days</div>
                <h3 className="text-snow-white font-semibold text-xl">Faster Emergency Response</h3>
                <p className="text-frost-blue">
                  Treated roads had fewer accidents, allowing faster ambulance and police response times.
                </p>
              </div>
            </div>

            <div className="bg-midnight-blue p-10 rounded-lg border border-infrastructure-blue">
              <h3 className="text-snow-white font-semibold mb-6 text-lg">Why Accidents Drop</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="text-2xl text-iceshield-blue">✓</div>
                  <div>
                    <h4 className="text-frost-blue font-semibold text-sm">No Black Ice</h4>
                    <p className="text-frost-blue text-xs">Drivers see actual road conditions. No hidden surprises.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-2xl text-iceshield-blue">✓</div>
                  <div>
                    <h4 className="text-frost-blue font-semibold text-sm">Consistent Traction</h4>
                    <p className="text-frost-blue text-xs">Grit provides uniform friction across entire road surface.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-2xl text-iceshield-blue">✓</div>
                  <div>
                    <h4 className="text-frost-blue font-semibold text-sm">Predictable Surface</h4>
                    <p className="text-frost-blue text-xs">Drivers know what to expect. Behavior changes reduce incidents.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-2xl text-iceshield-blue">✓</div>
                  <div>
                    <h4 className="text-frost-blue font-semibold text-sm">Works Extreme Cold</h4>
                    <p className="text-frost-blue text-xs">No failure mode when temperature drops. Continuous safety.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* High-Risk Zones */}
      <section className="bg-midnight-blue py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-16">IceShield® Impact on High-Risk Zones</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-arctic-navy p-8 rounded-lg border border-infrastructure-blue">
              <h3 className="text-snow-white font-semibold text-xl mb-4">Bridges</h3>
              <p className="text-frost-blue mb-6">
                Freeze first, thaw last. Historically 80% of winter crashes occur on bridges.
              </p>
              <div className="text-iceshield-blue font-bold text-lg">−78% accidents</div>
              <p className="text-frost-blue text-sm mt-2">on pilot bridge segments</p>
            </div>

            <div className="bg-arctic-navy p-8 rounded-lg border border-infrastructure-blue">
              <h3 className="text-snow-white font-semibold text-xl mb-4">Curves &amp; Hills</h3>
              <p className="text-frost-blue mb-6">
                Shear forces increase on slopes. Salt's melting creates slippery water film.
              </p>
              <div className="text-iceshield-blue font-bold text-lg">−62% accidents</div>
              <p className="text-frost-blue text-sm mt-2">on treated curves</p>
            </div>

            <div className="bg-arctic-navy p-8 rounded-lg border border-infrastructure-blue">
              <h3 className="text-snow-white font-semibold text-xl mb-4">Intersections</h3>
              <p className="text-frost-blue mb-6">
                Braking and turning on ice is dangerous. IceShield® provides consistent friction.
              </p>
              <div className="text-iceshield-blue font-bold text-lg">−51% accidents</div>
              <p className="text-frost-blue text-sm mt-2">at treated intersections</p>
            </div>
          </div>
        </div>
      </section>

      {/* Traction Recovery */}
      <section className="bg-arctic-navy py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-16">Faster Traction Recovery</h2>

          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-midnight-blue p-10 rounded-lg border border-infrastructure-blue">
              <h3 className="text-snow-white font-semibold text-xl mb-4">Salt Approach</h3>
              <div className="space-y-3 text-frost-blue">
                <p>
                  <strong>Time to traction:</strong> 4–8 hours after salt application (weather dependent)
                </p>
                <p>
                  <strong>Variability:</strong> High. Temperature, humidity, and traffic affect melting speed.
                </p>
                <p>
                  <strong>Risk window:</strong> Long periods of slippery, partially melted roads.
                </p>
              </div>
            </div>

            <div className="bg-midnight-blue p-10 rounded-lg border border-iceshield-blue">
              <h3 className="text-snow-white font-semibold text-xl mb-4">IceShield® Approach</h3>
              <div className="space-y-3 text-frost-blue">
                <p>
                  <strong>Time to traction:</strong> 15–30 minutes (grit application only)
                </p>
                <p>
                  <strong>Variability:</strong> Low. Mechanical traction, not chemistry. Consistent across conditions.
                </p>
                <p>
                  <strong>Risk window:</strong> Minimal. Immediate friction improvement.
                </p>
              </div>
            </div>

            <div className="bg-iceshield-blue bg-opacity-10 p-8 rounded-lg border border-iceshield-blue text-center">
              <p className="text-frost-blue text-lg">
                <strong>Result:</strong> Safer roads for 90%+ of winter days. Faster incident clearance. Lower economic impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Uniform Friction */}
      <section className="bg-midnight-blue py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-16">Uniform Friction Coefficient</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-frost-blue text-lg">
                IceShield® provides consistent friction across the entire road surface—no patchiness, no surprises for drivers.
              </p>

              <div className="bg-arctic-navy p-8 rounded-lg border border-infrastructure-blue">
                <h3 className="text-snow-white font-semibold mb-4">Measurement Standard</h3>
                <p className="text-frost-blue text-sm mb-4">
                  Friction is measured using the Skid Number (SN) test, which rates pavement grip on ice.
                </p>
                <div className="space-y-2 text-frost-blue text-sm font-mono">
                  <p>SN &lt; 25: Dangerous (slippery)</p>
                  <p>SN 25–35: Acceptable</p>
                  <p>SN &gt; 35: Good (safe)</p>
                </div>
              </div>

              <div className="bg-arctic-navy p-8 rounded-lg border border-infrastructure-blue">
                <h3 className="text-snow-white font-semibold mb-4">IceShield® Performance</h3>
                <p className="text-frost-blue text-sm mb-3">
                  Maintains SN &gt; 40 across winter conditions. No degradation in cold or wet.
                </p>
                <div className="text-iceshield-blue font-bold">Consistent Safety</div>
              </div>
            </div>

            <div className="bg-arctic-navy p-10 rounded-lg border border-infrastructure-blue">
              <h3 className="text-snow-white font-semibold mb-8">Friction Uniformity</h3>
              <Image
                src="/salt-vs-iceshield.png"
                alt="Friction uniformity comparison - Salt vs IceShield"
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cost & Spring Cleanup - Link Forward */}
      <section className="bg-arctic-navy py-20 lg:py-32 border-t border-midnight-blue">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">Safety Backed by Economics</h2>
          <p className="text-frost-blue text-lg max-w-2xl mx-auto">
            Lower accident rates reduce emergency response costs, liability, and long-term infrastructure wear.
          </p>
          <p className="text-frost-blue text-lg max-w-2xl mx-auto">
            Combined with reduced salt-damage cleanup and equipment repair, IceShield® delivers total cost of ownership savings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/cost-cleanup"
              className="bg-iceshield-blue text-arctic-navy px-8 py-3 rounded font-semibold hover:bg-frost-blue transition-all duration-200"
            >
              View Cost Analysis
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
