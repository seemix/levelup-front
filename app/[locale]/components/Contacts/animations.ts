import type { Variants } from 'framer-motion';

export const blockAnimation: Variants = {
    hidden: {
        opacity: 0,
        y: -30,
    },
    visible: (custom) => ({
        opacity: 1,
        y: 0,
        transition: { delay: custom * .3, duration: .6, ease: 'easeInOut' },
    }),
};

export const mapAnimation: Variants = {
    hidden: {
        opacity: 0,
        x: 30
    },
    visible: (custom) => ({
        opacity: 1,
        x: 0,
        transition: { delay: custom * .4, duration: .7, ease: 'easeInOut' },
    }),
};