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
        path: "/2D",
        name: "2D",
        component: () => import("@/pages/lottery/TwoD.vue")
    },
    {
        path: "/3D",
        name: "3D",
        component: () => import("@/pages/lottery/ThreeD.vue")
    },
];