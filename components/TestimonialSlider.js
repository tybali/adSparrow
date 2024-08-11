"use client";
import { sliderProps } from "@/utility/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
export const TestimonialSlider1 = () => {
  return (
    <Swiper
      {...sliderProps.testimonialSlider}
      className="swiper testimonial-slider"
    >
      <div className="swiper-wrapper">
        <SwiperSlide className="swiper-slide">
          <div className="testimonial-content">
            <p>
              We denounce with right indignation dislike men who are so beguile
              and demoralized by the charms of pleasure of the moment, so
              blinded by desire cannot foresee
            </p>
            <div className="author-items">
              <div className="author-image">
                <img src="assets/img/testimonial/client.png" alt="author-img" />
                <div className="content">
                  <h5>
                    Lucas J. Swe / <span>CO Founder</span>
                  </h5>
                </div>
              </div>
              <img src="assets/img/testimonial/icon.png" alt="img" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="testimonial-content">
            <p>
              We denounce with right indignation dislike men who are so beguile
              and demoralized by the charms of pleasure of the moment, so
              blinded by desire cannot foresee
            </p>
            <div className="author-items">
              <div className="author-image">
                <img src="assets/img/testimonial/client.png" alt="author-img" />
                <div className="content">
                  <h5>
                    Lucas J. Swe / <span>CO Founder</span>
                  </h5>
                </div>
              </div>
              <img src="assets/img/testimonial/icon.png" alt="img" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="testimonial-content">
            <p>
              We denounce with right indignation dislike men who are so beguile
              and demoralized by the charms of pleasure of the moment, so
              blinded by desire cannot foresee
            </p>
            <div className="author-items">
              <div className="author-image">
                <img src="assets/img/testimonial/client.png" alt="author-img" />
                <div className="content">
                  <h5>
                    Lucas J. Swe / <span>CO Founder</span>
                  </h5>
                </div>
              </div>
              <img src="assets/img/testimonial/icon.png" alt="img" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="testimonial-content">
            <p>
              We denounce with right indignation dislike men who are so beguile
              and demoralized by the charms of pleasure of the moment, so
              blinded by desire cannot foresee
            </p>
            <div className="author-items">
              <div className="author-image">
                <img src="assets/img/testimonial/client.png" alt="author-img" />
                <div className="content">
                  <h5>
                    Lucas J. Swe / <span>CO Founder</span>
                  </h5>
                </div>
              </div>
              <img src="assets/img/testimonial/icon.png" alt="img" />
            </div>
          </div>
        </SwiperSlide>
      </div>
      <div className="swiper-dot pt-5 ps-1">
        <div className="dot" />
      </div>
    </Swiper>
  );
};

