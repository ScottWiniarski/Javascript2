<template>
<div class="container-fluid d-flex align-items-center justify-content-center" >
  <div class="table table-striped table-hover table-bordered table-light">
    <thead>
    <tr>
      <th scope="row">Item Name</th>
      <th scope="row">Item Quantity</th>
    </tr>
    </thead>
    <tbody scope="row" v-for="item in items" :key="item.id">
      <resource-details :item="item" @item-total="dailyTotal.valueOf" ></resource-details>

    </tbody>
  </div>
</div>
</template>

<script>
import ResourceDetails from "@/components/ResourceDetails";

export default {
  name: "ResourceTable.vue",
  components:{
    ResourceDetails,
  },

  props:{
    items: Array,
  },

  computed:{

    dailyTotal(itemTotal){
      let total = 0;
      let historyTotal = 0;

      if(itemTotal > total && itemTotal > historyTotal) {
        total = itemTotal;
        historyTotal = itemTotal;
      }
      else if(itemTotal > total && itemTotal < historyTotal){
        return null;
      }
      total += itemTotal;
      console.log(total);
      return null;
    }
  },

  data(){
    return{
      pointTotal: []
    }
  },


  // computed:{objectInput()
  //   { console.log('from ResourceTable', (this.items))
  //     return null;
  //   }},
}
</script>

<style scoped>

</style>