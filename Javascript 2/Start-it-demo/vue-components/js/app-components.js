const LibraryItemListComponent = app.component('LibraryItemList', {
    // this function is run AFTER the props have been passed in
    data() {
        return {
            library: [
                new Book('1984', 237),
                new Movie('Ready Player 1', 122),
                new Movie('Avengers: Endgame', 189),
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
                <div class="card h-100">
                    <div class="card-body">
                        <h3 class="card-title">{{item.title}}</h3>
<!--                      <p v-for="(name, value) in item">{{value instanceof Function ? '' : value}}</p>-->
                      <p  class="card-text">Pages: {{item.pages ?? "NA"}}</p>
<!--                      Or we can v-if it-->
                      <p v-if="item.constructor.type === 'Book'" class="card-text">Pages 2: {{item.pages}}</p>
                      <p v-if="item.runtime" class="card-text">Runtime: {{item.runtime}}</p>
                      <p v-if="item.constructor.type === 'Movie'" class="card-text">Runtime 2: {{item.runtime}}</p>
                        <p class="card-text">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
                    </div>
                    <div class="card-footer d-flex justify-content-end">
                        <button v-if="item.isAvailable()" class="btn btn-outline-success" @click="item.checkOut()">Check Out</button>
                        <button v-else class="btn btn-outline-warning" @click="item.checkIn()">Check In</button>
                    </div>
                </div>
            </div>
        </div>`,
});
