import BookingButton from '@/app/[locale]/components/BookingButton/BookingButton';
import css from './Main.module.css';
import WelcomeHeader from './WelcomeHeader/WelcomeHeader';

export default function Main({ loading }: { loading: boolean }) {
    return (
        <section id={'top'}>
            <div className={css.overlay}>
                <div className={css.slider_welcome}>
                    {!loading && (
                        <>
                            <WelcomeHeader />
                            <BookingButton />
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}
