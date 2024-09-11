import React from 'react'
import './styles/swiper-watch.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../node_modules/swiper/swiper-bundle.min.css';
import avatarCover from './pic/Rectangle 2.png'
function SwiperWatch(movie) {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>slide</SwiperSlide>
      <SwiperSlide>slide</SwiperSlide>
      <SwiperSlide>slide</SwiperSlide>
      <SwiperSlide>slide</SwiperSlide>
    </Swiper>
  )
}

export default SwiperWatch
