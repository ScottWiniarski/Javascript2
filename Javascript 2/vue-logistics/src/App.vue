<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <InventoryItemTable></InventoryItemTable>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import InventoryItemTable from './components/InventoryItemTable.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    InventoryItemTable,
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
