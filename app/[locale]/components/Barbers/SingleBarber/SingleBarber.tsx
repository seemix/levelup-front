"use client";

import { RichText } from "@payloadcms/richtext-lexical/react";
import { assets } from "@/app/[locale]/assets";
import type { BarberType } from "@/app/[locale]/components/Barbers/barberType";
import css from "./SingleBarber.module.css";

export default function SingleBarber({ barber }: { barber: BarberType }) {
  return (
    <div className={`card ${css.barber_card}`}>
      <div className={css.card_picture_wrapper}>
        <img
          src={`${assets.backendUrl}/${barber.image.url}`}
          alt={barber.name}
          loading={"lazy"}
          className={css.card_picture}
        />
      </div>
      <div>
        <h2>{barber.name}</h2>
        <h3>{barber.description}</h3>
        {/*{Parser().parse(barber.about)}*/}
        <RichText data={barber.about} />
      </div>
    </div>
  );
}
