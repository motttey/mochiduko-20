import colors from 'vuetify/es5/util/colors'

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  ssr: false,
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    // titleTemplate: '%s - ' + 'モチヅ庫',
    titleTemplate: 'モチヅ庫 | %s',
    // title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0' },
      { name: 'keywords', content: '望月,望月田吾作,ドラえもん,Doraemon,Fujiko Fujio,藤子不二雄,藤子・F・不二雄,イラスト,ドラえもん イラスト' },
      { name: 'author', content: 'Tagosaku Mochiduki' },
      { hid: 'description', name: 'description', content: '望月 田吾作 (もちづき たごさく)が描いた、ドラえもんや藤子不二雄作品などのイラストや漫画を掲載しているサイトです.' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'モチヅ庫' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'http://motttey.github.io/mochiduko-20' },
      { hid: 'og:title', property: 'og:title', content: 'モチヅ庫' },
      { hid: 'og:image', property: 'og:image', content: 'https://motttey.github.io/mochiduko-20/drawer-bg.webp' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@mt_tg' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'モチヅ庫\'20' },
      { hid: 'twitter:description', name: 'twitter:description', content: '望月田吾作のドラえもんだらけなホームページ' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/mochiduko-20/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOriginIsolated: true },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Klee+One:wght@400;600&display=swap' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '~plugins/vue-scrollto'
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-fontawesome',
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/google-gtag'
  ],
  auth: {
    strategies: {
        cookie: {
            cookie: {
                // (optional) If set, we check this cookie existence for loggedIn check
                name: 'XSRF-TOKEN',
            },
        }
    },
    redirect: {
      login: '/chat',
      logout: '/chat',
      callback: '/chat',
      home: '/chat'
    }
  },
  proxy: {
    '/pixiv':
    {
      target: 'http://embed.pixiv.net/decorate.php',
      pathRewrite: {'^/pixiv': ''}
    },
    '/links':
    {
      target: process.env.LINKS_API_URL,
      pathRewrite: {'^/links': ''}
    },
    '/stories':
    {
      target: process.env.STORIES_API_URL,
      pathRewrite: {'^/stories': ''}
    },
    '/motttey':
    {
      target: 'https://motttey.github.io/gallery/',
      pathRewrite: {'^/motttey': ''}
    }
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {},
  router: {
    base: '/mochiduko-20/',
    middleware: ['bff']
  },
  env: {
    PIXIV_API_URL: process.env.PIXIV_API_URL,
    LINKS_API_URL: process.env.LINKS_API_URL,
    STORIES_API_URL: process.env.STORIES_API_URL,
    CHATGPT_TOKEN: process.env.CHATGPT_TOKEN,
    GOOGLE_AUTH_TOKEN: process.env.GOOGLE_AUTH_TOKEN
  },
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab']
      }
    ],
  },
  'google-gtag': {
    id: process.env.GOOGLE_ANALYTICS_ID,
    debug: true
  }
}
