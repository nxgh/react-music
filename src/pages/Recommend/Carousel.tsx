import React, { FC } from 'react'
import SwiperCore, { Autoplay, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Right, Left } from '@icon-park/react'
import 'swiper/swiper.min.css'

import useBanner from '../../api/use-banner'
SwiperCore.use([Autoplay, Navigation])

interface IProps {
  onImgChange: (imgUrl: string) => void
}

const Carousel: FC<IProps> = (props) => {
  const { onImgChange } = props

  const { data, isLoading } = useBanner()


  const onSlideChange = ({ realIndex }: { realIndex: number }) =>
    data && onImgChange(data[realIndex].imageUrl)

  if (isLoading) return <div></div>
  return (
    <>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        onSlideChange={(swiper) => onSlideChange(swiper)}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        className="rounded-md mb-2 relative"
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
      >
        {data?.map((item, index) => (
          <SwiperSlide className="" key={index}>
            <img className="h-64" src={item.imageUrl} />
          </SwiperSlide>
        ))}
        <div className="swiper-button-next absolute top-28 right-0 z-10 hover:bg-gray-300">
          <Right theme="filled" size="48" fill="#fff" strokeLinejoin="bevel" strokeLinecap="square" />
        </div>
        <div className="swiper-button-prev absolute top-28 z-10 hover:bg-gray-300">
          <Left theme="filled" size="48" fill="#fff" strokeLinejoin="bevel" strokeLinecap="square" />
        </div>
      </Swiper >
    </>
  )
}
export default Carousel
