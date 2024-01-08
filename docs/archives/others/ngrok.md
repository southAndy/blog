---
tags: ["other"]
---

# 用 ngrok 來架一個暫時網頁伺服器

### 前言

最近專案在使用 Liff 框架進行開發，在本地開發時，如果

<br/>

---

### 安裝下載

去官網完成註冊成為會員後，你有兩種選擇來安裝 ngrok：

1. 指令下載（在這邊官網是使用 homebrew 進行安裝）

```terminal
brew install ngrok/ngrok/ngrok
```

### 可以使用 `ngrok help` 確認是否下載成功

2. 下載壓縮檔案(zip)

### 新增 `token` 配置

新增你的驗證 token

### 開啟 ngrok 渠道

官網預設是起一個 port: 80 的渠道，想要它導向到你要的 port 只需要在後面修改即可，例如：我希望導向 5173

![](https://res.cloudinary.com/dqh45yjcx/image/upload/v1700121911/ngrok_kbvxev.jpg)

```terminal
ngrok 5173
```

這樣就可以產生一個臨時的網頁伺服器了，讓你可以：

1. 將你的本地開發進度 demo 給你的客戶
2. 在真實的行動裝置上檢視功能、排版

### 參考資料：

1. https://ngrok.com/docs/getting-started/
2. https://askie.today/ngrok-localhost-server-settings/
