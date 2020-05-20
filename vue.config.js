module.exports = {
    pwa: {
        name: 'Baz\'art',
        themeColor: '#FFD800',
        msTileColor: '#000000',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',
        manifestOptions: {
            display: 'fullscreen'
        },
        workboxPluginMode: 'InjectManifest',
        workboxOptions : {
            swSrc: 'src/service-worker.js'
        },
        icons: [
            {
                src: "img/icons/icon-72x72.png",
                sizes: "72x72",
                type: "image/png"
            },
            {
                "src": "img/icons/icon-96x96.png",
                sizes: "96x96",
                type: "image/png"
            },
            {
                "src": "img/icons/icon-128x128.png",
                sizes: "128x128",
                type: "image/png"
            },
            {
                "src": "img/icons/icon-144x144.png",
                sizes: "144x144",
                type: "image/png"
            },
            {
                "src": "img/icons/icon-152x152.png",
                sizes: "152x152",
                type: "image/png"
            },
            {
                "src": "img/icons/icon-192x192.png",
                sizes: "192x192",
                type: "image/png"
            },
            {
                "src": "img/icons/icon-384x384.png",
                sizes: "384x384",
                type: "image/png"
            },
            {
                "src": "img/icons/icon-512x512.png",
                sizes: "512x512",
                type: "image/png"
            }
        ],
    }
}