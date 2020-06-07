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
        }
    `);

    // Check for any errors
    if (result.errors) {
        throw new Error(result.errors);
    }

    // Extract query results
    const posts = result.data.allGhostPost.edges;

    // Load templates
    const postTemplate = path.resolve(`./src/templates/post.js`);

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
};
