// workbox-cache.js (You can call it whatever you want.)

/**
 * Workbox register route
 * @Regex define route: every route with /foo/bar/ in it
 * @Strategy define Workbox strategy: ask network, then cache
 * @HttpVerb GET requests
 */
// workbox.routing.registerRoute(
//   /^(.*?)\/foo\/bar\/(.*?)/,
//   new workbox.strategies.NetworkFirst({
//     cacheName: 'apiCache',
//     plugins: [
//       new workbox.cacheableResponse.CacheableResponsePlugin({
//         statuses: [0, 200],
//       }),
//     ],
//   }),
//   'GET'
// )