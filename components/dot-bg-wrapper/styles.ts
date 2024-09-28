import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const wrapperStyles = css`
  position: relative;
  overflow: hidden;
`;

export const DotBgWrapper = styled.div`
  position: absolute;
  z-index: 0;
  height: 150%;
  width: 150%;
  top: -25%;
  left: -25%;

  --_s: 1px;
  --_bs: 30px;

  background-image: linear-gradient(
      0deg,
      var(--color-gray-400) var(--_s),
      transparent var(--_s)
    ),
    linear-gradient(
      90deg,
      var(--color-gray-300) var(--_s),
      transparent var(--_s)
    );
  background-size: var(--_bs) var(--_bs);
  transition: all 0s ease;
`;

export const childrenWrapperStyles = css`
  position: relative;
  z-index: 1;
`;
