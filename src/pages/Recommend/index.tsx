import React, { useState } from 'react'
import { RouteConfigComponentProps } from 'react-router-config'
import CSS from 'csstype';

import Carousel from './Carousel'
import RecommendList from './RecommendList'


const Rank = (props: RouteConfigComponentProps) => {

  const [bgImg, setBgImg] = useState<string>('')

  let style: CSS.Properties = {
    backgroundImage: `url("${bgImg}?imageView&blur=40x20")`,
    backgroundSize: '6000px',
    backgroundPosition: 'center center'
  }


  return (
    <div className="flex flex-col items-center w-full px-48">
      <div className="h-64 w-full flex justify-center" style={style}>
        <div className="h-full w-160">
          <Carousel onImgChange={(imgUrl) => setBgImg(imgUrl)} />
        </div>
      </div>
      <div className="flex justify-center">
        <RecommendList />
      </div>
    </div >
  )
}

export default Rank
