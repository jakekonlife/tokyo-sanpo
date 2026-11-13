// 离线缓存：页面本身优先走网络（这样更新能及时生效），没网时用缓存；照片和字体优先用缓存。
var SHELL = 'sanpo-shell-v2', PHOTOS = 'sanpo-photos', FONTS = 'sanpo-fonts';
var FILES = ['./', 'index.html', 'places.js', 'photos.js', 'reviews.js', 'manifest.webmanifest', 'icon-180.png', 'icon-512.png'];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(SHELL).then(function (c) { return c.addAll(FILES); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return [SHELL, PHOTOS, FONTS].indexOf(k) < 0; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

function timeout(ms) { return new Promise(function (_, rej) { setTimeout(function () { rej(new Error('timeout')); }, ms); }); }
function cacheFirst(name, req) {
  return caches.open(name).then(function (c) {
    return c.match(req, { ignoreVary: true }).then(function (hit) {
      return hit || fetch(req).then(function (res) { if (res.ok || res.type === 'opaque') c.put(req, res.clone()); return res; });
    });
  });
}
self.addEventListener('fetch', function (e) {
  var req = e.request; if (req.method !== 'GET') return;
  var u = new URL(req.url);
  if (u.origin === location.origin) {
    e.respondWith(Promise.race([fetch(req), timeout(4000)]).then(function (res) {
      if (res.ok) { var copy = res.clone(); caches.open(SHELL).then(function (c) { c.put(req, copy); }); }
      return res;
    }).catch(function () {
      return caches.match(req, { ignoreSearch: true }).then(function (hit) { return hit || caches.match('index.html'); });
    }));
  } else if (u.hostname === 'upload.wikimedia.org') {
    e.respondWith(cacheFirst(PHOTOS, req));
  } else if (u.hostname === 'fonts.googleapis.com' || u.hostname === 'fonts.gstatic.com') {
    e.respondWith(cacheFirst(FONTS, req));
  }
});
