import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import hero1 from '../assets/hero1.jpg'
import hero2 from '../assets/hero4.webp'
import hero3 from '../assets/hero3.jpg'
import 'swiper/css';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'animate.css';

const Banner = () => {
  const [active, setActive] = useState(0);

  return (
    <Swiper
      className='h-[900px] w-full'
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => setActive(swiper.activeIndex)}
      onSlideChange={(swiper) => setActive(swiper.activeIndex)}
    >
      <SwiperSlide>
        <div className='h-full relative'>
          <div className={`h-full w-1/2 absolute z-10 bg-[#2F2F2F]/60 ${active === 0 ? 'animate__animated animate__slideInLeft' : ''}`}></div>
          <img className='h-full w-full' src={hero1} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='h-full relative'>
          <div className={`h-full w-1/2 absolute z-10 bg-[#2E324B]/60 ${active === 1 ? 'animate__animated animate__slideInLeft' : ''}`}></div>
          <img className='h-full w-full' src={hero2} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='h-full relative'>
          <div className={`h-full w-1/2 absolute z-10 bg-[#3F5C3E]/60 ${active === 2 ? 'animate__animated animate__slideInLeft' : ''}`}></div>
          <img className='h-full w-full' src={hero3} alt="" />
        </div>
      </SwiperSlide>

      
    </Swiper>
  );
};



export default Banner;
