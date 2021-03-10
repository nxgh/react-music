import React from 'react'
import Carousel from './Carousel'
import RecommendList from './RecommendList'
import { RouteConfigComponentProps } from 'react-router-config'
import useBanner from '../../api/use-banner'

const Rank = (props: RouteConfigComponentProps) => {
  const { data, isLoading } = useBanner()

  const recommendList = [...Array(100).keys()].map(item => {
    return {
      id: item,
      picUrl: 'https://p1.music.126.net/fhmefjUfMD-8qtj3JKeHbA==/18999560928537533.jpg',
      playCount: 17171122,
      name: '朴树、许巍、李健、郑钧、老狼、赵雷',
    }
  })
  return (
    <div>
      {isLoading ? 'loading...' : <Carousel bannerList={data.banners} />}
      <RecommendList recommendList={recommendList} />
    </div>
  )
}

export default Rank
