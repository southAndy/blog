# python 筆記

## 關於套件

如同前端開發者可以使用 yarn, npm 去進行套件管理，python 也有許多套件可使用，在 python 可以使用 pip , conda

> pip 是 python 內建的工具，不需要額外下載

### 下載套件

例如我們想要下載 beautful-soup 進入專案

```terminal
pip install beautifulsoup4
```

### 使用套件

```python
from bs4 import Beautifulsoup4
```

### 另一個選擇 poetry

https://blog.kyomind.tw/python-poetry/

---

## 基本語法

**如何加入註解**
在 python 使用 `#` 作為註解符號

```python
# 當作註解
print('hello world');
```

## 型別

目前已知有以下型別：

1. 字串
2. 整數
3. 浮點數

```python
# 注意
intNum = 1
flotNum = 1.5

type(intNum) # int
type(floatNum) #float
```

4. **複數**
5. 布林值
6. 列表

```python
#基本存值
data=[1,2,3,4]

#清除多欄位內容：以下面來說就是清除 inde 0 - 3 都是 []
data[0:3]=[]

#從資料尾端新增內容
data=data+[1,2,3]

#從頭加入: insert(index,value)
data.insert(0,4)

#取得列表總長
len(data)
```

7. tuple

```python
#操作跟 list 相同，差別是 tuple 內的資料不能修改
tuple_data=(1,2,3)
tuple_data[0]=5; #會報錯

#取得列表長度
len(tuple_data)

#解構：需賦予變數承接內容
a,b,c = tuple_data
```

8. 集合
   特性為：**無順序、無重複**

```python
#集合
{1,2,3} #O
{1,2,2,3} #X
```

8. 字典

```python
dic = {'name':'andy','age':9}
dic['name'] #andy
```

### 辨識型別方法

```python
# 假設要辨識 data
data = 'i am string'
type(data)

```

---

## 運算子

數學運算
布林運算

---

## 流程控制

最常見的：

1. `if else`
2. 三元判斷
3. 多個條件同時成立時 `and`
4. 其一成立即可 `or`
5. 不是時成立 `not`

```python
# if .. else
data = true
if data:
   print('is true!')
else:
   print('not! is false')

# 三元


# and
if a and b:
   print('both success!')

# or
if a or b:
   print('one is true!')

# not
if not a:
   print('not !')
```

---

## 定義函式

```python
def functionName(arg,arg):
    # function contents ...
```

## 如何存入變數

直接產生一個變數名稱，並且賦予值

```python
#直接取一個名稱
data = 3;
```

修改變數內的值：

```python
#初始值為1
data=1

#修改變數值
data=3
```

## 內建方法

### urllib

python 內建函式庫的模組，用於處理 URL 相關的操作，常見的操作有：

1. 發送 http 請求
2. 處理 url 解析

使用方式：

```python
import urllib.request

targetUrl = 'https://sample.com'
response = urllib.request.urlopen(targetUrl)

html = response.read() #讀取回應
```

---

## 爬蟲

### 資源:

1. https://hackmd.io/@NCHUIT/1101223#Python-%E7%B6%B2%E8%B7%AF%E7%88%AC%E8%9F%B2
2. https://www.youtube.com/watch?v=9Z9xKWfNo7k&list=PL-g0fdC5RMboYEyt6QS2iLb_1m7QcgfHk&index=19

### beautiful-soup

在這邊範例是使用 requests 套件取得網頁架構

```python
import requests
from bs4 import BeautifulSoup

url = 'https/目標網址'
response = requests.get(url)

# 使用 bs4 解析網頁
content = BeautifulSoup(repsonse.text,'html.parser')
```

假設我們取得的網頁架構如下：

```html
<div>
  <h1 class="h1">title</h1>
</div>
```

#### 尋找特定架構的內容

承上面的程式碼，例如你想要取得 h1 的內容要如何做到？

```python

```

### 兩者比較

![[Pasted image 20230526175928.png]]

### 反爬蟲

檢查請求 (request) 的 Header
登入功能頁面的輸入驗證碼

---
