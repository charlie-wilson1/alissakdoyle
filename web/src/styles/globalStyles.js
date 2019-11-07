import { css } from '@emotion/core';

const globalStyles = css`
  html {
    font-size: 16px;
    font-family: 'Open Sans', sans-serif;
    background-color: #eeeeee;
    color: #343434;
    letter-spacing: 1px;
  }

  @media screen and (max-width: 380px) {
    h1 {
      font-size: 1.5em;
    }
    h2 {
      font-size: 1em;
    }
    h3 {
      font-size: 0.7em;
      margin: 0 0.6rem;
    }
    p {
      font-size: 0.9em;
    }
    label {
      font-size: 10px;
    }
  }
`;

export default globalStyles;