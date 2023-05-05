<template>
  <div class="table-responsive" v-if="item.wasSeen">
    <table class="table table-bordered table-hover table-striped">
      <thead class="thead-light">
      <tr>
        <th scope="col">Message Title</th>
        <th scope="col">Message Content</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <th scope="col"></th>
        <td>{{item.messageTitle}}</td>
        <td>{{item.messageContent}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {CompanyMessage} from "@/models/CompanyMessage";

export default {
  name: "SeenCompanyMemos.vue",

  props:{
    item: CompanyMessage
  },
}
</script>

<style scoped>

</style>