import type { Metadata } from 'next';
import { assets } from '@/app/[locale]/assets';

type Locale = 'ru' | 'ro' | 'en';

const { frontendUrl } = assets;

const metaTranslations = {
    ru: {
        title: 'LEVELUP | Твой барбершоп',
        description:
            'Мужские стрижки, оформление бороды и профессиональная косметика в Бельцах LevelUp барбершоп - это команда прогрессивных мастеров готовых поднять твой уровень.',
    },
    ro: {
        title: 'LEVELUP | Frizeria ta',
        description:
            'Tunsori pentru bărbați, îngrijirea bărbii și cosmetice profesionale în Bălți. LevelUp Barbershop este o echipă de maeștri progresivi gata să îți ridice nivelul.',
    },
    en: {
        title: 'LEVELUP | Your Barbershop',
        description:
            'Men’s haircuts, beard styling and professional cosmetics in Balti. LevelUp Barbershop is a team of progressive barbers ready to level you up.',
    },
};

export function generateSiteMetadata(locale: Locale): Metadata {
    const t = metaTranslations[locale] ?? metaTranslations.ru;

    return {
        title: t.title,
        description: t.description,

        keywords: ['стрижка', 'борода', 'барбершоп', 'barbershop balti', 'barbershop chisinau'],

        icons: {
            icon: '/favicon.gif',
        },

        alternates: {
            canonical: `${frontendUrl}/${locale}`,
            languages: {
                ru: `${frontendUrl}/ru`,
                ro: `${frontendUrl}/ro`,
                en: `${frontendUrl}/en`,
            },
        },

        openGraph: {
            type: 'website',
            url: `${frontendUrl}/${locale}`,
            title: t.title,
            description: t.description,
            images: [
                {
                    url: `${frontendUrl}/meta/lvl_meta.jpg`,
                    width: 1200,
                    height: 630,
                },
            ],
        },
    };
}
