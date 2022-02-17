import * as React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';

const Main = styled.main`
    color: ${props => props.theme.colors.primaryDark};
    padding: 96px;
`;

const Heading = styled.h1`
    margin-top: 0;
    margin-bottom: 32px;
    max-width: 320px;
`;

// markup
const IndexPage = () => {
    return (
        <Layout pageTitle="Words">
            <Main>
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
        </Layout>
    );
};

export default IndexPage;
