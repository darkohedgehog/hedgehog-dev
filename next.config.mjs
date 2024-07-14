import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
          {
            protocol: "http",
            hostname: "localhost",
          },
          {
            protocol: "https",
            hostname: "res.cloudinary.com",
            pathname: "/dhkmlqg4o/**",
          },
          {
            protocol: "https",
            hostname: "pbs.twimg.com",
            
          },
          
        ],
      },
};
 
export default withNextIntl(nextConfig);