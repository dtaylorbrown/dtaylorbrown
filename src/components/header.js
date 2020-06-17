import React from 'react';
import { Link } from 'gatsby';
import styled, { keyframes } from 'styled-components';

import Url from '../components/url';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const SiteHeader = styled.header`
    display: flex;
    align-items: center;
    height: 150px;
`;

// todo make this it's own component
const Logo = styled.div`
    width: 85px;
    height: 85px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    font-family: 'Gloria Hallelujah', cursive;
    user-select: none;
    cursor: pointer;
    &:after {
        content: '';
        display: block;
        background: #ffc498;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        clip-path: polygon(
            20% 0%,
            0% 20%,
            30% 50%,
            0% 80%,
            20% 100%,
            50% 70%,
            80% 100%,
            100% 80%,
            70% 50%,
            100% 20%,
            80% 0%,
            50% 30%
        );
    }
    &:hover {
        &:after {
            animation: ${rotate} 1.75s linear;
        }
    }
    span {
        font-size: 38px;
    }
`;

const LogoLink = styled(Link)`
    color: #382f32;
    text-decoration: none;
`;

const Nav = styled.nav`
    flex-grow: 1;
    ul {
        display: flex;
        justify-content: flex-end;
        li {
            padding: 20px;
            font-size: 22px;
        }
    }
`;

const Header = () => {
    return (
        <SiteHeader>
            <LogoLink to={'/'}>
                <Logo>
                    <span>DTB</span>
                </Logo>
            </LogoLink>
            <Nav>
                <ul>
                    <li>
                        <Url to="/now">Now</Url>
                    </li>
                </ul>
            </Nav>
        </SiteHeader>
    );
};

export default Header;
