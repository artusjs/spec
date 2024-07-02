import { StaleWhileRevalidate } from 'workbox-strategies';
import { cleanupOutdatedCaches, precacheAndRoute } from 'workbox-precaching';
import { registerRoute, Route } from 'workbox-routing';

declare let self: ServiceWorkerGlobalScope;

const SW_VERSION = '__SERVICE_WORKER__VERSION__';

self.addEventListener('install', (_event) => {
  self.skipWaiting();
});

self.addEventListener('message', (event) => {
  console.log('SW Received Message: ', event);
  if (event?.data?.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (url.origin === location.origin && url.pathname === '/') {
    event.respondWith(new StaleWhileRevalidate().handle({ event, request }));
  }
});

// self.__WB_MANIFEST is default injection point
precacheAndRoute([
  // {
  //   url: '/',
  //   revision: SW_VERSION,
  // },
  {
    url: '/logo/nodejs-logo.svg',
    revision: SW_VERSION,
  },
]);

// clean old assets
cleanupOutdatedCaches();

// registerRoute(new NavigationRoute(createHandlerBoundToURL('/')));

// handle assets

const fontRoute = new Route(
  ({ request }) => {
    return request.destination === 'font';
  },
  new StaleWhileRevalidate({
    cacheName: 'font',
  })
);

const imageRoute = new Route(
  ({ request }) => {
    return request.destination === 'image';
  },
  new StaleWhileRevalidate({
    cacheName: 'images',
  })
);

const stylesRoute = new Route(
  ({ request }) => {
    return request.destination === 'style';
  },
  new StaleWhileRevalidate({
    cacheName: 'styles',
  })
);

const scriptsRoute = new Route(
  ({ request }) => {
    if (
      request.url.includes('service-worker') ||
      request.url.includes('workbox') ||
      request.url.includes('hot-update')
    ) {
      return false;
    }
    return request.destination === 'script';
  },
  new StaleWhileRevalidate({
    cacheName: 'scripts',
    matchOptions: {
      ignoreVary: true,
    },
  })
);

registerRoute(fontRoute);
registerRoute(imageRoute);
registerRoute(stylesRoute);
registerRoute(scriptsRoute);
