<template>
<!--  {{ logItems }}-->
  <div class="container-fluid d-flex align-items-center justify-content-center" >
<!--    <button @click="notifyMiner"></button>-->
    <resource-table :items="storage"></resource-table>
  </div>

<!--  <button class="btn btn-secondary" @click="addResources"> Click </button>-->
</template>

<script>
import MiningCart from "@/models/MiningCart";
import Resource from "@/models/Resource";
import ResourceTable from "@/components/ResourceTable";
import {db} from "@/firebase";

export default {
  name: "MineralHorde.vue",

  components: {
    ResourceTable,
  },

  // props:{
  //   testMiner: Object,
  // },

  methods: {

    // notifyMiner(){
    //   console.log(this.testMiner)
    // },

    loadResources() {
      db.collection(Resource.collectionName)
          .withConverter(Resource)
          .onSnapshot(snapshot => {
            this.storage = [];

            snapshot.forEach(item => {
              this.storage.push(item.data());
            })
          })
    },

    addResources() {
      let newResource = new MiningCart(new Resource('Plutonium', 100));
      // console.log(newResource);
      db.collection(Resource.collectionName)
          .add(newResource.toFirestore())
    }
  },

  mounted: function () {
    this.loadResources();
  },
  data() {
    return {
      storage: [],
    }
  }
}
</script>

<style scoped>

</style>