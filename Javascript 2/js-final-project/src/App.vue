<template>
  <navigational-bar></navigational-bar>
  <router-view/>
</template>
<script>
// import SubmitView from "@/views/SubmitView";
import NavigationalBar from "@/components/NavigationalBar";
// import {db} from "@/firebase";
export default{
  components:{
    NavigationalBar,
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
</script>
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