export const TestimonialSlider2 = ({ style = "style-1" }) => {
  return (
    <Swiper
      {...sliderProps.testimonialSlider2}
      className="swiper testimonial-slider-2"
    >
      <div className="swiper-wrapper">
        <SwiperSlide className="swiper-slide">
          <div className={`testimonial-card-items ${style}`}>
            <div className="testimonial-image">
              <img src="assets/img/testimonial/client-2.png" alt="img" />
            </div>
            <div className="testimonial-content">
              <div className="author-image">
                <img src="assets/img/testimonial/client.png" alt="author-img" />
                <div className="content">
                  <h5>
                    Michael M. Griffin <span>/CO Founder</span>
                  </h5>
                </div>
              </div>
              <p>
                We denounce with righteous indignation and dislike men who are
                so beguiled demoralized by the charms of pleasure of the moment
              </p>
              <div className="star">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className={`testimonial-card-items ${style}`}>
            <div className="testimonial-image">
              <img src="assets/img/testimonial/client-3.png" alt="img" />
            </div>
            <div className="testimonial-content">
              <div className="author-image">
                <img src="assets/img/testimonial/client.png" alt="author-img" />
                <div className="content">
                  <h5>
                    Robin T. Peckham<span>/ Developer</span>
                  </h5>
                </div>
              </div>
              <p>
                We denounce with righteous indignation and dislike men who are
                so beguiled demoralized by the charms of pleasure of the moment
              </p>
              <div className="star">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className={`testimonial-card-items ${style}`}>
            <div className="testimonial-image">
              <img src="assets/img/testimonial/client-2.png" alt="img" />
            </div>
            <div className="testimonial-content">
              <div className="author-image">
                <img src="assets/img/testimonial/client.png" alt="author-img" />
                <div className="content">
                  <h5>
                    Michael M. Griffin <span>/CO Founder</span>
                  </h5>
                </div>
              </div>
              <p>
                We denounce with righteous indignation and dislike men who are
                so beguiled demoralized by the charms of pleasure of the moment
              </p>
              <div className="star">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className={`testimonial-card-items ${style}`}>
            <div className="testimonial-image">
              <img src="assets/img/testimonial/client-3.png" alt="img" />
            </div>
            <div className="testimonial-content">
              <div className="author-image">
                <img src="assets/img/testimonial/client.png" alt="author-img" />
                <div className="content">
                  <h5>
                    Robin T. Peckham<span>/ Developer</span>
                  </h5>
                </div>
              </div>
              <p>
                We denounce with righteous indignation and dislike men who are
                so beguiled demoralized by the charms of pleasure of the moment
              </p>
              <div className="star">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </div>
      <div className="swiper-dot pb-5 text-center">
        <div className="dot" />
      </div>
    </Swiper>
  );
};

export const TestimonialSlider3 = () => {
  return (
    <Swiper
      {...sliderProps.testimonialSlider3}
      className="swiper testimonial-slider-3"
    >
      <div className="swiper-wrapper">
        <SwiperSlide className="swiper-slide">
          <div className="testimonial-content">
            <div className="author-image">
              <img src="assets/img/testimonial/client.png" alt="author-img" />
              <div className="content">
                <h5>
                  Michael M. Griffin / <span>CO Founder</span>
                </h5>
              </div>
            </div>
            <p>
              “ we denounce with right indignation and dislike men who are so
              beguile and demoralized by the charms of pleasure of the moment,
              so blinded by desire, that they cannot foresee “
            </p>
            <div className="star">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="testimonial-content">
            <div className="author-image">
              <img src="assets/img/testimonial/client.png" alt="author-img" />
              <div className="content">
                <h5>
                  Michael M. Griffin / <span>CO Founder</span>
                </h5>
              </div>
            </div>
            <p>
              “ we denounce with right indignation and dislike men who are so
              beguile and demoralized by the charms of pleasure of the moment,
              so blinded by desire, that they cannot foresee “
            </p>
            <div className="star">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="testimonial-content">
            <div className="author-image">
              <img src="assets/img/testimonial/client.png" alt="author-img" />
              <div className="content">
                <h5>
                  Michael M. Griffin / <span>CO Founder</span>
                </h5>
              </div>
            </div>
            <p>
              “ we denounce with right indignation and dislike men who are so
              beguile and demoralized by the charms of pleasure of the moment,
              so blinded by desire, that they cannot foresee “
            </p>
            <div className="star">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="testimonial-content">
            <div className="author-image">
              <img src="assets/img/testimonial/client.png" alt="author-img" />
              <div className="content">
                <h5>
                  Michael M. Griffin / <span>CO Founder</span>
                </h5>
              </div>
            </div>
            <p>
              “ we denounce with right indignation and dislike men who are so
              beguile and demoralized by the charms of pleasure of the moment,
              so blinded by desire, that they cannot foresee “
            </p>
            <div className="star">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="testimonial-content">
            <div className="author-image">
              <img src="assets/img/testimonial/client.png" alt="author-img" />
              <div className="content">
                <h5>
                  Michael M. Griffin / <span>CO Founder</span>
                </h5>
              </div>
            </div>
            <p>
              “ we denounce with right indignation and dislike men who are so
              beguile and demoralized by the charms of pleasure of the moment,
              so blinded by desire, that they cannot foresee “
            </p>
            <div className="star">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="testimonial-content">
            <div className="author-image">
              <img src="assets/img/testimonial/client.png" alt="author-img" />
              <div className="content">
                <h5>
                  Michael M. Griffin / <span>CO Founder</span>
                </h5>
              </div>
            </div>
            <p>
              “ we denounce with right indignation and dislike men who are so
              beguile and demoralized by the charms of pleasure of the moment,
              so blinded by desire, that they cannot foresee “
            </p>
            <div className="star">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
          </div>
        </SwiperSlide>
      </div>
      <div className="swiper-dot-2 pt-3 ps-1">
        <div className="dot" />
      </div>
    </Swiper>
  );
};

