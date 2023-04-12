app.component('InventoryItemTable', {
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
        const: ITEMTYPES = {RECEIVING: 'ReceivingItem', SHIPPING: 'ShippingItem'},

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
            //this.inventory.splice(this.inventory.indexOf(item.material), 1);

        },

        editTableItem(oldItem, newItem) {
            console.log("Editing in InventoryItemTable");
            this.inventory.splice(oldItem, 1, newItem);
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
        <uni-modal-foundation
            :item="newReceivingItem"
            title="Receiving"
            button-text="Add Item"
            @add-item="addToTable"
        ></uni-modal-foundation>
        <receiving-item-table
            v-for="item in returnReceivingItem"
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
            :item="item"
            @remove-item-from-table="removeFromTable"
        ></shipping-item-table>
        </tbody>
      </table>
      </div>
    `
});

const InventoryItemTableRowComponent = {
    props: {
        item: {type: Object}
        // "ReceivingItem"
    },

    methods: {
        itemRowComponent(item) {
            //console.log(item.constructor.type);
            //console.log(item.material.constructor.type);
            return item.material.constructor.type + 'Details';
        }
    },

    template: `
      <component :is="itemRowComponent(item)" :item="item.material"/>
    `
};

app.component("InventoryItemTableRow", InventoryItemTableRowComponent)

app.component("ReceivingItemTable", {
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

    template: `
      <receiving-item-details
          :item="item.material"
          @remove-this-item="removeThisItem"
          @edit-this-item="editThisItem"
      />
    `
});

app.component('ReceivingItemDetails', {
    props: {
        item: {type: ReceivingItem}
    },

    methods: {
        removeThisItem() {
            //console.log(item);
            this.$emit('remove-this-item', this.item);
        },

        editThisItem(item, newItem){

            this.$emit('edit-this-item', item, newItem)
        }
    },

    template: `
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
<!--        <button class="btn btn-dark" v-on:click="editThisItem"><i class="fas fa-plus-circle"></i> Edit</button>-->

      </td>
      </tr>
    `
});


app.component("ShippingItemTable", {
    props: {
        item: {type: Object}
    },

    methods: {

        removeThisItem(item) {
            console.log('removed from table', item);
            this.$emit('remove-item-from-table', item);
        },
    },

    template: `
      <shipping-item-details
          :item="item.material"
          @remove-this-item="removeThisItem"
      ></shipping-item-details>
    `
});


app.component('ShippingItemDetails', {
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

    template: `
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
    `
});