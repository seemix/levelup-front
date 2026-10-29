'use client';

import { useEffect, useState } from 'react';
import { FaInstagram } from 'react-icons/fa';
import { assets } from '@/app/[locale]/assets';
import BurgerButton from './BurgerButton/BurgerButton';
import css from './Header.module.css';
import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher';
import Menu from './Menu/Menu';

export default function Header() {
    const [openMenu, setOpenMenu] = useState(false);
    const [scroll, setScroll] = useState(false);
    const clickMenu = () => {
        setOpenMenu((prevState) => !prevState);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) setScroll(true);
            else setScroll(false);
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={!scroll ? css.header_wrapper : `${css.header_wrapper} ${css.scroll}`}>
            <div className={css.logo} />
            <div className={css.lang_switcher_wrapper}>
                <div>
                    <a
                        className={css.insta_link}
                        href={assets.instagramUrl}
                        target={'_blank'}
                        rel={'noreferrer'}
                        aria-label={'instagram'}
                    >
                        <FaInstagram size={'2em'} />
                    </a>
                </div>
                <div>
                    <LanguageSwitcher scroll={scroll} />
                </div>
            </div>
            <button type={'button'} style={{ all: 'unset', cursor: 'pointer' }}>
                <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
            </button>
            <button
                className={`button_reset ${css.burger_button}`}
                onClick={clickMenu}
                type={'button'}
                aria-label={'menu-button'}
            >
                <BurgerButton openMenu={openMenu} />
            </button>
        </header>
    );
}
