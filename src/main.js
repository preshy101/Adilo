import "bootstrap/dist/css/bootstrap.css"
// import './assets/main.css'
import { createRouter, createWebHistory} from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue';
import Home from "./views/Home.vue";
import List from "./views/List.vue";
import Record from "./views/Record.vue";
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faFilm, faShare } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faFilm, faShare)
 
const routes = [
    { path: '', name: 'home', component: Home},
    { path: '/list', name: 'list', component: List},
    { path: '/record', name: 'record', component: Record},
    ]
    const router = createRouter({
           history: createWebHistory(),
           routes: routes
    })
createApp(App).use(router)
.component('font-awesome-icon', FontAwesomeIcon).mount('#app')

import "bootstrap/dist/js/bootstrap.js"