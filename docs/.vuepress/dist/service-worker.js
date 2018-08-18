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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b6d0c6b9efab0726f60e05c1ca9c704e"
  },
  {
    "url": "assets/css/0.styles.fefef100.css",
    "revision": "a017c0f13e7d25a3088a73cb7cda9ac5"
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
    "url": "assets/img/ict4d-guide-mobile.e338788a.jpg",
    "revision": "e338788a0eb13f97ceb7b96009af3a2d"
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
    "url": "assets/js/10.a53f8184.js",
    "revision": "1a7835c230061fb4503bc9acabc8f4e7"
  },
  {
    "url": "assets/js/11.db13f1a7.js",
    "revision": "4e1483b81082afa26bebadc7cbc6ecad"
  },
  {
    "url": "assets/js/12.89b94671.js",
    "revision": "b727dfb0302e9b1482478ae3e03aecc8"
  },
  {
    "url": "assets/js/13.25fb55c6.js",
    "revision": "14d9497ece427a700f1423fb2e6a55a6"
  },
  {
    "url": "assets/js/14.b799f029.js",
    "revision": "6483a68c1e512a29703f051f70a4eb2c"
  },
  {
    "url": "assets/js/15.95a82931.js",
    "revision": "79d9e574e28adab484999d92b5b0cb8e"
  },
  {
    "url": "assets/js/16.17eb3fed.js",
    "revision": "226208d108c75eb51de7fcf4e49dc3f8"
  },
  {
    "url": "assets/js/17.75b1c61e.js",
    "revision": "96db5d67821c2ac041a046e2236be457"
  },
  {
    "url": "assets/js/18.a5c6ef91.js",
    "revision": "32b59994576c84db9528ef2a3f238989"
  },
  {
    "url": "assets/js/19.721f5cd7.js",
    "revision": "cc398ef1c6dc44a4416ef2bfab0f5fc4"
  },
  {
    "url": "assets/js/2.82409067.js",
    "revision": "41c6fc7f5adb79c3e4f4dbf9cf78f78a"
  },
  {
    "url": "assets/js/20.0c6eea41.js",
    "revision": "c74e87179f7caa2c82e8fe6d407760df"
  },
  {
    "url": "assets/js/21.9c6d2bc1.js",
    "revision": "9b066db4c45e2596eca4274ae7ff1801"
  },
  {
    "url": "assets/js/22.0e9f93b3.js",
    "revision": "119c7d2c9cd4c7af2faf528f85371ee5"
  },
  {
    "url": "assets/js/23.593d4876.js",
    "revision": "25b52ff94c40461f4c6909af2dda4c22"
  },
  {
    "url": "assets/js/24.e41aa0ec.js",
    "revision": "5cc54b6d2d5a00a3c57b1e1fdd2c5f5f"
  },
  {
    "url": "assets/js/25.4601915f.js",
    "revision": "c52971fc978285b5421f67b8ed90c80a"
  },
  {
    "url": "assets/js/26.f3f4b0ec.js",
    "revision": "123a2b3826e14873818e96c2213b8828"
  },
  {
    "url": "assets/js/27.f179f52d.js",
    "revision": "b4e141323eec4bd30f1de353734bf539"
  },
  {
    "url": "assets/js/28.5b42d911.js",
    "revision": "0c51aa6c459e4412f8e75972c7a9cc99"
  },
  {
    "url": "assets/js/29.5f72f212.js",
    "revision": "751725b87213079771b767d6313555dc"
  },
  {
    "url": "assets/js/3.ce303c56.js",
    "revision": "f465fdba6eea3ba9a1bfb4df238e8ba2"
  },
  {
    "url": "assets/js/30.b49b9363.js",
    "revision": "c1396edf50244539386ea98d0b74f35c"
  },
  {
    "url": "assets/js/31.a902415e.js",
    "revision": "0cd226eab746f0cadac8627adcb8e1f1"
  },
  {
    "url": "assets/js/32.ede71a99.js",
    "revision": "f98faa63530e4c77f5419e63fb303b95"
  },
  {
    "url": "assets/js/33.c31c32d6.js",
    "revision": "50119641b6daa8590c6f9fbfa81fd478"
  },
  {
    "url": "assets/js/34.b847f7ac.js",
    "revision": "9e4370568550eac6727379c4d1eccdcb"
  },
  {
    "url": "assets/js/35.53896e08.js",
    "revision": "14793dd4c59dda8797ba6f696b10f3cd"
  },
  {
    "url": "assets/js/36.576fcbbc.js",
    "revision": "d6cc4c0ea9fb9e55494df743d933b311"
  },
  {
    "url": "assets/js/37.695aa12e.js",
    "revision": "90a0d9ecf30b8dc9f420d25ad13889e1"
  },
  {
    "url": "assets/js/38.c611f4a2.js",
    "revision": "0eb55591166220a448be234d5d34dc61"
  },
  {
    "url": "assets/js/39.512625ea.js",
    "revision": "13cd6e9ea25c059077c6ac635284c8fa"
  },
  {
    "url": "assets/js/4.7984ce52.js",
    "revision": "3b016d3ca731f10f4992399a1181d4f5"
  },
  {
    "url": "assets/js/40.be1e5699.js",
    "revision": "da3b827787de84ef3fabbc3d0153b0ec"
  },
  {
    "url": "assets/js/41.1133dda2.js",
    "revision": "3ec4c97aa2a91a2bde6a7a2b5e414425"
  },
  {
    "url": "assets/js/42.8f0225cd.js",
    "revision": "e5f101207a288afb7e09594fc0f695bc"
  },
  {
    "url": "assets/js/43.7a33952b.js",
    "revision": "41d2bc2c87290ce42d43ab6f46e23298"
  },
  {
    "url": "assets/js/44.350ac2d3.js",
    "revision": "d2604cc2402a195521a25c6ef806ed66"
  },
  {
    "url": "assets/js/45.3d8e2cb9.js",
    "revision": "85fb6dcbfdba1b0d520b876a73c30053"
  },
  {
    "url": "assets/js/46.cab39516.js",
    "revision": "1277b467a66390cf9de6f8470db4af99"
  },
  {
    "url": "assets/js/47.9ba1c8d0.js",
    "revision": "dd78147a5018885128c1ff44f762f20a"
  },
  {
    "url": "assets/js/48.347afd1a.js",
    "revision": "3fb90231ae0f6b159eb5468eae4f6ab0"
  },
  {
    "url": "assets/js/49.c447d1e7.js",
    "revision": "efe830c6329b90b4c39d93f66c08e61c"
  },
  {
    "url": "assets/js/5.90546025.js",
    "revision": "c50e1415bd26172a137677bc72616cbe"
  },
  {
    "url": "assets/js/50.46737b0a.js",
    "revision": "a61ba9bde1759f6c0e7e55381ded85ae"
  },
  {
    "url": "assets/js/51.3efbbf2a.js",
    "revision": "5acbd3e0b5444a4832fd5e031c485178"
  },
  {
    "url": "assets/js/52.8f2d2c13.js",
    "revision": "b986bbdfb6479934f0a2c7e5e2aaae54"
  },
  {
    "url": "assets/js/53.a0467bb4.js",
    "revision": "3128c1a9ca4e83af80df3f3e95259a75"
  },
  {
    "url": "assets/js/54.9c240a0d.js",
    "revision": "cf746b491122872a89dba7a18c000837"
  },
  {
    "url": "assets/js/55.f33cf450.js",
    "revision": "7cee549658281faebdecb3d0518ff2e4"
  },
  {
    "url": "assets/js/56.86b20b4f.js",
    "revision": "1a658bda3fd2d3e7587430b2c025a309"
  },
  {
    "url": "assets/js/57.82e850ce.js",
    "revision": "73dcd62c8deb1ff276c425c3500c3017"
  },
  {
    "url": "assets/js/58.b2baec2b.js",
    "revision": "101088b2457259e8dc6a39eff7d1b017"
  },
  {
    "url": "assets/js/59.4a2afa2a.js",
    "revision": "7abea48acca9426e560c9c26ece964b1"
  },
  {
    "url": "assets/js/6.fd8af8eb.js",
    "revision": "e4f86a85b67e0ff83c472f87dc5975a9"
  },
  {
    "url": "assets/js/60.ccff2328.js",
    "revision": "24c42d6900e38f7610464d2660df07f0"
  },
  {
    "url": "assets/js/61.03cabbf4.js",
    "revision": "28bd3a240c583797eeb1b89e2eb3f19b"
  },
  {
    "url": "assets/js/62.c66e5df9.js",
    "revision": "507a5aad5c55ee1648810c1e8e91de86"
  },
  {
    "url": "assets/js/63.28c7bdf1.js",
    "revision": "553167ff7a3487b58475e23fb677d262"
  },
  {
    "url": "assets/js/64.59efd32b.js",
    "revision": "159ecf2f67961a73285b9edf086d3801"
  },
  {
    "url": "assets/js/65.4e903a05.js",
    "revision": "6eae1fc355ad1cc770ce34ca497feabb"
  },
  {
    "url": "assets/js/66.9cd3ceea.js",
    "revision": "c98a1ec567d56064040bc09b022b69a1"
  },
  {
    "url": "assets/js/67.98a5c365.js",
    "revision": "42c3d89527f9528ea6482c8759472e92"
  },
  {
    "url": "assets/js/68.cf2a4787.js",
    "revision": "fc3f5059e23a91daf8a7d5b3d9c76687"
  },
  {
    "url": "assets/js/69.ff808dbf.js",
    "revision": "0b8950deeb72740653d3da86e77eda89"
  },
  {
    "url": "assets/js/7.0a0ab72b.js",
    "revision": "022188e78fe3c1fe9887eecbe0762794"
  },
  {
    "url": "assets/js/70.b60cf875.js",
    "revision": "c5a71faa08e354ff7be5b8a4296851a2"
  },
  {
    "url": "assets/js/71.16a41eec.js",
    "revision": "3777cbc4c5f96b409d00bbd9d4f8a190"
  },
  {
    "url": "assets/js/72.a67a4fc0.js",
    "revision": "8e787484832cf217dafe2dd5e7f8f5ee"
  },
  {
    "url": "assets/js/73.f56569b7.js",
    "revision": "47cc2b64653078af73909b3d4cee3729"
  },
  {
    "url": "assets/js/74.9d3f45c2.js",
    "revision": "490ffe129c741853d249a02358b7c58e"
  },
  {
    "url": "assets/js/75.34a89778.js",
    "revision": "2884988ae9789d6a7f603f94a1decfcc"
  },
  {
    "url": "assets/js/76.c4c47bba.js",
    "revision": "cbb7a3e2adba2406b2e8530dd6b7eed8"
  },
  {
    "url": "assets/js/8.d2f10245.js",
    "revision": "a173b38d09aba754c322fc346a82d5f3"
  },
  {
    "url": "assets/js/9.1c020679.js",
    "revision": "629f2d958ad418dd3154783add82520e"
  },
  {
    "url": "assets/js/app.f0de84aa.js",
    "revision": "03608b09f0b3de97966120fa10ff29b0"
  },
  {
    "url": "guide/about.html",
    "revision": "79d33fc0636f3cf76d51659dc7c0c0ef"
  },
  {
    "url": "guide/basics/doing-ict4d.html",
    "revision": "681b6e3091ddd5f5f598ea108ba129be"
  },
  {
    "url": "guide/basics/ict4d-blogs.html",
    "revision": "73e3037b658999b50bf58c3d5430eb70"
  },
  {
    "url": "guide/basics/ict4d-organizations.html",
    "revision": "87c6ef58eb880aace14112f329a501e0"
  },
  {
    "url": "guide/basics/ict4d-overview.html",
    "revision": "0addb5eb2af16a94f083705bcd8c15bc"
  },
  {
    "url": "guide/basics/ict4d-sites.html",
    "revision": "a04467d735b57ac91998607c7b3302f2"
  },
  {
    "url": "guide/basics/sites.html",
    "revision": "8c221b343318ea1a26841be9806f7282"
  },
  {
    "url": "guide/contents.html",
    "revision": "3109bda6bc15fb186a89b16ed7d67f08"
  },
  {
    "url": "guide/index.html",
    "revision": "a4bbd4cdf70cce785b069b373afc3475"
  },
  {
    "url": "guide/tools/accessories.html",
    "revision": "aa496753db4236c42871fbf1ec76a1a3"
  },
  {
    "url": "guide/tools/laptops-and-tablets.html",
    "revision": "eb8fdffddeda95e9a4b8695f43cf98fb"
  },
  {
    "url": "guide/tools/mobiles.html",
    "revision": "1ff1fb3b9661cf7eb9ae7bddb66a7562"
  },
  {
    "url": "guide/tools/other-devices.html",
    "revision": "a7704b1eb4be8abfbd9dff4acf93c3c4"
  },
  {
    "url": "guide/tools/tools-introduction.html",
    "revision": "3824168f0bb7ac251c6d6e6069257956"
  },
  {
    "url": "guide/topics/academia.html",
    "revision": "fc3b444ce463bf5fb83442f0f78901a7"
  },
  {
    "url": "guide/topics/advanced-software.html",
    "revision": "c1e604bbb9f81c7dad58ad65b8fee979"
  },
  {
    "url": "guide/topics/agriculture.html",
    "revision": "436678ad02228b013dec97ce446a34b1"
  },
  {
    "url": "guide/topics/ai.html",
    "revision": "363967b5039dcbbf0c4809debcdb39f0"
  },
  {
    "url": "guide/topics/app.html",
    "revision": "25c1f3396ccaed25f75cb1d91e8a4745"
  },
  {
    "url": "guide/topics/audio.html",
    "revision": "45df6b9b5eb057a6814dff983a8dda24"
  },
  {
    "url": "guide/topics/catalog.html",
    "revision": "d191821974f3a23d70c1ec9bdaf8ea42"
  },
  {
    "url": "guide/topics/children.html",
    "revision": "264f6832101fd5e6801b0b5cc9d95ad9"
  },
  {
    "url": "guide/topics/collaboration.html",
    "revision": "32f326a714a182e5796a5e770af4e47d"
  },
  {
    "url": "guide/topics/content.html",
    "revision": "85d0806cef2ab87728ec18cdd42192e7"
  },
  {
    "url": "guide/topics/course.html",
    "revision": "791f8ac766868713f1e366af046b5217"
  },
  {
    "url": "guide/topics/data-responsibility.html",
    "revision": "7307f4892f3507c2f392fb8fd906bcdc"
  },
  {
    "url": "guide/topics/data-visualization.html",
    "revision": "cc9abfb08ea6901fa900dcc2648bafa3"
  },
  {
    "url": "guide/topics/data.html",
    "revision": "a1b7137d6df862cb76b23813c68f734b"
  },
  {
    "url": "guide/topics/dataset.html",
    "revision": "29568608137a05902337b85f08aa9572"
  },
  {
    "url": "guide/topics/design-thinking.html",
    "revision": "ee49572ec901758066bc03ed4d33b9ac"
  },
  {
    "url": "guide/topics/design.html",
    "revision": "91f106803a170947a4a1c2bdd18a210a"
  },
  {
    "url": "guide/topics/developer.html",
    "revision": "64125d7eaf2561087ee46041a022a4eb"
  },
  {
    "url": "guide/topics/digital-literacy.html",
    "revision": "312acbd37be3dc1ca8b80d808bc0692f"
  },
  {
    "url": "guide/topics/diversity.html",
    "revision": "793d019a0144c89a279f9a832b47c6ed"
  },
  {
    "url": "guide/topics/drones.html",
    "revision": "0b90180ca6b70dc6389b8d06de5bd7b6"
  },
  {
    "url": "guide/topics/education.html",
    "revision": "1ef45a01546b5e11762550e1052c28b6"
  },
  {
    "url": "guide/topics/entrepreneurship.html",
    "revision": "11f469de1b3e18a27cec3c49792845d7"
  },
  {
    "url": "guide/topics/environment.html",
    "revision": "cfc0b468c4978fde0ff04dd970364bab"
  },
  {
    "url": "guide/topics/funding.html",
    "revision": "d330db3f25e9fff9b559811a6d6e4980"
  },
  {
    "url": "guide/topics/gear.html",
    "revision": "1714f1961d82de635300e73deb968604"
  },
  {
    "url": "guide/topics/gender.html",
    "revision": "d4af2538d077363d7a3bd1e2a7bcb9c4"
  },
  {
    "url": "guide/topics/girls.html",
    "revision": "4d0ee180134d67084786896654420df3"
  },
  {
    "url": "guide/topics/guides-and-reviews.html",
    "revision": "8b23f16b04aaf7de8cd675b2d7865f4d"
  },
  {
    "url": "guide/topics/health.html",
    "revision": "27e3d5bb0a2fd722c18b65a0332afc65"
  },
  {
    "url": "guide/topics/images.html",
    "revision": "501d77901a1799d847584ca56ed51334"
  },
  {
    "url": "guide/topics/internet-safety.html",
    "revision": "4618f5def7d01e2cd4287ff6b85f9d5a"
  },
  {
    "url": "guide/topics/language.html",
    "revision": "a516914979852c0c22fa73da16484a8d"
  },
  {
    "url": "guide/topics/lessons.html",
    "revision": "6301b13614e50d0276730ec89dd6ac75"
  },
  {
    "url": "guide/topics/library.html",
    "revision": "5401ca5a9f6bddfaa8865f25cb7a828e"
  },
  {
    "url": "guide/topics/make.html",
    "revision": "fea09d1809dde8e5ef00197be13610e4"
  },
  {
    "url": "guide/topics/mapping.html",
    "revision": "cf0cb4c71263b1984e36a7e66f08f329"
  },
  {
    "url": "guide/topics/mobile.html",
    "revision": "3ac0dfcc34b7fb7632fd3543c544e6bb"
  },
  {
    "url": "guide/topics/monitoring-and-evaluation.html",
    "revision": "dbfad0b0e1836be93e3cf7662ad9395e"
  },
  {
    "url": "guide/topics/networks.html",
    "revision": "9213a7745c6da358eb9e6bbf472e4b95"
  },
  {
    "url": "guide/topics/offline.html",
    "revision": "af859fe4876fbf2e56cb52cb77d42588"
  },
  {
    "url": "guide/topics/organization.html",
    "revision": "5558ea188d724a3ba7c7814693d12910"
  },
  {
    "url": "guide/topics/photography.html",
    "revision": "f21a4452e032c09ab1a2266d910a3818"
  },
  {
    "url": "guide/topics/privacy.html",
    "revision": "e1304f850117efdc157a5b0f9bc987c5"
  },
  {
    "url": "guide/topics/productivity.html",
    "revision": "0330681927a12e21e635199fd0b56171"
  },
  {
    "url": "guide/topics/programming.html",
    "revision": "5b436cf600f5d5d1d2adfdd0fb35f789"
  },
  {
    "url": "guide/topics/radio.html",
    "revision": "8cfc68e0ba9e4bd4e9c6116d2d7100e6"
  },
  {
    "url": "guide/topics/repair.html",
    "revision": "6884e671a397203931e6870e2ead084a"
  },
  {
    "url": "guide/topics/social-media.html",
    "revision": "c2b152bd6657a9845d14282756890e09"
  },
  {
    "url": "guide/topics/software.html",
    "revision": "3cc91415b8fa0f91151f60390a5ac31a"
  },
  {
    "url": "guide/topics/stem.html",
    "revision": "cf499d1ef1436efc51d474997949f2d3"
  },
  {
    "url": "guide/topics/stock.html",
    "revision": "d8407fbee9f1243958f03df3a42d7cd3"
  },
  {
    "url": "guide/topics/storytelling.html",
    "revision": "cd2304e916849991a4efdd78b7e968d8"
  },
  {
    "url": "guide/topics/testing.html",
    "revision": "dff5f9ced6276329a63e1269846191ca"
  },
  {
    "url": "guide/topics/video.html",
    "revision": "4788f83e6e99aa68d727aca77aab1077"
  },
  {
    "url": "guide/topics/women.html",
    "revision": "3b61c5cc69d49510626a08b825285542"
  },
  {
    "url": "guide/topics/writing.html",
    "revision": "06442d91eff7bc65becad729a50537b5"
  },
  {
    "url": "guide/topics/youth.html",
    "revision": "2e789f952e3eeff8a4b2603f75c398c2"
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
    "revision": "29a3da0a164e5de675334c373b32d1d3"
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
