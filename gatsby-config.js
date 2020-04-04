module.exports = {
  siteMetadata: {
    title: `Nybble`,
    author: {
      name: `Nitish Sachar`,
    },
    description: `Bytes of information, one post at a time.`,
    siteUrl: `https://nybble.app`,
    social: {
      github: `uioporqwerty`,
      linkedin: `nitish-sachar`,
      resume: `https://1drv.ms/b/s!At-XTckMqFENyjTGnHffd7FFyqc-`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-52309656-5`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nybble`,
        short_name: `Nybble`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/site-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: ["/*"],
      },
    },
    {
      resolve: "gatsby-plugin-guess-js",
      options: {
        GAViewID: `214637245`,
        jwt: {
          client_email: `nybble@nybble-272906.iam.gserviceaccount.com`,
          private_key: `-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCyLiHDZsqxJn08\nB0hDwPn2rhJb8rCp5sn1q4nL/nIZ7pmB8XU9ia3JRA5RvdIt/qAMbywi9Sg2sIB4\nwoq5vAFDnNLtrQhmhIWeQwiaQheGixAV0/bgsLNtyzc5SPWUg7cO2aI3dtIex8Y1\n33cEDg7yaxgsavZlvvEj/K/h1dROk0ky+pHci+pPkEIEgHH1T1p14410PqybPwZe\nAxjvct16a5QulqlvvUZ8tDUEToUymZQh+0KJdzLICwjCKN9I5IrlY/gBP0H476en\n9K3p+pyGSI0MwZbbGtfJ5QZgSdSDd3c+Q5i1YVtkHKS9H1lRilrWAj5NMYhDivKT\nTruNWYfVAgMBAAECggEADbQlyjhIdCHe4kdrgJqBuKRgREyA13BcLaLVyqfbirCi\ntpW/GJtTXFyTMiieCgXztUEcbRioN4L3pOubBvhPEi4oVgZ61B4MUMTpdaojn3UB\nwn82e5Pbf1Q9Zd1KPFpGl/b91oCZXhJE5YI15+ZU5Y9LB3Xqh9GM2XtNSg2YciDm\nf4WghZaO/Yehax01XBKCfnvium03q6y0D/G46VEWCKvj3xQJKPIHH2LjUL+LcImv\npCYaCYZ1Oue5DTAviIxb0x941KByrCngjGFGp06U/rpvrLUETm30vy0Y9ODMA6ld\nvU7uHmeiqAhCGCVXTUmQ0qprlK06MeK84DNbOSMYeQKBgQDgzAfV/of5XE8HxzkQ\nCm2k/LEgRqvfONdc/jPGilncv5qiEh5OM9TU0FENijQ29dsCSdAFBze2CXYysOEH\njk8EkZwCwYyB6Ah4ePH2XhAVDTQ0jZaZUeP7yAhPRfNXQ8aslyRCujHBXafkK0cY\n/+NnpGIK9YUSJGUnfBLjBHRGAwKBgQDK6Z0E4bLaAlaXnSNHCRkU2LPrSG8KnJdB\nM8vdhqjaClYWq9LPjajaGzWxPKTucaFd4oXRtiZwqybT/VlRfC3lG1GE20XklUs5\nWUv8AGz7c1aydUzI/JhQ06v9uNWUm+pWEQkZSniK6COVf/mjTnWJRoyFtUnn1XnC\nu+HGObVfRwKBgQDa8R04qT0Z+3PlqX3ER8Pei1agjvRa5uuq4NLgrmMzg1JCQ89M\nb2L9Gx+2RkLwvKfgJK/8FbmHDNQYLvoc99eyJXeDn6sP40RMwc84Gwki18de4AAr\nt/yKf5rISuLkvVhFRLfGXb6UDHm22wfWK3P6v7nV3qcKsnPq7wceIHp2rQKBgQC+\nap50X00Usw8JtmfNmKcV3gpxaIbz4WE7ydytZVn9S6fgHJx3M8vZ6aDoUy2/qZix\n3wqPcyz9nE+SrnRsOGllT86fK5qaWNO/3KGmucuL6H/adqN5FTnm18zWC+c6T1qI\nK/Jq7mzShegmunLNIqrACRmDvE2/pqBd8yx7ddpTrwKBgEmOu56S29IYznIwBbtQ\nZ/y1SaGYhSNX2ZlOO5S+lTvzMwA7kcBP/Irps20zFcZ0mNAF+sfrpvwvpjDqhQ8s\nunIQuHzY/eDZmIKmWVg+G+iTXZEiN6b8Ji7I4kBiOVE8HT9UAAwvAxgXGO2W6Wsg\nP+9ha43mcRHv83sxfdnRTuEX\n-----END PRIVATE KEY-----\n`,
        },
        minimumThreshold: 0.03,
        period: {
          startDate: new Date("2020-3-1"),
          endDate: new Date(),
        },
      },
    },
  ],
}
