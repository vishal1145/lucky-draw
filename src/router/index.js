import { createRouter, createWebHistory } from 'vue-router'

// Lazy load routes for better code splitting and performance
const HomePage = () => import('../views/HomePage.vue')
const AboutPage = () => import('../views/AboutPage.vue')
const ContactPage = () => import('../views/ContactPage.vue')
const ResultAnnounce = () => import('../views/resultAnnounce.vue')
const ThankYou = () => import('../views/ThankYou.vue')

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