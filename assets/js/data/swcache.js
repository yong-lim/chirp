const resource = [ /* --- CSS --- */ '/chirp/assets/css/style.css', /* --- PWA --- */ '/chirp/app.js', '/chirp/sw.js', /* --- HTML --- */ '/chirp/index.html', '/chirp/404.html', '/chirp/categories/', '/chirp/tags/', '/chirp/archives/', '/chirp/about/', /* --- Favicons & compressed JS --- */ '/chirp/assets/img/favicons/android-chrome-192x192.png', '/chirp/assets/img/favicons/android-chrome-512x512.png', '/chirp/assets/img/favicons/apple-touch-icon.png', '/chirp/assets/img/favicons/favicon-16x16.png', '/chirp/assets/img/favicons/favicon-32x32.png', '/chirp/assets/img/favicons/favicon.ico', '/chirp/assets/img/favicons/mstile-150x150.png', '/chirp/assets/js/dist/categories.min.js', '/chirp/assets/js/dist/commons.min.js', '/chirp/assets/js/dist/home.min.js', '/chirp/assets/js/dist/misc.min.js', '/chirp/assets/js/dist/page.min.js', '/chirp/assets/js/dist/post.min.js', '/chirp/assets/js/dist/pvreport.min.js' ]; /* The request url with below domain will be cached */ const allowedDomains = [ 'yong-lim.github.io', 'fonts.gstatic.com', 'fonts.googleapis.com', 'cdn.jsdelivr.net', 'polyfill.io' ]; /* Requests that include the following path will be banned */ const denyUrls = [ ];
