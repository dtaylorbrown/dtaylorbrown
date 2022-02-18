import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
    color: ${props => props.theme.colors.primaryDark};
`;

const Heading = ({ children, level }) => {
    return <H1>{children}</H1>;
};

export default Heading;
