"use client";

import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

export default function UeberUns() {
  return (
    <section
      id="ueber-uns"
      className="py-24 sm:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-forest/90" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="reveal text-center mb-16" ref={useReveal()}>
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-3">
            Unsere Geschichte
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-cream font-[family-name:var(--font-heading)] mb-6">
            Über uns
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
                Feste Österreichs. Jeder Knödel, den wir formen, trägt ihre
                Handschrift — und eine ordentliche Portion steirische
                Sturschädeligkeit.
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

          {/* Images */}
          <div className="reveal-right space-y-6" ref={useReveal()}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
                alt="Hände formen sorgfältig einen Spinatknödel in einer traditionellen Küche"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square">
                <Image
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&q=80"
                  alt="Frischer Blattspinat auf einem Holzbrett"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square">
                <Image
                  src="https://images.unsplash.com/photo-1470114716159-e389f8712fda?w=400&q=80"
                  alt="Steirische Berglandschaft mit grünen Wiesen und Alpenpanorama"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
