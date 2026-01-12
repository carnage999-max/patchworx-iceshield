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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", municipality: "", roadMiles: "", message: "" });
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        setError("Something went wrong. Please try again or contact us directly.");
      }
    } catch (err) {
      setError("Unable to send message. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-snow-white overflow-hidden">
        {/* Snowfall effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="snowflake">❄</div>
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32 text-center">
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-arctic-navy mb-6 tracking-tight fade-in-up">
            Get in Touch
          </h1>
          <p className="text-arctic-navy text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto fade-in fade-in-delay-100">
            Request a pilot, ask questions, or discuss scaling IceShield® for your jurisdiction.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="relative bg-arctic-navy py-20 lg:py-32 overflow-hidden">
        {/* Snowfall effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="snowflake">❄</div>
          ))}
        </div>

        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-10 rounded-2xl shadow-xl">
                <h2 className="text-3xl lg:text-4xl font-bold text-arctic-navy mb-8">Pilot Request Form</h2>

                {submitted ? (
                  <div className="bg-gradient-to-br from-iceshield-blue to-frost-blue p-8 rounded-2xl text-center">
                    <h3 className="text-white text-xl font-bold mb-2">Thank You!</h3>
                    <p className="text-white">
                      We've received your request. A member of the Patchworx team will contact you within 1–2 business days.
                    </p>
                  </div>
                ) : (
                  <>
                    {error && (
                      <div className="bg-red-50 border-2 border-red-200 text-red-700 p-4 rounded-xl mb-6">
                        <p className="font-semibold">{error}</p>
                      </div>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-arctic-navy font-semibold mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-snow-white border-2 border-frost-blue/30 text-arctic-navy rounded-xl focus:outline-none focus:border-iceshield-blue transition-colors"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="block text-arctic-navy font-semibold mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-snow-white border-2 border-frost-blue/30 text-arctic-navy rounded-xl focus:outline-none focus:border-iceshield-blue transition-colors"
                        placeholder="your.email@municipality.gov"
                      />
                    </div>

                    <div>
                      <label className="block text-arctic-navy font-semibold mb-2">Municipality / Jurisdiction</label>
                      <input
                        type="text"
                        name="municipality"
                        value={formData.municipality}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-snow-white border-2 border-frost-blue/30 text-arctic-navy rounded-xl focus:outline-none focus:border-iceshield-blue transition-colors"
                        placeholder="City/County name"
                      />
                    </div>

                    <div>
                      <label className="block text-arctic-navy font-semibold mb-2">Road Miles Managed Annually</label>
                      <input
                        type="text"
                        name="roadMiles"
                        value={formData.roadMiles}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-snow-white border-2 border-frost-blue/30 text-arctic-navy rounded-xl focus:outline-none focus:border-iceshield-blue transition-colors"
                        placeholder="e.g., 500, 1500, etc."
                      />
                    </div>

                    <div>
                      <label className="block text-arctic-navy font-semibold mb-2">Message / Questions</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 bg-snow-white border-2 border-frost-blue/30 text-arctic-navy rounded-xl focus:outline-none focus:border-iceshield-blue transition-colors resize-none"
                        placeholder="Tell us about your winter road challenges. What would success look like?"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-iceshield-blue text-white py-4 rounded-xl font-semibold hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending..." : "Submit Pilot Request"}
                    </button>
                  </form>
                  </>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-arctic-navy font-bold text-lg mb-4">Direct Contact</h3>
                <div className="space-y-3 text-infrastructure-blue text-sm">
                  <p>
                    <strong className="text-arctic-navy">Email:</strong>
                    <br />
                    <a href="mailto:info@patchworx.com" className="hover:text-iceshield-blue transition-colors">
                      info@patchworx.com
                    </a>
                  </p>
                  <p>
                    <strong className="text-arctic-navy">Phone:</strong>
                    <br />
                    <a href="tel:+12079471999" className="hover:text-iceshield-blue transition-colors">
                      207-947-1999
                    </a>
                  </p>
                  <p>
                    <strong className="text-arctic-navy">Address:</strong>
                    <br />
                    <span>PO Box 52<br />Detroit, ME 04929</span>
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-arctic-navy font-bold text-lg mb-4">Response Time</h3>
                <p className="text-infrastructure-blue text-sm leading-relaxed">
                  Expect contact within 1–2 business days. We discuss your specific needs and create a customized pilot proposal.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-arctic-navy font-bold text-lg mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="/#pilot"
                      className="text-infrastructure-blue hover:text-iceshield-blue transition-colors"
                    >
                      Pilot Program Overview
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#how-it-works"
                      className="text-infrastructure-blue hover:text-iceshield-blue transition-colors"
                    >
                      How IceShield® Works
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#safety"
                      className="text-infrastructure-blue hover:text-iceshield-blue transition-colors"
                    >
                      Safety & Performance
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-snow-white py-20 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-arctic-navy text-center mb-16 fade-in-up">Common Questions</h2>

          <div className="space-y-4">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 fade-in-up">
              <h3 className="text-arctic-navy font-bold text-lg mb-3">What size municipality can participate in a pilot?</h3>
              <p className="text-infrastructure-blue text-sm leading-relaxed">
                Any size. We've run pilots from small towns (50 miles) to large cities (500+ miles). Pilot size is flexible based on your needs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 fade-in-up fade-in-delay-100">
              <h3 className="text-arctic-navy font-bold text-lg mb-3">Is there any cost to us for a pilot?</h3>
              <p className="text-infrastructure-blue text-sm leading-relaxed">
                No. Patchworx funds materials and provides technical support. You provide roads, crew, and data collection.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 fade-in-up fade-in-delay-200">
              <h3 className="text-arctic-navy font-bold text-lg mb-3">What if the pilot doesn't work out?</h3>
              <p className="text-infrastructure-blue text-sm leading-relaxed">
                No obligation. Pilot is standalone. You're free to continue with salt or try other alternatives. That said, pilot results typically exceed expectations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 fade-in-up fade-in-delay-300">
              <h3 className="text-arctic-navy font-bold text-lg mb-3">How long does a pilot take?</h3>
              <p className="text-infrastructure-blue text-sm leading-relaxed">
                One full winter season (Nov–March). Final report and decision by June. Time frame allows for complete data collection.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 fade-in-up fade-in-delay-400">
              <h3 className="text-arctic-navy font-bold text-lg mb-3">Can we start mid-winter?</h3>
              <p className="text-infrastructure-blue text-sm leading-relaxed">
                Ideally, pilots start in fall (before first snow) to include pre-season treatment. But we can discuss late-season starts if needed.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 fade-in-up fade-in-delay-500">
              <h3 className="text-arctic-navy font-bold text-lg mb-3">How do we scale after a successful pilot?</h3>
              <p className="text-infrastructure-blue text-sm leading-relaxed">
                Patchworx works with you to build a phased expansion plan. Start regional, scale to full network. No rush. Budget and training scale with deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="relative bg-arctic-navy py-20 lg:py-32 overflow-hidden">
        {/* Snowfall effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="snowflake">❄</div>
          ))}
        </div>

        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white fade-in-up">Next Steps</h2>
          <ol className="text-frost-blue text-lg space-y-4 text-left fade-in fade-in-delay-100">
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
          <p className="text-frost-blue text-lg pt-4 fade-in-up fade-in-delay-200">
            You'll have objective data by spring. Then you decide what's next.
          </p>
        </div>
      </section>
    </main>
  );
}
