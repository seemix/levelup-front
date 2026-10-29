import { Inter, Oswald } from 'next/font/google';

import ScrollHandler from '@/app/[locale]/components/ScrollHandler/ScrollHandler';
import Slider from '@/app/[locale]/components/Slider/Slider';
import { fetchApi } from '@/app/[locale]/lib/api';
import type { Slide } from '@/app/[locale]/types/slide.type';
import EasyWeekWidget from '@/app/EasyWeekWidget';

const inter = Inter({
    subsets: ['latin', 'cyrillic'],
    weight: '400',
    display: 'swap',
    variable: '--font-inter',
});

const oswald = Oswald({
    subsets: ['latin', 'cyrillic'],
    weight: ['300', '400', '500', '600', '700'],
    display: 'swap',
    variable: '--font-oswald',
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const { docs } = await fetchApi<{ docs: Slide[] }>('/slides');

    return (
        <html lang={'ru'}>
            <body className={`${inter.variable} ${oswald.variable}`}>
                <ScrollHandler />
                <Slider slides={docs} />
                {children}
                <EasyWeekWidget />
            </body>
        </html>
    );
}
