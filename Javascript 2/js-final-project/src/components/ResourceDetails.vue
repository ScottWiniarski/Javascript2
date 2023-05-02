<template>
<div class="container">
  {{signalItem}}
  <td>
    {{item.resourceName}}
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