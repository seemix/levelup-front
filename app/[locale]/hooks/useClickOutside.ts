// import { type RefObject, useEffect } from 'react';
//
// export function useClickOutside<T extends HTMLElement>(
//     ref: RefObject<T | null>,
//     onOutsideClick: () => void,
//     enabled: boolean = true,
// ) {
//     useEffect(() => {
//         if (!enabled) return;
//
//         const handler = (event: MouseEvent | TouchEvent) => {
//             if (!ref.current) return;
//
//             if (!ref.current.contains(event.target as Node)) {
//                 onOutsideClick();
//             }
//         };
//
//         document.addEventListener('mousedown', handler);
//         document.addEventListener('touchstart', handler);
//
//         return () => {
//             document.removeEventListener('mousedown', handler);
//             document.removeEventListener('touchstart', handler);
//         };
//     }, [ref, onOutsideClick, enabled]);
// }

import { useEffect, useRef } from 'react';

export const useClickOutside = <T extends HTMLElement>(
    cb: () => void
): React.RefObject<T | null> => {
    const ref = useRef<T | null>(null);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                cb();
            }
        };

        document.addEventListener('click', handleClick, true);
        return () => {
            document.removeEventListener('click', handleClick, true);
        };
    }, [cb]);

    return ref;
};