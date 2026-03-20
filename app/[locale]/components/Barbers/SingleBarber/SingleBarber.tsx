'use client';

import Image from 'next/image';
import { RichText } from '@payloadcms/richtext-lexical/react';

import { assets } from '@/app/[locale]/assets';
import type { BarberType } from '@/app/[locale]/components/Barbers/barberType';
import css from './SingleBarber.module.css';

export default function SingleBarber({ barber }: { barber: BarberType }) {
    return (
        <div className={`card ${css.barber_card}`}>
            <div className={css.card_picture_wrapper}>
                <div className={css.image_container}>
                    <Image
                        src={`${assets.backendUrl}${barber.image.url}`}
                        alt={barber.name}
                        quality={90}
                        fill
                        placeholder={'blur'}
                        blurDataURL={barber.image.blurHash}
                        sizes="(max-width: 800px) 100vw, 325px"
                        className={css.card_picture}
                        priority={false}
                    />
                </div>
            </div>
            <div>
                <h2>{barber.name}</h2>
                <h3>{barber.description}</h3>
                <RichText data={barber.about}/>
            </div>
        </div>
    );
}
