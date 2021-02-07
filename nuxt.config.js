require('dotenv').config();

let noscript = [];
let prodScripts = [];

export default {
    server: {
        port: process.env.NUXT_PORT
    },
    env: {
        APP_ENV_CONFIG: process.env.APP_ENV
    },
    mode: 'universal',
    router: {
        extendRoutes(routes, resolve) {
            // routes.push({
            //     name: 'routeName',
            //     path: '/:slug',
            //     component: resolve(__dirname, 'pages/subscription/index.vue')
            // })
        },
        scrollBehavior: function (to, from, savedPosition) {
            return {x: 0, y: 0}
        }
    },
    /*
    ** Headers of the page
    */
    head: {
        title: 'OEIS',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'description', hid: 'description', content: 'OEIS' },
            { name: 'msapplication-TileImage', content: '/favicon/mstile-150x150.png' }
        ],
        link: [
            { rel: 'icon', href: '/favicon/favicon.ico' },
            { rel: 'icon', href: '/favicon/favicon.svg', 'type': 'image/svg+xml' },
            { rel: 'apple-touch-icon', href: '/favicon/apple-touch-icon.png', sizes: '180x180' },
        ],
        script: [

        ].concat(prodScripts),
        noscript: [

        ].concat(noscript),
    },
    /*
    ** Global CSS
    */
    css: [
        '~/assets/less/main.less',
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        '~/plugins/axios'
    ],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
        '@nuxtjs/dotenv',
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/svg-sprite',
        '@nuxtjs/auth-next',

        '~/modules/axCache'
    ],

    svgSprite: {
        // manipulate module options
    },

    axios: {
        // extra config e.g
        proxy: false,
        debug: !!process.env.AXIOS_DEBUG
    },

    // auth: {
    //     strategies: {
    //         'laravelJWT': {
    //             provider: 'laravel/jwt',
    //             url: '/jwt',
    //             endpoints: {
    //                 login: {
    //                     url: '/auth/login'
    //                 },
    //                 refresh: {
    //                     url: '/auth/refresh'
    //                 },
    //                 logout: {
    //                     url: '/auth/logout'
    //                 },
    //                 user: {
    //                     url: '/auth/me',
    //                     method: 'post'
    //                 }
    //             },
    //             token: {
    //                 property: '_token',
    //                 maxAge: 3600
    //             },
    //             user: {
    //                 property: 'data'
    //             },
    //         },
    //     },
    //     redirect: {
    //         login: '/login',
    //         logout: '/',
    //         home: '/my/settings'
    //     }
    // },
    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
            config.module.rules.push(
                {
                    test: /\.(glb|gltf)$/,
                    use:
                        [
                            {
                                loader: 'file-loader',
                                options:
                                    {
                                        outputPath: 'assets/models/'
                                    }
                            }
                        ]
                });
        }
    },
    styleResources: {
        less: ['@/assets/less/constants.less', '@/assets/less/mixins.less']
    }
}
