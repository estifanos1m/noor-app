self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', (e) => {
  // This handler must not be empty for WebAPK installation.
  // A simple cache‑first strategy is enough.
  e.respondWith(
    caches.match(e.request).then((cached) => {
      return cached || fetch(e.request);
    })
  );
});