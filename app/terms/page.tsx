import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Patchworx",
  description: "Terms of service governing use of Patchworx website, IceShield® product information, and pilot program participation.",
  keywords: ["terms of service", "legal", "conditions", "usage terms"],
  openGraph: {
    title: "Terms of Service | Patchworx",
    description: "Patchworx terms of service for website and product use.",
    images: [
      {
        url: "https://patchworx-ice.com/patchworx-ice-logo.png",
        width: 1200,
        height: 630,
        alt: "Terms of Service",
      },
    ],
  },
};

export default function Terms() {
  return (
    <main>
      <section className="bg-gradient-to-b from-arctic-navy to-midnight-blue py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h1 className="text-white text-center mb-4">Terms of Service</h1>
          <p className="text-frost-blue text-center">Last Updated: January 2, 2026</p>
        </div>
      </section>

      <section className="bg-arctic-navy section">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-frost-blue space-y-8">
          <div>
            <h2 className="text-white text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing and using this website and any services offered by Patchworx Inc., you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our services.
            </p>
          </div>

          <div>
            <h2 className="text-white text-2xl font-semibold mb-4">2. Use License</h2>
            <p className="mb-3">
              Permission is granted to temporarily download one copy of the materials (information or software) on Patchworx's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="space-y-2 ml-6 list-disc">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software on the website</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Attempt to gain unauthorized access to our servers or systems</li>
            </ul>
          </div>

          <div>
            <h2 className="text-white text-2xl font-semibold mb-4">3. Disclaimer</h2>
            <p>
              The materials on Patchworx's website are provided on an "as is" basis. Patchworx makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </div>

          <div>
            <h2 className="text-white text-2xl font-semibold mb-4">4. Limitations</h2>
            <p>
              In no event shall Patchworx or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Patchworx's website.
            </p>
          </div>

          <div>
            <h2 className="text-white text-2xl font-semibold mb-4">5. Accuracy of Materials</h2>
            <p>
              The materials appearing on Patchworx's website could include technical, typographical, or photographic errors. Patchworx does not warrant that any of the materials on its website are accurate, complete, or current. Patchworx may make changes to the materials contained on its website at any time without notice.
            </p>
          </div>

          <div>
            <h2 className="text-white text-2xl font-semibold mb-4">6. Materials License</h2>
            <p>
              The materials on Patchworx's website are licensed and not sold. Patchworx retains all rights not expressly granted in and to the website and all content.
            </p>
          </div>

          <div>
            <h2 className="text-white text-2xl font-semibold mb-4">7. Limitations on Liability</h2>
            <p>
              Patchworx shall not be held liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the services or materials on the website, even if Patchworx has been advised of the possibility of such damages.
            </p>
          </div>

          <div>
            <h2 className="text-white text-2xl font-semibold mb-4">8. Accuracy of Information</h2>
            <p>
              While we strive to provide accurate information about IceShield® and its benefits, the information contained on this website is for general informational purposes only. Patchworx does not make any representations or warranties regarding the accuracy, completeness, or timeliness of any information on the website.
            </p>
          </div>

          <div>
            <h2 className="text-white text-2xl font-semibold mb-4">9. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. Patchworx is not responsible for the contents, accuracy, or practices of these external sites. Your use of third-party websites is subject to their terms and conditions. We encourage you to review the privacy and terms policies of any third-party website before providing personal information.
            </p>
          </div>

          <div>
            <h2 className="text-white text-2xl font-semibold mb-4">10. Modifications to Terms</h2>
            <p>
              Patchworx may revise these terms of service for our website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </div>

          <div>
            <h2 className="text-white text-2xl font-semibold mb-4">11. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of the United States and the State of Florida, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </div>

          <div>
            <h2 className="text-white text-2xl font-semibold mb-4">12. Intellectual Property Rights</h2>
            <p className="mb-3">
              All content on our website, including text, graphics, logos, images, and software, is the property of Patchworx Inc. or its content suppliers and is protected by international copyright laws. You may not:
            </p>
            <ul className="space-y-2 ml-6 list-disc">
              <li>Reproduce or republish content without permission</li>
              <li>Modify or create derivative works based on our content</li>
              <li>Use our trademarks, logos, or service marks without authorization</li>
              <li>Remove copyright or other proprietary notices</li>
            </ul>
          </div>

          <div>
            <h2 className="text-white text-2xl font-semibold mb-4">13. Pilot Program Terms</h2>
            <p className="mb-3">
              By participating in a Patchworx pilot program, you agree to:
            </p>
            <ul className="space-y-2 ml-6 list-disc">
              <li>Provide accurate information during the application process</li>
              <li>Allow Patchworx to collect performance and usage data during the pilot</li>
              <li>Comply with all safety and operational guidelines provided</li>
              <li>Provide reasonable feedback on product performance</li>
              <li>Not misrepresent results or findings without authorization</li>
            </ul>
          </div>

          <div>
            <h2 className="text-white text-2xl font-semibold mb-4">14. Warranty Disclaimer</h2>
            <p>
              PATCHWORX MAKES NO WARRANTIES, EXPRESS OR IMPLIED, REGARDING THE PRODUCT OR SERVICES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. THE PRODUCT IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EXPRESSED OR IMPLIED.
            </p>
          </div>

          <div>
            <h2 className="text-white text-2xl font-semibold mb-4">15. Contact Information</h2>
            <p className="mb-3">
              If you have questions regarding these Terms of Service, please contact us at:
            </p>
            <p>
              <strong>Patchworx Inc.</strong><br />
              Email: legal@patchworx.com
            </p>
          </div>

          <div className="border-t border-infrastructure-blue pt-8 mt-8">
            <p className="text-sm">© 2026 Patchworx Inc. All rights reserved. IceShield® is a registered trademark of Patchworx Inc.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
