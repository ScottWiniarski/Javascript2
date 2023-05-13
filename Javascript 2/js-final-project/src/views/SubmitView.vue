<template>
<div class="submit">
  <navigational-bar></navigational-bar>
  <div class="bg-image d-flex justify-content-center align-items-center"
       style="background-image: url(https://wallpapercave.com/wp/wp1959154.jpg);
    height: 100vh">
    <div class="container-fluid"  id="submissionbackground">
      <mineral-horde></mineral-horde>
<!--      <mineral-horde :item="testMiner"></mineral-horde>-->
    </div>
  </div>
</div>
</template>

<script>
 import NavigationalBar from "@/components/NavigationalBar";
import MineralHorde from "@/components/MineralHorde";
export default {
  name: "SubmitView.vue",
  components: {
    MineralHorde,
    NavigationalBar,
  },

  // props:{
  //   testMiner: Object,
  // },
}
</script>

<style scoped>
#submissionbackground{
  background-color: #f0d8d077;
  /*display: flex;*/
  /*align-items: center;*/
  /*justify-content: center;*/
  /*margin-left: auto;*/
  /*margin-right: auto;*/
}

</style>