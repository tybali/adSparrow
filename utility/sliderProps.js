import SwiperCore from "swiper";
import {
  Autoplay,
  EffectFade,
  Grid,
  Navigation,
  Pagination,
  Parallax,
} from "swiper/modules";
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay, Grid, Parallax]);

export const sliderProps = {
  testimonialSlider: {
    spaceBetween: 30,
    speed: 1500,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },

    pagination: {
      el: ".dot",
      clickable: true,
    },
  },
  testimonialSlider2: {
    spaceBetween: 30,
    speed: 1500,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".dot",
      clickable: true,
    },
    breakpoints: {
      1199: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
  },
  testimonialSlider3: {
    spaceBetween: 30,
    speed: 1500,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".dot",
      clickable: true,
    },
  },
  testimonialSlider4: {
    spaceBetween: 30,
    speed: 1500,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
      1399: {
        slidesPerView: 4,
      },
      1199: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 3,
      },
      767: {
        slidesPerView: 2,
      },
      575: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
  },
  testimonialSlider5: {
    spaceBetween: 30,
    speed: 1500,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      reverseDirection: true,
      disableOnInteraction: false,
    },
    breakpoints: {
      1399: {
        slidesPerView: 4,
      },
      1199: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 3,
      },
      767: {
        slidesPerView: 2,
      },
      575: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
  },
  brandSlider: {
    spaceBetween: 30,
    speed: 1500,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
      1199: {
        slidesPerView: 6,
      },
      991: {
        slidesPerView: 5,
      },
      767: {
        slidesPerView: 4,
      },
      575: {
        slidesPerView: 3,
      },
      0: {
        slidesPerView: 1,
      },
    },
  },
  brandListSlider: {
    slidesPerView: "auto",
    spaceBetween: 80,
    freemode: true,
    centeredSlides: true,
    loop: true,
    speed: 4000,
    allowTouchMove: false,
    autoplay: {
      delay: 1,
      disableOnInteraction: true,
    },
  },
  projectSlider: {
    spaceBetween: 30,
    speed: 1500,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
      1399: {
        slidesPerView: 4,
      },
      1199: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 2,
      },
      575: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
    pagination: {
      el: ".dot",
      clickable: true,
    },
  },
  testiThumbSlider: {
    speed: 1000,
    loop: true,
    slidesPerView: 5,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".dot-2",
      clickable: true,
    },
  },
  testiContentSlider: {
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  },
};
