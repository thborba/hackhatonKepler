import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
<<<<<<< HEAD
import CreatePoint from '../views/CreatePoint.vue'
=======
import Educational from '../views/Educational'
>>>>>>> c612a6a0d9f99f7d3dcbf838249d09f43c2424f2

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
<<<<<<< HEAD
    path: '/novo',
    name: 'CreatePoint',
    component: CreatePoint
=======
    path: '/como-fazer',
    name: 'Educational',
    component: Educational
>>>>>>> c612a6a0d9f99f7d3dcbf838249d09f43c2424f2
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
