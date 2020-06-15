import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import SEO from '../components/seo';
import Layout from '../components/layout';
import Article from '../components/article';

const Title = styled.h1`
    font-size: 42px;
    line-height: 2;
    max-width: 1240px;
    margin: 0 auto 30px;
    padding-left: 30px;
    width: 100%;
`;

const Page = ({ data: { page } }) => {
    const title = page && page.title;
    const html = page && page.html;
    return (
        <Layout>
            <SEO title={title} />
            <Title>{title}</Title>
            <Article content={html} />
        </Layout>
    );
};

export default Page;

//query all ghost posts to get next & previous
export const pageQuery = graphql`
    query($id: String!) {
        page: ghostPage(ghostId: { eq: $id }) {
            title
            html
            published_at(locale: "en")
        }
    }
`;
