<template>
  <div class="container-fluid" id="frontpage">
    <div class="bg-image d-flex justify-content-center align-items-center"
         style="background-image: url(https://deeprockgalactic.wiki.gg/images/1/16/SpaceRigExterior.png);
    height: 100vh">
      <div class="container-fluid align-items-center" id="frontpagecontent">
        <h2>Welcome Valued Employee</h2>
        <company-memos :display-permission="unseenShow"></company-memos>
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
h2{
  font-family: "Helvetica", sans-serif;
  --bs-body-color: #f06600;
}

#frontpagecontent{
  background-color: #fffff080;
  padding-bottom: 20px;

}

#frontpage{

}
</style>