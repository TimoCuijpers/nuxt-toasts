import { defineNuxtModule, addPlugin, createResolver, addTypeTemplate } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'noti-nuxt',
    configKey: 'notiNuxt',
  },
  defaults: {},
  setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url)

    addTypeTemplate({
      filename: './types/noti-nuxt.d.ts',
    })

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))
  },
})
