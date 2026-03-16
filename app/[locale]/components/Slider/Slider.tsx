"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { animation, assets } from "@/app/[locale]/assets";
import { slideAppearAnimation } from "@/app/[locale]/components/Slider/animations";
import { swiperSettings } from "@/app/[locale]/components/Slider/swiperSettings";
import type { Slide } from "@/app/[locale]/types/slide.type";
import css from "./Slider.module.css";

export default function Slider({ slides }: { slides: Slide[] }) {
  const { backendUrl } = assets;
  return (
    <main className={css.slider_container}>
      <div className={css.overlay} />
      {slides && (
        <motion.div {...animation} variants={slideAppearAnimation}>
          <Swiper {...swiperSettings}>
            {slides?.map((slide) => (
              <SwiperSlide key={slide.id} className={css.image_container}>
                <Image
                  src={`${backendUrl}/${slide.image.url}`}
                  alt={slide.image.alt}
                  fill
                  className={css.pic}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      )}
    </main>
  );
}
