app.component('RecipeList', {
    data: function () {
        return {
            recipes: [], // placeholder until firebase data is loaded
        };
    },

    methods: {
        loadRecipes(){
            // TODO: load recipes from firebase in to results array
            db.collection('recipes')
                .onSnapshot(snapshot => {
                    this.recipes = [];

                    snapshot.forEach(doc => {
                        this.recipes.push(new Recipe(doc.id, doc.data()));
                    })
                })
        },
    },

    // IMPORTANT!!!
    mounted: function () {
        this.loadRecipes();
    },

    template: `
        <div class="recipe-list">
            <recipe-card v-for="recipe in recipes" :recipe="recipe" :key="recipe.id"></recipe-card>
        </div>
    `,

});
