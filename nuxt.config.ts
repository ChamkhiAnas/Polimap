// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui','nuxt3-leaflet'],
  ui: {
    global: true,
    icons: ['mdi', 'simple-icons']
  },

 
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
      '~/plugins/leaflet.js',
  ],
  
  css: [
    "leaflet/dist/leaflet.css",
  ],
  
  
  
})
