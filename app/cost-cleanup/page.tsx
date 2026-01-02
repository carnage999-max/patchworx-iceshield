import Link from "next/link";

export default function CostCleanup() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-b from-arctic-navy to-midnight-blue py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-center mb-6">Cost &amp; Spring Cleanup</h1>
          <p className="text-frost-blue text-lg text-center max-w-2xl mx-auto">
            Total cost of ownership analysis. Why IceShield® costs less over a complete winter season.
          </p>
        </div>
      </section>

      {/* Spring Cleanup Realities */}
      <section className="bg-arctic-navy py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-16">Spring Cleanup: The Salt Aftermath</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <p className="text-frost-blue text-lg">
                Salt doesn't disappear in spring. It accumulates on roadsides as crusty sludge and must be laboriously removed before it contaminates groundwater.
              </p>
              <div className="space-y-4">
                <div className="bg-midnight-blue p-6 rounded-lg border border-infrastructure-blue">
                  <h3 className="text-iceshield-blue font-semibold mb-2">Sludge Sweeping</h3>
                  <p className="text-frost-blue text-sm mb-3">Heavy sweepers and vacuum trucks remove road edges. Multi-week operation.</p>
                  <div className="text-iceshield-blue font-bold text-sm">$150–300 per mile</div>
                </div>
                <div className="bg-midnight-blue p-6 rounded-lg border border-infrastructure-blue">
                  <h3 className="text-iceshield-blue font-semibold mb-2">Sludge Hauling</h3>
                  <p className="text-frost-blue text-sm mb-3">Contaminated material transported to disposal sites. Environmental testing required.</p>
                  <div className="text-iceshield-blue font-bold text-sm">$50–100 per ton</div>
                </div>
                <div className="bg-midnight-blue p-6 rounded-lg border border-infrastructure-blue">
                  <h3 className="text-iceshield-blue font-semibold mb-2">Pavement Repair</h3>
                  <p className="text-frost-blue text-sm mb-3">Salt damage exposes underlying defects. Patching and repaving begins.</p>
                  <div className="text-iceshield-blue font-bold text-sm">$500–2000 per mile</div>
                </div>
              </div>
            </div>

            <div className="bg-midnight-blue p-10 rounded-lg border border-infrastructure-blue">
              <h3 className="text-snow-white font-semibold text-xl mb-8">Annual Spring Cleanup Budget</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-infrastructure-blue">
                  <span className="text-frost-blue">Per 100 miles</span>
                  <span className="text-iceshield-blue font-bold text-lg">$2.1M</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-frost-blue text-sm">
                    <span>Sweeping</span>
                    <span>$150K–300K</span>
                  </div>
                  <div className="flex justify-between text-frost-blue text-sm">
                    <span>Hauling</span>
                    <span>$200K–400K</span>
                  </div>
                  <div className="flex justify-between text-frost-blue text-sm">
                    <span>Pavement repair</span>
                    <span>$1.75M+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IceShield® Material Behavior */}
      <section className="bg-midnight-blue py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-16">IceShield® Dry Material Behavior</h2>

          <div className="max-w-3xl mx-auto space-y-8">
            <p className="text-frost-blue text-lg text-center">
              IceShield® grit doesn't dissolve or chemically transform. It remains inert and is easily removed.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-arctic-navy p-8 rounded-lg border border-infrastructure-blue">
                <h3 className="text-snow-white font-semibold mb-4">Grit Properties</h3>
                <ul className="space-y-2 text-frost-blue text-sm">
                  <li>✓ No chemical reaction</li>
                  <li>✓ Non-saline</li>
                  <li>✓ Dry (not sludge)</li>
                  <li>✓ Sweepable</li>
                </ul>
              </div>

              <div className="bg-arctic-navy p-8 rounded-lg border border-infrastructure-blue">
                <h3 className="text-snow-white font-semibold mb-4">Spring Cleanup</h3>
                <ul className="space-y-2 text-frost-blue text-sm">
                  <li>✓ 1–2 sweeps</li>
                  <li>✓ No sludge</li>
                  <li>✓ No contamination</li>
                  <li>✓ One day work</li>
                </ul>
              </div>

              <div className="bg-arctic-navy p-8 rounded-lg border border-infrastructure-blue">
                <h3 className="text-snow-white font-semibold mb-4">Cost</h3>
                <ul className="space-y-2 text-frost-blue text-sm">
                  <li>✓ ~$20–50/mile</li>
                  <li>✓ Single crew</li>
                  <li>✓ Minimal hauling</li>
                  <li>✓ No disposal cost</li>
                </ul>
              </div>
            </div>

            <div className="bg-iceshield-blue bg-opacity-10 p-10 rounded-lg border border-iceshield-blue text-center">
              <p className="text-frost-blue text-lg font-semibold">
                Spring cleanup cost: ~$20–50 per mile vs. $2.1M per 100 miles with salt
              </p>
              <p className="text-frost-blue text-sm mt-2">
                98%+ cost reduction. One day of work instead of six weeks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reduced Pavement Repair */}
      <section className="bg-arctic-navy py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-16">Reduced Spring Remediation</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-snow-white text-xl font-semibold">Salt Damage Repairs</h3>
              <p className="text-frost-blue">
                Salt accelerates concrete spalling, asphalt cracking, and surface deterioration. Expensive repairs begin in spring and continue through summer.
              </p>
              <div className="space-y-3">
                <div className="bg-midnight-blue p-6 rounded-lg border border-infrastructure-blue">
                  <h4 className="text-iceshield-blue font-semibold mb-2">Typical Spring Repairs (Per 100 miles)</h4>
                  <div className="space-y-2 text-frost-blue text-sm">
                    <div className="flex justify-between">
                      <span>Patching</span>
                      <span>$150K</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Seal coating</span>
                      <span>$200K</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Overlay/Resurfacing</span>
                      <span>$500K+</span>
                    </div>
                    <div className="border-t border-infrastructure-blue pt-2 flex justify-between font-bold">
                      <span>Total</span>
                      <span className="text-iceshield-blue">$850K+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-snow-white text-xl font-semibold">IceShield® Repair Profile</h3>
              <p className="text-frost-blue">
                No salt damage means pavement ages normally. Standard maintenance only—no accelerated deterioration.
              </p>
              <div className="space-y-3">
                <div className="bg-midnight-blue p-6 rounded-lg border border-iceshield-blue">
                  <h4 className="text-frost-blue font-semibold mb-2">Expected Spring Maintenance (Per 100 miles)</h4>
                  <div className="space-y-2 text-frost-blue text-sm">
                    <div className="flex justify-between">
                      <span>Sweeping</span>
                      <span>$5K</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Minor patching</span>
                      <span>$30K</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Seal coating (as needed)</span>
                      <span>$0–50K</span>
                    </div>
                    <div className="border-t border-iceshield-blue pt-2 flex justify-between font-bold">
                      <span>Total</span>
                      <span className="text-iceshield-blue">$35K–85K</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-iceshield-blue bg-opacity-10 p-10 rounded-lg border border-iceshield-blue text-center">
            <p className="text-frost-blue text-lg">
              <strong>Savings:</strong> $765K–815K per 100 miles annually in pavement repair costs.
            </p>
            <p className="text-frost-blue text-sm mt-2">
              Over 20-year pavement lifecycle: $15.3M–16.3M per 100 miles.
            </p>
          </div>
        </div>
      </section>

      {/* Total Cost of Ownership */}
      <section className="bg-midnight-blue py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-16">Total Cost of Ownership (TCO)</h2>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="overflow-x-auto">
              <table className="w-full text-frost-blue text-sm">
                <thead>
                  <tr className="border-b border-infrastructure-blue">
                    <th className="text-left py-3 px-4 text-snow-white">Cost Category</th>
                    <th className="text-right py-3 px-4">Salt (per 100 mi)</th>
                    <th className="text-right py-3 px-4">IceShield® (per 100 mi)</th>
                    <th className="text-right py-3 px-4 text-iceshield-blue font-bold">Savings</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-infrastructure-blue">
                    <td className="py-3 px-4">Material & Application</td>
                    <td className="text-right py-3 px-4">$400K</td>
                    <td className="text-right py-3 px-4">$320K</td>
                    <td className="text-right py-3 px-4 text-iceshield-blue font-bold">$80K</td>
                  </tr>
                  <tr className="border-b border-infrastructure-blue">
                    <td className="py-3 px-4">Spring Cleanup</td>
                    <td className="text-right py-3 px-4">$1.2M</td>
                    <td className="text-right py-3 px-4">$50K</td>
                    <td className="text-right py-3 px-4 text-iceshield-blue font-bold">$1.15M</td>
                  </tr>
                  <tr className="border-b border-infrastructure-blue">
                    <td className="py-3 px-4">Pavement Repair</td>
                    <td className="text-right py-3 px-4">$850K</td>
                    <td className="text-right py-3 px-4">$85K</td>
                    <td className="text-right py-3 px-4 text-iceshield-blue font-bold">$765K</td>
                  </tr>
                  <tr className="border-b border-infrastructure-blue">
                    <td className="py-3 px-4">Vehicle Corrosion (fleet)</td>
                    <td className="text-right py-3 px-4">$200K</td>
                    <td className="text-right py-3 px-4">$40K</td>
                    <td className="text-right py-3 px-4 text-iceshield-blue font-bold">$160K</td>
                  </tr>
                  <tr className="bg-midnight-blue border-t border-iceshield-blue">
                    <td className="py-3 px-4 font-bold text-snow-white">Annual Total</td>
                    <td className="text-right py-3 px-4 font-bold">$2.65M</td>
                    <td className="text-right py-3 px-4 font-bold">$495K</td>
                    <td className="text-right py-3 px-4 font-bold text-iceshield-blue text-lg">$2.15M</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-iceshield-blue bg-opacity-10 p-10 rounded-lg border border-iceshield-blue text-center">
            <h3 className="text-snow-white text-xl font-semibold mb-3">IceShield® Cost Advantage</h3>
            <p className="text-frost-blue text-lg mb-2">
              <strong>81% reduction</strong> in annual winter road management cost per 100 miles.
            </p>
            <p className="text-frost-blue text-sm">
              Over 20 years: $43M savings per 100 miles compared to salt-based maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* Environmental Savings */}
      <section className="bg-arctic-navy py-20 lg:py-32 border-t border-midnight-blue">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">The Economics of Environmental Protection</h2>
          <p className="text-frost-blue text-lg max-w-2xl mx-auto">
            Cleanup savings alone justify IceShield®. Environmental protection is the bonus—not a cost add-on.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/environmental"
              className="bg-iceshield-blue text-arctic-navy px-8 py-3 rounded font-semibold hover:bg-frost-blue transition-all duration-200"
            >
              Environmental Impact
            </Link>
            <Link
              href="/pilot-program"
              className="border border-frost-blue text-frost-blue px-8 py-3 rounded font-semibold hover:border-iceshield-blue hover:text-iceshield-blue transition-all duration-200"
            >
              Request Pilot
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
