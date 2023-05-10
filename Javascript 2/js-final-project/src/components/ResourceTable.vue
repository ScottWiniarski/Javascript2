<template>
  <div class="container-fluid d-flex align-items-center justify-content-center">
    <div class="table table-striped table-hover table-bordered table-light">
      <thead>
      <tr>
        <th scope="row">Item Name</th>
        <th scope="row">Item Quantity</th>
      </tr>
      </thead>
      <tbody>
      <tr scope="row" v-for="item in items" :key="item.id">
        <resource-details :item="item" @item-total="dailyTotal"></resource-details>
      </tr>
      <tr>
        <td>{{ dailySum }}</td>
        <td><button type="button" class="btn btn-outline-dark" @click="submitAmount">Submit</button></td>
      </tr>
      </tbody>
    </div>
  </div>
</template>

<script>
import ResourceDetails from "@/components/ResourceDetails";


export default {
  name: "ResourceTable.vue",
  components: {
    ResourceDetails,
  },

  props: {
    items: Array,
  },

  methods: {
    submitAmount() {
      console.log('Pump the total');
      //this.$emit()
    },

    dailyTotal(itemId, itemTotal) {
      // console.log('Dailytotal is firing', itemId, itemTotal);
      if (!this.itemsTotal.find(e => e.id === itemId)) {
        this.itemsTotal.push({'id': itemId, 'total': 0});
      }
      let item = this.itemsTotal.find(e => e.id === itemId);
      item.total = itemTotal;
      // console.log(this.itemsTotal);
    }
  },

  computed: {
    dailySum(){
      return this.itemsTotal.reduce( (accumulator, currentValue) => accumulator + currentValue.total, 0)
    }
  },

  data() {
    return {
      itemsTotal: [],
    }
  },
}
</script>

<style scoped>

</style>