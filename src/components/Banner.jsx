import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import hero1 from '../assets/hero1.jpg'
import hero2 from '../assets/hero4.webp'
import hero3 from '../assets/hero3.jpg'
import 'swiper/css';
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'animate.css';

const Banner = () => {
  const [active, setActive] = useState(0);

  return (
    <Swiper
      className='h-[300px] md:h-[500px] lg:h-[800px] w-full'
      modules={[Navigation, Pagination, Scrollbar,Autoplay, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay
      loop={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => setActive(swiper.activeIndex)}
      onSlideChange={(swiper) => setActive(swiper.activeIndex)}
    >
      <SwiperSlide>
        <div className='h-full relative'>
          <div className={`flex text-center flex-col justify-center items-center text-gray-200 h-full w-1/2 absolute z-10 bg-[#2F2F2F]/60 ${active === 0 ? 'animate__animated animate__slideInLeft' : ''}`}>
          <h1 className='md:text-3xl lg:text-4xl font-semibold w-2/3 mb-2 md:mb-5'>"From Your Hands to Their Hearts"
          </h1>
          <p className='w-2/3 text-xs md:text-lg'>Bring warmth and hope to those who need it most.</p>
          </div>
          <img className='h-full w-full' src={hero1} alt="" />
        </div>
      </SwiperSlide>

      {/* slider 2
       */}
      <SwiperSlide>
        <div className='h-full relative'>
          <div className={`flex flex-col justify-center items-center text-center text-gray-200 h-full w-1/2 absolute z-10 bg-[#2E324B]/60 ${active === 1 ? 'animate__animated animate__slideInLeft' : ''}`}>
          <h1 className='md:text-3xl lg:text-4xl font-semibold w-2/3 mb-2 md:mb-5'>"Don’t Let the Cold Steal Their Smiles"
          </h1>
          <p className='w-2/3 text-xs md:text-lg'>Donate clothes. Spread warmth. Change lives.</p>
          </div>
          <img className='h-full w-full' src={hero2} alt="" />
        </div>
      </SwiperSlide>
      {/* slider 3 */}
      <SwiperSlide>
        <div className='h-full relative'>
          <div className={`flex flex-col justify-center items-center text-center text-gray-200  h-full w-1/2 absolute z-10 bg-[#3F5C3E]/60 ${active === 2 ? 'animate__animated animate__slideInLeft' : ''}`}>
          <h1 className='md:text-3xl lg:text-4xl font-semibold w-2/3 mb-2 md:mb-5'>"Be the Warmth in Someone’s Winter"
          </h1>
          <p className='w-2/3 text-xs md:text-lg'>Even the smallest donation can make a big difference.</p>
          </div>
          <img className='h-full w-full' src={hero3} alt="" />
        </div>
      </SwiperSlide>

      
    </Swiper>
  );
};



export default Banner;
