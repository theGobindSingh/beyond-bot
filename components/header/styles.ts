import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { mediaQuery } from '@styles/global';

export const headerWrapperStyles = css`
  position: fixed;
  z-index: 999;
  * {
    transition: all 0.3s ease;
  }
  background-color: var(--color-neutral-200);
  box-shadow: 0 1rem 1.5rem -0.5rem var(--color-gray-300);
  height: var(--header-height, fit-content);
  &:has(+ .full-page-scroll-wrapper) {
    width: calc(100vw - var(--scrollbar-width));
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

export const headerLogoLinkStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  height: 60%;
  ${mediaQuery.phone} {
    height: 80%;
  }
`;

export const headerImageStyles = css`
  object-fit: contain;
  width: auto;
  height: 100%;
  transition: all 0.3s ease;
  &.hidden {
    opacity: 0;
  }
`;

export const HeaderNavWrapper = styled.nav`
  display: flex;
  align-items: center;
  gap: clamp(2rem, 8vw, 7.5rem);
  color: var(--color-gray-800);
  font-weight: 500;
  font-size: var(--fs-3xs);
  transition: all 0.3s ease;
  /* ${mediaQuery.phone} {
    font-size: var(--fs-3xs);
  } */
  * {
    font-size: inherit;
  }
  a {
    height: fit-content;
  }
  .link {
    &:hover {
      box-shadow: none;
    }
  }
  ${mediaQuery.phone} {
    & > *:not(.button) {
      display: none;
    }
  }
  &.hidden {
    opacity: 0;
  }
`;

export const HamWrapper = styled.button`
  height: 17.5px;
  width: 25px;
  margin-left: 1rem;
  display: none;
  position: relative;
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  ${mediaQuery.phone} {
    display: block;
  }
`;

export const HamLine = styled.span`
  width: 100%;
  height: 2px;
  background-color: var(--color-gray-800);
  border-radius: 100vw;
  transform-origin: center;
  position: absolute;
  transition: all 0.3s ease;
  left: 0;

  &._1 {
    top: 0;
  }
  &._2 {
    top: 50%;
    transform: translateY(-50%);
  }
  &._3 {
    bottom: 0;
  }

  --_k: 10.75px;

  &:is(.active > &) {
    &._1 {
      transform: rotate(45deg) translateY(var(--_k));
    }
    &._2 {
      opacity: 0;
    }
    &._3 {
      transform: rotate(-45deg) translateY(calc(-1 * var(--_k)));
    }
  }
`;

export const SideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  height: calc(100dvh - var(--header-height));
  top: var(--header-height);
  right: 0;
  width: 100vw;
  transform: translateX(100%);
  transition: all 0.3s ease;
  --_s: 1px;
  --_bs: 30px;
  background-color: var(--color-neutral-200);
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
  &.active {
    transform: translateX(0%);
  }
`;

export const SideBarUpper = styled.div`
  width: 100%;
  height: 57.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  .side-link-upper {
    font-size: var(--fs-l);
    font-weight: 700;
  }
  img {
    height: auto;
    width: 2.5rem;
  }
`;

export const SideBarLower = styled.div`
  height: 42.5%;
  background-color: var(--color-black);
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  font-size: var(--fs-2xs);
  overflow: hidden;
  position: relative;

  .lower-heading {
    max-width: 21.25rem;
  }

  * {
    z-index: 1;
    position: relative;
  }
  &::before {
    content: '';
    position: absolute;
    background: radial-gradient(#ff29c3, #174aff, transparent, transparent);
    filter: blur(50px);
    height: 100%;
    aspect-ratio: 1/1;
    border-radius: 50%;
    opacity: 0.5;
    top: 0;
    left: 0;
    transform: translate(-40%, 10%) scale(1.1);
  }
`;

export const lowerLinkStyles = css`
  color: var(--color-black);
  background-color: var(--color-white);
  font-weight: 500;
`;
