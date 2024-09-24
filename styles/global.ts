import { css } from '@emotion/react';

export const breakpoints = {
  phone: {
    min: 0,
    max: 640,
  },
  desktop: {
    min: 641,
    max: 9999,
  },
};

export const mediaQuery = {
  phone: `@media (min-width: ${breakpoints.phone.min}px) and (max-width: ${breakpoints.phone.max}px)`,
  desktop: `@media (min-width: ${breakpoints.desktop.min}px)`,
};

export const globalStyles = css`
  :root {
    --header-height: 70px;
  }
  body {
    color: var(--color-gray-800);
    font-size: var(--fs-2xs);
    font-family: var(--font-sans);
    padding: 0;
    margin: 0;
  }
  * {
    box-sizing: border-box;
  }
  .link-animation {
    position: relative;
    &:hover {
      &::before {
        transform: scaleX(1);
      }
    }
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 0.125em;
      color: inherit;
      background-color: currentColor;
      bottom: 0;
      left: 0;
      transform: scaleX(0);
      transform-origin: left;
      transition: all 0.3s ease;
      opacity: 0.75;
    }
  }
  /* ${mediaQuery.phone} {
    :root {
      --header-height: 40px;
    }
  } */
`;

export const commonLinkStyles = css`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
  font-size: var(--fs-2xs);
  font-weight: 500;
  transition: all 0.3s ease;
  ${mediaQuery.phone} {
    font-size: var(--fs-3xs);
  }
`;
