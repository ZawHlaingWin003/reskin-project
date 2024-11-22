export const authRoutes = [
    {
        path: "/login",
        name: "auth.login",
        component: () => import("@/pages/auth/Login.vue"),
        meta: {
            authRoute: true
        }
    },
    {
        path: "/register",
        name: "auth.register",
        component: () => import("@/pages/auth/Register.vue"),
        meta: {
            authRoute: true
        }
    },
    {
        path: "/forgot-password",
        name: "auth.forgot-password",
        component: () => import("@/pages/auth/ForgotPassword.vue"),
        meta: {
            authRoute: true
        }
    },
]