import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import hero1 from '../assets/hero1.jpg'
import hero2 from '../assets/hero2.jpg'
import hero3 from '../assets/hero3.jpg'

// Import Swiper styles
import 'swiper/css';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';

const Banner = () => {
    return (
<Swiper className='h-[600px] w-full'
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <img className='w-full h-full' src={hero1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='w-full h-full' src={hero2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='w-full h-full' src={hero3} alt="" />
      </SwiperSlide>
      </Swiper>
    );
};

export default Banner;