import { containerSize } from '@components/common-full-width-wrapper/styles';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { mediaQuery } from '@styles/global';

export const homeHeroContainerStyles = css`
  --_i-s: min(37.5vw, 700px);

  display: flex;
  align-items: center;
  justify-content: space-between;

  .home-title {
    max-width: 37.5rem;
    width: 100%;
    font-size: calc(var(--fs-4xl) + var(--fs-4xs));
  }

  .img {
    height: auto;
    width: var(--_i-s);
    margin: auto 0;
  }

  ${mediaQuery.phone} {
    flex-direction: column-reverse;
    justify-content: space-evenly;
    height: 100%;
    max-height: 650px;
    .home-title {
      font-size: var(--fs-3xl);
    }
    .img {
      margin: 0;
      width: 80%;
    }
  }
`;

export const HomeHeroContent = styled.div``;

export const HomeGradient = styled.div`
  position: absolute;
  left: min(-15rem, -15vw);
  bottom: -15rem;
  width: 250px;
  aspect-ratio: 1;
  transition: all 0.3s ease;
  filter: blur(50px);
  background: radial-gradient(#ff29c3, #174aff, transparent, transparent);
  border-radius: 50%;
  opacity: 0.75;
  z-index: -1;
  &.active {
    left: 0;
    bottom: calc(-1 * 250px / 2 + 50%);
    scale: 0;
  }
  ${mediaQuery.phone} {
    left: -12.5rem;
    bottom: -7.5rem;
  }
`;

export const HomeHeroLinkContainer = styled.div`
  position: relative;
  height: fit-content;
  width: fit-content;
  font-size: var(--fs-s);
  ${mediaQuery.phone} {
    font-size: var(--fs-1xs);
  }
`;

export const LinkContainer = styled.div`
  height: fit-content;
  width: fit-content;
  border: 1px solid black;
`;

export const homeServicesWrapperStyles = css``;

export const homeServicesContainerStyles = css`
  width: 100%;
  max-width: 100%;
  /* height: calc(100dvh - var(--header-height)); */
  height: fit-content;
  padding-top: var(--header-height);
  display: flex;
  flex-direction: column;
  justify-content: center;
  .services-heading {
    text-align: center;
    margin: 0em 0 0.5em 0;
  }
  @media (max-width: 640px) {
    width: 100%;
    & > * {
      padding-right: 0;
    }
  }
`;

export const HomeServicesCardsWrapper = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: auto;
  gap: 1.5rem;
  align-items: center;
  justify-content: flex-start;
  scroll-snap-type: x proximity;
  /* height: 80%; */
  width: 100%;
  scroll-behavior: smooth;
  padding: 1rem min(7.5vw, 135px);
  img {
    object-fit: contain;
    margin-left: auto;
  }
  h3 {
    color: var(--color-extra-one);
  }
`;

export const HomeServiceCard = styled.div`
  display: flex;
  aspect-ratio: 5 / 6;
  /* width: calc(40vw - 1.5rem * 2 - (100% - ${containerSize}) / 2); */
  height: 650px;
  flex-shrink: 0;
  scroll-snap-align: center;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1.5rem 2rem;
  transition: all 0.3s ease;
  border: 1px solid var(--color-gray-100);
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
  ${mediaQuery.phone} {
    height: 67.5vh;
    width: 75vw;
    overflow-y: auto;
    overflow-x: hidden;
    .text {
      line-height: 1.5rem;
    }
    img {
      height: auto;
      width: 100%;
    }
  }
`;

export const HomeServiceContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .vision-text {
    line-height: 2.25rem;
  }
  @media (max-width: 900px) {
    width: 100%;
    .vision-text {
      line-height: 1.5rem;
    }
  }
`;

//here
export const homeServiceLinkStyles = css`
  margin: 2rem 0;
  &:hover {
    box-shadow: 0 0 8px 0px var(--color-gray-600);
  }
  ${mediaQuery.phone} {
    margin: 1rem auto;
    font-size: var(--fs-1xs);
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
  &:hover,
  &.forced-active {
    filter: saturate(100%);
  }
  @media (max-width: 900px) {
    filter: saturate(100%);
  }
  @media (max-width: 900px) {
    width: 100%;
  }
  ${mediaQuery.phone} {
    display: none;
  }
`;

export const homeVisionContainerStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
