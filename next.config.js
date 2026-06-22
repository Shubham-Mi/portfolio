/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/project/base-convertor',
        destination: 'https://base-convertor-one.vercel.app',
      },
      {
        source: '/project/base-convertor/:path*',
        destination: 'https://base-convertor-one.vercel.app/:path*',
      },
    ];
  },
}

module.exports = nextConfig
