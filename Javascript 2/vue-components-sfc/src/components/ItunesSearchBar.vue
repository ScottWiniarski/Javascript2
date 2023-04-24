<template>
  <div class="container-fluid">
    <form class="d-flex" role="search">
      <input class="form-control me-2" v-model="text" placeholder="Enter any word" aria-label="Search">
      <button class="btn btn-info" type="button" @click="submitTerm">Search</button>
    </form>
<!--    <display-from-array></display-from-array>-->
  </div>
</template>

<script>
import  ItunesMedia from "@/data/ItunesMedia.js"
//import DisplayFromArray from "@/components/DisplayFromArray.vue"
import ItunesCollectionFactory from "@/models/ItunesCollectionFactory.js"
export default {
  name: "ItunesSearchBar.vue",
  /*components:{DisplayFromArray},*/
  /*created(){
    console.log(new ItunesCollectionFactory.CreateFromItunesMedia(ItunesMedia.search(this.text, 12)));
  },*/
  methods:{
    submitTerm(){
      //console.log(this.text);
      //this.$emit('search-this' ,this.text);
      console.log(ItunesMedia.search(this.text, 12));
      //let media = new ItunesCollectionFactory.CreateFromItunesMedia(ItunesMedia.search(this.text, 12));

    }
  }
}
</script>

<style scoped>

</style>