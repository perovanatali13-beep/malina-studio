import type { Metadata } from "next";
import { Cormorant, Jost } from "next/font/google";
import "./globals.css";

const display = Cormorant({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

const sans = Jost({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://malina.studio"),
  title: "Студия Малина — сайты, лендинги, ТЗ и документация",
  description:
    "Студия Малина создаёт сайты с собственной админкой, лендинги, технические задания на разработку и пользовательскую документацию.",
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
      "Сайты с админкой, лендинги, технические задания и пользовательская документация.",
    type: "website",
    locale: "ru_RU",
  },
  verification: {
    yandex: "73b7af3673e0b579",
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
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
