import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import type { SwiperProps } from 'swiper/react';

export const swiperSettings: SwiperProps = {
    speed: 1500,
    spaceBetween: 0,
    slidesPerView: 1,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    effect: 'fade',

    fadeEffect: {
        crossFade: true,
    },
    modules: [Autoplay, EffectFade, Navigation, Pagination],
    loop: true,
};
