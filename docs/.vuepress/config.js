module.exports = {
  title: "Andy walking", //網站名稱
  description: "try to write some articles", //關於首頁的描述
  themeConfig: {
    nav: [
      { text: "About", link: "/About/" },

      {
        text: "Articles",
        link: "/Articles/",
      },
    ],
    sidebar: {
      "/Articles/": ["core"],
    },
  },
};
