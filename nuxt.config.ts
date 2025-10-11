import vuetify from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  build: {
    transpile: ['vuetify', '@fortawesome/vue-fontawesome'],
  },
  app: {
    baseURL: '/mochiduko-20/',
    head: {
      titleTemplate: 'モチヅ庫 | %s',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0' },
        { name: 'keywords', content: '望月,望月田吾作,ドラえもん,Doraemon,Fujiko Fujio,藤子不二雄,藤子・F・不二雄,イラスト,ドラえもん イラスト' },
        { name: 'author', content: 'Tagosaku Mochiduki' },
        { key: 'description', name: 'description', content: '望月 田吾作 (もちづき たごさく)が描いた、ドラえもんや藤子不二雄作品などのイラストや漫画を掲載しているサイトです.' },
        { key: 'og:site_name', property: 'og:site_name', content: 'モチヅ庫' },
        { key: 'og:type', property: 'og:type', content: 'website' },
        { key: 'og:url', property: 'og:url', content: 'http://motttey.github.io/mochiduko-20' },
        { key: 'og:title', property: 'og:title', content: 'モチヅ庫' },
        { key: 'og:image', property: 'og:image', content: 'https://motttey.github.io/mochiduko-20/drawer-bg.webp' },
        { key: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { key: 'twitter:site', name: 'twitter:site', content: '@mt_tg' },
        { key: 'twitter:title', name: 'twitter:title', content: 'モチヅ庫\'20' },
        { key: 'twitter:description', name: 'twitter:description', content: '望月田吾作のドラえもんだらけなホームページ' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/mochiduko-20/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Klee+One:wght@400;600&display=swap' }
      ]
    }
  },
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  modules: [
    '@pinia/nuxt',
  ],
  hooks: {
    'vite:extendConfig': (config) => {
      config.plugins = config.plugins || []
      config.plugins.push(
        vuetify({
          autoImport: true,
        })
      )
    }
  },
  runtimeConfig: {
    public: {
      pixivApiUrl: process.env.PIXIV_API_URL,
      linksApiUrl: process.env.LINKS_API_URL,
      storiesApiUrl: process.env.STORIES_API_URL,
      chatgptToken: process.env.CHATGPT_TOKEN,
      googleAuthToken: process.env.GOOGLE_AUTH_TOKEN,
      gtagId: process.env.GOOGLE_ANALYTICS_ID
    }
  },
  routeRules: {
    '/pixiv/**': { proxy: 'http://embed.pixiv.net/decorate.php/**' },
    '/links/**': { proxy: `${process.env.LINKS_API_URL}/**` },
    '/stories/**': { proxy: `${process.env.STORIES_API_URL}/**` },
    '/motttey/**': { proxy: 'https://motttey.github.io/gallery/**' },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/variables.scss";'
        }
      }
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true }
})
