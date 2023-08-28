---
title: Vuex基礎
date: "2023-01-11"
description: "隨著你的專案規模改變，資料也會有需要"
---

# Vuex 基礎

根據文件的概念，vuex 定位是用來管理**全域資料、全域邏輯**

> Vuex is a **state management pattern + library** for Vue.js applications.
> ref:https://vuex.vuejs.org/

<br>

### 全域的概念

簡單的概念說明就是：**這個資料會被跨頁面使用**，常見的「全域資料」如下：

```
userID //使用者ID
loginTime //登錄時間
api-payload //帶給後端的payload
API //從後端取回的資料
```

---

### 認識 Vuex 資料存取原理

當你想要取得一個存放在 `state` 內的 API 資料，你會經過下面的步驟：

1. 元件內執行一個 `methods`，或是在生命週期時觸發 `actions`
2. 執行後會傳`commit`到`Mutations` 由它更新`state`內的值
3. 當確認更新後，將變動的值賦予到`state`內的變數中
4. 回傳給元件

<div style="border:1px solid black;margin-bottom:5px">
    <img src="https://i.imgur.com/at5KuTP.png" style="width:100%"/>
</div>

---

### 基本構造

我們可以用 vue 的架構去比喻，如下：

```js
const store = createStore({
  //存放資料的地方 > 如同vue的data
  state: {},
  //常用於計算，取得一個值 > 如同computed
  getters: {},
});
```

不同的是在 vue 本身，不論是**同步**及**非同步**的邏輯都可以在 `methods` 撰寫。但在 vuex 則被拆開去各別處理：

```js
const store = createStore({
  //執行同步的邏輯
  mutations: {},
  //執行非同步的邏輯
  actions: {},
});
```

在下面的部分會針對各架構介紹：

---

### State

如同前面提過的，存放在 Vuex 內的 `state` 都是==全域等級==的資料，那要如何使用呢？在這邊會分別介紹：

1. **元件取用**
2. **Vuex 內部取用**

#### 元件取用

可以分為**單一資料**取出及**多資料**取用

```js
//單一資料取法: 透過 this 去指向vuex
computed:{
	getVuexStore:function(){
		return this.$store.state.[stateName]
	}
}
//多筆資料取法: 透過 vuex 內建的 map 系列方法
import {mapState} from "vuex"

computed:mapState({
	//有三種取法,需注意參數必須為 state
	//1.使用箭頭函式取
	localName:state=>state.stateName

	//2.使用 string方式會指定對應state
	aliasName:'count', //'count' === state.count

	//3.一般函式（當你需要使用到 local-state時，避免this混亂使用）
	count(state){
		return state.count + this.localName
	}
})

```

#### vuex 內部取用

不同於 `computed` 可以直接使用 `this` 來指向 `data` ，在 vuex 內部的 `getters` 是需要加上參數才能指向 `state`

```js
getters:{
	getState(state){
		return state.test.map((value)...);
	}
}
```

#### 情境題

**當你需要保留本地的 `computed` 又需要引入多個 `state`時**
你可以使用[[object-rest-spread]] 將透過 `mapState` 取得的`state`延展開

```js
computed:{
	test:function(){
		return this.local;
	},
	...mapState({
		//...
	}),
}
```

**直接存入`data` 或是用`computed`差在哪？**

```js
	//1.直接將`store`內的值，存在`data`內(==不建議使用==)
	data(){
		return{
			local:this.$store.state.test,
		}
	},
	//2.透過`computed,methods`修改`data`的值
	computed:{
		test:function(){
			return this.$store.state.test
		}
	}
```

---

### Getters

當需要針對資料進行處理（像是篩選特定待辦清單）時，以 vue 來說就很理所當然是使用 `computed` ，**但如果這個處理會發生在多個頁面時，為了減少重複計算撰寫，就可以考慮改寫在`getters`作為全域計算。**

`getters` 有兩個參數，分別是**state**以及**getters**（名稱不能更改）

```js
getters:{
	test(state,getters){
		//透過state指向vuex內的state
		return state.obj
		//透過 getters,取得其他getters的結果
		return getters.doneTodos + state.obj
	}
}
```

#### 元件取用

```js
//單一資料取法: 透過 this 去指向vuex
computed:{
	getVuexStore:function(){
		return this.$store.getters.[gettersName]
	}
}
//多筆資料取法: 透過 vuex 內建的 map 系列方法
import {mapGetters} from "vuex"

//有兩種取法
//1.陣列形式，getters為字串形式
computed:mapGetters(['getters1','getters2'])

//2.物件形式：當你想為引入getters 根據 local 再次命名時
computed:mapGetters({
	newName:'getters'
})
```

#### vuex 內部使用

#### 與 `computed` 的差異 -- 傳入其他參數

---

### Mutations

vuex 儲存的不論邏輯、狀態，都是「全域」等級(application-level)，事件也不例外，自己現在所知的全域事件如下：

```
//點擊X按鈕關閉視窗
//呼叫API
//驗證使用者身份
```

在 vuex 是將全域事件存放在 `mutation`，其使用方法如下：

```js
mutations:{
	increase(state,payload){
		//state => vuex 的 state
		state.count+=payload
	}
}
```

