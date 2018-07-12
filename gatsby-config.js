module.exports = {
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-netlify-cms`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/blog`,
                name: "markdown-pages"
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "UA-122144725-1",
                head: true,
                anonymize: false
            },
        },
        `gatsby-transformer-remark`
    ]
};
