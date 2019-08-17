import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store'
import apiConfig from '../common/apis/apiConfig'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'lib-flexible/flexible.js'
Vue.config.productionTip = false

let NODE_ENV = process.env.NODE_ENV
console.log(NODE_ENV);

console.log(apiConfig[NODE_ENV]);
axios.defaults.baseURL = apiConfig[NODE_ENV]


Vue.use(VueAxios,axios);

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')