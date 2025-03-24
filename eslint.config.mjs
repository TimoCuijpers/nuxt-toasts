import pluginVue from "eslint-plugin-vue";
import stylisticTs from "@stylistic/eslint-plugin-ts";
import stylisticJs from "@stylistic/eslint-plugin-js";
import sortKeysFix from "eslint-plugin-sort-keys-fix";
import withNuxt from "./.nuxt/eslint.config.mjs";
// import typescriptEslint from 'typescript-eslint';

export default withNuxt([
  // ...pluginVue.configs["flat/recommended"],
  {
    plugins: {
      "sort-keys-fix": sortKeysFix,
      "@stylistic/ts": stylisticTs,
      "@stylistic/js": stylisticJs,
      vue: pluginVue,
    },

    files: ["src/*.vue", "src/*.js", "src/*.ts"],

    languageOptions: {
      globals: {
        axios: true,
        _: true,
        api: true,
        dateTime: true,
      },
    },

    rules: {
      "sort-keys-fix/sort-keys-fix": ["warn", "asc"],
      "object-curly-newline": [
        "error",
        {
          ObjectExpression: { multiline: true, minProperties: 0 },
          ObjectPattern: { multiline: true },
          ImportDeclaration: { multiline: true, minProperties: 0 },
          ExportDeclaration: { multiline: true, minProperties: 0 },
        },
      ],
      "@stylistic/js/indent": ["error", 2],
      "no-multiple-empty-lines": [
        "error",
        {
          max: 1,
          maxEOF: 1,
        },
      ],
      "vue/multiline-html-element-content-newline": ["error"],
      "vue/singleline-html-element-content-newline": [
        "error",
        {
          ignores: ["pre", "textarea"],
        },
      ],
      "vue/html-indent": [
        "error",
        2,
        {
          baseIndent: 1,
          alignAttributesVertically: false,
          ignores: [],
        },
      ],
      "vue/multi-word-component-names": "off",
      "vue/attributes-order": [
        "warn",
        {
          alphabetical: true,
        },
      ],
      "vue/block-order": [
        "error",
        {
          order: ["script", "template", "style"],
        },
      ],
      "vue/component-name-in-template-casing": "error",
      "vue/padding-line-between-blocks": "error",
      "vue/no-constant-condition": "off",
      "vue/html-self-closing": "off",
      "vue/padding-line-between-tags": [
        "error",
        [{ blankLine: "always", prev: "*", next: "*" }],
      ],
      "vue/max-attributes-per-line": [
        "error",
        {
          singleline: 1,
          multiline: 1,
        },
      ],
      "vue/block-tag-newline": [
        "error",
        {
          singleline: "never",
          maxEmptyLines: 0,
          multiline: "always",
        },
      ],
      "vue/first-attribute-linebreak": [
        "error",
        {
          singleline: "beside",
          multiline: "below",
        },
      ],
      // 'vue/sort-keys': ['error', 'asc', {
      //   caseSensitive: true,
      //   ignoreChildrenOf: ['model'],
      //   natural: true,
      // }],
    },
  },
]);
