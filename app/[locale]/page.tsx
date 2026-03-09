import { assets } from '@/app/[locale]/assets';
import { Slider } from '@/app/[locale]/components';

export default async function Home() {
    const { apiUrl } = assets;
    const { docs } = await fetch(`${apiUrl}slides`).then(res => res.json());
    return (
        <Slider slides={docs}/>
    );
}
