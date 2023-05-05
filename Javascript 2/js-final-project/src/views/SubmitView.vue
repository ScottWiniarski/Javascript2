<template>
<div class="submit">
  <navigational-bar></navigational-bar>
  <mineral-horde></mineral-horde>
</div>
</template>

<script>
import NavigationalBar from "@/components/NavigationalBar";
import MineralHorde from "@/components/MineralHorde";
export default {
  name: "SubmitView.vue",
  components: {MineralHorde, NavigationalBar}
}
</script>

<style scoped>

</style>