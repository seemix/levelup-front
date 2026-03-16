"use client";
import { MdPhoneIphone } from "react-icons/md";
import { useTranslations } from "use-intl";
import { BookingButton } from "@/app/[locale]/components";
import logo from "../Header/logo.webp";
import css from "./Footer.module.css";

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className={css.footer}>
      <div className={css.footer_widget}>
        <img
          src={logo.src}
          alt="logo"
          width={220}
          height={64}
          loading={"lazy"}
        />
      </div>
      <div className={css.footer_widget}>
        <h5>{t("address")}</h5>
        <p>{t("streetNumber")}</p>
        <p>
          <MdPhoneIphone size={"1.1em"} />
          <a href={"tel:+37360233555"}> +37360233555</a>
        </p>
      </div>
      <div className={css.footer_widget}>
        <h5>{t("workHours")}</h5>
        <p>{t("monSat")} </p>
        <p>{t("sun")} </p>
      </div>
      <div className={css.footer_widget}>
        <h5>{t("makeAppointment")}</h5>
        <BookingButton />
      </div>
    </footer>
  );
}
