import Vue from 'vue';
import Router from 'vue-router';
import routerChildren from './routerChildren'
Vue.use(Router);

export default new Router({
    // mode: 'history',
    routes: [
        {
          
            path: "/",
            redirect: "/Home/clubCard/home"
        },
        {
            path: "/Home",
            component: resolve =>
                require(["../components/common/Home.vue"], resolve),
                children: routerChildren
        } 
    ]
});
