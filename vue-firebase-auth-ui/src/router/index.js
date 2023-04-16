import { createRouter, createWebHistory } from 'vue-router'
import TopPage from '../components/Top.vue'
import Dashboard from '../components/Dashboard.vue'
import FirebaseAuthUI from  '../components/FirebaseAuthUI.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'toppage',
      component: TopPage
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/login',
      name: 'loging',
      component: FirebaseAuthUI
    },
  ]
})

export default router
