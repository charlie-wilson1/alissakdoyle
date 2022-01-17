import React from 'react';
import { css } from '@emotion/react';

const pageHeaderStyles = css`
  width: inherit;
  padding: 1rem 0;
  h2 {
    margin-bottom: 2rem;
  }
`;

const PageH1 = ({text}) => {
  return (
    <div css={pageHeaderStyles}>
      <h2>{text}</h2>
      <hr css={css`width: 100%; border: 1px solid lightgray`}></hr>
    </div>
  );
};

export default PageH1;