/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
    basePath: isProd ? '/portfolio' : '',
    assetPrefix: isProd ? '/portfolio/' : '',
};

export default nextConfig;
