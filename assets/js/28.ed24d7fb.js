(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{310:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"express-express-學習筆記"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#express-express-學習筆記"}},[t._v("#")]),t._v(" [Express] express 學習筆記")]),t._v(" "),s("h2",{attrs:{id:"express-實例方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#express-實例方法"}},[t._v("#")]),t._v(" Express 實例方法")]),t._v(" "),s("h3",{attrs:{id:"自動讀取靜態資源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自動讀取靜態資源"}},[t._v("#")]),t._v(" 自動讀取靜態資源")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("express"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("static")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"public"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"基本操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本操作"}},[t._v("#")]),t._v(" 基本操作")]),t._v(" "),s("h3",{attrs:{id:"建立伺服器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#建立伺服器"}},[t._v("#")]),t._v(" 建立伺服器")]),t._v(" "),s("p",[t._v("要建立一個伺服器，最基本要給予一個 "),s("em",[t._v("PORT")]),t._v(" ，讓人可以透過這個 PORT 來訪問")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//app.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" express "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"express"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("express")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PORT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("port"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("PORT 的值也有限制，像是")]),t._v(" "),s("ol",[s("li",[t._v("0 - 1023 是所謂的 "),s("em",[t._v("well-known-ports")]),t._v(" ，已經分配給特定的大眾服務")]),t._v(" "),s("li",[t._v("1024 - 49151 則是 "),s("em",[t._v("register-ports")]),t._v(" ，通常用於軟體應用程式使用")])])]),t._v(" "),s("h3",{attrs:{id:"建立路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#建立路由"}},[t._v("#")]),t._v(" 建立路由")]),t._v(" "),s("p",[t._v("假設今天網站想新增一個：關於我們頁面，我們為這個頁面取名為: "),s("code",[t._v("/about")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/about"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"動態路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#動態路由"}},[t._v("#")]),t._v(" 動態路由")]),t._v(" "),s("p",[t._v("在路由加入"),s("code",[t._v(":")]),t._v(" 來產生動態參數")]),t._v(" "),s("div",{staticClass:"language-javascript! extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('app.get("/:product",(req,res)=>{})\n')])])]),s("p",[t._v("參數值可以透過 reqeust 物件中取得")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/:product"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//取得動態參數product")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" product "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" product"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"路由處理器-routing-handler"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#路由處理器-routing-handler"}},[t._v("#")]),t._v(" 路由處理器(routing handler)")]),t._v(" "),s("p",[t._v("HTTP 實例有提供多種的方法，最常見的像是 CRUD：get, post, delete, update 等方法，express 可以讓你針對不同類型的請求去設定不同的響應行為。")]),t._v(" "),s("p",[t._v("先知道這邊指的 request , response 分別代表客戶端的請求及伺服器端的回應")]),t._v(" "),s("div",{staticClass:"language-javascript! extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('app.get("routeName",(request,response)=>{\n\n})\n')])])]),s("hr"),t._v(" "),s("h3",{attrs:{id:"參考資料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#參考資料"}},[t._v("#")]),t._v(" 參考資料：")]),t._v(" "),s("ol",[s("li",[t._v("https://expressjs.com/zh-tw/api.html")])])])}),[],!1,null,null,null);s.default=e.exports}}]);