import React, { FC, memo } from 'react'
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config'
import { NavLink, useHistory } from 'react-router-dom'
import { Left, Right, Minus, FullScreenTwo, Close, Github, User, RightOne, Record } from '@icon-park/react'

import SwiperCore, { Pagination } from 'swiper'
import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'
SwiperCore.use([Pagination])
interface IProps {
  route: {
    routes: RouteConfigComponentProps[]
  }
}

const headerNav = [
  { text: '推荐', link: '/recommends' },
  { text: '排行榜', link: '/rank', },
  { text: '歌单', link: '/playlists', },
  { text: '主播电台', link: '/fm', },
  { text: '歌手', link: '/singers', },
  { text: '新碟上架', link: '/album', },
]

const HeaderAction = () => {
  const history = useHistory()
  return (
    <div className="flex justify-between sticky top-0 bg-white z-50" >
      <div className="ml-2">
        <Minus className="p-0.5 bg-green-500 rounded-xl mr-1 hover:bg-green-600" theme="outline" size="10" />
        <Close className="p-0.5 bg-red-500 rounded-xl mr-1 hover:bg-red-600" theme="outline" size="10" fill="white" />
        <FullScreenTwo className="p-0.5 bg-yellow-600 rounded-xl mr-1 hover:bg-yellow-700" theme="outline" size="10" fill="white" />
      </div>
      <div className="flex justify-end items-center  ">
        <Left theme="outline" size="18" fill="#333" onClick={() => history.goBack()} />
        <Right theme="outline" size="18" fill="#333" onClick={() => history.goForward()} />
      </div>
    </div>
  )

}
const HeaderNav = () => {
  return (
    <div className="bg-white flex justify-between sticky top-0 z-50">
      <div className="flex items-center">
        {
          headerNav.map(item =>
            <NavLink
              className="mx-5 text-base text-gray-500 hover:text-black cursor-pointer"
              key={item.text}
              to={item.link}>{item.text}</NavLink>
          )
        }
      </div>
      <HeaderSearch />
    </div>

  )
}
const HeaderSearch = () => {
  return (
    <div className="flex items-center mr-10">
      <input type="text" className="bg-gray-200 rounded-xl mr-3 focus:outline-none px-2 py-0.5" placeholder="搜索" />
      <Github theme="outline" size="24" fill="#333" strokeLinejoin="bevel" strokeLinecap="square" />
    </div>

  )
}

const SideBar = () => {
  return (
    <div className="bg-white-100 pl-3 py-3 fixed top-14 bottom-0 left-0">
      <div className="flex  items-center">
        <User theme="filled" size="22" fill="white"
          className="bg-gray-300 p-1 rounded-2xl mr-2" />
        <span className="text-gray-600">未登录</span>
        <RightOne theme="filled" size="22" fill="#333" strokeLinejoin="bevel" strokeLinecap="square" />
      </div>
      <div className="pt-3">
        <h2 className="text-gray-600 text-sm">
          <Record theme="filled" size="16" fill="red" className="mr-1" />
            我的歌单</h2>
      </div>
    </div>

  )
}



const Home: FC<IProps> = props => {

  return (
    <div className="grid layout h-screen">
      <HeaderAction />
      <HeaderNav />
      <SideBar />
      {/* <div /> */}
      <div className="flex col-start-2">
        {renderRoutes(props.route.routes)}
      </div>
    </div >
  )
}

export default memo(Home)
