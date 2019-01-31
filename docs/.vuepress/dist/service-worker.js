/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a9f6a0b9f801c08270895933244ce1c4"
  },
  {
    "url": "assets/css/0.styles.26261ad6.css",
    "revision": "3a97361c02c86c6423ce58c5e66f3911"
  },
  {
    "url": "assets/img/academia.731944f0.jpg",
    "revision": "731944f03a677e6cf4c6471a9b00b61b"
  },
  {
    "url": "assets/img/accessories.02e25056.jpg",
    "revision": "02e250562a98f83fc7db5794b63a8ef7"
  },
  {
    "url": "assets/img/advanced-software.9f584f23.jpg",
    "revision": "9f584f23bb60b71e59ed27a48788f231"
  },
  {
    "url": "assets/img/agriculture.cf84da31.jpg",
    "revision": "cf84da31ca385cee118412911b256d53"
  },
  {
    "url": "assets/img/ai.331ff614.jpg",
    "revision": "331ff6145f40c56bf07092f79290097c"
  },
  {
    "url": "assets/img/app.6bdbdc2c.jpg",
    "revision": "6bdbdc2c80cbdb157da88690b998a5ed"
  },
  {
    "url": "assets/img/audio.afb1ff20.jpg",
    "revision": "afb1ff20538e17a51d6e5645a28a5d1f"
  },
  {
    "url": "assets/img/blog.38e756ab.jpg",
    "revision": "38e756abfa756ba6f24dabd10cf0ad11"
  },
  {
    "url": "assets/img/catalog.297a5425.jpg",
    "revision": "297a54257adec7b167c894d34fb9bbde"
  },
  {
    "url": "assets/img/children.8e94f298.jpg",
    "revision": "8e94f298fdfb1c3a0188a95ff6ef6e48"
  },
  {
    "url": "assets/img/collaboration.d8de1bde.jpg",
    "revision": "d8de1bde844b2183a8db6d05c4f21472"
  },
  {
    "url": "assets/img/content.f17402ad.jpg",
    "revision": "f17402adff8183c16d130ca938927a93"
  },
  {
    "url": "assets/img/course.ae757613.jpg",
    "revision": "ae757613d8bd0d4d8f973e54aabb2ac9"
  },
  {
    "url": "assets/img/data-responsibility.e6b21ab6.jpg",
    "revision": "e6b21ab61c557e5fb683299188af1444"
  },
  {
    "url": "assets/img/data-visualization.089130df.jpg",
    "revision": "089130df8ce36aaa7dce298cab5ec402"
  },
  {
    "url": "assets/img/data.e46f79b1.jpg",
    "revision": "e46f79b10d9af7c8c2a0191fe0c49571"
  },
  {
    "url": "assets/img/dataset.16d80db6.jpg",
    "revision": "16d80db6ecfdf8abc7643fb3f381d505"
  },
  {
    "url": "assets/img/design-thinking.e60fbec1.jpg",
    "revision": "e60fbec16c1211856d8325d64243a080"
  },
  {
    "url": "assets/img/design.f1bb36da.jpg",
    "revision": "f1bb36da61dcd3c9e94576b5913278c9"
  },
  {
    "url": "assets/img/developer.71129e78.jpg",
    "revision": "71129e780b405962ae2207bba93895a6"
  },
  {
    "url": "assets/img/devices.0aaf05a4.jpg",
    "revision": "0aaf05a443c7e2c10f215d538ef517a2"
  },
  {
    "url": "assets/img/digital-literacy.caf3fc40.jpg",
    "revision": "caf3fc40d7bcaa6915903edc022be94c"
  },
  {
    "url": "assets/img/diversity.b43b6090.jpg",
    "revision": "b43b6090ed519aeaf4f3c9451055c4c0"
  },
  {
    "url": "assets/img/doing-ict4d.cf9ad10a.jpg",
    "revision": "cf9ad10a7212e98f39b43ba506424cb6"
  },
  {
    "url": "assets/img/drones.656ec1c6.jpg",
    "revision": "656ec1c631689a4e6b2f63051aa85772"
  },
  {
    "url": "assets/img/education.2ef7f7c5.jpg",
    "revision": "2ef7f7c5377f0bd2bcb01213e1451ffb"
  },
  {
    "url": "assets/img/entrepreneurship.b6017acb.jpg",
    "revision": "b6017acba99f2c7bf9db6f7e7c30d085"
  },
  {
    "url": "assets/img/environment.a73c18d9.jpg",
    "revision": "a73c18d9f889600396391838da4a0cc5"
  },
  {
    "url": "assets/img/funding.c1c910c3.jpg",
    "revision": "c1c910c3543c899d2bb1c50c4e9cb7e8"
  },
  {
    "url": "assets/img/gear.d8ca6ebc.jpg",
    "revision": "d8ca6ebc31fef6e2772bf3e35c719937"
  },
  {
    "url": "assets/img/gender.d4378fba.jpg",
    "revision": "d4378fba4aec8aed8880d140515b272e"
  },
  {
    "url": "assets/img/girls.57c62320.jpg",
    "revision": "57c62320656f29dea6962e4c762ab406"
  },
  {
    "url": "assets/img/guides-and-reviews.37d81b76.jpg",
    "revision": "37d81b760ea4ac69003b6320a14d5b2a"
  },
  {
    "url": "assets/img/health.96438f76.jpg",
    "revision": "96438f765fd7317a136fd5a9262f4f0c"
  },
  {
    "url": "assets/img/hype-cycle.b8006fc2.svg",
    "revision": "b8006fc23f1c521ecc56a54569345183"
  },
  {
    "url": "assets/img/ict4d-organization.7276290c.jpg",
    "revision": "7276290cdf0312bd6fb259d13ea87209"
  },
  {
    "url": "assets/img/ict4d-overview.b4447261.jpg",
    "revision": "b444726111b880ac038091e0c90a36c7"
  },
  {
    "url": "assets/img/ict4d-sites.71311a3d.jpg",
    "revision": "71311a3dc496c0a5632ac1f3eef6f51b"
  },
  {
    "url": "assets/img/images.ee9b4339.jpg",
    "revision": "ee9b43394e20a7d664f82b14a127d0e8"
  },
  {
    "url": "assets/img/internet-safety.79280c18.jpg",
    "revision": "79280c1812d7aade065a2191bda249f1"
  },
  {
    "url": "assets/img/language.896d22e8.jpg",
    "revision": "896d22e8a1638c827e2f8b4252f77e4c"
  },
  {
    "url": "assets/img/laptop.20216094.jpg",
    "revision": "20216094513a4bfcaa2148cb95428bcb"
  },
  {
    "url": "assets/img/lessons.91f0ccb4.jpg",
    "revision": "91f0ccb47e68eedee671b132ca1ab1ed"
  },
  {
    "url": "assets/img/library.c6e5d13f.jpg",
    "revision": "c6e5d13f75ad65fd6323e202d9571560"
  },
  {
    "url": "assets/img/make.458e61ee.jpg",
    "revision": "458e61ee7d577d4e3a9605681c17f276"
  },
  {
    "url": "assets/img/mapping.2d0634ba.jpg",
    "revision": "2d0634ba3456abbee628d8618599bb47"
  },
  {
    "url": "assets/img/mobile.410b3159.jpg",
    "revision": "410b3159a509755f0be1bce64c78e4be"
  },
  {
    "url": "assets/img/mobiles.161d964a.jpg",
    "revision": "161d964a843b429f563a714071787868"
  },
  {
    "url": "assets/img/monitoring-&-evaluation.8035aec7.jpg",
    "revision": "8035aec7322b7b2dca6da626fb1e564a"
  },
  {
    "url": "assets/img/networks.01d43932.jpg",
    "revision": "01d4393217c710b984f350b69c4e92e0"
  },
  {
    "url": "assets/img/offline.ee8ad047.jpg",
    "revision": "ee8ad04718feb606809024723e4a171c"
  },
  {
    "url": "assets/img/organization.0fb4e25b.jpg",
    "revision": "0fb4e25b621129125b7fd4b5f1955b81"
  },
  {
    "url": "assets/img/photography.6672e9cf.jpg",
    "revision": "6672e9cf5f20daecd481a0142c947acb"
  },
  {
    "url": "assets/img/privacy.2fae1665.jpg",
    "revision": "2fae166515045ba16e9db69f0d86ca51"
  },
  {
    "url": "assets/img/productivity.59f48c22.jpg",
    "revision": "59f48c22cfcec124594a2f3f0146d9af"
  },
  {
    "url": "assets/img/programming.73500d9e.jpg",
    "revision": "73500d9e2291d1fd93f9d5e330315183"
  },
  {
    "url": "assets/img/radio.b3b0cb4b.jpg",
    "revision": "b3b0cb4b1e2147030f73b9b2009b99bc"
  },
  {
    "url": "assets/img/repair.ea6a53ec.jpg",
    "revision": "ea6a53ecfcb1c29a9a28014b1ecfa9cc"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/social-media.55bfca08.jpg",
    "revision": "55bfca08771e2218ca132d204e6642b1"
  },
  {
    "url": "assets/img/software.ac7e86c9.jpg",
    "revision": "ac7e86c919bf63398b4f0d50fa54266d"
  },
  {
    "url": "assets/img/stem.5081f909.jpg",
    "revision": "5081f9091a65c81adce9066310fb25ca"
  },
  {
    "url": "assets/img/stock.26d2d8e0.jpg",
    "revision": "26d2d8e0655b1c7c88f7d8976fb111cd"
  },
  {
    "url": "assets/img/storytelling.3523389b.jpg",
    "revision": "3523389b73bab57fd485d8b5555dd915"
  },
  {
    "url": "assets/img/testing.d8e6af3b.jpg",
    "revision": "d8e6af3b71e8b5d26ec83278122a575c"
  },
  {
    "url": "assets/img/tools.f34aa40d.jpg",
    "revision": "f34aa40ddeaf46ec6a251c3a2ddc93f9"
  },
  {
    "url": "assets/img/video.b50c77d3.jpg",
    "revision": "b50c77d355876c3219811eec4b0ddbf9"
  },
  {
    "url": "assets/img/women.75ca4926.jpg",
    "revision": "75ca4926a6675ad94cda6985e5f9dfe3"
  },
  {
    "url": "assets/img/writing.8a2d17c9.jpg",
    "revision": "8a2d17c9b678369f135fd5f95eab1ba0"
  },
  {
    "url": "assets/img/youth.bcaea67d.jpg",
    "revision": "bcaea67d6e04d104e98889f8a622a4bb"
  },
  {
    "url": "assets/js/10.54f6e298.js",
    "revision": "ee1959a6a2fa41c2b39c34feed5cfbcc"
  },
  {
    "url": "assets/js/11.b0bc5208.js",
    "revision": "d1f0b82a82961689752d03c38af6359c"
  },
  {
    "url": "assets/js/12.815e8544.js",
    "revision": "e4131de5747fbe7afe951acbac800de3"
  },
  {
    "url": "assets/js/13.5d187767.js",
    "revision": "38848401f774dbda6c6b5d28cc6001df"
  },
  {
    "url": "assets/js/14.1ad90127.js",
    "revision": "04f873fadbf467f554cfddeac9d149e3"
  },
  {
    "url": "assets/js/15.de846660.js",
    "revision": "66a80f9ae4df428fa6109ef5c7175499"
  },
  {
    "url": "assets/js/16.fcf9c924.js",
    "revision": "e18e0a2b2909426d0c0257e7913c575d"
  },
  {
    "url": "assets/js/17.8f93940b.js",
    "revision": "1cc073aebfab58899372d82c2e7039eb"
  },
  {
    "url": "assets/js/18.060abfaa.js",
    "revision": "dcb7df8627cb078ac2913b30f3932b17"
  },
  {
    "url": "assets/js/19.7e6098e7.js",
    "revision": "9607800cd035cd90c757ea87d6e0ca30"
  },
  {
    "url": "assets/js/2.c27847dd.js",
    "revision": "120c0e1c483e57240a528a25e53033ff"
  },
  {
    "url": "assets/js/20.c72adf8f.js",
    "revision": "01953d94cf63e4649731d36e262bba82"
  },
  {
    "url": "assets/js/21.47f69e82.js",
    "revision": "d975cb7c0acae781a9c88880b5d69d02"
  },
  {
    "url": "assets/js/22.5fd56587.js",
    "revision": "d772d86cd9a3f8043d8307fc673c3c76"
  },
  {
    "url": "assets/js/23.a3c12dc6.js",
    "revision": "ba192ddd13c8cf8ef43fd2aa67c717a4"
  },
  {
    "url": "assets/js/24.985a600d.js",
    "revision": "c55770ea21b9f355fe16c83f85dbef52"
  },
  {
    "url": "assets/js/25.e5625e3b.js",
    "revision": "3f914085e4023209295eff9dfd92f182"
  },
  {
    "url": "assets/js/26.78d01a0a.js",
    "revision": "aa69850f9e779b82db46982b9feac56c"
  },
  {
    "url": "assets/js/27.66b8ab2c.js",
    "revision": "ea766cc75a5aae81c4f2400f75a8a7d9"
  },
  {
    "url": "assets/js/28.d2149776.js",
    "revision": "49ac343cf50de1bf192336b778bfefea"
  },
  {
    "url": "assets/js/29.bf862519.js",
    "revision": "6314fab93220ec470a8f782c6075af13"
  },
  {
    "url": "assets/js/3.c4b97323.js",
    "revision": "dd15ba3a880160b1a5f7a026e0480460"
  },
  {
    "url": "assets/js/30.87f1f5b2.js",
    "revision": "2bfec16f26de1fb8dd77e12b53b2da20"
  },
  {
    "url": "assets/js/31.1271293c.js",
    "revision": "ed793bc0f3809c422bcc7ca79daa15a2"
  },
  {
    "url": "assets/js/32.6171b940.js",
    "revision": "a0011fe9bc1b9d2bd694196777088062"
  },
  {
    "url": "assets/js/33.2810f960.js",
    "revision": "d5e061efeba0735e7dc962fbb9413233"
  },
  {
    "url": "assets/js/34.cd4a5b78.js",
    "revision": "90edac60b11de0aa237f0cce0cc59168"
  },
  {
    "url": "assets/js/35.2d66ed91.js",
    "revision": "460af0550f6b7796cdbc383df646c2b7"
  },
  {
    "url": "assets/js/36.a5161ee6.js",
    "revision": "a9effd34d81c108c111d43f8abd1ee49"
  },
  {
    "url": "assets/js/37.9b93d99c.js",
    "revision": "6a6551a69e04e265751e0ccc35739e50"
  },
  {
    "url": "assets/js/38.8e1c666b.js",
    "revision": "2a1af4d11987c9d7fa6532eba6154744"
  },
  {
    "url": "assets/js/39.5a528007.js",
    "revision": "dd85a3a2582a4552a3a9cc70f09f92fb"
  },
  {
    "url": "assets/js/4.b98c9d27.js",
    "revision": "f7e0d3795eef983b6ce8a9fb04d2883a"
  },
  {
    "url": "assets/js/40.1e6d6768.js",
    "revision": "07a4a18eead0a8f8bbbf670a09e83695"
  },
  {
    "url": "assets/js/41.a5ec7f44.js",
    "revision": "4948667778b5357e198d2a76ff54952d"
  },
  {
    "url": "assets/js/42.c80f7633.js",
    "revision": "889b6f97a72c808ed89d831415b59418"
  },
  {
    "url": "assets/js/43.f75f1808.js",
    "revision": "f9addf32ebd92cec8fc8915717e5a676"
  },
  {
    "url": "assets/js/44.d88bc3ff.js",
    "revision": "f1fa25c0a280894b6508e8d43b880287"
  },
  {
    "url": "assets/js/45.ecbe8ee1.js",
    "revision": "99db8f4eba948270986b33cc4bdbcbe6"
  },
  {
    "url": "assets/js/46.11d1c6ea.js",
    "revision": "6d4ebf01b378918767c2d09f881f7353"
  },
  {
    "url": "assets/js/47.f8885753.js",
    "revision": "152940efe89ccf2cb0b257dc1fee2fb3"
  },
  {
    "url": "assets/js/48.08e790d4.js",
    "revision": "9ec495fb8bcef82c0b365a0b24753b81"
  },
  {
    "url": "assets/js/49.b15f890a.js",
    "revision": "9244ea6390aebf3bcbc7509fc5943340"
  },
  {
    "url": "assets/js/5.8825e1fe.js",
    "revision": "9e903a7e08490dcdc40f7bb628ccb2ec"
  },
  {
    "url": "assets/js/50.587750d5.js",
    "revision": "5a429c2a97c5979a9ab197738c0775eb"
  },
  {
    "url": "assets/js/51.5ae210e3.js",
    "revision": "45100a0d3c50f59c30e373a2e7c464df"
  },
  {
    "url": "assets/js/52.75ccd0e9.js",
    "revision": "e8c6de09e8267d8be293d8964e6c7fd8"
  },
  {
    "url": "assets/js/53.66740962.js",
    "revision": "d61ba6906c75cc72e740c860cc418046"
  },
  {
    "url": "assets/js/54.fdb14781.js",
    "revision": "f452ece9c2fd95d1d4de02e4e57961fc"
  },
  {
    "url": "assets/js/55.db17b670.js",
    "revision": "ebe9a8b5cb1d8e0b57e228976e9aeca3"
  },
  {
    "url": "assets/js/56.1ce186c1.js",
    "revision": "6203beb39b1e2020d6f6015089e59d34"
  },
  {
    "url": "assets/js/57.faec2173.js",
    "revision": "b9804e9d2327ef0eb6b0c09d66cda68b"
  },
  {
    "url": "assets/js/58.c81969c3.js",
    "revision": "8949d88a4686beb0f2651b286c3da92c"
  },
  {
    "url": "assets/js/59.4ec66388.js",
    "revision": "456f33a4939ac9495dd9501bb10fdf3b"
  },
  {
    "url": "assets/js/6.a38e7791.js",
    "revision": "bd7ccadb5a37ed58601c3a7991d5efbb"
  },
  {
    "url": "assets/js/60.90f8239b.js",
    "revision": "49285cb716c2cefeee223829a87a4537"
  },
  {
    "url": "assets/js/61.db81263b.js",
    "revision": "e0e487f8aa60ecdccad6f26bbaf103ba"
  },
  {
    "url": "assets/js/62.3db5b7da.js",
    "revision": "ffcea5d43802dcd41bca9b0bf155010c"
  },
  {
    "url": "assets/js/63.59961ff9.js",
    "revision": "1a81e6cfc80919f5cd23163bb1af0b01"
  },
  {
    "url": "assets/js/64.e65f8e8d.js",
    "revision": "d5f1868c9125eca74a255a88ea4b4113"
  },
  {
    "url": "assets/js/65.67c2c4ca.js",
    "revision": "95116078993d481f0cbc5e3fc5acea61"
  },
  {
    "url": "assets/js/66.e661e4b0.js",
    "revision": "b0197333e407c76c876acaf7fa0c3f7b"
  },
  {
    "url": "assets/js/67.e994ae4e.js",
    "revision": "dd909ebba6308bb17ea2beb9b8b69832"
  },
  {
    "url": "assets/js/68.8b498839.js",
    "revision": "1b358e2b33e24c07ddaee9def866932f"
  },
  {
    "url": "assets/js/69.38cadc2f.js",
    "revision": "c9059f9b6157a5de80623176b4a0a350"
  },
  {
    "url": "assets/js/7.d3552d2d.js",
    "revision": "58545e40d1a43439b8d071d6c4f1311b"
  },
  {
    "url": "assets/js/70.f674e25c.js",
    "revision": "29590252e26baf8af621a787fd623ae4"
  },
  {
    "url": "assets/js/71.6712dde2.js",
    "revision": "27e66916140d5610d73e96158080585e"
  },
  {
    "url": "assets/js/72.a65392e5.js",
    "revision": "9a8d3ee537d90a3ba4b368d25ca211c6"
  },
  {
    "url": "assets/js/73.f9574377.js",
    "revision": "fc6f9eb6f507ee54d157b5cef1a427be"
  },
  {
    "url": "assets/js/74.81425e88.js",
    "revision": "48ba02a1a5c78f821d42e8542da8263c"
  },
  {
    "url": "assets/js/8.75bbefd8.js",
    "revision": "df0d66760d5ae26f429acfba0a7f694e"
  },
  {
    "url": "assets/js/9.bccc6cc6.js",
    "revision": "c101bad0f365a068703dcfd047cd6b7f"
  },
  {
    "url": "assets/js/app.bb13e6e8.js",
    "revision": "50e9b0ad95348472fa5e51626fc56ac3"
  },
  {
    "url": "guide/basics/doing-ict4d.html",
    "revision": "e9c5a7dabe384d827f422c24164c031f"
  },
  {
    "url": "guide/basics/ict4d-blogs.html",
    "revision": "44c446e8bd0fd945fc35d905502baad9"
  },
  {
    "url": "guide/basics/ict4d-organizations.html",
    "revision": "7acc8fcfef83f849dab89799493731bf"
  },
  {
    "url": "guide/basics/ict4d-overview.html",
    "revision": "f859cc0cb6ec83c5d982df0a89ea335b"
  },
  {
    "url": "guide/basics/ict4d-sites.html",
    "revision": "b3fcf35caa2e6870535286875ff3ff3a"
  },
  {
    "url": "guide/basics/sites.html",
    "revision": "ec8f3d0cc91f1c478b0bbd79ac6266d0"
  },
  {
    "url": "guide/index.html",
    "revision": "2c14ba44659ef4a107f650047ce8265e"
  },
  {
    "url": "guide/tools/accessories.html",
    "revision": "f1b802892c20035c8e5579246a1f5341"
  },
  {
    "url": "guide/tools/laptops-and-tablets.html",
    "revision": "d3a09358f96a0c4728cbe57231fe5eb7"
  },
  {
    "url": "guide/tools/mobiles.html",
    "revision": "7e8806e4acdbfaf4cfb93e269f001588"
  },
  {
    "url": "guide/tools/other-devices.html",
    "revision": "03098f6a72e3abd0d9575dfae5a49980"
  },
  {
    "url": "guide/tools/tools-introduction.html",
    "revision": "2251c11ac30cab48954746522ea6151f"
  },
  {
    "url": "guide/topics/academia.html",
    "revision": "b68a4b0e19ebcbd00e632591101580a8"
  },
  {
    "url": "guide/topics/advanced-software.html",
    "revision": "4ef11366c02596dbd602a04f7339757e"
  },
  {
    "url": "guide/topics/agriculture.html",
    "revision": "fbec815e481eab200ca83cb933259d07"
  },
  {
    "url": "guide/topics/ai.html",
    "revision": "9b2d045e3d770d2ba4ed7c4a932eacd2"
  },
  {
    "url": "guide/topics/app.html",
    "revision": "ef81079b3a6fa2c6e92d5c20bb53e2f4"
  },
  {
    "url": "guide/topics/audio.html",
    "revision": "8c8b0725b258b01dd41fc8603a699853"
  },
  {
    "url": "guide/topics/catalog.html",
    "revision": "b8db90b7f95457addcd94fe2b4183627"
  },
  {
    "url": "guide/topics/children.html",
    "revision": "50ec0ec2b7f6897dfd30659c53ef02d7"
  },
  {
    "url": "guide/topics/collaboration.html",
    "revision": "a42efe1d36cee696b633f9f7eb3a6694"
  },
  {
    "url": "guide/topics/content.html",
    "revision": "8fcafb785408ede4c729c1a6bbcd5824"
  },
  {
    "url": "guide/topics/course.html",
    "revision": "eae1ec2c95d1072db278a3cb0f45cce4"
  },
  {
    "url": "guide/topics/data-responsibility.html",
    "revision": "f8e26940b548d182c9b56f8f21097a61"
  },
  {
    "url": "guide/topics/data-visualization.html",
    "revision": "d9d311e763515b5ca2c9cf48d9882ca1"
  },
  {
    "url": "guide/topics/data.html",
    "revision": "096f18b08d40ad4ab616ea2280f9f2f2"
  },
  {
    "url": "guide/topics/dataset.html",
    "revision": "02349eb1ab3b31bc438a7f67f10fb8ef"
  },
  {
    "url": "guide/topics/design-thinking.html",
    "revision": "71162a084e729e9acaa6dbd6edc84251"
  },
  {
    "url": "guide/topics/design.html",
    "revision": "d9e5f0b0f9f82ece24041d22baa5b796"
  },
  {
    "url": "guide/topics/developer.html",
    "revision": "958cd5b40ca791fad7a1a7a60c1f3863"
  },
  {
    "url": "guide/topics/digital-literacy.html",
    "revision": "088b203f32474ad9ec6bc5a2314451d7"
  },
  {
    "url": "guide/topics/diversity.html",
    "revision": "68186060835c07fb2258f235c403d0f7"
  },
  {
    "url": "guide/topics/drones.html",
    "revision": "d924b3a59c774fa7ebae7e328ea4ce63"
  },
  {
    "url": "guide/topics/education.html",
    "revision": "cc6fd7270d8397d66fef35029a8cad1f"
  },
  {
    "url": "guide/topics/entrepreneurship.html",
    "revision": "bb84b87bdde18b5cd48929921e45c865"
  },
  {
    "url": "guide/topics/environment.html",
    "revision": "95b8c63c80076966eca5d8a57ca7d03d"
  },
  {
    "url": "guide/topics/funding.html",
    "revision": "0720f42a530c67f3d091ffdccb704cc0"
  },
  {
    "url": "guide/topics/gear.html",
    "revision": "de182ffd50546d08593e74546177b1e8"
  },
  {
    "url": "guide/topics/gender.html",
    "revision": "3e049439488030a10c07cb584431dad6"
  },
  {
    "url": "guide/topics/girls.html",
    "revision": "0c6e184deb5efb5f5fa2b9cc068aaa6e"
  },
  {
    "url": "guide/topics/guides-and-reviews.html",
    "revision": "f1449b3d834f007fa39edcaab232b32e"
  },
  {
    "url": "guide/topics/health.html",
    "revision": "c564ce29960bbff01e9b2566597b4c71"
  },
  {
    "url": "guide/topics/images.html",
    "revision": "fab951da88e03bed74a284a77820dc52"
  },
  {
    "url": "guide/topics/internet-safety.html",
    "revision": "31e0f7f53f822263b18b28fb591d7abb"
  },
  {
    "url": "guide/topics/language.html",
    "revision": "90a732b742a84b2562fc50947534d491"
  },
  {
    "url": "guide/topics/lessons.html",
    "revision": "de87e3d7d27f80f7fc4e240118a1e954"
  },
  {
    "url": "guide/topics/library.html",
    "revision": "8a4a0d555082a9b71b1972b198b8bb2e"
  },
  {
    "url": "guide/topics/make.html",
    "revision": "47c75ece8cbeffc0a6307b8719869247"
  },
  {
    "url": "guide/topics/mapping.html",
    "revision": "13dc7135ff3edfa65b4b581ab9bfd72f"
  },
  {
    "url": "guide/topics/mobile.html",
    "revision": "e35876240686727aeca503556d7c805a"
  },
  {
    "url": "guide/topics/monitoring-and-evaluation.html",
    "revision": "fc8467c06a118c1a11fff2ad00677c6c"
  },
  {
    "url": "guide/topics/networks.html",
    "revision": "00bdee18d8cf6ba9f9532e72444d86cf"
  },
  {
    "url": "guide/topics/offline.html",
    "revision": "818a4c8b16acfb8c0070534140c02a92"
  },
  {
    "url": "guide/topics/organization.html",
    "revision": "e9458fde0e7be053ad5c69e901240467"
  },
  {
    "url": "guide/topics/photography.html",
    "revision": "0d3028999bac8e56cc04eb0a3586d4d5"
  },
  {
    "url": "guide/topics/privacy.html",
    "revision": "f458fc461a379a40d78da96a659ea88e"
  },
  {
    "url": "guide/topics/productivity.html",
    "revision": "0b686a7bb9c3585e0ffd62f8a34c9fd9"
  },
  {
    "url": "guide/topics/programming.html",
    "revision": "e56fc28d7e55620ba66091b3535a8dd7"
  },
  {
    "url": "guide/topics/radio.html",
    "revision": "1985fdb893310ea5df2a413b40a2b1a2"
  },
  {
    "url": "guide/topics/repair.html",
    "revision": "a77bf1283c653e18c6857488a2574874"
  },
  {
    "url": "guide/topics/social-media.html",
    "revision": "abea8dcc75dc04c9be9a0501f7272bf8"
  },
  {
    "url": "guide/topics/software.html",
    "revision": "39051cc88bfb669cd83549beb6311106"
  },
  {
    "url": "guide/topics/stem.html",
    "revision": "7a9ac4febe48cc55b7ec116ed1cc0766"
  },
  {
    "url": "guide/topics/stock.html",
    "revision": "d0b6ab0338239accab3dd624398fab7d"
  },
  {
    "url": "guide/topics/storytelling.html",
    "revision": "ffd1d168be0c85d8f0b5c7f66c57eb3c"
  },
  {
    "url": "guide/topics/testing.html",
    "revision": "26644584e3dfc127eae8acded79d6ae8"
  },
  {
    "url": "guide/topics/video.html",
    "revision": "a0ab041507af1cd39a94d33545b5c0a3"
  },
  {
    "url": "guide/topics/women.html",
    "revision": "71db5702805f823a9e4eeee1f31c158a"
  },
  {
    "url": "guide/topics/writing.html",
    "revision": "175e354d488d609393102e5a1c911181"
  },
  {
    "url": "guide/topics/youth.html",
    "revision": "a7fa77d0714e62efb86a796ea9557f78"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "369a3db449c4c9c111f0fb04663d6f6c"
  },
  {
    "url": "icons/android-chrome-256x256.png",
    "revision": "941e540dbcac0f03938980339186d0bc"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "c75554e38640ddff483cd6c7e1bf5863"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "9d3e8e33375d9ab6d7b6ed553f47496c"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "fb503c96b925c0c5ed3aa8b53b361eaa"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "8eb9bda8cad3f2b332dfd46dac5f9122"
  },
  {
    "url": "icons/favicon.png",
    "revision": "8eb9bda8cad3f2b332dfd46dac5f9122"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "492b8ca3e03c6f963ce356e51d56bd77"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "4fadb3ad79dc1c9e684e6871647bf5d1"
  },
  {
    "url": "index.html",
    "revision": "bbca87db88e03f434b85098139d18253"
  },
  {
    "url": "logo.png",
    "revision": "ffe049a83f488ad00068258e19e4d0c3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
