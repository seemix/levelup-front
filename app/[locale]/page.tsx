import { assets } from '@/app/[locale]/assets';
import { About, ArrowUp, Barbers, Contacts, Footer, Header, Main, Services } from '@/app/[locale]/components';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
    const { apiUrl } = assets;
    const { locale } = await params;

    const { content } = await fetch(`${apiUrl}/globals/about-us?locale=${locale}`).then((res) => res.json());
    const { docs } = await fetch(`${apiUrl}/barbers?locale=${locale}&?sort=-createdAt`).then((res) => res.json());
    return (
        <>
            <Header/>
            <Main loading={false}/>
            <About content={content}/>
            <Services/>
            <Barbers barbers={docs}/>
            <Contacts/>
            <Footer/>
            <ArrowUp/>
        </>
    );
}
