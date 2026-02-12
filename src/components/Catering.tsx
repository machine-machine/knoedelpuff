"use client";

import { useState } from "react";
import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

const features = [
  {
    icon: "⚡",
    title: "200 Leute in 2 Stunden",
    desc: "Ruf an, und wir sind bereit. Frische Knödel für bis zu 200 Gäste, innerhalb von nur 2 Stunden.",
  },
  {
    icon: "🎄",
    title: "Weihnachtsmärkte & Feste",
    desc: "Wir bringen die volle Knödel-Erfahrung mit — samt Ausrüstung, Personal und natürlich Knödel.",
  },
  {
    icon: "🎉",
    title: "Private Events",
    desc: "Geburtstage, Firmenevents, Hochzeiten — wir machen jedes Fest zum Knödelfest.",
  },
  {
    icon: "📦",
    title: "Flexible Pakete",
    desc: "Von 20 bis 200 Personen, wir passen unser Angebot an deine Bedürfnisse an.",
  },
];

export default function Catering() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    guests: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In production, this would send an email or API call
  };

  return (
    <section
      id="catering"
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
            Catering Service
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-cream font-[family-name:var(--font-heading)] mb-6">
            200 Leute.{" "}
            <span className="text-gold italic">2 Stunden.</span>
          </h2>
          <p className="text-lg sm:text-xl text-cream/70 max-w-2xl mx-auto leading-relaxed">
            Du rufst an, wir kochen. Egal ob Firmenfeier, Hochzeit oder
            Weihnachtsmarkt — frische Spinatknödel für jeden Anlass.
          </p>
        </div>

        {/* Features */}
        <div
          className="reveal grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          ref={useReveal()}
        >
          {features.map((f, i) => (
            <div
              key={f.title}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2 group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform duration-300">
                {f.icon}
              </span>
              <h3 className="text-xl font-bold text-cream mb-2">{f.title}</h3>
              <p className="text-cream/60 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA & Form */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Image / Testimonial side */}
          <div className="reveal-left" ref={useReveal()}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] mb-8">
              <Image
                src="https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80"
                alt="Catering-Aufbau mit dampfenden Knödeln auf einem festlich geschmückten Tisch"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Testimonial */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <svg
                className="w-8 h-8 text-gold mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-cream/90 text-lg italic leading-relaxed mb-4">
                &ldquo;Knödelpuff hat unsere Firmenweihnachtsfeier gerettet! 150
                Portionen in unter 2 Stunden — und alle waren begeistert. Die
                besten Spinatknödel, die ich je gegessen habe.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div>
                  <p className="text-cream font-semibold">Maria S.</p>
                  <p className="text-cream/50 text-sm">Wien, Firmenfeier 2024</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="reveal-right" ref={useReveal()}>
            <div className="bg-cream rounded-3xl p-8 sm:p-10 shadow-2xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-forest font-[family-name:var(--font-heading)] mb-2">
                Catering anfragen
              </h3>
              <p className="text-warm-brown/60 mb-8">
                Schreib uns und wir melden uns innerhalb von 24 Stunden.
              </p>

              {submitted ? (
                <div className="text-center py-12">
                  <span className="text-6xl block mb-4">🎉</span>
                  <h4 className="text-2xl font-bold text-forest mb-2">
                    Danke für deine Anfrage!
                  </h4>
                  <p className="text-warm-brown/70">
                    Wir melden uns so schnell wie möglich bei dir.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-forest mb-1.5">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-forest/20 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition-all bg-white"
                        placeholder="Dein Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-forest mb-1.5">
                        E-Mail *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-forest/20 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition-all bg-white"
                        placeholder="email@beispiel.at"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-forest mb-1.5">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-forest/20 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition-all bg-white"
                        placeholder="+43 ..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-forest mb-1.5">
                        Wunschdatum
                      </label>
                      <input
                        type="date"
                        value={form.date}
                        onChange={(e) =>
                          setForm({ ...form, date: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-forest/20 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition-all bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-forest mb-1.5">
                      Anzahl Gäste
                    </label>
                    <select
                      value={form.guests}
                      onChange={(e) =>
                        setForm({ ...form, guests: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-forest/20 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition-all bg-white"
                    >
                      <option value="">Bitte wählen</option>
                      <option value="20-50">20–50 Personen</option>
                      <option value="50-100">50–100 Personen</option>
                      <option value="100-150">100–150 Personen</option>
                      <option value="150-200">150–200 Personen</option>
                      <option value="200+">200+ Personen</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-forest mb-1.5">
                      Nachricht
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-forest/20 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition-all bg-white resize-none"
                      placeholder="Erzähl uns von deinem Event..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-forest hover:bg-forest-dark text-white py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Anfrage senden
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
