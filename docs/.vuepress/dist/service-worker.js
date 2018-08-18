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
    "revision": "31fe6618cdd586220b17e0eaab4d5cf4"
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
    "url": "assets/js/32.afcad8f2.js",
    "revision": "f98faa63530e4c77f5419e63fb303b95"
  },
  {
    "url": "assets/js/33.e1e5cd6e.js",
    "revision": "50119641b6daa8590c6f9fbfa81fd478"
  },
  {
    "url": "assets/js/34.324799ac.js",
    "revision": "9e4370568550eac6727379c4d1eccdcb"
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
    "url": "assets/js/40.495fb202.js",
    "revision": "da3b827787de84ef3fabbc3d0153b0ec"
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
    "url": "assets/js/43.df821ca2.js",
    "revision": "41d2bc2c87290ce42d43ab6f46e23298"
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
    "url": "assets/js/49.56d05151.js",
    "revision": "efe830c6329b90b4c39d93f66c08e61c"
  },
  {
    "url": "assets/js/5.bcc57d64.js",
    "revision": "c50e1415bd26172a137677bc72616cbe"
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
    "url": "assets/js/58.4f2b81ae.js",
    "revision": "101088b2457259e8dc6a39eff7d1b017"
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
    "url": "assets/js/60.f4dd10a6.js",
    "revision": "24c42d6900e38f7610464d2660df07f0"
  },
  {
    "url": "assets/js/61.24be6791.js",
    "revision": "28bd3a240c583797eeb1b89e2eb3f19b"
  },
  {
    "url": "assets/js/62.21a92142.js",
    "revision": "507a5aad5c55ee1648810c1e8e91de86"
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
    "url": "assets/js/68.5a006bba.js",
    "revision": "fc3f5059e23a91daf8a7d5b3d9c76687"
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
    "url": "assets/js/9.f5ecc704.js",
    "revision": "629f2d958ad418dd3154783add82520e"
  },
  {
    "url": "assets/js/app.2d89450e.js",
    "revision": "9776b787fee1034a38efe38df67ea889"
  },
  {
    "url": "guide/about.html",
    "revision": "82845d24fffc94b23df22849249c3bef"
  },
  {
    "url": "guide/basics/doing-ict4d.html",
    "revision": "917967b46d1810986f9b6ee52e86d9bf"
  },
  {
    "url": "guide/basics/ict4d-blogs.html",
    "revision": "cd8543bbdb69255077a537c4d2cd1e38"
  },
  {
    "url": "guide/basics/ict4d-organizations.html",
    "revision": "6b5114f41f8cd9252f4e6eb653c17ef6"
  },
  {
    "url": "guide/basics/ict4d-overview.html",
    "revision": "8a403d425a20958663292a4143028ea7"
  },
  {
    "url": "guide/basics/ict4d-sites.html",
    "revision": "1db4bd392fe577eb63a466eab46954df"
  },
  {
    "url": "guide/basics/sites.html",
    "revision": "8eedb165c23c74b7a99ac43e1efc0b46"
  },
  {
    "url": "guide/contents.html",
    "revision": "947939d1d981db634ff0a98ad86b5d23"
  },
  {
    "url": "guide/index.html",
    "revision": "adf3c2c1b63d941c3b6fd9c798303b84"
  },
  {
    "url": "guide/tools/accessories.html",
    "revision": "602e36c5f755c9ee7db3c4ea34969efb"
  },
  {
    "url": "guide/tools/laptops-and-tablets.html",
    "revision": "d884ec14d31f887303e8ec1bf66e39ed"
  },
  {
    "url": "guide/tools/mobiles.html",
    "revision": "9f317667abb186433803ff381a577a0c"
  },
  {
    "url": "guide/tools/other-devices.html",
    "revision": "1f3d1820e26cf0f2935604bad5f1714c"
  },
  {
    "url": "guide/tools/tools-introduction.html",
    "revision": "3172833b88bdc0b97e34150fce082642"
  },
  {
    "url": "guide/topics/academia.html",
    "revision": "3113d8444aeab519faf8ed0ff8bab676"
  },
  {
    "url": "guide/topics/advanced-software.html",
    "revision": "fd2a925002e83982b870c0944314539c"
  },
  {
    "url": "guide/topics/agriculture.html",
    "revision": "e2a8e4d9ef19edef3e6bc1638825000a"
  },
  {
    "url": "guide/topics/ai.html",
    "revision": "309c8e333064fe62bd51f893bb58024b"
  },
  {
    "url": "guide/topics/app.html",
    "revision": "56cc924a85b6bf8764a6ff4410dff4c5"
  },
  {
    "url": "guide/topics/audio.html",
    "revision": "2bb35c594b55567d438cb2017247a115"
  },
  {
    "url": "guide/topics/catalog.html",
    "revision": "8df6bfc4328030a151780c9cd2447d4f"
  },
  {
    "url": "guide/topics/children.html",
    "revision": "d9a78dae6bebcc3adfccf36bd9a53ec7"
  },
  {
    "url": "guide/topics/collaboration.html",
    "revision": "c8ab2768839674b6d66f23b550b8332f"
  },
  {
    "url": "guide/topics/content.html",
    "revision": "f0c8f829339e6fb1e11dd39206d4f939"
  },
  {
    "url": "guide/topics/course.html",
    "revision": "cef73163d6272cb58e063c985ec85705"
  },
  {
    "url": "guide/topics/data-responsibility.html",
    "revision": "ff76468159cc66c25b12a4622ed5a259"
  },
  {
    "url": "guide/topics/data-visualization.html",
    "revision": "96008c3e55737fcff9dd8ff97430421d"
  },
  {
    "url": "guide/topics/data.html",
    "revision": "a945708fe59fa5a58458c0c2e68363c3"
  },
  {
    "url": "guide/topics/dataset.html",
    "revision": "66738f4ce7bc86a7b04084a6add82761"
  },
  {
    "url": "guide/topics/design-thinking.html",
    "revision": "016160a28ecacf67040978dd2a6cd5d1"
  },
  {
    "url": "guide/topics/design.html",
    "revision": "752957a63180d3322350a7d98227060b"
  },
  {
    "url": "guide/topics/developer.html",
    "revision": "39de68932161dcb2f71b321d61a8ed3e"
  },
  {
    "url": "guide/topics/digital-literacy.html",
    "revision": "5aae0fb8eb1d4a1d93fbb2ac2b1c6663"
  },
  {
    "url": "guide/topics/diversity.html",
    "revision": "f3eb5bd82963d545ef7ed6da726b0423"
  },
  {
    "url": "guide/topics/drones.html",
    "revision": "e4d3d87bea94cb3c1040d299ee7a6be6"
  },
  {
    "url": "guide/topics/education.html",
    "revision": "e0710710450555fbf4fe262e40d7ce26"
  },
  {
    "url": "guide/topics/entrepreneurship.html",
    "revision": "2b132fea3d960b1f1029c4725fcb3466"
  },
  {
    "url": "guide/topics/environment.html",
    "revision": "281ac33152b1ba35876fa0677f63f1d7"
  },
  {
    "url": "guide/topics/funding.html",
    "revision": "02c9a771aa14f3f21585fb0b5a557a63"
  },
  {
    "url": "guide/topics/gear.html",
    "revision": "40f1bb1a0c23a96a5e0dd81228f6d6ed"
  },
  {
    "url": "guide/topics/gender.html",
    "revision": "4fe808862fceeec5f214b6b8b8447348"
  },
  {
    "url": "guide/topics/girls.html",
    "revision": "c969d606e003e02ae87dadbacc6c55fe"
  },
  {
    "url": "guide/topics/guides-and-reviews.html",
    "revision": "dddb1785c45a3c54305e87951ce39629"
  },
  {
    "url": "guide/topics/health.html",
    "revision": "f4562db588954163ec8af1eebf91f83f"
  },
  {
    "url": "guide/topics/images.html",
    "revision": "ccd5a41b8801e4e6316b336bdc48cd77"
  },
  {
    "url": "guide/topics/internet-safety.html",
    "revision": "37148f0a983859e7fff4badcdc0f2c23"
  },
  {
    "url": "guide/topics/language.html",
    "revision": "8960070d79cf04dedb99e68fb7c645f3"
  },
  {
    "url": "guide/topics/lessons.html",
    "revision": "ab7e4970e2de9eebf503417503bb0b87"
  },
  {
    "url": "guide/topics/library.html",
    "revision": "310162c46c4ecd380ffc9b0fd5fceec3"
  },
  {
    "url": "guide/topics/make.html",
    "revision": "592fc68031064824d211089117606415"
  },
  {
    "url": "guide/topics/mapping.html",
    "revision": "65784735f17d0d0c71ec7cd856782b30"
  },
  {
    "url": "guide/topics/mobile.html",
    "revision": "53cbce9df2b419964568feff5d80a7bc"
  },
  {
    "url": "guide/topics/monitoring-and-evaluation.html",
    "revision": "8a5e8ff42cdf5141e6f8d40fe588f508"
  },
  {
    "url": "guide/topics/networks.html",
    "revision": "122f091372aa901e47445b82955bc64e"
  },
  {
    "url": "guide/topics/offline.html",
    "revision": "a019210cd8eabe03a0c73db8efa437b0"
  },
  {
    "url": "guide/topics/organization.html",
    "revision": "50324546f0ebc499aad07fd1860efe21"
  },
  {
    "url": "guide/topics/photography.html",
    "revision": "5425de4a763752cbcc95efd5efe2b531"
  },
  {
    "url": "guide/topics/privacy.html",
    "revision": "998950d15db69b35eca1ba2170fdac2c"
  },
  {
    "url": "guide/topics/productivity.html",
    "revision": "25424a56248852cc05c0484e89fb2093"
  },
  {
    "url": "guide/topics/programming.html",
    "revision": "55aa8b3562ecef7d5b631f80d78c4d90"
  },
  {
    "url": "guide/topics/radio.html",
    "revision": "8367250e21ba40630b6c9d2fd2f46c75"
  },
  {
    "url": "guide/topics/repair.html",
    "revision": "46f4d88e02a6485163fc4b9d707d15fc"
  },
  {
    "url": "guide/topics/social-media.html",
    "revision": "ccedc6ef7447af53dd52a76fce97569d"
  },
  {
    "url": "guide/topics/software.html",
    "revision": "c8143416934dbd4b309ddb6bd4f92f92"
  },
  {
    "url": "guide/topics/stem.html",
    "revision": "cd818fbeba5b994de6e101f722728171"
  },
  {
    "url": "guide/topics/stock.html",
    "revision": "a62f70b8b566407f7aecacfe8d7ba432"
  },
  {
    "url": "guide/topics/storytelling.html",
    "revision": "5cc2cff1aa62dac11221e7ef43a06a0b"
  },
  {
    "url": "guide/topics/testing.html",
    "revision": "68988fdc04f5e912dcb254baf74cc835"
  },
  {
    "url": "guide/topics/video.html",
    "revision": "74201576b1cf0d91b1062a0f47702226"
  },
  {
    "url": "guide/topics/women.html",
    "revision": "6ce60eb2acdb9c7c43598697f7ef187f"
  },
  {
    "url": "guide/topics/writing.html",
    "revision": "6b2014c543b7a523a442502abfcbd437"
  },
  {
    "url": "guide/topics/youth.html",
    "revision": "d4d00aea001ec2349e35c78f3860517a"
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
    "revision": "cae7aca1b7b6a9e396aadd56679a9a21"
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
