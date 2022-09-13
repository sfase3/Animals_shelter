import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AnimalInfo from '../components/AnimalInfo.vue'
import Anim from '@/pages/Anim.vue'
import MainPage from '@/components/MainPage.vue'
import Pets from '@/pages/Pets.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/hom/:id',
    component: Anim
  },
  {
    path: '/pets',
    component: Pets
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
