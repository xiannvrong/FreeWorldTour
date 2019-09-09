import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios'; 
import store from "./vuex/store" 
import "babel-polyfill";  

// 重制样式
import './../static/css/common/reset.css'; 
// 引用全局过滤器
import "./common/filters"; 
//vant ui  //按需引入
import { Button , PasswordInput , NumberKeyboard , Tab, Tabs , Dialog , Icon , DatetimePicker , Popup } from 'vant'
Vue.use(Button)
Vue.use(Dialog)
Vue.use(Icon)
Vue.use(Popup)
Vue.use(DatetimePicker)
Vue.use(PasswordInput).use(NumberKeyboard);
Vue.use(Tab).use(Tabs);

router.afterEach((to,from,next) => { 
	window.scrollTo(0, 0);
	document.documentElement.scrollTop = document.body.scrollTop = 0;
})  


import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css' 
Vue.use(VueAwesomeSwiper) 

import './common/list.css' 

Vue.prototype.$axios = axios;
new Vue({
    router,
    store, 
    render: h => h(App)
}).$mount('#app');