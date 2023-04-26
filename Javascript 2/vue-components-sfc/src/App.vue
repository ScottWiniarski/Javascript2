<template>
  <nav class="navbar bg-dark">
    <span class="navbar-brand text-light "><i class="fas fa-shopping-bag ms-4 me-3"></i> CHECK IT OUT!</span>
<!--    <ItunesSearchBar @loop-these-results="consultapi"></ItunesSearchBar>-->
    <ItunesSearchBar @loop-through-collection="consultapi"></ItunesSearchBar>
  </nav>
<!--  {{loaditems}}-->
  <div class="container-fluid mt-3">
    <library-item-list v-for="item of searchResults" v-bind:key="item.trackId"></library-item-list>
<!--    <library-item-list :item="item"></library-item-list>-->
  </div>
  <div id="results"></div>
</template>

<script>
import LibraryItemList from "@/components/LibraryItemList.vue";
import ItunesSearchBar from "@/components/ItunesSearchBar.vue";
import ItunesCollection from "@/models/ItunesCollection";

export default {
  name: 'App',
  components: {
     LibraryItemList,
     ItunesSearchBar,
  },

  data: function(){
    return {
      searchResults: new ItunesCollection(),
    }
  },

  props:{
    item: Object,
  },

  methods:{
    consultapi(item){
      console.log('printed from app.vue' , item);
      this.searchResults = item;
      console.log(this.searchResults);
    },
  },

  // computed: {
  //   loaditems:function(){
  //     console.log(this.searchResults);
  //     return null;
  //   }
  // }
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
