/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'ichef.bbci.co.uk',
          },
          {
            protocol: 'https',
            hostname: 'm.files.bbci.co.uk'
          }
        ],
      },
}

module.exports = nextConfig
