export default function Environmental() {
  return (
    <main>
      <section className="bg-gradient-to-b from-arctic-navy to-midnight-blue py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white text-center mb-4">Environmental Disclosure</h1>
          <p className="text-frost-blue text-center">IceShield® Environmental Impact & Claims Substantiation</p>
        </div>
      </section>

      <section className="bg-arctic-navy py-20 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-frost-blue space-y-8">
          <div>
            <h2 className="text-white text-2xl font-semibold mb-4">1. Product Composition</h2>
            <p className="mb-3">IceShield® consists of two primary components:</p>
            <ul className="space-y-3 ml-6">
              <li>
                <strong className="text-iceshield-blue">Anti-Adhesion Treatment:</strong> Proprietary surface modifier. Non-toxic, non-corrosive. Designed to reduce van der Waals bonding between ice and pavement.
              </li>
              <li>
                <strong className="text-iceshield-blue">Engineered Traction Grit:</strong> Mineral aggregate blend (non-saline, non-chemical). Designed for consistent friction on ice without melting.
              </li>
            </ul>
            <p className="mt-3 text-sm italic">
              Full technical specifications and safety data sheets available upon request.
            </p>
          </div>

          <div>
            <h2 className="text-white text-2xl font-semibold mb-4">2. Environmental Claims Substantiation</h2>
            <p className="mb-3">We substantiate the following claims with pilot data and independent testing:</p>
            
            <div className="space-y-4">
              <div className="bg-midnight-blue p-6 rounded-lg border border-infrastructure-blue">
                <h4 className="text-iceshield-blue font-semibold mb-2">Zero Chloride Runoff</h4>
                <p className="text-sm">
                  IceShield® contains no sodium chloride or other road salt. Grit is mineral-based and chemically inert. Water quality testing of drainage from IceShield-treated roads shows no measurable chloride increase.
                </p>
              </div>

              <div className="bg-midnight-blue p-6 rounded-lg border border-infrastructure-blue">
                <h4 className="text-iceshield-blue font-semibold mb-2">80% Reduction in Salt Damage</h4>
                <p className="text-sm">
                  Pilot pavement assessments (pre & post-winter) show 80% fewer salt-related defects on IceShield-treated segments vs. salt-managed control segments. Three independent assessments (2023–2025).
                </p>
              </div>

              <div className="bg-midnight-blue p-6 rounded-lg border border-infrastructure-blue">
                <h4 className="text-iceshield-blue font-semibold mb-2">No Soil Degradation</h4>
                <p className="text-sm">
                  Soil samples from IceShield-treated roadsides show normal pH and salt concentration. No accumulation observed after one winter season. Control sites (salt-treated) show elevated chloride.
                </p>
              </div>

              <div className="bg-midnight-blue p-6 rounded-lg border border-infrastructure-blue">
                <h4 className="text-iceshield-blue font-semibold mb-2">Aquatic Safety</h4>
                <p className="text-sm">
                  Spring runoff from IceShield-treated drainage areas shows no fish-toxic salinity. Control areas (salt) show elevated chloride beyond fish tolerance thresholds.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-white text-2xl font-semibold mb-4">3. Lifecycle Assessment</h2>
            <p className="mb-3">
              IceShield® has lower lifecycle environmental impact than salt-based management:
            </p>
            <ul className="space-y-2 ml-6 list-disc text-sm">
              <li>No persistent chemical runoff</li>
              <li>Reduced spring remediation (less hauling, fuel, landfill disposal)</li>
              <li>Mineral grit is recyclable or biodegradable</li>
              <li>No infrastructure corrosion = fewer replacement materials</li>
            </ul>
          </div>

          <div>
            <h2 className="text-white text-2xl font-semibold mb-4">4. Regulatory Alignment</h2>
            <p className="mb-3">IceShield® supports compliance with:</p>
            <ul className="space-y-2 ml-6 list-disc text-sm">
              <li>EPA water quality standards (no chloride contribution)</li>
              <li>State drinking water protection regulations</li>
              <li>Municipal salt reduction commitments</li>
              <li>Environmental restoration goals</li>
            </ul>
          </div>

          <div>
            <h2 className="text-white text-2xl font-semibold mb-4">5. Data Transparency</h2>
            <p>
              All pilot program data, pavement assessments, soil testing, and water quality results are available for independent review. Patchworx commits to third-party verification of environmental claims.
            </p>
          </div>

          <div>
            <h2 className="text-white text-2xl font-semibold mb-4">6. Limitations & Qualifications</h2>
            <p className="mb-3">
              IceShield® environmental benefits are contingent on:
            </p>
            <ul className="space-y-2 ml-6 list-disc text-sm">
              <li>Proper application of anti-adhesion treatment</li>
              <li>Use of engineered traction grit (not substitutes)</li>
              <li>Standard spring cleanup procedures</li>
              <li>Geographic regions with winter freeze-thaw cycles</li>
            </ul>
          </div>

          <div>
            <h2 className="text-white text-2xl font-semibold mb-4">7. Contact for More Information</h2>
            <p>
              For full environmental reports, testing data, or third-party verification details, contact <strong>environmental@patchworx.com</strong>.
            </p>
          </div>

          <div className="bg-iceshield-blue bg-opacity-10 p-8 rounded-lg border border-iceshield-blue">
            <p className="text-sm">
              <strong>Disclaimer:</strong> This disclosure is based on pilot program data and independent testing. Individual results may vary based on climate, road conditions, and application methods. Patchworx makes no warranty regarding specific environmental outcomes but commits to data transparency and third-party verification.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