export const TestimonialSlider4 = () => {
  return (
    <Swiper
      {...sliderProps.testimonialSlider4}
      className="swiper testimonial-slider-4"
    >
      <div className="swiper-wrapper">
        <SwiperSlide className="swiper-slide">
          <div className="testimonial-box-items">
            <div className="testimonial-content">
              <div className="author-image">
                <img src="assets/img/testimonial/client.png" alt="author-img" />
                <div className="content">
                  <h5>
                    Louis K. Peters <span>/CEO &amp; Founder</span>
                  </h5>
                </div>
              </div>
              <p>
                Sed ut perspiciatis unde omnis natus error sit voluptatem
                accusanti doloremque laudantium, totam rem aperiame
              </p>
              <div className="star">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="testimonial-box-items">
            <div className="testimonial-content">
              <div className="author-image">
                <img
                  src="assets/img/testimonial/client-4.png"
                  alt="author-img"
                />
                <div className="content">
                  <h5>
                    Michael B. Camara <span>/Designer</span>
                  </h5>
                </div>
              </div>
              <p>
                Sed ut perspiciatis unde omnis natus error sit voluptatem
                accusanti doloremque laudantium, totam rem aperiame
              </p>
              <div className="star">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="testimonial-box-items">
            <div className="testimonial-content">
              <div className="author-image">
                <img
                  src="assets/img/testimonial/client-5.png"
                  alt="author-img"
                />
                <div className="content">
                  <h5>
                    Gary D. Gallegos <span>/Business man</span>
                  </h5>
                </div>
              </div>
              <p>
                Sed ut perspiciatis unde omnis natus error sit voluptatem
                accusanti doloremque laudantium, totam rem aperiame
              </p>
              <div className="star">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="testimonial-box-items">
            <div className="testimonial-content">
              <div className="author-image">
                <img
                  src="assets/img/testimonial/client-6.png"
                  alt="author-img"
                />
                <div className="content">
                  <h5>
                    Steven D. Owens <span>/Manager</span>
                  </h5>
                </div>
              </div>
              <p>
                Sed ut perspiciatis unde omnis natus error sit voluptatem
                accusanti doloremque laudantium, totam rem aperiame
              </p>
              <div className="star">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="testimonial-box-items">
            <div className="testimonial-content">
              <div className="author-image">
                <img src="assets/img/testimonial/client.png" alt="author-img" />
                <div className="content">
                  <h5>
                    Louis K. Peters <span>/CEO &amp; Founder</span>
                  </h5>
                </div>
              </div>
              <p>
                Sed ut perspiciatis unde omnis natus error sit voluptatem
                accusanti doloremque laudantium, totam rem aperiame
              </p>
              <div className="star">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="testimonial-box-items">
            <div className="testimonial-content">
              <div className="author-image">
                <img
                  src="assets/img/testimonial/client-4.png"
                  alt="author-img"
                />
                <div className="content">
                  <h5>
                    Michael B. Camara <span>/Designer</span>
                  </h5>
                </div>
              </div>
              <p>
                Sed ut perspiciatis unde omnis natus error sit voluptatem
                accusanti doloremque laudantium, totam rem aperiame
              </p>
              <div className="star">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="testimonial-box-items">
            <div className="testimonial-content">
              <div className="author-image">
                <img
                  src="assets/img/testimonial/client-5.png"
                  alt="author-img"
                />
                <div className="content">
                  <h5>
                    Gary D. Gallegos <span>/Business man</span>
                  </h5>
                </div>
              </div>
              <p>
                Sed ut perspiciatis unde omnis natus error sit voluptatem
                accusanti doloremque laudantium, totam rem aperiame
              </p>
              <div className="star">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="testimonial-box-items">
            <div className="testimonial-content">
              <div className="author-image">
                <img
                  src="assets/img/testimonial/client-6.png"
                  alt="author-img"
                />
                <div className="content">
                  <h5>
                    Steven D. Owens <span>/Manager</span>
                  </h5>
                </div>
              </div>
              <p>
                Sed ut perspiciatis unde omnis natus error sit voluptatem
                accusanti doloremque laudantium, totam rem aperiame
              </p>
              <div className="star">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </div>
    </Swiper>
  );
};

