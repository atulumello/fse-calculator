/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const siteData = {
  url: "www.greatertorontofinancial.com", // No trailing slash allowed!
}

module.exports = {
  /* Your site config here */
  plugins: [`gatsby-plugin-sass`,
              `gatsby-plugin-react-helmet`,
            `gatsby-plugin-robots-txt`],
  
  siteMetadata: {
    title: "Greater Toronto Financial",
    titleTemplate: "%s · FSE Loans",
    description:
      "We help you get the FSE aircraft you want. Highly competative rates, Fantastic Customer Service",
    url: siteData.url, 
    image: "/images/icon.jpg", // Path to your image you placed in the 'static' folder
  },
}
