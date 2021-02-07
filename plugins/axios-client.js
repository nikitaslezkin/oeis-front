export default function({ $axios }) {
    $axios.interceptors.request.use(function(request) {
        if (process.env.APP_ENV === 'stage' || process.env.APP_ENV === 'prod') {
            request.url = request.url.replace('/api/', '/api/v4/');
        }

        return request;
    }, function(error) {
        return Promise.reject(error);
    })
}
