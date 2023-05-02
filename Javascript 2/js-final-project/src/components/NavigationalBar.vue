<template>
  <nav>
    <ul class="list-unstyled components" id="navroute">
      <li><router-link to="/home">Employee Home</router-link></li>
      <li><router-link to="">Past Messages</router-link></li>
      <!--    <li v-if="authUser"><a href="#" @click.prevent="logout">Logout</a></li>
          <li v-else><a href="#" @click.prevent="login">Login</a></li>-->
    </ul>
  </nav>

</template>

<script>
export default {
  name: "NavigationalBar.vue",
  //
  // props: {
  //   authUser: {required: true},
  // },
  //
  // methods: {
  //   login(){
  //     let provider = new firebase.auth.GoogleAuthProvider();
  //
  //     auth.signInWithPopup(provider)
  //     .catch(function(error){
  //       let errorCode = error.code;
  //       let errorMessage = error.message;
  //
  //       console.error("Error signing in: ", error)
  //     });
  //   },
  //
  //   logout(){
  //     auth.signOut();
  //   }
  // },
}
</script>

<style scoped>
#navroute{
  width: 200px;
  position: fixed;
  top: 0;
  left: -50px;
  min-height: 100vh;
  padding: 15px;
  z-index: 999;
  background: #343a40;
  color: #fff;
  transition: all 0.3s;
}
</style>