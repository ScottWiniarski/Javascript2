<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <company-memos></company-memos>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import CompanyMemos from "@/components/CompanyMemos";

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    CompanyMemos,
  }
}
</script>
