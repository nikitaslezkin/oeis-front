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
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {name: 'description', hid: 'description', content: 'OEIS'},
            {name: 'msapplication-TileImage', content: '/favicon/mstile-150x150.png'}
        ],
        link: [
            {rel: 'icon', href: '/favicon/favicon.ico'},
            {rel: 'icon', href: '/favicon/favicon.svg', 'type': 'image/svg+xml'},
            {rel: 'apple-touch-icon', href: '/favicon/apple-touch-icon.png', sizes: '180x180'},
            // Font
            {rel: 'preconnect', href: 'https://fonts.gstatic.com'},
            {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap'}
        ],
        script: [].concat(prodScripts),
        noscript: [].concat(noscript),
    },
    /*
    ** Global CSS
    */
    css: [
        '~/assets/less/main.less'
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        '~/plugins/axios'
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/svg-sprite',
        '@nuxtjs/auth-next',
        '@nuxtjs/style-resources',

        '~/modules/axCache'
    ],

    svgSprite: {
        // manipulate module options
    },

    axios: {
        // extra config e.g
        proxy: true,
        debug: !!process.env.AXIOS_DEBUG
    },

    proxy: {
        '/api/': {
            target: process.env.PROXY_API_URL || 'http://127.0.0.1:8080/',
            pathRewrite: {'^/api/': ''},
            secure: !!process.env.PROXY_SECURE,
            debug: !!process.env.PROXY_DEBUG
        },
    },

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
        less: ['@/assets/less/consts.less', '@/assets/less/mixins.less']
    }
}
