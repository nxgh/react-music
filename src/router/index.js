import React from 'react'
import { Redirect } from 'react-router-dom'
import Layout from '../layout'
import Recommend from '../pages/Recommend'
import My from '../pages/My'
import Rank from '../pages/Rank'

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
        path: '/recommend',
        component: Recommend,
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
