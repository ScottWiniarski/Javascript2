<template>
  <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 g-3">
<!--    <div class="col" v-for="item in library" :key="item.name">-->
<!--      <library-item-card :item="item" :remove-item-function="Library"/>-->
<!--    </div>-->
    {{loadItunes}}
    <!--   Here is the a for loop that takes that collection currently loaded into the prop named :item and then iterates through it -->
    <div v-for="singleitem in item" :key="singleitem.trackId">
      <!--   Again I render the new component while assigning the value of the :item with the current item within the loop-->
      <library-item-card :item="singleitem" />
    </div>
  </div>
</template>

<script>
import LibraryItemCard from "@/components/LibraryItemCard.vue";
import LibraryCollection from "@/models/LibraryCollection";
import {Book,Movie} from "@/models/Media";

export default {
  name: "LibraryItemList",
  components: {LibraryItemCard},
  props:{
    item: Object,
    id: Number,
  },

  computed: {
    loadItunes: function (){
      console.log("List component "+this.item)
      return null
    }
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