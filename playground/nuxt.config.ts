import { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  modules: ['../src/module', 'vuetify-nuxt-module', '@pinia/nuxt'],
  vite: {
    vue: { template: { transformAssetUrls } },
  },
  devtools: { enabled: true },
  compatibilityDate: '2025-03-20',
  vuetify: {
    vuetifyOptions: './config/vuetify.config.js'
  },
  // imports: {
  //   presets: [
  //     {
  //       from: '',
  //       imports: ['useNotificationStore']
  //     }
  //   ]
  // }
})