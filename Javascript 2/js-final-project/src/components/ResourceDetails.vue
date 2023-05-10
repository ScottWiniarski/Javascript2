<template>
  <!--  {{signalItem}}-->
  <td>{{ item.resourceName }}</td>
  <td>
    <button type="button" class="btn btn-secondary btn-sm" @click="increment"><i class="fa-solid fa-minus"></i>plus
    </button>
    {{ number }}
    <button type="button" class="btn btn-secondary btn-sm" @click="decrement"><i class="fa-solid fa-minus"></i>minus
    </button>
  </td>

</template>

<script>
import Resource from "@/models/Resource";

export default {
  name: "ResourceDetails.vue",

  props: {
    item: Resource
  },

  data() {
    return {
      number: 0,
    }
  },
  methods: {

    mathTime(){
      let resourceTotal = this.number * this.item.resourceValue;
      //console.log(resourceTotal);
      this.$emit('item-total' , this.item.id ,resourceTotal);
    },

    increment() {
      this.number++;
      this.mathTime();
    },
    decrement() {
      if (this.number === 0) return
      this.number--;
      this.mathTime();
    },
  }
}
</script>

<style scoped>
/*id="'sli' + {{item.id}} + 'plus'"*/

</style>