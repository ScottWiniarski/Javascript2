<template>
<div class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal-dialog modal-x1" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-header">{{messageTitle}}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>{{bodyContent}}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" @click="wasSeenByUser" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
//import CompanyMemos from "./CompanyMemos";
export default {
  name: "CompanyMemoModal.vue",

  props:{
    item: CompanyMessage,
  },
  methods:{
    wasSeenByUser(){
      return this.wasSeen = true;
    }
  },
  //components:{CompanyMemos},
  computed: {
    messageTitle(){
      if(this.wasSeen === true){
        return this.messageTitle;
      }
      else return 'Nothing New';

    },
    bodyContent(){
      if(this.wasSeen === true){
        return this.bodyContent;
      }
      else return 'No new messages';
    }
  }


}
</script>

<style scoped>

</style>