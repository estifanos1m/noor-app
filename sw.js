// Basic Service Worker to enable PWA installation
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // Let the network handle the requests (Firebase/Cloudinary)
});