import tailwindcss from "@tailwindcss/vite";


export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./assets/css/main.css'],
  
  app: {
    baseURL: '/code-blog/'
  },
  
  ssr: false,

  modules: [
    '@nuxtjs/google-fonts',
    '@nuxt/content'
  ],
  googleFonts: {
    families: {
      "JetBrains Mono": true,
      "Inter": true
    }
  },
  vite: {
    plugins: [
      tailwindcss(),
    ]
  },
})