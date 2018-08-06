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
    "revision": "b349493a4e58f4681e5f1a8dfb252707"
  },
  {
    "url": "assets/css/0.styles.1bb01cfe.css",
    "revision": "7501cef65f4fb6e7fb5a87a0ce784a65"
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
    "url": "assets/js/10.4b9dcf8b.js",
    "revision": "1a7835c230061fb4503bc9acabc8f4e7"
  },
  {
    "url": "assets/js/11.9ba52b78.js",
    "revision": "4e1483b81082afa26bebadc7cbc6ecad"
  },
  {
    "url": "assets/js/12.7433bc68.js",
    "revision": "b727dfb0302e9b1482478ae3e03aecc8"
  },
  {
    "url": "assets/js/13.31aa5aff.js",
    "revision": "14d9497ece427a700f1423fb2e6a55a6"
  },
  {
    "url": "assets/js/14.489e3db0.js",
    "revision": "6483a68c1e512a29703f051f70a4eb2c"
  },
  {
    "url": "assets/js/15.f6465fe3.js",
    "revision": "79d9e574e28adab484999d92b5b0cb8e"
  },
  {
    "url": "assets/js/16.eb2cdd85.js",
    "revision": "226208d108c75eb51de7fcf4e49dc3f8"
  },
  {
    "url": "assets/js/17.657a177c.js",
    "revision": "96db5d67821c2ac041a046e2236be457"
  },
  {
    "url": "assets/js/18.460284a0.js",
    "revision": "32b59994576c84db9528ef2a3f238989"
  },
  {
    "url": "assets/js/19.be44b942.js",
    "revision": "cc398ef1c6dc44a4416ef2bfab0f5fc4"
  },
  {
    "url": "assets/js/2.82409067.js",
    "revision": "41c6fc7f5adb79c3e4f4dbf9cf78f78a"
  },
  {
    "url": "assets/js/20.29e75c96.js",
    "revision": "c74e87179f7caa2c82e8fe6d407760df"
  },
  {
    "url": "assets/js/21.0d9b54ce.js",
    "revision": "9b066db4c45e2596eca4274ae7ff1801"
  },
  {
    "url": "assets/js/22.852b1309.js",
    "revision": "119c7d2c9cd4c7af2faf528f85371ee5"
  },
  {
    "url": "assets/js/23.ef300a79.js",
    "revision": "25b52ff94c40461f4c6909af2dda4c22"
  },
  {
    "url": "assets/js/24.75b168bc.js",
    "revision": "5cc54b6d2d5a00a3c57b1e1fdd2c5f5f"
  },
  {
    "url": "assets/js/25.2665f868.js",
    "revision": "c52971fc978285b5421f67b8ed90c80a"
  },
  {
    "url": "assets/js/26.829c2397.js",
    "revision": "123a2b3826e14873818e96c2213b8828"
  },
  {
    "url": "assets/js/27.add84fc5.js",
    "revision": "b4e141323eec4bd30f1de353734bf539"
  },
  {
    "url": "assets/js/28.4fc0df11.js",
    "revision": "0c51aa6c459e4412f8e75972c7a9cc99"
  },
  {
    "url": "assets/js/29.1959a9f4.js",
    "revision": "751725b87213079771b767d6313555dc"
  },
  {
    "url": "assets/js/3.3cf1426d.js",
    "revision": "5b109c6c5d7a0fbda1713bf8ba05a401"
  },
  {
    "url": "assets/js/30.3b19af73.js",
    "revision": "c1396edf50244539386ea98d0b74f35c"
  },
  {
    "url": "assets/js/31.7397101f.js",
    "revision": "0cd226eab746f0cadac8627adcb8e1f1"
  },
  {
    "url": "assets/js/32.554d2ba3.js",
    "revision": "76593e779d87b0db55703eab6a6ebc58"
  },
  {
    "url": "assets/js/33.e1e5cd6e.js",
    "revision": "50119641b6daa8590c6f9fbfa81fd478"
  },
  {
    "url": "assets/js/34.9a2e550d.js",
    "revision": "cea7d93b56c82a5c6e49b8543dcd1505"
  },
  {
    "url": "assets/js/35.1cba2d63.js",
    "revision": "14793dd4c59dda8797ba6f696b10f3cd"
  },
  {
    "url": "assets/js/36.b2de230f.js",
    "revision": "d6cc4c0ea9fb9e55494df743d933b311"
  },
  {
    "url": "assets/js/37.211bb520.js",
    "revision": "90a0d9ecf30b8dc9f420d25ad13889e1"
  },
  {
    "url": "assets/js/38.7d062c9d.js",
    "revision": "0eb55591166220a448be234d5d34dc61"
  },
  {
    "url": "assets/js/39.e5287764.js",
    "revision": "13cd6e9ea25c059077c6ac635284c8fa"
  },
  {
    "url": "assets/js/4.54520988.js",
    "revision": "3b016d3ca731f10f4992399a1181d4f5"
  },
  {
    "url": "assets/js/40.dfa83ed0.js",
    "revision": "84415ca9a0f67a3313d32fce88d2cbef"
  },
  {
    "url": "assets/js/41.0a34fcdc.js",
    "revision": "3ec4c97aa2a91a2bde6a7a2b5e414425"
  },
  {
    "url": "assets/js/42.023db665.js",
    "revision": "e5f101207a288afb7e09594fc0f695bc"
  },
  {
    "url": "assets/js/43.6f941e1e.js",
    "revision": "89ae064805992dece139214b93b2dad4"
  },
  {
    "url": "assets/js/44.1d4e2d80.js",
    "revision": "d2604cc2402a195521a25c6ef806ed66"
  },
  {
    "url": "assets/js/45.7ccf65a8.js",
    "revision": "85fb6dcbfdba1b0d520b876a73c30053"
  },
  {
    "url": "assets/js/46.674f5ac6.js",
    "revision": "1277b467a66390cf9de6f8470db4af99"
  },
  {
    "url": "assets/js/47.9bbc31dd.js",
    "revision": "dd78147a5018885128c1ff44f762f20a"
  },
  {
    "url": "assets/js/48.1a3dc22d.js",
    "revision": "3fb90231ae0f6b159eb5468eae4f6ab0"
  },
  {
    "url": "assets/js/49.bef79ed3.js",
    "revision": "0947c721906ca903e6ec09ca218b3f3e"
  },
  {
    "url": "assets/js/5.08eaf2e5.js",
    "revision": "3f154861bdb8e30b17bdcf72e4cc06e1"
  },
  {
    "url": "assets/js/50.c6894ba1.js",
    "revision": "a61ba9bde1759f6c0e7e55381ded85ae"
  },
  {
    "url": "assets/js/51.52ed8ee4.js",
    "revision": "5acbd3e0b5444a4832fd5e031c485178"
  },
  {
    "url": "assets/js/52.3207da20.js",
    "revision": "b986bbdfb6479934f0a2c7e5e2aaae54"
  },
  {
    "url": "assets/js/53.390b0e45.js",
    "revision": "3128c1a9ca4e83af80df3f3e95259a75"
  },
  {
    "url": "assets/js/54.de25bffe.js",
    "revision": "cf746b491122872a89dba7a18c000837"
  },
  {
    "url": "assets/js/55.7629e628.js",
    "revision": "7cee549658281faebdecb3d0518ff2e4"
  },
  {
    "url": "assets/js/56.4d0b3016.js",
    "revision": "1a658bda3fd2d3e7587430b2c025a309"
  },
  {
    "url": "assets/js/57.86226a0f.js",
    "revision": "73dcd62c8deb1ff276c425c3500c3017"
  },
  {
    "url": "assets/js/58.7e42adb3.js",
    "revision": "39f3050650cbd819c6cbb8bc08e18f4b"
  },
  {
    "url": "assets/js/59.cabf26f6.js",
    "revision": "7abea48acca9426e560c9c26ece964b1"
  },
  {
    "url": "assets/js/6.b709a3db.js",
    "revision": "e4f86a85b67e0ff83c472f87dc5975a9"
  },
  {
    "url": "assets/js/60.5eb2f380.js",
    "revision": "c2ab235d3ff0df182d78182686359b07"
  },
  {
    "url": "assets/js/61.24be6791.js",
    "revision": "28bd3a240c583797eeb1b89e2eb3f19b"
  },
  {
    "url": "assets/js/62.4659e96a.js",
    "revision": "dba5d5d7fe4dfcda7f66888876aa6bdb"
  },
  {
    "url": "assets/js/63.14e46424.js",
    "revision": "553167ff7a3487b58475e23fb677d262"
  },
  {
    "url": "assets/js/64.e809c095.js",
    "revision": "159ecf2f67961a73285b9edf086d3801"
  },
  {
    "url": "assets/js/65.131f350c.js",
    "revision": "6eae1fc355ad1cc770ce34ca497feabb"
  },
  {
    "url": "assets/js/66.b498b7cd.js",
    "revision": "c98a1ec567d56064040bc09b022b69a1"
  },
  {
    "url": "assets/js/67.dd5ae83e.js",
    "revision": "42c3d89527f9528ea6482c8759472e92"
  },
  {
    "url": "assets/js/68.ccdf7969.js",
    "revision": "13ca038d743c3d08cc89a01c37878bc4"
  },
  {
    "url": "assets/js/69.e915c3e7.js",
    "revision": "0b8950deeb72740653d3da86e77eda89"
  },
  {
    "url": "assets/js/7.0b8b5508.js",
    "revision": "022188e78fe3c1fe9887eecbe0762794"
  },
  {
    "url": "assets/js/70.67632266.js",
    "revision": "c5a71faa08e354ff7be5b8a4296851a2"
  },
  {
    "url": "assets/js/71.fc37220e.js",
    "revision": "3777cbc4c5f96b409d00bbd9d4f8a190"
  },
  {
    "url": "assets/js/72.d05602af.js",
    "revision": "8e787484832cf217dafe2dd5e7f8f5ee"
  },
  {
    "url": "assets/js/73.356cf694.js",
    "revision": "47cc2b64653078af73909b3d4cee3729"
  },
  {
    "url": "assets/js/74.89066e31.js",
    "revision": "490ffe129c741853d249a02358b7c58e"
  },
  {
    "url": "assets/js/75.e376a0a7.js",
    "revision": "2884988ae9789d6a7f603f94a1decfcc"
  },
  {
    "url": "assets/js/76.dd145200.js",
    "revision": "cbb7a3e2adba2406b2e8530dd6b7eed8"
  },
  {
    "url": "assets/js/8.e319f3e3.js",
    "revision": "a173b38d09aba754c322fc346a82d5f3"
  },
  {
    "url": "assets/js/9.9a67a113.js",
    "revision": "d7ba37edd8e9f8370b650048bafcb004"
  },
  {
    "url": "assets/js/app.e4d05093.js",
    "revision": "f481d03957ec5a10641fe30243a06aed"
  },
  {
    "url": "guide/about.html",
    "revision": "c7e50425c86227be88ed395a1570fd08"
  },
  {
    "url": "guide/basics/doing-ict4d.html",
    "revision": "a01459f0b0135e5dce4f7ee648400b5c"
  },
  {
    "url": "guide/basics/ict4d-blogs.html",
    "revision": "5ba320e3f6eee72c83d6c5db1256995b"
  },
  {
    "url": "guide/basics/ict4d-organizations.html",
    "revision": "acaa5b4e9454472263ef5c11aa8bd00e"
  },
  {
    "url": "guide/basics/ict4d-overview.html",
    "revision": "3ffddd8677a8bf87ed0a42f73ed1eacf"
  },
  {
    "url": "guide/basics/ict4d-sites.html",
    "revision": "8c1b649ff0693e2d87b106e0658ed6a5"
  },
  {
    "url": "guide/basics/sites.html",
    "revision": "b1b27f3536a3ccaede8bb2f42dab9cce"
  },
  {
    "url": "guide/contents.html",
    "revision": "8b416f68ddea7ba783d71c845e2b4065"
  },
  {
    "url": "guide/index.html",
    "revision": "3c8be8ba25363988326684d30f7acab7"
  },
  {
    "url": "guide/tools/accessories.html",
    "revision": "6856bedf6bc469ff1ed25db1be750f89"
  },
  {
    "url": "guide/tools/laptops-and-tablets.html",
    "revision": "e5ec9ae30a94b465b0cc6e7560a203df"
  },
  {
    "url": "guide/tools/mobiles.html",
    "revision": "3b8d7c8f4b77b7d2abb8ab34c7121024"
  },
  {
    "url": "guide/tools/other-devices.html",
    "revision": "4a1777151680c090287754321f5f961e"
  },
  {
    "url": "guide/tools/tools-introduction.html",
    "revision": "debd74cce8490d9f3051838633a5935d"
  },
  {
    "url": "guide/topics/academia.html",
    "revision": "2a4a98d8cb7d4f012b3d3c6559b8e453"
  },
  {
    "url": "guide/topics/advanced-software.html",
    "revision": "fdf2570cf921ba0bda458bcf8c7e801b"
  },
  {
    "url": "guide/topics/agriculture.html",
    "revision": "43637643bbd43008ab5edcf8bf0a230a"
  },
  {
    "url": "guide/topics/ai.html",
    "revision": "2aa45a2063dd5bbd83c474f3ee91b404"
  },
  {
    "url": "guide/topics/app.html",
    "revision": "920e800c0d00c0b9f37548acbe0cc72c"
  },
  {
    "url": "guide/topics/audio.html",
    "revision": "275af897f16b3b594d8b3449989393d9"
  },
  {
    "url": "guide/topics/catalog.html",
    "revision": "225ffb7b49190926c0973b9531fb3d35"
  },
  {
    "url": "guide/topics/children.html",
    "revision": "72305be1a131ba1e0222c269fea62318"
  },
  {
    "url": "guide/topics/collaboration.html",
    "revision": "9ff16307cf491d799704f0c5dd0dde0b"
  },
  {
    "url": "guide/topics/content.html",
    "revision": "e4f05b0ff0d4fdfca163b6904c451862"
  },
  {
    "url": "guide/topics/course.html",
    "revision": "88423ad1feeffd0a7bf1227fe9082e54"
  },
  {
    "url": "guide/topics/data-responsibility.html",
    "revision": "36ab11e17dfd156a55b5e9d2eb2787e7"
  },
  {
    "url": "guide/topics/data-visualization.html",
    "revision": "0850e61653b1e30ff9ecb02f7363a43f"
  },
  {
    "url": "guide/topics/data.html",
    "revision": "9c91f4f0a999175f351cc31c45f247b2"
  },
  {
    "url": "guide/topics/dataset.html",
    "revision": "f83b5785150649f055c3922451d65f83"
  },
  {
    "url": "guide/topics/design-thinking.html",
    "revision": "f811814fdf575b624e29a629f84be916"
  },
  {
    "url": "guide/topics/design.html",
    "revision": "f406e78c472028cec925c8af16108495"
  },
  {
    "url": "guide/topics/developer.html",
    "revision": "7955128f45ba1afa07a048d884c8bd72"
  },
  {
    "url": "guide/topics/digital-literacy.html",
    "revision": "286ce55be520eb259f9d43453fbdcb33"
  },
  {
    "url": "guide/topics/diversity.html",
    "revision": "87cc7a48fba0f134745b99c280e8f1ab"
  },
  {
    "url": "guide/topics/drones.html",
    "revision": "9cb57360b3a355f5753cd7abf48b3dde"
  },
  {
    "url": "guide/topics/education.html",
    "revision": "122b9cbc5a1315377002f7ce3295e48d"
  },
  {
    "url": "guide/topics/entrepreneurship.html",
    "revision": "122f7e0b2fb2681baf0ff865009c7ccb"
  },
  {
    "url": "guide/topics/environment.html",
    "revision": "af2af89239b39f62fbc39c42196ae94f"
  },
  {
    "url": "guide/topics/funding.html",
    "revision": "2522992811d477ca6d8f15cefed277d3"
  },
  {
    "url": "guide/topics/gear.html",
    "revision": "526cb3899fd60ddb1629645c9fae6152"
  },
  {
    "url": "guide/topics/gender.html",
    "revision": "00c96e26c669259e8f2fbcafca94131d"
  },
  {
    "url": "guide/topics/girls.html",
    "revision": "437f5b88f70c3a4ed42e31a95ac22484"
  },
  {
    "url": "guide/topics/guides-and-reviews.html",
    "revision": "f055848c609e0464bf40a803de0850c5"
  },
  {
    "url": "guide/topics/health.html",
    "revision": "ee4699d19cb6f3e304a6f986f0658056"
  },
  {
    "url": "guide/topics/images.html",
    "revision": "bbb8554355dad7c9f8e87be31e630c07"
  },
  {
    "url": "guide/topics/internet-safety.html",
    "revision": "dd7f8c2317f2a48a3d4bdbafdec78a69"
  },
  {
    "url": "guide/topics/language.html",
    "revision": "774295605068e17d8120d28a8123613b"
  },
  {
    "url": "guide/topics/lessons.html",
    "revision": "8efdfe5204d1f29cad269455a9b49672"
  },
  {
    "url": "guide/topics/library.html",
    "revision": "0013a9bc4c95146dae227d0f103d7e42"
  },
  {
    "url": "guide/topics/make.html",
    "revision": "ca1324c67e29c05ec91f109432dcc8d2"
  },
  {
    "url": "guide/topics/mapping.html",
    "revision": "c2fdddf0054e34656e8d123bd9b2abcf"
  },
  {
    "url": "guide/topics/mobile.html",
    "revision": "07a94a764b67a522c79ef0ffb068cc55"
  },
  {
    "url": "guide/topics/monitoring-and-evaluation.html",
    "revision": "4c8e440e2d0ce5e553f602e2aa92d947"
  },
  {
    "url": "guide/topics/networks.html",
    "revision": "621e33062af4ebf437f6c9596e4d1cc0"
  },
  {
    "url": "guide/topics/offline.html",
    "revision": "ef949d65d804583b3843f85b899b097d"
  },
  {
    "url": "guide/topics/organization.html",
    "revision": "c1a2f62ca0267e8bdf1a4a9652702e46"
  },
  {
    "url": "guide/topics/photography.html",
    "revision": "b01d8956f396753e8787328be8cf46ba"
  },
  {
    "url": "guide/topics/privacy.html",
    "revision": "757560c4af2ebe4f0f3bef7ef261ca77"
  },
  {
    "url": "guide/topics/productivity.html",
    "revision": "6f7285fd8652224718365f6e0ea3ab7b"
  },
  {
    "url": "guide/topics/programming.html",
    "revision": "335e3f85a5b35605ded51e385cc347fc"
  },
  {
    "url": "guide/topics/radio.html",
    "revision": "dc3d0126785c556ce30b4cf3e8283bd1"
  },
  {
    "url": "guide/topics/repair.html",
    "revision": "cd1a08d7866f6c9ad310a38da111396e"
  },
  {
    "url": "guide/topics/social-media.html",
    "revision": "ef9247e9a4e32ae9d8b3af337eded0fe"
  },
  {
    "url": "guide/topics/software.html",
    "revision": "95d9debdca7451054def28b1d7a23f1f"
  },
  {
    "url": "guide/topics/stem.html",
    "revision": "ab6a3b2da0114523756d7abe5b6b38dc"
  },
  {
    "url": "guide/topics/stock.html",
    "revision": "68b564c6f3f91549181dcbc49f152435"
  },
  {
    "url": "guide/topics/storytelling.html",
    "revision": "c3b61303688fa8967aff75b5e15ca020"
  },
  {
    "url": "guide/topics/testing.html",
    "revision": "9ef3731d40f908244de6f5a9724ace86"
  },
  {
    "url": "guide/topics/video.html",
    "revision": "693934eb3c6dbc1e4212e29434233caa"
  },
  {
    "url": "guide/topics/women.html",
    "revision": "644e553a36d4cf6aeb8cfa2ebbf9c1e5"
  },
  {
    "url": "guide/topics/writing.html",
    "revision": "4150b7e6004baa5478f8b4e645943949"
  },
  {
    "url": "guide/topics/youth.html",
    "revision": "1f0cf2ea6c3cfcb5f8a2027861744462"
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
    "revision": "dd77e23fe190ed8dd926c7504a52dbbf"
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
