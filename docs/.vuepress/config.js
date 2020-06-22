module.exports = {
  themeConfig: {
    logo: '/assets/img/logo.svg',
  },
  title: 'Open Tech4Good',
  description: 'An open guide to using Technology for Good',
  // dest: './guide/',
  // base: '/guide/', // for realz
  base: '', // // for development!
  ga: 'UA-106565467-2',
  serviceWorker: true,
  head: [
    ['link', { rel: 'icon', href: `/logo.svg` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#1c5c9e' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon.png' }],
    ['link', { rel: 'mask-icon', href: `/icons/safari-pinned-tab.svg`, color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/mstile-150x150.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['meta', { name: 'title', content: 'Open Tech4Good' }],
    ['meta', { name: 'description', content: 'An open guide to using Technology for Good.' }],
    ['meta', { property: 'og:title', content: 'Open Tech4Good' }],
    ['meta', { property: 'og:description', content: 'An open guide to using Technology for Good.' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://opentech4good.org' }],
    ['meta', { property: 'og:image', content: 'https://opentech4good.org/feature.png' }]
  ],
  themeConfig: {
    displayAllHeaders: false, // Default: false
    repo: 'gabrielkrieshok/open-tech4good',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    // Optional options for generating "Edit this page" link
    // if your docs are in a different repo from your main project:
    docsRepo: 'gabrielkrieshok/open-tech4good',
    // if your docs are not at the root of the repo:
    docsDir: 'docs',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'master',
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Help improve this page!',
    lastUpdated: 'Last Updated', // string | boolean,
    sidebar: [
      {
        title: 'Introduction',
        collapsable: false,
        sidebarDepth: 0,
        children: [
          '/introduction/why-a-tech4good-guide.md',
          '/introduction/who-this-guide-is-for.md',
        ]
      },
      {
        title: 'Basics',
        sidebarDepth: 0,
        collapsable: false,
        children: [
          '/basics/what-is-tech4good.md',
          '/basics/the-tech4good-context.md',
          '/basics/doing-tech4good.md',
          '/basics/tech4good-resources.md'
        ]
      },
      ['/basics/tech4good-resources', 'Tech4Good Resources'],
      ['/basics/tech4good-airtable', 'Tech4Good AirTable'],
      {
        title: 'Sectors',
        sidebarDepth: 0,
        children: [
          '/sectors/sectors-introduction.md',
          '/sectors/agriculture-and-environment.md',
          '/sectors/civil-society.md',
          '/sectors/education.md',
          '/sectors/entrepreneurship.md',
          '/sectors/global-health.md',
          '/sectors/humanitarian-response.md',
        ]
      },
      {
        title: 'Tools',
        sidebarDepth: 0,
        children: [
          '/tools/tools-introduction.md',
          '/tools/ai-and-machine-learning.md',
          '/tools/data-collection.md',
          '/tools/data-responsibility.md',
          '/tools/data-science.md',
          '/tools/data-visualization.md',
          '/tools/digital-identity.md',
          '/tools/gis-and-mapping.md',
          '/tools/learning.md',
          '/tools/media-and-communications.md',
          '/tools/mobile-services.md',
          '/tools/monitoring-and-evaluation.md',
          '/tools/other-areas.md'
        ]
      }
    ],
    nav: [
      { text: 'Tech4Good Field Guide', link: 'https://tech4goodguide.org' }
    ]
  }
}



