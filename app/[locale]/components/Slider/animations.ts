import type { Variants } from 'framer-motion';

export const slideAppearAnimation: Variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: { duration: .6, ease: 'easeIn' }
    }
};