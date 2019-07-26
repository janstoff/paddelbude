module.exports = {
  // pathPrefix: '/paddelbude', might be needed for production deployment
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/styling/images`
      }
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `paddelbude`
      }
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: ['src/styling/global.scss', 'src/styling/colors.scss']
      }
    },
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'paddelbude',
        short_name: 'pb',
        start_url: '/',
        background_color: '#353434',
        theme_color: '#353434',
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'standalone'
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet'
  ]
};
