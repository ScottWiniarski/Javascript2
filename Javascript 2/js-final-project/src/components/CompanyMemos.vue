<template>
<!--  <div class="companyModal" v-show="displayPermission === 'unseen'">-->
    <div class="col" v-for="item in unSeenMemos" :key="item.messageId">
      <Company-memo-modal  :button-text="'New Message(s) ' + `${unSeenMemos.length}`" :item="item">New Message</Company-memo-modal>
    </div>
<!--  </div>-->

<!--  <div class="seenMessages" v-if="displayPermission !== 'seen'">-->
    <div class="col" v-for="item in seenMemos" :key="item.messageId">
      <SeenCompanyMemos :item="item"></SeenCompanyMemos>
    </div>
<!--  </div>-->


  <!--  <button class="btn btn-primary" @click="addMessages">CLick</button>-->
</template>

<script>
import CompanyMemoModal from "../components/CompanyMemoModal.vue";
import SeenCompanyMemos from "./SeenCompanyMemos";
import CompanyMessage from "@/models/CompanyMessage";
import {db} from "@/firebase";

export default {
  name: "CompanyMemos.vue",
  components: {CompanyMemoModal, SeenCompanyMemos},

  // props:{
  //   displayPermission: String,
  // },

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

    /*addMessages(){
      let newMessage = new CompanyMessage( 'To All Employees', 'A reminder that attempting' +
          ' to unionize is a direct violation of your contract.', true);
      db.collection(CompanyMessage.collectionName)
      .add(newMessage.toFirestore())
    }*/
  },

  mounted: function(){
    this.loadMessages();
  },

  computed:{
    seenMemos(){
      return this.library.filter(item => item.wasSeen === true);
      /*console.log('help')
      let seenMessages = this.library.filter(item => item.wasSeen === true);
      console.log('help', seenMessages[0]);
      return seenMessages[0];*/

    },

    unSeenMemos(){
      return this.library.filter(item => item.wasSeen === false);
    }
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