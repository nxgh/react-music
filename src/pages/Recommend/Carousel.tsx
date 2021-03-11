import React, { FC } from 'react'
import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'

import useBanner from '../../api/use-banner'
SwiperCore.use([Autoplay])

const Carousel: FC = () => {

  const { data, isLoading } = useBanner()
  if (isLoading) return <div></div>
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      onSlideChange={() => { }}
      onSwiper={swiper => { }}
      className="rounded-md mb-2"
    >
      {data?.map((item, index) => (
        <SwiperSlide className="" key={index}>
          <img className="" src={item.imageUrl} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
export default Carousel
