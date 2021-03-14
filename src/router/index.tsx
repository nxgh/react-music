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
const Playlist = lazy(() => import('../pages/Playlist'))
const Fm = lazy(() => import('../pages/Fm'))
const Album = lazy(() => import('../pages/Album'))
const PlaylistDetail = lazy(() => import('../pages/Playlist/Detail'))
const NotFound = lazy(() => import('../pages/Error/NotFound'))
const routes: RouteConfig[] = [
  {
    path: '/',
    component: SuspenseComponent(Home),
    routes: [
      {
        path: '/',
        exact: true,
        render: () => <Redirect to={'/recommends'} />,
      },
      {
        path: '/recommends',
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
      {
        path: '/playlists',
        component: SuspenseComponent(Playlist),
      },
      {
        path: '/album',
        component: SuspenseComponent(Album),
      },
      {
        path: '/fm',
        component: SuspenseComponent(Fm),
      },
      {
        path: '/playlist/:id',
        component: SuspenseComponent(PlaylistDetail),
      },
      {
        path: '/404',
        component: SuspenseComponent(NotFound),
      },
      {
        path: '*',
        render: () => <Redirect to={'/404'} />,
      },
    ],
  },
]

export default routes
