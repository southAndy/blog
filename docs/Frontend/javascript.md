---
title: Javascript
---

## JavaScript types

### 前言：為何我會想整理這篇筆記

工作上常常會需要做**防呆設計**，好的防呆設計就是~~盯著後端資料叫他不要亂傳資料~~，但很多事情都是可遇不可求，**所以對型別有越深入的認識，越能做出可讀性好又周到的防呆設計。**

> **防呆設計**
> 以下是節錄維基內容：
> 又稱**錯誤校對**，是一種預防矯正的行為約束手段，運用防止錯誤發生的限制方法..... etc
> https://zh.m.wikipedia.org/zh-tw/%E9%98%B2%E5%91%86

## 型別有哪些

此篇是根據*[EcmaScript 2023](https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values)* 規範為準，因為 JavaScript 本身也是會迭代的，**所以型別數量可能會隨時間演進而改變**，那根據其定義是這樣的：

> Types are further subclassified into [ECMAScript language types](https://tc39.es/ecma262/#sec-ecmascript-language-types) and specification types.

其中我們日常會操作的就是所謂 _ECMAScript Language Types_，來看看：

> ECMAScript language. The ECMAScript language types are `Undefined`, `Null`, `Boolean`, `String`, `Symbol`, `Number`, `BigInt`, and `Object`.

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

**undefined / null 無腦區別**

```js
typeof null; //object
typeof undefined; //undefined
```

### String

根據文件規格是這樣說的：

> The String type is the set of all ordered sequences of zero or more 16-bit unsigned [integer](https://tc39.es/ecma262/#integer) values (“elements”) up to a maximum length of 253 - 1 elements. The String type is generally used to represent textual data in a running ECMAScript program, in which case each element in the String is treated as a UTF-16 code unit value.

節錄重點是：

1. string 內容長度上限為 2^53 - 1
2. 字串是由一連串 16-bit 的數字組成

**產生情境**

```js

```

### Number

根據文件規格是這樣說的：

> ECMAScript has two built-in numeric types: Number and BigInt.

在這邊你只需要先知道**數字的值是有上限的**即可，我們來驗證看看：

```js
var a = 123456789123456789;
var b = a + 1;
console.log(a === b); // true
console.log(a); // 123456789123456780
```

### Object

### BigInt

### Symbol

## 常見的型別檢測方式

### typeof

### instaneof

### constructor

### 情境題

#### 幾個奇怪的現象

#### 透過 `(!data)` 判斷沒有`data` 會有什麼疏漏

**情境**：從後端拿到的資料內容正常情況為`String`，**當沒有資料時要顯示沒資料樣式**

```js
//我們希望做到的事情，當沒有資料會執行 `if` 的內容
if (!data) {
  //沒有資料執行的事情
} else {
  //有資料執行的事情
}
```

假設**沒有資料**有以下情境：

```js
//回傳空值 (sucessful)
data = "" / undefined / null;
Boolean(!data); //true
//如果是回傳空的資料表 (failed)
data = [] / {};
Boolean(!data); //false
```

---

### 參考資料：

1. [# 來數數 JavaScript 的所有資料型別](https://blog.huli.tw/2022/02/25/javascript-how-many-types/)
