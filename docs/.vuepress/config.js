module.exports = {
  title: 'ICT4D Guide',
  description: 'Technology Tools for Everyone',
  // base: '/gabrielkrieshok/ict4dguide/',
  ga: 'UA-106565467-2',
  serviceWorker: true,
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/mstile-150x150.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  themeConfig: {
    displayAllHeaders: false, // Default: false
    repo: 'gabrielkrieshok/ict4dguide',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: 'Contribute',
    // Optional options for generating "Edit this page" link
    // if your docs are in a different repo from your main project:
    docsRepo: 'gabrielkrieshok/ict4dguide',
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
        collapsable: false,
        children: [
          '/guide/',
          '/guide/contents',
          '/guide/about'
        ]
      },
      {
        title: 'Basics',
        children: [
          '/guide/basics/ict4d-overview.md',
          '/guide/basics/doing-ict4d.md',
          '/guide/basics/ict4d-sites.md',
          '/guide/basics/ict4d-blogs.md',
          '/guide/basics/ict4d-organizations.md'
        ]
      },
      {
        title: 'Tools',
        children: [
          '/guide/tools/tools-introduction.md',
          '/guide/tools/laptops-and-tablets.md',
          '/guide/tools/mobiles.md',
          '/guide/tools/other-devices.md',
          '/guide/tools/accessories.md'
        ]
      },
      {
        title: 'Topics',
        children: [
          '/guide/topics/academia.md',
          '/guide/topics/advanced-software.md',
          '/guide/topics/agriculture.md',
          '/guide/topics/ai.md',
          '/guide/topics/app.md',
          '/guide/topics/audio.md',
          '/guide/topics/catalog.md',
          '/guide/topics/children.md',
          '/guide/topics/collaboration.md',
          '/guide/topics/content.md',
          '/guide/topics/course.md',
          '/guide/topics/data.md',
          '/guide/topics/data-responsibility.md',
          '/guide/topics/data-visualization.md',
          '/guide/topics/dataset.md',
          '/guide/topics/design.md',
          '/guide/topics/design-thinking.md',
          '/guide/topics/developer.md',
          '/guide/topics/digital-literacy.md',
          '/guide/topics/diversity.md',
          '/guide/topics/drones.md',
          '/guide/topics/education.md',
          '/guide/topics/entrepreneurship.md',
          '/guide/topics/environment.md',
          '/guide/topics/funding.md',
          '/guide/topics/gear.md',
          '/guide/topics/girls.md',
          '/guide/topics/guides-and-reviews.md',
          '/guide/topics/health.md',
          '/guide/topics/images.md',
          '/guide/topics/internet-safety.md',
          '/guide/topics/language.md',
          '/guide/topics/lessons.md',
          '/guide/topics/library.md',
          '/guide/topics/make.md',
          '/guide/topics/mapping.md',
          '/guide/topics/mobile.md',
          '/guide/topics/monitoring-and-evaluation.md',
          '/guide/topics/networks.md',
          '/guide/topics/offline.md',
          '/guide/topics/organization.md',
          '/guide/topics/photography.md',
          '/guide/topics/privacy.md',
          '/guide/topics/productivity.md',
          '/guide/topics/programming.md',
          '/guide/topics/radio.md',
          '/guide/topics/repair.md',
          '/guide/topics/social-media.md',
          '/guide/topics/software.md',
          '/guide/topics/stem.md',
          '/guide/topics/stock.md',
          '/guide/topics/storytelling.md',
          '/guide/topics/testing.md',
          '/guide/topics/video.md',
          '/guide/topics/women.md',
          '/guide/topics/writing.md',
          '/guide/topics/youth.md'
        ]
      }
    ],
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
    ]
  }
}



