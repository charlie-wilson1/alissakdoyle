import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import { GatsbyImage } from "gatsby-plugin-image"


const lightboxShown = css`
  position: fixed;
  top: 0; 
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 10;
  background-color: rgb(0, 0, 0, 0.9);
  transition: background-color 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const lightboxHidden = css`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 1;
`;

const Lightbox = ({ imageAssets }) => {
  const [lightbox, toggleLightbox] = useState(false);
  const [windowWidth, setwindowWidth] = useState(0);

  useEffect(() => {
    setwindowWidth(window.innerWidth);
  }, [])

  return (
    <div css={lightbox ? lightboxShown : lightboxHidden} onClick={(e) => { toggleLightbox(!lightbox) }} >
      {(lightbox && windowWidth >= 700) && (
        <GatsbyImage image={imageAssets.large} key={imageAssets.large.src}></GatsbyImage>
      )}
      {(lightbox && (windowWidth >= 500 && windowWidth < 700)) && (
        <GatsbyImage image={imageAssets.tablet} key={imageAssets.tablet.src}></GatsbyImage>
      )}
      {(lightbox && windowWidth < 500) && (
        <GatsbyImage image={imageAssets.mobile} key={imageAssets.mobile.src}></GatsbyImage>
      )}
    </div>
  );
};

export default Lightbox;