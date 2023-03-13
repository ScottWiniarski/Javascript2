
app.component('shippingAndReceivingTable', {
    props: {
        title: String,
        items: Array,
    },

    methods: {
        removeItem(item) {
            console.log("Removed at Table");
            this.$emit('remove-item', item)
        },

        editItem(item, newItem){
            console.log("emitted from table");
            this.$emit('edit-table', item, newItem)
        }
    },

    computed: {},

    template: `
      <div class="container-md">
      <h3 class="text-center">{{ title }}</h3>
      <table class="table table-striped table-hover table-bordered">
        <thead>
        <tr>
          <th scope="col">Product ID</th>
          <th scope="col">Product Name</th>
          <th scope="col">Item Status</th>
          <th scope="col">Priority</th>
          <th scope="col">Admin Tools</th>
        </tr>
        </thead>
        <tbody>
        <shipment-Item
            v-for="item in items"
            :item="item"
            :key="item.category"
            @edit-this-item="editItem"
            @remove-item="removeItem"
        ></shipment-Item>
        </tbody>
      </table>
      </div>
    `
});
