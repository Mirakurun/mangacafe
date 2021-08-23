const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'home', path: '', component: () => import('pages/Index.vue') },
      {
        path: '/manga/:id',
        component: () => import('pages/Manga.vue'),
        children: [
          {
            name: 'manga-home',
            path: '',
            component: () => import('pages/MangaIndex.vue'),
          },
        ],
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
