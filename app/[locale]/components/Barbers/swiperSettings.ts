import { Autoplay, Navigation, Pagination } from "swiper/modules";

export const swiperSettings = {
  autoHeight: true,
  slidesPerView: 1,
  spaceBetween: 10,
  style: { zIndex: 0 },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1.1,
      spaceBetween: 5,
    },
    "@0.50": {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    "@0.60": {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    "@0.75": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@1.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@1.25": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@1.50": {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    "@1.80": {
      slidesPerView: 1,
      spaceBetween: 15,
    },
  },
  autoplay: {
    delay: 9000,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: true,
  pagination: true,
  modules: [Autoplay, Pagination, Navigation],
  className: "swiper_wrap",
};
