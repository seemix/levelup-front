'use client';

import { BookingButton, WelcomeHeader } from '@/app/[locale]/components';
import css from './Main.module.css';

export default function Main({ loading }: { loading: boolean }) {
    return (
        <section id={'top'}>
            <div className={css.overlay}>
                <div className={css.slider_welcome}>
                    {!loading && (
                        <>
                            <WelcomeHeader/>
                            <BookingButton/>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}
