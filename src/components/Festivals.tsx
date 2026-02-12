"use client";

import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

const festivalDates = [
  {
    name: "Züri Fäscht",
    location: "Zürich Seebecken",
    dates: "Juli 2026",
    status: "Bestätigt",
    statusColor: "bg-forest-light",
  },
  {
    name: "Street Food Festival",
    location: "Kasernenareal, Zürich",
    dates: "Mai 2026",
    status: "Bestätigt",
    statusColor: "bg-forest-light",
  },
  {
    name: "Open Air St. Gallen",
    location: "Sittertobel, St. Gallen",
    dates: "Juni 2026",
    status: "Geplant",
    statusColor: "bg-gold",
  },
  {
    name: "Caliente! Latin Festival",
    location: "Landiwiese, Zürich",
    dates: "Juli 2026",
    status: "Geplant",
    statusColor: "bg-gold",
  },
  {
    name: "Knabenschiessen",
    location: "Albisgüetli, Zürich",
    dates: "September 2026",
    status: "Anfrage",
    statusColor: "bg-wood",
  },
];

export default function Festivals() {
  return (
    <section
      id="festivals"
      className="py-24 sm:py-32 bg-forest relative overflow-hidden"
    >
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
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
            ☀️ Sommer & Festivals
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-cream font-[family-name:var(--font-heading)] mb-6">
            Wo du uns{" "}
            <span className="text-gold italic">findest</span>
          </h2>
          <p className="text-lg sm:text-xl text-cream/70 max-w-2xl mx-auto leading-relaxed">
            Im Sommer sind wir auf den besten Festivals unterwegs —
            mit frischen Spinatknödeln, guter Laune und unserem legendären Stand.
          </p>
        </div>

        {/* Festival Images */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Festival booth */}
          <div className="reveal-left" ref={useReveal()}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/10]">
              <Image
                src="/images/festival-booth.jpg"
                alt="Spinat Knödel Stand auf einem Sommerfestival"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold text-forest">
                🎪 Festival-Stand
              </div>
            </div>
          </div>

          {/* Festival fireworks */}
          <div className="reveal-right" ref={useReveal()}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/10]">
              <Image
                src="/images/festival-fireworks.jpg"
                alt="Spinat Knödel Stand bei Nacht mit Feuerwerk"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold text-forest">
                🎆 Festival-Nächte
              </div>
            </div>
          </div>
        </div>

        {/* Festival Dates */}
        <div className="reveal" ref={useReveal()}>
          <h3 className="text-2xl sm:text-3xl font-bold text-gold font-[family-name:var(--font-heading)] text-center mb-10">
            🗓️ Festival-Kalender 2026
          </h3>
          <div className="max-w-3xl mx-auto space-y-4">
            {festivalDates.map((f, i) => (
              <div
                key={f.name}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 sm:p-6 hover:bg-white/20 transition-all duration-500 group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 border-l-4 border-gold"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex-shrink-0 w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                  <span className="text-2xl">🎪</span>
                </div>

                <div className="flex-grow min-w-0">
                  <h4 className="text-lg font-bold text-cream group-hover:text-gold transition-colors">
                    {f.name}
                  </h4>
                  <p className="text-cream/50 text-sm">{f.location}</p>
                  <p className="text-cream/70 text-sm font-medium mt-1">
                    📅 {f.dates}
                  </p>
                </div>

                <span
                  className={`flex-shrink-0 ${f.statusColor} text-white text-xs font-bold px-3 py-1 rounded-full self-start sm:self-center`}
                >
                  {f.status}
                </span>
              </div>
            ))}
          </div>
          <p className="text-cream/40 text-sm text-center mt-6 italic">
            Stand: Februar 2026 · Weitere Festivals folgen!
          </p>
        </div>
      </div>
    </section>
  );
}
