import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home/Home.vue';
import About from '../views/About/About.vue';
import Project from '../views/Project/Project.vue';
import Lab from '../views/Lab/Lab.vue';
import Illustration from '../views/Illustration/Illustration.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
    
  },
  {
    path: '/project/:id',
    component: Project,
    name: "route-project"
  },
  {
    path: '/lab/:id',
    component: Lab,
    name: "route-lab"
  },
  {
    path: '/illustration/:id',
    component: Illustration,
    name: "route-illustration"
  }
]

const router = new VueRouter({
  routes
})

export default router
