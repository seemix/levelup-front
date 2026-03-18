import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { generateSiteMetadata } from '@/app/[locale]/meta';
import './globals.css';

type Props = {
    params: { locale: 'ru' | 'ro' | 'en' };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    return generateSiteMetadata(locale);
}

export default async function LocaleLayout({ children }: { children: React.ReactNode }) {
    return <NextIntlClientProvider>{children}</NextIntlClientProvider>;
}