當你觸發事件同時需要攜帶參數時，可以透過`payload`傳遞

```js
//component
this.$store.commit('increase',10);


//vuex
increase(state,payload){
		//payload => 10(payload可以是任何形式資料：10,{name:'andy'} ...)
		//state => vuex 的 state
		state.count+=payload
	}
```

#### 元件使用

```js
//單一使用
this.$store.commit('mutationName',payload)

//引入多個vuex方法
import {mapMutations} from "vuex"

methods:{
	//不需另外命名引入
	...mapMutations(['mutationName1','mutationName2','mutationName3'])
	//需另外命名引入
	...mapMutations({add:'mutationName1',...})
}

```

> **特別注意**：`mutation` 只能用來處理同步事情，請勿用來呼叫 API

---

### Actions

1. 避免透過 `actions` 直接修改 `state`內的值，而是需要透過呼叫`mutation`來修改。
2. 可進行非同步處理( asynchronous operations)

**action syntax**

```js
//用來呼叫mutation內的方法
1.context.commit('xxx')

//用來取得getter內的值
2.cotext.getters('xxx')

//取得state內的值，會回傳一個proxy物件
3.context.state('xxx')

//在action內呼叫多個方法
4.context.dispatch('xxx')
```

> 注意:這邊的`context`雖然是一個`object`，但並不等於 vuex 實例，只是能取得相同的方法跟屬性。

#### use [argument destructuring]

當你需要呼叫`commit`很多次時

```js
actions: {
  increment ({ commit }) {
    //increment是mutation的方法
    commit('increment')
  }
}
```

#### Dispatching Actions

1. 透過`store.dispatch("xxx")`來呼叫
2. 如同前面提及，`actions`**可處理非同步的情境**，像是`setTimeout等`

```javascript=
useAsyncDeal(context){
      setTimeout(()=>{
        context.commit("increment");
        console.log("setTimeout excuted");
      },1000)
    }
```

`store.dispatch()`也同樣支援：

1. `payload format`
2. `object style dispatch`

```javascript=
//1.payload format
store.dispatch("xxx",10/{amount:10});

//2.obj style
store.dispatch({
    type:'xxx', //type預設就是要執行的action
    amount:10 //amount預設就是要透過payload傳遞的內榮
});
```

#### Dispatching Actions in Components

你也可各別引入元件中：

1. `this.$store.dispatch("xxx")`
2. 在`methods`中裝入`mapActions`

例如今天某個元件內`methods`使用：

```javascript=
methods: {
    addCount() {
      //1.直接呼叫
      this.$store.dispatch("modifyDirectly");
    },
    //2.使用mapActions整包引入
    //
    //裝進陣列的方法:只能使用原本的名稱
    ...mapActions(["modifyDirectly", "sample1", "sample2"]),
    //裝進物件的方法:可以另外命名
    ...mapActions({useInThere:'modifyDirectly'}),
  },
```

### Composing Actions

除了**能否處理非同步**的差異外，在這進一步說明它的功能。

> store.dispatch can handle Promise returned by the triggered action handler and it also returns Promise

意思是指`store.dispatch()`這個操作以及回傳 `promise`

```js
//透過.then的方式來確保執行順序、內容
store.dispatch("actionA").then(() => {
  // ...
});
```

#### 解析 doc 範例

```js
actions: {
  async actionA ({ commit }) {
    //當payload的getData完成時，呼叫mutation的gotData
    commit('gotData', await getData())
  },
  async actionB ({ dispatch, commit }) {

    await dispatch('actionA') // wait for `actionA` to finish
    commit('gotOtherData', await getOtherData())
  }
}

```

---

### Module

在**module**內使用的`getters`,`mutations`,甚至是`action`的`context.state`，參數都會優先指向模組內的`state`

**實例**  
當實例跟模組的`state`內同時都有`name`的變數值

```js
//主vuex
export default createStore({
  state: {
    name: "Andy",
  },
  getters: {
    getName(state) {
      return state.name;
    },
  },
  mutations: {},
  actions: {},
  modules: {
    map: mapData,
  },
});

//模組
export const mapData = {
  state: {
    name: "Leo",
  },
  //   state: () => {},
  getters: {
    sayHi(state) {
      console.log(state);
      return state.name;
    },
  },
};
```

如同文件所說，會優先指向模組`state`內的`name`

如果要取得實例的`state`，可使用，`context.rootState`

QA:  
什麼情境下會使用`context.rootState`

> By default, actions and mutations are still registered under the global namespace

即便參數會指向模組內，**在模組內的`actions`,`mutations`，可取用預設範圍仍為全域而非模組**怎辦？

解決方式就是在模組內加入：`namespaced: true`

```js
const store = createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    //新增namespaced
    namespaced: true,
  },
});
```

想在模組內取得全域的`action`，你需要：

在該`action`內加入`root:true`

接著將要使用的`action`裝入`handler`函式內

```js
action:{
    someAction:{
        root:true;
        handler(nameSpaceContext,padyload){...8}
    }
}
```

---

## 參考資料

1. [Vuex-doc](https://vuex.vuejs.org/)
