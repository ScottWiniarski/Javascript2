<template>
  <div class="movie">
    <h3 class="card-title">{{ item.title }}</h3>
    <p class="card-text">Runtime: {{ item.runtime }}</p>
  </div>
</template>

<script>
import {Movie} from "@/models/Media"
export default {
  name: "MovieDetails.vue",
  props: {
    item: {type: Movie}
  },
}
</script>

<style scoped>

</style>