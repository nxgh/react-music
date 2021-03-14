import React, { FC } from 'react'
import LazyLoad from 'react-lazyload'
import placeholderImg from './music.png'
import { Headset as IHeadset } from '@icon-park/react'
import usePersonalized from '../../api/use-personalized'
import { useHistory } from 'react-router'


// utils
const getCount = (count: number): string => {
  if (count < 0) return ''
  if (count < 10000) {
    return count + ''
  } else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 1000) / 10 + '万'
  } else {
    return Math.floor(count / 10000000) / 10 + '亿'
  }
}

const RecommendList: FC = () => {

  const { data, isLoading } = usePersonalized()
  const history = useHistory()

  if (isLoading) return <div>loading...</div>

  return (
    <div>
      <h2>推荐歌单</h2>
      <div className="grid grid-cols-6 gap-5">
        {data.map(item => (
          <div key={item.id} className="relative" onClick={() => history.push(`/playlist/${item.id}`)}>
            <div className="cursor-pointer rounded-xl">
              <LazyLoad placeholder={<img className="" width="100%" height="100%" src={placeholderImg} alt="music" />}>
                <img className="rounded" src={item.picUrl + '?param=300x300'} width="100%" height="100%" alt="music" />
              </LazyLoad>
              <div className="absolute top-1 right-2 flex ">
                <IHeadset theme="outline" size="12" fill="white" />
                <span className="text-xs text-white">{getCount(item.playCount)}</span>
              </div>
              <div className="text-md text-gray-700 break-all hover:text-black">{item.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecommendList
