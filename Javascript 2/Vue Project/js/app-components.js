app.component('ishimuraNavbar', {

    props: {},

    methods: {},

    computed: {},

    template: `
      <nav class="navbar navbar-expand-md navbar-brand m-3" id="ishiNavBar">
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

app.component('shippingAndReceivingTable', {
    props: {
        title: String,
        items: Array,
    },

    methods: {
        removeItem(item) {
            console.log("Removed at Table");
            this.$emit('remove-item', item)
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
            @remove-item="removeItem"
        ></shipment-Item>
        </tbody>
      </table>
      </div>
    `
});

app.component('shipmentItem', {
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
            this.$emit('add-item', this.item);
        },
        remove() {
            console.log("Removed table.item");
            this.$emit('remove-item', this.item);
        },
    },


    template: `
      <tr>
      <td>
        {{ item.productID }}
      </td>
      <td>
        {{ item.name }}
      </td>
      <td>
        {{ item.itemStatus }}
      </td>
      <td>
        {{ item.priority }}
      </td>
      <td>
        <button class="btn btn-danger" v-on:click="remove"><i class="fas fa-minus-circle"></i> Remove?</button>
      </td>
      </tr>
    `
});

app.component('ishimuraFooter', {
    template: `
    <footer class="d-sm-flex justify-content-between text-light bg-dark p-3">
        <p class="text-center slogan">Property of Ishimura Logistics</p>
        <p class="text-center small">Unwarranted access will be punished.</p>
    </footer>
    `
});

app.component('addToManifestModal', {
    data: function () {
        return {
            newItem: {
                name: '',
                productID: '',
                itemStatus: '',
                priority: '',
                category: '',
            },
        }
    },

    props: {

        title: {
            type: String,
            required: true,
        },

        formSubmit: {
            type: Function,
            default: function () {
            } // empty function prevents errors if someone doesn't provide this prop

        }
    },

    methods: {
        addToTable() {
            if (this.newItem.name && this.newItem.productID && this.newItem.itemStatus && this.newItem.priority && this.newItem.category) {
                console.log("added from the modal method");
                this.$emit('add-To-Table', this.newItem);

                this.newItem = {
                    name: '',
                    productID: '',
                    itemStatus: '',
                    priority: '',
                    category: '',
                }
                bootstrap.Modal.getInstance(this.$el).hide();
            }

        },
    },

    mounted() {

        (function () {
            'use strict'

            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.querySelectorAll('.needs-validation')

            // Loop over them and prevent submission
            Array.prototype.slice.call(forms)
                .forEach(function (form) {
                    form.addEventListener('submit', function (event) {
                        console.log("function is running ")
                        if (!form.checkValidity()) {
                            event.preventDefault()
                            event.stopPropagation()
                        }

                        form.classList.add('was-validated')
                    }, false)
                })
        })();
        this.$el.addEventListener('shown.bs.modal', function () {
            this.querySelector('[autofocus]').focus();
        });
    },

    template: `
      <div class="modal fade" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
<!--          <div class="container-fluid">-->
            <div class="modal-body">
              <h3 class="text-center p-2">{{ title }}</h3>
              <form @submit.prevent="formSubmit" class="needs-validation" novalidate>
                <div>
                  <label for="name" class="form-label">Name</label>
                  <input id="name" type="text" class="form-control" required v-model="newItem.name" autofocus>
                  <div class="invalid-feedback">
                    Please enter the product name.
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label for="productID" class="form-label">Product ID</label>
                    <input id="productID" type="text" class="form-control" v-model="newItem.productID">
                  </div>
                  <div class="col-md-6">
                    <label for="itemStatus" class="form-label">Item Status</label>
                    <input id="itemStatus" type="text" class="form-control" v-model="newItem.itemStatus" required>
                    <div class="invalid-feedback">
                      Please enter the product ID
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label for="priority" class="form-label">Priority</label>
                    <input id="priority" type="text" class="form-control" v-model="newItem.priority" required>
                    <div class="invalid-feedback">
                      Please enter the product's priority
                    </div>
                  </div>
                  <div class="col-md-6">
                    <label for="category" class="form-label">Category</label>
                    <select id="category" type="text" class="form-select" v-model="newItem.category" autofocus required>
                      <option value="receiving">Receiving</option>
                      <option value="shipping">Shipping</option>
                    </select>
                    <div class="invalid-feedback">
                      Please enter the product's category
                    </div>
                  </div>
                </div>
                <hr>
                <div class="container-fluid" id="modalFooter">
                  <div class="text-center">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Discard</button>
                    <button type="submit" class="btn btn-primary" @click="addToTable">Confirm</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
<!--      </div>-->
      </div>


    `
});
/*
app.component('receivingTable', {
    props: {
        title: String,
        items: Array,
    },

    methods: {
        removeItem(item) {
            console.log("Removed table");
            this.$emit('remove-item', item)
        }
    },

    computed: {},

    template: `
      <div class="receivingTable">
      <h3>{{ title }}</h3>
      <button class="btn btn-tiny" @click="add"><i class="fas fa-plus-circle"></i></button>
      <table class="table table-striped table-hover">
        <thead>
        <tr>
          <th scope="col">Product ID</th>
          <th scope="col">Product Name</th>
          <th scope="col">Item Status</th>
          <th scope="col">Priority</th>
          <th scope="col">Remove Item?</th>
        </tr>
        </thead>
        <tbody>
        <receiving-Table-Item
            v-for="item in items"
            :item="item"
            :key="item.category"
            @remove-item="removeItem"
        ></receiving-Table-Item>

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
            this.$emit('add-item', this.item);
        },
        remove() {
            console.log("Removed table.item");
            this.$emit('remove-item', this.item);
        }
    },

    template: `
      <tr>
        <td>
          {{item.productID}}
        </td>
        <td>
          {{item.name}}
        </td>
        <td>
          {{item.itemStatus}}
        </td>
        <td>
          {{item.priority}}
        </td>
        <td>
          <button class="btn btn-tiny" v-on:click="remove"><i class="fas fa-minus-circle"></i></button>
        </td>
      </tr>
    `
});
*/

/*
app.component('shippingTable', {


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
      <h3>{{ title }}</h3>
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
        remove() {
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
*/