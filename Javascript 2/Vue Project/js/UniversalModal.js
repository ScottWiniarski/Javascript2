const UniversalModalFoundation = {
    data:{

    },

    props: {
        title: {type: String},
        buttonText: {type: String},
        item: {type: InventoryItem},


        formSubmit: {
            type: Function,
            default: function () {
            }
        },
    },

    methods: {
        passInventoryItemToModal(item, itemType){

        }
    },

    mounted() {
        this.$el.addEventListener('shown.bs.modal', function () {
            this.querySelector('[autofocus]').focus();
        });
    },

    template: `
      <div>
<!--      Generate random number for bs-target-->
      <button class="btn btn-info"
              data-bs-toggle="modal"
              :data-bs-target="'#sli'+ item.material.productId"> 
        <i class="fas fa-wrench"></i> {{ buttonText }}
      </button>

      <div ref="ModalElement" class="modal fade" tabindex="-1" role="dialog" :id="'sli'+ item.material.productId">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body">
              <h3 class="text-center p-2">{{ title }}</h3>
              <form @submit.prevent="formSubmit" novalidate>
              <div class="row">
                <uni-modal-details v-for="field in item.material.constructor.fields" :label="field.label" v-model="item.material[field.property]"></uni-modal-details>
<!--                <uni-modal-details label="Title" v-model="item.material.title"></uni-modal-details>-->
<!--                <uni-modal-details label="Title" v-model="item.material.title"></uni-modal-details>-->
<!--                <uni-modal-details label="Title" v-model="item.material.title"></uni-modal-details>-->
              </div>
                <div class="container-fluid" id="modalFooter">
                  <div class="text-center">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Discard</button>
                    <button type="submit" class="btn btn-primary" @click="">Confirm</button>
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
       title: {type: String},
       item: { type: InventoryItem},
   },

    methods: {
       // addThisItem(item){
       //   console.log(item + "From Universal Button Add Method");
       //   <UniversalModalFoundation></UniversalModalFoundation>
       //   <inventory-item-table is:addToTable(item)></inventory-item-table>
       // },
       //
       //  filterModalSections(item){
       //      console.log(item);
       //      return item;
       //      // if({{title}} === 'Add item'){
       //      //
       //      // }
       //  },
       //
       //  deleteThisItem(item){
       //      console.log(item + "From Universal Button Delete Method");
       //      <inventory-item-table :removeFromTable</inventory-item-table>
       //  }
    },

    template:`
      <div class="text-center">
      <component title="{{title}}" is:filterModalSections(item) type="button" class="btn btn-secondary" data-bs-target="modal">Create</component>
      <button title="" is:filterModalSections(item) type="button" class="btn btn-secondary" data-bs-dismiss="modal">Discard</button>
      </div>
    `
});

app.component("UniModalSource", {
    props: {
        item: {type: InventoryItem}
    },

    methods: {},

    template: `
      <uni-modal-details v-for="attr in item.attributes" :item="attr"></uni-modal-details>
    `
});

app.component('UniModalDetails', {

    props: {
        label: {type: String},
        modelValue: {type: String}
    },

    template: `
      <div class="col-md-6">
      <label :for="'sli' + label" class="form-label">{{ label }}</label>
      <input :id="'sli' + label" 
             type="text" class="form-control" required
             :value="modelValue"
             @input="$emit('update:modelValue', $event.target.value)"
      >
      <div class="invalid-feedback">
        Please enter the {{ label }}.
      </div>
      </div>
    `
});