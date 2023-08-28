---
heroText: Webpack
description: "webpack 是一個靜態模組打包工具，它的功用是把前端開發時用到的諸多靜態資源（如 JavaScript、CSS 和圖片等檔案）進行打包(bundle)。"
---

# Webpack

## 基礎概念

每個 `webpack.config.js` 都會有以下的架構：

```js
    module.export {
        entry:{},
        output:{},
        loaders:{},
        plugins:{},
        mode:'',
        browser-compatibility:'',
    }
```

這些就是 webpack 中的 _core-concept_ ，理解它們才能理解 webpack 究竟幫忙做了哪些事，那我們開始吧：

---

### Entry

引入自[官方文件](https://webpack.js.org/concepts)

> An **entry point** indicates which module webpack should use to begin building out its internal [dependency graph](https://webpack.js.org/concepts/dependency-graph/).

入口點(_entry point_) 指示 _webpack_ 以哪個檔案 (module) 作為打包( _bundle_ )的位置。你可以透過 `entry` 這個屬性去自定義打包路徑。它分為*單一路徑* 跟*多路徑*

#### 單一路徑設定：

1. `string`
2. `array`
3. `object` (**也能設定多路徑**)

```js
module.exports = {
  //obj
  entry: { main: "./path/to/my/entry/file.js" },
  //string
  entry: "/src/index.js",
  //array
  entry: ["./src/index.js"],
};
```

> **注意**：當你沒有設定時，預設產生的打包路徑為：`./src/index.js`

https://webpack.js.org/concepts/entry-points/#single-entry-shorthand-syntax

---

### Output

**決定打包(bundle)內容的輸出位置**，以及如何命名被打包的檔案們，你可以透過 `output` 屬性去客製化內容。

`webpack.config.js`

```js
const path = require("path");

module.export = {
  entry: "",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "",
  },
};
```

> **注意**：
>
> 1.  當你沒有設定時，預設輸出路徑為：`/dist/main.js`

---

### Loader

要知道 #webpack 本身只能編譯 JavaScript 跟 JSON 檔案類型，但在後面的筆記你會發現：連 _css_ , _png/jpg_ 等等都被打包，這就是透過 _loader_ 來達成。

_loader_ 會把這些檔案轉換為**有效的模組檔案** 以方便被裝入打包，你可透過 `loader` 去自定義，它內部包含兩種屬性：

1. `test` ：符合 `test` 內容的檔案會被丟入轉換的 _loader_
2. `use`：實際轉換的 _loader_ ，常見的有*babel-loader* , _sass-loader_

```js
const path = require("path");

module.export = {
  entry: "",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "",
  },
  loader: [
    {
      test: /\$/g,
      use: "babel-loader",
    },
  ],
};
```

> 在變更專案的打包工具要注意：並不是每個打包工具都像 webpack 能將任何透過 `import` 方式傳入的資料內容打包

---

### Plugins

https://webpack.js.org/concepts

---

### Mode

透過`mode`參數去使用 _webpack_ 內建的==環境參數==，有 `production`,`development`,`none`

> **production / development / none** 代表意思：

```js
const path = require("path");

module.export = {
  entry: "",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "",
  },
  loader: [
    {
      test: /\$/g,
      use: "babel-loader",
    },
  ],
  mode: "development",
};
```

> 預設值為 `production`

---

### 參考資料:

1. [淺談 Bundle、與 Vue-CLI](https://medium.com/the-messiah-code-%E7%A5%9E%E7%A2%BC%E6%8A%80%E8%A1%93%E5%85%B1%E7%AD%86/%E6%B7%BA%E8%AB%87-bundle-webpack%E8%88%87vue-cli-c2eda4a3cda3)
