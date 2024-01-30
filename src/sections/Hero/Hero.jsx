import React from 'react'

/*** Libs ***/
import { FaYoutube } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css/navigation';
const Hero = ({ data }) => {

  const createSlideItem = (slideInfo, slideID) => {
    return (
      <SwiperSlide key={slideID} className="hero-slide md:min-h-[650px] md:flex-items-center-important relative pt-7 md:pt-6 pb-[90px]">
        <div className="slider-main-content flex flex-col items-center md:items-start gap-3 pb-7 mb:pb-0">
          <h1 className="hero-title text-4xl sm:text-4xl md:text-6xl lg:text-8xl font-bold max-w-[400px] lg:max-w-[500px] text-center md:text-left">
            <span className="text-shadow-black">{slideInfo.title}</span>
            {
              slideInfo["title-accent"]
                ? <span className="text-primary text-shadow-primary">{slideInfo["title-accent"]}</span>
                : ''
            }
          </h1>
          <div className="description text-gray-500 text-sm md:text-lg max-w-[400px] text-center md:text-left">
            {slideInfo.description}
          </div>
          {
            slideInfo["has-video"]
              ? <button className='btn btn-primary bg-primary hover:bg-primary/80 p-3 rounded-full cursor-pointer text-white w-fit min-w-[200px] flex-center gap-3'>
                {slideInfo.button}
                <FaYoutube className="text-2xl" />
              </button> : ''
          }
        </div>

        <div className="image md:absolute md:top-1/2 md:right-0 xxl:left-1/2 xxl:right-auto max-w-[430px] md:-translate-y-1/2 xxl:-translate-x-1/2 m-auto"
          data-aos="flip-down">
          <img src={slideInfo.image} alt="image" />
        </div>

        <div className="slider-bottom-content absolute bottom-3 left-0 right-0 ">
          <div className="author-info flex flex-col gap-0 max-w-[200px]">
            <div className="slide-autor font-semibold md:text-lg leading-tight">{slideInfo.author}</div>
            <div className="slide-country text-sm text-gray-500">{slideInfo.country}</div>
            <div className="slide-date text-xs text-primary">{slideInfo.date}</div>
          </div>
        </div>

        <div className="bg-text text-6xl md:text-[125px] lg:text-[160px] xxl:text-[190px] font-bold text-center uppercase text-gray-300/25 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none text-shadow-primary opacity-20">Doraemon</div>
      </SwiperSlide>
    )
  }

  return (
    <section className="hero" id="hero">
      <div className="container">
        <Swiper
          modules={[Navigation]}
          navigation={true}
          spaceBetween={15}
          sliderPerView={1}
          loop={true}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          effect="fade">
          {
            data.length > 0
              ? data.map((slideInfo, index) => createSlideItem(slideInfo, index))
              : ''
          }
        </Swiper>
      </div>
    </section>
  )
}

export default Hero