export const TestimonialSlider5 = () => {
  return (
    <Swiper
      {...sliderProps.testimonialSlider5}
      className="swiper testimonial-slider-5"
    >
      <div className="swiper-wrapper">
        <SwiperSlide className="swiper-slide">
          <div className="testimonial-box-items">
            <div className="testimonial-content">
              <div className="author-image">
                <img
                  src="assets/img/testimonial/client-7.png"
                  alt="author-img"
                />
                <div className="content">
                  <h5>
                    Patrick J. Palmer <span>/ Developer</span>
                  </h5>
                </div>
              </div>
              <p>
                Sed ut perspiciatis unde omnis natus error sit voluptatem
                accusanti doloremque laudantium, totam rem aperiame
              </p>
              <div className="star">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="testimonial-box-items">
            <div className="testimonial-content">
              <div className="author-image">
                <img
                  src="assets/img/testimonial/client-8.png"
                  alt="author-img"
                />
                <div className="content">
                  <h5>
                    Todd C. Keller <span>/CEO &amp; Founder</span>
                  </h5>
                </div>
              </div>
              <p>
                Sed ut perspiciatis unde omnis natus error sit voluptatem
                accusanti doloremque laudantium, totam rem aperiame
              </p>
              <div className="star">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="testimonial-box-items">
            <div className="testimonial-content">
              <div className="author-image">
                <img
                  src="assets/img/testimonial/client-9.png"
                  alt="author-img"
                />
                <div className="content">
                  <h5>
                    Shane D. Ryan <span>/Manager</span>
                  </h5>
                </div>
              </div>
              <p>
                Sed ut perspiciatis unde omnis natus error sit voluptatem
                accusanti doloremque laudantium, totam rem aperiame
              </p>
              <div className="star">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="testimonial-box-items">
            <div className="testimonial-content">
              <div className="author-image">
                <img
                  src="assets/img/testimonial/client-10.png"
                  alt="author-img"
                />
                <div className="content">
                  <h5>
                    John F. Smith <span>/Designer</span>
                  </h5>
                </div>
              </div>
              <p>
                Sed ut perspiciatis unde omnis natus error sit voluptatem
                accusanti doloremque laudantium, totam rem aperiame
              </p>
              <div className="star">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="testimonial-box-items">
            <div className="testimonial-content">
              <div className="author-image">
                <img
                  src="assets/img/testimonial/client-7.png"
                  alt="author-img"
                />
                <div className="content">
                  <h5>
                    Patrick J. Palmer <span>/ Developer</span>
                  </h5>
                </div>
              </div>
              <p>
                Sed ut perspiciatis unde omnis natus error sit voluptatem
                accusanti doloremque laudantium, totam rem aperiame
              </p>
              <div className="star">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="testimonial-box-items">
            <div className="testimonial-content">
              <div className="author-image">
                <img
                  src="assets/img/testimonial/client-8.png"
                  alt="author-img"
                />
                <div className="content">
                  <h5>
                    Todd C. Keller <span>/CEO &amp; Founder</span>
                  </h5>
                </div>
              </div>
              <p>
                Sed ut perspiciatis unde omnis natus error sit voluptatem
                accusanti doloremque laudantium, totam rem aperiame
              </p>
              <div className="star">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="testimonial-box-items">
            <div className="testimonial-content">
              <div className="author-image">
                <img
                  src="assets/img/testimonial/client-9.png"
                  alt="author-img"
                />
                <div className="content">
                  <h5>
                    Shane D. Ryan <span>/Manager</span>
                  </h5>
                </div>
              </div>
              <p>
                Sed ut perspiciatis unde omnis natus error sit voluptatem
                accusanti doloremque laudantium, totam rem aperiame
              </p>
              <div className="star">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="testimonial-box-items">
            <div className="testimonial-content">
              <div className="author-image">
                <img
                  src="assets/img/testimonial/client-10.png"
                  alt="author-img"
                />
                <div className="content">
                  <h5>
                    John F. Smith <span>/Designer</span>
                  </h5>
                </div>
              </div>
              <p>
                Sed ut perspiciatis unde omnis natus error sit voluptatem
                accusanti doloremque laudantium, totam rem aperiame
              </p>
              <div className="star">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </div>
    </Swiper>
  );
};

