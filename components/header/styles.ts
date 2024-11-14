import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { mediaQuery } from '@styles/global';

export const headerWrapperStyles = css`
  position: fixed;
  z-index: 999;
  * {
    transition: all 0.3s ease;
  }
  background-color: var(--color-neutral-200);
  box-shadow: 0 1rem 1.5rem -0.5rem var(--color-gray-300);
  height: var(--header-height, fit-content);
  &:has(+ .full-page-scroll-wrapper) {
    width: calc(100vw - var(--scrollbar-width));
  }
`;

export const headerContainerStyles = css`
  height: var(--header-height);
  display: flex;
  align-items: center;
  ${mediaQuery.phone} {
    padding: 1rem 0;
  }
`;

export const headerImageStyles = css`
  object-fit: contain;
  height: 60%;
  width: auto;
  margin-right: auto;
  ${mediaQuery.phone} {
    margin-right: auto;
    height: 80%;
  }
`;

export const HeaderNavWrapper = styled.nav`
  display: flex;
  align-items: center;
  gap: clamp(2rem, 8vw, 7.5rem);
  color: var(--color-gray-800);
  font-weight: 500;
  font-size: var(--fs-3xs);
  /* ${mediaQuery.phone} {
    font-size: var(--fs-3xs);
  } */
  a {
    height: fit-content;
  }
`;
