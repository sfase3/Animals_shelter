import { createRouter, createWebHashHistory } from 'vue-router'

//import AnimalInfo from '../components/AnimalInfo.vue'
//import Anim from '@/pages/Anim.vue'
import MainPage from '@/components/MainPage.vue'
import Pets from '@/pages/Pets.vue'
import Login from '@/views/Login.vue'
import { auth } from '@/firebase'
import Settings from '@/components/Settings.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage,
    meta: {
      requiresAuth: true
    }
  },
 
  {
    path: '/pets/:id',
    component: Pets,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/login",
    component: Login,
    
  },
  {
    path: '/set',
    
    component: Settings,
    meta: {
      requiresAuth: true
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to,from,next)=>{
  if(to.path === '/login' && auth.currentUser){
    next('/');
    return
  }

  // if(to.matched.some(record=>record.meta.requiresAuth) && !auth.currentUser){
  //   next('/login')
  //   return
  // }

  next()

})

export default router
