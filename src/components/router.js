// router.js

import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home.vue'; // Import your components for different routes

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // Add more routes here as needed
];

const router = new VueRouter({
  mode: 'history', // Use history mode for clean URLs
  base: process.env.BASE_URL,
  routes,
});

export default router;
