import getRoutes from './utils/getRoutes'
import getSiteMeta from './utils/getSiteMeta'

const plugin = require('tailwindcss/plugin')
const meta = getSiteMeta()

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'en-US',
    },
    title: 'makraz.com',
    meta: [
      { charset: 'utf-8' },
      // { name: 'HandheldFriendly', content: 'True' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
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
  plugins: ['~/plugins/safe-area.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://pwa.nuxtjs.org
    '@nuxtjs/pwa',
    // https://content.nuxtjs.org
    '@nuxt/content',
    // https://sitemap.nuxtjs.org
    '@nuxtjs/sitemap',
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
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

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
}
