---
title: 用 ngrok 來架一個暫時網頁伺服器
---

### 動機

最近專案在開發 Liff ，在本地開發時，實在不想要每次都要經過 Line 登入步驟，所以決定用 ngrok 來另外開一個伺服器 for 開發使用。

### 安裝下載

去官網完成註冊成為會員後，你有兩種選擇來安裝 ngrok：

1. 指令下載（在這邊官網是使用 homebrew 進行安裝）

```terminal
brew install ngrok/ngrok/ngrok
```

2. 下載壓縮檔案(zip)

### 新增 `token` 配置

新增你的驗證 token

### 開啟 ngrok 渠道

官網預設是起一個 port: 80 的渠道，想要它導向到你要的 port 只需要在後面修改即可，例如：我希望導向 5173

![](https://imgur.com/a/qzvdtFS)

```terminal
ngrok 5173
```
