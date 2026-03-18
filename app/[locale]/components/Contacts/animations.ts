import type { Variants } from 'framer-motion';

export const blockAnimation: Variants = {
    hidden: {
        opacity: 0,
        y: -30,
    },
    visible: (custom) => ({
        opacity: 1,
        y: 0,
        transition: { delay: custom * 0.3, duration: 0.6, ease: 'easeInOut' },
    }),
};
