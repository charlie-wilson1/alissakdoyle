/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { css } from '@emotion/core'

import Header from "./Header"
import "./layout.css"
import { useSiteMetadata } from '../hooks/useSiteMetadata';

const innerDiv = css`
  max-width: 1100px;
  margin: 0 auto;
  background-color: white;
  box-sizing: border-box;
  box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.42);
`;

const mainStyles = css`
  padding: 1rem;
  box-sizing: border-box;
`;

const Layout = ({ children }) => {
  const { title } = useSiteMetadata(); 

  return (
    <>
      <div css={innerDiv}>
      <Header siteTitle={title} />
        <main css={mainStyles}>
          {children}
        </main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
