export const SITE = {
  website: "https://bamg-zhou-blog.vercel.app/",
  author: "bamg.zhou",
  profile: "https://github.com/bamg-zhou",
  desc: "支付系统 · 区块链 · Go/Rust · 技术笔记",
  title: "bamg.zhou's Blog",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000,
  showArchives: true,
  showBackButton: true,
  editPost: {
    enabled: false,
    text: "",
    url: "",
  },
  dynamicOgImage: true,
  dir: "ltr",
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Bangkok", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
