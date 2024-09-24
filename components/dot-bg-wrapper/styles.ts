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
  background-image: radial-gradient(var(--color-gray-400) 1.3px, transparent 0);
  background-size: 30px 30px;
  transition: all 0s ease;
`;

export const childrenWrapperStyles = css`
  position: relative;
  z-index: 1;
`;