export const TestiThumbSlider = () => {
  return (
    <Swiper
      {...sliderProps.testiThumbSlider}
      className="swiper testi-thumb-slider"
    >
      <div className="swiper-wrapper">
        <SwiperSlide className="swiper-slide">
          <div
            className="testi-thumb bg-cover"
            style={{
              backgroundImage: 'url("assets/img/home-6/testimonial/01.png")',
            }}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="testi-thumb bg-cover"
            style={{
              backgroundImage: 'url("assets/img/home-6/testimonial/02.png")',
            }}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="testi-thumb bg-cover"
            style={{
              backgroundImage: 'url("assets/img/home-6/testimonial/03.png")',
            }}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="testi-thumb bg-cover"
            style={{
              backgroundImage: 'url("assets/img/home-6/testimonial/04.png")',
            }}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="testi-thumb bg-cover"
            style={{
              backgroundImage: 'url("assets/img/home-6/testimonial/05.png")',
            }}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="testi-thumb bg-cover"
            style={{
              backgroundImage: 'url("assets/img/home-6/testimonial/01.png")',
            }}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="testi-thumb bg-cover"
            style={{
              backgroundImage: 'url("assets/img/home-6/testimonial/02.png")',
            }}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="testi-thumb bg-cover"
            style={{
              backgroundImage: 'url("assets/img/home-6/testimonial/03.png")',
            }}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="testi-thumb bg-cover"
            style={{
              backgroundImage: 'url("assets/img/home-6/testimonial/04.png")',
            }}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="testi-thumb bg-cover"
            style={{
              backgroundImage: 'url("assets/img/home-6/testimonial/05.png")',
            }}
          />
        </SwiperSlide>
      </div>
    </Swiper>
  );
};

export const TestiContentSlider = () => {
  return (
    <Swiper
      {...sliderProps.testiContentSlider}
      className="swiper testi-content-slider"
    >
      <div className="swiper-wrapper">
        <SwiperSlide className="swiper-slide">
          <div className="content">
            <h3>
              Michael M. Griffin <span>/ CEO &amp; Founder</span>
            </h3>
            <h4>
              Sed ut perspiciatis unde omnis iste natus error voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit
            </h4>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="content">
            <h3>
              Michael M. Griffin <span>/ CEO &amp; Founder</span>
            </h3>
            <h4>
              Sed ut perspiciatis unde omnis iste natus error voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit
            </h4>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="content">
            <h3>
              Michael M. Griffin <span>/ CEO &amp; Founder</span>
            </h3>
            <h4>
              Sed ut perspiciatis unde omnis iste natus error voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit
            </h4>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="content">
            <h3>
              Michael M. Griffin <span>/ CEO &amp; Founder</span>
            </h3>
            <h4>
              Sed ut perspiciatis unde omnis iste natus error voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit
            </h4>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="content">
            <h3>
              Michael M. Griffin <span>/ CEO &amp; Founder</span>
            </h3>
            <h4>
              Sed ut perspiciatis unde omnis iste natus error voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit
            </h4>
          </div>
        </SwiperSlide>
      </div>
    </Swiper>
  );
};
