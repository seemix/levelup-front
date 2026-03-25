import type { Variants } from 'framer-motion';

export const headerAnimation: Variants = {
    hidden: {
        x: 20,
        scale: .95,
        opacity: 0,
        filter: 'blur(10px)',
    },
    visible: (custom) => ({
        x: 0,
        scale: 1,
        opacity: 1,
        filter: 'blur(0)',
        transition: { delay: custom * .45, duration: .5, ease: 'easeInOut' },
    }),
};
