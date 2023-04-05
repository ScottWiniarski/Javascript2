const LibraryItemListComponent = app.component('LibraryItemList', {
    // this function is run AFTER the props have been passed in
    data() {
        return {
            library: [
                new LibraryItem(new Book('1984', 237)),
                new LibraryItem(new Movie('Ready Player 1', 122)),
                new LibraryItem(new Movie('Avengers: Endgame', 189)),
            ]
        }
    },

    // values/bindings passed to this component
    props: {},

    // functions that you want to use in your view that are triggered manually
    methods: {},

    // props/data that needs to be calculated when dependencies change
    computed: {},

    // the view
    template: `
      <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 g-3">
      <div class="col" v-for="item in library">
        <library-item-card :item="item"/>
      </div>
      </div>
    `
});

const LibraryItemCardComponent = {
    props: {
        item: {type: LibraryItem}
    },

    methods: {
        itemCardComponent(item) {
            return item.media.constructor.type + 'Details';
        }
    },

    template: `
      <div class="card h-100">
      <div class="card-body">
        <component :is="itemCardComponent(item)" :item="item.media"/>
      </div>
      <div class="card-footer d-flex justify-content-end">
        <button v-if="item.isAvailable()" class="btn btn-outline-success" @click="item.checkOut()">Check Out</button>
        <button v-else class="btn btn-outline-warning" @click="item.checkIn()">Check In</button>
      </div>
      </div>
    `
};

app.component("LibraryItemCard", LibraryItemCardComponent);

app.component('BookDetails', {
    props:{
        item: {type: Book}
    },
    template: `
    <div class="book">
        <h3 class="card-title">{{ item.title }}</h3>
        <p class="card-text">Pages: {{ item.pages }}</p>
     </div>
    `
});

app.component('MovieDetails', {
    props: {
        item: {type: Movie}
    },
    template: `
    <div class="movie">      
        <h3 class="card-title">{{ item.title }}</h3>
        <p class="card-text">Runtime: {{ item.runtime }}</p>     
    </div>
    `
})