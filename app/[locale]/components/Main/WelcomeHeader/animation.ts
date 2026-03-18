import type { Variants } from 'framer-motion';

export const headerAnimation: Variants = {
    hidden: {
        x: 20,
        scale: 0.95,
        opacity: 0,
        filter: 'blur(10px)',
    },
    visible: (custom) => ({
        x: 0,
        scale: 1,
        opacity: 1,
        filter: 'blur(0)',
        transition: { delay: custom * 0.1, duration: 0.5, ease: 'easeInOut' },
    }),
};
