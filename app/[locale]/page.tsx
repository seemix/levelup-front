import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical';
import About from '@/app/[locale]/components/About/About';
import ArrowUp from '@/app/[locale]/components/ArrowUp/ArrowUp';
import Barbers from '@/app/[locale]/components/Barbers/Barbers';
import type { BarberType } from '@/app/[locale]/components/Barbers/barberType';
import Contacts from '@/app/[locale]/components/Contacts/Contacts';
import Footer from '@/app/[locale]/components/Footer/Footer';
import Header from '@/app/[locale]/components/Header/Header';
import Main from '@/app/[locale]/components/Main/Main';
import Services from '@/app/[locale]/components/Services/Services';
import { fetchApi } from '@/app/[locale]/lib/api';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;

    const [{ content }, { docs }] = await Promise.all([
        fetchApi<{ content: SerializedEditorState }>(`/globals/about-us?locale=${locale}`),
        fetchApi<{ docs: BarberType[] }>(`/barbers?locale=${locale}&?sort=createdAt`),
    ]);

    return (
        <>
            <Header />
            <Main loading={false} />
            <About content={content} />
            <Services />
            <Barbers barbers={docs} />
            <Contacts />
            <Footer />
            <ArrowUp />
        </>
    );
}
