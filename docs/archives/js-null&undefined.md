---
title: 比較 null 與 undefined
---

## JavaScript types

### 前言：為何我會想整理這篇筆記

工作上在製作新功能時曾有遇到：**後端回傳資料及格式架構都錯**的情境，再次意識到型別理解的重要性，畢竟畫面資料錯了非常明顯，所以前端應該要設想各種錯誤情境去預防，而不是期待後端資料永遠不會有出錯的一天。

## 型別有哪些

參考 _ECMAScript Language Types_：

> ECMAScript language. The ECMAScript language types are `Undefined`, `Null`, `Boolean`, `String`, `Symbol`, `Number`, `BigInt`, and `Object`.

我們日常會使用到的型別多為上面提及的這幾種，**而這篇文章會主要關注在 `null` 及 `undefined` 的比較上**。

### undefined

根據文件規格是這樣說的：

> The Undefined type has exactly one value, called undefined. Any variable that has not been assigned a value has the value undefined.

意思就是說 `undefined` 這個型別只有一種值，就是 `undefined`，我們來驗證看看：

```js
let x;
typeof x; //undefined

//當你對它賦任何值後，型別就不是 undefined 了
X = 2;
typeof x; //number
```

**產生情境**

```js
//宣告未賦予值
let x;
typeof x;

//陣列空值
let emptyArray = [];
typeof x[any];
```

### null

根據文件規格是這樣說的：

> The Null type has exactly one value, called null.

規格像沒說，加上它又跟 `undefined` 太像了，所以仿效 huli 大的[文章](https://blog.huli.tw/2022/02/25/javascript-how-many-types/)用圖來說明：
![[p1.jpeg]]
簡單可以理解為：`undefined` 是有宣告、但沒有賦值過，`null` 是有宣告，且曾經有賦值过。

#### undefined / null 最簡單的區別方式

```js
typeof null; //object
typeof undefined; //undefined
```

---

### 參考資料：

1. [# 來數數 JavaScript 的所有資料型別](https://blog.huli.tw/2022/02/25/javascript-how-many-types/)
