<template>
  <div class="card h-100">
    <div class="card-body">
      <component :is="itemCardComponent(item)" :item="item"/>
    </div>
    <div class="card-footer d-flex justify-content-end">
      <button v-if="item.isAvailable && item.checkOut && item.isAvailable()" class="btn btn-outline-success" @click="item.checkOut()">Check Out</button>
      <button v-else-if="item.checkIn" class="btn btn-outline-warning" @click="item.checkIn()">Check In</button>
      <button class="btn btn-danger" @click="item.remove(item)">Delete</button>
    </div>
  </div>
</template>

<script>
import BookDetails from "@/components/BookDetails.vue";
import MovieDetails from "@/components/MovieDetails.vue";
import SongDetails from "@/components/SongDetails.vue";
import FeatureMovieDetails from "@/components/FeatureMovieDetails.vue";
export default {
  name: "LibraryItemCard.vue",
  components: {MovieDetails, BookDetails, SongDetails, FeatureMovieDetails},
  props: {
    item: {type: Object},
  },

  methods: {
    itemCardComponent(item) {
      return item.constructor.type + 'Details';
    }
  },

  computed: {
    loadFunction: function (){
      console.log(this.item);
      return null;
    }
  }

}
</script>

<style scoped>

</style>