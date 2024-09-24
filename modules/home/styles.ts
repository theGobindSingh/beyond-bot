import { css } from '@emotion/react';
import { commonLinkStyles, mediaQuery } from '@styles/global';

export const homeDotBgWrapperStyles = css`
  background: hsla(240, 60%, 80%, 0.2);
`;

export const homeWrapperStyles = css`
  display: flex;
  height: 100svh;
  justify-content: center;
  align-items: center;
  & > * {
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:nth-of-type(1) {
      max-width: 350px;
    }
  }
  ${mediaQuery.phone} {
    flex-direction: column;
    & > * {
      height: 40%;
      width: 100%;
      &:nth-of-type(1) {
        max-width: 100%;
        justify-content: flex-end;
      }
      &:nth-of-type(2) {
        justify-content: flex-start;
      }
    }
  }
`;

export const homeLinkStyles = css`
  ${commonLinkStyles}
  border: 1px solid currentColor;
  padding: 0.5em 1em;
  border-radius: 8px;
  align-self: flex-start;
  margin-top: 1rem;
  ${mediaQuery.desktop} {
    &:hover {
      background-color: var(--color-gray-800);
      color: var(--color-gray-200);
    }
  }
  ${mediaQuery.phone} {
    font-size: var(--fs-2xs);
    margin: 2rem auto;
  }
`;
