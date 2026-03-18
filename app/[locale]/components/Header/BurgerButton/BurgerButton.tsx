'use client';

import css from './BurgerButton.module.css';

export default function BurgerButton({ openMenu }: { openMenu: boolean }) {
    return (
        <div className={css.button_wrapper}>
            <div className={css.hamburger_menu}>
                <div className={openMenu ? css.top_bar + ' ' + css.open : css.top_bar}></div>
                <div className={openMenu ? css.center_bar + ' ' + css.open : css.center_bar}></div>
                <div className={openMenu ? css.bottom_bar + ' ' + css.open : css.center_bar}></div>
            </div>
        </div>
    );
}
