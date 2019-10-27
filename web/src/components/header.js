import React from 'react';
import { css } from '@emotion/core';

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

    h1 {
      text-align: center;
      width: 100%;
      text-transform: uppercase;
    }
  `;

const Header = ({ siteTitle }) => {
  return (
    <header css={headerStyles}>
      <h1>{siteTitle}</h1>
    </header>
  );
};

export default Header;