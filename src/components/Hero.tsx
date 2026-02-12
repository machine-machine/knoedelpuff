"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-forest-dark"
    >
      {/* Background — green textured with forest overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-forest-dark via-forest to-forest-dark" />
        {/* Subtle texture pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 text-6xl opacity-20 animate-float">
        🌿
      </div>
      <div className="absolute bottom-40 right-10 text-5xl opacity-15 animate-float delay-500">
        🥟
      </div>
      <div className="absolute top-40 right-20 text-4xl opacity-10 animate-float delay-300">
        ✨
      </div>
      <div className="absolute bottom-60 left-20 text-3xl opacity-10 animate-float delay-700">
        🧀
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto">
        {/* Logo image */}
        <div className="animate-fade-in-up mb-8">
          <div className="relative w-64 sm:w-80 lg:w-96 mx-auto aspect-[2/1] rounded-2xl overflow-hidden shadow-2xl border-2 border-gold/30">
            <Image
              src="/images/logo-green.jpg"
              alt="Spinat Knödel — Zürich"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
              priority
            />
          </div>
        </div>

        <div className="animate-fade-in-up delay-100">
          <p className="text-gold font-medium text-lg sm:text-xl mb-2 tracking-widest uppercase">
            Handgemacht in Zürich
          </p>
        </div>

        <h1 className="animate-fade-in-up delay-200 text-5xl sm:text-7xl lg:text-8xl font-bold text-white font-[family-name:var(--font-heading)] leading-tight mb-4">
          Knödelpuff
        </h1>

        <p className="animate-fade-in-up delay-300 text-xl sm:text-2xl lg:text-3xl text-cream/90 font-[family-name:var(--font-heading)] italic mb-4">
          &ldquo;Ich Habe Spinatgrüße&rdquo;
        </p>

        <p className="animate-fade-in-up delay-400 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Die besten handgemachten Spinatknödel — frisch zubereitet mit Liebe,
          Tradition und den feinsten Zutaten. Auf Weihnachtsmärkten,
          Festivals und direkt bei dir.
        </p>

        <div className="animate-fade-in-up delay-500 flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="#bestellen"
            className="group bg-gold hover:bg-wood-light text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg flex items-center gap-2"
          >
            Jetzt bestellen
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href="#produkte"
            className="border-2 border-white/40 hover:border-gold text-white hover:text-gold px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Unsere Knödel entdecken
          </a>
        </div>

        {/* Daft Punk poster as a fun accent */}
        <div className="animate-fade-in delay-700 relative max-w-[180px] sm:max-w-[220px] mx-auto">
          <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-xl border-2 border-gold/20 rotate-2 hover:rotate-0 transition-transform duration-500 hover:scale-105">
            <Image
              src="/images/daftpunk-poster.jpg"
              alt="Knödel Puff Airlines — Around the World"
              fill
              className="object-cover"
              sizes="220px"
            />
          </div>
          <p className="text-cream/50 text-xs mt-3 italic">
            Knödel Puff Airlines ✈️
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fade-in delay-1000 absolute bottom-8 left-1/2 -translate-x-1/2">
          <a href="#produkte" className="text-white/50 hover:text-white transition-colors">
            <svg
              className="w-8 h-8 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
