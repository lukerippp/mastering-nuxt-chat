// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  css: ["~/assets/css/main.css"],

  modules: ["@nuxt/ui", "@nuxt/eslint", "@nuxtjs/mdc"],

  runtimeConfig: {
    openaiApiKey: "hello",
  },

  mdc: {
    highlight: {
      theme: "material-theme-palenight",
      langs: ["javascript", "html", "typescript", "markdown", "vue"],
    },
  },
});
