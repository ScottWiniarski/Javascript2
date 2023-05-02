<template>
<div class="container-fluid">
  <div class="table table-striped table-hover">
    <thead>
    <tr>
      <th scope="col">Item Name</th>
      <th scope="col">Item Quantity</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      {{objectInput}}
      <th scope="row"></th>
      <td v-for="it in item" :key="it.constructor.resourceId">
        <resource-details :item="it" ></resource-details>
      </td>
      <td>
        <form class="form-check-input">
          <button type="button" class="btn btn-secondary" @click="increment"><i class="fa-solid fa-plus"></i>Add</button>
          {{number}}
          <button type="button" class="btn btn-secondary" @click="decrement"><i class="fa-solid fa-minus"></i>Diminish</button>
        </form>
      </td>
    </tr>
    </tbody>
  </div>
</div>
</template>

<script>
import ResourceDetails from "@/components/ResourceDetails";
 import MiningCart from "@/models/MiningCart";
//import {Resource} from "@/models/Resource";

export default {
  name: "ResourceTable.vue",
  components:{
    ResourceDetails,
  },

  props:{
    item: MiningCart,
  },

  computed:{objectInput()
    { console.log('from ResourceTable', JSON.parse(JSON.stringify(this.item)))
      return null;
    }},

  data(){
    return {
      number: 0,
    }
  },
  methods:{
    increment(){
      this.number++;
    },
    decrement(){
      if(this.number === 0) return
      this.number--;
    },
  }
}
</script>

<style scoped>

</style>