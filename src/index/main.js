// import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {axios,Vue,store}  from '../mains.js'
import { Swipe, SwipeItem } from 'mint-ui';
import 'mint-ui/lib/style.css'


console.log('main.js');
new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);