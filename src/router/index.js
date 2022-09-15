import { createRouter, createWebHashHistory } from 'vue-router'

//import AnimalInfo from '../components/AnimalInfo.vue'
//import Anim from '@/pages/Anim.vue'
import MainPage from '@/components/MainPage.vue'
import Pets from '@/pages/Pets.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage
  },
 
  {
    path: '/pets/:id',
    component: Pets
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
