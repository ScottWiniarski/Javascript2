<template>

</template>

<script>
import ResourceCollection from "../models/ResourceCollection";
export default {
  name: "MineralHorde.vue",

  data() {
    return {
      storage: new ResourceCollection()
          .addItem(new MiningCart(new Resource('Gold', 50)).constructor.load())
          .addItem(new Resource('Silver', 40))
          .addItem(new Resource('Coal', 25))
    }
  }
}
</script>

<style scoped>

</style>