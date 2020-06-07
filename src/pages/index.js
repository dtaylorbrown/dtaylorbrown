import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Url from '../components/url';

const Main = styled.section`
    max-width: 1040px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    height: calc(100vh - 180px);
    h1 {
        font-size: 38px;
        font-family: 'PT Sans', sans-serif;
        line-height: 1.5;
    }
    strike {
        color: gray;
    }
`;

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query HeaderQuery {
            ghostAuthor(id: { eq: "Ghost__Author__1" }) {
                bio
                website
            }
        }
    `);
    const str = data.ghostAuthor && data.ghostAuthor.bio;
    const bio = str.replace(/[[]/g, '<strike>').replace(/[\]]/g, '</strike>');
    return (
        <Layout>
            <SEO title="Home" />
            <Main>
                <h1>
                    <span dangerouslySetInnerHTML={{ __html: bio }} />
                    <Url
                        to={data.ghostAuthor && data.ghostAuthor.website}
                        external
                        isLarge={1}
                    >
                        ZeroLight
                    </Url>
                </h1>
            </Main>
        </Layout>
    );
};

export default IndexPage;
