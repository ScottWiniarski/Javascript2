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
      <th scope="row"></th>
      <td>{{item.messageTitle}}</td>
      <td>{{item.messageContent}}</td>
    </tr>
    </tbody>
  </table>
</div>
</template>

<script>
export default {
  name: "SeenCompanyMemos.vue",

  props:{
    item: CompanyMessage
  },

  data: function(){
      if(this.item.wasSeen === true){
        return this.item;
      }
    else console.log(this.item);
      return null;
  },
}
</script>

<style scoped>

</style>