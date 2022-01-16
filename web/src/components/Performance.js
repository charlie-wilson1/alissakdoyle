import React from 'react';
import { css } from '@emotion/react';

const Performance = ({title, role, theatre, director}) => {
  const directorText = director.join(', '); 
  return (
    <div css={css`margin-bottom: 2rem;`}>
      <p css={css`font-weight: 800; margin-bottom: 0.6rem;`}>{title}
        <span css={css`font-weight: 500;`}>{` - ${role}`}</span>
      </p>
      <p css={css`margin-top:0.6rem;`}>{`${theatre}. ${directorText}, ${director.length > 1 ? 'directors' : 'director'}`}</p>
    </div>
  );
};

export default Performance;