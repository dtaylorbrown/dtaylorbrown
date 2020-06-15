const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const result = await graphql(`
        {
            allGhostPost(sort: { order: ASC, fields: published_at }) {
                edges {
                    node {
                        ghostId
                        slug
                    }
                }
            }
            allGhostPage {
                edges {
                    node {
                        ghostId
                        slug
                    }
                }
            }
        }
    `);

    // Check for any errors
    if (result.errors) {
        throw new Error(result.errors);
    }

    // Extract query results
    const posts = result.data.allGhostPost.edges;
    const pages = result.data.allGhostPage.edges;

    // Load templates
    const postTemplate = path.resolve(`./src/templates/post.js`);
    const pageTemplate = path.resolve(`./src/templates/page.js`);

    // Create post pages
    posts.forEach(({ node }) => {
        node.url = `/words/${node.slug}/`;
        createPage({
            path: node.url,
            component: postTemplate,
            context: {
                id: node.ghostId,
                slug: node.slug,
            },
        });
    });

    // Create pages pages
    pages.forEach(({ node }) => {
        createPage({
            path: node.slug,
            component: pageTemplate,
            context: {
                id: node.ghostId,
                slug: node.slug,
            },
        });
    });
};
