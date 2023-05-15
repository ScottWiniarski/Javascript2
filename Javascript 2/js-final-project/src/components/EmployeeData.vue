<template>
  <employee-home :roster="this.roster"></employee-home>
<!--<button @click="addEmployees">Click</button>-->
</template>

<script>
// import Employee from "@/models/Employee";
import EmployeeHome from "@/components/EmployeeHome";
import Miner from "@/models/Miner";
import {db} from "@/firebase"
export default {
  name: "EmployeeData.vue",

  components:{
    EmployeeHome,
  },

  methods: {
    loadEmployees(){
      db.collection(Miner.collectionName)
      .withConverter(Miner)
      .onSnapshot(snapshot => {
        this.roster = [];

        snapshot.forEach(person => {
          this.roster.push(person.data());
        })
      })
    },

    // addEmployees(){
    //   let newEmployee = new Employee(new Miner('Lisa', 'Baker', 110, 5, 1));
    //   db.collection(Miner.collectionName)
    //   .add(newEmployee.toFirestore())
    // },

    /*fireEmployee(){
      db.collection(Miner.collectionName)
      .add(Miner.collectionName.fire())
    },*/

  },
  mounted: function(){
    this.loadEmployees();
  },
  data(){
    return{
      roster: [],
    }
  }
}
</script>

<style scoped>

</style>