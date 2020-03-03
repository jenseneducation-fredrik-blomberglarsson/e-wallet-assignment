import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddCard from '../views/AddCard.vue'
import CardStack from '../components/CardStack.vue'
import Top from '../components/Top.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,

    children: [
      { path: 'card/:id', component: CardStack }
    ]
  },

  {
    path: '/AddCard',
    name: 'AddCard',
    component: AddCard,
  },
  {
    path: '/Top',
    name: 'Top',
    component: Top
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
