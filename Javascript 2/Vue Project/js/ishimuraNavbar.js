app.component('ishimuraNavbar', {
    data: function () {
        return {

            newItem: {
                name: this.newItem,
            },
        }
    },

    props: {

        searchTargets: Array,


        formSubmit: {
            type: Function,
            default: function () {
            },
        }
    },

    methods: {
        searchForItem(){
            if (this.newItem.name){
                console.log('searching in the navbar component methods');
                this.$emit('search-in-table-from-navbar', this.newItem);
            }
            console.log(this.newItem)
        },


    },

    computed: {},

    template: `<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Ishimura Logistics</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="index.html">Index</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="Receiving.html">Receiving</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="Shipping.html">Shipping</a>
          </li>
          <form class="d-flex justify-content-end" @submit.prevent="formSubmit">
            <input class="form-control me-2" type="text" placeholder="Search" aria-label="Search" v-model="newItem.name">
            <button class="btn btn-outline-success" type="submit" @click="searchForItem" data-bs-toggle="collapse" data-bs-target="#searchCollapseWindow">Submit</button>
          </form>
        </ul>
      </div>
    </div>
    <div class="collapse w-100" id="searchCollapseWindow">
      <shipping-And-Receiving-Table title="Search Results" :items="searchTargets" :allow-edit="false"></shipping-And-Receiving-Table>
    </div>
    </nav>
    `
});