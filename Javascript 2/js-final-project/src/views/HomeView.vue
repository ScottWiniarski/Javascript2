<template>
  <div class="home">
    <navigational-bar></navigational-bar>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
<!--    <company-memos></company-memos>-->
    <mineral-horde></mineral-horde>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import CompanyMemos from "@/components/CompanyMemos";
import MineralHorde from "@/components/MineralHorde";
import NavigationalBar from "@/components/NavigationalBar";

export default {
  name: 'HomeView',
  components: {
    MineralHorde,
    HelloWorld,
    // CompanyMemos,
    NavigationalBar,
  }
}
</script>
