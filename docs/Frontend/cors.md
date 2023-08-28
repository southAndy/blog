---
title: CORS
date: "2023-01-11"
description: "隨著你的專案規模改變，資料也會有需要"
---

### 什麼是 CORS

_CORS_ 全名為：**跨來源資源共用規範**，當你想請求非同源的資料來源時，就需要遵守 _CORS_ 。

### 同源請求

那所謂的同源，必須同時滿足以下三個條件，才符合 _SOP (同源政策)_：

![[Pasted image 20221122210415.png]]

1. (same scheme) 與請求來源使用相同的通訊協定： `http / https`
2. (same host-name) 與請求來源的網域相同 : `//samehost.com`
3. (same port) 與請求來源的通訊埠 (port): `:444`

> 簡單測試： 今天我有一個網址為: `https://sample.com:444` ，下方何者與它同源？
>
> 1. `http://sample.com:444`
> 2. `https://sameples.com:444`
> 3. `https://sample.com/result:444`

聰明的你知道答案嗎？其實我也不確定（？）
