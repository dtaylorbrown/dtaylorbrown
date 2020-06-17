import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import SEO from '../components/seo';
import Layout from '../components/layout';
import Article from '../components/article';

const Title = styled.h1`
    font-size: 42px;
    line-height: 2;
    margin-bottom: 30px;
`;

const CoverImgWrapper = styled.div`
    text-align: center;
    margin-bottom: 60px;
    img {
        width: 100%;
    }
`;

const Updated = styled.p`
    font-size: 18px;
    line-height: 1.4;
    margin-bottom: 60px;
`;

const Page = ({ data: { page } }) => {
    const title = page && page.title;
    const coverImg = page && page.feature_image;
    const html = page && page.html;
    const lastUpdated = page && page.published_at;
    return (
        <Layout>
            <SEO title={title} />
            <Title>{title}</Title>
            <CoverImgWrapper>
                <img src={coverImg} />
            </CoverImgWrapper>
            <Article content={html} />
            <Updated>
                Last Updated: {new Date(lastUpdated).toLocaleDateString()}
            </Updated>
        </Layout>
    );
};

export default Page;

//query all ghost posts to get next & previous
export const pageQuery = graphql`
    query($id: String!) {
        page: ghostPage(ghostId: { eq: $id }) {
            title
            feature_image
            html
            published_at(locale: "en")
        }
    }
`;
