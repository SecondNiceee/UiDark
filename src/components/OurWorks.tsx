import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Slide from "../shared/Slide/Slide";
import Rating from "./Rating";
const OurWorks = () => {
  return (
    <section className="our-works">
      <div className="container">
        <div className="top">
          <div className="circle prev">
            <svg
              width="16"
              height="8"
              viewBox="0 0 16 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 4H1M1 4L4 7M1 4L4 1"
                stroke="#252432"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="text-block">
            <h3 className="text-title">Check our Work</h3>
            <p className="text-par">
              Take a look at some of our recent projects to see how we've helped
              businesses like yours succeed online.
            </p>
          </div>
          <div className="circle next">
            <svg
              width="16"
              height="8"
              viewBox="0 0 16 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 4L15 4M15 4L12 1M15 4L12 7"
                stroke="#252432"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>

        
        
        <Swiper
          className="my-swiper"
          modules={[Navigation]}
          centeredSlides = {true}
          style={{
            marginLeft : "auto",
            marginRight : "auto"
          }}
          autoplay = {{
            delay : 2
          }}
          loop = {true}
          slidesPerView={2}
          spaceBetween={32}
          navigation={{
            nextEl: ".next",
            prevEl: ".prev",
          }}
        >
          <SwiperSlide>
            <Slide />
          </SwiperSlide>
          <SwiperSlide>
            <Slide />
          </SwiperSlide>
          <SwiperSlide>
            <Slide />
          </SwiperSlide>
          <SwiperSlide>
            <Slide />
          </SwiperSlide>
        </Swiper>
        <Rating />
      </div>
    </section>
  );
};

export default OurWorks;
