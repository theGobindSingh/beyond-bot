import { css } from '@emotion/react';
import styled from '@emotion/styled';
import {
  commonLinkStyles,
  commonWrapperStyles,
  mediaQuery,
} from '@styles/global';

export const homeDotBgWrapperStyles = css`
  background: var(--color-neutral-200);
`;

export const homeWrapperStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HomeHeroWrapper = styled.section`
  ${commonWrapperStyles}
  align-items: flex-start;
  .home-title {
    max-width: 37.5rem;
    width: 100%;
  }
`;

export const HomeGradient = styled.div`
  position: absolute;
  left: -10rem;
  bottom: -2.5rem;
  width: 250px;
  aspect-ratio: 1;
  transition: all 0.3s;
  filter: blur(50px);
  background: radial-gradient(
    var(--color-primary-500),
    var(--color-secondary-300),
    transparent
  );
  border-radius: 50%;
  opacity: 0.75;
  z-index: -1;
  &.active {
    left: -2rem;
    bottom: -3.5rem;
    scale: 0;
  }
`;

export const homeHeroLinkStyles = css`
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
  &:hover {
    background-color: var(--color-white);
    color: var(--color-gray-800);
    border: 1px solid var(--color-gray-800);
    box-shadow: 0 0 32px -4px var(--color-secondary-300);
  }
  ${mediaQuery.phone} {
    font-size: var(--fs-2xs);
  }
`;

export const LinkContainer = styled.div`
  height: fit-content;
  width: fit-content;
  border: 1px solid black;
`;

export const HomeServicesCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  justify-content: center;
  align-items: center;
  @media (max-width: 1400px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const HomeServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1.5rem 2rem;
  transition: all 0.3s ease;
  border: 1px solid var(--color-gray-100);
  height: 100%;
  gap: 1rem;
  box-shadow: 0 0 1.25rem var(--color-gray-200);
  cursor: default;
  * {
    cursor: inherit;
  }
  &:hover {
    transform: scale(1.01);
    box-shadow: 0 0 1.25rem var(--color-gray-300);
  }
  .text {
    max-width: 80%;
  }
`;

export const homeServiceContainerStyles = css`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const HomeServiceContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .vision-text {
    line-height: 2rem;
  }
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const homeServiceLinkStyles = css`
  ${homeHeroLinkStyles}
  margin: 2rem 0;
  &:hover {
    box-shadow: 0 0 8px 0px var(--color-gray-600);
  }
`;

export const homeServiceImgStyles = css`
  width: 40%;
  height: auto;
  aspect-ratio: 4 / 5;
  max-width: 480px;
  border-radius: 0.5rem;
  object-fit: cover;
  filter: saturate(0%);
  transition: all 0.3s ease-in-out;
  &.active {
    filter: saturate(100%);
  }
  &:hover,
  &.forced-active {
    filter: saturate(0%);
  }
  @media (max-width: 900px) {
    width: 100%;
  }
`;
