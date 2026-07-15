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
  metadataBase: new URL("https://malina-studio.online"),
  title: "Студия Малина — разработка и создание сайтов под ключ",
  description:
    "Веб-студия Малина: разработка и создание веб-сайтов под ключ — корпоративные сайты с понятной админкой, лендинги и интернет-магазины. Лендинг от 4 000 ₽, сайт с админкой от 10 000 ₽, сайт под ключ с SEO от 35 000 ₽. Технические задания на разработку, настройка SEO для продвижения в поисковых системах, документация и поддержка сайта.",
  keywords: [
    // Основные коммерческие запросы
    "разработка сайтов",
    "создание сайтов",
    "разработка сайтов под ключ",
    "создание сайта под ключ",
    "разработка веб-сайтов под ключ",
    "заказать сайт",
    "заказать разработку сайта",
    "заказать создание сайта",
    "сайт на заказ",
    "разработка сайта цена",
    "создание сайта стоимость",
    "сколько стоит сделать сайт",
    "сколько стоит создать сайт",
    "стоимость разработки сайта",
    "стоимость создания лендинга",
    "цена лендинга",
    "цена многостраничного сайта",
    "заказать сайт недорого",
    "создание сайта недорого",
    "разработка сайта от 9000 рублей",
    "лендинг от 9000 рублей",
    "многостраничный сайт от 19000 рублей",
    "сайт под ключ от 35000 рублей",
    "услуги по созданию сайтов",
    "создать веб-сайт",
    "создать вебсайт",
    "создать сайт",
    "сделать сайт",
    "разработать сайт",
    "сделать сайт с админкой",
    // Веб-студия
    "веб-студия",
    "веб студия разработки сайтов",
    "студия разработки сайтов",
    "веб студия создания и продвижения сайтов",
    "заказать сайт в веб-студии",
    // Типы сайтов
    "корпоративный сайт под ключ",
    "разработка корпоративного сайта",
    "сайт компании",
    "лендинг",
    "разработка лендинга",
    "заказать лендинг",
    "одностраничный сайт",
    "интернет-магазин под ключ",
    "разработка интернет-магазина",
    "сайт-каталог",
    "сайт-справочник",
    "информационный портал",
    "сайт сообщества",
    "многостраничный сайт",
    // Админка и управление контентом
    "сайт с админкой",
    "сайт с понятной админкой",
    "сайт с панелью управления",
    "сайт с системой управления",
    "собственная админка для сайта",
    "управление контентом без программиста",
    "редактировать сайт самостоятельно",
    "cms под задачу",
    // Мультиязычность
    "мультиязычный сайт",
    "многоязычный сайт",
    "разработка сайта на нескольких языках",
    // Техническое задание и документация
    "техническое задание на разработку сайта",
    "составить тз на сайт",
    "тз на разработку сайта",
    "пользовательская документация сайта",
    "инструкция по работе с сайтом",
    // SEO и аналитика
    "seo продвижение сайтов",
    "настройка seo сайта",
    "продвижение сайта в поисковых системах",
    "настройка google search console",
    "настройка яндекс вебмастер",
    "подключение аналитики на сайт",
    "настройка веб-аналитики",
    // Поддержка и хостинг
    "поддержка сайта",
    "сопровождение сайта",
    "техническая поддержка сайта",
    "размещение сайта на хостинге",
    // Бренд
    "студия Малина",
    "веб-студия Малина",
    "веб студия малина",
    "компания малина",
    "малинина наталья",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Наталья Малинина — разработка и создание сайтов под ключ",
    description:
      "Разработчик Наталья Малинина: разработка и создание веб-сайтов под ключ — сайты с понятной админкой, лендинги, интернет-магазины. Настройка SEO, документация и поддержка.",
    url: "https://malina-studio.online",
    siteName: "Наталья Малинина",
    type: "website",
    locale: "ru_RU",
  },
  verification: {
    google: "ScbRUmIuBn453utlUWxWAA0qAkzGhGp_qq_zjTXe7HE",
    yandex: "73b7af3673e0b579",
  },
};

const SITE_URL = "https://malina-studio.online";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#organization`,
      name: "Студия Малина",
      alternateName: "Malina Studio",
      url: SITE_URL,
      description:
        "Веб-студия Малина: разработка и создание веб-сайтов под ключ — корпоративные сайты с понятной админкой, лендинги и интернет-магазины. Технические задания, настройка SEO, документация и поддержка.",
      areaServed: "RU",
      knowsAbout: [
        "разработка сайтов под ключ",
        "сайты с понятной админкой",
        "лендинги",
        "интернет-магазины",
        "мультиязычные сайты",
        "технические задания на разработку",
        "пользовательская документация",
        "настройка SEO и веб-аналитики",
      ],
      makesOffer: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Лендинг — одностраничный сайт с адаптивом под мобильные",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "9000",
            minPrice: "9000",
            priceCurrency: "RUB",
            valueAddedTaxIncluded: false,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Сайт с админкой до 3 страниц и SEO-базой",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "19000",
            minPrice: "19000",
            priceCurrency: "RUB",
            valueAddedTaxIncluded: false,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Сайт под ключ с SEO, аналитикой и пользовательской документацией",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "35000",
            minPrice: "35000",
            priceCurrency: "RUB",
            valueAddedTaxIncluded: false,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Технические задания на разработку сайтов и систем",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Пользовательская документация и инструкции",
          },
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Студия Малина",
      inLanguage: "ru-RU",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7H1D0B5R25"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-7H1D0B5R25');`}
        </Script>
        {children}
      </body>
    </html>
  );
}
