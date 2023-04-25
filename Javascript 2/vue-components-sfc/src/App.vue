<template>
  <nav class="navbar bg-dark">
    <span class="navbar-brand text-light "><i class="fas fa-shopping-bag ms-4 me-3"></i> CHECK IT OUT!</span>
    <ItunesSearchBar @loop-these-results="consultapi"></ItunesSearchBar>
  </nav>
  <div class="container-fluid mt-3">
    <library-item-list></library-item-list>
<!--    <library-item-list :item="item" :key="item.collectionId"></library-item-list>-->
  </div>
  <div id="results"></div>
</template>

<script>
import LibraryItemList from "@/components/LibraryItemList.vue";
import ItunesSearchBar from "@/components/ItunesSearchBar.vue";

export default {
  name: 'App',
  components: {
    LibraryItemList, ItunesSearchBar,
  },
  props:{
    item: Object,
  },

  methods:{
    searchForItem(item){
      console.log(item);
    },
    consultapi(item){
      console.log(item);
      // this.inject?
    },
  },
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
