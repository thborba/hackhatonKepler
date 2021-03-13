import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Educational from '../views/Educational'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/como-fazer',
    name: 'Educational',
    component: Educational
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
