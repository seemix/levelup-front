"use client";

import { motion } from "framer-motion";
import { SlClock } from "react-icons/sl";
import { useTranslations } from "use-intl";
import { animation } from "@/app/[locale]/assets";
import { blockAnimation } from "@/app/[locale]/components/Services/SingleServiceCard/animations";
import type { ServiceType } from "@/app/[locale]/components/Services/serviceType";
import css from "./SingleServiceCard.module.css";

export default function SingleServiceCard({
  service,
}: {
  service: ServiceType;
}) {
  const t = useTranslations();
  const { id, icon, services } = service;
  return (
    <motion.div
      className={`card ${css.service_card}`}
      {...animation}
      custom={id + 1.5}
      variants={blockAnimation}
    >
      <div className={css.price_icon_wrap}>{icon}</div>
      {services.map((service) => (
        <div className={css.price_item} key={service.id}>
          <h3>{t(service.name)}</h3>
          <div className={css.time}>
            <SlClock /> {service.duration} {t("minutes")}
          </div>
        </div>
      ))}
    </motion.div>
  );
}
