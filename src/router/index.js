import { createRouter, createWebHistory } from 'vue-router'
import QuestionPage from '../views/QuestionPage.vue'
import '../assets/styles/styles.scss'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'QuestionPage',
      component: QuestionPage
    },
  ]
})

export default router
