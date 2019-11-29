import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      {rel:'stylesheet',type:"css/text",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css"},
      {rel:"stylesheet",type:"css/text",href:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"},
      {rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Material+Icons"},
      {rel:"stylesheet", href:"https://fonts.googleapis.com/css?family=Abril+Fatface|Aclonica|Allerta+Stencil|Allura|Bad+Script|Caveat|Chewy|Cookie|Courgette|Covered+By+Your+Grace|Damion|Dancing+Script|Fascinate+Inline|Fredericka+the+Great|Fredoka+One|Fugaz+One|Grand+Hotel|Great+Vibes|Homemade+Apple|Kaushan+Script|Leckerli+One|Liu+Jian+Mao+Cao|Lobster|Long+Cang|Marck+Script|Modak|Monoton|Mr+Dafoe|Nanum+Pen+Script|Oleo+Script|Pacifico|Parisienne|Permanent+Marker|Pinyon+Script|Rancho|Reenie+Beanie|Sacramento|Satisfy|Shadows+Into+Light+Two|Spicy+Rice|Srisakdi|Trochut|Ubuntu|Yellowtail|Yeseva+One|Zhi+Mang+Xing|Zilla+Slab+Highlight&display=swap"}

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/fontAwesome', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
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
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}