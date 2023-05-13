<template>
<!--  <submit-view :item="testMiner"></submit-view>-->
<!--  <nav>-->
<!--    <router-link to="/">Home</router-link> |-->
<!--    <router-link to="/about">About</router-link> |-->
<!--    <router-link to="/submit">Submit</router-link>-->
<!--  </nav>-->
  <router-view/>
</template>
<!--<script>
import SubmitView from "@/views/SubmitView";
import {db} from "@/firebase";
export default{
  name: "App.vue",

  components:{
    SubmitView,
  },
  /*computed:{
    async testMiner() {
      const singleMiner = db.collection('Miners').doc('gzuKCKk3qwgAJM7IpTEE');
      const doc = await singleMiner.get();

      if (!doc.exists) {
        alert("No such Document Exists");
      }
      else
      {
        console.log(doc);
        return singleMiner;
      }
    }
  },*/
}
</script>-->
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
