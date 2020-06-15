import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Url from '../components/url';

import instagramIcon from '../images/instagram.svg';
import githubIcon from '../images/github.svg';
import gitlabIcon from '../images/gitlab.svg';
import linkedInIcon from '../images/linkedin.svg';

const SocialLink = styled.a`
    color: #382F32;
    cursor: pointer;
    margin-right: 25px;
    transition: all 0.3s ease-in-out;
    &:hover {
        color: #ffc498;
    }
`;

const SVG = styled.svg`
    height: 25px;
    width: 25px;
    margin-top: 25px;
`;

const Insta = () => (
    <SVG>
        <use xlinkHref={`#${instagramIcon.id}`} />
    </SVG>
);

const GitHub = () => (
    <SVG>
        <use xlinkHref={`#${githubIcon.id}`} />
    </SVG>
);

const GitLab = () => (
    <SVG>
        <use xlinkHref={`#${gitlabIcon.id}`} />
    </SVG>
);

const LinkedIn = () => (
    <SVG>
        <use xlinkHref={`#${linkedInIcon.id}`} />
    </SVG>
);

const Main = styled.section`
    max-width: 1040px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
                <div>
                    <SocialLink title="GitHub" href="https://github.com/sshhdaniella" target="_blank" rel="noreferrer"><GitHub /></SocialLink>
                    <SocialLink title="GitLab" href="https://gitlab.com/sshhdaniella" target="_blank" rel="noreferrer"><GitLab /></SocialLink>
                    <SocialLink title="LinkedIn" href="https://www.linkedin.com/in/daniella-taylor-38ab6162/" target="_blank" rel="noreferrer"><LinkedIn /></SocialLink>
                    <SocialLink title="Instagram" href="https://www.instagram.com/dtaylorbrown/" target="_blank" rel="noreferrer"><Insta /></SocialLink>
                </div>
            </Main>
        </Layout>
    );
};

export default IndexPage;
