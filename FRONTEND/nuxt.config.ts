// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "~/assets/css/main.css"    
  ],
  modules: [
    // ...
    '@pinia/nuxt',
    {
      autoImports: ['defineStore', 'acceptHMRUpdate'],
    }
  ],
  imports : {
    dirs: ['stores'],
},
  postcss: {
    plugins: {      
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})