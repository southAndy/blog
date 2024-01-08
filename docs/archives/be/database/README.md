---
tags: []
---

# [MongoDB] mongoDB 學習筆記

### SQL vs noSQL

sql 指的是關聯式資料庫(relational-database)

## 安裝 mongoDB

依序為以下步驟：

1. 透過 brew 安裝 mongoDB

```shell
brew install mongodb-community@version
```

> **mongoDB 6.0** 後可使用 _homebrew_ 來安裝

2. 啟動 mongodb

```shell
brew services start mongodb-community@6.0
mongosh
```

可以使用 `brew service list ` 確認當前有哪些資料庫在運行，也能確認 mongodb 是否啟動了。

## 操作指令

### 基本操作

1. `show dbs` 檢視 **本地資料庫數量**

   ![](https://i.imgur.com/PExstL6.png)

2. `use + [dbName]` 切換資料庫
   當嘗試切換 不存在的資料庫時，mongodb 會直接幫你建立一個新的資料庫

   ![](https://i.imgur.com/JXZqS64.png)

3. `show collectios` 顯示當前資料庫名稱，如我現在在 `test` 這個資料庫

   ![[Pasted image 20220926205856.png]]
   ![](https://i.imgur.com/5yHT8i7.png)

### 資料庫操作

我們對資料最常見的操作如所謂的 CRUD，在 mongoDB 也能執行，分別是：

1. insert - (C)
2. find - (R)
3. update - (u)
4. delet - (d)

### insert

有以下幾種方法：

1. 儲存單筆資料：document 資料架構可以想成是 javascript 的 object，能將資料以陣列形式存入，但會內容被自動拆成**物件形式**。

今天我們將一個資料如下：

```shell
db.[資料庫].insertOne([1,2,3])
```

接著我們讀取這筆資料

```shell
db.[collectionName].find()
 /* { '0': 1, '1': 2, '2': 3, _id: ObjectId("6331a488f7ec354d9cbf0d1e") } */
```

2. 儲存多筆資料：資料須以**陣列格式**傳入

```shell
db.[資料庫].insertMany([1,2,3]);
```

---

### find

透過以下指令來尋找資料：

```shell
db.[資料庫].find()
```

### update

```
db.[collectionName].updateOne(<filter>,<update>,{options})
db.[collectionName].updateMany(<filter>,<update>,{options})
db.[collectionName].replaceOne(<filter>,<update>,{options})
```

1. 當`<filter>` 是空值時，會回傳資料庫內第一筆資料進行修改
2. `options` 可以加入像是：資料最後變更日期
