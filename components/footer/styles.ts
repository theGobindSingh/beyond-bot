import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { commonLinkStyles } from '@styles/global';

export const footerWrapperStyles = css`
  background-color: var(--color-gray-100);
`;

export const footerContainerStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  font-size: var(--fs-3xs);
  --_img-w: 5.05rem;
  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: var(--_img-w) calc(100% - var(--_img-w));
    grid-template-rows: auto auto;
  }
`;

export const FooterImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: var(--_img-w);
  @media (max-width: 900px) {
    grid-column: 1 / 2;
    grid-row: 1 / -1;
  }
`;

export const footerImageStyles = css`
  height: 2.625rem;
  width: auto;
`;

export const FooterLogoText = styled.span`
  font-weight: 600;
`;

export const FooterMidContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  transform: translateX(var(--_img-w));
  @media (max-width: 900px) {
    transform: none;
    justify-content: flex-end;
  }
`;

export const FooterEmail = styled.a`
  ${commonLinkStyles}
  font-size: inherit;
`;

export const FooterRule = styled.div`
  height: 2em;
  width: 1.5px;
  background-color: var(--color-gray-500);
  border-radius: 100vw;
`;

export const FooterLocation = styled.span``;

export const FooterCopyRight = styled.span`
  text-align: right;
`;
