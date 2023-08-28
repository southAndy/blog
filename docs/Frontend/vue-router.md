---
title: vue-router
date: "2023-04-18"
---

## Router-basic （基本概念）

在 vue 內建兩個跟切換路由相關的元件，分別是：

1. router-link：功能等於 a-tag
2. router-view ：顯示不同路由的對應內容

### router-view

### router-link

#### 不使用 a-tag 改使用 router-link 有什麼好處？

根據[官方文件](https://next.router.vuejs.org/guide/#html)的說明：

> This allows Vue Router to change the URL without reloading the page

1. 較好的效能及使用者體驗：使用 router-link 不會重新載入頁面，這樣的好處是（減少 request 的次數，加速畫面載入）
2. 節省頁面的維護成本：假設你有多個相似功能的頁面，透過動態路切換參數，而不需要寫多個類似的路由配置
3. 更彈性、多選項的配置設定：例如可以加入函式呼叫、正則表達等方式。

---

## Add router into Vue project （將路由配置引入專案）

首先你要建立一個路由的實例

```js
//在這寫網站所需要的路由配置
const routes = [{}];

const router = vueCreateRouter({
  history,
  routes,
});

export default router;
```

並將它引入專案中

```js
import router from "@/router";
app.use(router);
```

---

## Router-lifecycle（完整的路由觸發順序）

1. 觸發路由切換
2. 離開當前頁面，觸發元件內的 beforeRouteLeave()
3. 進入新路由前，觸發全域設定的 beforeEach()
4. 進入新路由前，觸發路由物件設定的 beforeEnter()
5. 尚未進入元件時，觸發元件內的 beforeRouteEnter()
6. 路由與搭配的元件已被解析，觸發全域設定的 beforeResolve()
7. 路由跳轉結束後，觸發全域的 afterEach()
8. 元件本身的 life cycle，beforeCreate() -> create() -> beforeMounted() -> mounted()
9. beforeRouteEnter() 內的 next() 回乎函式
10. beforeRouteUpdate() 當路由更新時

---

## Dynamic Router（動態路由）

### 如何實現動態：

假設今天分別有 A,B 兩個使用者在進行登入，登入成功之後都會進到同一個畫面，路由為：`/user ` ，所以要識別登入者可這樣寫：

```js
path: /user/A
path: /user/B
```

而所謂的動態路由就是將固定的路由，改成以動態參數傳入，我自己會用**模板字樣**去想像

```js
path:/user/${parameter} //parameter 可以傳入 A,B
```

實現的方法就是在路由後方加上 `:[name]`

```js
{
  path: "/user/:userName";
}
```

### 動態路由下的生命週期

可被反覆使用，其生命週期**不需反覆創造、銷毀，而能重複使用**。

---

## About Router instance （認識路由實例）

### Route Meta Fields

當你需要幫路由設定添加一些資訊（如權限資訊），可以將資訊新增於 meta 內，基本寫法如下：

```javascript=
{
    path: "/Protected",
    name: "Protected",
    component: () => import("../views/Protected.vue"),
    meta: {
      requiresAuth: true,
      permission:()=>{} //執行權限驗證
    },
  },
```

### `$router`物件內含的屬性

1. `$router.query`
   如果網址組成包含`query`則有對應的`$router.query`可使用
2. `$router.hash`

### Data Fetch

當你載入使用者畫面前，要先從 server 抓取`data`，有兩種方法：

1. fetch before Navigation

2. fetch after Navigation
   先完成轉移路由，在元件生命週期時(ex:`created`)執行`fetch`，建議加入 loading 效果

---

### router props

1.**object mode**

當你要傳入的是一個固定的值，也可以將`props`以物件型別輸入

```javascript=
const router =[
    {
    path: "/Login/:id",
    name: "Login",
    props: {
        id:"Andy",
    },
  },
]
//就會固定顯示Andy
```

2. **fnuction mode**

也可以寫一個 function 回傳`route`物件內的值

```javascript=
const router =[
    {
    path: "/Login/:id",
    name: "Login",
    props: (route) => ({ id: route.params.id }),
    component: () => import("../views/Login.vue"),
  },
]
```

或是修改`params`值的型別

```javascript=
 props: (route) => {
      console.log("hello", route.params.id);

      //~ 可進行轉換型別
      console.log(Number(route.params.id) + 1);
      // return { id: route.params.id };
    },
```

---

## different history mode （歷史模式）

### Hash Mode

```javascript=
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    //...
  ],
})
```

**運作原理：**
利用[window 的`hasChange()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/hashchange_event)事件去偵測網址`#`後面的變更，並透過`window.location.hash`取得網址。

**問題：**

1. hash 值(#)以及後面的內容，在發出 HTTP 請求時，**不會被包含在內**，因此在 hash 模式下，不會持續發出 HTTP 請求，而是切換元件。
2. 但 hash mode 不利於 SEO 搜尋
3. 似乎還會影響爬蟲
4. [會與 url's anchor(#)功能產生衝突](https://blog.johnsonlu.org/using-vue-router-history-mode/)

---

### HTML5 Mode

```javascript=
const router = createRouter({
  history: createWebHistory(),
  routes: [
    //...
  ],
})
```

根據 router 文件：

> The HTML5 mode is created with createWebHistory() and is the recommended mode:

總之，官方推薦使用這個模式。

**運作原理**

> 透過 HTML5 history API 裏的 pushState() 和 replaceState() 方法，以及瀏覽器的 popstate 事件來實現。當 URL 有變，就會用**window.location.pathname 來取出路由內容，再在建構 router 物件時，利用 route 的物件把該 pathname 值對應到指定的元件。** 過程不會重刷頁面。
> 過程例如使用 pushState() 更換 URL、存入瀏覽記錄等。

**問題：**

1. **瀏覽器兼容性問題**
   由於是根據`Window: popstate event`，會需要注意**各家瀏覽器兼容性**的問題，mdn 文件就有寫到：

   > Browsers tend to handle the popstate event differently on page load. Chrome (prior to v34) and Safari always emit a popstate event on page load, but Firefox doesn't.

2. **找不到路由時，會觸發 404**
   History 模式會觸發 HTTP 請求。因為 Vue 使用了以上提到的 HTML history API，而 SPA 沒有後端的情境下，當 HTTP 請求

3. SPA 的路由原理
   ![](https://i.imgur.com/YVZtOMS.png)

**解決方法：**

> To fix the issue, all you need to do is add a simple catch-all fallback route to your server. If the URL doesn't match any static assets, it should serve the same index.html page that your app lives in.

為了避免 404 的觸發：
將路由預設統一先指向 index.html，再由 index.html 內的 router 去控制

### reference

1. https://ithelp.ithome.com.tw/articles/10277447?sc=pt
2. https://juejin.cn/post/6867875626611654663#heading-2
3. https://zhuanlan.zhihu.com/p/116023681

## Navigation guard （路由守衛）

- 提供全域、路由、元件三種
- 參數：

  - to:即將進入的路由
  - from:從何處進入的路由
  - ==next():== 繼續往下執行的 callback

- 回傳值(optional):
  - `false`:會取消路由切換
  - 無回傳值,`undefined`, `true` 都會執行路由
  - route location:導向指定的位置,ex:{name:'home'},

---

## router-guard

有分為全域及單一路由的方法

### `beforeEach()`

- 參數：to,from,next
- 進入每個路由前都會先經過
- ==適合用於身份驗證後跳轉頁面==

```javascript=
router.beforeEach((to,from)=>{
    //取消導向，要渲染的元件不會出現
    return false;
})
```

### `beforeResolve()`

- 參數: to,from,next
- 類似`beforeEach`
- 但是執行順序晚於`beforeEach()` --(當元件內的 NVG,async router component 解析時)

### `AfterEach()`

- 參數: to,from
- 路由跳轉結束時觸發，==不影響路由的跳轉==
- 第三個參數：failure，表示路由跳轉失敗

### [實作](https://stackblitz.com/edit/vue-4xzodl?file=src%2Frouter%2Findex.js)

## Per-Route-Guard

- beforeEnter()
- 在獨特的路由物件中設定
- 只有跳轉**此頁面**才會觸發，同一個頁面帶入不同`params`,`query`,`hash`時不會觸發

```javascript=
const routes = [
    {
        path: "/users/:id",
        component: UserDetails,
        beforeEnter: (to, from) => {
            // 拒絕導向
            return false;
        }
    }
]
```

或是可以傳入一個陣列

## In-component

- 在各`.vue`檔案中設定
-

### options API 寫法

- `beforeRouteEnter()`：可以取用`this`
- `beforeRouteUpdate()`：
- `beforeRouteLeave()`：

---

## Transitions

**作用**
作為提供進出路由的容器，內部可裝：

1. 元素 tag ex:`<div>`
2. component

**不同路由客制化效果**
可藉由在不同路由內的`meta`設定

```htmlmixed=
<!-- 是全域元件，不需要特別引入 -->
<transition></transition>
```

要達成動態導向(router transition)，在**vue3**要搭配`v-slot API`來達成

```htmlmixed=
<router-view v-slot="{ Component }">
    <transition>
      <component is="Component">           </component>
    </transition>
  </router-view>
```

**參數**

1. name:要添加在 transition 上的 class name
2. mode="out-in"
   可以理解順序為：out > in
   out:當前的元件優先切換
   in:新的進入

**內建呈現的 css 動畫名**
這裡的 className 就是上方要加在`name`屬性的 class，舉例來說今天 className=slide：

```css=
.slide-enter-active{}
.slide-leave-active{}
.slide-enter-from{}
.slide-leave-to{}
```

## Lazy Loading Routes

靜態引入：

```javascript=
component:{default:Home};
```

動態引入（**推薦使用**）：

相對於靜態引入的優勢，較不會減緩網站 loading 速度（只有當需要使用時，才會被引入）

```javascript=
component:()=>import("../views/Sample.vue");
```

**（注意）**：不要使用 async componet

**QA**:
bundler / chunks 是什麼

### 在 NETWORK 上替路由加入識別名稱

當你的路由越來越多，自訂名稱以提升識別度

使用方法

```javascript=
component:()=>import(/*在network名稱*/ "../views/Sample.vue");
```

<br/>
使用前
![](https://i.imgur.com/wxfZT8Y.png)
使用後
![](https://i.imgur.com/iKREtni.png)

## Scroll Behavior

寫在 router instance 內，提供`scrollBehavior`這個函式

==只能在有支援**history.pushState**的瀏覽器使用==

**參數**
(to,from,savePostion)
其中 savePosition 代表當這是 popstate navtigation 時

```javascript=
const router = createRouter({
  history: createWebHashHistory(),
  routes: [...],
  scrollBehavior (to, from, savedPosition) {
    // return desired position
  }
})
```

1. `el`:可傳入 css 選擇器或是 DOM 元素
2. `top/left`:有指定元素後，會根據元素作為中心移動
3. behavior:'smooth'

### Delaying the scroll

---

## Extending RouterLink

## Dynamic Routing

動態路由主要藉由兩種方法達成：

1. router.removeRoute()
2. router.addRoute()

如果你要切換的是已存在的路由，你會需要手動透過`router.push/replace()`

---

## 尚未整理

### `this.$router` 跟 `this.$route` 差在哪？

1. $router：提供轉換路由的方法如，如 replace, go, push 等
2. $route：提供檢視當前路由內的各種資訊，如有無 meta 設定

```js
//optionAPI

this.$router;
this.$route;

//compositionAPI

import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
```

https://router.vuejs.org/guide/advanced/composition-api.html#accessing-the-router-and-current-route-inside-setup

### `go` 跟 `push` 兩個方法差在哪？

### Passing Props to Route Components

```javascript=
<template>
  <div class="user">hi there {{ this.$route.params.id }}
  </div>
</template>
```

我們已知透過`this.$routeａ.params`可以取得`params`的值，然而我們也可透過`props`來儲存這個值

```javascript=

  name: "Login",
  props: ["id"],
  data() {
    return {
      userName: this.id,
    };
  },
};
```

要注意的是：
**新增到 props 內的名稱**要跟`params`的名稱相同

當你在 router 內將路由的`prop`設定，設為`true`時：

```javascript=
const router = [
{
    path:"//local",
    name:"Content",
    props:true,
    component:Cool,
}
]
```

此時，**`route.params`被視為是元件的`props`**(看範例)

### params, query 的使用時機

本質上，兩者的行為有所不同，但還是可以間單進一步區分兩者的使用時機：

1. query：參數會被保留在 url 上，適合用於須保留給使用者的功能，如保留分頁、排序、搜尋關鍵字等類似的行為時，製作分享功能時參數就可考慮用這個
2. params：重整就會消失，自己認為是這個參數隱私性較高，會用於動態路由、資源或是身份辨識。
