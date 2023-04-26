<template>
<!--  Everything so far is coming in as an array so we have to loop until we can see only one item at a time-->
  <div v-for="sItem in item" :key="sItem.trackId">
    <div class="card h-100">
      <div class="card-body">
<!--        this is the tricky part. itemCardComponent checks for the Model(Song, Movie, Book) type, but we still have to assign something to our generic component to render our item card-->
<!--        :is checks for the item type and :item assigns the result of the check to our card component-->
          <component :is="itemCardComponent(sItem)" :item="sItem"/>
        </div>
      <div class="card-footer d-flex justify-content-end">
        <button v-if="item.isAvailable && item.checkOut && item.isAvailable()" class="btn btn-outline-success" @click="item.checkOut()">Check Out</button>
        <button v-else-if="item.checkIn" class="btn btn-outline-warning" @click="item.checkIn()">Check In</button>
        <button class="btn btn-danger" @click="item.remove(item)">Delete</button>
      </div>
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
    // Notice if you can spot the differences here.
    itemCardComponent(item) {
      console.log(item.kind)
      return item.kind + 'Details';
    }
  },

  computed: {
    loadFunction: function (){
      console.log("In card component "+this.item);
      return null;
    }
  }

}
</script>

<style scoped>

</style>