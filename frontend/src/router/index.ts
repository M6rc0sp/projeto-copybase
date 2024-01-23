import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import AnalysisView from '../views/AnalysisView.vue';

const router = createRouter({
  history: createWebHistory(window.location.pathname),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/analysis',
      name: 'analysis',
      component: AnalysisView
    }
  ]
})

export default router

