/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "korizen.com",
            },
            {
                protocol: "https",
                hostname: "cdn.korizen.com",
            },
        ],
    },
};

module.exports = nextConfig;
