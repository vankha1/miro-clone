/** @type {import('next').NextConfig} */
// Fix error: Invalid src prop on `next/image`, hostname "img.clerk.com" is not configured under images in your `next.config.js`
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "img.clerk.com"
            }
        ]
    }
};

export default nextConfig;
