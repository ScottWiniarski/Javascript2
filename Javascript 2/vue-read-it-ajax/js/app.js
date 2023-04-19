const app = Vue.createApp({
    // data: all the data for the app
    data() {
        return {
            searching: true,
            searchTerm: '🐝',
            searchResults: new PublicationCollection(),
            currentCollection: new PublicationCollection(),
            bookmarks: new PublicationCollection(),
            favorites: new PublicationCollection(),
            bookshelf: 'store',
            localBookmarks: 'read-it-bookmarks',
            localFavorites: 'read-it-favorites',
        };
    },

    // methods: usually "events" triggered by v-on:
    methods: {
        // change "page" by setting books array
        display(bookshelf){
            this.bookshelf = bookshelf;

            switch(this.bookshelf){
                case 'store':
                    this.currentCollection = this.searchResults;
                    break;
                case 'bookmarks':
                    this.currentCollection = this.bookmarks;
                    break;
                case 'favorites':
                    this.currentCollection = this.favorites;
                    break;
            }
        },

        clearResults(){
            this.searchResults = new PublicationCollection();
        },

        // LOAD BOOKS
        searchBooks() {
            // prepare and perform search
            if(this.searchTerm){
                this.clearResults();

                // display message
                this.searching = true;

                GoogleBooks
                    .search(this.searchTerm)
                    .then(response => {
                        console.log('api response', response);
                        // store the items in data (if no custom models)
                        //this.searchResults = response.data.items;

                        if(response.data.items.length > 0){
                            this.searchResults = PublicationCollectionFactory.createFromGoogleBooks(response.data.items);
                        }
                        console.log(this.searchResults);
                    })
                    .catch(error => {
                        console.error('AJAX Search Error', error);
                        // TODO: let the user know
                    })
                    .finally(() => {
                        // removes loading screen.
                        this.searching = false;

                        // redirect to store page
                        this.display('store')
                    })
            }
        },
    },

    // computed: values that are updated and cached if dependencies change
    computed: {

    },

    //mounted:  called after the instance has been mounted,
    mounted: function() {
        // if we have a list in local storage, replace the sample data
        if (localStorage.getItem(this.localBookmarks)){
            // TODO: add localstorage
            this.bookmarks = PublicationCollectionFactory.createFromLocalStorage(JSON.parse(localStorage.getItem(this.localBookmarks)));
        }

        if (localStorage.getItem(this.localFavorites)){
            // TODO: add localstorage
            this.favorites = PublicationCollectionFactory.createFromLocalStorage(JSON.parse(localStorage.getItem(this.localFavorites)));
        }

        // perform default search
        this.searchBooks();
    },

    // watch: calls the function if the value changes
    // https://travishorn.com/add-localstorage-to-your-vue-app-in-2-lines-of-code-56eb2c9f371b
    watch: {
        bookmarks: {
            handler: function(newCollection) {
                // store in local storage for later
                localStorage.setItem(this.localBookmarks, JSON.stringify(newCollection.items));
            },
            deep: true,
        },
        favorites: {
            handler: function(newCollection) {
                // store in local storage for later
                localStorage.setItem(this.localFavorites, JSON.stringify(newCollection.items));
            },
            deep: true,
        }
    }
});
