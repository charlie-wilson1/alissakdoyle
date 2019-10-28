import React from 'react';
import styled from '@emotion/styled';

const PageTitleStyled = styled.div`
  position: relative;
  margin-top: 1.8rem;
  width: inherit;
    h1 {
      text-transform: uppercase;
      text-align: center;
    }
    ::after {
      content: ' ';
      position: absolute;
      text-align: center;
      font-size: 30px;
      width: 10%;
      left: 45%;
      height: 2px;
      background-color: #474747;
    }
`;

const PageTitle = ({ pageTitle }) => {
  return (
    <PageTitleStyled>
      <h1>{pageTitle}</h1>
    </PageTitleStyled>
  );
};

export default PageTitle;