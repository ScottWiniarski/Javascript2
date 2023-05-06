<template>
<div class="container-fluid">
<!--  {{signalItem}}-->
  <tr>
    <th scope="row">
      {{item.resourceName}}
    </th>
    |
    <th scope="row">

      <button type="button" class="btn btn-secondary"  @click="increment"><i class="fa-solid fa-minus"></i>plus</button>
      {{number}}
      <button type="button" class="btn btn-secondary" @click="decrement"><i class="fa-solid fa-minus"></i>minus</button>

    </th>
  </tr>

</div>
</template>

<script>
import Resource from "@/models/Resource";

export default {
  name: "ResourceDetails.vue",

  props:{
    item: Resource
  },

  // computed:{
  //   signalItem(){
  //     console.log('from ResourceDetails', this.item);
  //     return null;
  //   }
  // },

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
/*id="'sli' + {{item.id}} + 'plus'"*/

</style>