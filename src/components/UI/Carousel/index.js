import React, { useState, useEffect } from 'react'
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
import { Container } from './style'

export default function Carousel(props) {
  const { bannerList } = props

  const [sliderSwiper, setSliderSwiper] = useState(null)
  useEffect(() => {
    if (bannerList.length && !sliderSwiper) {
      let newSliderSwiper = new Swiper('.slider-container', {
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: { el: '.swiper-pagination' },
      })
      setSliderSwiper(newSliderSwiper)
    }
  }, [bannerList.length, sliderSwiper])
  
  return (
    <Container>
      <div className='slider-container'>
        <div className='swiper-wrapper'>
          {bannerList.map((slider) => {
            return (
              <div className='swiper-slide' key={slider.pic}>
                <div className='slider-nav'>
                  <img src={slider.pic} width='100%' height='100%' alt='推荐' />
                </div>
              </div>
            )
          })}
        </div>
        <div className='swiper-pagination'></div>
      </div>
    </Container>
  )
}
