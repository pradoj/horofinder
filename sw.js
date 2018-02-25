importScripts("precache-manifest.0cc217be244594bc8720bff7e119e3fa.js", "https://storage.googleapis.com/workbox-cdn/releases/3.0.0-beta.0/workbox-sw.js");

workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

workbox.googleAnalytics.initialize({
    parameterOverrides: {
        dimension1: 'offline',
    },
    hitFilter: (params) => {
        const queueTimeInSeconds = Math.round(params.get('qt') / 1000);
        params.set('metric1', queueTimeInSeconds);
    },
});

