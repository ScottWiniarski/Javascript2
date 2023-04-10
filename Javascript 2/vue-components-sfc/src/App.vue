<template>
  <nav class="navbar bg-dark">
    <span class="navbar-brand text-light "><i class="fas fa-shopping-bag ms-4 me-3"></i> CHECK IT OUT!</span>
  </nav>
  <div class="container-fluid mt-3">
    <library-item-list></library-item-list>
  </div>
</template>

<script>
import LibraryItemList from "@/components/LibraryItemList.vue";

export default {
  name: 'App',
  components: {
    LibraryItemList,
  }
}
</script>

<style lang="scss">
$primary: #2c3e50;
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $primary;
  margin-top: 60px;
}
</style>
