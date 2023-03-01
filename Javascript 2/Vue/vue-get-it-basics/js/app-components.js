// Component names should be TitleCase/PascalCase
// and should be multi-word, but singular in plurality.
// When used in HTML/templates, they become kabob-case.
app.component('ShoppingList', {
    // data:    Data created and maintained by this component.
    //          This function is like a constructor. It gets called
    //          separately for each instance of this component
    // data: function(){
    //     return {}
    // },

    // props:   Data passed into the component via attributes.
    //          Props can be optional or required. Objects and arrays
    //          are pass-by-reference. Primitives (number, string, boolean)
    //          are pass-by-value.
    props: {
        title: String,
        items: Array,
        // theTitle: String // in html, this would be like <tagname the-title="">
    },

    // methods: Usually "events" triggered by v-on:
    methods: {
        removeIt(item) {
            this.$emit('remove-item', item)
        }
    },

    // computed:    Values that are updated and cached if dependencies change.
    //              Computed value functions need to return a value.
    //              Treat these like regular values that you would use
    //              in data or props.
    computed: {},

    // template:    A string "template" of HTML. It should consist of only
    //              ONE root HTML element. You can reference any
    //              data, props, methods, computed, etc using: {{ name }}
    template: `
      <div class="get-it-list">
      <h3>{{ title }}</h3>
      <ul class="list-group list-group-flush border-bottom">
        <shopping-list-item
            v-for="item in items"
            :item="item"
            :key="item.name"
            @remove-item="removeIt"
        ></shopping-list-item>
      </ul>
      <p>
        <small>Total: {{ items.length }}</small>
      </p>
      </div>
    `,
});

app.component('ShoppingListItem', {
    // gets called when the component is rendered
    data() {
        return {
            vid: 'sli' + Math.floor(Math.random() * 10e16), //generate large random number
        }
    },

    props: {
        item: Object,
    },

    methods: {
        add() {
            this.item.qty++;
        },
        subtract() {
            this.item.qty--;

            if (this.item.qty <= 0) {
                this.$emit('remove-item', this.item);
            }
        }
    },

    template: `
      <li class="list-group-item">
      <div class="form-check">
        <input type="checkbox" :id="vid" class="form-check-input" v-model="item.purchased">
        <!--          <label :for="vid" class="form-check-label">{{ item.name }}</label>-->
        <label :for="vid" :class="{'form-check-label' : true, 'purchased' : item.purchased }">{{ item.name }}</label>
      </div>
      <div class="d-flex justify-content-between">
        <div>
          <small>Qty: {{ item.qty }}</small>
        </div>
        <div>
          <button class="btn btn-tiny" @click="add"><i class="fas fa-plus-circle"></i></button>
          <button class="btn btn-tiny" v-on:click="subtract"><i class="fas fa-minus-circle"></i></button>
        </div>
      </div>
      </li>
    `
})


app.component('AppButton', {
    props: {
        label: {
            String,
            type: String,
            default: 'Submit',
            //required: true,
        },
        icon: {
            type: String,
            default: 'fa-bath'
        }
    },

    template: `
      <!--    <button>{{label}}</button>-->
      <button type="button" class="btn btn-outline-primary" title="Add Item">
      <!--       The Slot is where the innerHTML goes -->
      <slot></slot>
      </button>
      <!--      <button type="button" class="btn btn-outline-primary" title="Add Item">
            <i :class="'fas ' +  icon"></i> {{ label }}<b>Hi</b>
            </button>-->
    `
})

app.component('AppModal', {
    props: {
        modalId: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            default: ''
        },
        formSubmit: {
            type: Function,
            default: function(){} // empty function prevents errors if someone doesn't provide this prop

        }
    },

    mounted(){
        // Don't use Jquery
        /*$('#' + this.modalId).on('shown.bs.modal', function () {
            $(this).find('[autofocus]').focus();
        });*/

        this.$el.addEventListener('shown.bs.modal', function () {
            this.querySelector('[autofocus]').focus();
        });
    },

    template: `
      <div class="modal fade" :id="modalId" tabindex="-1" role="dialog" :aria-labelledby="modalId + 'title'" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <form @submit.prevent="formSubmit">
          <div class="modal-content">
            <div class="modal-header">
              <slot name="header">
                <h5 class="modal-title" :id="modalId + 'title'">{{ title }}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </slot>
            </div>
            <div class="modal-body">
              <slot>Default Content</slot>
            </div>
            <div class="modal-footer">
              <slot name="footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </slot>
            </div>
          </div>
        </form>
      </div>
      </div>
    `
})

app.component('AddItemModal', {
    data: function () {
        return {
            newItem: {
                name: '',
                qty: 1,
                category: 'need',
                purchased: false,
            },
        }
    },

    // methods: usually "events" triggered by v-on:
    methods: {
        addIt() {
            // cannot do this here, we don't have access to shoppingList
            // this.shoppingList.push(this.newItem);
            // Do not do this:
            // app._data.shoppingList.push(...);
            console.log("adding");

            // emit the new item to the app
            this.$emit('add-item', this.newItem);
            console.log("emitted");
            // clear the form
            this.newItem = {
                name: '',
                qty: 1,
                category: 'need',
                purchased: false,
            }
            //close the modal
            bootstrap.Modal.getInstance(this.$el).hide();
        },


    },
    template: `
        <app-modal modal-id="addItemModal" title="Add Item" :form-submit="addIt">
        <div>
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input id="name" type="text" class="form-control" v-model="newItem.name" autofocus>
            </div>
            <div class="mb-3">
                <label for="qty" class="form-label">Quantity</label>
                <input id="qty" type="number" class="form-control" size="3" v-model="newItem.qty">
            </div>
            <div class="mb-3">
                <label for="category" class="form-label">Category</label>
                <select id="category" class="form-select" v-model="newItem.category">
                    <option value="need">Need</option>
                    <option value="want">Want</option>
                </select>
            </div>
        </div>
<!--                -->
        <template #footer>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Nevermind</button>
<!--            <button type="submit" class="btn btn-primary" @click.prevent="addIt">Add It</button>-->
            <button type="submit" class="btn btn-primary">Add It</button>
        </template>

    </app-modal>
    `
})