import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/Project',
    name: 'Project',
    component: () => import('../views/Project.vue')
  },
  {
    path: '/Services',
    name: 'Services',
    component: () => import('../views/Services.vue')
  },
  {
    path: '/Team',
    name: 'Team',
    component: () => import('../views/Team.vue')
  },
  {
    path: '/project_one/:id',
    name: 'Project-one',
    component: () => import('../views/Project-one.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
