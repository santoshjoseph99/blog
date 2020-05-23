module.exports = {
  siteMetadata: {
    title: `Type Errors and More`,
    siteUrl: `https://www.typeerror.net`,
    description: `programming...`,
    topics: [],
    menu: [
      {
        name: 'Blog',
        path: '/'
      },
      {
        name: 'Resume',
        path: '/resume'
      },
    ],
    footerMenu: [
      {
        name: 'Resume',
        path: '/resume'
      },
    ],
    search: true,
    author: {
      name: `santoshjoseph99`,
      description: ``,
      social: {
        facebook: ``,
        twitter: `https://twitter.com/SantoshJoseph12`,
        linkedin: `https://www.linkedin.com/in/santoshjoseph99/`,
        instagram: ``,
        youtube: ``,
        github: `https://github.com/santoshjoseph99`,
        twitch: ``
      }
    }
  },
  plugins: [
    {
      resolve: `@nehalist/gatsby-theme-nehalem`,
      options: {
        manifest: {
          name: `type error`,
          short_name: `TypeError`,
          start_url: `/`,
          background_color: `#a4cbb8`,
          theme_color: `#a4cbb8`,
          display: `minimal-ui`,
          icon: `${__dirname}/content/assets/images/logo.png`
        }
      }
    }
  ]
};
