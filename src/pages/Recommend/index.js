import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { renderRoutes } from 'react-router-config'

import Carousel from '../../components/UI/Carousel'
import Scroll from '../../components/UI/Scroll'

import { ReactComponent as Radio } from '../../assets/svg/radio.svg'
import { ReactComponent as Rank } from '../../assets/svg/rank.svg'
import { ReactComponent as Calendar } from '../../assets/svg/calendar.svg'
import { ReactComponent as SongList } from '../../assets/svg/song-list.svg'

import { Content, Nav } from './style'
import * as actionTypes from '../../store/Recommend/action'

import SongListComponent from './Child/SongList'
import NewSongListComponent from './Child/NewSong'
import DJListComponent from './Child/DJ'

const NavIconList = () => {
  return (
    <Nav>
      <span>
        <Calendar className='iconfont' />
      </span>
      <span>
        <Rank className='iconfont' />
      </span>
      <span>
        <Radio className='iconfont' />
      </span>
      <span>
        <SongList className='iconfont' />
      </span>
    </Nav>
  )
}

function Recommend(props) {
  const dispatch = useDispatch()

  useEffect(() => {
    if (!bannerList.size) {
      dispatch(actionTypes.getBannerList())
    }
    if (!recommendList.size) {
      dispatch(actionTypes.getRecommendList())
    }
    if (!recommendNewSongList.size) {
      dispatch(actionTypes.getRecommendNewSongList())
    }
    if (!recommendDJList.size) {
      dispatch(actionTypes.getRecommendDJList())
    }
    // eslint-disable-next-line
  }, [])
  const {
    bannerList,
    recommendList,
    recommendNewSongList,
    recommendDJList,
  } = useSelector((state) => ({
    bannerList: state.recommend.bannerList,
    recommendList: state.recommend.recommendList,
    recommendNewSongList: state.recommend.recommendNewSongList,
    recommendDJList: state.recommend.recommendDJList,
  }))

  return (
    <Content>
      <Scroll>
        <div>
          <Carousel bannerList={bannerList} />
          <NavIconList />
          <SongListComponent
            title={'你的歌单精选站'}
            recommendList={recommendList}
          />
          <NewSongListComponent
            title={'新碟上架'}
            recommendNewSongList={recommendNewSongList}
          />
          <DJListComponent
            title={'热门电台'}
            recommendDJList={recommendDJList}
          />
        </div>
      </Scroll>
      {renderRoutes(props.route.routes)}
    </Content>
  )
}
export default React.memo(Recommend)
