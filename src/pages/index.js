import * as React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';

const Main = styled.main`
    padding: 96px;
`;

const Heading = styled.h1`
    margin-top: 0;
    margin-bottom: 32px;
    max-width: 320px;
    color: ${props => props.theme.colors.primaryDark};
`;

const Caption = styled.h2`
    color: ${props => props.theme.colors.primaryMedium};
`;

const Text = styled.p`
    color: ${props => props.theme.colors.primaryLight};
`;

const SecondaryHeading = styled.h1`
    margin-top: 0;
    margin-bottom: 32px;
    max-width: 320px;
    color: ${props => props.theme.colors.secondaryDark};
`;

const SecondaryCaption = styled.h2`
    color: ${props => props.theme.colors.secondaryMedium};
`;

const SecondaryText = styled.p`
    color: ${props => props.theme.colors.secondaryLight};
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
                <Caption>How are you?</Caption>
                <Text>What a nice day</Text>
                <SecondaryHeading>👋 Hey, I'm Daniella</SecondaryHeading>
                <SecondaryCaption>How are you?</SecondaryCaption>
                <SecondaryText>What a nice day</SecondaryText>
            </Main>
        </Layout>
    );
};

export default IndexPage;
