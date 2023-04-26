app.component('AddRecipeModal', {
    data(){
        return {
            newRecipe: {
                recipe: new Recipe(),
                image: null,
            },
        }
    },

    emits: ['update:modelValue'],

    props: {
        // used for opening/closing the modal
        modelValue: {
            type: Boolean,
            default: false,
        },
    },

    methods: {
        closeModal(){
            this.updateModal(false);
        },
        updateModal(value){
            this.$emit('update:modelValue', value);
        },
        addRecipe() {
            // TODO: do some validation

            // TODO: add recipe to firebase
            db.collection("recipes")
                .add(this.newRecipe.recipe)
                .then(docRef => {
                    console.log('Document Added: ', docRef);

                    // TODO: add image to storage
                    this.addImage(docRef.id);

                    // clears form
                    this.newRecipe.recipe = new Recipe();
                })
                .catch(error => {
                    // TODO: let the user know an error occurred
                    console.log('Error adding document: ', error);
                })
                .finally(()=> {
                    this.closeModal();
                })




        },
        addImage(docId) {
            // docId and image file are required
            if (!docId || !this.newRecipe.image) {
                return false;
            }

            // create a filename we know will be unique
            // the other option would be to create a folder for each recipe
            let theRecipe = this.newRecipe;
            let allowedTypes = ['jpg', 'png', 'gif', 'webp'];
            let extension = theRecipe.image.name.toLowerCase().split('.').pop()

            // validate extension
            if (allowedTypes.indexOf(extension) < 0) {
                // invalid extension

                // let the user know...
                // TODO: let the user know WITHOUT alerts
                alert('Invalid file type.');

                return false;
            }

            // validate size (less than 200KB
            if (theRecipe.image.size > (200 * 1024)) {
                // file too large

                // let the user know...
                // TODO: let the user know WITHOUT alerts
                alert('File too large. 200KB max');

                return false;
            }

            // TODO: add image to firebase
            storage.child('recipes').child(docId)
                .put(theRecipe.image)
                .then(snapshot => {
                    console.log('Image added: ', snapshot);

                    // clear the form - it's null since an empty string would change the data type
                    this.newRecipe.image = null;

                    // get the image URL in firebase (This is a query that returns a promise)
                    return snapshot.ref.getDownloadURL();
                })
                .then(url => {
                    return db.collection('recipes').doc(docId).update({image: url});
                })
                .then(docRef =>{
                    console.log('Recipe image has been updated.');
                })
                .catch(error => {
                    console.error('Error adding image: ', error);
                })

        }
    },

    template: `
        <bs-modal title="Submit a Recipe" :model-value="modelValue" @update:modelValue="updateModal">
            <div class="tabs">
                <ul role="tablist" class="nav nav-tabs">
                    <li role="presentation" class="nav-item">
                        <a role="tab" data-toggle="tab"
                           aria-selected="true" aria-setsize="3" aria-posinset="1"
                           href="#bs-tabs-description"
                           class="nav-link active"
                           id="bs-tabs-description__button"
                           aria-controls="bs-tabs-description">Description</a>
                    </li>
                    <li role="presentation" class="nav-item">
                        <a role="tab" data-toggle="tab"
                           aria-selected="false" aria-setsize="3" aria-posinset="2"
                           href="#bs-tabs-ingredients"
                           class="nav-link"
                           id="bs-tabs-ingredients__button"
                           aria-controls="bs-tabs-ingredients">Ingredients</a>
                    </li>
                    <li role="presentation" class="nav-item">
                        <a role="tab" data-toggle="tab"
                           aria-selected="false" aria-setsize="3" aria-posinset="3"
                           href="#bs-tabs-directions"
                           class="nav-link"
                           id="bs-tabs-directions__button"
                           aria-controls="bs-tabs-directions">Directions</a>
                    </li>
                    <!----></ul>
                <div class="tab-content mt-3" id="bs-tabs__tab-container">
                    <div role="tabpanel" aria-hidden="false" class="tab-pane active" id="bs-tabs-description"
                         aria-labelledby="bs-tabs-description__button">
                        <div role="group" class="form-group">
                            <label for="name" class="d-block">Name:</label>
                            <input id="name" v-model="newRecipe.recipe.name" type="text" required="required"
                                   aria-required="true" class="form-control">
                        </div>
                        <div role="group" class="form-group">
                            <label for="image" class="d-block">Image:</label>
                            <bs-file-input id="image" v-model="newRecipe.image"></bs-file-input>
                        </div>
                        <div role="group" class="form-group">
                            <label for="description" class="d-block">Description:</label>
                            <textarea id="description" v-model="newRecipe.recipe.description" required="required"
                                      rows="5" wrap="soft" aria-required="true" class="form-control"></textarea>
                        </div>
                    </div>
                    <div role="tabpanel" aria-hidden="true" class="tab-pane" id="bs-tabs-ingredients"
                         aria-labelledby="bs-tabs-ingredients__button">
                        <div v-for="(ingredient, i) in newRecipe.recipe.ingredients" class="row no-gutters">
                            <div class="col-10">
                                <fieldset class="form-group">
                                    <input v-model="newRecipe.recipe.ingredients[i]" type="text" required="required"
                                           aria-required="true" class="form-control">
                                </fieldset>
                            </div>
                            <div class="col-2">
                                <button @click="newRecipe.recipe.ingredients.splice(i, 1)" class="btn btn-link"><i
                                        class="fas fa-minus"></i>
                                </button>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <button @click="newRecipe.recipe.ingredients.push('')" class="btn btn-secondary btn-sm">Add
                                    Ingredient
                                </button>
                            </div>
                        </div>
                    </div>
                    <div role="tabpanel" aria-hidden="true" class="tab-pane" id="bs-tabs-directions"
                         aria-labelledby="bs-tabs-directions__button">
                        <div v-for="(direction, i) in newRecipe.recipe.directions" class="row no-gutters">
                            <div class="col-10">
                                <fieldset class="form-group">
                                    <input v-model="newRecipe.recipe.directions[i]" type="text" required="required"
                                           aria-required="true"
                                           class="form-control">
                                </fieldset>
                            </div>
                            <div class="col-2">
                                <button @click="newRecipe.recipe.directions.splice(i, 1)" class="btn btn-link"><i
                                        class="fas fa-minus"></i>
                                </button>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <button @click="newRecipe.recipe.directions.push('')" class="btn btn-secondary btn-sm">Add
                                    Step
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> <!-- end tabs -->
            <template v-slot:footer>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-primary" @click="addRecipe">Add Recipe</button>
            </template>
        </bs-modal>
    `
})
