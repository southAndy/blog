(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{318:function(t,a,s){"use strict";s.r(a);var n=s(14),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"nginx-是什麼"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-是什麼"}},[t._v("#")]),t._v(" nginx 是什麼")]),t._v(" "),a("p",[t._v("nginx 是常見的 web-server，所謂的 web-server 就是讓你能在本地端（local）啟動一個伺服器，並設定內部行為，讓別人可以透過對應的 port 發出請求。")]),t._v(" "),a("h2",{attrs:{id:"nginx-配置檔架構"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-配置檔架構"}},[t._v("#")]),t._v(" nginx 配置檔架構")]),t._v(" "),a("p",[t._v("官方文件是這樣說的：")]),t._v(" "),a("blockquote",[a("p",[t._v("The way nginx and its modules work is determined in the configuration file")])]),t._v(" "),a("p",[t._v("意思是："),a("strong",[t._v("nginx 如何運作是取決於其配置檔如何設定")]),t._v(" ，下面條列了一些設定內容：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("server{\n    listen\n    listen\n\n    server_name\n\n    client_max_body_size 100m()\n\n        location /{}\n}\n")])])]),a("ol",[a("li",[t._v("server：用 "),a("code",[t._v("{}")]),t._v(" 區隔，設定這個 server 內可以觸發的行為（要打哪些 API 、要幫忙轉跳到哪）。")]),t._v(" "),a("li",[t._v("listen ：指定要監聽哪幾個 port ，當有符合的 "),a("code",[t._v("port")]),t._v(" 進來時，會跑 server 內的設定。")]),t._v(" "),a("li",[t._v("server_name： 設定可執行 server 內容的 [[domain]] 來源（"),a("code",[t._v("request")]),t._v("）名稱，其他都會被擋掉。")]),t._v(" "),a("li",[t._v("location：設定遇到指定的 path 要觸發的行為，內部可以加的選項有：\n"),a("ul",[a("li",[t._v("proxy_pass: 會代替伺服器將資料回給客戶端，"),a("strong",[t._v("這樣只會知道代理的 IP 位址，無法得知真正提供資料的伺服器位置")]),t._v("。")])])])]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" /path/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    //do something\n    proxy_pass: ...\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ol",{attrs:{start:"5"}},[a("li",[t._v("client_max_body_size：設定傳給後端的資料大小（最大單位值）"),a("strong",[t._v("單位 m -> mb")])])]),t._v(" "),a("blockquote",[a("p",[t._v("這個算是前端中蠻重要的設定，有時候我們要跟後端溝通，會因為攜帶的 payload 過大而無法完成，例如上傳圖片。")])]),t._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[t._v("proxy_read_timeout：設定等待後端伺服器回應的時間長度（超過就會強制終止）")])]),t._v(" "),a("h2",{attrs:{id:"操作-nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作-nginx"}},[t._v("#")]),t._v(" 操作 nginx")]),t._v(" "),a("p",[t._v("啟動 nginx 後，若想要對它進行進一步的操作，輸入：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("nginx "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-s")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("option"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("後面的 [option] 的選項如下圖：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/4SKxUzv.png",alt:""}})]),t._v(" "),a("blockquote",[a("p",[t._v("This command should be executed under the same user that started nginx.\n上面指令只適用在啟動 nginx 的同個路徑下")])]),t._v(" "),a("h3",{attrs:{id:"檢測配置是否更新成功"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#檢測配置是否更新成功"}},[t._v("#")]),t._v(" 檢測配置是否更新成功")]),t._v(" "),a("p",[t._v("當你在 nginx 內加入新的設定後，可以透過下方指令檢查新的設定是否順利運行")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[t._v("nginx -t\n")])])]),a("h3",{attrs:{id:"檢視-nginx-設定-包含版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#檢視-nginx-設定-包含版本"}},[t._v("#")]),t._v(" 檢視 nginx 設定（包含版本）")]),t._v(" "),a("p",[t._v("可以檢視當前版本、OpenSSL 的設定等等")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("nginx "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-V")]),t._v("\n")])])]),a("hr"),t._v(" "),a("h3",{attrs:{id:"參考資料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#參考資料"}},[t._v("#")]),t._v(" 參考資料")]),t._v(" "),a("ol",[a("li",[t._v("https://ithelp.ithome.com.tw/articles/10280441")]),t._v(" "),a("li",[t._v("https://shubo.io/what-is-cors/#access-control-allow-origin")])])])}),[],!1,null,null,null);a.default=e.exports}}]);