<template>
  <div class="container-fluid" id="frontpage">
    <div class="bg-image d-flex justify-content-center align-items-center"
         style="background-image: url(https://wallpapercave.com/wp/wp1959154.jpg);
    height: 100vh">
      <div class="container-fluid" id="frontpagecontent">
        <h2>Welcome Valued Employee</h2>
        <company-memos :item="unseenShow"></company-memos>
      </div>
    </div>
  </div>
</template>

<script>
import companyMemos from "@/components/CompanyMemos";
export default {
  name: "EmployeeHome.vue",
  components:{companyMemos, },

  computed:{
    unseenShow(){
      return 'unseen';
    },
  },
}
</script>

<style scoped>

#frontpagecontent{
  background-color: #f0d8d066;

}

#frontpage{

}
</style>