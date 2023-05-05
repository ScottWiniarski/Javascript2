import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import bootStrap from '../package.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

// import 'bootstrap/dist/js/bootstrap';
//
// import "./sass/app.scss";

createApp(App).use(router).mount('#app')
