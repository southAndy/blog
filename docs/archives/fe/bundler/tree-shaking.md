---
title: Tree Shaking
---

# Tree Shaking

引用官網的內文：

> It relies on the [static structure](http://exploringjs.com/es6/ch_modules.html#static-module-structure) of ES2015 module syntax

也就是說 tree-shaking 這個功能是立基在 ESM 上去使用，因為 ESM 具有以下特色：

1. 只能放在模組的最上層（動態的 import 除外），假設你希望在特定情境才進行 import

```js
//錯誤示範
if ("某事發生") {
  import useTool from "../";
}

//正確示範
import useTool from "../";
```

2. import 的模組內容是 **immutable** 的 (可參考：[[mutable & immutable]])

```js
//a.js
export var x = 2;

//b.js
import x from "/a.js";

x = 3; //error x is constant variable  即便你本來用 var 宣告都會轉為 const
```

3. import 的 module name 不能是動態的（目前理解是 import 路徑不能是動態的）

```js
//錯誤示範
const isHome = isHome?'/page/home.js':'/page/other.js'

import Home from isHome

//正確示範
import Home from "/page/home.js"
import Other from "/page/other.js" //反正沒用到自然就會被 shaking?
```

而模組化（import）的解析是在 **靜態解析** 階段，在這個階段會做的事情有：

1. 變數宣告跟作用域分析：檢測每個作用域內存有哪些變數，等進到執行序時就可快速地去查找
2. **分析導入(import)跟導出(export) 的內容**

這樣方便讓打包工具（如 webpack ）進行後續的分析、優化。

### 實現 tree-shaking 的小技巧

1. 調整 babel 編譯設定：因為預設編譯會轉為 commonjs 版本，會讓 tree-shaking 失效。

   > 那為何編譯成 commonjs 版本會失效？

2. export 的模組保持 **原子性**：就是讓輸出的模組內容盡量維持單一、不可變的，這樣才能方便分析，不然一直變動很難分析。

```js
//各別輸出 (O)
export function useTool() {}
export function useTool2() {}

//最後統一輸出 (O)
function useTool() {}
function useTool2() {}

export { useTool, useTool2 };

//非原子的寫法 (X)
function useTool() {}
function useTool2() {}

export let useToolList = {
  use: useTool,
  use2: useTool2,
};
```

---

### 參考資料

ref:https://ithelp.ithome.com.tw/articles/10274978
