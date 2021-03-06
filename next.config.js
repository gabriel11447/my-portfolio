/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
  reactStrictMode: true,
  images: {
    domains: ['github.com', 'play-lh.googleusercontent.com', 'avatarfiles.alphacoders.com', 'lh5.googleusercontent.com'],
  },
})