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
            resolve: 'gatsby-plugin-material-ui',
            options: {
                pathToTheme: 'src/materialUiTheme.js',
            },
        },
        `gatsby-transformer-remark`
    ]
};
