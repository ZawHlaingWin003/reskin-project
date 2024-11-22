import { createRouter, createWebHistory, type NavigationGuardNext, type RouteLocationNormalized } from "vue-router";
import Error404 from "../pages/errors/Error404.vue";

import { publicRoutes } from "./routes/publicRoutes";
import { protectedRoutes } from "./routes/protectedRoutes";
import { authRoutes } from "./routes/authRoutes";

export const routes = [
  {
    path: "/",
    component: () => import("@/layouts/Page.vue"),
    children: [
      ...publicRoutes,
      ...protectedRoutes,
      ...authRoutes
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    component: Error404,
    name: "error-404"
  }
];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0, behavior: 'smooth' }
  }
});

