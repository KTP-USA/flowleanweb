'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "cfa63ca2a7f849493564d598d068ac7a",
".git/config": "bfc3a3856eb48ba9b976aa5403aac073",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "524142590e998c566b590a21f7835042",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "48d8a750dd8abc5cd661fd24a43b3d33",
".git/logs/refs/heads/main": "0d70e5e6e4232c5a348cb03dbf2c32b2",
".git/logs/refs/remotes/origin/main": "ec64dd32b34b27a4e17410086b2b0f07",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/0d/0d465f16c1d035aa02642d19d783bff48283e7": "9600f7e482a28dfe3c646ef0ff7d16c4",
".git/objects/0d/52baa2366fdcc9f664704e563592b4fe978c08": "67740f4dceddef251b92476895d9485d",
".git/objects/13/1d41a6e2bd8e929f553d9993726eb96a80e56c": "0c1fdaa8ff817451213f8bad1b1dba6f",
".git/objects/15/7ef34bf1320dd014718a67cac2e91e4a1976e5": "5bc4cdcae61d8b4a5d6d42dcc64ab226",
".git/objects/16/293f14056e593cc317ec25c1945cfb02d68e7d": "a14ff26551ad0a9328815f064cc6a498",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/20/660d016c6949991b113e5f81d9695fb4af86e6": "075beba1aa7085973f981a0f2c48445d",
".git/objects/25/7fb1d8147df7c1496c7cf56470329ea9eb2ee6": "826a09ff928fe6949a3234dd2df41c65",
".git/objects/28/a71dba4bf8514b904f2c1a5ba92245a9ea2b51": "062f6a9f5edaf866bd68cc37898b2dec",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/43/fe86594b8e059731db0bc48b57685d0a5a3b5c": "be17ee6f2c9a1e106322c5218260fe74",
".git/objects/44/dfe44a2f2e79e97909dacdff3ad133a6dc77da": "1f2d04c596cd690ee981fe5ad64ca95c",
".git/objects/4c/55081674f3f32918ee83e888c9118e8413e24d": "35b5b206510a4b06b523f79a99d8fc32",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/c061645265391042480c776c5626985795d11a": "5ba1363164240b5dec8361495df061ac",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/53/2b7b2f1f63e038cc6891ff62d9ab4dba405a18": "662ba7ad602d269481e6654378607215",
".git/objects/53/fa8607e7b8d4575b8b9042a43c43155e5d11b9": "dd86131d48a60c80d10ef74427a593ce",
".git/objects/63/f20c234fbf9126af7ad6c34b053cfca83a7389": "c1f95a58d50db0acf4d61fc62d261176",
".git/objects/67/fb3f362ac782880d07b80dbf3e4085986b0da2": "b3d4825f3ca97473c75b4468dcba63b8",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/70/bf2d3463a0a19e72525218043f73f93594eebb": "120aee6bee5c9d48f96b8899f4eb1316",
".git/objects/75/70f7114b2c9833322483cb3113b774e4e8cf54": "9fcfd32af163e348f38c20f65c73fe69",
".git/objects/78/aea800daa2195999b0986f206ff7a1cb7256df": "13f92d452560015f1a245cb6e8f143b5",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/81/3b3df0f79cd7e7b503da5696733a849bb4be9e": "f0c25145ce72755f9cc22156017a64ed",
".git/objects/86/aa91f7970fb40f2432797317adc44035c6fd5b": "d051b72256ce5c964da367277b84ad55",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/1ea4f175ee42e43b091dca094e5f0145c300bb": "43896e99eb16b7dd86150f6de47df8c7",
".git/objects/98/0872ce0d05a2eb0437d7ea0a60b9f2e623dd30": "d1f8862cbb3a8297b25df45d4b794c22",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9d/7e90af71985da78f05698662defa004d9642e4": "017cddea8af618cafbc8a32d50df33c3",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/a4/412e8df3ed1ba0cec9c1f24cb4d1e90b03e83e": "134c8ac3f3e8eb08710ab08446660ec3",
".git/objects/b0/209783117bdc3112d8b3b38227dfa41c45ae90": "a1f22f81d9842c2088aa948e41283c5c",
".git/objects/b0/93a22f54f317f384d9a12b1f7213f685286bfc": "c9ccf84ec5591c9e7f254dbc1e6148bf",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c7/ae09e48e0bececf9554f2f83c19b8ce0896c04": "1bdbf6b0d697ba9e3caa90c891f6ae82",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/cb/306e49f5b5ae7d3dacd684827960fed539ab81": "120dadd0a3fa232356e79fc209b43f1e",
".git/objects/d2/fa848c45e20e68e994cc2612041a2ace9ed96e": "2e42452b3b6fd4c85b53b810819b8dc5",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d8/023145a848cb3261f80aa339f71d35d6d61caa": "e4892d0063987991ba428688555bd0fa",
".git/objects/df/7379cd435b803c60e024b09329215a1223d457": "f453df7a5b6e2288f5a07c68d739cdfc",
".git/objects/e3/1b51e3e9388ae61767c692885e5d77ff7b5346": "6ed4eb6a450521a70e40d120888b347a",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/9f38785b4efbe3228dbdf6a8d8e419bc67d69f": "9889127b8f0d9ddcd7e40e961b5f51f6",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/ee/a7ece4e2e8175319c1d86c06df73bb77f5b70f": "6d12e8a10917ba712e517b11a832915a",
".git/objects/ef/e6da41c94bf299450ae02afef1638b6eb62048": "f1ded484705120e209944e4e275d325e",
".git/objects/f0/5ec42d3fa0eede56bec9dcba21340d34153157": "87fb31e36d49b2e4dc8f938442bd38ff",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/b0e4def370ba9ffb42bd75058591fc59a24b1a": "6b20b052bb993c303ad984eb498532ba",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/8ca3f7c5881d3b276e1292bb073d51f282c061": "03deeb344f19a6e798157a39bbdfc3ac",
".git/objects/fb/88927c5c41aea7244e11de7d3985c67d378947": "6165b5f1b01e8ef81fbdea84c67cc4f0",
".git/objects/fd/18fea1c60bc5aaa6d164e9e15d2c086104d9f3": "6ab166077294816d55e13ce08594370e",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/refs/heads/main": "b7a13c42e4a5e3668a84a2a4af192ade",
".git/refs/remotes/origin/main": "b7a13c42e4a5e3668a84a2a4af192ade",
"404.html": "f20e5f7f7ae16037cbc4bbceef7d63e6",
"assets/AssetManifest.bin": "2bd208b4c4b20d7dad722ee81bdb83f9",
"assets/AssetManifest.bin.json": "1fc14d9958ba649eaf8f559cc1ffdbe0",
"assets/AssetManifest.json": "c937576c1e757ab5051eec68e859abe8",
"assets/FontManifest.json": "e8c4a45ea9b3b303228ae15382a8204b",
"assets/fonts/Inter-VariableFont_opsz_wght.ttf": "0a77e23a8fdbe6caefd53cb04c26fabc",
"assets/fonts/MaterialIcons-Regular.otf": "0c100d2000b558a59ca6a28e1b46fa6c",
"assets/fonts/Montserrat-VariableFont_wght.ttf": "b87689f37dfb5c51719210e4d96a34a2",
"assets/fonts/WorkSans-VariableFont_wght.ttf": "bdf664a4902d28309f646bc51d75e013",
"assets/images/lightsoff2.png": "214499592ea2d334101396b260db875f",
"assets/images/newforklift.png": "781d0e8e42c679df1675f9abacee79b7",
"assets/images/restrict.png": "496b6d2202a84723d3d8d5d93fc39ac3",
"assets/images/search.png": "38b03ed2ae2af0533663f0fc478ae318",
"assets/NOTICES": "b687c1ae062fd82ec059d5d2f581e341",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"favicons.png": "9df55fdf7303ed862f4ab733825b5886",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "a6275bd172299252eb69d43e1c3eba39",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f20e5f7f7ae16037cbc4bbceef7d63e6",
"/": "f20e5f7f7ae16037cbc4bbceef7d63e6",
"main.dart.js": "4e9bae8cac2c3780fd732cee2daa61f6",
"manifest.json": "fdb1ddecf54cd68f868065eb11dcb215",
"version.json": "7398421283456f376042c92a3bfec620"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
