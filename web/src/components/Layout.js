/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Global, css } from '@emotion/core'

import normalize from '../styles/normalizeCSS';
import globalStyles from '../styles/globalStyles';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import Header from './Header';
import Nav from "./Nav"

const Layout = ({ children }) => {
  const { title } = useSiteMetadata();

  const innerWrapperStyles = css`
    box-sizing: border-box;
    margin: 0 auto;
    padding-top: 0rem;
    width: 1000px;
    height: 100vh;
    background-color: white;
    box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.25);
    overflow: auto;
    scrollbar-width: none;
    ::-webkit-scrollbar {
      display: none;
    }

    @media screen and (max-width: 1000px) {
      width: 100%;
    }
  `;


  const contentStyles = css`
    box-sizing: border-box;
    position: relative;
    width: 100%;
    top: 100px;
  `;

  return (
    <div css={innerWrapperStyles}>
      <Global styles={[normalize, globalStyles]} />
      <Header siteTitle={title} />
      <Nav />
      <div css={contentStyles}>
        <content>
          {children}
        </content>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
