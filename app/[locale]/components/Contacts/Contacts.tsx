'use client';

import { motion } from 'framer-motion';
import { BsInstagram } from 'react-icons/bs';
import { GrLocation } from 'react-icons/gr';
import { MdOutlineEventAvailable, MdPhoneIphone } from 'react-icons/md';
import { useTranslations } from 'use-intl';
import { animation } from '@/app/[locale]/assets';
import { SectionHeader } from '@/app/[locale]/components';
import { blockAnimation } from '@/app/[locale]/components/Contacts/animations';
import css from './Contacts.module.css';

export default function Contacts() {
    const t = useTranslations();

    return (
        <section id={'contacts'}>
            <SectionHeader caption={'ourContacts'} />
            <div className={'cards_wrapper'}>
                <motion.div {...animation} custom={2} variants={blockAnimation} className={`card ${css.contact_form}`}>
                    <div className={css.icon_wrapper}>
                        <GrLocation size={'1.2em'} />
                        {t('address')}
                    </div>
                    <p> {t('streetNumber')} </p>
                    <div className={css.icon_wrapper}>
                        <MdPhoneIphone size={'1.2em'} />
                        {t('phone')}
                    </div>
                    <p>
                        <a href={'tel:+37360233555'}> +(373) 60 233 555 </a>
                    </p>
                    <div className={css.icon_wrapper}>
                        <BsInstagram />
                        Instagram
                    </div>
                    <p>
                        <a target='_blank' rel='noreferrer' href='https://www.instagram.com/lvlup_barbershop'>
                            @lvlup_barbershop
                        </a>
                    </p>
                    <div className={css.icon_wrapper}>
                        <MdOutlineEventAvailable size={'1.2em'} />
                        {t('workHours')}
                    </div>
                    <p>{t('monSat')} </p>
                    <p> {t('sun')} </p>
                </motion.div>
                <motion.div {...animation} custom={3} variants={blockAnimation} className={css.map}>
                    <iframe
                        title='GoogleMAP'
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2681.0986813230234!2d27.892893!3d47.7795345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cb5f7549b92381%3A0xc81f8e9f0ebaa132!2sLevel%20Up%20Barbershop!5e0!3m2!1sen!2s!4v1669068548349!5m2!1sen!2s'
                        style={{
                            border: 0,
                            filter: 'invert(90%) grayscale(.5)',
                        }}
                        loading='lazy'
                        referrerPolicy='no-referrer-when-downgrade'
                        width='100%'
                        height='500'
                    ></iframe>
                </motion.div>
            </div>
        </section>
    );
}
