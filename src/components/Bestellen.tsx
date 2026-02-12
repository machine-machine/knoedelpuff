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

export default function Bestellen() {
  const [selectedProducts, setSelectedProducts] = useState<
    Record<string, number>
  >({});
  const [orderForm, setOrderForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    notes: "",
  });
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const updateQuantity = (name: string, delta: number) => {
    setSelectedProducts((prev) => {
      const current = prev[name] || 0;
      const next = Math.max(0, current + delta);
      if (next === 0) {
        const { [name]: _, ...rest } = prev;
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

  return (
    <section
      id="bestellen"
      className="py-24 sm:py-32 bg-cream-dark relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="reveal text-center mb-16" ref={useReveal()}>
          <p className="text-forest-light font-medium tracking-widest uppercase text-sm mb-3">
            Online Bestellen
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-forest font-[family-name:var(--font-heading)] mb-6">
            Knödel nach Hause
          </h2>
          <p className="text-lg sm:text-xl text-warm-brown/70 max-w-2xl mx-auto leading-relaxed">
            Wähle deine Lieblingsknödel und wir bringen sie direkt zu dir.
            Derzeit nur Abholung oder Lieferung im Raum Wien.
          </p>
        </div>

        {orderSubmitted ? (
          <div className="reveal max-w-lg mx-auto text-center py-16" ref={useReveal()}>
            <span className="text-7xl block mb-6">🥟</span>
            <h3 className="text-3xl font-bold text-forest font-[family-name:var(--font-heading)] mb-4">
              Bestellung eingegangen!
            </h3>
            <p className="text-warm-brown/70 text-lg mb-2">
              Danke für deine Bestellung! Wir melden uns per E-Mail mit den
              Details zur Abholung/Lieferung.
            </p>
            <p className="text-warm-brown/50 text-sm">
              (Dies ist eine Demo — in Produktion würde hier eine echte
              Bestellbestätigung kommen.)
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
                    <h3 className="text-lg font-bold text-forest mb-1">
                      {p.name}
                    </h3>
                    <p className="text-warm-brown/60 text-sm mb-4 leading-relaxed">
                      {p.desc}
                    </p>

                    <div className="flex items-end justify-between">
                      <div>
                        <span className="text-2xl font-bold text-forest">
                          €{p.price}
                        </span>
                        <span className="text-warm-brown/50 text-sm ml-1">
                          / {p.unit}
                        </span>
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
                    {/* Order summary */}
                    <div className="bg-cream rounded-xl p-4 mb-4">
                      {Object.entries(selectedProducts).map(
                        ([name, qty]) =>
                          qty > 0 && (
                            <div
                              key={name}
                              className="flex justify-between text-sm py-1"
                            >
                              <span className="text-warm-brown">
                                {qty}× {name}
                              </span>
                              <span className="font-semibold text-forest">
                                €
                                {(
                                  parseFloat(
                                    products
                                      .find((p) => p.name === name)!
                                      .price.replace(",", ".")
                                  ) * qty
                                )
                                  .toFixed(2)
                                  .replace(".", ",")}
                              </span>
                            </div>
                          )
                      )}
                    </div>

                    <input
                      type="text"
                      required
                      placeholder="Name *"
                      value={orderForm.name}
                      onChange={(e) =>
                        setOrderForm({ ...orderForm, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-forest/20 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition-all text-sm"
                    />
                    <input
                      type="email"
                      required
                      placeholder="E-Mail *"
                      value={orderForm.email}
                      onChange={(e) =>
                        setOrderForm({ ...orderForm, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-forest/20 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition-all text-sm"
                    />
                    <input
                      type="tel"
                      placeholder="Telefon"
                      value={orderForm.phone}
                      onChange={(e) =>
                        setOrderForm({ ...orderForm, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-forest/20 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition-all text-sm"
                    />
                    <textarea
                      placeholder="Anmerkungen (Allergien, etc.)"
                      value={orderForm.notes}
                      onChange={(e) =>
                        setOrderForm({ ...orderForm, notes: e.target.value })
                      }
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
                      Wir kontaktieren dich zur Bestätigung und Bezahlung.
                    </p>
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
