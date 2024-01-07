<script lang="ts" setup></script>

<template>
  <header>
    <nav>
      <router-link class="logo" to="/">Andy Walking</router-link>
      <router-link to="/archives">文章列表</router-link>
      <router-link to="/categories">分類</router-link>
      <router-link to="/about">關於我</router-link>
    </nav>
  </header>
</template>

<style scoped>
a {
  color: #000;
  text-decoration: none;
}
header {
  display: flex;
  justify-content: center;
  border-bottom: 1px solid grey;
  padding: 10px 0;
}
.logo {
  font-size: 16px;
  font-weight: bold;
}
</style>
