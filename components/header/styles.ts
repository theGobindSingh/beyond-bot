import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { commonLinkStyles } from '@styles/global';

export const headerWrapperStyles = css`
  position: fixed;
  * {
    transition: all 0.3s ease;
  }
`;

export const headerContainerStyles = css`
  height: var(--header-height);
  display: flex;
  align-items: center;
`;

export const headerImageStyles = css`
  object-fit: contain;
  height: 100%;
  width: auto;
  aspect-ratio: 1 / 1;
`;

export const headerLogoTextStyles = css`
  ${commonLinkStyles}
  font-size: var(--fs-s);
  font-weight: 500;
  margin-right: auto;
  margin-left: 1rem;
`;

export const HeaderNavWrapper = styled.nav`
  display: flex;
  gap: 1rem;
  color: var(--color-gray-800);
  font-weight: 500;
  a {
    ${commonLinkStyles}
  }
`;
