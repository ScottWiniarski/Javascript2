<template>
  <div>
    <!--      Generate random number for bs-target-->
    <button class="btn btn-info"
            data-bs-toggle="modal"
            :data-bs-target="'#sli' + itemNumber">
      <i class="fas fa-wrench"></i> {{ buttonText }}
    </button>

    <div class="modal fade" tabindex="-1" role="dialog" :id="'sli'+ itemNumber" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
            <h3 class="text-center p-2">{{ title }}</h3>
            <form @submit.prevent="formSubmit" novalidate>
              <div class="row">
                <uni-modal-details v-for="field in item.material.constructor.fields" :label="field.label" v-model="item.material[field.property]"></uni-modal-details>
                <!--                <uni-modal-details label="Title" v-model="item.material.title"></uni-modal-details>-->
                <!--                <uni-modal-details label="Product Id" v-model="item.material.productId"></uni-modal-details>-->
                <!--                <uni-modal-details label="Product Status" v-model="item.material.status"></uni-modal-details>-->
                <!--                <uni-modal-details label="Product Priority" v-model="item.material.priority"></uni-modal-details>-->
              </div>
              <div class="container-fluid" id="modalFooter">
                <div class="text-center">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Discard</button>
                  <button type="submit" class="btn btn-primary" @click="sendNotice(item)">Confirm</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UniModalDetails from '@/components/UniModalDetails.vue'
export default {
  name: "UniModalFoundation.vue",
  components: {UniModalDetails,},
  data(){
    return{
      itemNumber: Math.floor(Math.random() * 10e16),
    }
  },

  props: {
    title: {type: String},
    buttonText: {type: String},
    item: {type: Object},


    formSubmit: {
      type: Function,
      default: function () {
      }
    },
  },

  methods: {
    sendNotice(item){
      console.log("Item Sent " + item);
      this.$emit('add-item', item);
    }
  },
}
</script>

<style scoped>

</style>