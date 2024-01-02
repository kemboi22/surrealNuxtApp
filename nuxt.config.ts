// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "nuxt-headlessui"
  ],
  components: [
    {
      path: "~/components/ui",
      extensions: [".vue"],
      prefix: "UI"
    }
  ]
})