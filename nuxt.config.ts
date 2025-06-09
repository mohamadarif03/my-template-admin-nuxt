export default defineNuxtConfig({
  devtools: { enabled: false },

  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss'
  ],

  css: ['~/assets/css/main.css'],

  future: {
    compatibilityVersion: 4
  },

   ui: {
    theme: {
      colors: ['primary', 'error'],
      transitions: true
    }
  },
  compatibilityDate: '2024-11-27'
})