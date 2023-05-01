<template>
<div class="container-fluid">
  <div class="form-select" :id="employee.employeeId">
    <h3>Daily Turn in</h3>
    <p>Daily submission for {{employee.firstName}}</p>
    <div class="form-input" type="text"></div>
  </div>
</div>
</template>

<script>
// import miner from "@/models/Miner.js"
//import {Miner} from "../models/Miner";
import EmployeeCollection from "../models/EmployeeCollection";
import MiningCart from "../models/MiningCart";
import Employee from "../models/Employee";
export default {
  name: "DailyYield.vue",
  components:{
    MiningCart, Employee, EmployeeCollection
  },

  props:{
    employee: Employee.constructor,
    miningCart: MiningCart,
  },

  data() {
    return {

    }
  }
}
</script>

<style scoped>

</style>