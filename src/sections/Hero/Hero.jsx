import React from 'react'

/*** Libs ***/
import { FaYoutube } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css/navigation';

const Hero = ({ data }) => {
  console.log(data)

  const createSlideItem = (slideInfo, slideID) => {
    return (
      <SwiperSlide key={slideID} className="hero-slide flex-items-center-important relative pt-5 pb-[90px] border border-sky-500">
        <div className="slider-main-content flex flex-col gap-3 max-w-[400px]">
          <h1 className="hero-title text-4xl sm:text-4xl md:text-6xl font-bold">
            <span>{slideInfo.title}</span>
            {
              slideInfo["title-accent"]
                ? <span className="text-primary">{slideInfo["title-accent"]}</span>
                : ''
            }
          </h1>
          <div className="description text-gray-500 text-sm font-semibold">{slideInfo.description}</div>
          {
            slideInfo["has-video"]
              ? <button className='btn btn-primary bg-primary hover:bg-primary/80 p-3 rounded-full cursor-pointer text-white w-fit min-w-[200px] flex-center gap-3'>
                {slideInfo.button}
                <FaYoutube className="text-2xl" />
              </button> : ''
          }
        </div>

        <div className="image absolute top-1/2 left-1/2 max-w-[330px] -translate-y-1/2 -translate-x-1/2">
          <img src={slideInfo.image} alt="image" />
        </div>

        <div className="slider-bottom-content absolute bottom-3 left-0 right-0 ">
          <div className="author-info flex flex-col gap-0 max-w-[200px]">
            <div className="slide-autor font-semibold">{slideInfo.author}</div>
            <div className="slide-country text-gray-500">{slideInfo.country}</div>
            <div className="slide-date text-sm text-primary">{slideInfo.date}</div>
          </div>
        </div>
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
