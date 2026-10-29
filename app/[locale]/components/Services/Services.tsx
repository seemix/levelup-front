import SectionHeader from '@/app/[locale]/components/SectionHeader/SectionHeader';
import { servicesData } from '@/app/[locale]/components/Services/servicesData';
import SingleServiceCard from './SingleServiceCard/SingleServiceCard';

export default function Services() {
    return (
        <section id={'services'}>
            <div className={'overlay'} />
            <SectionHeader caption={'ourServices'} />
            <div className={'cards_wrapper'}>
                {servicesData.map((item) => (
                    <SingleServiceCard service={item} key={item.id} />
                ))}
            </div>
        </section>
    );
}
