<template>
  {{logItems}}
<!--  <div v-for="item in storage" :key="item.resourceId" >-->
    <resource-table :item="storage"></resource-table>
<!--  </div>-->
</template>

<script>
import ResourceCollection from "../models/ResourceCollection";
import MiningCart from "@/models/MiningCart";
import Resource from "@/models/Resource";
import ResourceTable from "@/components/ResourceTable";
import {db} from "@/firebase";
export default {
  name: "MineralHorde.vue",

  components:{
    ResourceTable,
  },

  computed:{
    logItems(){
      this.storage.forEach( item =>{
        console.log('from MineralHorde', item);
        return null;
      })
      return null;
    }
  },

  methods:{
    addResources(){
      let newResource = new MiningCart( new Resource('Gold', 50));
      db.collection(Resource.collectionName)
      .add(newResource.toFirestore())
    }
  },

  /*data() {
    return {
      storage: new ResourceCollection()
          .addItem(new MiningCart(new Resource(1,'Gold', 50)))
          .addItem(new MiningCart(new Resource(2,'Silver', 40)))
          .addItem(new MiningCart(new Resource(3,'Coal', 25)))
    }
  },*/
  data() {
    return {
      storage: new ResourceCollection()
          .addItem(new MiningCart(new Resource('Gold', 50)))
          .addItem(new MiningCart(new Resource('Silver', 40)))
          .addItem(new MiningCart(new Resource('Coal', 25)))
    }
  }
}
</script>

<style scoped>

</style>