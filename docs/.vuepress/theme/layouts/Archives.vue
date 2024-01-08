<script setup>
import Header from "../template/Header.vue";
</script>

<template>
  <div class="layout">
    <Header />
  </div>
</template>

<style scoped>
.layout {
  width: 80%;
  margin: 0 auto;
}
@media screen and (min-width: 1280px) {
  .layout {
    width: 50%;
  }
}
:deep(p img) {
  width: 100%;
  height: auto;
}
</style>
