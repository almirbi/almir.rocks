importScripts('/cache-polyfill.js');
self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('almirbijedic').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/assets/bootstrap/css/bootstrap.min.css',
                '/assets/css/style.css',
                '/assets/css/font-awesome.min.css',
                '/assets/images/cover.jpg',
                '/assets/images/pattern.png',
                '/assets/images/arrow.svg',
                '/assets/images/github-mark.png',
                '/assets/images/rocket.png',
                '/assets/images/map.png',
                '/assets/images/robot.png',
                '/assets/images/ambulance.png',
                '/assets/images/etf.gif',
                '/assets/images/api.png',
                '/assets/images/aquila.png',
                '/assets/images/tug.gif',
                '/assets/images/logo-x.svg',
                '/assets/images/angularjs.svg',
                '/assets/images/apache.svg',
                '/assets/images/bootstrap.svg',
                '/assets/images/bower.svg',
                '/assets/images/c.svg',
                '/assets/images/cplusplus.svg',
                '/assets/images/csharp.svg',
                '/assets/images/css3.svg',
                '/assets/images/vagrant.svg',
                '/assets/images/debian.svg',
                '/assets/images/docker.svg',
                '/assets/images/dot-net.svg',
                '/assets/images/html5.svg',
                '/assets/images/jasmine.svg',
                '/assets/images/javascript.svg',
                '/assets/images/jquery.svg',
                '/assets/images/mongodb.svg',
                '/assets/images/mysql.svg',
                '/assets/images/nginx.svg',
                '/assets/images/php-flat.svg',
                '/assets/images/react.svg',
                '/assets/images/typescript.svg',
                '/assets/images/ubuntu.svg',
                '/assets/images/wordpress.svg',
                '/dist/bundle.js',
                '/assets/fonts/fontawesome-webfont.woff2?v=4.3.0',
                'https://fonts.googleapis.com/css?family=Raleway:300,800',
                'https://fonts.googleapis.com/css?family=Rock+Salt:400',
                'https://fonts.gstatic.com/s/raleway/v12/-_Ctzj9b56b8RgXW8FAriQzyDMXhdD8sAj6OAJTFsBI.woff2',
                'https://fonts.gstatic.com/s/raleway/v12/1ImRNPx4870-D9a1EBUdPAzyDMXhdD8sAj6OAJTFsBI.woff2',
                'https://fonts.gstatic.com/s/rocksalt/v8/Q94aHXFHGip10K5uxi1jOJBw1xU1rKptJj_0jans920.woff2',
                'https://fonts.gstatic.com/s/raleway/v12/ZKwULyCG95tk6mOqHQfRBAsYbbCjybiHxArTLjt7FRU.woff2',
                'https://fonts.gstatic.com/s/raleway/v12/QoPu455RxV2raYSIFXAMBQsYbbCjybiHxArTLjt7FRU.woff2'
            ]);
        })
    );
});


self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
