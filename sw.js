self.addEventListener('install', function(e) {
    self.skipWaiting();
});

self.addEventListener('activate', function(e) {
    self.clients.claim();
});

self.addEventListener('fetch', function(e) {
    // Minimal passthrough — tidak melakukan caching khusus
});