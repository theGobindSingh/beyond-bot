import { css } from '@emotion/react';
import styled from '@emotion/styled';
import {
  commonLinkStyles,
  commonWrapperStyles,
  mediaQuery,
} from '@styles/global';

export const ContactSectionWrapper = styled.section`
  ${commonWrapperStyles}
  padding: 10rem 0;
  ${mediaQuery.phone} {
    padding: 5rem 0;
  }
`;

export const ContactSectionContainer = styled.div`
  width: fit-content;
  background-color: var(--color-neutral-200);
  padding: 3rem 6rem;
  width: 80%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 0px;
  transition: all 0.3s ease;
  * {
    text-align: center;
  }
  &.active {
    border-radius: 1rem;
    box-shadow: 0 0 4rem -0.875rem var(--color-secondary-300);
  }
  ${mediaQuery.phone} {
    width: 100%;
    padding: 3rem 2rem;
  }
`;

export const contactSectionLinkStyles = css`
  ${commonLinkStyles}
  width: fit-content;
  display: block;
  text-transform: uppercase;
  background-color: var(--color-gray-800);
  padding: 0.5em 1.25em;
  border-radius: 100vw;
  color: var(--color-white);
  font-weight: 400;
  position: relative;
  border: 1px solid transparent;
  margin: 0.5rem 0;
  ${mediaQuery.phone} {
    font-size: var(--fs-2xs);
  }
`;

export const ContactSectionGradient = styled.div`
  position: absolute;
  left: 5%;
  bottom: -15rem;
  width: 500px;
  aspect-ratio: 1;
  transition: all 0.3s;
  filter: blur(50px);
  background: radial-gradient(
    var(--color-primary-500),
    var(--color-secondary-300),
    transparent
  );
  border-radius: 50%;
  opacity: 0.5;
  z-index: -1;
  &.active {
    left: 50%;
    bottom: 0%;
    scale: 0;
  }
  ${mediaQuery.phone} {
    width: 50vw;
    bottom: -2.5rem;
    left: unset;
    right: -2.5rem;
  }
`;
