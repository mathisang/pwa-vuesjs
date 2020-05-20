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
        }
    }
}