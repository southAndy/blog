<script setup></script>

<template>
  <header>
    <div class="logo">
      <router-link to="/">Andy Walking</router-link>
    </div>
    <nav>
      <router-link to="/archives">文章列表</router-link>
      <router-link to="/about">關於我</router-link>
    </nav>
  </header>
</template>

<style scoped>
a {
  color: #000;
  text-decoration: none;
  font-weight: 400;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid grey;
  padding: 10px 5px;
}
.logo {
  font-size: 24px;
  font-weight: bold;
}
nav a:focus {
  color: #00477d;
  font-weight: 500;
}
</style>
