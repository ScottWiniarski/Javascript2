<template>
<!--  <button class="btn btn-primary" @click="addMessages">CLick</button>-->
  <div class="col" v-for="item in library" :key="item.messageId">
    <Company-memo-modal v-if="item.wasSeen === false" :button-text="'Inbox'" :item="item"></Company-memo-modal>
  </div>
  <div class="col" v-for="item in library" :key="item.messageId">
    <SeenCompanyMemos v-if="item.wasSeen === true" :item="item"></SeenCompanyMemos>
<!--    v-if="employees.day === item.messageId"-->
  </div>
</template>

<script>
import CompanyMemoModal from "../components/CompanyMemoModal.vue";
import SeenCompanyMemos from "./SeenCompanyMemos";
import CompanyMessage from "@/models/CompanyMessage";
import {db} from "@/firebase";

export default {
  name: "CompanyMemos.vue",
  components: {CompanyMemoModal, SeenCompanyMemos},

  methods:{
    loadMessages() {
      db.collection(CompanyMessage.collectionName)
      .withConverter(CompanyMessage)
      .onSnapshot(snapshot => {
        this.library = [];

        snapshot.forEach(item =>{
          this.library.push(item.data());
        })
      })
    },

    addMessages(){
      let newMessage = new CompanyMessage( 'To All Employees', 'A reminder that attempting' +
          ' to unionize is a direct violation of your contract.', true);
      db.collection(CompanyMessage.collectionName)
      .add(newMessage.toFirestore())
    }
  },

  mounted: function(){
    this.loadMessages();
  },

  data(){
    return {
      library: [],
    }
  }

}
</script>

<style scoped>

</style>