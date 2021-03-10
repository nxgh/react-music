import React, { FC } from 'react'
import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'

import { IBannerItem } from '../../api/use-banner'
SwiperCore.use([Autoplay])

interface IProps {
  bannerList: IBannerItem[]
}

const Carousel: FC<IProps> = props => {
  const { bannerList } = props

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      onSlideChange={() => {}}
      onSwiper={swiper => {}}>
      {bannerList.map((item, index) => (
        <SwiperSlide key={index}>
          <img src={item.imageUrl} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
export default Carousel
