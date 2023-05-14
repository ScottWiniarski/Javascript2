<template>
  <div class="m-2">
    <button class="btn btn-success"
            data-bs-toggle="modal"
            :data-bs-target="'#sli' + item.id">
      <i class="fas fa-wrench"></i> {{ buttonText }}
    </button>
<!--    {{logit}}-->
    <div class="modal fade" tabindex="-1" role="dialog" :id="'sli'+ item.id" aria-hidden="true">
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
import {db} from "@/firebase";

export default {
  name: "CompanyMemoModal.vue",

  props:{
    buttonText: {type: String},
    item: CompanyMessage,
    // firebaseKey: {type: String, required: false}
  },
  methods:{
    async wasSeenByUser() {

      const messageRef = db.collection('CompanyMessages').doc(`${this.item.id}`);
      const doc = await messageRef.get();

      if (!doc.exists) {
        console.log('No such document');
      } else {
        await messageRef.update({wasSeen: true});
      }

      // return this.item.wasSeen = true;
    }
  },
  /*computed: {
    logit(){
      console.log(this.item.id);
      return null;
    }
  }*/
}
</script>

<style scoped>

</style>