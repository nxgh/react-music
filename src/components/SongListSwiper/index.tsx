import React, { FC } from 'react'
import SwiperCore from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'

// import useBanner from '../../api/use-banner'
SwiperCore.use([])

const Carousel: FC = (props) => {

    // const { data, isLoading } = useBanner()
    // if (isLoading) return <div></div>
    return (
        <Swiper
            spaceBetween={2}
            slidesPerView={10}

            onSlideChange={() => { }}
            onSwiper={swiper => { }}
            className=""
        >
            {props.data?.map((item, index) => (
                <SwiperSlide className="" key={index}>
                    <img className="rounded-md mb-2 w-28" src={item.picUrl} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
export default Carousel
