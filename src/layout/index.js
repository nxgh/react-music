import React from 'react'
import { renderRoutes } from 'react-router-config'
import { NavLink } from 'react-router-dom'

import { ReactComponent as Menu } from '../assets/svg/menu-e6e6e6.svg'
import { ReactComponent as Search } from '../assets/svg/search-white.svg'

import { TabNav, Nav } from './style'
export default function Home(props) {
  return (
    <div>
      <TabNav>
        <Menu className='iconfont' />
        <Nav>
          <NavLink to='/recommend' activeClassName='selected'>
            发现
          </NavLink>
          <NavLink to='/my' activeClassName='selected'>
            我的
          </NavLink>
          <NavLink to='/rank' activeClassName='selected'>
            排行榜
          </NavLink>
        </Nav>
        <Search className='iconfont' />
      </TabNav>
      {renderRoutes(props.route.routes)}
    </div>
  )
}
