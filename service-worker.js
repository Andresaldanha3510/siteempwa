const CACHE_NAME = 'clinicasys-v2'; // Mudei para v2 para forçar atualização
const urlsToCache = [
  '/',
  '/manifest.json' // <--- Removido o 'static/' daqui também
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});