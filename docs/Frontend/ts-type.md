---
title: typescript 編譯
---

## 編譯 typescript

### typescript 編譯配置

```json
"compilerOptions":{
	"target"："es3", //指定編譯輸出後的 javascript 程式碼版本
	"module":"commonjs", //模組化的方式
},
exclude:["node_modules"],//設定要排除被ts編譯的檔案類型（但它只能排除ts內建能識別的檔案），像是圖片檔、樣式檔則需要透過其他方式去排除。
```

### 目前不支援的編譯內容

**ES6 語法**

1. block level function declaration
2. proxy

---

## typescript 型別檢測

typescript 會自動檢測專案內的每行程式碼，其檢測方法可先粗略分為**註記**、**推論**兩種。

```ts
//註記
let x: string = ""; //直接告訴 ts 這個 x 只能存字串型別的值
x = 123; //error

//推論
let x = 123; //讓ts來判斷變數型別，得到 x 應該 number 的結果
x = ""; //所以當你要再存入其他型別內容，會報錯
```

> 大多時候建議以推論來產生型別，除非資料過於複雜。

### 註記

註記還能進一步為**型別註記**跟\*\*型別斷言

**型別註記**
簡單條列註記種類，註記可以是型別或 **明確的值**，以下先條列簡單型別

```ts
//型別註記
let x: string = "";

//明確值註記
let x: 1 = 1;
```

**型別斷言**
以下為斷言兩種寫法

```ts
const x = callFunction() as number;
const x = <number>callFunction();
```

> 註記跟斷言差在哪？

### 兩者差異比較

兩者的差異，以大概念上可以先這樣區分：

1. 註記：開發者主動為變數撰寫型別，這個行為產生的型別就是**註記**
2. 推論：是 typescript 編譯器進行判斷後加上的**型別**，就是所謂的**推論**

### typescript 檢測步驟

1. 推論變數的型別
2. 掃描變數可能的型別（還能傳入可能以外的值）
3. 存入變數值後確定型別（==不再更動==）

看簡單的例子：

```ts
let randomMath; //推論 => 此時為 any

if (Math.random() > 0.5) {
  randomMath = "123";
} else {
  randomMath = 123;
}

randomMath; //掃描變數可能型別(string or number)
```
