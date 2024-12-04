import { LOCAL_STORAGE_KEYS } from "@/utils/constants";
import { type NavigationGuardNext, type RouteLocationNormalized } from "vue-router";

export const checkAuthRoute = (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    const token = localStorage.getItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN_KEY);

    if (token && to.matched.some(record => record.meta.authRoute)) {
        next({ name: 'home' });
    } else if (to.matched.some(record => record.meta.requiresAuth) && (!token)) {
        next({
            name: "auth.login",
            query: { to: to.path }
        });
    } else {
        next();
    }
};