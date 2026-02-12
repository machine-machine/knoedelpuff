"use client";

import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

const xmasDates = [
  {
    name: "Zürcher Christkindlimarkt",
    location: "Hauptbahnhof, Zürich",
    dates: "20. Nov – 23. Dez 2026",
    status: "Bestätigt",
    statusColor: "bg-xmas-red-light",
  },
  {
    name: "Wienachtsdorf Bellevue",
    location: "Sechseläutenplatz, Zürich",
    dates: "24. Nov – 23. Dez 2026",
    status: "Bestätigt",
    statusColor: "bg-xmas-red-light",
  },
  {
    name: "Sternenstadt",
    location: "Münsterhof, Zürich",
    dates: "24. Nov – 24. Dez 2026",
    status: "Geplant",
    statusColor: "bg-xmas-amber",
  },
  {
    name: "Weihnachtsmarkt am Bürkliplatz",
    location: "Bürkliplatz, Zürich",
    dates: "4. Dez – 23. Dez 2026",
    status: "Geplant",
    statusColor: "bg-xmas-amber",
  },
  {
    name: "Dörfli Weihnachtsmarkt",
    location: "Niederdorfstraße, Zürich",
    dates: "1. Dez – 24. Dez 2026",
    status: "Anfrage",
    statusColor: "bg-xmas-gold",
  },
];

function Snowflakes() {
  const flakes = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 10}s`,
    duration: `${8 + Math.random() * 12}s`,
    size: `${0.6 + Math.random() * 0.8}rem`,
    symbol: ["❄", "✦", "✧", "⋆"][Math.floor(Math.random() * 4)],
  }));

  return (
    <div className="snowflake-overlay">
      {flakes.map((f) => (
        <span
          key={f.id}
          className="snowflake"
          style={{
            left: f.left,
            animationDelay: f.delay,
            animationDuration: f.duration,
            fontSize: f.size,
          }}
        >
          {f.symbol}
        </span>
      ))}
    </div>
  );
}

export default function Weihnachtsmaerkte() {
  return (
    <section
      id="weihnachtsmaerkte"
      className="relative overflow-hidden"
    >
      {/* Transition from summer back through base to christmas */}
      <div className="h-32 bg-gradient-to-b from-summer-bg via-cream to-[#2D1810]" />

      <div className="bg-xmas-bg relative pb-24 sm:pb-32">
        {/* Snowflakes */}
        <Snowflakes />

        {/* Warm glow effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-20 left-1/4 w-80 h-80 rounded-full opacity-10"
            style={{
              background: "radial-gradient(circle, #D4A843 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-40 right-1/4 w-64 h-64 rounded-full opacity-10"
            style={{
              background: "radial-gradient(circle, #C0392B 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8">
          {/* Section Header */}
          <div className="reveal text-center mb-16" ref={useReveal()}>
            <p className="text-xmas-gold font-medium tracking-widest uppercase text-sm mb-3">
              🎄 Weihnachtszeit
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] mb-6">
              <span className="text-xmas-cream">Weihnachts</span>
              <span className="text-xmas-red-light italic">märkte</span>
            </h2>
            <p className="text-lg sm:text-xl text-xmas-cream/70 max-w-2xl mx-auto leading-relaxed">
              Wenn der Duft von Glühwein in der Luft liegt und die Lichter funkeln,
              sind wir mit unseren dampfenden Spinatknödeln mittendrin.
            </p>
          </div>

          {/* Christmas Market Images */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Xmas booth 1 */}
            <div className="reveal-left" ref={useReveal()}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/12] border-4 border-xmas-gold/30 group">
                <Image
                  src="/images/xmas-booth-1.jpg"
                  alt="Spinat Knödel Weihnachtsmarkt-Stand mit Schneemann und Lichterketten"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-xmas-warm/80 backdrop-blur-sm rounded-xl px-4 py-3 border border-xmas-gold/30">
                    <p className="text-xmas-cream font-semibold text-sm">🎄 Unser Weihnachtsstand</p>
                    <p className="text-xmas-cream/60 text-xs">Mit Liebe dekoriert — bereit für die Saison</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Xmas booth 2 */}
            <div className="reveal-right" ref={useReveal()}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/12] border-4 border-xmas-gold/30 group">
                <Image
                  src="/images/xmas-booth-2.jpg"
                  alt="Spinat Knödel Stand festlich geschmückt mit goldenen Sternen und Lichterketten"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-xmas-warm/80 backdrop-blur-sm rounded-xl px-4 py-3 border border-xmas-gold/30">
                    <p className="text-xmas-cream font-semibold text-sm">✨ Goldener Stern</p>
                    <p className="text-xmas-cream/60 text-xs">Festlich & warm — wie ein Weihnachtsmärchen</p>
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
                className="bg-xmas-warm/50 backdrop-blur-sm rounded-2xl p-6 border border-xmas-gold/20 hover:border-xmas-gold/50 transition-all duration-500 hover:-translate-y-2 group"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </span>
                <h4 className="text-lg font-bold text-xmas-cream mb-2">{card.title}</h4>
                <p className="text-xmas-cream/60 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Christmas Market Dates */}
          <div className="reveal" ref={useReveal()}>
            <h3 className="text-2xl sm:text-3xl font-bold text-xmas-gold font-[family-name:var(--font-heading)] text-center mb-10">
              🗓️ Weihnachtsmarkt-Kalender 2026
            </h3>
            <div className="max-w-3xl mx-auto space-y-4">
              {xmasDates.map((m, i) => (
                <div
                  key={m.name}
                  className="bg-xmas-warm/50 backdrop-blur-sm rounded-2xl p-5 sm:p-6 hover:bg-xmas-warm/70 transition-all duration-500 group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 border-l-4 border-xmas-red-light"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-xmas-red/30 rounded-xl flex items-center justify-center group-hover:bg-xmas-red-light group-hover:text-white transition-colors duration-300">
                    <span className="text-2xl">🎄</span>
                  </div>

                  <div className="flex-grow min-w-0">
                    <h4 className="text-lg font-bold text-xmas-cream group-hover:text-xmas-gold transition-colors">
                      {m.name}
                    </h4>
                    <p className="text-xmas-cream/50 text-sm">{m.location}</p>
                    <p className="text-xmas-cream/70 text-sm font-medium mt-1">
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
            <p className="text-xmas-cream/30 text-sm text-center mt-6 italic">
              Stand: Februar 2026 · Änderungen vorbehalten
            </p>
          </div>
        </div>
      </div>

      {/* Transition out of christmas back to base */}
      <div className="h-32 bg-gradient-to-b from-[#2D1810] via-[#4A2A18] to-cream-dark" />
    </section>
  );
}
