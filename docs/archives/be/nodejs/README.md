---
tags: ["be"]
date: "2024/01/08"
---

# [Express] express 學習筆記

## Express 實例方法

### 自動讀取靜態資源

```js
app.use(express.static("public"));
```

## 基本操作

### 建立伺服器

要建立一個伺服器，最基本要給予一個 _PORT_ ，讓人可以透過這個 PORT 來訪問

```js
//app.js
const express = require("express");
const app = express();
const PORT = 8000;
app.listen(port);
```

> PORT 的值也有限制，像是
>
> 1.  0 - 1023 是所謂的 _well-known-ports_ ，已經分配給特定的大眾服務
> 2.  1024 - 49151 則是 _register-ports_ ，通常用於軟體應用程式使用

### 建立路由

假設今天網站想新增一個：關於我們頁面，我們為這個頁面取名為: `/about`

```js
app.get("/about");
```

#### 動態路由

在路由加入`:` 來產生動態參數

```javascript!
app.get("/:product",(req,res)=>{})
```

參數值可以透過 reqeust 物件中取得

```js
app.get("/:product", (req, res) => {
  //取得動態參數product
  let { product } = req.params;
  res.send("string" + product);
});
```

### 路由處理器(routing handler)

HTTP 實例有提供多種的方法，最常見的像是 CRUD：get, post, delete, update 等方法，express 可以讓你針對不同類型的請求去設定不同的響應行為。

先知道這邊指的 request , response 分別代表客戶端的請求及伺服器端的回應

```javascript!
app.get("routeName",(request,response)=>{

})
```

---

### 參考資料：

1. https://expressjs.com/zh-tw/api.html
