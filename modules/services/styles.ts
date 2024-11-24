import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { mediaQuery } from '@styles/global';

export const servicesMainWrapperStyles = css`
  padding-bottom: 0;
  ${mediaQuery.phone} {
    height: auto;
  }
`;

export const servicesMainContainerStyles = css`
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding-bottom: 0;
  & > * {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ${mediaQuery.phone} {
    height: auto;
  }
`;

export const ServicesUpperContainer = styled.div`
  height: 40%;
  text-align: center;
  .services-heading {
    max-width: 17ch;
    font-size: calc(var(--fs-4xl) + var(--fs-4xs));
    position: relative;
  }
  &::before {
    background: radial-gradient(#ff29c3, #174aff, transparent, transparent);
    filter: blur(50px);
    content: '';
    height: 400px;
    width: 400px;
    border-radius: 50%;
    position: absolute;
    transform: translate(95%, 60%);
    opacity: 0.5;
  }
  ${mediaQuery.phone} {
    height: auto;
    .services-heading {
      max-width: 90%;
      font-size: var(--fs-1xl);
      margin: 3rem 0;
    }
  }
`;

export const ServicesLowerWrapper = styled.div`
  height: 60%;
  background-color: var(--color-white);
  ${mediaQuery.phone} {
    height: fit-content;
  }
`;

export const ServicesLowerContainer = styled.div`
  padding: var(--padding-if-full);
  height: 100%;
  width: 100%;
`;

export const ServicesDotsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10%;
  width: 100%;
  gap: 1.5rem;
  scroll-behavior: smooth;
  ${mediaQuery.phone} {
    height: 3rem;
  }
`;

export const ServiceDot = styled.div`
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background-color: #a7abda;
  transition: all 0.3s ease;
  cursor: pointer;
  &.active {
    background-color: #4d53a2;
  }
`;

export const ServicesCardsWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 90%;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  padding-bottom: 0.5rem;
  ${mediaQuery.phone} {
    height: auto;
    align-items: flex-start;
  }
`;

export const ServicesCard = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  scroll-snap-align: center;
  padding: 0 1rem;
  &:nth-of-type(even) {
    flex-direction: row-reverse;
  }
  ${mediaQuery.phone} {
    flex-direction: column-reverse;
    height: fit-content;
    padding: 0;
    &:nth-of-type(even) {
      flex-direction: column-reverse;
      padding: 0;
    }
  }
`;

export const ServiceCardContentUpper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 0.75rem;
  padding-top: 0.75rem;
  font-size: inherit;
`;

export const serviceCardSecondaryBtnStyles = css`
  background-color: #4d53a2;
  font-size: var(--fs-4xs);
  flex-shrink: 0;
  &:hover,
  &:active {
    background-color: #4d53a2;
    color: var(--color-white);
  }
  ${mediaQuery.phone} {
  }
`;

export const ServiceCardContent = styled.div`
  height: 100%;
  width: calc(55% - 1rem);
  .sub-title {
    max-width: 42.5rem;
    color: #4d53a2;
    font-weight: 600;
    line-height: 2rem;
  }
  ${mediaQuery.phone} {
    width: 100%;
    font-size: var(--fs-3xs);
    .title {
      font-size: var(--fs-m);
    }
    .sub-title {
      max-width: 100%;
      line-height: 1.5rem;
      font-size: var(--fs-1xs);
    }
  }
`;

export const serviceCardImgStyles = css`
  max-height: 100%;
  width: 40%;
  height: auto;
  aspect-ratio: 1;
  object-fit: contain;
  ${mediaQuery.phone} {
    width: auto;
    height: 35vh;
    max-width: 70%;
  }
`;

export const ServiceCardBulletsWrapper = styled.ul`
  display: grid;
  padding: 0;
  margin: 0;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  ${mediaQuery.phone} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ServiceCardBullet = styled.li`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  margin: 0;
  gap: 1rem;
  background-color: #f3f4f5;
  ${mediaQuery.phone} {
    font-size: var(--fs-3xs);
    width: 100%;
    padding-right: 0.5rem;
    * {
      font-size: inherit;
    }
  }
`;
