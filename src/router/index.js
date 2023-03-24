import PageNotFoundVue from '@/views/PageNotFound.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/repo',
    name: 'repo',
    
    component: () => import( '../views/RepoView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'error page',
    component: PageNotFoundVue
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
