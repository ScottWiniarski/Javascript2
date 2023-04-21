<template>

  <div class="container-fluid">
    <form class="d-flex" role="search">
      <input class="form-control me-2" v-model="text" placeholder="Enter any word" aria-label="Search">
      <button class="btn btn-info" @click="submitTerm">Search</button>
    </form>
  </div>

</template>

<script>
export default {
  name: "ItunesSearchBar.vue",


  methods:{
    submitTerm(){
      console.log(this.text);
      this.$emit('search-this' ,this.text);
    }
  }
}
</script>

<style scoped>

</style>