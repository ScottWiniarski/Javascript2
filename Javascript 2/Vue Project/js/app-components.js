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
            newReceivingItem: new ReceivingItem(),
            //newShippingItem: new InventoryItem( new ShippingItem()),
        }
    },

    methods: {
        addToTable(item) {
            // let newItem = new InventoryItem();
            let newItem = new InventoryItem();
            newItem.material = item.material;
            //console.log(item.attributes);
            //console.log(item.constructor.type);
            //console.log(item.material);
            //console.log(item.type);
            //newItem.material = item.constructor.type;
            console.log(newItem);
            this.inventory.push((item));
            console.log(this.inventory);
        },

        removeFromTable(item) {
            console.log('removed from library');
            this.inventory.splice(InventoryItemTable.inventory.indexOf(item.material.productId), 1);
        },

        editTableItem(oldItem, newItem) {
            InventoryItemTable.inventory.splice(oldItem, 1, newItem);
        }
    },

    computed:{

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
            @add-item="addToTable(item)"
        ></uni-modal-foundation>
        <receiving-item-table
            v-for="item in inventory"
            :item="item"
            @remove-item-from-table="removeFromTable(this.item)"
        ></receiving-item-table>
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
        item: {type: Object}
        // "ReceivingItem"
    },

    methods: {
        itemRowComponent(item) {
            console.log(item.constructor.type);
            console.log(item.material.constructor.type);
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
            console.log('removed from table', item);
            this.$emit('remove-item-from-table', this.item);
        },
    },

    template: `
      <component
          :is="receivingTableComponent(item)"
          :item="item.material"
          @remove-this-item="removeThisItem(this.item)"
      />
    `
});

app.component('ReceivingItemDetails', {
    props: {
        item: {type: ReceivingItem}
    },

    methods: {
        removeThisItem(item) {
            //console.log(item);
            this.$emit('remove-this-item', this.item);
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
        <button class="btn btn-info" v-on:click="removeThisItem(this.item)"><i class="fas fa-minus-circle"></i> Remove</button>
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
    },

    template: `
      <component :is="shippingTableComponent(item)" :item="item.material"></component>
    `
});


app.component('ShippingItemDetails', {
    props: {
        item: {type: ShippingItem}
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
        <button class="btn btn-info"><i class="fas fa-minus-circle"></i> Remove</button>
      </td>
      </tr>
    `
});