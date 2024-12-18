export const protectedRoutes = [
    {
        path: "/profile",
        name: "user.profile",
        component: () => import("@/pages/user/Profile.vue"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/transactions",
        name: "user.transactions",
        component: () => import("@/pages/user/Transactions.vue"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/vouchers",
        name: "user.vouchers",
        component: () => import("@/pages/user/Vouchers.vue"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/deposit",
        name: "user.deposit",
        component: () => import("@/pages/user/Deposit.vue"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/withdraw",
        name: "user.withdraw",
        component: () => import("@/pages/user/Withdraw.vue"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/2D",
        name: "2D",
        component: () => import("@/pages/lottery/TwoD.vue"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/3D",
        name: "3D",
        component: () => import("@/pages/lottery/ThreeD.vue"),
        meta: {
            requiresAuth: true
        }
    },
]