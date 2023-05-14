<template>
  <div class="home">
    <navigational-bar></navigational-bar>
    <employee-data></employee-data>
    <employee-home></employee-home>
  </div>
</template>

<script>
// @ is an alias to /src
import NavigationalBar from "@/components/NavigationalBar";
import employeeHome from "@/components/EmployeeHome";
import EmployeeData from "@/components/EmployeeData";

export default {
  name: 'HomeView',
  components: {
    EmployeeData,
    NavigationalBar,
    employeeHome,
  }
}
</script>
