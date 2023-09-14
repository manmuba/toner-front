'use client'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function HomeSlider() {
  return (
    
      <div className='w-full h-100px'>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Image width="10000" className='w-full h-[550px]' height="100" src="/images/ecommerce/home/img-6.jpg" alt='Home'/></SwiperSlide>
        <SwiperSlide><Image width="10000" className='w-full h-[550px]' height="100" src="/images/ecommerce/home/img-1.png" alt='Home'/></SwiperSlide>
        <SwiperSlide><Image width="10000" className='w-full h-[550px]' height="100" src="/images/ecommerce/home/img-2.png" alt='Home'/></SwiperSlide>
      </Swiper>
      </div>
    
  );
}
