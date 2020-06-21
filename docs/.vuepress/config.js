module.exports = {
  title: 'Tech4Good Field Guide',
  description: 'Technology tools for everyone',
  dest: '../guide',
  base: '/guide/',
  ga: 'UA-106565467-2',
  serviceWorker: true,
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#1c5c9e' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/mstile-150x150.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['meta', { property: 'og:title', content: 'ICT4D Guide' }],
    ['meta', { property: 'og:description', content: 'Technology tools for everyone' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://tech4good.org' }],
    ['meta', { property: 'og:image', content: 'https://tech4good.org/logo.png' }]
  ],
  themeConfig: {
    displayAllHeaders: false, // Default: false
    repo: 'gabrielkrieshok/tech4goodguide',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: 'Contribute',
    // Optional options for generating "Edit this page" link
    // if your docs are in a different repo from your main project:
    docsRepo: 'gabrielkrieshok/tech4goodguide',
    // if your docs are not at the root of the repo:
    docsDir: 'docs',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'master',
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Help me improve this page!',
    lastUpdated: 'Last Updated', // string | boolean,
    sidebar: [
      {
        title: 'Introduction',
        collapsable: true,
        children: [
        ]
      },
      {
        title: 'Basics',
        children: [
          '/basics/ict4d-overview.md',
          '/basics/doing-ict4d.md',
          '/basics/ict4d-sites.md',
          '/basics/ict4d-blogs.md',
          '/basics/ict4d-organizations.md'
        ]
      },
      {
        title: 'Tools',
        children: [
          '/tools/tools-introduction.md',
          '/tools/laptops-and-tablets.md',
          '/tools/mobiles.md',
          '/tools/other-devices.md',
          '/tools/accessories.md'
        ]
      },
      {
        title: 'Topics',
        children: [
          '/topics/academia.md',
          '/topics/advanced-software.md',
          '/topics/agriculture.md',
          '/topics/ai.md',
          '/topics/app.md',
          '/topics/audio.md',
          '/topics/catalog.md',
          '/topics/children.md',
          '/topics/collaboration.md',
          '/topics/content.md',
          '/topics/course.md',
          '/topics/data.md',
          '/topics/data-responsibility.md',
          '/topics/data-visualization.md',
          '/topics/dataset.md',
          '/topics/design.md',
          '/topics/design-thinking.md',
          '/topics/developer.md',
          '/topics/digital-literacy.md',
          '/topics/diversity.md',
          '/topics/drones.md',
          '/topics/education.md',
          '/topics/entrepreneurship.md',
          '/topics/environment.md',
          '/topics/funding.md',
          '/topics/gear.md',
          '/topics/girls.md',
          '/topics/guides-and-reviews.md',
          '/topics/health.md',
          '/topics/images.md',
          '/topics/internet-safety.md',
          '/topics/language.md',
          '/topics/lessons.md',
          '/topics/library.md',
          '/topics/make.md',
          '/topics/mapping.md',
          '/topics/mobile.md',
          '/topics/monitoring-and-evaluation.md',
          '/topics/networks.md',
          '/topics/offline.md',
          '/topics/organization.md',
          '/topics/photography.md',
          '/topics/privacy.md',
          '/topics/productivity.md',
          '/topics/programming.md',
          '/topics/radio.md',
          '/topics/repair.md',
          '/topics/social-media.md',
          '/topics/software.md',
          '/topics/stem.md',
          '/topics/stock.md',
          '/topics/storytelling.md',
          '/topics/testing.md',
          '/topics/video.md',
          '/topics/women.md',
          '/topics/writing.md',
          '/topics/youth.md'
        ]
      }
    ],
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/' },
    ]
  }
}



