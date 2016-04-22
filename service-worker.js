/**
 * Copyright 2015 Google Inc. All rights reserved.
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

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';





/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["/css/article.css","864fadf60a4cb84eccf77f4ff1b25f96"],["/demo/public/css/base.css","601d5ab161ef68d4fd8eecf56369c457"],["/demo/public/vendor/bootstrap/css/bootstrap-theme.css","659231dde1c53bd14bbcffa1456df892"],["/demo/public/vendor/bootstrap/css/bootstrap-theme.min.css","bf3499da1c31113720e9e395691730ba"],["/demo/public/vendor/bootstrap/css/bootstrap.css","957474c344c7131fb8e093449cc4893a"],["/demo/public/vendor/bootstrap/css/bootstrap.min.css","5d5357cb3704e1f43a1f5bfed2aebf42"],["/demo/public/vendor/bootstrap/js/bootstrap.js","8015042d0b4ac125867af5b096b175ce"],["/demo/public/vendor/bootstrap/js/bootstrap.min.js","4becdc9104623e891fbb9d38bba01be4"],["/demo/public/vendor/bootstrap/js/npm.js","ccb7f3909e30b1eb8f65a24393c6e12b"],["/h&m/bower_components/highcharts/copy-release.js","160ac7cb3997c02eb4a197936d3559b7"],["/h&m/bower_components/highcharts/generate-changelog.js","b3cc89b93b53421825ad5c8a295eeb04"],["/h&m/bower_components/highcharts/grunt-tasks/offline-api.js","bde3c0070220d4506d3d4021a1566e6e"],["/h&m/bower_components/highcharts/gruntfile.js","920008580024ed766ae2f37029e7c6c8"],["/h&m/bower_components/highcharts/gulpfile.js","19246f82cec972b6a52bca95cd933c0a"],["/h&m/bower_components/highcharts/lib/adapters/standalone-framework.js","01565b80e21d3eadbf4e8e29dccd515e"],["/h&m/bower_components/highcharts/lib/adapters/standalone-framework.src.js","a5b38405e3dded0c4f94e8a7ebe14f89"],["/h&m/bower_components/highcharts/lib/highcharts-3d.js","019abc118bac2f9100c2e3cdba84ee8d"],["/h&m/bower_components/highcharts/lib/highcharts-3d.src.js","9141ca79c7488b682c3cefd4bbfbd6e7"],["/h&m/bower_components/highcharts/lib/highcharts-more.js","168278e34961937ea556eda362958076"],["/h&m/bower_components/highcharts/lib/highcharts-more.src.js","7fae134fcba8714289720663420332b8"],["/h&m/bower_components/highcharts/lib/highcharts.js","d7c3fbca69de8db03d011f471aeaac19"],["/h&m/bower_components/highcharts/lib/highcharts.src.js","ba0df0dcf757b702387bb859d9a951bc"],["/h&m/bower_components/highcharts/lib/highmaps.js","c5d4efe1c7ce6f60870ad7348798a594"],["/h&m/bower_components/highcharts/lib/highmaps.src.js","398873dc5143c5d20ad0f2f7da2cdd7e"],["/h&m/bower_components/highcharts/lib/highstock.js","2615ce6aaae2a345ebd06b31a234d671"],["/h&m/bower_components/highcharts/lib/highstock.src.js","762803ad4c1af0a2ffbee2028f234558"],["/h&m/bower_components/highcharts/lib/modules/boost.js","2cadf16b803ee5cfe8a546710245ef3e"],["/h&m/bower_components/highcharts/lib/modules/boost.src.js","db1ef9c7f54497fd31f7ab450dfa2a8a"],["/h&m/bower_components/highcharts/lib/modules/broken-axis.js","e0a96f489242848e43aeea4d4b2dcbc9"],["/h&m/bower_components/highcharts/lib/modules/broken-axis.src.js","49a5f149abfcd26cf8180482345877ab"],["/h&m/bower_components/highcharts/lib/modules/canvas-tools.js","0b98451fd2844531e44851b4d8dcb063"],["/h&m/bower_components/highcharts/lib/modules/canvas-tools.src.js","b3d4668847cf14d04587c7b72f85d14a"],["/h&m/bower_components/highcharts/lib/modules/data.js","486838d03da8938e9d4c9af819ab866a"],["/h&m/bower_components/highcharts/lib/modules/data.src.js","0185606ef846211cc26f5956ce1c1955"],["/h&m/bower_components/highcharts/lib/modules/drilldown.js","89c64cc0555b198aa2b6a67b27b3a8de"],["/h&m/bower_components/highcharts/lib/modules/drilldown.src.js","bb65fc35fb02dc1f3546f0f1299ed41e"],["/h&m/bower_components/highcharts/lib/modules/exporting.js","7dee95f5e3824e6a5222c50ce3208f16"],["/h&m/bower_components/highcharts/lib/modules/exporting.src.js","9bc7d74124d73bd317fdf225d64fb7a2"],["/h&m/bower_components/highcharts/lib/modules/funnel.js","fa9b3331ea39ca571f3a66b03b111f3f"],["/h&m/bower_components/highcharts/lib/modules/funnel.src.js","158e3a3f5e1535cd8f50f06fcbb3f387"],["/h&m/bower_components/highcharts/lib/modules/heatmap.js","c2ae4bb008be3b6cdd6999bd70479d83"],["/h&m/bower_components/highcharts/lib/modules/heatmap.src.js","d1b7e5a4564388736210a687851183f9"],["/h&m/bower_components/highcharts/lib/modules/map.js","8c4200653c9222a52cf64224ba0010de"],["/h&m/bower_components/highcharts/lib/modules/map.src.js","54e2e381f437970ccf1006de8c7a7716"],["/h&m/bower_components/highcharts/lib/modules/no-data-to-display.js","6d6992d2fd71024bf294eeb1919e1076"],["/h&m/bower_components/highcharts/lib/modules/no-data-to-display.src.js","7120fead2ea1734239e747f2b541bdf8"],["/h&m/bower_components/highcharts/lib/modules/offline-exporting.js","5f2cb9e7a7a3555460a0eb102f0d3c07"],["/h&m/bower_components/highcharts/lib/modules/offline-exporting.src.js","ca75cdfe3d651f366963d3c5ff51b40f"],["/h&m/bower_components/highcharts/lib/modules/solid-gauge.js","5ac87f7e6dff85c6a869f010f8e2c721"],["/h&m/bower_components/highcharts/lib/modules/solid-gauge.src.js","048f4a925c633ad62904390ccf052863"],["/h&m/bower_components/highcharts/lib/modules/treemap.js","46350a62ebf42c6ba3b94b54976365ff"],["/h&m/bower_components/highcharts/lib/modules/treemap.src.js","ce8c6b0ebc2b0bbbe7e39238be8082a8"],["/h&m/bower_components/highcharts/lib/themes/dark-blue.js","4891e7bed9507590bc2b75a9774e9218"],["/h&m/bower_components/highcharts/lib/themes/dark-green.js","9735919779fb07b7f35d72dc0afc92a1"],["/h&m/bower_components/highcharts/lib/themes/dark-unica.js","06f80054b2fdc047d29b641cdda8293e"],["/h&m/bower_components/highcharts/lib/themes/gray.js","9a88d35b0108052403c3cc2823865c16"],["/h&m/bower_components/highcharts/lib/themes/grid-light.js","2ef095e12dbbdcbf941bafa271bc76c4"],["/h&m/bower_components/highcharts/lib/themes/grid.js","4708a2f98fca059efcc8629fb4d66d39"],["/h&m/bower_components/highcharts/lib/themes/sand-signika.js","ab78a9654000eaa9797beafc35233c89"],["/h&m/bower_components/highcharts/lib/themes/skies.js","9c703dc0e5ae384f5b173578f566da56"],["/h&m/bower_components/jquery/dist/jquery.js","107fbe9555bfc88ec5cab524c790fe34"],["/h&m/bower_components/jquery/dist/jquery.min.js","4a356126b9573eb7bd1e9a7494737410"],["/h&m/bower_components/jquery/src/ajax.js","886bbe79b01d39c39a756bb937d6b413"],["/h&m/bower_components/jquery/src/ajax/jsonp.js","c09be897ccc55b18fd553df2e63b0ace"],["/h&m/bower_components/jquery/src/ajax/load.js","89fa7866e12860d8944c66c318a97b66"],["/h&m/bower_components/jquery/src/ajax/parseJSON.js","6364c59ad5952a471b48fc05c22f3291"],["/h&m/bower_components/jquery/src/ajax/parseXML.js","a619ab384235466d5e495f3cd2f70e81"],["/h&m/bower_components/jquery/src/ajax/script.js","3f02a41034944f9b70f35aed6e290046"],["/h&m/bower_components/jquery/src/ajax/var/nonce.js","c0fee61b182d6c03a455585f74b5e1bd"],["/h&m/bower_components/jquery/src/ajax/var/rquery.js","86cc4813fe7ee092d0f25de3403c1811"],["/h&m/bower_components/jquery/src/ajax/xhr.js","a495ef52c6e6594b5927ef7218d6fe39"],["/h&m/bower_components/jquery/src/attributes.js","678b4710df14635b3c37f3d7addc6ec5"],["/h&m/bower_components/jquery/src/attributes/attr.js","5ccd4aab35435d50bae6f5f2eb0ae9ce"],["/h&m/bower_components/jquery/src/attributes/classes.js","e4d2a049774c52ef07d2190b7903e642"],["/h&m/bower_components/jquery/src/attributes/prop.js","0e0e5a24a03cf01b590b4cc5307fdc1a"],["/h&m/bower_components/jquery/src/attributes/support.js","b010f4b38f4b1c6ae4d6c48f114adc84"],["/h&m/bower_components/jquery/src/attributes/val.js","7f45011ee89659832e5ba8654240a366"],["/h&m/bower_components/jquery/src/callbacks.js","14cf65ddcb872f38d4182f636e37278f"],["/h&m/bower_components/jquery/src/core.js","ef0a4e54bd06e75eccee1538fde02a33"],["/h&m/bower_components/jquery/src/core/access.js","190cc8756079a858970e39efbef853c7"],["/h&m/bower_components/jquery/src/core/init.js","ac289666e93cab855215fa5c3c318f17"],["/h&m/bower_components/jquery/src/core/parseHTML.js","431b6e91175f25ab58dedad61f1bf849"],["/h&m/bower_components/jquery/src/core/ready.js","27390e21336c68f92b1c04f6f1033a0c"],["/h&m/bower_components/jquery/src/core/var/rsingleTag.js","0f07e690c168f77a90f4e0886c76e74b"],["/h&m/bower_components/jquery/src/css.js","6e0f0b8586766c1adf33afb686fd5d23"],["/h&m/bower_components/jquery/src/css/addGetHookIf.js","85359591d8295e77279938eb8b753807"],["/h&m/bower_components/jquery/src/css/curCSS.js","f3dc1e95efe73986743f74a70ab168e1"],["/h&m/bower_components/jquery/src/css/defaultDisplay.js","b246be5615915163eb7be36ac4ac2c64"],["/h&m/bower_components/jquery/src/css/hiddenVisibleSelectors.js","e5245dadac2519c8befb66304fe484e5"],["/h&m/bower_components/jquery/src/css/support.js","e4a18e8b5e8002754fbb5a85cd860368"],["/h&m/bower_components/jquery/src/css/swap.js","aef668d22cdb39ba3e691caa32294123"],["/h&m/bower_components/jquery/src/css/var/cssExpand.js","2d8ac6725d0ff4faaa415eb25708a9ed"],["/h&m/bower_components/jquery/src/css/var/getStyles.js","1bd83fe650632c35f4030f7ff2c45852"],["/h&m/bower_components/jquery/src/css/var/isHidden.js","13a6f243bea6c82a6311ff011d3693fa"],["/h&m/bower_components/jquery/src/css/var/rmargin.js","028581c37c9dda64dc81ce7295ea5f34"],["/h&m/bower_components/jquery/src/css/var/rnumnonpx.js","2a34d3f4def5ae34a4cfc90766f92085"],["/h&m/bower_components/jquery/src/data.js","a7d139ed9fada76002cd7f4a096752a1"],["/h&m/bower_components/jquery/src/data/Data.js","1899f3691a82b2444050fb6650b701d9"],["/h&m/bower_components/jquery/src/data/accepts.js","40730b3607724457c760223d3d77285b"],["/h&m/bower_components/jquery/src/data/var/data_priv.js","494fafb4dac6fb30702a21fa4850cbe4"],["/h&m/bower_components/jquery/src/data/var/data_user.js","494fafb4dac6fb30702a21fa4850cbe4"],["/h&m/bower_components/jquery/src/deferred.js","8ffe49879251dbbcb78ece44a5299b05"],["/h&m/bower_components/jquery/src/deprecated.js","55ef50aae575deea2e12776b6e95ea19"],["/h&m/bower_components/jquery/src/dimensions.js","3606c43a53191b9c42809a1cfc98a542"],["/h&m/bower_components/jquery/src/effects.js","ae8eec8d4031c5791e8dd448a7a95361"],["/h&m/bower_components/jquery/src/effects/Tween.js","40596bc9250cc3d044a7363711358632"],["/h&m/bower_components/jquery/src/effects/animatedSelector.js","293275acc2e12d1a64ed0f9214f85388"],["/h&m/bower_components/jquery/src/event.js","56aa71f0139a0c6698a1c8473cc24e1c"],["/h&m/bower_components/jquery/src/event/ajax.js","7badf4347e13e1149fb2f19595919cd2"],["/h&m/bower_components/jquery/src/event/alias.js","ba4e3a937d720dccbc0eb99a9e8f72ef"],["/h&m/bower_components/jquery/src/event/support.js","3111a896e8efd4e362809f6bf3990b90"],["/h&m/bower_components/jquery/src/exports/amd.js","0e2411cca15d802f6a8da3aed34d9369"],["/h&m/bower_components/jquery/src/exports/global.js","6c1961ae51a4f0e5187f1960a52bd600"],["/h&m/bower_components/jquery/src/intro.js","94ff9550f601873a95b1a3909f768904"],["/h&m/bower_components/jquery/src/jquery.js","78a52bd5eaab9e1fbd0c23c7c8d8ef0f"],["/h&m/bower_components/jquery/src/manipulation.js","267172fef0f99a43c528ad1314ee7022"],["/h&m/bower_components/jquery/src/manipulation/_evalUrl.js","d3bbdfa4e6d906378d987a733b87e420"],["/h&m/bower_components/jquery/src/manipulation/support.js","fa4b7fa593440d3e27d73b35037a17a2"],["/h&m/bower_components/jquery/src/manipulation/var/rcheckableType.js","19f6af061c62c4a89d82c0972a992c61"],["/h&m/bower_components/jquery/src/offset.js","d4b3f9d1c4936dbf4dac46a7462a4e6c"],["/h&m/bower_components/jquery/src/outro.js","0b9c0e7d4b72a5f95b3ce20f4508a84d"],["/h&m/bower_components/jquery/src/queue.js","d1da21ede59f41e4d80b5a4bb3917467"],["/h&m/bower_components/jquery/src/queue/delay.js","6e52fac4cd26e9e74694d8c3f9e85294"],["/h&m/bower_components/jquery/src/selector-native.js","c9ae617e817fdfb1445b34ce8124b828"],["/h&m/bower_components/jquery/src/selector-sizzle.js","08ef80e78fb184932eae6a1d541d2de4"],["/h&m/bower_components/jquery/src/selector.js","cdff25b189c9501fbe0b0c540d19074c"],["/h&m/bower_components/jquery/src/serialize.js","72fb5b2f11093de98445c7410aa2a654"],["/h&m/bower_components/jquery/src/sizzle/dist/sizzle.js","3bfa79804d25c88f7eaf0a14a1b26238"],["/h&m/bower_components/jquery/src/sizzle/dist/sizzle.min.js","9ffb8c10bbcfd23ecb866c5ca706b402"],["/h&m/bower_components/jquery/src/traversing.js","91cb86870f43571158b6dc3883b6f000"],["/h&m/bower_components/jquery/src/traversing/findFilter.js","424d852ce55e5bf9197286e8f2aa658c"],["/h&m/bower_components/jquery/src/traversing/var/rneedsContext.js","b5676c00977e2e54de53af1228e39020"],["/h&m/bower_components/jquery/src/var/arr.js","73fe8cc31324cb3022fce1b1be3c9e92"],["/h&m/bower_components/jquery/src/var/class2type.js","8beeb098fb5eca5a728bd7bf2de1ceed"],["/h&m/bower_components/jquery/src/var/concat.js","dbdb2c9d038b890919c4cb75dc8d70f0"],["/h&m/bower_components/jquery/src/var/hasOwn.js","068dbad1531e9fac5d842e57914a122a"],["/h&m/bower_components/jquery/src/var/indexOf.js","fdf0c4d8a782120996863898c7973a57"],["/h&m/bower_components/jquery/src/var/pnum.js","04912d16c7442b5c4c7c946235174395"],["/h&m/bower_components/jquery/src/var/push.js","da4387ab5b45170eb86f6f9404d50036"],["/h&m/bower_components/jquery/src/var/rnotwhite.js","b1e91d1278805eff8bf9e85c34a41c26"],["/h&m/bower_components/jquery/src/var/slice.js","06b38aed4a71a634093cf161995ce39c"],["/h&m/bower_components/jquery/src/var/strundefined.js","9e452cb4a55337a4fe5c8351f1d4c54b"],["/h&m/bower_components/jquery/src/var/support.js","135b80391f6ec64fa10d1d702a8bee17"],["/h&m/bower_components/jquery/src/var/toString.js","6fc5af5803e4128c9225f8606d9f3c35"],["/h&m/bower_components/jquery/src/wrap.js","3919d6908333113c0f83f89ec9d04e46"],["/public/css/pygment_trac.css","a0f03ea7a7fd2ff5485ca86459a329c7"],["/public/css/stylesheet.css","53b798e7a3a252035490fed484bdac69"],["/public/js/base.js","b5d9feab3afcb6a99372b6a5a955abd7"],["/public/js/jets.js","085f69f48dfb26142f49812d41f994af"],["/public/js/sw.js","a31efb1bcb546706d589038053c0b0c9"],["/sw.js","9eba3ea20bcd645a4565dc62b3e5ecd5"],["/testcase/htmlhint.js","c6b41beae699c46a117f1e68bc9ebc58"],["/testcase/zoom.js","bc9ecd3bd50e566a50e50d73ed147cdf"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1--' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, now) {
    now = now || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
      'sw-precache=' + now;

    return urlWithCacheBusting.toString();
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

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

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


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  var now = Date.now();

  event.waitUntil(
    caches.keys().then(function(allCacheNames) {
      return Promise.all(
        Object.keys(CurrentCacheNamesToAbsoluteUrl).filter(function(cacheName) {
          return allCacheNames.indexOf(cacheName) === -1;
        }).map(function(cacheName) {
          var urlWithCacheBusting = getCacheBustedUrl(CurrentCacheNamesToAbsoluteUrl[cacheName],
            now);

          return caches.open(cacheName).then(function(cache) {
            var request = new Request(urlWithCacheBusting, {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName], response);
              }

              console.error('Request for %s returned a response with status %d, so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          });
        })
      ).then(function() {
        return Promise.all(
          allCacheNames.filter(function(cacheName) {
            return cacheName.indexOf(CacheNamePrefix) === 0 &&
                   !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html') &&
        /* eslint-disable quotes, comma-spacing */
        isPathWhitelisted([], event.request.url)) {
        /* eslint-enable quotes, comma-spacing */
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});




