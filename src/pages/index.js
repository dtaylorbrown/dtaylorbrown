import * as React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

import Nav from '../components/nav';

const Main = styled.main`
    color: #232129;
    padding: 96px;
    font-family: 'Karla';
`;

const Heading = styled.h1`
    margin-top: 0;
    margin-bottom: 32px;
    max-width: 320px;
`;

// markup
const IndexPage = () => {
    return (
        <Main>
            <title>Home Page</title>
            <Nav />
            <StaticImage
                src="../images/me.jpg"
                alt="An image of Daniella"
                placeholder="blurred"
                layout="fixed"
                width={200}
                aspectRatio={1}
                style={{
                    borderRadius: '50%',
                }}
                transformOptions={{
                    cropFocus: 'top',
                }}
            />
            <Heading>👋 Hey, I'm Daniella</Heading>
        </Main>
    );
};

export default IndexPage;
