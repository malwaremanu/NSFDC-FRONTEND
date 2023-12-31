// https://nuxt.com/docs/api/configuration/nuxt-config
export default ({
  target: 'static',
  ssr: false,
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["nuxt3-vuex-module", "@formkit/nuxt", "nuxt-icon"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  formkit: {
    // Experimental support for auto loading (see note):
    autoImport: true,
    configFile: './formkit.config.js',
  },
});