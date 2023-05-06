<template>
  <div class="Memo">
    <navigational-bar></navigational-bar>
    <div class="bg-image d-flex justify-content-center align-items-center"
         style="background-image: url(https://wallpapercave.com/wp/wp1959154.jpg);
    height: 100vh">

      <div class="container-fluid" id="seenmessagecontent">
        <div class="col">
          <company-memos></company-memos>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import navigationalBar from "@/components/NavigationalBar";
import CompanyMemos from "@/components/CompanyMemos";

export default {
  name: "MemoView.vue",
  components: {
    navigationalBar,
    CompanyMemos,
  }
}
</script>

<style scoped>
#seenmessagecontent{
  background-color: #f0d8d066;
}
</style>