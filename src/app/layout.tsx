import type { Metadata } from "next";
import { Cormorant, Jost } from "next/font/google";
import Script from "next/script";
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
      <body className="min-h-full flex flex-col">
        {/* Yandex.Metrika counter */}
        <Script id="yandex-metrika" strategy="beforeInteractive">
          {`(function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
          })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=110246889', 'ym');

          ym(110246889, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});`}
        </Script>
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/110246889"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
        {/* /Yandex.Metrika counter */}
        {children}
      </body>
    </html>
  );
}
