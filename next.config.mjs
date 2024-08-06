/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
                pathname: "**"
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com",
                pathname: "**"
            }
        ]
    }
};

export default nextConfig;
