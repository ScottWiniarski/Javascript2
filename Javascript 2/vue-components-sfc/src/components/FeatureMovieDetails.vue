<template>
  <div class="feature-movie">
    <h3 class="card-title">{{item.trackName}}</h3>
    <p class="card-text">Director(s): {{item.artistName}}</p>
    <img src="${{item.artworkUrl100}}">
    <p class="card-text">Summary: {{item.longDescription}}</p>
  </div>
</template>

<script>
import Movie from "@/models/Movie.js"
export default {
  name: "FeatureMovie.vue",
  props:{
    item: {type: Movie}
  },
}
</script>

<style scoped>

</style>