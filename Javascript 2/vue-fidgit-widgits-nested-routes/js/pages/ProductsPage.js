export default {
    data() {
        return {
            products: [
                {name: 'Spin-It Widgit', qty: 1, price: 1.99, image: 'spin-it.jpg', description: 'Fidget in style with this awesome red fidget widget!'},
                {name: 'Click-It Widgit', qty: 1, price: 2.99, image: 'click-it.jpg', description: 'Click it to pass the time or work out your fingers. Just click it!'},
                {name: 'Stick-It Widgit', qty: 1, price: 3.99, image: 'stick-it.jpg', description: 'The original. Stick it, poke it, or whack it... just don\'t break it!'},
                {name: 'Roll-It Widgit', qty: 1, price: 4.99, image: 'roll-it.jpg', description: 'Roll it, kick it, or throw it. (Game sold separately)'},
                {name: 'Kill-It Widgit', qty: 1, price: 5.99, image: 'kill-it.jpg', description: 'Not just for flies, this killing machine can help kill time!'},
                {name: 'Sing-It Widgit', qty: 1, price: 6.99, image: 'sing-it.jpg', description: 'Need less friends? Just sing into it and watch them disappear!'},
            ],
        }
    },
    methods:{
        addToCart(product){
            // TODO: send product to cart page
            this.$router.push({name: 'addToCart', params: {thing: JSON.stringify(product)}})

        }
    },
    template: `
    <div class="products-page">
        <h2 class="mb-3">Products</h2>
        <div class="container">
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                <div class="col mb-4" v-for="(product, i) in products" :key="i">
                  <div class="card h-100">
                    <div class="card-img-top pt-3">
                        <img :src="'images/' + product.image" style="height: 175px; width: 100%; object-fit: contain" :alt="product.name">
                    </div>
                    <div class="card-body d-flex flex-column">
                      <h5 class="card-title">{{product.name}}</h5>
                      <p class="card-text">{{product.description}}</p>
                      <p class="card-text mt-auto">\${{product.price}}</p>
                    </div>
                    <div class="card-footer d-flex justify-content-between align-items-center">
                      <label class="m-0">
                          <select v-model="product.qty" class="form-select">
                            <option v-for="i in 10" :value="i">{{i}}</option>
                          </select>
                      </label>
                      <button @click="addToCart(product)" class="btn btn-primary">Add to Cart</button>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  `
};
