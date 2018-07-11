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
                trackingId: "UA-93487545-3",
                head: true,
                anonymize: true
            },
        },
        `gatsby-transformer-remark`
    ]
};
