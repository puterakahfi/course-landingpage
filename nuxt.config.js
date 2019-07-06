import pkg from "./package";

const routerBase =
  process.env.DEPLOY_ENV === "GH_PAGES"
    ? {
        router: {
          base: "/course-landingpage/"
        }
      }
    : {};

export default {
  ...routerBase,
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: "Course Landingpage",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  /*
   ** Global CSS
   */
  css: ["@/assets/scss/main.scss"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: "@/plugins/aos", ssr: false }],

  /*
   ** Nuxt.js modules
   */
  modules: [
    "nuxt-buefy",
    [
      "nuxt-fontawesome",
      {
        component: "fa",
        imports: [
          // import whole set
          {
            set: "@fortawesome/free-solid-svg-icons",
            icons: ["fas"]
          },
          {
            set: "@fortawesome/free-brands-svg-icons",
            icons: ["fab"]
          }
        ]
      }
    ]
  ],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
