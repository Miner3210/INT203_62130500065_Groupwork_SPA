import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Menu from '../views/Menu.vue'
import AddUser from '../views/AddUser.vue'
import Change from '../views/Change.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Menu',
    name: 'Menu',
    component: Menu
  },
  {
    path:'/AddUser',
    name: 'AddUser',
    component:AddUser
  },
  {
    path:'/Change',
    name:'Change',
    component:Change
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
