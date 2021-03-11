import React from 'react'
import Carousel from './Carousel'
import RecommendList from './RecommendList'
import { RouteConfigComponentProps } from 'react-router-config'

const Rank = (props: RouteConfigComponentProps) => {

  return (
    <>
      <Carousel />
      <RecommendList />
    </>
  )
}

export default Rank
