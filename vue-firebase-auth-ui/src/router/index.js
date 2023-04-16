import { createRouter, createWebHistory } from 'vue-router'
import TopPage from '../components/Top.vue'
import Dashboard from '../components/Dashboard.vue'
import FirebaseAuthUI from  '../components/FirebaseAuthUI.vue'

import { getAuth, onAuthStateChanged } from "firebase/auth";


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
      component: Dashboard,
      meta: { requiresAuth: true } // By using this feed, the router can recognize the route as protected.
    },
    {
      path: '/login',
      name: 'loging',
      component: FirebaseAuthUI
    },
  ]
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const auth = getAuth();

  if (requiresAuth) {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // The user is already logged in, so that the page will be redirected to the restricted area.
        next()
      } else {
        // User is signed out
        // User will be redirected to the sign-in page
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      }
    });
  } else {
    next()
  }
})

export default router
