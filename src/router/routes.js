const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('pages/Dashboard.vue')
      },
      {
        path: 'queries',
        name: 'queries',
        component: () => import('pages/Queries.vue')
      },
      {
        path: '/archive',
        name: 'archive',
        component: () => import('pages/Archive.vue')
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('pages/Auth.vue')
      },
      {
        path: '/:number',
        component: () => import('pages/Query.vue'),
        props: (route) => ({ query: route.query.number })
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
