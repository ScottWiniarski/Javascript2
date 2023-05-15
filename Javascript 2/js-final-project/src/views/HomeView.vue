<template>
  <div class="home">
    <employee-data></employee-data>
    <employee-home></employee-home>
  </div>
</template>

<script>
// @ is an alias to /src
import employeeHome from "@/components/EmployeeHome";
import EmployeeData from "@/components/EmployeeData";

export default {
  name: 'HomeView',
  components: {
    EmployeeData,
    employeeHome,
  }
}
</script>
