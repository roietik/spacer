import Vue from 'vue';
import Router from 'vue-router';
import About from '../views/About.vue';
import Search from '../views/Search.vue';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'search',
    component: Search,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
];

const router = new Router({
  routes,
});

export default router;
