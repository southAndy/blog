module.exports = {
  title: "Andy walking", //網站名稱
  description: "try to write some articles", //關於首頁的描述
  base: "/", //根目錄的設定
  themeConfig: {
    displayAllHeaders: true,
    search: false,
    nav: [
      {
        text: "前端",
        link: "/archives/fe/",
        items: [
          { text: "打包", link: "/archives/fe/bundler/" },
          { text: "Javascript", link: "/archives/fe/js/" },
          { text: "vuejs", link: "/archives/fe/vuejs/" },
        ],
      },
      {
        text: "後端",
        link: "/archives/be/",
        items: [
          { text: "Nodejs", link: "/archives/be/nodejs/" },
          { text: "資料庫", link: "/archives/be/database/" },
          { text: "爬蟲", link: "/archives/be/crawler/" },
          { text: "python", link: "/archives/be/python/" },
        ],
      },
      {
        text: "其他",
        link: "/archives/others/",
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
