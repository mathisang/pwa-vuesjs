self.__precacheManifest = [].concat(self.__precacheManifest || [])

workbox.setConfig({
    debug: true
})

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
//[{ "title": "test", "url": "http://127.0.0.1:8887/#/" }]
let clickUrl

self.addEventListener('push', (event) => {
    let pushMessage = event.data.json()

    clickUrl = pushMessage[0].url;

    const options = {
        body: pushMessage[0].title,
        icon: './img/icons/apple-touch-icon.png',
        image: './img/icons/android-chrome-512x512.png',
        vibrate: [200, 100, 200, 100],
        tag: 'vibration-sample'
    }

    event.waitUntil(
        self.registration.showNotification(pushMessage[0].title, options)
    )
})

self.addEventListener('notificationclick', (event) => {
    event.notification.close()

    const promiseChain = clients.openWindow(clickUrl)
    event.waitUntil(
        promiseChain
    )
})