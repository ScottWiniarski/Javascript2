<template>
<div class="container-fluid d-flex align-items-center justify-content-center" >
  <div class="table table-striped table-hover">
    <thead>
    <tr>
      <th scope="row">Item Name</th>
      <th scope="row">Item Quantity</th>
    </tr>
    </thead>
    <tbody>
    <tr scope="row" v-for="item in items" :key="item.id">
        <resource-details :item="item" ></resource-details>

    </tr>
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

  // computed:{objectInput()
  //   { console.log('from ResourceTable', (this.items))
  //     return null;
  //   }},
}
</script>

<style scoped>

</style>