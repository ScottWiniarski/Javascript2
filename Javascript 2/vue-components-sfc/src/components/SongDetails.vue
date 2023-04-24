<template>
<div class="song">
  <h3 class="card-title">{{item.trackName}}</h3>
  <p class="card-text">Artist: {{item.artistName}}</p>
  <img src="$({{item.thumbnail}})">
</div>
</template>

<script>
import Song from "@/models/Song.js"
export default {
  name: "SongDetails.vue",
  props:{
    item: {type: Song}
  }
}
</script>

<style scoped>

</style>