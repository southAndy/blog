---
title: 效能優化筆記
---

## 執行前的評估

在開始做優化之前，可以先思考以下兩點

1. 應用程式需要追求效能嗎？
2. 投入的時間成本
3. 執行難易度

## 效能優化實例

其實優化分很多的面向，在這篇文章提及的主要取向為：**效能（Performance）方面的優化**

### 設定 gzip 壓縮體積

在筆者的案例是在 nginx 上設定壓縮的，附上程式碼

```shell
    gzip on; #啟動 gzip
    gzip_disable "msie6"; #不要對 IE6 做處理
    gzip_types #對哪些檔案進行處理
		text/xml
		text/css
		text/plain
		# ....
```

### 檢視並移除未使用的元件

若沒有定期整理專案程式碼，在功能迭代過程可能會誕生暫時應付性元件，將這些內容移除也能稍微縮小打包的體積。

### 將圖檔由 png 改為 webp

webp 是由 google 開發的，**用來提供體積更小、但畫質相同的圖檔**，以下是移轉過來前須考量：

1. 使用者瀏覽器確認（ webp 對於 Safari , IE 的支援度相對比較低）
2. 圖片會有做成動畫的需求嗎？

### 檢視第三方套件的使用狀態

在這邊是使用 webpack-bundle-analyzer 去檢視主要打包、及第三方套件打包（chunk-vendor）的體積、內部套件的使用狀況。

### 移除未使用的 css

在瀏覽器渲染畫面的過程，分別會產生 CSSOM 以及 DOM ，最終結合為 renderTree。css 的內容，不像 javascript 的程式碼，是可以透過 webpack 的 tree-shaking 機制去過濾無用的程式碼，**所有 CSSOM 的內容（包含那些沒用到的 css)** 都會被瀏覽器讀取，徒增體積、降低渲染速度。

> 那如何找到未使用的 css ？

在 chrome 的開發者工具點擊 `command + shift + P` 輸入 `coverage`，檔案標示紅色的，就是未被使用到的 css 樣式編譯內容。

<br>

### 靜態資源快取

這邊是使用所謂的 server-side-cache ，在 nginx 為靜態資源加上快取設定

```nginx
if ($request_uri ~* \.(png|jpg|jpeg|gif|svg|webp|js)$)
{ expires 8640000; add_header Cache-Control "public"; }

if ($request_uri ~ ^/feature/js/index\.[a-zA-Z0-9]+\.js$)
{ add_header Cache-Control "no-cache"; }
```

使用正則表達判斷當檔案類型符合時，暫存這個內容 864000(s) 也就是 100 天。

> 注意：若是針對同名稱的靜態資源進行更新，會無法偵測內容有改變。

### 升級 HTTP2

#### 升級有什麼好處

HTTP/1.1 有一個非常大的缺陷是每個對伺服器的 Request 資源請求，都必須佔用一個網路連線（TCP connection），瀏覽器無法同時下載，這件事情在 HTTP/2 獲得了改善。**簡單來說 HTTP2 讓你的網頁載入更快、更安全。**

## 小結

比起透過 code splitting 那類的優化，這些調整是相對容易又能讓效能提升稍微有感的做法，不過與其追求事後的優化，不然事情就定期監測自身專案的效能狀況，正所謂「預防重於治療」在下一篇會想試著介紹 lighthouse-ci 自動效能監測的功能。
