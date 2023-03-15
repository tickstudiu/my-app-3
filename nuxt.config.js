require('dotenv').config()

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'my-app-3',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['ant-design-vue/dist/antd.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/antd-ui', '@/plugins/repository.js', '@/plugins/mock.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
	// https://i18n.nuxtjs.org/
	'@nuxtjs/i18n',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.API_BASE_URL,
  },

  // I18n module configuration: https://i18n.nuxtjs.org/basic-usage
  i18n: {
    locales: [
		{
			code: 'en',
			iso: 'en',
			name: 'EN',
			file: 'en.json',
		},
	],
	defaultLocale: 'en',
	strategy: 'prefix',
	lazy: true,
	langDir: 'locales/',
	// Set SEO in layouts instead for performance
	// https://i18n.nuxtjs.org/seo/
	seo: false,
	baseUrl: process.env.APP_BASE_URL,

	// nuxt-i18n having trouble when trying to redirect user to correct language
	// when using 'prefix' strategy
	// These 2 options are workaround to make it work
	// https://github.com/nuxt-community/nuxt-i18n/issues/491
	// https://github.com/nuxt-community/nuxt-i18n/issues/677
	rootRedirect: 'en',
	detectBrowserLanguage: false,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
