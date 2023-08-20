---
title: 從認識到簡單設定 eslint
date: "2023-04-18"
---

# 從認識到簡單設定 eslint

## 為何要認識 eslint ?

1. 專案預設就會有 eslint，我想應該代表它有重要性
2. 知識永遠不嫌少（~~以後每篇都會出現的理由~~）

### eslint 能解決什麼問題？

根據規則檢查專案的 javascript 程式碼，並且會跳出提示字樣引導你去修正問題，幫助開發者產出可預期、管理的程式碼

<br>

## 認識 eslint 配置檔案

配置檔案的基本架構

```js
export module = {
	root:true, //是否要從專案根部的程式碼開始檢查
	rules:{}, //要套用哪些檢查規則
	plugins:{},
	extends:{},
	ignorePatterns:['name'], //不用檢查的檔案
}
```

### 規則（rules）

`rules` 筆者覺得是 eslint 配置檔很重要的部分，用來產生程式碼撰寫的規範，已知有以下兩種檢查方法：

1. 於特定檔案加入檢查
2. 整個專案加入檢查

#### 於特定檔案加入規則

假設你今天希望透過 eslint 來禁止 `xxx.js` 檔案內使用 `==`，只能使用 `===` 時，方法是於第一行加入規則如下：

```js
/* eslint eqeqeq: "error"*/
let x = 2;
if (x == 2) {
  //報錯
  console.log("alert!");
}
```

相反的，也可以讓特定檔案內的程式碼不受 eslint 檢查。

```js
/* eslint-disable */
let x = 2;
if (x == 2) {
  //報錯
  console.log("alert!");
}
```

#### 整個專案的檢查方式

當你有某個規則在每個檔案都需要，這時候你就可以考慮改用「全域檢查」，也就是在配置檔的 `rules` 內加上規則

```js
//eslint.js
export module = {
	root:true, //是否要從專案根部的程式碼開始檢查
	rules:{
		eqeqeq: 2,//等於 "error"
	},
	plugins:{},
	extends:{},
	ignorePatterns:['name'], //不用檢查的檔案
}
```

規則報錯有等級之分：

1. off (不會有提醒)
2. warn (錯誤提醒，但不會中斷執行)
3. error (會中斷程式碼執行)

<br>

## 實作加入最基礎的 eslint 設定

以下是簡單的步驟：

1. 安裝 eslint 到你的專案內

```
npm i eslint
```

2. 產生 eslint 的初始配置檔案

```
eslint --init
```

3. 根據需求在特定檔案、或整個專案加入所需的規則

```js
export default = {
	root:true,
	rules:{
		"eqeqeq":"error",
	}
}
```

恭喜你！現在你的專案已經被 eslint ~~監視~~了！<br>

---

### 參考資料：

1. [eslint 官方文件](https://eslint.org/docs/latest/use/getting-started)
