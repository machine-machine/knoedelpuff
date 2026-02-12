"use client";

import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

const ingredients = [
  { icon: "🌿", name: "Frischer Blattspinat", desc: "Direkt vom Feld" },
  { icon: "🧀", name: "Bergkäse", desc: "Aus den Alpen" },
  { icon: "🥚", name: "Freilandeier", desc: "Von glücklichen Hühnern" },
  { icon: "🧈", name: "Alpenbutter", desc: "Cremig & vollmundig" },
  { icon: "🧅", name: "Frische Zwiebeln", desc: "Goldbraun geröstet" },
  { icon: "🧂", name: "Muskatnuss & Kräuter", desc: "Fein abgeschmeckt" },
];

export default function Produkte() {
  const ref = useReveal();

  return (
    <section
      id="produkte"
      className="py-24 sm:py-32 bg-cream texture-dots relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={ref} className="reveal text-center mb-16">
          <p className="text-forest-light font-medium tracking-widest uppercase text-sm mb-3">
            Unsere Spezialität
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-forest font-[family-name:var(--font-heading)] mb-6">
            Spinatknödel
          </h2>
          <p className="text-lg sm:text-xl text-warm-brown/80 max-w-2xl mx-auto leading-relaxed">
            Jeder Knödel wird von Hand geformt — nach einem alten Familienrezept,
            das seit Generationen weitergegeben wird.
          </p>
        </div>

        {/* Product Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Image */}
          <div className="reveal-left relative" ref={useReveal()}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&q=80"
                alt="Frisch zubereitete Spinatknödel auf einem rustikalen Holzteller, garniert mit Parmesan und gebräunter Butter"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative badge */}
            <div className="absolute -bottom-4 -right-4 bg-gold text-white rounded-full w-24 h-24 flex items-center justify-center shadow-lg rotate-12">
              <div className="text-center -rotate-12">
                <span className="text-xs font-bold block">100%</span>
                <span className="text-[10px] block">Handgemacht</span>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="reveal-right" ref={useReveal()}>
            <h3 className="text-3xl sm:text-4xl font-bold text-forest font-[family-name:var(--font-heading)] mb-6">
              Tradition trifft Leidenschaft
            </h3>
            <p className="text-warm-brown/80 text-lg leading-relaxed mb-6">
              Unsere Spinatknödel sind keine gewöhnlichen Knödel. Wir verwenden nur die
              frischesten Zutaten aus der Region — erntefrischen Blattspinat,
              cremigen Bergkäse aus den Alpen und Eier von freilaufenden Hühnern.
            </p>
            <p className="text-warm-brown/80 text-lg leading-relaxed mb-8">
              Jeder einzelne Knödel wird mit Sorgfalt von Hand geformt und nach
              traditioneller Art in leicht gesalzenem Wasser pochiert. Das Ergebnis:
              Ein unvergleichlich saftiger, aromatischer Genuss.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <span className="block text-3xl font-bold text-forest">100%</span>
                <span className="text-sm text-warm-brown/60">Natürlich</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-bold text-forest">0</span>
                <span className="text-sm text-warm-brown/60">Konservierungsstoffe</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-bold text-forest">∞</span>
                <span className="text-sm text-warm-brown/60">Liebe</span>
              </div>
            </div>
          </div>
        </div>

        {/* Ingredients Grid */}
        <div className="reveal" ref={useReveal()}>
          <h3 className="text-2xl sm:text-3xl font-bold text-forest font-[family-name:var(--font-heading)] text-center mb-12">
            Nur die besten Zutaten
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {ingredients.map((item, i) => (
              <div
                key={item.name}
                className="group bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="text-4xl block mb-3 group-hover:scale-125 transition-transform duration-300">
                  {item.icon}
                </span>
                <h4 className="font-semibold text-forest text-sm mb-1">
                  {item.name}
                </h4>
                <p className="text-xs text-warm-brown/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
