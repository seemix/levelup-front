"use client";

import { motion } from "framer-motion";
import { useTranslations } from "use-intl";
import { animation, assets } from "@/app/[locale]/assets";
import { headerAnimation } from "@/app/[locale]/components/Main/WelcomeHeader/animation";
import css from "./WelcomeHeader.module.css";

export default function WelcomeHeader() {
  const t = useTranslations();
  return (
    <div className={css.welcome}>
      <motion.h1 {...animation} custom={0} variants={headerAnimation}>
        {t("welcome")} {assets.barbershopName}
      </motion.h1>
    </div>
  );
}
