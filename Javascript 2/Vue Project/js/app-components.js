
app.component('ishimuraNavbar', {
    data: {

    },

    props: {

    },

    methods: {

    },

    computed: {},

    template: `
      <nav class="navbar navbar-expand-md navbar-brand">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Ishimura Shipping</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="ishimuraNavbar"
                aria-controls="ishimuraNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="ishimuraNavbar">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="index.html">Manifest</a>
            <a class="nav-link" href="#">Promotions</a>
            <a class="nav-link" href="#">Company Statement</a>
            <a class="nav-link" href="#">Customer Welfare</a>
          </div>
        </div>
      </div>
      </nav>
    `
});

app.component('receivingTable', {
    data: {

    },

    props: {
        title: String,
        items: Array,
    },

    methods: {
        removeItem(item) {
            this.$emit('remove-item', item)
        }
    },

    computed: {},

    template: `
      <div class="receivingTable">
      <h3>{{title}}</h3>
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Product ID</th>
            <th scope="col">Product Name</th>
            <th scope="col">Item Status</th>
            <th scope="col">Priority</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <receiving-Table-Item
              v-for="item in items"
              :item="item"
              :key="item.category"
              @remove-item="removeItem"
            ></receiving-Table-Item>
          </tr>
        </tbody>
      </table>
      </div>
    `
});

app.component('receivingTableItem', {
    data() {
        return {
            vid: 'sli' + Math.floor(Math.random() * 10e16)
        }
    },

    props: {
        item: Object,
    },

    methods: {
        add() {
            this.item.category = 'receiving'
        },
        remove(){
            this.$emit('remove-item', this.item);
        }
    },

    template: `
      <tr>
        <div class="d-flex justify-content-between">
          <div>
            <button class="btn btn-tiny" @click="add"><i class="fas fa-plus-circle"></i></button>
            <button class="btn btn-tiny" v-on:click="remove"><i class="fas fa-minus-circle"></i></button>
          </div>
        </div>
      </tr>
    `
});

app.component('shippingTable', {
    data: {

    },

    props: {
        title: String,
        items: Array,
    },

    methods: {
        removeItem(item) {
            this.$emit('remove-item', item)
        }
    },

    computed: {},

    template: `
      <div class="shippingTable">
      <h3>{{title}}</h3>
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Product ID</th>
            <th scope="col">Product Name</th>
            <th scope="col">Item Status</th>
            <th scope="col">Priority</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <shipping-Table-Item
              v-for="item in items"
              :item="item"
              :key="item.category"
              @remove-item="removeItem"
            ></shipping-Table-Item>
          </tr>
        </tbody>
      </table>
      </div>
    `
});

app.component('shippingTableItem', {
    data() {
        return {
            vid: 'sli' + Math.floor(Math.random() * 10e16)
        }
    },

    props: {
        item: Object,
    },

    methods: {
        add() {
            this.item.category = 'shipping'
        },
        remove(){
            this.$emit('remove-item', this.item);
        }
    },

    template: `
      <tr>
        <div class="d-flex justify-content-between">
          <div>
            <button class="btn btn-tiny" @click="add"><i class="fas fa-plus-circle"></i></button>
            <button class="btn btn-tiny" v-on:click="remove"><i class="fas fa-minus-circle"></i></button>
          </div>
        </div>
      </tr>
    `
});

app.component('ishimuraFooter', {
    template: `
    <footer class="d-sm-flex justify-content-between text-light bg-dark">
        <p class="text-center slogan">Property of Ishimura Logistics</p>
        <p class="text-center small">Unwarranted access will be punished.</p>
    </footer>
    `
});
