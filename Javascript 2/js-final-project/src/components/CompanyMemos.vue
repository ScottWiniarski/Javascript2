<template>
  <div class="companyModal" v-if="displayPermission === 'unseen'">
    Words in a div
    <div class="col" v-for="(item,i) in unSeenMemos" :key="item.messageId">
      <Company-memo-modal v-if="i === 0" :button-text="'New Message(s) ' + `${unSeenMemos.length}`" :item="item">New
        Message
      </Company-memo-modal>
    </div>
  </div>

  <div class="seenMessages" v-if="displayPermission === 'seen'">
    <table class="table table-bordered table-hover table-striped messageTable">
      <thead>
      <tr>
        <th scope="col">Message Title</th>
        <th scope="col">Message Content</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in seenMemos" :key="item.messageId">
        <SeenCompanyMemos :item="item"></SeenCompanyMemos>
      </tr>
      </tbody>
    </table>
    <!--    <div class="col" v-for="item in seenMemos" :key="item.messageId">-->
    <!--      <SeenCompanyMemos :item="item"></SeenCompanyMemos>-->
    <!--    </div>-->
  </div>


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

  props: {
    displayPermission: String,
  },

  methods: {
    loadMessages() {
      db.collection(CompanyMessage.collectionName)
          .withConverter(CompanyMessage)
          .onSnapshot(snapshot => {
            this.library = [];

            snapshot.forEach(item => {
              this.library.push(item.data());
            })
          })
    },

    /*addMessages(){
      let newMessage = new CompanyMessage( 'To All Employees', 'A reminder that attempting' +
          ' to unionize is a direct violation of your contract.', true, 0, 2);
      db.collection(CompanyMessage.collectionName)
      .add(newMessage.toFirestore())
    }*/

    // async getEmployee(callSign) {
    //   const minerRef = db.collection('Miners').doc('gzuKCKk3qwgAJM7IpTEE');
    //   const doc = await minerRef.get();
    //
    //   if(callSign === 'strikes'){
    //     console.log('# of strikes', doc.data().strikes);
    //     return doc.data().strikes;
    //   }
    //   else if(callSign === 'daysWorked'){
    //     console.log( '# of days worked' ,doc.data().daysEmployed);
    //     return doc.data().daysEmployed;
    //   }
    // }
  },

  // async created() {
  //   let minerRef;
  //   minerRef = db.collection('Miners').doc('gzuKCKk3qwgAJM7IpTEE');
  //   return await minerRef.get();
  // },

  mounted: function () {
    this.loadMessages();
    // this.getEmployee();
  },

  computed: {
    seenMemos() {
      // return this.library.filter(item => item.wasSeen && item.strikeCount >= this.getEmployee('strikes'));
      //return this.library.filter(item => item.wasSeen && item.strikeCount >= this.doc.strikes);
      return this.library.filter(item => item.wasSeen);

      /*console.log('help');
      let seenMessages = this.library.filter(item => item.wasSeen === true);
      console.log('help', seenMessages[0]);
      return seenMessages[0];*/

    },

    unSeenMemos() {
      return this.library.filter(item => !item.wasSeen);

      // return this.library.filter(item => !item.wasSeen && item.releaseDay <=
      //     this.getEmployee('daysWorked')  && item.strikeCount <= this.getEmployee('strikes'));
    }
  },

  data() {
    return {
      library: [],
      minerRef: '',
      doc: [],
    }
  }

}
</script>

<style scoped>
.messageTable {
  margin: auto;
  padding-bottom: 15px;
}

</style>