"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { animation } from "@/app/[locale]/assets";
import { SectionHeader, SingleBarber } from "@/app/[locale]/components";
import { blockAnimation } from "@/app/[locale]/components/Barbers/animations";
import type { BarberType } from "@/app/[locale]/components/Barbers/barberType";
import css from "./Barbers.module.css";
import { swiperSettings } from "./swiperSettings";

export default function Barbers({ barbers }: { barbers: BarberType[] }) {
  return (
    <section id={"barbers"}>
      <SectionHeader caption={"ourBarbers"} />
      <motion.div
        className={css.barbers_container}
        {...animation}
        custom={1}
        variants={blockAnimation}
      >
        <Swiper {...swiperSettings} className={css.slider_container}>
          {barbers.map((barber) => (
            <SwiperSlide key={barber.id}>
              <SingleBarber barber={barber} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}
