// fallback URLs
const FALLBACK_HTML_URL = '/offline.html';
const FALLBACK_IMAGE_URL = '/offline.svg';

// This "catch" handler is triggered when any of the other routes fail to
// generate a response.
// https://developers.google.com/web/tools/workbox/guides/advanced-recipes#provide_a_fallback_response_to_a_route
workbox.routing.setCatchHandler(({event, request, url}) => {
    // Use event, request, and url to figure out how to respond.
    // One approach would be to use request.destination, see
    // https://medium.com/dev-channel/service-worker-caching-strategies-based-on-request-types-57411dd7652c
    switch (request.destination) {
        case 'document':
            return caches.match(FALLBACK_HTML_URL);
            break;

        case 'image':
            return caches.match(FALLBACK_IMAGE_URL);
            break;

        default:
            // If we don't have a fallback, just return an error response.
            return Response.error();
    }
});

// Use a stale-while-revalidate strategy for all other requests.
workbox.routing.setDefaultHandler(
    workbox.strategies.staleWhileRevalidate()
);
