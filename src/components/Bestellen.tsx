"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";

const products = [
  {
    name: "Spinatknödel Classic",
    desc: "Das Original — frischer Blattspinat, Bergkäse, Alpenbutter",
    price: "8,90",
    unit: "6 Stück",
    popular: true,
    emoji: "🥟",
  },
  {
    name: "Spinatknödel mit Parmesan",
    desc: "Extra Parmesan-Kick und gebräunte Butter",
    price: "9,90",
    unit: "6 Stück",
    popular: false,
    emoji: "🧀",
  },
  {
    name: "Familienpaket",
    desc: "18 Spinatknödel Classic — perfekt für die ganze Familie",
    price: "22,90",
    unit: "18 Stück",
    popular: false,
    emoji: "👨‍👩‍👧‍👦",
  },
  {
    name: "Party-Box",
    desc: "30 Knödel Mix — ideal für Feiern und Zusammenkünfte",
    price: "34,90",
    unit: "30 Stück",
    popular: false,
    emoji: "🎉",
  },
];

const cateringFeatures = [
  {
    icon: "⚡",
    title: "200 Leute in 2 Stunden",
    desc: "Frische Knödel für bis zu 200 Gäste, innerhalb von nur 2 Stunden.",
  },
  {
    icon: "🎄",
    title: "Märkte & Feste",
    desc: "Volle Knödel-Erfahrung — Ausrüstung, Personal und Knödel.",
  },
  {
    icon: "🎉",
    title: "Private Events",
    desc: "Geburtstage, Firmen, Hochzeiten — jedes Fest wird zum Knödelfest.",
  },
  {
    icon: "📦",
    title: "Flexible Pakete",
    desc: "Von 20 bis 200+ Personen, angepasst an deine Bedürfnisse.",
  },
];

