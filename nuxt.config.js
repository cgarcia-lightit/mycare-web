export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'mycare-web',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  router: {
    middleware: [ 'auth','redirect','patient' ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/sass/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/toast.js', ssr: true } ,
    {src: '~/plugins/axios.js', ssr: true }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxt/typescript-build',
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/dotenv',
    'vue-sweetalert2/nuxt'
  ],

  auth: {
    strategies: {
      laravelSanctum: {
        provider: 'laravel/sanctum',
        token: {
          name: 'Authorization',
          required: true,
          type: 'Bearer'
        },
        url: process.env.AUTH_BASE_URL,
        endpoints: {
          login: {
            url: process.env.AUTH_PATH_URL
          },
          logout: {
            url: '/api/logout'
          },
          users: {
            url: '/api/users'
          }
        },
        user: {
          property : false
        }
      }
    },
    redirect: {
      logout: '/login',
      home: '/home'

    },
    plugins: [
      '~/plugins/auth.js'
    ]
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.API_URL,
    credentials: true,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  layoutTransition: 'fade',
  pageTransition: 'fade',

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  }
}
