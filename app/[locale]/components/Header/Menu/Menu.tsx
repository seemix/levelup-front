'use client';

import type { Dispatch, SetStateAction } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from 'react-scroll';

import { menuItems } from './menuItems';
import css from './Menu.module.css';
type Props = {

    openMenu: boolean;
    setOpenMenu: Dispatch<SetStateAction<boolean>>;
};

export default function Menu({ openMenu, setOpenMenu }: Props) {
    const t = useTranslations();

    const handleScroll = (id: string) => {
        window.history.pushState(null, '', `${id}`);
        setOpenMenu(false);
    };

    return (
        <nav>
            <ul className={openMenu ? `${css.navigation} ${css.open}` : css.navigation}>
                {menuItems.map((item) => (
                    <li key={item.id}>
                        <Link
                            smooth={true}
                            duration={800}
                            offset={-10}
                            to={item.to}
                            onClick={() => {handleScroll(`#${item.to}`)}}
                            className={css.nav_link}
                            aria-label={item.name}
                        >
                            {t(item.name)}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}