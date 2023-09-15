module.exports = {
  title: "Andy walking", //網站名稱
  description: "try to write some articles", //關於首頁的描述
  base: "/blog/", //部署設定
  themeConfig: {
    nav: [
      {
        text: "前端筆記",
        link: "/frontend/",
      },
      {
        text: "後端筆記",
        link: "/backend/",
      },
    ],
  },
  plugins: [
    [
      "vuepress-plugin-auto-sidebar",
      {
        // options
      },
    ],
  ],
};
