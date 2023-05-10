export default {
    data() {
        return {
            cart: {
                items: [
                    {name: 'Existing Item 1', qty: 1, price: .99},
                    {name: 'Existing Item 2', qty: 1, price: 2.99},
                ],
                shipping: {},
                payment: {}
            }
        }
    },
    computed: {
        subtotal() {
            return this.cart.items.reduce((total, item) => (total + item.price * item.qty), 0)
        },
        tax() {
            // TODO: use API to figure out tax based on shipping zip
            return this.subtotal * .05;
        },
        shippingCost() {
            // TODO: use another API to calculate shipping cost
            return 5.99;
        },
        total() {
            return this.subtotal + this.tax + this.shippingCost;
        }
    },

    // TODO: add watch and created methods to store/retrieve cart items from session
    created: function () {
        // put list from localStorage in the app, if it exists
        if (localStorage.getItem('widgitCart')) {
            // TODO: this.cart = JSON.parse(localStorage.getItem('widgitCart'));
        }
    },
    watch: {
        cart: {
            // call this before the item changes
            handler: function (newList) {
                // newList is the list BEFORE it updates the model/view
                // TODO: localStorage.setItem('widgitCart', JSON.stringify(newList));
            },

            // deep tells vue to watch nested properties
            deep: true
        }
    },

    template: `
    <div class="cart-page">
        <h2>Cart</h2>
        <div class="container">
            <div class="row">
                <div class="col col-md-8">
                    <ul class="nav nav-pills nav-fill mb-3">
                        <li class="nav-item">
                          <router-link to="/cart/items" class="nav-link">1. Review</router-link>
                        </li>
                        <li class="nav-item">
                          <router-link to="/cart/shipping" class="nav-link">2. Shipping</router-link>
                        </li>
                        <li class="nav-item">
                          <router-link to="/cart/payment" class="nav-link">3. Payment</router-link>
                        </li>
                        <li class="nav-item">
                          <router-link to="/cart/confirmation" class="nav-link">4. Confirmation</router-link>
                        </li>
                    </ul>
                    
                    <!-- TODO: Add nested view -->
                  <router-view :cart="cart"></router-view>
                    
                </div>
                <div class="col col-md-4">
                    <h3>Cart Summary</h3>
                    <table class="table table-borderless">
                   
                        <tbody>
                            <tr>
                                <td>{{cart.items.length}} Items</td>
                                <td>\${{subtotal.toFixed(2)}}</td>
                            </tr>
                            <tr v-if="cart.shipping.zip">
                                <td>Tax</td>
                                <td>\${{tax.toFixed(2)}}</td>
                            </tr>
                            <tr v-if="cart.shipping.zip">
                                <td>Shipping</td>
                                <td>\${{shippingCost}}</td>
                            </tr>
                            <tr v-if="cart.payment.creditCard">
                                <td>Payment</td>
                                <td>**** **** **** {{cart.payment.creditCard.substr(-4, 4)}}</td>
                            </tr>
                            <tr v-if="cart.shipping.zip" class="font-weight-bold">
                                <td>Total</td>
                                <td>\${{total.toFixed(2)}}</td>
                            </tr>
                        </tbody>
                    </table>
                    
                </div>
            </div>
        </div>
    </div>
  `
};
