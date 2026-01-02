"use client";

import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    municipality: "",
    roadMiles: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", municipality: "", roadMiles: "", message: "" });
    }, 3000);
  };

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-b from-arctic-navy to-midnight-blue py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-center mb-6">Get in Touch</h1>
          <p className="text-frost-blue text-lg text-center max-w-2xl mx-auto">
            Request a pilot, ask questions, or discuss scaling IceShield® for your jurisdiction.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="bg-arctic-navy py-20 lg:py-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-midnight-blue p-10 rounded-lg border border-infrastructure-blue">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">Pilot Request Form</h2>

                {submitted ? (
                  <div className="bg-iceshield-blue bg-opacity-20 border border-iceshield-blue p-8 rounded-lg text-center">
                    <h3 className="text-snow-white text-xl font-semibold mb-2">Thank You!</h3>
                    <p className="text-frost-blue">
                      We've received your request. A member of the Patchworx team will contact you within 1–2 business days.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-frost-blue font-semibold mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-arctic-navy border border-infrastructure-blue text-snow-white rounded focus:outline-none focus:border-iceshield-blue"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="block text-frost-blue font-semibold mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-arctic-navy border border-infrastructure-blue text-snow-white rounded focus:outline-none focus:border-iceshield-blue"
                        placeholder="your.email@municipality.gov"
                      />
                    </div>

                    <div>
                      <label className="block text-frost-blue font-semibold mb-2">Municipality / Jurisdiction</label>
                      <input
                        type="text"
                        name="municipality"
                        value={formData.municipality}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-arctic-navy border border-infrastructure-blue text-snow-white rounded focus:outline-none focus:border-iceshield-blue"
                        placeholder="City/County name"
                      />
                    </div>

                    <div>
                      <label className="block text-frost-blue font-semibold mb-2">Road Miles Managed Annually</label>
                      <input
                        type="text"
                        name="roadMiles"
                        value={formData.roadMiles}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-arctic-navy border border-infrastructure-blue text-snow-white rounded focus:outline-none focus:border-iceshield-blue"
                        placeholder="e.g., 500, 1500, etc."
                      />
                    </div>

                    <div>
                      <label className="block text-frost-blue font-semibold mb-2">Message / Questions</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 bg-arctic-navy border border-infrastructure-blue text-snow-white rounded focus:outline-none focus:border-iceshield-blue"
                        placeholder="Tell us about your winter road challenges. What would success look like?"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-iceshield-blue text-arctic-navy py-3 rounded font-semibold hover:bg-frost-blue transition-all duration-200"
                    >
                      Submit Pilot Request
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-midnight-blue p-8 rounded-lg border border-infrastructure-blue">
                <h3 className="text-snow-white font-semibold text-lg mb-4">Direct Contact</h3>
                <div className="space-y-3 text-frost-blue text-sm">
                  <p>
                    <strong className="text-iceshield-blue">Email:</strong>
                    <br />
                    <a href="mailto:pilots@patchworx.com" className="hover:text-iceshield-blue transition-colors">
                      pilots@patchworx.com
                    </a>
                  </p>
                  <p>
                    <strong className="text-iceshield-blue">Phone:</strong>
                    <br />
                    <a href="tel:+16045551234" className="hover:text-iceshield-blue transition-colors">
                      +1 (604) 555-1234
                    </a>
                  </p>
                </div>
              </div>

              <div className="bg-midnight-blue p-8 rounded-lg border border-infrastructure-blue">
                <h3 className="text-snow-white font-semibold text-lg mb-4">Response Time</h3>
                <p className="text-frost-blue text-sm">
                  Expect contact within 1–2 business days. We discuss your specific needs and create a customized pilot proposal.
                </p>
              </div>

              <div className="bg-midnight-blue p-8 rounded-lg border border-infrastructure-blue">
                <h3 className="text-snow-white font-semibold text-lg mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="/pilot-program"
                      className="text-frost-blue hover:text-iceshield-blue transition-colors"
                    >
                      Pilot Program Overview
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/how-it-works"
                      className="text-frost-blue hover:text-iceshield-blue transition-colors"
                    >
                      How IceShield® Works
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/cost-cleanup"
                      className="text-frost-blue hover:text-iceshield-blue transition-colors"
                    >
                      Cost & ROI Analysis
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-midnight-blue py-20 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-16">Common Questions</h2>

          <div className="space-y-6">
            <div className="bg-arctic-navy p-8 rounded-lg border border-infrastructure-blue">
              <h3 className="text-snow-white font-semibold text-lg mb-3">What size municipality can participate in a pilot?</h3>
              <p className="text-frost-blue text-sm">
                Any size. We've run pilots from small towns (50 miles) to large cities (500+ miles). Pilot size is flexible based on your needs.
              </p>
            </div>

            <div className="bg-arctic-navy p-8 rounded-lg border border-infrastructure-blue">
              <h3 className="text-snow-white font-semibold text-lg mb-3">Is there any cost to us for a pilot?</h3>
              <p className="text-frost-blue text-sm">
                No. Patchworx funds materials and provides technical support. You provide roads, crew, and data collection.
              </p>
            </div>

            <div className="bg-arctic-navy p-8 rounded-lg border border-infrastructure-blue">
              <h3 className="text-snow-white font-semibold text-lg mb-3">What if the pilot doesn't work out?</h3>
              <p className="text-frost-blue text-sm">
                No obligation. Pilot is standalone. You're free to continue with salt or try other alternatives. That said, pilot results typically exceed expectations.
              </p>
            </div>

            <div className="bg-arctic-navy p-8 rounded-lg border border-infrastructure-blue">
              <h3 className="text-snow-white font-semibold text-lg mb-3">How long does a pilot take?</h3>
              <p className="text-frost-blue text-sm">
                One full winter season (Nov–March). Final report and decision by June. Time frame allows for complete data collection.
              </p>
            </div>

            <div className="bg-arctic-navy p-8 rounded-lg border border-infrastructure-blue">
              <h3 className="text-snow-white font-semibold text-lg mb-3">Can we start mid-winter?</h3>
              <p className="text-frost-blue text-sm">
                Ideally, pilots start in fall (before first snow) to include pre-season treatment. But we can discuss late-season starts if needed.
              </p>
            </div>

            <div className="bg-arctic-navy p-8 rounded-lg border border-infrastructure-blue">
              <h3 className="text-snow-white font-semibold text-lg mb-3">How do we scale after a successful pilot?</h3>
              <p className="text-frost-blue text-sm">
                Patchworx works with you to build a phased expansion plan. Start regional, scale to full network. No rush. Budget and training scale with deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="bg-arctic-navy py-20 lg:py-32 border-t border-midnight-blue">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">Next Steps</h2>
          <ol className="text-frost-blue text-lg space-y-4 text-left">
            <li>
              <strong className="text-iceshield-blue">1. Complete this form</strong> (or call directly)
            </li>
            <li>
              <strong className="text-iceshield-blue">2. Speak with a Patchworx engineer</strong> about your specific roads and challenges
            </li>
            <li>
              <strong className="text-iceshield-blue">3. Review pilot proposal</strong> including timeline, logistics, and data collection
            </li>
            <li>
              <strong className="text-iceshield-blue">4. Approve and begin</strong> in fall for next winter season
            </li>
          </ol>
          <p className="text-frost-blue text-lg pt-4">
            You'll have objective data by spring. Then you decide what's next.
          </p>
        </div>
      </section>
    </main>
  );
}
