/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/YYPcyY
 */

importScripts(
  "precache-manifest.7b43b742a07dd91d422691f6c6b979bc.js",
  "https://storage.googleapis.com/workbox-cdn/releases/3.0.0-beta.0/workbox-sw.js"
);

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "bundle.js",
    "revision": "022b65934b70c8291d91cbd5322d4b0b"
  },
  {
    "url": "css/index.css",
    "revision": "0b0a02c278740a84138a572131589b5f"
  },
  {
    "url": "img/icons/android-chrome-192x192.png",
    "revision": "b9677eb0aa491192aee974efe7cd34d4"
  },
  {
    "url": "img/icons/android-chrome-512x512.png",
    "revision": "2abfe1b02f8e7166d3dc2002946898ae"
  },
  {
    "url": "img/icons/apple-touch-icon.png",
    "revision": "ce6906532376fa192abf8d7bc05f6652"
  },
  {
    "url": "img/icons/browserconfig.xml",
    "revision": "ca2904a88fa702337af470eb247ca719"
  },
  {
    "url": "img/icons/favicon-16x16.png",
    "revision": "010e551e53b5c62cf38b1b9872d9a660"
  },
  {
    "url": "img/icons/favicon-32x32.png",
    "revision": "5bcc42f4bfa41f1c1f56ec31db17e19f"
  },
  {
    "url": "img/icons/favicon.ico",
    "revision": "29f326726e12298b536e8e8d9604adb8"
  },
  {
    "url": "img/icons/html_code.html",
    "revision": "1d0f43b3b72e9287ae41c409a029000f"
  },
  {
    "url": "img/icons/mstile-144x144.png",
    "revision": "df052531fc33de46d0773d12b2db4671"
  },
  {
    "url": "img/icons/mstile-150x150.png",
    "revision": "250ccfd84dc368b65ca7f1500d366c37"
  },
  {
    "url": "img/icons/mstile-310x150.png",
    "revision": "34082a0883168a815533e2239f31d495"
  },
  {
    "url": "img/icons/mstile-310x310.png",
    "revision": "6b28060d36b98323574b790392d3c148"
  },
  {
    "url": "img/icons/mstile-70x70.png",
    "revision": "c78ffd1f166628386ea229f06a978202"
  },
  {
    "url": "img/icons/safari-pinned-tab.svg",
    "revision": "0e84fda4a91ff78bfbff03661e8b9bdd"
  },
  {
    "url": "index.html",
    "revision": "00424ff9658f2bc2248316e4ed97dc79"
  },
  {
    "url": "manifest.json",
    "revision": "eb1e6015170005fad06812575200c753"
  },
  {
    "url": "precache-manifest.17a7b47751a72c008d7f3c691bf4b556.js",
    "revision": "17a7b47751a72c008d7f3c691bf4b556"
  },
  {
    "url": "README.md",
    "revision": "b04ac67d7ecfd7b3405dcf05efdafc09"
  },
  {
    "url": "sw.js",
    "revision": "cf46ed8e4c2de9371a2205a7dbe31ced"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
