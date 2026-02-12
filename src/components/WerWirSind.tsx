"use client";

import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

export default function WerWirSind() {
  return (
    <section
      id="wer-wir-sind"
      className="py-24 sm:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-forest via-forest-dark to-forest" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="reveal text-center mb-16" ref={useReveal()}>
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-3">
            Unsere Geschichte
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-cream font-[family-name:var(--font-heading)] mb-6">
            Wer wir sind
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Story */}
          <div className="reveal-left" ref={useReveal()}>
            <div className="space-y-6 text-cream/80 text-lg leading-relaxed">
              <p>
                <span className="text-gold font-bold text-2xl font-[family-name:var(--font-heading)]">
                  Es begann
                </span>{" "}
                in einer kleinen Küche in der Steiermark. Oma Hertha — die
                Königin der Knödel — hat uns beigebracht, dass gutes Essen Zeit,
                Liebe und die allerbesten Zutaten braucht.
              </p>
              <p>
                Ihr Spinatknödel-Rezept war legendär: Frischer Blattspinat aus
                dem eigenen Garten, cremiger Bergkäse vom Nachbarbauern, und eine
                Prise Muskatnuss, die alles zusammenbringt. &ldquo;Mei Kind,&rdquo;
                hat sie immer gesagt, &ldquo;a Knödel muss ma spürn.&rdquo;
              </p>
              <p>
                Heute bringen wir Omas Tradition auf die Weihnachtsmärkte und
                Festivals. Von der Steiermark nach Zürich — am Zwingliplatz und
                Großmünsterplatz formen wir jeden Tag mit denselben Händen und
                demselben Rezept die besten Spinatknödel der Stadt.
              </p>
              <p>
                <span className="text-gold font-semibold">Knödelpuff</span>{" "}
                steht für ehrliches Essen, regionale Zutaten und die
                Überzeugung, dass ein handgemachter Spinatknödel die Welt ein
                bisserl besser macht.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              {[
                { icon: "🌿", label: "Regional" },
                { icon: "🤲", label: "Handgemacht" },
                { icon: "❤️", label: "Mit Liebe" },
              ].map((v) => (
                <div
                  key={v.label}
                  className="text-center bg-white/10 rounded-xl p-4 backdrop-blur-sm"
                >
                  <span className="text-3xl block mb-2">{v.icon}</span>
                  <span className="text-cream font-medium text-sm">
                    {v.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual side */}
          <div className="reveal-right space-y-6" ref={useReveal()}>
            {/* Logo as brand element */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[2/1]">
              <Image
                src="/images/logo-green.jpg"
                alt="Spinat Knödel — Zürich, Zwingliplatz / Großmünsterplatz"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Team quote */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <svg
                className="w-8 h-8 text-gold mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-cream/90 text-lg italic leading-relaxed mb-4">
                &ldquo;Mei Kind, a Knödel muss ma spürn. Nicht nur im Bauch —
                im Herzen.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-white font-bold text-sm">
                  OH
                </div>
                <div>
                  <p className="text-cream font-semibold">Oma Hertha</p>
                  <p className="text-cream/50 text-sm">Die Knödel-Königin, Steiermark</p>
                </div>
              </div>
            </div>

            {/* Instagram CTA */}
            <div className="text-center">
              <a
                href="https://instagram.com/knoedelpuff"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold hover:text-cream transition-colors duration-300 font-medium"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                @knoedelpuff
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
