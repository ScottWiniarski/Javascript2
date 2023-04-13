<template>
  <shipping-item-details
      :item="item.material"
      @remove-this-item="removeThisItem"
      @edit-this-item="editThisItem"
  ></shipping-item-details>
</template>

<script>
import ShippingItemDetails from "@/components/ShippingItemDetails.vue";
export default {
  name: "ShippingItemTable.vue",
  components:{ShippingItemDetails,},

  props: {
    item: {type: Object}
  },

  methods: {

    removeThisItem(item) {
      console.log('removed from table', item);
      this.$emit('remove-item-from-table', item);
    },

    editThisItem(item, newItem){
      console.log('Edited at ReceivingItemTable', item, newItem)
      this.$emit('edit-from-shipping-table', item, newItem)
    },
  },
}
</script>

<style scoped>

</style>