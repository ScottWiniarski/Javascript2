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
            //console.log("Removed table item at shipmentItem component.");
            this.$emit('remove-item', this.item);
        },

        edit(item, newItem){
            //console.log("editing item at shipmentItem component.");
            this.$emit('edit-this-item', item, newItem);
        }
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

        <edit-Item-Modal title="Edit Table Item" @edit-table-item="edit" :item="item"></edit-Item-Modal>
        
<!--                  This line works if we have a button for each object in the shipmentItem component, hooked up to the id   -->
<!--        <edit-Item-Modal title="Edit Table Item" :id="'sli'+ item.productID" @edit-table-item="edit" :item="item"></edit-Item-Modal>-->
                
<!--        <button class="btn btn-info"
                data-bs-toggle="modal"
                :data-bs-target="'#sli'+ item.productID">
          <i class="fas fa-minus-circle"></i> Edit?
        </button>-->
        
        <button class="btn btn-danger" v-on:click="remove"><i class="fas fa-minus-circle"></i> Remove</button>
      </td>
      </tr>
      
<!--      data-bs-toggle="modal"
      :data-bs-target="'#' + item.id"-->
    `
});
