<template>
  <receiving-item-details
      :item="item.material"
      @remove-this-item="removeThisItem"
      @edit-this-item="editThisItem"
  />
</template>

<script>
import ReceivingItemDetails from "@/components/ReceivingItemDetails.vue";
export default {
  name: "ReceivingItemTable.vue",
  components: {ReceivingItemDetails},
  props: {
    item: {type: Object}
  },

  methods: {

    removeThisItem(item) {
      //console.log('removed from table', item);
      this.$emit('remove-item-from-table', item);
    },

    editThisItem(item, newItem){
      console.log('Edited at ReceivingItemTable', item, newItem)
      this.$emit('edit-from-receiving-table', item, newItem)
    },
  },
}
</script>

<style scoped>

</style>