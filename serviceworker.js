const CACHE_NAME = 'proyecto-pwa-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/main.js',
  '/img/suga_panzon.jpg',
  '/img/iconosp.png',
  '/img/perfil.jpg',
  '/img/codif-removebg-preview.png',
  '/img/clonaciongoogle1.jpg',
  '/img/proyecto2.png',
  '/img/proyecto3.png',
  '/img/proyecto4.png',
  '/img/proyecto5.png',
  '/img/proyecto6.png',
  '/icons/apple-touch-icon.png',
  '/icons/favicon-96x96.png',
  '/icons/web-app-manifest-192x192.png',
  '/icons/web-app-manifest-512x512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

