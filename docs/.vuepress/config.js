module.exports = {
  title: "Andy walking", //網站名稱
  description: "try to write some articles", //關於首頁的描述
  base: "/blog/", //部署設定
  themeConfig: {
    displayAllHeaders: true,
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
  plugins: {
    "vuepress-plugin-auto-sidebar": {
      //側邊欄層級參考：https://shanyuhai123.github.io/vuepress-plugin-auto-sidebar/zh/features/plugin-options.html#_2-%E6%98%A0%E5%B0%84
      sidebarDepth: 0,
    },
  },
};
