module.exports = {
    siteMetadata: {
        title: "Tuhin",
        description: "I'm Tuhin Kanti Pal. I'm a programmer, Security Researcher and Opensource Enthusiast.",
        url: "https://thetuhin.com",
        twitterUsername: "@jeeetpaul",
        author: "Tuhin Kanti Pal"
    },
    plugins: [
        "gatsby-plugin-sass",
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: [
                    "G-WM81TJM2YQ",
                ],
            },
        },
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "Tuhin",
                short_name: "Tuhin",
                start_url: "/?device=webapp",
                background_color: "#ffffff",
                theme_color: "#000000",
                display: "standalone",
                icon: "src/images/logo.png",
            },
        },
        "gatsby-transformer-remark",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/",
            },
            __key: "pages",
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [".md"],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: "blog",
                path: `${__dirname}/src/blog`,
            },
        },
        "gatsby-transformer-json",
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: "work",
                path: `${__dirname}/src/work`,
            },
        },
    ],
};