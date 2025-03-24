import {
  defineNuxtModule,
  addPlugin,
  createResolver,
  addTypeTemplate,
  addImportsDir,
  addComponentsDir,
} from "@nuxt/kit";

export default defineNuxtModule({
  defaults: {},
  meta: {
    configKey: "nuxtToasts",
    name: "nuxt-toasts",
  },
  setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url);

    addTypeTemplate({
      filename: "./types/nuxt-toasts.d.ts",
      src: resolver.resolve("./runtime/types/index.d.ts"),
    });

    addComponentsDir({ path: resolver.resolve("./runtime/components") });
    addImportsDir(resolver.resolve("./runtime/components"));
    addImportsDir(resolver.resolve("./runtime/composables"));

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve("./runtime/plugin"));
  },
});
