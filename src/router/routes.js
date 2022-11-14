const routes = [
  {
    path: "/",
    component: () => import("layouts/LoginLayout.vue"),
    children: [{ path: "",name: 'login', component: () => import("pages/authentication/LoginPage.vue") }],
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'bettingGame', name: 'bettingGame', component: () => import('pages/bettingCreate/bettingGame.vue') },
    ],
    //meta: {
    //  requiresAuth: true
    //}
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
