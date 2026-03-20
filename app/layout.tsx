import { Inter, Oswald } from 'next/font/google';
import { assets } from '@/app/[locale]/assets';
import { Slider } from '@/app/[locale]/components';
import EasyWeekWidget from '@/app/EasyWeekWidget';

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
export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const { apiUrl } = assets;
    const { docs } = await fetch(`${apiUrl}slides`).then((res) => res.json());

    return (
        <html lang={'ru'}>
        <body className={`${inter.variable} ${oswald.variable}`}>
        <Slider slides={docs}/>
        {children}
        <EasyWeekWidget/>
        </body>
        </html>
    );
}
