import React from 'react';
import { css } from '@emotion/react';

const DirectingGig = ({theatre, title, role}) => {
  return (
    <div css={css`margin-bottom: 2rem;`}>
      <p css={css`font-weight: 800; margin-bottom: 0.6rem;`}>{title}
        {(role || theatre) && ' - '}
        {role && (<span>{`${role}, `}</span>)}
        <span css={css`font-weight: 500;`}>{theatre}</span>
      </p>
    </div>
  );
};

export default DirectingGig;