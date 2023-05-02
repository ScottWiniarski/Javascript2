<template>
  {{logItems}}
<!--  <div v-for="item in storage" :key="item.resourceId" >-->
    <resource-table :item="storage"></resource-table>
<!--  </div>-->

</template>

<script>
import ResourceCollection from "../models/ResourceCollection";
import MiningCart from "@/models/MiningCart";
import {Resource} from "@/models/Resource";
import ResourceTable from "@/components/ResourceTable";
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

  data() {
    return {
      storage: new ResourceCollection()
          .addItem(new MiningCart(new Resource(1,'Gold', 50)))
          .addItem(new MiningCart(new Resource(2,'Silver', 40)))
          .addItem(new MiningCart(new Resource(3,'Coal', 25)))
    }
  }
}
</script>

<style scoped>

</style>