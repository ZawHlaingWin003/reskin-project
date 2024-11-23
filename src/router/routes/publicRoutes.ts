export const publicRoutes = [
    {
        path: "",
        name: "home",
        component: () => import("@/pages/home/Home.vue")
    },
    {
        path: "/promotions",
        name: "promotions",
        component: () => import("@/pages/promotions/Index.vue")
    },
    {
        path: "/slots",
        name: "slots",
        component: () => import("@/pages/slots/Index.vue")
    },
    {
        path: "/cards",
        name: "cards",
        component: () => import("@/pages/cards/Index.vue")
    },
    {
        path: "/lottery",
        name: "lottery",
        component: () => import("@/pages/lottery/Index.vue")
    },
];