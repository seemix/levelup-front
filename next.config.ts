import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
    images: {
        qualities: [90],
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '195.178.106.119:3002',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'barbercompany.com',
                port: '',
                pathname: '/**',
            },
        ],
        unoptimized: process.env.NODE_ENV === 'development',
    },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
