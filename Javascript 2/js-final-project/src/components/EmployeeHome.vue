<template>
  <div class="container-fluid" id="frontpage">
    <div class="bg-image d-flex justify-content-center align-items-center"
         style="background-image: url(https://deeprockgalactic.wiki.gg/images/1/16/SpaceRigExterior.png);
    height: 100vh">
      <div class="container-fluid " id="frontpagecontent">
        <h2 class="m-2">Welcome Valued Employee</h2>
        <form @submit.prevent="screen" >
          <label class="m-2" for="passwordLogin">Enter Password: </label>
          <br>
          <input class="m-2" type="text" id="passwordLogin" placeholder="Last Name" v-model="input" >
          <br>
          <button class="btn btn-info btn-dark m-2">Log In</button>
        </form>

        <company-memos v-show="screen !== 'no-match'" :display-permission="unseenShow"></company-memos>
      </div>
    </div>
  </div>
</template>

<script>
import companyMemos from "@/components/CompanyMemos";
export default {
  name: "EmployeeHome.vue",
  components:{
    companyMemos,

  },

  props:{
    roster: Array,
  },

  methods:{
    screen(){
      let roster = this.roster;
      for(let i = 0;i<roster.length;i++ ){
        if(roster[i].lastName === this.input){
          console.log(roster[i].employeeId);
          this.employee = roster[i];
          return roster[i];
        }
      }
      alert('No employee found.');
      return 'no-match';
    }
  },

  computed:{
    unseenShow(){
      return 'unseen';
    },
  },

  data(){
    return{
      input: '',
      employee: Object,
    }
  }
}
</script>

<style scoped>
h2{
  font-family: "Helvetica", sans-serif;
  --bs-body-color: #f06600;
}
#login{
  margin: 5px;
}

#frontpagecontent{
  background-color: #fffff080;
  padding-bottom: 20px;

}

#frontpage{

}
</style>