import { createRouter, createWebHistory, type NavigationGuardNext, type RouteLocationNormalized } from "vue-router";
import Error404 from "../pages/errors/Error404.vue";

import { publicRoutes } from "./routes/publicRoutes";
import { protectedRoutes } from "./routes/protectedRoutes";
import { authRoutes } from "./routes/authRoutes";
import { checkAuthRoute } from "./guards/routeGuards";

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

router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  if (to.matched.some(record => record.meta.requiresAuth || record.meta.authRoute)) {
    checkAuthRoute(to, from, next);
  } else {
    next();
  }
});
