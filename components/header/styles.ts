import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { commonLinkStyles, mediaQuery } from '@styles/global';

export const headerWrapperStyles = css`
  position: fixed;
  z-index: 999;
  backdrop-filter: blur(1.5px);
  * {
    transition: all 0.3s ease;
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
  ${mediaQuery.phone} {
    font-size: var(--fs-m);
    margin-left: 0.5rem;
  }
`;

export const HeaderNavWrapper = styled.nav`
  display: flex;
  gap: 1rem;
  color: var(--color-gray-800);
  font-weight: 500;
  a {
    ${commonLinkStyles}
  }
  ${mediaQuery.phone} {
    display: grid;
    grid-template-columns: 4rem 4rem;
    gap: 0;
    a {
      text-align: end;
    }
  }
`;
