app.component('SearchForm', {
    data(){
        return {
            keyword: '',
        }
    },

    props: {
        searchFunction: Function
    },

    methods: {
        search(){
            this.searchFunction(this.keyword);
        }
    },

    template: `
        <q-form @submit.prevent="search" class="q-flex row">
            <q-input
                v-model="keyword"
                label="Search"
                placeholder="Title or artist"
                class="col"
                filled
            />
            <q-btn type="submit" color="primary" class="col-auto">
                <q-icon name="search" />
            </q-btn>
        </q-form>
    `
})
