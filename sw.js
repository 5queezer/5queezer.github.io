importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/283d8d248093d6a2900c.js",
    "revision": "28d71d440c09f94f188681cf31f74038"
  },
  {
    "url": "/_nuxt/47317f12da64279a67af.js",
    "revision": "a7bc32fbc3996c30eaaaf4a82cf60fdf"
  },
  {
    "url": "/_nuxt/510d5d57d8c14d7d9e12.js",
    "revision": "4d569a24eb465ecf2e1cdf926078c3c3"
  },
  {
    "url": "/_nuxt/6b89a279e8ec9729667e.js",
    "revision": "dcde9f0c35498b0d3cdd1ec52530d593"
  },
  {
    "url": "/_nuxt/dd02f9122839358a7984.js",
    "revision": "7cd67de1caefaa978d855d321762e3e6"
  }
], {
  "cacheId": "5queezer.github.io",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
