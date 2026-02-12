export default function Footer() {
  return (
    <footer className="bg-forest-dark text-cream/70 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🥟</span>
              <span className="text-2xl font-bold text-cream font-[family-name:var(--font-heading)]">
                Spinat Knödel
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Handgemachte Spinatknödel in Zürich. Mit Liebe, Tradition und
              den besten Zutaten — direkt am Zwingliplatz / Großmünsterplatz.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <a
                href="https://instagram.com/knoedelpuff"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-gold rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-cream font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#produkte" className="hover:text-gold transition-colors">
                  Produkte
                </a>
              </li>
              <li>
                <a href="#wer-wir-sind" className="hover:text-gold transition-colors">
                  Wer wir sind
                </a>
              </li>
              <li>
                <a href="#festivals" className="hover:text-gold transition-colors">
                  Festivals
                </a>
              </li>
              <li>
                <a href="#weihnachtsmaerkte" className="hover:text-gold transition-colors">
                  Weihnachtsmärkte
                </a>
              </li>
              <li>
                <a href="#bestellen" className="hover:text-gold transition-colors">
                  Bestellen
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-cream font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span>📧</span>
                <a
                  href="mailto:hallo@knoedelpuff.ch"
                  className="hover:text-gold transition-colors"
                >
                  hallo@knoedelpuff.ch
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span>Zwingliplatz / Großmünsterplatz, Zürich</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📸</span>
                <a
                  href="https://instagram.com/knoedelpuff"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  @knoedelpuff
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-cream font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Impressum
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Datenschutz
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  AGB
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-cream/40">
            © 2026 Knödelpuff. Alle Rechte vorbehalten.
          </p>
          <p className="text-sm text-cream/40 flex items-center gap-1">
            Gemacht mit <span className="text-red-400">❤️</span> und{" "}
            <span>🥟</span> in Zürich
          </p>
        </div>
      </div>
    </footer>
  );
}
