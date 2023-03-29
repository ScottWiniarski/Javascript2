app.component('SortForm', {
    data(){
        let sortOptions = [
            {label: 'Rating', value: 'rating'},
            {label: 'Title', value: 'title'},
            {label: 'Artist', value: 'artist'},
            {label: 'Runtime', value: 'runtime'},
        ];
        return {
            sortOptions, // same as sortOptions: sortOptions
            sortValue: sortOptions[0], // set default to first option

        }
    },

    props: {
        sortFunction: Function
    },

    methods: {
        sort(){
            console.log('dropdown updated: ', this.sortValue.value)
            this.sortFunction(this.sortValue.value)
        }
    },

    template: `
        <q-form class="q-flex row">
            <q-select 
                v-model="sortValue"
                :options="sortOptions" 
                @update:model-value="sort"
                label="Sort By" 
                class="col"
                filled 
            />
        </q-form>
    `
})
