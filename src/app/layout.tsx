import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://malina.studio"),
  title: "Студия Малина — сайты, лендинги, ТЗ и документация",
  description:
    "Студия Малина создаёт сайты с собственной админкой, лендинги, технические задания на разработку и пользовательскую документацию. 15 лет в IT.",
  keywords: [
    "разработка сайтов",
    "сайт с админкой",
    "лендинг",
    "техническое задание",
    "пользовательская документация",
    "студия Малина",
  ],
  openGraph: {
    title: "Студия Малина",
    description:
      "Сайты с админкой, лендинги, технические задания и пользовательская документация. 15 лет в IT.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
