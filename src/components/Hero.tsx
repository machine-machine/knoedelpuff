"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=1920&q=80')",
        }}
      >
        <div className="hero-gradient absolute inset-0" />
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

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="animate-fade-in-up">
          <p className="text-gold font-medium text-lg sm:text-xl mb-4 tracking-widest uppercase">
            Handgemacht in Österreich
          </p>
        </div>

        <h1 className="animate-fade-in-up delay-100 text-5xl sm:text-7xl lg:text-8xl font-bold text-white font-[family-name:var(--font-heading)] leading-tight mb-6">
          Knödelpuff
        </h1>

        <p className="animate-fade-in-up delay-200 text-xl sm:text-2xl lg:text-3xl text-cream/90 font-[family-name:var(--font-heading)] italic mb-4">
          &ldquo;Ich Habe Spinatgrüße&rdquo;
        </p>

        <p className="animate-fade-in-up delay-300 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Die besten handgemachten Spinatknödel — frisch zubereitet mit Liebe,
          Tradition und den feinsten Zutaten aus Österreich. Auf Weihnachtsmärkten,
          Festen und direkt bei dir.
        </p>

        <div className="animate-fade-in-up delay-400 flex flex-col sm:flex-row gap-4 justify-center items-center">
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
            href="#catering"
            className="border-2 border-white/40 hover:border-gold text-white hover:text-gold px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Catering anfragen
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fade-in delay-500 absolute bottom-10 left-1/2 -translate-x-1/2">
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
