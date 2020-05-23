import React from 'react'
import { Redirect } from 'react-router-dom'
import Layout from '../layout'
import Recommend from '../pages/Recommend'
import My from '../pages/My'
import Rank from '../pages/Rank'
import PlayList from '../pages/PlayList'

export default [
  {
    path: '/',
    component: Layout,
    routes: [
      {
        path: '/',
        exact: true,
        render: () => <Redirect to={'/recommend'} />,
      },
      {
        path: '/recommend/',
        component: Recommend,
        routes: [{ path: '/recommend/:id', component: PlayList }],
      },
      {
        path: '/my',
        component: My,
      },
      {
        path: '/Rank',
        component: Rank,
      },
    ],
  },
]
