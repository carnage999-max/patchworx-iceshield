import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Snowflake, Droplet, Check, X } from "lucide-react";

export const metadata: Metadata = {
  title: "Patchworx IceShield® | Salt-Free Winter Road Safety System",
  description: "Salt is destroying roads, vehicles, and waterways. IceShield® replaces salt with a salt-free winter road safety system.",
  keywords: ["winter roads", "ice treatment", "salt-free de-icing", "winter maintenance", "road safety", "IceShield"],
  openGraph: {
    title: "Patchworx IceShield® | Salt-Free Winter Road Safety System",
    description: "Salt is destroying roads, vehicles, and waterways. IceShield® replaces salt with a salt-free winter road safety system.",
    images: [
      {
        url: "https://patchworx-ice.com/patchworx-ice-logo.png",
        width: 1200,
        height: 630,
        alt: "Patchworx IceShield",
      },
    ],
  },
};

export default function Home() {
  return (
    <main>
      {/* 1. Hero Section — The Shift Away From Salt */}
      <section id="hero" className="min-h-screen bg-gradient-to-b from-snow-white via-frost-blue/5 to-arctic-navy flex flex-col items-center justify-center px-6 py-24 relative overflow-hidden">
        {/* Snowfall effect */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="snowflake">❄</div>
          ))}
        </div>

        <div className="max-w-5xl w-full space-y-12 relative z-10 text-center">
          {/* Logo */}
          <div className="flex justify-center fade-in">
            <Image
              src="/patchworx-ice-logo.png"
              alt="Patchworx IceShield"
              width={100}
              height={100}
              className="w-24 h-24 rounded-3xl shadow-2xl hover:shadow-xl hover:scale-105 transition-all duration-300"
              priority
            />
          </div>

          {/* Headline */}
          <div className="space-y-6 fade-in fade-in-delay-100">
            <h1 className="text-5xl lg:text-7xl font-bold text-arctic-navy leading-tight tracking-tight">
              The Shift Away From Salt
            </h1>
            <p className="text-xl lg:text-2xl text-frost-blue font-normal max-w-3xl mx-auto leading-relaxed">
              Salt is destroying roads, vehicles, and waterways — and it stops working when temperatures drop. IceShield® replaces salt with a salt-free winter road safety system.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 pt-8 justify-center fade-in fade-in-delay-200">
            <a
              href="#how-it-works"
              className="bg-iceshield-blue text-white px-8 py-3.5 rounded-full font-semibold text-base hover:bg-iceshield-blue/90 active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              How IceShield Works
            </a>
            <Link
              href="/contact"
              className="bg-white/90 backdrop-blur-sm text-arctic-navy px-8 py-3.5 rounded-full font-semibold text-base hover:bg-white active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg border border-arctic-navy/10"
            >
              Start a Pilot Program
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center pt-16 animate-bounce fade-in fade-in-delay-300">
            <svg className="w-8 h-8 text-arctic-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* 2. The Problem — Why Salt Is Failing */}
      <section id="problem" className="relative bg-arctic-navy py-20 lg:py-32 overflow-hidden">
        {/* Snowfall effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="snowflake">❄</div>
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Why Salt Is Failing</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Corrosion */}
            <div className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 fade-in-up">
              <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mb-6">
                <Droplet className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-arctic-navy mb-4">Corrosion</h3>
              <ul className="space-y-3 text-infrastructure-blue">
                <li>• Destroys vehicles and infrastructure</li>
                <li>• Creates hidden long-term costs</li>
              </ul>
            </div>

            {/* Cold Failure */}
            <div className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 fade-in-up fade-in-delay-100">
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6">
                <Snowflake className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-arctic-navy mb-4">Cold Failure</h3>
              <ul className="space-y-3 text-infrastructure-blue">
                <li>• Loses effectiveness in extreme cold</li>
                <li>• Leads to black ice and refreeze</li>
              </ul>
            </div>

            {/* Environmental Harm */}
            <div className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 fade-in-up fade-in-delay-200">
              <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6">
                <Droplet className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-arctic-navy mb-4">Environmental Harm</h3>
              <ul className="space-y-3 text-infrastructure-blue">
                <li>• Chloride runoff contaminates water and soil</li>
              </ul>
            </div>
          </div>

          <div className="text-center fade-in-up fade-in-delay-300">
            <p className="text-3xl lg:text-4xl font-bold text-frost-blue">
              The problem is not winter — it is salt.
            </p>
          </div>
        </div>
      </section>

      {/* 3. The Insight — Melting Ice Is the Wrong Goal */}
      <section id="insight" className="bg-snow-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-arctic-navy mb-6">Melting Ice Is the Wrong Goal</h2>
          </div>

          {/* Visual Comparison */}
          <div className="max-w-4xl mx-auto mb-12 fade-in-up fade-in-delay-100">
            <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-2xl hover:shadow-xl transition-all duration-300">
              <Image
                src="/salt-vs-iceshield.png"
                alt="Salt vs IceShield comparison"
                width={1200}
                height={600}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
            {/* Traditional Salt */}
            <div className="bg-white p-10 rounded-2xl shadow-xl border-2 border-red-500/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 fade-in-up fade-in-delay-200">
              <div className="flex items-center gap-3 mb-6">
                <X className="w-8 h-8 text-red-500" />
                <h3 className="text-2xl font-bold text-arctic-navy">Traditional Salt</h3>
              </div>
              <p className="text-infrastructure-blue text-lg leading-relaxed">
                Salt reacts <strong>after</strong> ice forms.
              </p>
            </div>

            {/* IceShield */}
            <div className="bg-white p-10 rounded-2xl shadow-xl border-2 border-iceshield-blue hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 fade-in-up fade-in-delay-300">
              <div className="flex items-center gap-3 mb-6">
                <Check className="w-8 h-8 text-iceshield-blue" />
                <h3 className="text-2xl font-bold text-arctic-navy">IceShield®</h3>
              </div>
              <p className="text-infrastructure-blue text-lg leading-relaxed">
                IceShield® <strong>prevents</strong> ice from bonding to pavement.
              </p>
            </div>
          </div>

          {/* The Science */}
          <div className="bg-gradient-to-br from-iceshield-blue to-frost-blue p-10 lg:p-12 rounded-3xl shadow-2xl max-w-5xl mx-auto fade-in-up fade-in-delay-400">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="bg-white p-6 rounded-2xl shadow-xl">
                <Image
                  src="/ice-cannot-adhere.png"
                  alt="Ice slides off treated pavement - cannot bond to surface"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-xl"
                />
              </div>
              <div className="text-center lg:text-left">
                <p className="text-white text-2xl lg:text-3xl font-bold leading-relaxed">
                  Non-bonded ice slides off the surface, making it easier to plow and less likely to refreeze.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The System — How IceShield Works */}
      <section id="how-it-works" className="relative bg-arctic-navy py-20 lg:py-32 overflow-hidden">
        {/* Snowfall effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="snowflake">❄</div>
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">How IceShield Works</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Anti-Adhesion Treatment */}
            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 fade-in-up">
              <div className="w-14 h-14 bg-iceshield-blue rounded-2xl flex items-center justify-center text-white text-xl font-bold mb-6 shadow-lg">
                1
              </div>
              <h3 className="text-xl font-bold text-arctic-navy mb-3">Anti-Adhesion Treatment</h3>
              <p className="text-infrastructure-blue text-sm leading-relaxed">
                Penetrating surface treatment that alters surface energy, preventing ice from bonding to pavement.
              </p>
            </div>

            {/* Engineered Traction Grit */}
            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 fade-in-up fade-in-delay-100">
              <div className="w-14 h-14 bg-iceshield-blue rounded-2xl flex items-center justify-center text-white text-xl font-bold mb-6 shadow-lg">
                2
              </div>
              <h3 className="text-xl font-bold text-arctic-navy mb-3">Engineered Traction Grit</h3>
              <p className="text-infrastructure-blue text-sm leading-relaxed">
                Provides mechanical traction with lower application volumes than traditional methods.
              </p>
            </div>

            {/* Standard Operations */}
            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 fade-in-up fade-in-delay-200">
              <div className="w-14 h-14 bg-iceshield-blue rounded-2xl flex items-center justify-center text-white text-xl font-bold mb-6 shadow-lg">
                3
              </div>
              <h3 className="text-xl font-bold text-arctic-navy mb-3">Standard Operations</h3>
              <p className="text-infrastructure-blue text-sm leading-relaxed">
                No new equipment required—integrates seamlessly with existing fleet and operations.
              </p>
            </div>
          </div>

          {/* Application visual with context */}
          <div className="bg-white/5 backdrop-blur-sm p-8 lg:p-12 rounded-3xl border border-white/10 fade-in-up fade-in-delay-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">Application in Action</h3>
                <p className="text-frost-blue text-lg leading-relaxed mb-6">
                  IceShield® is applied using your existing tanker equipment. The treatment penetrates the pavement surface, creating a protective barrier that prevents ice adhesion throughout the winter season.
                </p>
                <ul className="space-y-3 text-frost-blue">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-iceshield-blue flex-shrink-0 mt-1" />
                    <span>Applied before the first snow</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-iceshield-blue flex-shrink-0 mt-1" />
                    <span>Lasts the entire winter season</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-iceshield-blue flex-shrink-0 mt-1" />
                    <span>Works at all temperatures</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-2xl">
                <Image
                  src="/tanker-spraying-floor-with-ice-shield.png"
                  alt="IceShield application using standard tanker equipment"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Safety Impact — Reducing Accidents */}
      <section id="safety" className="bg-snow-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-arctic-navy mb-6">Safety Impact — Reducing Accidents</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-10 rounded-2xl shadow-xl text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 fade-in-up">
              <h3 className="text-xl font-bold text-arctic-navy mb-3">Reduced bonded ice duration</h3>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-xl text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 fade-in-up fade-in-delay-100">
              <h3 className="text-xl font-bold text-arctic-navy mb-3">Faster traction recovery</h3>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-xl text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 fade-in-up fade-in-delay-200">
              <h3 className="text-xl font-bold text-arctic-navy mb-3">Uniform friction</h3>
            </div>
          </div>

          <div className="bg-gradient-to-br from-iceshield-blue to-frost-blue p-10 lg:p-12 rounded-3xl shadow-2xl max-w-4xl mx-auto hover:shadow-xl hover:-translate-y-1 transition-all duration-300 fade-in-up fade-in-delay-300">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Expected Outcomes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white text-lg">
              <div className="flex items-center gap-3">
                <Check className="w-6 h-6 flex-shrink-0" />
                <span>15–30% crash reduction overall</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-6 h-6 flex-shrink-0" />
                <span>30–50% reduction in high-risk areas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Cleanup & Cost — What Happens in the Spring */}
      <section id="cleanup-cost" className="relative bg-arctic-navy py-20 lg:py-32 overflow-hidden">
        {/* Snowfall effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="snowflake">❄</div>
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Cleanup &amp; Cost — What Happens in the Spring</h2>
          </div>

          {/* Grit reuse visual */}
          <div className="max-w-3xl mx-auto mb-12 fade-in-up fade-in-delay-100">
            <div className="bg-white p-8 rounded-3xl shadow-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <Image
                src="/grit-cleanup-and-reuse.png"
                alt="Grit cleanup and reuse system"
                width={800}
                height={500}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Traditional Salt */}
            <div className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 fade-in-up fade-in-delay-200">
              <div className="flex items-center gap-3 mb-6">
                <X className="w-8 h-8 text-red-500" />
                <h3 className="text-2xl font-bold text-arctic-navy">Traditional Salt</h3>
              </div>
              <p className="text-infrastructure-blue text-lg leading-relaxed">
                Creates sludge and cleanup costs.
              </p>
            </div>

            {/* IceShield */}
            <div className="bg-white p-10 rounded-2xl shadow-xl border-2 border-iceshield-blue hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 fade-in-up fade-in-delay-300">
              <div className="flex items-center gap-3 mb-6">
                <Check className="w-8 h-8 text-iceshield-blue" />
                <h3 className="text-2xl font-bold text-arctic-navy">IceShield®</h3>
              </div>
              <p className="text-infrastructure-blue text-lg leading-relaxed">
                Uses dry, inert material with reduced sweeping needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Environmental & Climate Alignment */}
      <section id="environmental" className="bg-snow-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-arctic-navy mb-6">Environmental &amp; Climate Alignment</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-xl text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 fade-in-up">
              <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                <Check className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-arctic-navy mb-3">Zero chloride runoff</h3>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-xl text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 fade-in-up fade-in-delay-100">
              <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                <Check className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-arctic-navy mb-3">Protects waterways</h3>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-xl text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 fade-in-up fade-in-delay-200">
              <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                <Check className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-arctic-navy mb-3">Supports climate resilience goals</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Pilot Program — Start Small, Prove It */}
      <section id="pilot" className="relative bg-arctic-navy py-20 lg:py-32 overflow-hidden">
        {/* Snowfall effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="snowflake">❄</div>
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Pilot Program — Start Small, Prove It</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-2xl text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 fade-in-up">
              <h3 className="text-3xl font-bold text-iceshield-blue mb-3">5–10 mile pilots</h3>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-2xl text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 fade-in-up fade-in-delay-100">
              <h3 className="text-3xl font-bold text-iceshield-blue mb-3">Control vs treated sections</h3>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-2xl text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 fade-in-up fade-in-delay-200">
              <h3 className="text-3xl font-bold text-iceshield-blue mb-3">One winter season minimum</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Scalability — From Pilot to Standard */}
      <section id="scalability" className="bg-snow-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-arctic-navy mb-6">Scalability — From Pilot to Standard</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-xl text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 fade-in-up">
              <h3 className="text-xl font-bold text-arctic-navy mb-3">Municipal to statewide rollout</h3>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-xl text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 fade-in-up fade-in-delay-100">
              <h3 className="text-xl font-bold text-arctic-navy mb-3">Compatible with existing pavement</h3>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-xl text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 fade-in-up fade-in-delay-200">
              <h3 className="text-xl font-bold text-arctic-navy mb-3">Licensable system</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Patchworx Integration */}
      <section id="patchworx" className="relative bg-arctic-navy py-20 lg:py-32 overflow-hidden">
        {/* Snowfall effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="snowflake">❄</div>
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Patchworx Integration</h2>
          </div>

          <div className="bg-gradient-to-br from-iceshield-blue to-frost-blue p-10 lg:p-12 rounded-3xl shadow-2xl max-w-4xl mx-auto text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 fade-in-up fade-in-delay-100">
            <div className="space-y-6 text-white text-xl lg:text-2xl font-semibold">
              <p>Repair + seal + winter protection</p>
              <p className="text-3xl lg:text-4xl font-bold">Year-round pavement value</p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Final Call to Action */}
      <section id="cta" className="bg-gradient-to-b from-snow-white to-frost-blue/10 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="space-y-8 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-arctic-navy">Ready to Transform Your Winter Strategy?</h2>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-8 fade-in-up fade-in-delay-100">
              <Link
                href="/contact"
                className="bg-iceshield-blue text-white px-8 py-3.5 rounded-full font-semibold text-base hover:bg-iceshield-blue/90 active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Request a Pilot
              </Link>
              <Link
                href="/contact"
                className="bg-white/90 backdrop-blur-sm text-arctic-navy px-8 py-3.5 rounded-full font-semibold text-base hover:bg-white active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg border border-arctic-navy/10"
              >
                Speak With an Engineer
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
