const cacheName = 'ecommerce'
const cacheAssets = [
    '/',
    'index.html',
    'images\about.jpg',
    'images\leptop.jpg',
    'images\product1.png',

]
self.addEventListener('fetch', evt => {
    //console.log('fetch event:',evt)
    evt.respondWith(
        caches.match(evt.request).then(res => {
            return res || fetch(evt.request)
        })
    )
});