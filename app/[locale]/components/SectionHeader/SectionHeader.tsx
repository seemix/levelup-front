'use client';
import { motion } from 'framer-motion';
import { RiScissorsLine } from 'react-icons/ri';
import { useTranslations } from 'use-intl';
import { animation, assets } from '@/app/[locale]/assets';
import { captionAnimation, leftXAnimation, rightXAnimation } from '@/app/[locale]/components/SectionHeader/animations';
import css from './SectionHeader.module.css';

export default function SectionHeader({ caption }: { caption: string }) {
    const t = useTranslations();
    return (
        <>
            <div className={css.caption_top_line}>
                <motion.h4 {...animation} custom={3} variants={leftXAnimation}>
                    <RiScissorsLine size={'1.3em'} />
                </motion.h4>
                <motion.h4 {...animation} custom={4} variants={rightXAnimation}>
                    {assets.barbershopName} {t('barbershop')}
                </motion.h4>
            </div>
            <motion.h2 {...animation} custom={2} variants={captionAnimation}>
                {t(`${caption}`)}
            </motion.h2>
        </>
    );
}
