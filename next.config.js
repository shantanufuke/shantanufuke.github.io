/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'opengraph.githubassets.com',
                port: '',
                pathname: '/1afeafda/shantanufuke/**',
            },
        ],
    },
};

module.exports = nextConfig;
