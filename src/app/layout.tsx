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
    "веб сайт",
    "веб сайт сделать",
    "разработка веб сайта",
    "веб студия разработка сайтов",
    "веб студия продвижения сайтов",
    "seo продвижение сайтов",
    "создание веб сайта",
    "создание сайта",
    "разработка веб сайтов под ключ",
    "создание и разработка веб сайтов",
    "продвижение сайтов",
    "заказать веб сайт",
    "заказать разработку веб сайта",
    "веб студия создание и продвижение сайтов",
    "услуги по созданию веб сайтов",
    "создание веб сайтов разработка продвижение",
    "разработка веб сайта компании",
    "создание веб сайта цена",
    "поддержка веб сайта",
    "веб студия сайт",
    "заказать создание веб сайта",
    "разработка сайтов веб студия",
    "разработка веб сайта стоимость",
    "веб дизайн и разработка сайтов",
    "разработка веб сайта под ключ в москве",
    "продвижение веб сайта в поисковых системах",
    "разработка веб сайта магазина",
    "разработка корпоративного веб сайта",
    "разработка веб сайта стоимость интернете",
    "веб сайт заказать",
    "веб сайт компания",
    "создание сайтов и продвижение веб дизайн",
    "заказать создание и разработку веб сайта",
    "разработка веб сайта уникальным",
    "сайт на заказ",
    "сайт своя админка",
    "понятная админка",
    "сайт с понятной админкой",
    "понятный сайт создать",
    "заказать понятный сайт",
    "заказать сайт с админкой",
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
