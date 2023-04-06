app.component('InventoryItemTable', {
   data(){
       const STATUSES = {PENDING: 'Pending', SHIPPED: 'Shipped', RECEIVED: 'Received'}
       const PRIORITIES = {LOW: 'Low', MEDIUM: 'Medium', HIGH: 'High', ABSOLUTE: 'Absolute'}
       return {
           inventory: [
               new InventoryItem( new ReceivingItem('Iron Ore', 231093, STATUSES.PENDING, PRIORITIES.HIGH)),
               new InventoryItem( new ReceivingItem('Coal', 837283, STATUSES.RECEIVED, PRIORITIES.LOW)),
               new InventoryItem( new ReceivingItem('Chromium', 238883, STATUSES.RECEIVED, PRIORITIES.MEDIUM)),
               new InventoryItem( new ShippingItem('Steel I-Beam', 323810, STATUSES.SHIPPED, PRIORITIES.LOW)),
               new InventoryItem( new ShippingItem('Cutting Tips', 102383, STATUSES.SHIPPED, PRIORITIES.LOW)),
               new InventoryItem( new ShippingItem('Pressure Valves', 110392, STATUSES.PENDING, PRIORITIES.MEDIUM)),
           ]
       }
   },

    methods:{
        soundOff(inventory){
           for(let i = 0; i<inventory.length; i++){
               console.log(inventory[i]);
           }
       }
    },

   template: `
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
      <inventory-item-table-row  v-for="item in inventory" :InventoryItem="item"/>
    </table>
    </div>
   `
});

app.component("InventoryItemTableRow", {
// const InventoryItemTableRowComponent = {
    props: {
        item: {type: InventoryItem}
        // "ReceivingItem"
    },

    methods: {
        itemRowComponent(item) {
            return item.material.constructor.type + 'Details';
        }
    },

    template: `
      <div class="tbody">
        <component :is="itemRowComponent(item)" :item="item.material"/>
      </div>
    `
});

// app.component("InventoryItemTableRow", InventoryItemTableRowComponent)

app.component('ReceivingItemDetails', {
   props:{
       item: {type: ReceivingItem}
   },

   template:`
   <tr>
   <td>
     {{item.title}}
   </td>
   <td>
     {{item.productID}}
   </td>
   <td>
     {{item.status}}
   </td>
   </tr>
   `
});

app.component('ShippingItemDetails', {
    props: {
        item: {type: ShippingItem}
    },

    template:`
   <tr>
   <td>
     {{item.title}}
   </td>
   <td>
     {{item.productID}}
   </td>
   <td>
     {{item.status}}
   </td>
   </tr>
   `
});