export default function Bestellen() {
  const [activeTab, setActiveTab] = useState<"bestellen" | "catering">("bestellen");
  const [selectedProducts, setSelectedProducts] = useState<Record<string, number>>({});
  const [orderForm, setOrderForm] = useState({ name: "", email: "", phone: "", notes: "" });
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [cateringForm, setCateringForm] = useState({
    name: "", email: "", phone: "", date: "", guests: "", message: "",
  });
  const [cateringSubmitted, setCateringSubmitted] = useState(false);

  const updateQuantity = (name: string, delta: number) => {
    setSelectedProducts((prev) => {
      const current = prev[name] || 0;
      const next = Math.max(0, current + delta);
      if (next === 0) {
        const { [name]: _, ...rest } = prev;
        void _;
        return rest;
      }
      return { ...prev, [name]: next };
    });
  };

  const totalItems = Object.values(selectedProducts).reduce((a, b) => a + b, 0);

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderSubmitted(true);
  };

  const handleCatering = (e: React.FormEvent) => {
    e.preventDefault();
    setCateringSubmitted(true);
  };

  return (
    <section
      id="bestellen"
      className="py-24 sm:py-32 bg-cream-dark relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="reveal text-center mb-12" ref={useReveal()}>
          <p className="text-forest-light font-medium tracking-widest uppercase text-sm mb-3">
            Bestellen & Catering
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-forest font-[family-name:var(--font-heading)] mb-6">
            Knödel für dich
          </h2>
          <p className="text-lg sm:text-xl text-warm-brown/70 max-w-2xl mx-auto leading-relaxed">
            Bestelle deine Lieblingsknödel oder lass uns dein Event mit
            frischen Spinatknödeln versorgen.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="reveal flex justify-center mb-12" ref={useReveal()}>
          <div className="inline-flex bg-white rounded-full p-1 shadow-sm">
            <button
              onClick={() => setActiveTab("bestellen")}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === "bestellen"
                  ? "bg-forest text-white shadow-md"
                  : "text-warm-brown/70 hover:text-forest"
              }`}
            >
              🛒 Online bestellen
            </button>
            <button
              onClick={() => setActiveTab("catering")}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === "catering"
                  ? "bg-forest text-white shadow-md"
                  : "text-warm-brown/70 hover:text-forest"
              }`}
            >
              🍽️ Catering anfragen
            </button>
          </div>
        </div>

        {/* ORDERING TAB */}
        {activeTab === "bestellen" && (
          <>
            {orderSubmitted ? (
              <div className="reveal max-w-lg mx-auto text-center py-16" ref={useReveal()}>
                <span className="text-7xl block mb-6">🥟</span>
                <h3 className="text-3xl font-bold text-forest font-[family-name:var(--font-heading)] mb-4">
                  Bestellung eingegangen!
                </h3>
                <p className="text-warm-brown/70 text-lg mb-2">
                  Danke für deine Bestellung! Wir melden uns per E-Mail mit den
                  Details.
                </p>
                <p className="text-warm-brown/50 text-sm">
                  Abholung: Zwingliplatz / Großmünsterplatz, Zürich
                </p>
              </div>
            ) : (
              <div className="grid lg:grid-cols-5 gap-12">
                {/* Products */}
                <div className="lg:col-span-3 reveal" ref={useReveal()}>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {products.map((p) => (
                      <div
                        key={p.name}
                        className={`relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 border-2 ${
                          (selectedProducts[p.name] || 0) > 0
                            ? "border-forest shadow-lg"
                            : "border-transparent"
                        }`}
                      >
                        {p.popular && (
                          <span className="absolute -top-3 right-4 bg-gold text-white text-xs font-bold px-3 py-1 rounded-full">
                            Beliebt
                          </span>
                        )}

                        <span className="text-4xl block mb-3">{p.emoji}</span>
                        <h3 className="text-lg font-bold text-forest mb-1">{p.name}</h3>
                        <p className="text-warm-brown/60 text-sm mb-4 leading-relaxed">{p.desc}</p>

                        <div className="flex items-end justify-between">
                          <div>
                            <span className="text-2xl font-bold text-forest">CHF {p.price}</span>
                            <span className="text-warm-brown/50 text-sm ml-1">/ {p.unit}</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(p.name, -1)}
                              className="w-8 h-8 rounded-full bg-forest/10 hover:bg-forest/20 text-forest flex items-center justify-center transition-colors font-bold"
                              aria-label="Weniger"
                            >
                              −
                            </button>
                            <span className="w-8 text-center font-semibold text-forest">
                              {selectedProducts[p.name] || 0}
                            </span>
                            <button
                              onClick={() => updateQuantity(p.name, 1)}
                              className="w-8 h-8 rounded-full bg-forest hover:bg-forest-dark text-white flex items-center justify-center transition-colors font-bold"
                              aria-label="Mehr"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Order Form */}
                <div className="lg:col-span-2 reveal-right" ref={useReveal()}>
                  <div className="bg-white rounded-2xl p-8 shadow-sm sticky top-24">
                    <h3 className="text-xl font-bold text-forest mb-6 flex items-center gap-2">
                      <span>🛒</span>
                      Deine Bestellung
                      {totalItems > 0 && (
                        <span className="bg-forest text-white text-xs px-2 py-0.5 rounded-full">
                          {totalItems}
                        </span>
                      )}
                    </h3>

                    {totalItems === 0 ? (
                      <p className="text-warm-brown/50 text-center py-8">
                        Wähle deine Knödel links aus 👈
                      </p>
                    ) : (
                      <form onSubmit={handleOrder} className="space-y-4">
                        <div className="bg-cream rounded-xl p-4 mb-4">
                          {Object.entries(selectedProducts).map(
                            ([name, qty]) =>
                              qty > 0 && (
                                <div key={name} className="flex justify-between text-sm py-1">
                                  <span className="text-warm-brown">{qty}× {name}</span>
                                  <span className="font-semibold text-forest">
                                    CHF{" "}
                                    {(
                                      parseFloat(
                                        products.find((p) => p.name === name)!.price.replace(",", ".")
                                      ) * qty
                                    ).toFixed(2).replace(".", ",")}
                                  </span>
                                </div>
                              )
                          )}
                        </div>

                        <input
                          type="text" required placeholder="Name *"
                          value={orderForm.name}
                          onChange={(e) => setOrderForm({ ...orderForm, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-forest/20 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition-all text-sm"
                        />
                        <input
                          type="email" required placeholder="E-Mail *"
                          value={orderForm.email}
                          onChange={(e) => setOrderForm({ ...orderForm, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-forest/20 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition-all text-sm"
                        />
                        <input
                          type="tel" placeholder="Telefon"
                          value={orderForm.phone}
                          onChange={(e) => setOrderForm({ ...orderForm, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-forest/20 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition-all text-sm"
                        />
                        <textarea
                          placeholder="Anmerkungen (Allergien, etc.)"
                          value={orderForm.notes}
                          onChange={(e) => setOrderForm({ ...orderForm, notes: e.target.value })}
                          rows={3}
                          className="w-full px-4 py-3 rounded-xl border border-forest/20 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition-all text-sm resize-none"
                        />

                        <button
                          type="submit"
                          className="w-full bg-gold hover:bg-wood-light text-white py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                        >
                          Bestellung absenden
                        </button>
                        <p className="text-xs text-warm-brown/40 text-center">
                          Abholung am Zwingliplatz / Großmünsterplatz, Zürich
                        </p>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {/* CATERING TAB */}
        {activeTab === "catering" && (
          <div>
            {/* Catering headline */}
            <div className="reveal text-center mb-12" ref={useReveal()}>
              <h3 className="text-3xl sm:text-4xl font-bold text-forest font-[family-name:var(--font-heading)] mb-4">
                200 Leute. <span className="text-gold italic">2 Stunden.</span>
              </h3>
              <p className="text-lg text-warm-brown/70 max-w-2xl mx-auto leading-relaxed">
                Du rufst an, wir kochen. Egal ob Firmenfeier, Hochzeit oder
                Weihnachtsmarkt — frische Spinatknödel für jeden Anlass.
              </p>
            </div>

            {/* Features */}
            <div className="reveal grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16" ref={useReveal()}>
              {cateringFeatures.map((f, i) => (
                <div
                  key={f.title}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group border border-forest/10"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform duration-300">
                    {f.icon}
                  </span>
                  <h4 className="text-lg font-bold text-forest mb-2">{f.title}</h4>
                  <p className="text-warm-brown/60 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>

            {/* Catering Form */}
            <div className="max-w-2xl mx-auto reveal" ref={useReveal()}>
              <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg">
                <h4 className="text-2xl font-bold text-forest font-[family-name:var(--font-heading)] mb-2">
                  Catering anfragen
                </h4>
                <p className="text-warm-brown/60 mb-8">
                  Schreib uns und wir melden uns innerhalb von 24 Stunden.
                </p>

                {cateringSubmitted ? (
                  <div className="text-center py-12">
                    <span className="text-6xl block mb-4">🎉</span>
                    <h4 className="text-2xl font-bold text-forest mb-2">Danke für deine Anfrage!</h4>
                    <p className="text-warm-brown/70">Wir melden uns so schnell wie möglich.</p>
                  </div>
                ) : (
                  <form onSubmit={handleCatering} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-forest mb-1.5">Name *</label>
                        <input
                          type="text" required
                          value={cateringForm.name}
                          onChange={(e) => setCateringForm({ ...cateringForm, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-forest/20 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition-all bg-white"
                          placeholder="Dein Name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-forest mb-1.5">E-Mail *</label>
                        <input
                          type="email" required
                          value={cateringForm.email}
                          onChange={(e) => setCateringForm({ ...cateringForm, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-forest/20 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition-all bg-white"
                          placeholder="email@beispiel.ch"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-forest mb-1.5">Telefon</label>
                        <input
                          type="tel"
                          value={cateringForm.phone}
                          onChange={(e) => setCateringForm({ ...cateringForm, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-forest/20 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition-all bg-white"
                          placeholder="+41 ..."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-forest mb-1.5">Wunschdatum</label>
                        <input
                          type="date"
                          value={cateringForm.date}
                          onChange={(e) => setCateringForm({ ...cateringForm, date: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-forest/20 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition-all bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-forest mb-1.5">Anzahl Gäste</label>
                      <select
                        value={cateringForm.guests}
                        onChange={(e) => setCateringForm({ ...cateringForm, guests: e.target.value })}
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
                      <label className="block text-sm font-medium text-forest mb-1.5">Nachricht</label>
                      <textarea
                        value={cateringForm.message}
                        onChange={(e) => setCateringForm({ ...cateringForm, message: e.target.value })}
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-forest/20 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition-all bg-white resize-none"
                        placeholder="Erzähl uns von deinem Event..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-forest hover:bg-forest-dark text-white py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                    >
                      Catering anfragen
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
