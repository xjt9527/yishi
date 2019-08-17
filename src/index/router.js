import Vue from 'vue'
import Router from 'vue-router'
// import Index from './views/Index.vue'
// import About from './views/About.vue'
const Index = () => import('./views/Index.vue')
const About = () => import('./views/About.vue')
const DetailPage = () => import('./views/detailPage.vue')
const FirstPage = () => import('./views/firstPage.vue')
Vue.use(Router)

export default new Router({
  // mode:"history",
  routes: [
    {
      path: '/',
      name: 'Index',
      component: FirstPage
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
    ,{
      path: '/Detail',
      name: 'Detail',
      component: () => import('./views/Detail.vue')
    }
    ,{
      path: '/Search',
      name: 'Search',
      component: () => import('./views/Search.vue')
    },

    {
      path: '/detail-page',
      name: 'detailPage',
      component: DetailPage
    },
    {
      path: '/first-page',
      name: 'firstPage',
      component: FirstPage
    },
  ]
})
