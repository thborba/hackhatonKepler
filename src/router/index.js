import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import CreatePoint from '../views/CreatePoint.vue'
import CreatePickup from '../views/CreatePickup.vue'

import Educational from '../views/Educational'

import CollectionLocationList from '../views/CollectionLocationList.vue'
import CollectorsList from '../views/CollectorsList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {

    path: '/novo',
    name: 'CreatePoint',
    component: CreatePoint
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

  },
  {
    path: '/novo-coletor',
    name: 'CreatePickup',
    component: CreatePickup
  },
  {
    path: '/listaColetores',
    name: 'CollectorsList',
    component: CollectorsList
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
