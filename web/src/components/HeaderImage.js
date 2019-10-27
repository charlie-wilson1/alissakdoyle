import React, { useState, useEffect } from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import Image from './Image';

const HeightableDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: ${props => props.heightOffset ? `${400 - props.heightOffset}px` : '400px'};
  background-color: green;
  overflow: hidden;
`
export default function HeaderImage() {
  const [ offset, setOffset ] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setOffset(window.scrollY)
    })
  }, [offset]);

  return (
    <HeightableDiv heightOffset={offset}>
      <Image />
    </HeightableDiv>
  )
}
