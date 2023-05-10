import HomePage from "./pages/HomePage.js";
import ProductsPage from "./pages/ProductsPage.js";
import FaqPage from "./pages/FaqPage.js";
import CartPage from "./pages/CartPage.js";
import CartItemsPage from "./pages/CartItemsPage.js";
import CartShippingPage from "./pages/CartShippingPage.js";
import CartPaymentPage from "./pages/CartPaymentPage.js";
import CartConfirmationPage from "./pages/CartConfirmationPage.js";

export default VueRouter.createRouter({
    // history: VueRouter.createWebHistory() (w/o # in url) requires CLI and/or server configuration
    history: VueRouter.createWebHashHistory(),
    routes: [
        {path: '', component: HomePage},
        {path: '/products', component: ProductsPage},
        {path: '/faq', component: FaqPage},
        {
            path: '/cart', component: CartPage, children: [
                {path: '', redirect: '/cart/items'},
                {name: 'items', path: 'items', component: CartItemsPage}, // cart/items in url
                {name: 'shipping', path: 'shipping', component: CartShippingPage},
                {name: 'payment', path: 'payment', component: CartPaymentPage},
                {name: 'confirmation', path: 'confirmation', component: CartConfirmationPage},
                // setting props: to true allows data passed to the route to be converted into props in the component
                {name: 'addToCart', path: 'add', component: CartItemsPage, props: true},
            ]
        },
        // TODO: Add nested routes
    ],
    linkActiveClass: 'active'
})
