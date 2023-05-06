<template>
  <div>
    <button class="btn btn-info"
            data-bs-toggle="modal"
            :data-bs-target="'#sli' + item.messageId">
      <i class="fas fa-wrench"></i> {{ buttonText }}
    </button>

    <div class="modal fade" tabindex="-1" role="dialog" :id="'sli'+ item.messageId" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-header">{{item.messageTitle}}</h5>
            <!--          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>-->
          </div>
          <div class="modal-body">
            <p>{{item.messageContent}}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="wasSeenByUser" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CompanyMessage from "@/models/CompanyMessage";

export default {
  name: "CompanyMemoModal.vue",

  props:{
    buttonText: {type: String},
    item: CompanyMessage,
  },
  methods:{
    wasSeenByUser(){
      return this.wasSeen = true;
      // return this.item.wasSeen = true;
    }
  },
  computed: {}
}
</script>

<style scoped>

</style>