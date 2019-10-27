import React from 'react';
import { css } from '@emotion/core';

const headerStyles = css`
  position: fixed;
  top: 0;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  h1 {
    font-family: sans-serif;
  }
`;

const Header = ({ siteTitle }) => {
  return (
    <header css={headerStyles}>
      <h1 css={css`font-family: sans-serif;`}>
        {siteTitle}
      </h1>
    </header>
  );
};

export default Header;