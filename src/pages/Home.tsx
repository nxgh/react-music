import React, { FC, memo } from 'react'
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config'
import { NavLink, useLocation } from 'react-router-dom'
import {
  HamburgerButton as IHamburgerButton,
  Search as ISearch,
  Concern as IConcern,
  CollectionRecords as ICollectionRecords,
  Entertainment as IEntertainment,
  Fm as IFm,
  Music as IMusic,
} from '@icon-park/react'

import SwiperCore, { Pagination } from 'swiper'
import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'
SwiperCore.use([Pagination])
interface IProps {
  route: {
    routes: RouteConfigComponentProps[]
  }
}

const Home: FC<IProps> = props => {
  let { pathname } = useLocation()

  const isHighlight = (link: string) => ({
    icon: pathname === link ? 'bg-red-500' : '',
    text: pathname === link ? 'text-red-500' : '',
  })
  const menu = [
    {
      index: 0,
      label: '发现',
      link: '/recommend',
      Icon: <IConcern theme="outline" size="20" fill="#333" />,
    },
    {
      index: 1,
      label: '我的',
      link: '/singers',
      Icon: <IMusic theme="outline" size="20" fill="#333" />,
    },
    {
      index: 2,
      label: '排行',
      link: '/rank',
      Icon: <ICollectionRecords theme="outline" size="20" fill="#333" />,
    },
    {
      index: 3,
      label: '电台',
      link: '/rank',
      Icon: <IFm theme="outline" size="20" fill="#333" />,
    },
  ]

  return (
    <div className="h-full relative">
      <div className="bg-white flex justify-between p-3 h-12 fixed top-0 right-0 left-0 z-50">
        <IHamburgerButton theme="outline" size="24" fill="#3e3e3e" />
        <ISearch size="24" />
      </div>
      <div className="mt-12">{renderRoutes(props.route.routes)}</div>

      <div className="fixed bottom-0 flex justify-around w-full mt-12">
        {menu.map(item => (
          <NavLink key={item.index} to={item.link} className="flex flex-col justify-center items-center">
            <span className={`${isHighlight(item.link).icon} rounded-full flex justify-center items-center p-1`}>
              {item.Icon}
            </span>
            <span className={`${isHighlight(item.link).text} text-xs`}>{item.label}</span>
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default memo(Home)
