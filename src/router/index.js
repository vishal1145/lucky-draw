import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import ContactPage from '../views/ContactPage.vue'
import ResultAnnounce from '../views/resultAnnounce.vue'
import ThankYou from '../views/ThankYou.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage
    },
     {
      path: '/announce-result',
      name: 'announce-result',
      component: ResultAnnounce
    },
    {
      path: '/thank-you',
      name: 'thank-you',
      component: ThankYou
    }
  ]
})

export default router 