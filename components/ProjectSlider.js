"use client";

import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const ProjectSlider = () => {
  return (
    <div className="project-wrapper">
      <Swiper {...sliderProps.projectSlider} className="swiper project-slider">
        <div className="swiper-wrapper">
          <SwiperSlide className="swiper-slide">
            <div className="project-box-items">
              <div className="project-image">
                <img src="assets/img/project/01.jpg" alt="img" />
              </div>
              <div className="project-content">
                <p>Product Sales</p>
                <h3>
                  <Link href="case-study-details">
                    Product Sale Revenue And How to Growth your product Sales
                  </Link>
                </h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="project-box-items">
              <div className="project-image">
                <img src="assets/img/project/02.jpg" alt="img" />
              </div>
              <div className="project-content">
                <p>Digital Marketing</p>
                <h3>
                  <Link href="case-study-details">
                    How to Improve your Digital Product Marketing to grow
                    business
                  </Link>
                </h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="project-box-items">
              <div className="project-image">
                <img src="assets/img/project/03.jpg" alt="img" />
              </div>
              <div className="project-content">
                <p>SEO Analysis</p>
                <h3>
                  <Link href="case-study-details">
                    How Important SEO for Develop Product Marketing
                  </Link>
                </h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="project-box-items">
              <div className="project-image">
                <img src="assets/img/project/04.jpg" alt="img" />
              </div>
              <div className="project-content">
                <p>Web Optimization</p>
                <h3>
                  <Link href="case-study-details">
                    Top 10 Resources for Build Web Traffic and grow Web
                    Optimization
                  </Link>
                </h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="project-box-items">
              <div className="project-image">
                <img src="assets/img/project/01.jpg" alt="img" />
              </div>
              <div className="project-content">
                <p>Product Sales</p>
                <h3>
                  <Link href="case-study-details">
                    Product Sale Revenue And How to Growth your product Sales
                  </Link>
                </h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="project-box-items">
              <div className="project-image">
                <img src="assets/img/project/02.jpg" alt="img" />
              </div>
              <div className="project-content">
                <p>Digital Marketing</p>
                <h3>
                  <Link href="case-study-details">
                    How to Improve your Digital Product Marketing to grow
                    business
                  </Link>
                </h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="project-box-items">
              <div className="project-image">
                <img src="assets/img/project/03.jpg" alt="img" />
              </div>
              <div className="project-content">
                <p>SEO Analysis</p>
                <h3>
                  <Link href="case-study-details">
                    How Important SEO for Develop Product Marketing
                  </Link>
                </h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="project-box-items">
              <div className="project-image">
                <img src="assets/img/project/04.jpg" alt="img" />
              </div>
              <div className="project-content">
                <p>Web Optimization</p>
                <h3>
                  <Link href="case-study-details">
                    Top 10 Resources for Build Web Traffic and grow Web
                    Optimization
                  </Link>
                </h3>
              </div>
            </div>
          </SwiperSlide>
        </div>
        <div className="swiper-dot pt-5 text-center">
          <div className="dot" />
        </div>
      </Swiper>
    </div>
  );
};
export default ProjectSlider;
