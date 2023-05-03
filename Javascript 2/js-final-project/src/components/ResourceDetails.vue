<template>
<div class="container">
  {{signalItem}}
  <td>
    {{item.resourceName}}
  </td>
  <td>
    <form class="form-check-input">
      <button type="button" class="btn btn-secondary" @click="increment"><i class="fa-solid fa-plus"></i>Add</button>
      {{number}}
      <button type="button" class="btn btn-secondary" @click="decrement"><i class="fa-solid fa-minus"></i>Diminish</button>
    </form>
  </td>
</div>
</template>

<script>
import {Resource} from "@/models/Resource";

export default {
  name: "ResourceDetails.vue",

  props:{
    item: Resource
  },

  computed:{
    signalItem(){
      console.log('from ResourceDetails', this.item);
      return null;
    }
  },
}
</script>

<style scoped>

</style>