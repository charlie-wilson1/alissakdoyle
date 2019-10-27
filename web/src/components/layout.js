/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Global, css } from '@emotion/core'

// import Header from "./Header"
// import "./layout.css"
import normalize from './layout-styles.js';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

const Layout = ({ children }) => {
  const { title } = useSiteMetadata();

  const globalStyles = css`
    font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 25px;
  `;

  const innerWrapperStyles = css`
    box-sizing: border-box;
    margin: 0 auto;
    padding-top: 0rem;
    width: 1000px;
    min-height: 100vh;
    background-color: white;
    box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.25);

    @media screen and (max-width: 1000px) {
      width: 100%;
    }
  `;

  const headerStyles = css`
    box-sizing: border-box;
    position: fixed;
    top: 0;
    width: inherit;
    height: 100px;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-bottom: 1px solid lightgray;
  `;

  const contentStyles = css`
    box-sizing: border-box;
    position: relative;
    width: 1000px;
    top: 100px;
  `;

  return (
    <div css={innerWrapperStyles}>
      <Global styles={normalize} />
      <header css={headerStyles}>
        <h1 css={css`text-align: center; width: 100%;`}>{title}</h1>
      </header>
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
