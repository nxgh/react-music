import React, { FC } from 'react'
import LazyLoad from 'react-lazyload'
import placeholderImg from './music.png'
import { Headset as IHeadset } from '@icon-park/react'
import usePersonalized from '../../api/use-personalized'
interface IRecommendItem {
  id: number
  picUrl: string
  playCount: number
  name: string
}

interface IProps {
  recommendList: IRecommendItem[]
}
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

const RecommendList: FC<IProps> = props => {
  const { recommendList } = props

  const { data, isLoading } = usePersonalized()
  console.log({ data })

  if (isLoading) return <div>loading...</div>

  return (
    <div className="grid grid-cols-3 gap-5">
      {data.map(item => (
        <div key={item.id} className="relative">
          <div className="">
            <LazyLoad placeholder={<img className="" width="100%" height="100%" src={placeholderImg} alt="music" />}>
              <img className="" src={item.picUrl + '?param=300x300'} width="100%" height="100%" alt="music" />
            </LazyLoad>
            <div className="absolute top-0 right- flex ">
              <IHeadset theme="outline" size="12" fill="white" />
              <span className="text-xs text-white">{getCount(item.playCount)}</span>
            </div>
            <div className="text-xs break-all">{item.name}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RecommendList
