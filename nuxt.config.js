import getRoutes from './utils/getRoutes'
import getSiteMeta from './utils/getSiteMeta'

const meta = getSiteMeta()

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'en-US',
    },
    title: 'Hamza Makraz Software Engineer // Consultant',
    meta: [
      { charset: 'utf-8' },
      // { name: 'HandheldFriendly', content: 'True' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ...meta,
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { hid: 'canonical', rel: 'canonical', href: process.env.BASE_URL },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/safe-area.js', '~/plugins/format-date.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://google-analytics.nuxtjs.org
    '@nuxtjs/google-analytics',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://pwa.nuxtjs.org
    '@nuxtjs/pwa',
    // https://content.nuxtjs.org
    '@nuxt/content',
    // https://sitemap.nuxtjs.org
    '@nuxtjs/sitemap',
    // https://github.com/nuxt-community/gtm-module
    '@nuxtjs/gtm',
  ],

  hooks: {
    'content:file:beforeInsert': (document) => {
      if (document.extension === '.md') {
        // const { text, minutes, time, words } = require('reading-time')(document.text)
        document.readingTime = require('reading-time')(document.text)
      }
    },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
    meta: {
      theme_color: '#059669',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    liveEdit: false,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  tailwindcss: {
    config: {
      theme: {
        aspectRatio: {
          1: '1',
          2: '2',
          3: '3',
          4: '4',
        },
      },
      variants: {
        aspectRatio: ['responsive', 'hover'],
      },
    },
  },

  sitemap: {
    hostname: process.env.BASE_URL,
    routes() {
      return getRoutes()
    },
  },

  // Router middlewares
  router: {
    middleware: 'maintenance',
  },

  // Build Configuration: https://google-analytics.nuxtjs.org/setup
  googleAnalytics: {
    id: 'UA-120924762-1',
  },

  // Build Configuration: https://github.com/nuxt-community/gtm-module
  gtm: {
    id: 'GTM-WG7GDCD',
  },
}
