import getRoutes from './utils/getRoutes'

export default {
	target: 'static',
	head: {
		title: '0to100',
		meta: [
			{ charset: 'utf-8' },
			{
				hid: 'description',
				name: 'description',
				content:
					'Ein Platz wo ich meine Ideen teile und ein paar interessante Dinge nieder zu schreiben.',
			},
			{ name: 'HandheldFriendly', content: 'True' },
			{ property: 'og:site_name', content: '0to100' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{
				name: 'msapplication-TileColor',
				content: '#f9f9f9',
			},
			{
				name: 'theme-color',
				content: '#ffffff',
			},
			{ property: 'og:image:width', content: '740' },
			{ property: 'og:image:height', content: '300' },
			{ name: 'twitter:site', content: '@marcelxpfeifer' },
			{ name: 'twitter:card', content: 'summary_large_image' },
			{
				name: 'keywords',
				content:
					'Marcel Pfeifer, Wolves, 0to100, Frontend, Developer, Development, Entwickler, Designer, Design, User Experience, User Interface, User, Interface, Experience, twitch, student, webdesign, webdesigner, UX, UI, Product, vue, vuejs, nuxtjs, css, scss, html, javascript',
			},
		],
		link: [
			{
				hid: 'canonical',
				rel: 'canonical',
				href: 'https://0to100.ink',
			},
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{
				rel: 'apple-touch-icon',
				sizes: '180x180',
				href: '/apple-touch-icon.png',
			},
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '32x32',
				href: '/favicon-32x32.png',
			},
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '16x16',
				href: '/favicon-16x16.png',
			},
			{
				rel: 'mask-icon',
				href: '/safari-pinned-tab.svg',
				color: '#f9f9f9',
			},
		],
		htmlAttrs: {
			lang: 'de',
		},
	},
	/*
	 ** Global CSS
	 */
	css: ['@/assets/Styles/fonts.css', '@/assets/Styles/main.scss'],
	/*
	 ** Plugins to load before mounting the App
	 ** https://nuxtjs.org/guide/plugins
	 */
	plugins: [],
	/*
	 ** Auto import components
	 ** See https://nuxtjs.org/api/configuration-components
	 */
	components: true,
	/*
	 ** Nuxt.js dev-modules
	 */
	buildModules: [
		// Doc: https://github.com/nuxt-community/eslint-module
		'@nuxtjs/eslint-module',
		'@nuxtjs/color-mode',
		'@nuxtjs/pwa',
	],
	/*
	 ** Nuxt.js modules
	 */
	modules: ['@nuxtjs/pwa', '@nuxt/content', '@nuxtjs/sitemap'],
	/*
	 ** Build configuration
	 ** See https://nuxtjs.org/api/configuration-build/
	 */
	build: {},
	content: {
		markdown: {
			prism: {
				theme: 'prism-themes/themes/prism-nord.css',
			},
		},
	},

	sitemap: {
		hostname: 'https://0to100.ink',
		gzip: true,
		routes() {
			return getRoutes()
		},
	},

	pwa: {
		manifest: {
			lang: 'de',
			name: '0to100',
			short_name: '0to100',
			display: 'standalone',
			theme_color: '#d90000',
			background_color: '#ffffff',
		},
	},

	generate: {
		fallback: true,
	},
}
