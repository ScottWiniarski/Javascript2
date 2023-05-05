<template>
  <div class="container" id="Memo">
    <div class="row">
      <div class="col">
        <navigational-bar></navigational-bar>
      </div>
      <div class="col">
        <company-memos></company-memos>
      </div>
    </div>
  </div>


</template>

<script>
import navigationalBar from "@/components/NavigationalBar";
import CompanyMemos from "@/components/CompanyMemos";
export default {
  name: "MemoView.vue",
  components: {navigationalBar, CompanyMemos}
}
</script>

<style scoped>

</style>