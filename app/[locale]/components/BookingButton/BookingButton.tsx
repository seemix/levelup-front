'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { animation } from '@/app/[locale]/assets';
import { bookingButtonAnimation } from '@/app/[locale]/components/BookingButton/animations';
import css from './BookingButton.module.css';

export default function BookingButton() {
    const t = useTranslations();

    return (
        <motion.button
            className={`${css.booking_button} booking`}
            {...animation}
            variants={bookingButtonAnimation}
            exit={'quit'}
            whileHover={'hover'}
            whileTap={'tap'}
        >
            {t('book')}
        </motion.button>
    );
}
