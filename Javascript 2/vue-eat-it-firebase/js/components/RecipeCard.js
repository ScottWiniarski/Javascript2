app.component('RecipeCard', {
    props: {
        recipe: {type: Object, required: true},
    },

    data: function () {
        return {
            showDetails: false,
        };
    },

    computed: {},

    methods: {
        like() {
            // increment rating... max of 5
            let newRating = this.recipe.rating + .5;
            if (newRating > 5) {
                newRating = 5;
            }

            // TODO: update rating
            db.collection('recipes').doc(this.recipe.id)
            // db.collection('recipes/' + this.recipe.id)...
                .update({rating: newRating})
            // TODO .catch(...)
        },

        remove() {
            // TODO: remove image
            storage.child('recipes')
                .child(this.recipe.id)
                .delete();

            // TODO: remove recipe
            db.collection('recipes')
                .doc(this.recipe.id)
                .delete();
        },

    },

    template: `
        <div class="card recipe mb-3"><!---->
            <div class="card-header bg-primary text-white">{{recipe.name}}</div>
            <div class="card-body">
                <div class="card-text">
                    <div class="row bottom-divider">
                        <div class="d-flex flex-column col-md-6">
                             <div class="rating">
                                <i v-for="n in Math.floor(recipe.rating)" class="fas fa-star"></i>
                                <template v-if="recipe.rating % 1 > .3">
                                    <i class="fas fa-star-half-alt"></i>
                                    <i v-for="n in Math.ceil(4 - recipe.rating)" class="far fa-star"></i>
                                </template>
                                 <template v-else>
                                    <i v-for="n in Math.ceil(5 - recipe.rating)" class="far fa-star"></i>
                                </template>
                             </div>
                            
                            <div v-if="recipe.description" class="description">{{recipe.description}}</div>
                            
                            <div class="buttons mt-auto d-flex flex-row justify-content-around">
                                <button class="btn btn-outline-primary btn-sm" @click="like"><i class="fas fa-thumbs-up"></i> Like It</button>
                                <button size="sm" class="btn btn-outline-primary btn-sm"><i class="fab fa-pinterest"></i> Pin It</button>
                                <button size="sm" class="btn btn-outline-primary btn-sm"><i class="fas fa-share-alt"></i> Share It</button>
                                <button size="sm" class="btn btn-outline-primary btn-sm" @click="remove"><i class="fas fa-trash"></i> Trash It</button>
                            </div>
                        </div>
                        
                        <div class="col-md-6">
                            <img v-if="recipe.image" :src="recipe.image" class="recipe-image">
                        </div>
                    </div>
                    <div class="row">
                        <div class="md-col-divider col-md-6">
                            <h5>Ingredients</h5>
                            <ul>
                                <li v-for="(ingredient, i) in recipe.ingredients">{{ingredient}}</li>
                            </ul>
                        </div>
                        <div class="col-md-6">
                            <h5>Directions</h5>
                            <ol>
                                <li v-for="(direction, i) in recipe.directions">{{direction}}</li>
                            </ol>
                        </div>
                    </div>
                </div><!-- end card text -->
            </div><!-- end card body -->
       </div><!-- end recipe card -->
    `,
});
