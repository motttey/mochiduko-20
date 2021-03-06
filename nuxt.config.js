import colors from 'vuetify/es5/util/colors'

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'spa',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    // titleTemplate: '%s - ' + 'モチヅ庫',
    titleTemplate: 'モチヅ庫',
    title: process.env.npm_package_name || '',
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
      { rel: 'icon', type: 'image/x-icon', href: '/mochiduko-20/favicon.ico' }
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
    '@nuxtjs/google-analytics'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-fontawesome',
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  proxy: {
    '/pixiv':
    {
      target: 'http://embed.pixiv.net/decorate.php',
      pathRewrite: {'^/pixiv': ''}
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
  build: {
  },
  router: {
    base: '/mochiduko-20/'
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
  googleAnalytics: {
    id: 'G-1PLTQN0YGN'
  },
}
