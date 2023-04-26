<template>
  <div class="container-fluid">
    <form class="d-flex" role="search">
      <input class="form-control me-2" v-model="text" placeholder="Enter any word" aria-label="Search">
      <button class="btn btn-info" type="button" @click="submitTerm">Search</button>
    </form>
    {{loadItunes}}
    <!--    <display-from-array></display-from-array>-->
  </div>
</template>

<script>
import ItunesMedia from "@/data/ItunesMedia.js";
import ItunesCollectionFactory from "@/models/ItunesCollectionFactory.js";
import ItunesCollection from "@/models/ItunesCollection";

export default {
  name: "ItunesSearchBar.vue",

  //Search component is missing the data() section to define text/property model
  data: function(){
    return {
      searchResults: new ItunesCollection(),
    }
  },

  computed:{
    loadItunes: function (){
      console.log('Load Itunes', this.searchResults);
      // for(let i=0;i<this.collection.length;i++){
      //   console.log(this.collection[i]);
      // }
      //console.log(this.searchResults);
      return null;
    }
  },


  methods: {
    submitTerm() {
      console.log(ItunesMedia.search(this.text, 12));

      ItunesMedia.search(this.text, 12)
          .then(response => {
            let results = ItunesCollectionFactory.CreateFromItunesMedia(response.data.results);
            console.log('Results from ItunesCollectionFactory call', results);
            //this.$emit("loop-these-results", results);
            this.searchResults = results;
            this.$emit('loop-through-collection', this.searchResults);
          });


      // console.log(ItunesMedia.search(this.text, 12));
      // let media = ItunesMedia.search(this.text, 12)
      //     .then(response => ItunesCollectionFactory.CreateFromItunesMedia(response.data.results));
      // console.log('Results from ItunesCollectionFactory call', media);
      // this.$emit("loop-these-results", media);
    }
  }
}
</script>

<style scoped>

</style>