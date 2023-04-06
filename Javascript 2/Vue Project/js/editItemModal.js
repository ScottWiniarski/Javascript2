app.component('editItemModal', {
    data: function () {
        return {

            newItem: {
                name: this.item.name,
                productID: this.item.productID,
                itemStatus: this.item.itemStatus,
                priority: this.item.priority,
                category: this.item.category,
            },
        }
    },

    props: {
        item: Object,

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
        editTableItem() {
            if (this.newItem.name && this.newItem.productID && this.newItem.itemStatus && this.newItem.priority && this.newItem.category) {
                this.$emit('edit-table-item', this.item, this.newItem);
                bootstrap.Modal.getInstance(this.$refs.ModalElement).hide();
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
      <div>
      <button class="btn btn-info"
              data-bs-toggle="modal"
              :data-bs-target="'#sli'+ item.productID">
        <i class="fas fa-wrench"></i> Modify
      </button>

      <div ref="ModalElement" class="modal fade" tabindex="-1" role="dialog" :id="'sli'+ item.productID">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
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
<!--                <component :is="productName(item)" item></component>-->
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
                    <select id="category" class="form-select" v-model="newItem.category" autofocus required>
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
                    <button type="submit" class="btn btn-primary" @click="editTableItem">Confirm</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
    `

    /*template: `
      <div>
      <button class="btn btn-info"
              data-bs-toggle="modal"
              :data-bs-target="'#sli'+ item.productID">
        <i class="fas fa-wrench"></i> Modify
      </button>

      <div ref="ModalElement" class="modal fade" tabindex="-1" role="dialog" :id="'sli'+ item.productID">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
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
                    <select id="category" class="form-select" v-model="newItem.category" autofocus required>
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
                    <button type="submit" class="btn btn-primary" @click="editTableItem">Confirm</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
    `*/
});

app.component("productName", {
    props:{
        item: {type: Object}
    },
    template:`
      <div>
      <label for="name" class="form-label">Name</label>
      <input id="name" type="text" class="form-control" required v-model="item.name" autofocus>
      <div class="invalid-feedback">
        Please enter the product name.
      </div>
      </div>
    `
})