(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{315:function(t,s,a){"use strict";a.r(s);var n=a(14),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"編譯-typescript"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#編譯-typescript"}},[t._v("#")]),t._v(" 編譯 typescript")]),t._v(" "),s("h3",{attrs:{id:"typescript-編譯配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#typescript-編譯配置"}},[t._v("#")]),t._v(" typescript 編譯配置")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"compilerOptions"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"target"')]),t._v("："),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"es3"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//指定編譯輸出後的 javascript 程式碼版本")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"module"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"commonjs"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//模組化的方式")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nexclude"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node_modules"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//設定要排除被ts編譯的檔案類型（但它只能排除ts內建能識別的檔案），像是圖片檔、樣式檔則需要透過其他方式去排除。")]),t._v("\n")])])]),s("h3",{attrs:{id:"目前不支援的編譯內容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目前不支援的編譯內容"}},[t._v("#")]),t._v(" 目前不支援的編譯內容")]),t._v(" "),s("p",[s("strong",[t._v("ES6 語法")])]),t._v(" "),s("ol",[s("li",[t._v("block level function declaration")]),t._v(" "),s("li",[t._v("proxy")])]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"typescript-型別檢測"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#typescript-型別檢測"}},[t._v("#")]),t._v(" typescript 型別檢測")]),t._v(" "),s("p",[t._v("typescript 會自動檢測專案內的每行程式碼，其檢測方法可先粗略分為"),s("strong",[t._v("註記")]),t._v("、"),s("strong",[t._v("推論")]),t._v("兩種。")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//註記")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//直接告訴 ts 這個 x 只能存字串型別的值")]),t._v("\nx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//error")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//推論")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//讓ts來判斷變數型別，得到 x 應該 number 的結果")]),t._v("\nx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//所以當你要再存入其他型別內容，會報錯")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("大多時候建議以推論來產生型別，除非資料過於複雜。")])]),t._v(" "),s("h3",{attrs:{id:"註記"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#註記"}},[t._v("#")]),t._v(" 註記")]),t._v(" "),s("p",[t._v("註記還能進一步為"),s("strong",[t._v("型別註記")]),t._v("跟**型別斷言")]),t._v(" "),s("p",[s("strong",[t._v("型別註記")]),t._v("\n簡單條列註記種類，註記可以是型別或 "),s("strong",[t._v("明確的值")]),t._v("，以下先條列簡單型別")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//型別註記")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//明確值註記")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("strong",[t._v("型別斷言")]),t._v("\n以下為斷言兩種寫法")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("callFunction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("callFunction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("註記跟斷言差在哪？")])]),t._v(" "),s("h3",{attrs:{id:"兩者差異比較"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#兩者差異比較"}},[t._v("#")]),t._v(" 兩者差異比較")]),t._v(" "),s("p",[t._v("兩者的差異，以大概念上可以先這樣區分：")]),t._v(" "),s("ol",[s("li",[t._v("註記：開發者主動為變數撰寫型別，這個行為產生的型別就是"),s("strong",[t._v("註記")])]),t._v(" "),s("li",[t._v("推論：是 typescript 編譯器進行判斷後加上的"),s("strong",[t._v("型別")]),t._v("，就是所謂的"),s("strong",[t._v("推論")])])]),t._v(" "),s("h3",{attrs:{id:"typescript-檢測步驟"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#typescript-檢測步驟"}},[t._v("#")]),t._v(" typescript 檢測步驟")]),t._v(" "),s("ol",[s("li",[t._v("推論變數的型別")]),t._v(" "),s("li",[t._v("掃描變數可能的型別（還能傳入可能以外的值）")]),t._v(" "),s("li",[t._v("存入變數值後確定型別（==不再更動==）")])]),t._v(" "),s("p",[t._v("看簡單的例子：")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" randomMath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//推論 => 此時為 any")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("random")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  randomMath "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  randomMath "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nrandomMath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//掃描變數可能型別(string or number)")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);