import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginViewVue from '@/views/LoginView.vue'
import DashView from '../views/DashView.vue'
import AboutViewVue from '../views/AboutView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta:{
        requireAuth:false
      }
    },
    {
      path: '/about',
      name: 'about',
      meta:{
        requireAuth:false
      },
      component:AboutViewVue
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      meta:{
        requireAuth:false
      },
      component: DashView
    },
    {
      path:'/login',
      name:'login',
      component: LoginViewVue
    }
  ]
})

router.beforeEach((to,from,next)=>{
    const auth = false
    const needAuth = to.meta.requireAuth
    if(needAuth && !auth){
        next('login')
    }else{
        next()
    }
})

export default router
