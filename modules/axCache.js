import LRU from 'lru-cache';

export default function(_moduleOptions) {
    let CACHE_MAX_AGE = parseInt(process.env.CACHE_MAX_AGE || 0, 10);
    CACHE_MAX_AGE = isNaN(CACHE_MAX_AGE) ? 0 : CACHE_MAX_AGE;

    if (CACHE_MAX_AGE !== 0) {
        const axCache = new LRU({ maxAge: CACHE_MAX_AGE });

        this.nuxt.hook('vue-renderer:ssr:prepareContext', ssrContext => {
            ssrContext.$axCache = axCache;
        })
    }
}
