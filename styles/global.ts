import { css } from '@emotion/react';

export const headerHeight = 80;

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
    --header-height: ${headerHeight}px;
  }
  body {
    color: var(--color-text-900);
    font-size: var(--fs-2xs);
    font-family: var(--font-sans);
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;
