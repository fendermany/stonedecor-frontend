const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: false,
	poweredByHeader: false,
	optimizeFonts: false,
	env: {
		APP_URL: process.env.REACT_APP_URL,
		APP_ENV: process.env.REACT_APP_ENV,
		APP_SERVER_URL: process.env.REACT_APP_SERVER_URL,
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'https://stonedecor-backend.herokuapp.com/api/:path*',
			},
			{
				source: '/uploads/:path*',
				destination: 'https://stonedecor-backend.herokuapp.com/uploads/:path*',
			},
		]
	},
	images: {
		dangerouslyAllowSVG: true,
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
	},
	i18n,
}

module.exports = nextConfig
