// const path = require('path');

// exports.createPages = async ({ graphql, actions, reporter }) => {
//     const postTemplate = path.resolve(`./src/templates/post.js`)
    
//     // Query Ghost data
//     const result = await graphql(`
//         {
//             allGhostPost(sort: { order: ASC, fields: published_at }) {
//                 edges {
//                     node {
//                         ghostId
//                         slug
//                     }
//                 }
//             }
//         }
//     `)
//     // Handle errors
//     if (result.errors) {
//         reporter.panicOnBuild(`Error while running GraphQL query.`)
//         return
//     }
    
//     if (!result.data.allGhostPost) {
//         return
//     }
   
//     const posts = result.data.allGhostPost.edges
//     posts.forEach(({ node }) => {
//         node.url = `/${node.slug}/`
//         actions.createPage({
//             path: node.url,
//             component: postTemplate,
//             context: {
//                 id: node.ghostId,
//                 slug: node.slug,
//             },
//         })
//     })
// }
