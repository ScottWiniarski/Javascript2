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
            ],
            newReceivingItem: new InventoryItem(new ReceivingItem()),
            newShippingItem: new InventoryItem(new ShippingItem()),
        }
    },

    methods: {
        addToTable(item) {
            this.inventory.push((item));

        },

        removeFromTable(item) {
            // for (let i = 0; i < this.inventory.length; i++) {
            //     console.log(this.inventory[i]);
            // }
            console.log('removed from inventory');
            console.log(item);
            this.inventory.splice(this.inventory.indexOf(item.material));
            //this.inventory.splice(this.inventory.indexOf(item, item), 1);
            //this.inventory.splice(this.inventory.prototype.indexOf.call(item.material), 1);
            //this.inventory.splice(this.inventory.indexOf(item),1);
            //this.inventory.splice(this.inventory.indexOf(item.prototype), 1);
            //this.inventory.splice(this.inventory.indexOf(item.prototype.material), 1);
        },

        editTableItem(oldItem, newItem) {
            this.inventory.splice(oldItem, 1, newItem);
        }
    },

    computed: {},

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
            v-for="item in inventory"
            :item="item"
            @remove-item-from-table="removeFromTable"
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
            v-for="item in inventory"
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
        receivingTableComponent(item) {
            if (item.material.constructor.type === "ReceivingItem") {
                return item.material.constructor.type + "Details";
            }
        },

        removeThisItem(item) {
            //console.log('removed from table', item);
            this.$emit('remove-item-from-table', item);
        },

        editThisItem(item, newItem){
            console.log('Edited at ReceivingItemTable', item, newItem)
        },
    },

    template: `
      <component
          :is="receivingTableComponent(item)"
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
        shippingTableComponent(item) {
            if (item.material.constructor.type === "ShippingItem") {
                return item.material.constructor.type + "Details";
            }
        },

        removeThisItem(item) {
            console.log('removed from table', item);
            this.$emit('remove-item-from-table', item);
        },
    },

    template: `
      <component
          :is="shippingTableComponent(item)"
          :item="item.material"
          @remove-this-item="removeThisItem"
      ></component>
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