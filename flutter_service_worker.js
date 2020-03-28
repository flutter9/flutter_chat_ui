'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "b40bd8fb6f988a4a226965282d617789",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"/assets/assets/images/james.jpg": "402022abfd4b631c3093c0f2054e4a06",
"/assets/assets/images/sophia.jpg": "3b8e96b326f7ec46ff5df0012b023586",
"/assets/assets/images/olivia.jpg": "4cdcd080fdd00244b5db3e33a86ab1c2",
"/assets/assets/images/sam.jpg": "cf523967089ecc2735e2ed3b045fe938",
"/assets/assets/images/steven.jpg": "0f009026daa99305e0fb7335717a1594",
"/assets/assets/images/john.jpg": "51a3470387263a30e35e4414eef1f7d4",
"/assets/assets/images/greg.jpg": "b779eca12905edb571bcf6ddaad660b5",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/AssetManifest.json": "8293373079b5d351ff157aca2bd092a8",
"/assets/LICENSE": "964211db6a8b173b1744e68da77ce459",
"/main.dart.js": "7bd2912d50b0bfe4bca34bc0c914e4f1",
"/web/index.html": "e6e25ef07ab061f3396db68372e4cc59"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
