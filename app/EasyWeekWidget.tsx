'use client';

import Script from 'next/script';

type EasyWeekWidgetConstructor = new (options: { url: string; button: null; trigger: string }) => unknown;

export default function EasyWeekWidget() {
    return (
        <Script
            src='/widget.js'
            strategy='afterInteractive'
            onLoad={() => {
                const { EasyWeekWidget } = window as unknown as { EasyWeekWidget?: EasyWeekWidgetConstructor };

                if (EasyWeekWidget) {
                    new EasyWeekWidget({
                        url: 'https://booking.easyweek.io/levelup-barbershop',
                        button: null,
                        trigger: '.booking',
                    });
                }
            }}
        />
    );
}
