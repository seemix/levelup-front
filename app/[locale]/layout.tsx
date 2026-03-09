import type { Metadata } from 'next';
import { Inter, Oswald } from 'next/font/google';

const inter = Inter({
    subsets: ['latin', 'cyrillic'],
    weight: '400',
    display: 'swap',
    variable: '--font-inter',
});

const oswald = Oswald({
    subsets: ['latin', 'cyrillic'],
    weight: ['200', '300', '400', '500', '600', '700'],
    display: 'swap',
    variable: '--font-oswald',
});
import { generateSiteMetadata } from '@/app/[locale]/meta';
import './globals.css';

type Props = {
    params: { locale: 'ru' | 'ro' | 'en' }
}

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {
    const { locale } = await params;
    return generateSiteMetadata(locale);
}


export default async function RootLayout({
                                             children,
                                             params,
                                         }: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    return (
        <html lang={locale}>
        <body className={`${inter.variable} ${oswald.variable}`}>
        {children}
        </body>
        </html>
    );
}
