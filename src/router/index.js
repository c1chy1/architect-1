import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/uber-uns',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    path: '/kontakt',
    name: 'Contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  },


  {
    path: '/projekte',
    name: 'Projects',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "projects" */ '../views/Projects.vue')
  },



  {
    path: '/datenschutz',
    name: 'PrivacyStatement',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "privacystatement" */ '../views/PrivacyStatement.vue')
  },



  {
    path: '/impressum',
    name: 'Impressum',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "impressum" */ '../views/Impressum.vue')
  },

  {
    path: '/projektNr1',
    name: 'ProjectNr1',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "ProjectNr1" */ '../views/Projects/ProjectNr1.vue')
  },

  {
    path: '/projektNr2',
    name: 'ProjectNr2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "ProjectNr2" */ '../views/Projects/ProjectNr2.vue')
  },

  {
    path: '/projektNr3',
    name: 'ProjectNr3',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "ProjectNr3" */ '../views/Projects/ProjectNr3.vue')
  },

  {
    path: '/projektNr4',
    name: 'ProjectNr4',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "ProjectNr1" */ '../views/Projects/ProjectNr4.vue')
  },
  {
    path: '/projektNr5',
    name: 'ProjectNr5',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "ProjectNr1" */ '../views/Projects/ProjectNr5.vue')
  },
  {
    path: '/projektNr6',
    name: 'ProjectNr6',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "ProjectNr6" */ '../views/Projects/ProjectNr6.vue')
  },

  {
    path: '/projektNr7',
    name: 'ProjectNr7',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "ProjectNr7" */ '../views/Projects/ProjectNr7.vue')
  },



]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
