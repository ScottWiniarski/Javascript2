<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Home</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#miningNavbar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <ul class="collapse navbar-collapse" id="miningNavbar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/"> Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="memo">Messages</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/submit">Submission</router-link>
          </li>
        </ul>
        <!--    <li v-if="authUser"><a href="#" @click.prevent="logout">Logout</a></li>
            <li v-else><a href="#" @click.prevent="login">Login</a></li>-->
      </ul>
    </div>
<!--    <ul class="list-styled components">-->
<!--      <li><router-link to="/">Employee Home</router-link></li>-->
<!--      <li><router-link to="memo">Messages</router-link></li>-->
<!--      <li><router-link to="/submit">Daily Submission</router-link></li>-->
<!--      &lt;!&ndash;    <li v-if="authUser"><a href="#" @click.prevent="logout">Logout</a></li>-->
<!--          <li v-else><a href="#" @click.prevent="login">Login</a></li>&ndash;&gt;-->
<!--    </ul>-->
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
/*#navroute{*/
/*  width: 200px;*/
/*  position: fixed;*/
/*  top: 0;*/
/*  left: -30px;*/
/*  min-height: 100vh;*/
/*  padding: 15px;*/
/*  z-index: 999;*/
/*  background: #f0d8d0;*/
/*  color: #fff;*/
/*  transition: all 0.3s;*/
/*}*/
</style>