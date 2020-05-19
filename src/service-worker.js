self.__precacheManifest = [].concat(self.__precacheManifest || [])

workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

// APIs

workbox.routing.registerRoute(
    new RegExp('https://jsonplaceholder.typicode.com/(.*)'),
    new workbox.strategies.CacheFirst({
        cacheName: 'jsonPlaceHolder',
        method: 'GET',
        cacheableResponse: { statuses: [0, 200] },
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 30
            })
        ]
    })
)

// Fonts

workbox.routing.registerRoute(
    new RegExp('https://font.(?:googleapis|gstatic).com/(.*)'),
    new workbox.strategies.CacheFirst({
        cacheName: 'googleapis',
        method: 'GET',
        cacheableResponse: { statuses: [0, 200] },
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 30
            })
        ]
    })
)