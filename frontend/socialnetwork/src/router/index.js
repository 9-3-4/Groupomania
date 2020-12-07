import { createWebHistory, createRouter } from "vue-router";
import home from "@/views/home.vue";
import signup from "@/views/signup.vue";
import login from "@/views/login.vue";
import mention from "@/views/mention.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path: "/signup",
    name: "signup",
    component: signup,
  },
  {
    path: "/login",
    name: "login",
    component: login,
  },
  {
    path: "/mention",
    name: "mention",
    component: mention,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
