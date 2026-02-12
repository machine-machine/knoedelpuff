import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Knödelpuff — Handgemachte Spinatknödel aus Österreich",
  description:
    "Knödelpuff bringt dir die besten handgemachten Spinatknödel Österreichs. Frisch zubereitet für Weihnachtsmärkte, Feste und Catering für bis zu 200 Personen.",
  keywords: [
    "Spinatknödel",
    "Knödel",
    "Österreich",
    "handgemacht",
    "Catering",
    "Weihnachtsmarkt",
    "Knödelpuff",
    "österreichische Küche",
  ],
  openGraph: {
    title: "Knödelpuff — Handgemachte Spinatknödel aus Österreich",
    description:
      "Frisch zubereitete Spinatknödel für Märkte, Feste und Events. Catering für bis zu 200 Personen in nur 2 Stunden!",
    type: "website",
    locale: "de_AT",
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
