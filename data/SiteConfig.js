const config = {
  siteTitle: 'Ancestral Guidance',
  siteTitleShort: 'AG',
  siteTitleAlt: 'AG',
  siteLogo: '/logos/tania.jpg',
  siteUrl: 'https://ancestralguidance.com',
  repo: 'https://github.com/niseko/AncestralGuidance.com',
  pathPrefix: '',
  dateFromFormat: 'YYYY-MM-DD',
  dateFormat: 'MMMM Do, YYYY',
  siteDescription: 'Guides and Tutorials around Restoration Shamans in World of Warcraft',
  siteRss: '/rss.xml',
  googleAnalyticsID: 'UA-111570807-1',
  postDefaultCategoryID: 'Games',
  userName: 'niseko',
  userEmail: 'TODO',
  userTwitter: 'shamansag',
  userLocation: 'Chicago, IL',
  userAvatar: 'https://api.adorable.io/avatars/150/test.png',
  userDescription: 'TODO.',
  menuLinks: [
    {
      name: 'Blog',
      link: '/',
    },
    {
      name: 'Articles',
      link: '/blog/',
    },
    {
      name: 'About',
      link: '/',
    },
  ],
  themeColor: '#3F80FF', // Used for setting manifest and progress theme colors.
  backgroundColor: '#ffffff',
}

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`

module.exports = config
