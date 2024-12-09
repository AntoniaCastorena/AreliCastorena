const CACHE_NAME = 'proyecto-pwa-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/script.js',
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
    '/icons/favicon-96x96',
    '/icons/web-app-manifest-192x192',
    '/icons/web-app-manifest-512x512',
    '/main.js'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Archivos en caché');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('activate', (event) => {
    const listaBlancaCache = [CACHE_NAME];

    event.waitUntil(
        caches.keys()
            .then((nombresCache) => {
                return Promise.all(
                    nombresCache.map((nombreCache) => {
                        if (listaBlancaCache.indexOf(nombreCache) === -1) {
                            return caches.delete(nombreCache);
                        }
                    })
                );
            })
            .then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
    );
});
