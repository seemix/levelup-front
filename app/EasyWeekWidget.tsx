'use client';

import Script from 'next/script';

export default function EasyWeekWidget() {
    return (
        <Script
            src="/widget.js"
            strategy="afterInteractive"
            onLoad={() => {
                const win = window as any;

                if (win.EasyWeekWidget) {
                    new win.EasyWeekWidget({
                        url: 'https://booking.easyweek.io/levelup-barbershop',
                        button: null,
                        trigger: '.booking',
                    });
                }
            }}
        />
    );
}