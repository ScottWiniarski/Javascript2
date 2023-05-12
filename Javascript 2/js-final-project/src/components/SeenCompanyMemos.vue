<template>
  <div class="table-responsive">
    <table class="table table-bordered table-hover table-striped">
      <thead class="thead-light">
      <tr>
        <th scope="col">Message Title</th>
        <th scope="col">Message Content</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>{{item.messageTitle}}</td>
        <td>{{item.messageContent}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import CompanyMessage from "@/models/CompanyMessage";

export default {
  name: "SeenCompanyMemos.vue",

  props:{
    item: CompanyMessage
  },
}
</script>

<style scoped>

</style>