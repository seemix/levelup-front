'use client';

import { SectionHeader, SingleServiceCard } from '@/app/[locale]/components';
import { servicesData } from '@/app/[locale]/components/Services/servicesData';

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
