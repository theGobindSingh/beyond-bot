import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { mediaQuery } from '@styles/global';

export const contactSectionWrapperStyles = css`
  background: var(--color-white);
  padding: 0;
  justify-content: space-between;
  --footer-height: 7.5rem;
  footer {
    z-index: 1;
    width: 100%;
    height: var(--footer-height);
  }
`;

export const contactSectionMainContainerStyles = css`
  height: 100%;
  padding-top: var(--header-height);
  display: flex;
  justify-content: center;
  align-items: center;

  --_w: min(80vw, 950px);
  --_h: 22.5rem;
  ${mediaQuery.phone} {
    --_w: 100%;
  }
`;

export const ContactSectionContainer = styled.div`
  position: relative;
  background-color: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(7px);
  padding: 3rem 6rem;
  width: var(--_w);
  height: var(--_h);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 1.5rem;
  transition: all 0.3s ease 50ms;
  overflow: hidden;
  * {
    text-align: center;
  }
  &.active {
    box-shadow: 0 0 4rem -0.875rem var(--color-secondary-300);
  }
  ${mediaQuery.phone} {
    padding: 3rem 2rem;
  }
`;

// export const ContactSectionGradient = styled.div`
//   position: absolute;
//   left: 5%;
//   bottom: -15rem;
//   width: 500px;
//   aspect-ratio: 1;
//   transition: all 0.3s;
//   filter: blur(50px);
//   background: radial-gradient(
//     var(--color-primary-500),
//     var(--color-secondary-300),
//     transparent
//   );
//   border-radius: 50%;
//   opacity: 0.5;
//   z-index: -1;
//   &.active {
//     left: 50%;
//     bottom: 0%;
//     scale: 0;
//   }
//   ${mediaQuery.phone} {
//     width: 50vw;
//     bottom: -2.5rem;
//     left: unset;
//     right: -2.5rem;
//   }
// `;

export const imgStyles = css`
  position: absolute;
  z-index: -1;
  --_s: min(30vh, 270px);
  height: var(--_s);
  width: var(--_s);
  top: calc(50% - var(--header-height) - var(--_h) / 2);
  --_lr: calc(50% - var(--_w) / 2);
  &._1 {
    left: var(--_lr);
    transform-origin: center center;
    transform: rotate(12.5deg) translate(-42.5%, 75%);
  }
  &._2 {
    right: var(--_lr);
    transform-origin: center center;
    transform: rotate(-12.5deg) translate(60%, -15%);
  }
  ${mediaQuery.phone} {
    --_s: 10rem;
    top: calc(50% - var(--header-height));
    &._1 {
      transform: rotate(12.5deg) translate(10%, 90%);
    }
    &._2 {
      transform: rotate(-12.5deg) translate(35%, -130%);
    }
  }
`;
