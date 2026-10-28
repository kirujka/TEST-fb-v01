// Офлайн-кэш. При обновлении данных поменяй номер версии — телефон заберёт новые файлы.
var CACHE = 'forumsbeitrag-v0-1';
var FILES = ['./', './index.html', './fb_data.js', './manifest.webmanifest',
             './icon-192.png', './icon-512.png', './apple-touch-icon.png'];
self.addEventListener('install', function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){ return c.addAll(FILES); }).then(function(){ return self.skipWaiting(); }));
});
self.addEventListener('activate', function(e){
  e.waitUntil(caches.keys().then(function(ks){
    return Promise.all(ks.filter(function(k){ return k !== CACHE; }).map(function(k){ return caches.delete(k); }));
  }).then(function(){ return self.clients.claim(); }));
});
// Сначала сеть (свежие данные), без сети — кэш.
self.addEventListener('fetch', function(e){
  if (e.request.method !== 'GET') return;
  e.respondWith(fetch(e.request).then(function(r){
    var copy = r.clone(); caches.open(CACHE).then(function(c){ c.put(e.request, copy); }); return r;
  }).catch(function(){ return caches.match(e.request, { ignoreSearch: true }).then(function(r){ return r || caches.match('./index.html'); }); }));
});
