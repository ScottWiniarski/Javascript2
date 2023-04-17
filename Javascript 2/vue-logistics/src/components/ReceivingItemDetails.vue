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
      <edit-modal-component
          title="Edit Item"
          button-text="Edit"
          @edit-this-table-item="editThisItem"
          :item="item"
      ></edit-modal-component>
    </td>
  </tr>
</template>

<script>
import {ReceivingItem} from "@/models/Material";
import EditModalComponent from "@/components/EditModalComponent.vue";
export default {
  name: "ReceivingItemDetails.vue",
  components:{EditModalComponent},
  props: {
    item: {type: ReceivingItem}
  },

  methods: {
    removeThisItem() {
      //console.log(item);
      this.$emit('remove-this-item', this.item);
    },

    editThisItem(item, newItem){
      console.log(item, newItem);
      this.$emit('edit-this-item', item, newItem);
    }
  },
}
</script>

<style scoped>

</style>