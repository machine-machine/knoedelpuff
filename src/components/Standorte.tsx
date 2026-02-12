"use client";

import { useReveal } from "@/hooks/useReveal";

const markets = [
  {
    name: "Wiener Christkindlmarkt",
    location: "Rathausplatz, Wien",
    dates: "15. Nov – 26. Dez 2025",
    status: "Bestätigt",
    statusColor: "bg-forest",
  },
  {
    name: "Salzburger Christkindlmarkt",
    location: "Domplatz, Salzburg",
    dates: "21. Nov – 26. Dez 2025",
    status: "Bestätigt",
    statusColor: "bg-forest",
  },
  {
    name: "Grazer Adventmarkt",
    location: "Hauptplatz, Graz",
    dates: "22. Nov – 24. Dez 2025",
    status: "Geplant",
    statusColor: "bg-gold",
  },
  {
    name: "Innsbrucker Bergweihnacht",
    location: "Altstadt, Innsbruck",
    dates: "15. Nov – 6. Jan 2026",
    status: "Geplant",
    statusColor: "bg-gold",
  },
  {
    name: "Linzer Weihnachtsmarkt",
    location: "Hauptplatz, Linz",
    dates: "16. Nov – 24. Dez 2025",
    status: "Anfrage",
    statusColor: "bg-warm-brown",
  },
  {
    name: "Frühlingsfest am Donaukanal",
    location: "Donaukanal, Wien",
    dates: "April 2026",
    status: "Geplant",
    statusColor: "bg-gold",
  },
];

export default function Standorte() {
  return (
    <section
      id="standorte"
      className="py-24 sm:py-32 bg-cream relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="reveal text-center mb-16" ref={useReveal()}>
          <p className="text-forest-light font-medium tracking-widest uppercase text-sm mb-3">
            Termine & Standorte
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-forest font-[family-name:var(--font-heading)] mb-6">
            Wo findest du uns
          </h2>
          <p className="text-lg sm:text-xl text-warm-brown/70 max-w-2xl mx-auto leading-relaxed">
            Besuche uns auf den schönsten Weihnachtsmärkten und Festen Österreichs.
            Hier ist unser aktueller Kalender.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Calendar */}
          <div className="lg:col-span-3 reveal" ref={useReveal()}>
            <div className="space-y-4">
              {markets.map((m, i) => (
                <div
                  key={m.name}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-500 group flex flex-col sm:flex-row sm:items-center gap-4"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  {/* Date icon */}
                  <div className="flex-shrink-0 w-16 h-16 bg-forest/10 rounded-xl flex items-center justify-center group-hover:bg-forest group-hover:text-cream transition-colors duration-300">
                    <span className="text-2xl">📍</span>
                  </div>

                  <div className="flex-grow min-w-0">
                    <h3 className="text-lg font-bold text-forest group-hover:text-forest-light transition-colors">
                      {m.name}
                    </h3>
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
              Stand: Februar 2025 · Änderungen vorbehalten
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="lg:col-span-2 reveal-right" ref={useReveal()}>
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm sticky top-24">
              <div className="aspect-[4/3] bg-forest/10 flex items-center justify-center relative overflow-hidden">
                {/* Map placeholder with stylized Austria */}
                <div className="text-center">
                  <svg
                    viewBox="0 0 200 120"
                    className="w-48 h-auto mx-auto mb-4 opacity-30"
                    fill="currentColor"
                    color="#2D5016"
                  >
                    {/* Simplified Austria shape */}
                    <path d="M20,60 Q30,30 60,35 Q80,20 100,30 Q120,15 150,25 Q170,30 180,50 Q185,65 170,75 Q155,85 140,80 Q120,90 100,85 Q80,95 60,80 Q40,85 25,75 Q15,70 20,60 Z" />
                    {/* Location pins */}
                    <circle cx="130" cy="50" r="4" fill="#D4A843" />
                    <circle cx="80" cy="55" r="4" fill="#D4A843" />
                    <circle cx="55" cy="60" r="4" fill="#D4A843" />
                    <circle cx="160" cy="45" r="4" fill="#D4A843" />
                    <circle cx="100" cy="45" r="4" fill="#D4A843" />
                  </svg>
                  <p className="text-forest/60 font-medium">
                    Interaktive Karte
                  </p>
                  <p className="text-forest/40 text-sm">Kommt bald!</p>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-forest mb-3">
                  Du willst uns an deinem Markt?
                </h3>
                <p className="text-warm-brown/60 text-sm mb-4 leading-relaxed">
                  Wir sind immer auf der Suche nach neuen Standorten und
                  Partnerschaften. Lass uns reden!
                </p>
                <a
                  href="#catering"
                  className="block text-center bg-forest hover:bg-forest-dark text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02]"
                >
                  Kontakt aufnehmen
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
