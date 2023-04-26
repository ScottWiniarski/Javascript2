// Recipe Model
// Must be a factory function as Firebase only accepts generic objects.
// Later we will discuss how to use custom models with Firebase.
function Recipe(id, data){
    // these arguments are optional
    id = id ?? '';
    data = data ?? {};

    return {
        id: id,
        name: data.name ?? '',
        image: data.image ?? null,
        description: data.description ?? '',
        ingredients: data.ingredients ?? [''],
        directions: data.directions ?? [''],
        rating: data.rating ?? 0,
    }
}
