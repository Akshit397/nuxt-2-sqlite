export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-2-example',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'title', hid: 'title', content: 'Common Title' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    'plugins/hello-world.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/pwa'
  ],
  pwa: {
    manifest: {
      name: 'My Awesome App',
      lang: 'fa',
      ogTitle: 'Title from PWA'
    },
    workbox: {
      // cachingExtensions: ['@/plugins/workbox-cache.js']
      config: {
        debug: true
      }
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/markdownit',
    '@nuxtjs/axios',
    'vue-social-sharing/nuxt',
    '@nuxt/http'
  ],

  axios: {
    proxy: true
  },

  proxy: {
    '/api/': {
      target: 'https://reqres.in/api',
      pathRewrite: {
        '^/api/': ''
      }
    }
  },

  markdownit: {
    injected: true,
    preset: 'default',
    linkify: false,
    html: true,
    typographer: true,
    breaks: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config) {
      config.resolve.alias.vue = 'vue/dist/vue.common'
      config.node = {
        fs: 'empty'
      }
    }
  },
  router: {
    routeNameSplitter: '-',
    extendRoutes(routes, resolve) {
      routes.push(
        {
          name: 'custom',
          path: '/myProfile',
          component: resolve(__dirname, 'pages/user/_id.vue')
        },
        // {
        //   name: 'custom',
        //   path: '/user/:id',
        //   component: resolve(__dirname, 'pages/user/_id.vue')
        // }
      )
    }
  },
  serverMiddleware: [
    {
      path:'/api',handler:'~/api/index.js'
    }
  ]
}
