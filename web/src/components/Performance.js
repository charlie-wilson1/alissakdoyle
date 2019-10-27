import React from 'react';
import { css } from '@emotion/core';

const Performance = ({title, role, theatre, director}) => {
  return (
    <div css={css`margin-bottom: 2rem;`}>
      <p css={css`font-weight: 800;`}>{title}
        <span css={css`font-weight: 500;`}>{` - ${role}`}</span>
      </p>
      <p>{`${theatre}. ${director}`}</p>
    </div>
  );
};

export default Performance;