import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const __dirname = new URL('.', import.meta.url).pathname
const vuefirePkg = JSON.parse(
  readFileSync(resolve(__dirname, 'node_modules/vuefire/package.json'), 'utf-8')
)
const nuxtVuefirePkg = JSON.parse(
  readFileSync(
    resolve(__dirname, 'node_modules/nuxt-vuefire/package.json'),
    'utf-8'
  )
)

export default defineNuxtConfig({
  // If you set ssr to false, you can't prerender pages
  // ssr: false,
  devtools: { enabled: true },
  modules: ['nuxt-vuefire'],

  app: {
    head: {
      title: 'Nuxt + VueFire',
      link: [
        {
          href: 'https://cdn.jsdelivr.net/npm/water.css@2/out/water.css',
          rel: 'stylesheet',
        },
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/vuefire.svg',
        },
      ],
    },
  },

  css: ['@/assets/style.css'],

  vuefire: {
    auth: true,
    emulators: {
      enabled: true,
    },
    // app check is intentionally disabled as the app below doesn't exist
    config: {
      // fake config, only works with emulator
      apiKey: 'xxxxxxxxxxxxxxxxxxxxx_xxxxxxxxxxxx_xxxx',
      authDomain: 'my-project.firebaseapp.com',
      databaseURL: 'https://my-project.firebasedatabase.app',
      projectId: 'my-project',
      storageBucket: 'my-project.appspot.com',
      messagingSenderId: '000000000000',
      appId: '1:000000000000:web:0000000000000000000000',
    },
  },

  runtimeConfig: {
    public: {
      // to show the versions in the app
      vuefireVersion: vuefirePkg.version,
      nuxtVuefireVersion: nuxtVuefirePkg.version,
    },
  },

  routeRules: {
    '/': { isr: true },
    // deactivate any routes you want here
    '/login': { ssr: false },
    '/api/**': { cors: true },
  },

  experimental: {
    payloadExtraction: false,
  },
})
