import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration'

import { md3 } from 'vuetify/blueprints'

const light = {
  colors: {
    primary: '#2473B8',
    secondary: '#717575',
  },
  dark: false,
}

export default defineVuetifyConfiguration(() => ({
  blueprint: md3,
  defaultTheme: 'light',
  defaults: {
    VBtn: { rounded: 'lg' },
    VSheet: { color: 'transparent' },
    VTextField: { variant: 'outlined' },
    VSelect: { variant: 'outlined' },
  },
  theme: { themes: { light } },
}))
