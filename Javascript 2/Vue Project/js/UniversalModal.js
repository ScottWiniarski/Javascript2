const UniversalModalFoundation = {
    data:{},

    props: {
        item: {type: InventoryItem},

        itemType: {
            type: String
        },

        formSubmit: {
            type: Function,
            default: function () {
            }
        },
    },

    methods: {
        passInventoryItemToModal(item, itemType){
            if(itemType === "addItemReceiving"){
                console.log(item.constructor + 'From add/receiving Method');
                return new ReceivingItem();
            }
            else if(itemType === "addItemShipping"){
                console.log(item.constructor + 'from add/shipping method');
                return new ShippingItem();
            }
            else if(itemType === "editItemReceiving"){
                console.log(item.material.constructor + "From Edit method");
                let newItem = item;
                return (newItem, item);
            }
            else if(itemType === "editItemShipping"){
                console.log(item.material.constructor + "From edit/shipping method.");
                let newItem = item;
                return (newItem, item);
            }
        }
    },

    mounted() {
        this.$el.addEventListener('shown.bs.modal', function () {
            this.querySelector('[autofocus]').focus();
        });
    },

    template: `
      <div>
      <button class="btn btn-info"
              data-bs-toggle="modal"
              :data-bs-target="'#sli'+ item.material.productId">
        <i class="fas fa-wrench"></i> Modify
      </button>

      <div ref="ModalElement" class="modal fade" tabindex="-1" role="dialog" :id="'sli'+ item.material.productId">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body">
              <h3 class="text-center p-2">{{ item.material.title }}</h3>
              <form @submit.prevent="formSubmit" novalidate>
              <div class="row">
                <uni-modal-source :is="passInventoryItemToModal(item, itemType)"></uni-modal-source>
              </div>
                <div class="row">
                  
                </div>
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
};

app.component("UniModalFoundation", UniversalModalFoundation);

app.component('universalButton',{
   props: {
       itemType: {type: String},
       item: InventoryItem,
   },

    methods: {

    },

    template:`
      <div class="text-center">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Discard</button>
      </div>
    `
});

app.component("UniModalSource", {
    props: {
        item: {type: InventoryItem}
    },

    methods: {
        modalSetComponent(item) {
            return item.forEach(item.attributes);
        }
    },

    template: `
      <uni-modal-details :is="modalSetComponent(item)" :item="item"></uni-modal-details>
    `

})

app.component('UniModalDetails', {

    props: {
        item: {type: InventoryItem}
    },

    template: `
      <div>
      <label for="sli + {{item}}" class="form-label">{{ item }}</label>
      <input id="sli + {{item}}" type="text" class="form-control" required v-model="{item}" autofocus>
      <div class="invalid-feedback">
        Please enter the {{ item }}.
      </div>
      </div>
    `
})