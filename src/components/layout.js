/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from 'styled-components';

import { theme } from '../styles/theme';

import Header from "./header"
import "./layout.css"

const Wrapper = styled.div`
  max-width: ${props => props.theme.sizes.large};
  width: 100%;
  margin: 0 auto;
  background: ${props => props.theme.colors.uiBase};
  color: ${props=> props.theme.colors.uiContrast};
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <ThemeProvider theme={theme}>
          <Wrapper>
            <main>{children}</main>
            <footer>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
          </Wrapper>
        </ThemeProvider>
      </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
