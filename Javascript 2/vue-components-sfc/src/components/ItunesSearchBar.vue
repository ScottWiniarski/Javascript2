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
import ItunesMedia from "@/data/ItunesMedia.js";
import ItunesCollectionFactory from "@/models/ItunesCollectionFactory.js";
export default {
  name: "ItunesSearchBar.vue",
  methods:{
    submitTerm(){
      console.log(ItunesMedia.search(this.text, 12));
      let media =ItunesMedia.search(this.text, 12)
          .then(response => ItunesCollectionFactory.CreateFromItunesMedia(response.data.results));
      console.log('Results from ItunesCollectionFactory call', media);
      this.$emit("loop-these-results", media);
    }
  }
}
</script>

<style scoped>

</style>