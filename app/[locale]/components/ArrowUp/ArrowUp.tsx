'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

import { arrowUpAnimation } from '@/app/[locale]/components/ArrowUp/animations';
import css from './ArrowUp.module.css';

export default function ArrowUp() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const updatePosition = () => {
            setIsVisible(window.scrollY > 100);
        };

        updatePosition();

        window.addEventListener('scroll', updatePosition);
        return () => window.removeEventListener('scroll', updatePosition);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        window.history.pushState(null, '', '#top');
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    className={css.arrow_up}
                    onClick={scrollToTop}
                    variants={arrowUpAnimation}
                    initial={'hidden'}
                    animate={'visible'}
                    exit={'quit'}
                    whileHover={'hover'}
                    whileTap={'tap'}
                >
                    <FaArrowUp size={'.8em'}/>
                </motion.button>
            )}
        </AnimatePresence>
    );
}