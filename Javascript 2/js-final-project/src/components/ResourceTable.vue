<template>
<div class="container-fluid">
  <div class="table table-striped table-hover">
    <thead>
    <tr>
      <th scope="col">Item Name</th>
      <th scope="col">Item Quantity</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      {{objectInput}}
      <th scope="row" v-for="item in items" :key="item.id">
        <resource-details :item="item" ></resource-details>
      </th>
<!--      <td v-for="it in item" :key="it.constructor.resourceId">-->
<!--        <resource-details :item="it" ></resource-details>-->
<!--      </td>-->
<!--      <td>
        <form class="form-check-input">
          <button type="button" class="btn btn-secondary" @click="increment"><i class="fa-solid fa-plus"></i>Add</button>
          {{number}}
          <button type="button" class="btn btn-secondary" @click="decrement"><i class="fa-solid fa-minus"></i>Diminish</button>
        </form>
      </td>-->
    </tr>
    </tbody>
  </div>
</div>
</template>

<script>
import ResourceDetails from "@/components/ResourceDetails";

export default {
  name: "ResourceTable.vue",
  components:{
    ResourceDetails,
  },

  props:{
    items: Array,
  },

  computed:{objectInput()
    { console.log('from ResourceTable', (this.items))
      return null;
    }},
}
</script>

<style scoped>

</style>