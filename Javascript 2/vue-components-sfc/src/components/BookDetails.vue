<template>
  <div class="book">
    <h3 class="card-title">{{ item.title }}</h3>
    <p class="card-text">Pages: {{ item.pages }}</p>
  </div>
</template>

<script>
import {Book} from "@/models/Media";
export default {
  name: "BookDetails.vue",
  props:{
    item: {type: Book}
  },
}
</script>

<style scoped>

</style>