<template>
  <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 g-3">
    <div class="col" v-for="item in library" :key="item.name">
      <library-item-card :item="item" :remove-item-function="Library"/>
    </div>
    <div class="col" v-for="item in item" :key="item.collectionId">
      <library-item-card :item="item"></library-item-card>
    </div>
  </div>
</template>

<script>
import LibraryItemCard from "@/components/LibraryItemCard.vue";
import LibraryCollection from "@/models/LibraryCollection";
import {Book, Movie} from "@/models/Media";

export default {
  name: "LibraryItemList",
  components: {LibraryItemCard},
  props:{
    item: Object
  },

  data() {
    return {
      library: new LibraryCollection()
          .addItem(new Book('1984', 237))
          .addItem(new Movie('Ready Player 1', 122))
          .addItem(new Movie('Avengers: Endgame', 189))
    }
  },

}
</script>

<style scoped>

</style>