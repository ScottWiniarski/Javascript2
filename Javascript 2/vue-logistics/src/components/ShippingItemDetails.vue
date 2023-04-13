<template>
  <tr>
    <td>
      {{ item.title }}
    </td>
    <td>
      {{ item.productId }}
    </td>
    <td>
      {{ item.status }}
    </td>
    <td>
      {{ item.priority }}
    </td>
    <td>
      <button class="btn btn-info" v-on:click="removeThisItem"><i class="fas fa-minus-circle"></i> Remove</button>
    </td>
  </tr>
</template>

<script>
import {ShippingItem} from "@/models/Material";
export default {
  name: "ShippingItemDetails.vue",

  props: {
    item: {type: ShippingItem}
  },

  methods: {
    removeThisItem(item) {
      //console.log(item);
      this.$emit('remove-this-item', item);
    },

    editThisItem(item){
      this.$emit('edit-this-item', item);
    }
  },
}
</script>

<style scoped>

</style>