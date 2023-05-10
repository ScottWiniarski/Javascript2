export default {
    props: {
        cart: {
            type: Object,
            required: true
        },
        thing: {
            type: String, // JSON string coming in from router
        }
    },
    data(){
        return {
            newItem : this.thing ? JSON.parse(this.thing) : false,
        }
    },
    computed: {
        cartTotal(){
            return this.cart.items.reduce((total, item) => total += item.price * item.qty, 0)
        },
        qtyTotal(){
            return this.cart.items.reduce((total, item) => total += item.qty, 0)
        },
    },
    mounted() {
        if (this.newItem) {
            // TODO: create a cart model
            // TODO: check for duplicates, update quantity
            // TODO: remember, this is a routing demo, not a full fledged app ;)
            this.cart.items.push(this.newItem);
        }
    },
    template: `<div>
        <div v-if="thing" class="alert alert-success"><strong>{{ newItem.name }}</strong> successfully added to your cart!</div>
        <h3>Items</h3> 
        <table class="table">
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Qty</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, i) in cart.items" :key="i">
                    <td>{{item.name}}</td>
                    <td>{{item.qty}}</td>
                    <td>\${{item.price}}</td>
                </tr>
                
            </tbody>
            <tfoot>
                <tr>
                    <td>Subtotal</td>
                    <td>{{qtyTotal.toFixed(0)}}</td>
                    <td>\${{cartTotal.toFixed(2)}}</td>
                </tr>
            </tfoot>
        </table>   
               
        <!-- TODO: turn links/buttons into router-links -->
        <button class="w-100 btn btn-primary btn-lg">Continue</button>
 
    </div>`
}
