import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home-view" */ "../views/HomeView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import(/* webpackChunkName: "about-view" */ "../views/AboutView.vue"),
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
