const staticWebApp = "mist-showcase-site";

// store the assets
const assets = [
  "/",
  "/index.html",
  "/main.css",
  "/js/app.js",
  "/images/wp4155374-mist-wallpapers.jpg",
  "/images/wp4155375-mist-wallpapers.jpg",
  "/images/wp4155376-mist-wallpapers.jpg",
];

// cache the assets
self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticWebApp).then((cache) => {
      cache.addAll(assets);
    })
  );
});

// fetch the assets
self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
