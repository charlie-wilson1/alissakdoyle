import React from 'react';
import { css } from '@emotion/core';

const headerStyles = css`
  width: 100%;
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