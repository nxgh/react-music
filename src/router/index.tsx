import React, { lazy, Suspense, LazyExoticComponent } from 'react'
import { Redirect } from 'react-router-dom'
import { RouteConfig } from 'react-router-config'

const SuspenseComponent = (Component: LazyExoticComponent<any>) => (props: any) => (
  <Suspense fallback={null}>
    <Component {...props} />
  </Suspense>
)
const Home = lazy(() => import('../pages/Home'))
const Recommend = lazy(() => import('../pages/Recommend'))
const Singers = lazy(() => import('../pages/Singers'))
const Rank = lazy(() => import('../pages/Rank'))
const routes: RouteConfig[] = [
  {
    path: '/',
    component: SuspenseComponent(Home),
    routes: [
      {
        path: '/',
        exact: true,
        render: () => <Redirect to={'/recommend'} />,
      },
      {
        path: '/recommend',
        component: SuspenseComponent(Recommend),
      },
      {
        path: '/singers',
        component: SuspenseComponent(Singers),
      },
      {
        path: '/rank',
        component: SuspenseComponent(Rank),
      },
    ],
  },
]

export default routes
