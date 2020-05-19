import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Carousel from '../../components/UI/Carousel'
import Scroll from '../../components/UI/Scroll'
import Horizen from '../../components/UI/Horizen'

import { ReactComponent as Radio } from '../../assets/svg/radio.svg'
import { ReactComponent as Rank } from '../../assets/svg/rank.svg'
import { ReactComponent as Calendar } from '../../assets/svg/calendar.svg'
import { ReactComponent as SongList } from '../../assets/svg/song-list.svg'

import { Content, Nav } from './style'
import * as actionTypes from '../../store/Recommend/action'

function Recommend(props) {
  const dispatch = useDispatch()

  useEffect(() => {
    if (!bannerList.size) {
      dispatch(actionTypes.getBannerList())
    }
    if (!recommendList.size) {
      dispatch(actionTypes.getRecommendList())
    }
    // eslint-disable-next-line
  }, [])
  const { bannerList, recommendList } = useSelector((state) => ({
    bannerList: state.recommend.bannerList,
    recommendList: state.recommend.recommendList,
  }))
  console.log('recommendList', recommendList)

  return (
    <Content>
      <Scroll>
        <div>
          <Carousel bannerList={bannerList} />
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
          <Horizen title={'你的歌单精选站'} recommendList={recommendList} />
        </div>
      </Scroll>
    </Content>
  )
}
export default React.memo(Recommend)
