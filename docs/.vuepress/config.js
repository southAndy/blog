module.exports = {
  title: "Andy walking", //網站名稱
  description: "try to write some articles", //關於首頁的描述
  themeConfig: {
    nav: [
      { text: "about", link: "/about/" },

      {
        text: "guide",
        link: "/guide/",
      },
    ],
    sidebar: [
      {
        title: "webpack",
        path: "/webpack/",
        collapsable: false,
      },
      {
        title: "vuepress",
        path: "/vuepress/",
        collapsable: false,
        children: ["/"],
      },
    ],
  },
};
