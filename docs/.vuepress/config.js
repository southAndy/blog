module.exports = {
  title: "Andy walking", //網站名稱
  description: "try to write some articles", //關於首頁的描述
  base: "/", //根目錄的設定,

  themeConfig: {
    head: [["link", { rel: "icon", href: "/favicon.ico" }]],
    displayAllHeaders: true,
    search: false, //搜尋設定: false -> 不顯示, true -> 顯示
    nav: [
      {
        text: "學習筆記",
        link: "/posts/",
      },
      {
        text: "關於我",
        link: "/about/",
      },
    ],
  },
  // plugins: {
  //   "vuepress-plugin-auto-sidebar": {
  //     //側邊欄層級參考：https://shanyuhai123.github.io/vuepress-plugin-auto-sidebar/zh/features/plugin-options.html#_2-%E6%98%A0%E5%B0%84
  //     sidebarDepth: 0,
  //   },
  // },
};
