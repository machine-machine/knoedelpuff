"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#produkte", label: "Produkte" },
  { href: "#wer-wir-sind", label: "Wer wir sind" },
  { href: "#festivals", label: "Festivals" },
  { href: "#weihnachtsmaerkte", label: "Weihnachtsmärkte" },
  { href: "#bestellen", label: "Bestellen" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-forest/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-gold/50 group-hover:border-gold transition-colors duration-300">
              <Image
                src="/images/logo-green.jpg"
                alt="Spinat Knödel Logo"
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <span
              className={`text-xl sm:text-2xl font-bold font-[family-name:var(--font-heading)] transition-colors duration-300 ${
                isScrolled ? "text-cream" : "text-white"
              } group-hover:text-gold`}
            >
              Spinat Knödel
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-all duration-300 hover:text-gold relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gold after:transition-all after:duration-300 hover:after:w-full ${
                  isScrolled ? "text-cream/90" : "text-white/90"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#bestellen"
              className="bg-gold hover:bg-wood-light text-white px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Jetzt bestellen
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menü öffnen"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-forest/95 backdrop-blur-md rounded-2xl p-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-cream/90 hover:text-gold transition-colors duration-300 text-lg font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#bestellen"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block bg-gold hover:bg-wood-light text-white px-5 py-3 rounded-full text-center font-semibold transition-all duration-300 mt-4"
            >
              Jetzt bestellen
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
