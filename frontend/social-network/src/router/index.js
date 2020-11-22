import Vue from 'vue';
import VueRouter from 'vue-router';

//Vue.useCssModule(Vuex);
Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/',
    name: 'Signup',
    component: () => import('../views/Signup.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router;
