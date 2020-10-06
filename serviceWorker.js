const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
    '/',
    '/index.html',
    '/app.js',
    '/stylesheets/illustrations/logo.png',
    '/stylesheets/bootstrap-4/css/bootstrap.css',
    '/stylesheets/reset.css',
    '/stylesheets/main.css',
    'stylesheets/bootstrap-4/js/bootstrap.min.js',
    '/stylesheets/jquery/jquery.min.js',
    '/script.js',
    'https://fonts.googleapis.com/css2?family=Alegreya&family=B612&family=Lato&family=Muli:ital@1&display=swap',
    '/img/icons/icon-96x96.png',
    '/dictionary.json',
    'https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wXiWtFCc.woff2'
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticDevCoffee).then(cache => {
            cache.addAll(assets)
        })
    )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})
