import React from 'react';
import { graphql } from 'gatsby';

const Post = ({ data: { post } }) => {
    const title = post && post.title;
    const html = post && post.html;
    return (
        <main style={{ textAlign: 'center', padding: '50px' }}>
            <h1>{title}</h1>
            <article
                style={{ maxWidth: '840px', margin: '0 auto' }}
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </main>
    );
};

export default Post;

//query all ghost posts to get next & previous
export const postQuery = graphql`
    query($id: String!) {
        post: ghostPost(ghostId: { eq: $id }) {
            title
            feature_image
            slug
            html
        }
    }
`;
