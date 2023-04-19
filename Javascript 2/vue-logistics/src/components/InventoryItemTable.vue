<template>
  <div class="container-md">
    <h3 class="text-center"> Full Inventory </h3>
    <table class="table table-striped table-hover table-bordered">
      <thead>
      <tr>
        <th scope="col">Product Name</th>
        <th scope="col">Product ID</th>
        <th scope="col">Product Status</th>
        <th scope="col">Product Priority</th>
      </tr>
      </thead>
      <tbody>
<!--      <inventory-item-table-row v-for="item in inventory" :item="item"/>-->
      <hr>
      <h3 class="text-center">Receiving Table</h3>
      <uni-modal-foundation
          :item="newReceivingItem"

          title="Receiving"
          button-text="Add Item"
          @add-item="addToTable"
      ></uni-modal-foundation>
      <receiving-item-table
          v-for="item in returnReceivingItem"
          :key="item.material"
          :item="item"
          @remove-item-from-table="removeFromTable"
          @edit-from-receiving-table="editTableItem"
      ></receiving-item-table>
      <hr>
      <h3 class="text-center">Shipping Table</h3>
      <uni-modal-foundation
          :item="newShippingItem"
          title="Shipping"
          button-text="Add Item"
          @add-item="addToTable"
      ></uni-modal-foundation>
      <shipping-item-table
          v-for="item in returnShippingItem"
          :key="item.material"
          :item="item"
          @remove-item-from-table="removeFromTable"
          @edit-from-receiving-table="editTableItem"
      ></shipping-item-table>
      </tbody>
    </table>
  </div>
</template>

<script>
import ReceivingItemTable from  "@/components/ReceivingItemTable.vue";
import ShippingItemTable from "@/components/ShippingItemTable.vue";
import UniModalFoundation from '@/components/UniModalFoundation.vue';
import InventoryItem from "@/models/InventoryItem.js";
import {ReceivingItem, ShippingItem} from "@/models/Material.js";

export default {
  name: "InventoryItemTable.vue",
  components: {ReceivingItemTable, ShippingItemTable, UniModalFoundation},

  data() {
    const STATUSES = {PENDING: 'Pending', SHIPPED: 'Shipped', RECEIVED: 'Received'}
    const PRIORITIES = {LOW: 'Low', MEDIUM: 'Medium', HIGH: 'High', ABSOLUTE: 'Absolute'}

    return {
      inventory: [
        new InventoryItem(new ReceivingItem('Iron Ore', 231093, STATUSES.PENDING, PRIORITIES.HIGH)),
        new InventoryItem(new ReceivingItem('Coal', 837283, STATUSES.RECEIVED, PRIORITIES.LOW)),
        new InventoryItem(new ReceivingItem('Chromium', 238883, STATUSES.RECEIVED, PRIORITIES.MEDIUM)),
        new InventoryItem(new ShippingItem('Steel I-Beam', 323810, STATUSES.SHIPPED, PRIORITIES.LOW)),
        new InventoryItem(new ShippingItem('Cutting Tips', 102383, STATUSES.SHIPPED, PRIORITIES.LOW)),
        new InventoryItem(new ShippingItem('Pressure Valves', 110392, STATUSES.PENDING, PRIORITIES.MEDIUM)),
        //new ShippingItem(new Product('Pressure Valves', 110392), STATUSES.PENDING, PRIORITIES.MEDIUM)),
      ],
      newReceivingItem: new InventoryItem(new ReceivingItem()),
      newShippingItem: new InventoryItem(new ShippingItem()),
    }
  },

  computed:{
    //const: ITEMTYPES = {RECEIVING: 'ReceivingItem', SHIPPING: 'ShippingItem'},

    returnReceivingItem(){
      return this.inventory.filter(e => e.material.constructor.type === 'ReceivingItem');
    },
    returnShippingItem(){
      return this.inventory.filter(e => e.material.constructor.type === "ShippingItem");
    }
  },

  methods: {
    addToTable(item) {
      this.inventory.push((item));

    },

    removeFromTable(item) {
      //console.log('removed from inventory');
      this.inventory = this.inventory.filter(e => e.material.productId !== item.productId);

    },

    editTableItem(oldItem, newItem) {
      console.log("Editing in InventoryItemTable");
      this.inventory.splice(oldItem, 1, newItem);
    }
  },


}
// app.component('InventoryItemTableRow', InventoryTableItemRow);
</script>

<style scoped>

</style>