import type { Variants } from 'framer-motion';

export const blockAnimation: Variants = {
    hidden: {
        opacity: 0,
        filter: 'blur(5px)',
        zoom: 0.95,
    },
    visible: (custom) => ({
        opacity: 1,
        zoom: 1,
        y: 0,
        filter: 'blur(0)',
        transition: { delay: custom * 0.4, duration: 0.8, ease: 'easeInOut' },
    }),
};
