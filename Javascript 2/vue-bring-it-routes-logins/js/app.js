// Initialize App
const app = new Vue({
    // el: the DOM element to be replaced with a Vue instance
    el: '#app',
    router: router,
    // data: all the data for the app
    data() {
        return {
            authUser: null,
        }
    },

    // called after the instance has been created
    created() {
        // TODO: check for logged in user
        // this gets called after login AND after logout
        auth.onAuthStateChanged(user => {
            if(user){
                // store logged in user in our app
                this.authUser = new User(user);

            }else{
                // logout - remove the current user.
                this.authUser = null;
            }
            console.log("Logged in as ", this.authUser);
        })
    },

});

