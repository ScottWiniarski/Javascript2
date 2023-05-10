export default {
    props: {
        cart: {
            type: Object,
            required: true
        }
    },
    template: `
        <div>
            <h3>Confirmation</h3>
            <p>Name:</p>
            <p>Address:</p>
            <p>Payment:</p>
            <p>...</p>
            <hr class="my-4">
            <a href="#" class="w-100 btn btn-primary btn-lg">Checkout</a>

           
        </div>
  `
}
