const CACHE_NAME = 'skillforge-v2';
const ASSETS = [
  './',
  './index.html',
  './admin.html',
  './styles.css',
  './app.js',
  './admin.js',
  './manifest.json',
  'https://cdn.tailwindcss.com',
  'https://unpkg.com/lucide@latest',
  'https://unpkg.com/lightweight-charts/dist/lightweight-charts.standalone.production.js',
  'https://www.gstatic.com/firebasejs/11.1.0/firebase-app-compat.js',
  'https://www.gstatic.com/firebasejs/11.1.0/firebase-auth-compat.js',
  'https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore-compat.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
