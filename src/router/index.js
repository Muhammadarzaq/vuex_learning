import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "home",
    HomeView: () => import(/* webpackChunkName: "about" */ "../views/HomeView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/archive",
    name: "archive",
    component: () => import(/* webpackChunkName: "contact" */ "../views/ArciveView.vue"), // Perbaiki typo dalam nama komponen
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
