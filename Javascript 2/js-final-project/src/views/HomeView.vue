<template>
  <div class="home">
    <navigational-bar></navigational-bar>
    <employee-data></employee-data>
    <employee-home></employee-home>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import CompanyMemos from "@/components/CompanyMemos";
// import MineralHorde from "@/components/MineralHorde";
import NavigationalBar from "@/components/NavigationalBar";
import employeeHome from "@/components/EmployeeHome";
import EmployeeData from "@/components/EmployeeData";

export default {
  name: 'HomeView',
  components: {
    EmployeeData,
    // MineralHorde,
    // HelloWorld,
    // CompanyMemos,
    NavigationalBar,
    employeeHome,
  }
}
</script>
