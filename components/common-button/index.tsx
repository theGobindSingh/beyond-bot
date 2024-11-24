import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { commonLinkStyles, mediaQuery } from '@styles/global';
import A from 'next/link';

const styles = css`
  ${commonLinkStyles}
  font-family: inherit;
  font-size: inherit;
  width: fit-content;
  display: block;
  text-transform: uppercase;
  background-color: var(--color-gray-800);
  padding: 0.5em 1.25em;
  border-radius: 100vw;
  color: var(--color-white);
  font-weight: 00;
  position: relative;
  border: 1px solid transparent;
  &:hover,
  &:active {
    background-color: var(--color-white);
    color: var(--color-gray-800);
    box-shadow: 0 0 1em var(--color-gray-500);
  }
  ${mediaQuery.phone} {
    font-size: inherit;
  }
`;

export const Button = styled.button`
  ${styles}
`;
export const Link = styled(A)`
  ${styles}
`;
