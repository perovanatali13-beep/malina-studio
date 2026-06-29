export type Shot = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export type CaseStudy = {
  slug: string;
  tag: string;
  title: string;
  subtitle: string;
  url: string;
  urlLabel: string;
  accent: "leaf" | "berry";
  did: string[];
  wins: string[];
  /** Скриншоты публичного сайта — показываются и в списке кейсов, и на странице */
  shots: Shot[];
  /** Скриншоты админ-панели — только на странице кейса */
  admin: Shot[];
};

export const cases: CaseStudy[] = [
  {
    slug: "caretta",
    tag: "Сайт сообщества · некоммерческий проект",
    title: "Caretta Friends",
    subtitle:
      "Сайт проекта по защите морских черепах Caretta caretta в Газипаше",
    url: "https://carettafriends.com/ru",
    urlLabel: "carettafriends.com",
    accent: "leaf",
    did: [
      "Спроектировали и разработали сайт некоммерческой организации с разделами о миссии, волонтёрстве и инструкциями «что делать при обнаружении гнезда».",
      "Сделали новостной раздел с категориями: экологические акции, спасение черепах, уборки пляжей, исследования и публикации.",
      "Подключили мультиязычность и интеграцию с соцсетями организации.",
    ],
    wins: [
      "Понятная навигация для волонтёров и местных жителей",
      "Контент-блоки и новости редактируются без разработчика",
      "Адаптивный дизайн и быстрая загрузка",
    ],
    shots: [
      {
        src: "/cases/caretta/site-home.png",
        alt: "Главная страница сайта Caretta Friends",
        caption: "Главная страница",
        width: 1283,
        height: 894,
      },
      {
        src: "/cases/caretta/site-nest.png",
        alt: "Страница «Если вы нашли гнездо»",
        caption: "Инструкция «Если вы нашли гнездо»",
        width: 1221,
        height: 896,
      },
      {
        src: "/cases/caretta/site-news.png",
        alt: "Новостной раздел сайта Caretta Friends",
        caption: "Новости с категориями",
        width: 1215,
        height: 896,
      },
    ],
    admin: [
      {
        src: "/cases/caretta/admin-dashboard.png",
        alt: "Дашборд админ-панели Caretta Friends",
        caption: "Дашборд: просмотры, статистика и быстрые действия",
        width: 2794,
        height: 1432,
      },
      {
        src: "/cases/caretta/admin-page.png",
        alt: "Редактирование страницы в админ-панели",
        caption: "Редактор статических страниц с мультиязычностью",
        width: 2754,
        height: 1444,
      },
      {
        src: "/cases/caretta/admin-news.png",
        alt: "Список новостей в админ-панели",
        caption: "Управление новостями и публикацией",
        width: 2839,
        height: 949,
      },
      {
        src: "/cases/caretta/admin-news-edit.png",
        alt: "Редактирование новости в админ-панели",
        caption: "Редактор новости: обложка, категория, языки",
        width: 1991,
        height: 1452,
      },
      {
        src: "/cases/caretta/admin-faq.png",
        alt: "Редактирование раздела «Частые вопросы»",
        caption: "Редактор блоков «Вопрос — ответ»",
        width: 2768,
        height: 1410,
      },
    ],
  },
  {
    slug: "gazipasha",
    tag: "Информационный портал · сообщество",
    title: "Сообщество иностранцев Газипаши",
    subtitle:
      "Портал для жителей и гостей турецкого города Газипаша",
    url: "https://gazipasha-portal.vercel.app/ru",
    urlLabel: "gazipasha-portal.vercel.app",
    accent: "berry",
    did: [
      "Разработали портал-справочник: «Что посмотреть», «Где поесть», новости, поиск жилья, товары и услуги, мастера и сервисы.",
      "Собрали разделы сообщества: форум, деятельность и волонтёрские проекты, правила взаимодействия.",
      "Сделали динамические блоки на главной — дежурная аптека с графиком работы и актуальные новости города.",
      "Реализовали две языковые версии: русскую и английскую.",
    ],
    wins: [
      "Справочник и социальная платформа в одном решении",
      "Собственная админка для новостей и справочников",
      "Структура, рассчитанная на рост числа разделов",
    ],
    shots: [
      {
        src: "/cases/gazipasha/site-home.png",
        alt: "Главная страница портала Gazipasha Info",
        caption: "Главная: приветствие и дежурная аптека",
        width: 1280,
        height: 899,
      },
      {
        src: "/cases/gazipasha/site-institutions.png",
        alt: "Раздел «Учреждения и контакты»",
        caption: "Учреждения и экстренные контакты",
        width: 1270,
        height: 900,
      },
      {
        src: "/cases/gazipasha/site-attractions.png",
        alt: "Раздел «Что посмотреть»",
        caption: "Справочник «Что посмотреть»",
        width: 1273,
        height: 899,
      },
    ],
    admin: [
      {
        src: "/cases/gazipasha/admin-dashboard.png",
        alt: "Дашборд админ-панели Gazipasha Portal",
        caption: "Дашборд: посетители, визиты и популярные страницы",
        width: 2786,
        height: 1438,
      },
      {
        src: "/cases/gazipasha/admin-contact.png",
        alt: "Редактирование контакта учреждения",
        caption: "Редактор справочника учреждений и контактов",
        width: 2802,
        height: 1436,
      },
      {
        src: "/cases/gazipasha/admin-forum.png",
        alt: "Управление форумом в админ-панели",
        caption: "Модерация форума: темы и сообщения",
        width: 2459,
        height: 1425,
      },
      {
        src: "/cases/gazipasha/admin-users.png",
        alt: "Управление пользователями в админ-панели",
        caption: "Пользователи и управление ролями",
        width: 2786,
        height: 1422,
      },
    ],
  },
];

export function getCase(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug);
}
