/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const siteData = {
  url: "https://www.greatertorontofinancial.com"// No trailing slash allowed!
}


module.exports = {
  /* Your site config here */

  plugins: [
            {
              resolve: `gatsby-plugin-google-analytics`,
              options: {
                // The property ID; the tracking code won't be generated without it
                trackingId: "YOUR CODE",
                // Defines where to place the tracking script - `true` in the head and `false` in the body
                head: true,
                // Setting this parameter is optional
              },
            },
            `gatsby-plugin-sass`,
            `gatsby-plugin-react-helmet`,
            `gatsby-plugin-robots-txt`
            
          ],
  
  siteMetadata: {
    title: "Greater Toronto Financial",
    titleTemplate: "%s · FSE Loans",
    description:
      "We help you get the FSE aircraft you want. Highly competative rates, Fantastic Customer Service",
    url: siteData.url,
    siteUrl: siteData.url,
    image: "/images/icon.jpg", // Path to your image you placed in the 'static' folder
  },
}


