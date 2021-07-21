import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'Home',
    redirect: '/home',
    // component: Home
  },
  {
    path: '/home',
    name: 'Home',
    // redirect: '/home',
    component: Home
  },
  {
    path: '/vip',
    name: 'Vip',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Vip.vue')
  },
  {
    path: '/live',
    name: 'Live',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Live.vue')
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () => import(/* webpackChunkName: "about" */ '../views/Mine.vue')
  },
  {
    path: '/recharge',
    name: 'Recharge',
    component: () => import(/* webpackChunkName: "about" */ '../views/Recharge.vue')
  },
  {
    path: '/list',
    name: 'List',
    component: () => import(/* webpackChunkName: "about" */ '../views/List.vue')
  },
  {
    path: '/arrival',
    name: 'Arrival',
    component: () => import(/* webpackChunkName: "about" */ '../views/Arrival.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
