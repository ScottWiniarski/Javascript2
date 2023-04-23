<template>
  <nav class="navbar bg-dark">
    <span class="navbar-brand text-light "><i class="fas fa-shopping-bag ms-4 me-3"></i> CHECK IT OUT!</span>
    <ItunesSearchBar></ItunesSearchBar>
  </nav>
  <DisplayFromArray></DisplayFromArray>
  <div class="container-fluid mt-3">
    <library-item-list @search-item="searchForItem"></library-item-list>
  </div>
  <div id="results"></div>
<!--  &lt;!&ndash; BS4 &ndash;&gt;-->
<!--  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>-->
<!--  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>-->
<!--  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>-->

<!--  &lt;!&ndash; Vue Libraries/Plugins &ndash;&gt;-->
<!--  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>-->
<!--  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>-->
</template>

<script>
import LibraryItemList from "@/components/LibraryItemList.vue";
import ItunesSearchBar from "@/components/ItunesSearchBar.vue";
import DisplayFromArray from '@/components/DisplayFromArray.vue';

export default {
  name: 'App',
  components: {
    LibraryItemList, ItunesSearchBar, DisplayFromArray
  },
  props:{
    item: Object,
  },

  methods:{
    searchForItem(item){
      console.log(item);
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
