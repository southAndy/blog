---
title: Nginx
date: "2023-05-27"
---

## nginx 是什麼

nginx 是常見的 web-server，所謂的 web-server 就是讓你能在本地端（local）啟動一個伺服器，並設定內部行為，讓別人可以透過對應的 port 發出請求。

## nginx 配置檔架構

官方文件是這樣說的：

> The way nginx and its modules work is determined in the configuration file

意思是：**nginx 如何運作是取決於其配置檔如何設定** ，下面條列了一些設定內容：

```
server{
    listen
    listen

    server_name

    client_max_body_size 100m()

        location /{}
}
```

1. server：用 `{}` 區隔，設定這個 server 內可以觸發的行為（要打哪些 API 、要幫忙轉跳到哪）。
2. listen ：指定要監聽哪幾個 port ，當有符合的 `port` 進來時，會跑 server 內的設定。
3. server_name： 設定可執行 server 內容的 [[domain]] 來源（`request`）名稱，其他都會被擋掉。
4. location：設定遇到指定的 path 要觸發的行為，內部可以加的選項有：
   - proxy_pass: 會代替伺服器將資料回給客戶端，**這樣只會知道代理的 IP 位址，無法得知真正提供資料的伺服器位置**。

```nginx
location /path/ {
    //do something
    proxy_pass: ...
}
```

5. client_max_body_size：設定傳給後端的資料大小（最大單位值）**單位 m -> mb**

> 這個算是前端中蠻重要的設定，有時候我們要跟後端溝通，會因為攜帶的 payload 過大而無法完成，例如上傳圖片。

6. proxy_read_timeout：設定等待後端伺服器回應的時間長度（超過就會強制終止）

## 操作 nginx

啟動 nginx 後，若想要對它進行進一步的操作，輸入：

```shell
nginx -s [option]
```

後面的 [option] 的選項如下圖：

![](https://i.imgur.com/4SKxUzv.png)

> This command should be executed under the same user that started nginx.
> 上面指令只適用在啟動 nginx 的同個路徑下

### 檢測配置是否更新成功

當你在 nginx 內加入新的設定後，可以透過下方指令檢查新的設定是否順利運行

```nginx
nginx -t
```

### 檢視 nginx 設定（包含版本）

可以檢視當前版本、OpenSSL 的設定等等

```shell
nginx -V
```

---

### 參考資料

1. https://ithelp.ithome.com.tw/articles/10280441
2. https://shubo.io/what-is-cors/#access-control-allow-origin
