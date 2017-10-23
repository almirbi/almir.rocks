/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["./assets/bootstrap/css/bootstrap.min.css","6de54398a69d88f16e4bbfb57719165e"],["./assets/bootstrap/css/config.json","87aef36761263fe2d5c79c5644117722"],["./assets/bootstrap/js/bootstrap.min.js","b704d6167237cc107ebdc35b9b66dabe"],["./assets/css/_mixins.scss","fab8ec8d9c5f8c3463a578dbaca3a121"],["./assets/css/_responsiveness.scss","d41d8cd98f00b204e9800998ecf8427e"],["./assets/css/critical.css","8c0e3035feb5fb6afcd905ac515c8977"],["./assets/css/critical.scss","9b4461db0758ab91a431a08693cfa4de"],["./assets/css/font-awesome.min.css","45457d9025b47c866b4c7757f6c854e4"],["./assets/css/style.css","9ec9b5e37c87debd13282b02bbec0683"],["./assets/css/style.scss","985f69652e3d8660adb1798243fff37d"],["./assets/fonts/FontAwesome.otf","0b462f5cc07779cab3bef252c0271f2b"],["./assets/fonts/Simple-Line-Icons.dev.svg","c8b47e8b3fe87328731909587fc72b85"],["./assets/fonts/Simple-Line-Icons.eot","f19a7f6c7a0b54b748277c40d7cf8882"],["./assets/fonts/Simple-Line-Icons.svg","5db2ea1bcb7a6cc078755c90458c3b65"],["./assets/fonts/Simple-Line-Icons.ttf","596814caa4fbaecbf5014bcfe8e363fb"],["./assets/fonts/Simple-Line-Icons.woff","ff94ad94c3a9d04bd2f80cb3c87dcccb"],["./assets/fonts/fontawesome-webfont.eot","f7c2b4b747b1a225eb8dee034134a1b0"],["./assets/fonts/fontawesome-webfont.svg","2980083682e94d33a66eef2e7d612519"],["./assets/fonts/fontawesome-webfont.ttf","706450d7bba6374ca02fe167d86685cb"],["./assets/fonts/fontawesome-webfont.woff","d9ee23d59d0e0e727b51368b458a0bff"],["./assets/fonts/fontawesome-webfont.woff2","97493d3f11c0a3bd5cbd959f5d19b699"],["./assets/images/almir.jpg","ae7575c91c829ce1ddca573809a05ed2"],["./assets/images/ambulance.png","3f53af4a41f011f4f0898bf698594e5c"],["./assets/images/angularjs.svg","f720e2dfbc8b87525737c4047d1bd193"],["./assets/images/apache.svg","12c493545aad44a15818e8186537df88"],["./assets/images/api.png","c3012cf62680512c5ea98e6dc335c394"],["./assets/images/aquila.png","e1dd0b07f975ced2ce2011e73a5eeec5"],["./assets/images/arrow.svg","5b0fbad0eb783bad7ae736b859dc9903"],["./assets/images/b2bie.jpg","e80159c3938c57e8c7844d76071f931e"],["./assets/images/b2bie.png","e05efb35e7d22e27437ec0ca074c0703"],["./assets/images/bootstrap.svg","50ce7cf229826bd6fb2218f60c78c2c3"],["./assets/images/bower.svg","e163f1f29495a5c2410e024cebf211ce"],["./assets/images/c.svg","47bc73733cb3c5b64070ae29118d36d2"],["./assets/images/cinemacity.png","18097ada3f3533e0ae1bf5b5b5b1c94d"],["./assets/images/code.png","d013b8302774010475b00751a296553c"],["./assets/images/coffee.png","b4f4b38d4f0f7ea85d646f618e73c91f"],["./assets/images/cover-320.jpg","430a1913d1818f6edc2947ed16ace2cc"],["./assets/images/cover-768.jpg","76d1f25e74265c24b7fd5ad7e5edee69"],["./assets/images/cover-tmp.jpg","9c95a6fff23ab56c77ebc0b55dabee92"],["./assets/images/cover.jpg","36679abe81fb1a51e478257b2c0391a2"],["./assets/images/cplusplus.svg","b3b5369655cb2ab5ac893fefd3eda60b"],["./assets/images/csharp.svg","fcc6879c448805c49ec0fb73581bd460"],["./assets/images/css3.svg","73fe8e283d0744f92ce182638ca58e24"],["./assets/images/d3js.svg","194763121b5e3f5d1610294107239106"],["./assets/images/debian.svg","0bebe56a6817741a101d7eea4cd0fcf7"],["./assets/images/docker.svg","5773d79af85048ababa187b525608689"],["./assets/images/dot-net.svg","f9b8f1c23e0e42a3c434568e3c773e46"],["./assets/images/emm.png","b98c6f130b9d815921554722f9bff28d"],["./assets/images/equals.png","80e7cf2ad6f7d322e2ccab98f3da90a0"],["./assets/images/escrow.png","80bc12e9effecd8bc6f03666f3a6d2bc"],["./assets/images/etf.gif","ed7ccab36af52daf9d31df432a910ed1"],["./assets/images/explanimate.jpg","6923fa4ebd7e293fc397e9fd01411f3a"],["./assets/images/explanimate.png","8824ae5fe7e56c5acaaf5e11e15051aa"],["./assets/images/favicon.png","fd9635c13375c608cf6e64b738ccfbfe"],["./assets/images/github-mark.png","ef7a02b69836dc8b6a732a54c4200dcb"],["./assets/images/heart-empty.png","b4b8c7e6e059e74829588c2ec4c17529"],["./assets/images/heart-filled.png","a496d57ee43265ab1bfcb119104a49d5"],["./assets/images/html5.svg","4dc9729991d6a54f26c3f145fbd59a16"],["./assets/images/ipermedia.png","af0f1dc0a3690d043a39ba43191e51b0"],["./assets/images/jasmine.svg","e29bd4056a6587ce963a298029692db2"],["./assets/images/javascript.svg","a5aba76eafa33f12b6c77ab35e838b5a"],["./assets/images/jquery.svg","e95a922772cd4c96e2c1ae46dfe25d6a"],["./assets/images/logo-x.svg","3c246d8003f3e55361f50c823882ba86"],["./assets/images/map.png","fa78a4caa47ffede972af464c3feed1a"],["./assets/images/mongodb.svg","bc777875f85c5d85c665cbedf79052e3"],["./assets/images/myappend-wide.png","471f8feaea1a31d4a419e60553dc6527"],["./assets/images/myappend.png","116569e5ecfcdec34cc76ed20ca04642"],["./assets/images/myappendlogo1.png","890cbfaff2ecf05872aa792133909698"],["./assets/images/mysql.svg","ab1b29f4f9c534b20a48ef84d63da1dd"],["./assets/images/nginx.svg","af8a4a7ddd0bd42ca0037cb28b607c3c"],["./assets/images/nils.jpg","1855e3221db896714b4e83add66d1129"],["./assets/images/pattern-bak.png","c89978cfd4eaa97f882bd8f17f4a71ae"],["./assets/images/pattern.png","dd3cdd3be5275b1d2c0018c9dc2cdd5e"],["./assets/images/php-flat.svg","8310fdb0ae83dd54a8d49b95daf68158"],["./assets/images/plus.png","d76419de400bd5f951bb17f1149720ff"],["./assets/images/preloader.gif","8dda6a9a16b06a7d76129dfb421b5de6"],["./assets/images/pzs.png","bcb808e69bb21386732b2e88820fe05a"],["./assets/images/react.svg","9a28da9f2a3fa419eb399e49f98cda39"],["./assets/images/reactivex.svg","55d01d15d88bfecaa3d4502d07aec59b"],["./assets/images/robot.png","d91dd2d2d4b293426e8f6ebf08d20130"],["./assets/images/rocket.png","7bbe9edb9906048111cfcb320429cc09"],["./assets/images/scott.jpg","c1dcbeaee719c45ee5ddfde19ae16c6c"],["./assets/images/ssh.svg","8b7c04d04873427c212cea0fa93c0b8f"],["./assets/images/tug.gif","ba13cefe2f213a542f6986c280ed971f"],["./assets/images/typescript.svg","83ab2c27d7d0d84c2c35a7a63253cfea"],["./assets/images/ubuntu.svg","2b3c298d5f06b5298397b827fcd0ce54"],["./assets/images/vagrant.svg","89422b806d7b6519a8febaa449e48f6f"],["./assets/images/victory.jpg","43fd06a12415cd1e116ce60424b025bb"],["./assets/images/wir-wide.jpg","f974574c806b70f47ff398ac492d2697"],["./assets/images/wir.png","c0b28d981568e60dcc448cc9e757f12f"],["./assets/images/wordpress.svg","7ad5a747d13afdd6af0b77472075c070"],["./assets/images/world-industrial-reporter.jpg","f974574c806b70f47ff398ac492d2697"],["./cache-polyfill.js","8f5653629f76eccffa8d2eaa7e47f3a2"],["./dist/bundle.js","a697cc563866fbf5c121d93b3bae5f06"],["./manifest.json","5789172edff5af848ecaa572d3f9e19c"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







