import React from 'react';
import { css } from '@emotion/core';

const headerStyles = css`
  position: fixed;
  top: 0;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgb(0, 0, 0, 0.1);
`;

const Header = ({ siteTitle }) => {
  return (
    <header css={headerStyles}>
      <h1>
        {siteTitle}
      </h1>
    </header>
  );
};

export default Header;