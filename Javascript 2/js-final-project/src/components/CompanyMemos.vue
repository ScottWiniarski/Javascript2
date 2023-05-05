<template>
  <div class="col" v-for="item in library" :key="item.messageId">
    <Company-memo-modal button-text="Inbox" :item="item"></Company-memo-modal>
  </div>
  <div class="col" v-for="item in library" :key="item.messageId">
    <SeenCompanyMemos  :item="item"></SeenCompanyMemos>
<!--    v-if="employees.day === item.messageId"-->
  </div>
</template>

<script>
import CompanyMessageList from "../models/CompanyMessageList";
import CompanyMemoModal from "../components/CompanyMemoModal.vue";
import SeenCompanyMemos from "./SeenCompanyMemos";
import {CompanyMessage} from "@/models/CompanyMessage";

export default {
  name: "CompanyMemos.vue",
  components: {CompanyMemoModal, SeenCompanyMemos},

  data() {
    return {
      library: new CompanyMessageList()
          .addItem(new CompanyMessage(1,'Welcome, new employee!',
              "We're glad to have you with us!", false))
          .addItem(new CompanyMessage(2,'Please remember to read the company manuel!',
              "A safe and cautious employee, is a profitable employee!", false))
          .addItem(new CompanyMessage(3, 'To All Employees', 'A reminder that attempting' +
              'to unionize is a direct violation of your contract.', true))
    }
  },

}
</script>

<style scoped>

</style>