const CACHE_NAME = 'portfolio-v2';
const ASSETS = [
  '/',
  '/index.html',
  '/assets/index-*.js',
  '/assets/react-*.js',
  '/assets/vendor-*.js',
  '/assets/fuzail-*.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return Promise.all(
          ASSETS.map(url => {
            return fetch(new Request(url, { cache: 'reload' }))
              .then(response => {
                if (response.ok) return cache.put(url, response);
              })
              .catch(err => console.log('Cache skip:', url))
          })
        );
      })
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  
  event.respondWith(
    caches.match(event.request)
      .then(cached => {
        return cached || fetch(event.request)
          .then(response => {
            // Cache new requests
            if (event.request.url.startsWith('http') && response.ok) {
              const clone = response.clone();
              caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
            }
            return response;
          });
      })
      .catch(() => {
        // Fallback for failed requests
        return caches.match('/index.html');
      })
  );
});