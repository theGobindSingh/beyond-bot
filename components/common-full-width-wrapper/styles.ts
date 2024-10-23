import { css } from '@emotion/react';

export const containerSize = '85%';
export const mobileContainerSize = '90%';

export const containerStyles = css`
  @media (max-width: 640px) {
    width: ${mobileContainerSize};
  }
`;

export const wrapperStyles = (bg?: string) => css`
  width: 100%;
  ${bg &&
  css`
    background: ${bg};
  `}
  &.fps {
    scroll-snap-align: center;
    height: 100dvh;
    overflow: hidden;
  }
`;
