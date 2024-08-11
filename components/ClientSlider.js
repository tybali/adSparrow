"use client";
import { sliderProps } from "@/utility/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const ClientSlider = () => {
  return (
    <Swiper {...sliderProps.brandSlider} className="swiper brand-slider">
      <div className="swiper-wrapper">
        <SwiperSlide className="swiper-slide">
          <div className="brand-image">
            <img src="assets/img/brand/linkedIn.png" alt="img" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-image">
            <img src="assets/img/brand/dropbox.png" alt="img" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-image">
            <img src="assets/img/brand/trello.png" alt="img" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-image">
            <img src="assets/img/brand/framer.png" alt="img" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-image">
            <img src="assets/img/brand/shopify.png" alt="img" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-image">
            <img src="assets/img/brand/grammarly.png" alt="img" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-image">
            <img src="assets/img/brand/linkedIn.png" alt="img" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-image">
            <img src="assets/img/brand/dropbox.png" alt="img" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-image">
            <img src="assets/img/brand/trello.png" alt="img" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-image">
            <img src="assets/img/brand/framer.png" alt="img" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-image">
            <img src="assets/img/brand/shopify.png" alt="img" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-image">
            <img src="assets/img/brand/grammarly.png" alt="img" />
          </div>
        </SwiperSlide>
      </div>
    </Swiper>
  );
};
export default ClientSlider;
