'use client';
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical';
import { RichText } from '@payloadcms/richtext-lexical/react';
import { motion } from 'framer-motion';

import { animation } from '@/app/[locale]/assets';
import { blockAnimation } from '@/app/[locale]/components/About/animations';
import SectionHeader from '@/app/[locale]/components/SectionHeader/SectionHeader';
import css from './About.module.css';

export default function About({ content }: { content: SerializedEditorState }) {
    return (
        <section id={'about'}>
            <SectionHeader caption={'about'} />
            <motion.div {...animation} custom={1} variants={blockAnimation} className={`card ${css.about_card}`}>
                <RichText data={content} />
            </motion.div>
        </section>
    );
}
