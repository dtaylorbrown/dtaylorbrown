import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Navi = styled.nav`
    margin-bottom: 40px;
    a {
        color: ${props => props.theme.colors.primaryDark};
        padding-right: 30px;
        &.active {
            color: ${props => props.theme.colors.secondaryDark};
        }
    }
`;

const Nav = () => {
    return (
        <Navi>
            <Link to="/" activeClassName="active">
                me
            </Link>
            <Link to="/work" activeClassName="active">
                work
            </Link>
            <Link to="/words" activeClassName="active">
                words
            </Link>
            <Link to="/snaps" activeClassName="active">
                snaps
            </Link>
        </Navi>
    );
};

export default Nav;
