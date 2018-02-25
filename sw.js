importScripts("precache-manifest.17a7b47751a72c008d7f3c691bf4b556.js", "https://storage.googleapis.com/workbox-cdn/releases/3.0.0-beta.0/workbox-sw.js");

importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0-beta.0/workbox-sw.js');

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);
} else {
    console.log(`Boo! Workbox didn't load 😬`);
}

workbox.routing.registerRoute(
    new RegExp('.*\.js'),
    workbox.strategies.networkFirst()
);

workbox.routing.registerRoute(
    /.*\.css/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'css-cache',
    })
);

workbox.routing.registerRoute(
    /.*\.(?:png|jpg|jpeg|svg|gif)/,
    workbox.strategies.cacheFirst({
        cacheName: 'image-cache',
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 20,
                maxAgeSeconds: 7 * 24 * 60 * 60,
            })
        ]
    })
);

// for usage with workbox-cli
// workbox.precaching.precacheAndRoute([]);

// for usage with workbox-webpack-plugin
workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

