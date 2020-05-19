module.exports = {
    pwa: {
        name: 'Mon blog',
        themeColor: '#d28c79',
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