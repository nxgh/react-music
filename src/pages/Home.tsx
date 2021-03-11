import React, { FC, memo } from 'react'
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config'
// import { NavLink, useLocation } from 'react-router-dom'
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
  '推荐',
  '排行榜',
  '歌单',
  '主播电台',
  '歌手',
  '新碟上架'
]

const HeaderIconWrap = () => {

}

const Home: FC<IProps> = props => {

  return (<div className="grid layout h-full">

    <div className="flex justify-between" >
      <div className="ml-2">
        <Minus className="p-0.5 bg-green-500 rounded-xl mr-1 hover:bg-green-600" theme="outline" size="10" />
        <Close className="p-0.5 bg-red-500 rounded-xl mr-1 hover:bg-red-600" theme="outline" size="10" fill="white" />
        <FullScreenTwo className="p-0.5 bg-yellow-600 rounded-xl mr-1 hover:bg-yellow-700" theme="outline" size="10" fill="white" />
      </div>
      <div className="flex justify-end items-center  ">
        <Left theme="outline" size="18" fill="#333" />
        <Right theme="outline" size="18" fill="#333" />
      </div>
    </div>
    <div className="bg-white-100 flex justify-between">
      <div className="flex items-center">
        {
          headerNav.map(item => <div className="mx-5 text-base text-gray-500 hover:text-black cursor-pointer">{item}</div>)
        }
      </div>
      <div className="flex items-center mr-10">
        <input type="text" className="bg-gray-200 rounded-xl mr-3 focus:outline-none px-2 py-0.5" placeholder="搜索" />
        <Github theme="outline" size="24" fill="#333" strokeLinejoin="bevel" strokeLinecap="square" />
      </div>
    </div>
    <div className="bg-red-100 pl-3 py-3">
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
    <div className="bg-blue-100">
      {/* {renderRoutes(props.route.routes)} */}
    </div>
  </div>
  )
}

export default memo(Home)
