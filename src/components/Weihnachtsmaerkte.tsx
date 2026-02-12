"use client";

import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

const xmasDates = [
  {
    name: "Zürcher Christkindlimarkt",
    location: "Hauptbahnhof, Zürich",
    dates: "20. Nov – 23. Dez 2026",
    status: "Bestätigt",
    statusColor: "bg-forest-light",
  },
  {
    name: "Wienachtsdorf Bellevue",
    location: "Sechseläutenplatz, Zürich",
    dates: "24. Nov – 23. Dez 2026",
    status: "Bestätigt",
    statusColor: "bg-forest-light",
  },
  {
    name: "Sternenstadt",
    location: "Münsterhof, Zürich",
    dates: "24. Nov – 24. Dez 2026",
    status: "Geplant",
    statusColor: "bg-gold",
  },
  {
    name: "Weihnachtsmarkt am Bürkliplatz",
    location: "Bürkliplatz, Zürich",
    dates: "4. Dez – 23. Dez 2026",
    status: "Geplant",
    statusColor: "bg-gold",
  },
  {
    name: "Dörfli Weihnachtsmarkt",
    location: "Niederdorfstraße, Zürich",
    dates: "1. Dez – 24. Dez 2026",
    status: "Anfrage",
    statusColor: "bg-wood",
  },
];

export default function Weihnachtsmaerkte() {
  return (
    <section
      id="weihnachtsmaerkte"
      className="py-24 sm:py-32 bg-cream texture-dots relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="reveal text-center mb-16" ref={useReveal()}>
          <p className="text-forest-light font-medium tracking-widest uppercase text-sm mb-3">
            🎄 Weihnachtszeit
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] mb-6">
            <span className="text-forest">Weihnachts</span>
            <span className="text-gold italic">märkte</span>
          </h2>
          <p className="text-lg sm:text-xl text-warm-brown/70 max-w-2xl mx-auto leading-relaxed">
            Wenn der Duft von Glühwein in der Luft liegt und die Lichter funkeln,
            sind wir mit unseren dampfenden Spinatknödeln mittendrin.
          </p>
        </div>

        {/* Christmas Market Images */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Xmas booth 1 */}
          <div className="reveal-left" ref={useReveal()}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/12]">
              <Image
                src="/images/xmas-booth-1.jpg"
                alt="Spinat Knödel Weihnachtsmarkt-Stand mit Schneemann und Lichterketten"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold text-forest">
                  🎄 Unser Weihnachtsstand
                </div>
              </div>
            </div>
          </div>

          {/* Xmas booth 2 */}
          <div className="reveal-right" ref={useReveal()}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/12]">
              <Image
                src="/images/xmas-booth-2.jpg"
                alt="Spinat Knödel Stand festlich geschmückt mit goldenen Sternen und Lichterketten"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold text-forest">
                  ✨ Festlich & warm
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Christmas highlight cards */}
        <div className="reveal grid sm:grid-cols-3 gap-6 mb-16" ref={useReveal()}>
          {[
            {
              icon: "🎅",
              title: "Warme Knödel",
              desc: "Frisch & dampfend direkt aus dem Topf — die perfekte Wärme an kalten Winterabenden.",
            },
            {
              icon: "🌟",
              title: "Festliche Atmosphäre",
              desc: "Unser Stand mit Lichterketten, Weihnachtsmusik und dem Duft von Butter & Parmesan.",
            },
            {
              icon: "🎁",
              title: "Geschenk-Gutscheine",
              desc: "Die perfekte Geschenkidee — Knödel-Gutscheine für Familie und Freunde.",
            },
          ].map((card, i) => (
            <div
              key={card.title}
              className="group bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </span>
              <h4 className="font-semibold text-forest text-lg mb-2">{card.title}</h4>
              <p className="text-warm-brown/60 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Christmas Market Dates */}
        <div className="reveal" ref={useReveal()}>
          <h3 className="text-2xl sm:text-3xl font-bold text-forest font-[family-name:var(--font-heading)] text-center mb-10">
            🗓️ Weihnachtsmarkt-Kalender 2026
          </h3>
          <div className="max-w-3xl mx-auto space-y-4">
            {xmasDates.map((m, i) => (
              <div
                key={m.name}
                className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-500 group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 border-l-4 border-forest"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex-shrink-0 w-14 h-14 bg-forest/10 rounded-xl flex items-center justify-center group-hover:bg-forest group-hover:text-white transition-colors duration-300">
                  <span className="text-2xl">🎄</span>
                </div>

                <div className="flex-grow min-w-0">
                  <h4 className="text-lg font-bold text-warm-brown group-hover:text-forest transition-colors">
                    {m.name}
                  </h4>
                  <p className="text-warm-brown/60 text-sm">{m.location}</p>
                  <p className="text-warm-brown/80 text-sm font-medium mt-1">
                    📅 {m.dates}
                  </p>
                </div>

                <span
                  className={`flex-shrink-0 ${m.statusColor} text-white text-xs font-bold px-3 py-1 rounded-full self-start sm:self-center`}
                >
                  {m.status}
                </span>
              </div>
            ))}
          </div>
          <p className="text-warm-brown/40 text-sm text-center mt-6 italic">
            Stand: Februar 2026 · Änderungen vorbehalten
          </p>
        </div>
      </div>
    </section>
  );
}
