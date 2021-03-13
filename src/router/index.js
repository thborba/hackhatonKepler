import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Educational from '../views/Educational'
import CollectionLocationList from '../views/CollectionLocationList.vue'

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
  },
  {
    path: '/pontosColeta',
    name: 'CollectionLocationList',
    component: CollectionLocationList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
