import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledA = styled.a`
    color: #382f32;
    font-size: inherit;
    text-decoration: none;
    position: relative;
    &:after {
        content: '';
        display: block;
        width: 100%;
        height: ${props => (props.isLarge ? '10px' : '5px')};
        background: #ffb88c;
        position: absolute;
        left: 0;
        bottom: 9px;
        z-index: -1;
        transition: height 0.3s ease-in-out;
    }
    &:hover {
        &:after {
            height: 62.5%;
        }
    }
`;

const StyledLink = styled(Link)`
    color: #382f32;
    font-size: inherit;
    text-decoration: none;
    position: relative;
    &:after {
        content: '';
        display: block;
        width: 100%;
        height: ${props => (props.large === 1 ? '10px' : '5px')};
        background: #ffb88c;
        position: absolute;
        left: 0;
        bottom: 9px;
        z-index: -1;
        transition: height 0.3s ease-in-out;
    }
    &:hover {
        &:after {
            height: 62.5%;
        }
    }
`;

const Url = ({ to, external, children, large, ...rest }) => {
    if (external) {
        return (
            <StyledA
                href={to}
                large={large}
                target="_blank"
                rel="noopener noreferrer"
                {...rest}
            >
                {children}
            </StyledA>
        );
    }
    return (
        <StyledLink to={to} large={large} {...rest}>
            {children}
        </StyledLink>
    );
};

export default Url;
