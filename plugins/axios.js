import { cacheAdapterEnhancer } from 'axios-extensions';
import LRU from 'lru-cache';

export default function ({ $axios, ssrContext }) {
    let CACHE_MAX_AGE = parseInt(process.env.CACHE_MAX_AGE || 0, 10);
    CACHE_MAX_AGE = isNaN(CACHE_MAX_AGE) ? 0 : CACHE_MAX_AGE;

    if (CACHE_MAX_AGE !== 0) {
        const defaultCache = process.server
            ? ssrContext.$axCache
            : new LRU({ maxAge: CACHE_MAX_AGE });

        const defaults = $axios.defaults;

        // https://github.com/kuitos/axios-extensions
        defaults.adapter = cacheAdapterEnhancer(defaults.adapter, {
            enabledByDefault: true,
            cacheFlag: 'useCache',
            defaultCache
        });
    }
}
