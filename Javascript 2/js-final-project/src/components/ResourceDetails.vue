<template>
  <!--  {{signalItem}}-->
  <th scope="row"></th>
  <td>{{ item.resourceName }}</td>

  <th scope="row"></th>
  <td>
    <button type="button" class="btn btn-secondary btn-sm" @click="increment"><i class="fa-solid fa-minus"></i>plus
    </button>
    {{ number }}
    <button type="button" class="btn btn-secondary btn-sm" @click="decrement"><i class="fa-solid fa-minus"></i>minus
    </button>
  </td>

  <th scope="row"></th>
  <td>
    <button type="submit" class="btn btn-info btn-sm" @click="mathTime">Save</button>
  </td>

</template>

<script>
import Resource from "@/models/Resource";

export default {
  name: "ResourceDetails.vue",

  props: {
    item: Resource
  },

  // computed:{
  //   signalItem(){
  //     console.log('from ResourceDetails', this.item);
  //     return null;
  //   }
  // },

  data() {
    return {
      number: 0,
    }
  },
  methods: {

    mathTime(){
      let resourceTotal = this.number * this.item.resourceValue;
      console.log(resourceTotal);
      this.$emit('item-total' ,resourceTotal);
    },

    increment() {
      this.number++;
    },
    decrement() {
      if (this.number === 0) return
      this.number--;
    },
  }
}
</script>

<style scoped>
/*id="'sli' + {{item.id}} + 'plus'"*/

</style>