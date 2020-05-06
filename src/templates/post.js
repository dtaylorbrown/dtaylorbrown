import React from 'react';
import { graphql } from 'gatsby';

// const Post = ({data: {post}}) => {
//     const title = post && post.edges[0].node.title;
//     const html = post && post.edges[0].node.html;
//     return(
//         <main style={{ textAlign: 'center', padding: '50px' }}>
//             <h1>{title}</h1>
//             <article style={{ maxWidth: '840px', margin: '0 auto' }} dangerouslySetInnerHTML={{__html: html}} />
//         </main>
//     )
// }

const Post = () => {
    return(
        <h1>Post Template....</h1>
    )
}
 
export default Post;

//query all ghost posts to get next & previous
// export const postQuery = graphql`
//     query($id: String!){
//         post: allGhostPost(filter: { ghostId: {eq: $id} }){
//             edges {
//                 previous {
//                     slug
//                 }
//                 node {
//                     title
//                     feature_image
//                     slug
//                     html
//                 }
//                 next {
//                     slug
//                 }
//             }
//         }
//     }
// `;
