import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Spinat Knödel — Handgemachte Spinatknödel in Zürich",
  description:
    "Knödelpuff bringt dir die besten handgemachten Spinatknödel. Frisch zubereitet für Weihnachtsmärkte, Festivals und Catering für bis zu 200 Personen. Zwingliplatz / Großmünsterplatz, Zürich.",
  keywords: [
    "Spinatknödel",
    "Knödel",
    "Zürich",
    "handgemacht",
    "Catering",
    "Weihnachtsmarkt",
    "Knödelpuff",
    "Spinat Knödel",
    "Festival",
    "Street Food",
  ],
  openGraph: {
    title: "Spinat Knödel — Handgemachte Spinatknödel in Zürich",
    description:
      "Frisch zubereitete Spinatknödel für Märkte, Festivals und Events. Catering für bis zu 200 Personen in nur 2 Stunden!",
    type: "website",
    locale: "de_CH",
    siteName: "Knödelpuff",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "theme-color": "#2D5016",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
