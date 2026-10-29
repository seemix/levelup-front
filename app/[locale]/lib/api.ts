import { assets } from '@/app/[locale]/assets';

export async function fetchApi<T>(path: string): Promise<T> {
    const res = await fetch(`${assets.apiUrl}${path}`);
    return res.json();
}
