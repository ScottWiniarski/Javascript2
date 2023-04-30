<template>
<div class="col" v-for="item in library" :key="item.messageTitle">
  <Company-memo-modal :item="item"></Company-memo-modal>
  <SeenCompanyMemos item="item"></SeenCompanyMemos>
</div>
</template>

<script>
import CompanyMessageList from "../models/CompanyMessageList";
import CompanyMemoModal from "../components/CompanyMemoModal.vue";
import SeenCompanyMemos from "./SeenCompanyMemos";
export default {
  name: "CompanyMemos.vue",
  components:{CompanyMemoModal, SeenCompanyMemos},

  data() {
    return {
      library: new CompanyMessageList()
      .addItem(new CompanyMessage('Welcome, new employee!',
          "We're glad to have you with us!", false))
      .addItem(new CompanyMessage('Please remember to read the company manuel',
      "A safe and cautious employee, is a profitable employee!", false))
    }
  },

}
</script>

<style scoped>

</style>