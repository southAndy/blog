---
title: 瀏覽器與網路
---

## 網路基礎

### HTTP 是什麼？

是所謂 **超文本傳輸協定**，全名是 _HyperText Transfer Protocol_ ，內容規範了客戶端要求(_request_)以及伺服器回應(_response_)的標準，是使用 _TCP_ 作為資料傳遞方式。

> **HTTP / HTTPS 差在哪？**
> 兩個都是**超文本傳輸協定**，而多出來的那個 **s** 就是所謂 **security**
> HTTPS 就是加入了 SSL/TLS 的保密設定，更加避免傳輸資料過程被竊取。
> https://tw.alphacamp.co/blog/http-https-difference

### HTTP 之 Client-side、Server-side

一般來說，資料傳遞上有兩個角色：**客戶端 (client-side)**、**伺服器端 (server-side)**

**資料傳遞：**
由客戶端發出請求(request) >>> 伺服器端 (server) 收到後，會根據請求回傳回應(response)，來看看實例：

![](https://i.imgur.com/vlZua66.png)

當你打開 **瀏覽器**要搜尋 **螢幕**的資訊，到這邊我們可以轉換兩個名詞：

1. 瀏覽器 => 客戶端
2. 輸入關鍵字並按下送出：**螢幕** => 發出需求(request)

**請求 (request) 的架構**
會分別有：

1. request-header
2. request-body

```sh
1. 發出要求的客戶端(HOST): www.google.com
2. URL:https://...s.dadasdasd/com
3. 請求(request)方法類別: GET / POST / DELET
```

> GET / POST 的比較
> 當需要夾帶**敏感資訊** 通常會使用 **POST** 的方法，為何？

接著**Google 資料庫**接收到這個**請求 (request)**，將資料回傳(**response**)並且呈現在畫面上，轉換起來就是：

1.  Google 資料庫 => 伺服器端
2.  資料回傳 => 回傳回應(response)

而每個回應內都會包含：

```shell
1. 狀態訊息:200(成功) / 401(權限問題) / 404(路徑錯誤)/
2. response body:包含請求的資料內容(ex:螢幕資訊)
```

以上就是最基本的資料傳遞流程。

**注意：**

1. 客戶端，有時候也能是伺服器媒介
2. 請求(request)跟回應(response)一次可發出>=1 個

常見的**客戶端媒介**(又稱為 user-agent ):

1. browser
2. mobile
3. electrical-application (家電)
4. web-crawler (網路爬蟲)

### 你看到的畫面怎麼來的？

就是由一堆的請求跟回覆所組成

> 以下以 Google 搜尋 flag 為例：
>
> ![](https://i.imgur.com/d8g3b5s.png)

再進一步細看：
