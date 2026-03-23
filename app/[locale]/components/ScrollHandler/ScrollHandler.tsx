'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function ScrollHandler() {
    const pathname = usePathname();

    useEffect(() => {
        const hash = window.location.hash;

        // Спроба відновити позицію, якщо вона була збережена в sessionStorage
        const savedScroll = sessionStorage.getItem('pendingScroll');

        const handleScroll = () => {
            if (hash) {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'instant', block: 'start' });
                    sessionStorage.removeItem('pendingScroll');
                    return;
                }
            }

            if (savedScroll) {
                window.scrollTo({ top: parseInt(savedScroll), behavior: 'instant' });
                sessionStorage.removeItem('pendingScroll');
            }
        };

        // Використовуємо 100мс — це "золота середина"
        const timeoutId = setTimeout(handleScroll, 500);

        return () => clearTimeout(timeoutId);
    }, [pathname]); // Хеш зазвичай змінюється разом із pathname при зміні мови

    return null;
}