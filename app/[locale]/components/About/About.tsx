'use client';
import { RichText } from '@payloadcms/richtext-lexical/react';
import { motion } from 'framer-motion';
import type { SerializedEditorState } from 'lexical';
import { animation } from '@/app/[locale]/assets';
import { SectionHeader } from '@/app/[locale]/components';
import { blockAnimation } from '@/app/[locale]/components/About/animations';
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
