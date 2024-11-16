import {
  containerSize,
  mobileContainerSize,
} from '@components/common-full-width-wrapper/styles';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

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
    --color-bg-primary-hsl: 240, 60%, 80%;
    --color-extra-one: #2e989e;
    --scrollbar-width: 7px;
  }
  body {
    color: var(--color-gray-800);
    font-size: var(--fs-2xs);
    font-family: var(--font-sans);
    padding: 0;
    margin: 0;
  }
  html {
    overflow: unset !important;
  }
  #__next {
    position: relative;
  }
  * {
    box-sizing: border-box;
    &::-webkit-scrollbar {
      width: var(--scrollbar-width);
      height: var(--scrollbar-width);
      background-color: #efefef;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #c3c3c3;
      border-radius: 100vw;
    }
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
  }
  .transparent-scroll-track {
    &::-webkit-scrollbar {
      background-color: transparent;
    }
  }

  .link-animation {
    position: relative;
    &:hover,
    &.active-animation {
      &::before {
        left: 15%;
        width: 70%;
      }
    }
    &::before {
      content: '';
      position: absolute;
      width: 0%;
      height: 0.1125em;
      color: inherit;
      background-color: currentColor;
      bottom: -0.2em;
      left: 50%;
      transform-origin: left;
      transition: all 0.3s ease;
      opacity: 0.5;
      border-radius: 100vw;
    }
  }
  .cursive {
    font-family: var(--font-cursive);
    letter-spacing: 0.01em;
  }
  ${mediaQuery.phone} {
    :root {
      --scrollbar-width: 4px;
    }
  }
`;

export const commonLinkStyles = css`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
  font-size: var(--fs-2xs);
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  background-color: transparent;
  border: none;
  padding: 0;
  ${mediaQuery.phone} {
    font-size: var(--fs-3xs);
  }
`;

export const commonWrapperStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 1rem;
  padding: var(--header-height, 3rem) 0;
  width: 100%;
  height: 100dvh;
  top: 0;
`;

export const FpsWrapper = styled.div`
  position: relative;
  z-index: 1;
  height: 100dvh;
  width: 100%;
  overflow-y: auto;
  & > .fps {
    position: sticky;
    top: 0;
  }

  &.lenis.lenis-smooth {
    scroll-behavior: auto !important;
  }

  &.lenis.lenis-smooth [data-lenis-prevent] {
    overscroll-behavior: contain;
  }

  &.lenis.lenis-stopped {
    overflow: hidden;
  }

  &.lenis.lenis-smooth iframe {
    pointer-events: none;
  }
`;

export const fullWidthPadding = css`
  padding: 0 calc((100% - ${containerSize}) / 2);
  ${mediaQuery.phone} {
    padding: 0 calc((100% - ${mobileContainerSize}) / 2);
  }
`;
