import Vue from 'vue';
import VueRouter from 'vue-router';
import About from '../views/About.vue';
import Search from '../views/Search.vue';

Vue.use(VueRouter);

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

const router = new VueRouter({
  routes,
});

export default router;
