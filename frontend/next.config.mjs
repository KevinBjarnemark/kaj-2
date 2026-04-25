/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",

    // Disable image optimization for static export
    //     - ❕ Why? Next.js Image Optimization requires a server
    //          - ❕ You can still use <Image>, but it won't
    //              optimize at runtime
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
