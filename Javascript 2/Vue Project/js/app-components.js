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
      <tbody>
      <inventory-item-table-row v-for="item in inventory" :item="item"/>
      <hr>
      <h3 class="text-center">Receiving Table</h3>
      <receiving-item-table v-for="item in inventory" :item="item"></receiving-item-table>
      <hr>
      <h3 class="text-center">Shipping Table</h3>
      <shipping-item-table v-for="item in inventory" :item="item"></shipping-item-table>
      
      </tbody>
    </table>
    </div>
   `
});

const InventoryItemTableRowComponent = {
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
        <component :is="itemRowComponent(item)" :item="item.material"/>
    `
};

app.component("InventoryItemTableRow", InventoryItemTableRowComponent)

app.component("ReceivingItemTable", {
    props:{
        item: {type: InventoryItem}
    },

    methods: {
        receivingTableComponent(item){
          if(item.material.constructor.type === "ReceivingItem"){
              return item.material.constructor.type + "Details";
          }
        }
    },

    template: `
      <component :is="receivingTableComponent(item)" :item="item.material"/>
      <uni-modal-foundation></uni-modal-foundation>
    `
});

app.component("ShippingItemTable", {
    props:{
        item: {type: InventoryItem}
    },

    methods: {
        shippingTableComponent(item){
            if(item.material.constructor.type === "ShippingItem"){
                return item.material.constructor.type + "Details";
            }
        },
    },

    template: `
    <component :is="shippingTableComponent(item)" :item="item.material"></component>
    `
});

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
     {{item.productId}}
   </td>
   <td>
     {{item.status}}
   </td>
   <td>
     {{item.priority}}
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
     {{item.productId}}
   </td>
   <td>
     {{item.status}}
   </td>
   <td>
     {{item.priority}}
   </td>
   </tr>
   `
});