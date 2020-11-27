import { registerRoute, setDefaultHandler, setCatchHandler } from 'workbox-routing';
import { NetworkOnly, CacheFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';
import { precacheAndRoute } from 'workbox-precaching';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';

declare global {
    interface Window {
        __WB_MANIFEST: any[];
    }
}

// Fallback "catch-all" URLs
const FALLBACK_HTML_URL = '/offline.html';
const FALLBACK_IMAGE_URL = '/offline.svg';

// eslint-disable-next-line no-restricted-globals,no-underscore-dangle
precacheAndRoute(self.__WB_MANIFEST || []);

// Images
registerRoute(
    /\.(?:png|jpg|jpeg|svg|webp)$/,
    new CacheFirst({
        cacheName: 'images',
        plugins: [
            new ExpirationPlugin({
                maxEntries: 60,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
            }),
        ],
    }),
);

// JS and CSS
registerRoute(
    /\.(?:js|css)$/,
    new StaleWhileRevalidate({
        cacheName: 'static-resources',
    }),
);

// Webfonts
registerRoute(
    /\.(ttf|eot|woff2?)$/,
    new CacheFirst({
        cacheName: 'static-webfonts',
        plugins: [
            new CacheableResponsePlugin({
                statuses: [0, 200],
            }),
            new ExpirationPlugin({
                maxEntries: 30,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 Year
            }),
        ],
    }),
);

// Use an explicit cache-first strategy and a dedicated cache for images.
registerRoute(
    ({request}) => request.destination === 'image',
    new CacheFirst({
        cacheName: 'static-images',
        plugins: [
            new CacheableResponsePlugin({
                statuses: [0, 200],
            }),
            new ExpirationPlugin({
                maxEntries: 30,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
            }),
        ],
    })
);

// See "Comprehensive Fallbacks" here:
// https://developers.google.com/web/tools/workbox/guides/advanced-recipes#provide_a_fallback_response_to_a_route

// Use a stale-while-revalidate strategy for all other requests.
setDefaultHandler(new StaleWhileRevalidate({}));

// This "catch" handler is triggered when any of the other routes fail to
// generate a response.
setCatchHandler(({event}) => {
    // The FALLBACK_URL entries must be added to the cache ahead of time, either
    // via runtime or precaching. If they are precached, then call
    // `matchPrecache(FALLBACK_URL)` (from the `workbox-precaching` package)
    // to get the response from the correct cache.
    //
    // Use event, request, and url to figure out how to respond.
    // One approach would be to use request.destination, see
    // https://medium.com/dev-channel/service-worker-caching-strategies-based-on-request-types-57411dd7652c
    switch (event.request.destination) {
        case 'document':
            // If using precached URLs:
            // return matchPrecache(FALLBACK_HTML_URL);
            return caches.match(FALLBACK_HTML_URL);
            break;

        case 'image':
            // If using precached URLs:
            // return matchPrecache(FALLBACK_IMAGE_URL);
            return caches.match(FALLBACK_IMAGE_URL);
            break;

        default:
            // If we don't have a fallback, just return an error response.
            return Response.error();
    }
});
