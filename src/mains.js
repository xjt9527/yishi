import Vue from 'vue'
import store from '@/store'
import apiConfig from './common/apis/apiConfig'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'lib-flexible/flexible.js'
import './assets/css/reset.css'
import animated from 'animate.css' 
Vue.config.productionTip = false
let NODE_ENV = process.env.NODE_ENV
axios.defaults.baseURL = apiConfig[NODE_ENV]
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})

import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe).use(SwipeItem);
Vue.use(animated)
Vue.use(VueAxios,axios);

export {Vue,axios,store}