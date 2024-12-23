import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const whyPartnerWrapperStyles = css`
  padding-bottom: 0;
  height: fit-content;
  .main-container {
    width: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    height: fit-content;
  }
`;

export const WhyPartnerUpper = styled.div`
  height: 40svh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  .main-heading {
    font-size: calc(var(--fs-4xl) + var(--fs-4xs));
  }

  .main-link {
    font-size: var(--fs-1xs);
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

  @media (max-width: 750px) {
    gap: 1rem;

    .main-heading {
      font-size: var(--fs-2xl);
      text-align: center;
      width: 90%;
    }
    .main-link {
      font-size: var(--fs-2xs);
    }
  }
`;

export const WhyPartnerLower = styled.div`
  padding: var(--padding-if-full);
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-color: var(--color-white);
  position: relative;
  z-index: 1;
  align-items: center;
  gap: 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;

  @media (max-width: 1700px) {
    & {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (max-width: 1400px) {
    & {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 900px) {
    & {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export const WhyPartnerCard = styled.div`
  border: 3px solid var(--color-gray-200);
  height: 100%;
  overflow: hidden;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  gap: 0.5rem;
  width: 100%;

  .card-img {
    height: 200px;
    width: 100%;
    object-fit: contain;
    margin-bottom: 0.75rem;
  }

  .card-heading {
    color: #3890bf;
    height: 4rem;
    width: 70%;
  }

  .card-text {
    color: var(--color-gray-700);
    line-height: 1.5;
  }
`;

export const idealPartnerWrapperStyles = css`
  height: fit-content;
  min-height: 100dvh;
  padding: 0;
  .ideal-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    height: fit-content;
    position: relative;
    min-height: 100vh;
    padding: 3rem 0;
  }

  .main-heading {
    font-size: calc(var(--fs-4xl) + var(--fs-4xs));
    position: relative;
    z-index: 1;
  }

  @media (max-width: 750px) {
    .main-heading {
      font-size: var(--fs-2xl);
      text-align: center;
      width: 90%;
    }
  }
`;

export const IdealPartnerCardsWrapper = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
  height: fit-content;
  position: relative;
  z-index: 1;

  @media (max-width: 1650px) {
    & {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 1100px) {
    & {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export const IdealPartnerCard = styled.div`
  height: max(55vh, 35rem);
  aspect-ratio: 9 / 11;
  background-color: rgba(255, 255, 255, 1);
  border: 4px solid var(--color-gray-200);
  border-radius: 2.125rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  align-items: center;
  backdrop-filter: blur(1px);
  .card-text-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
  .card-img {
    width: 225px;
    aspect-ratio: 1;
    object-fit: contain;
    margin-bottom: auto;
  }
  .card-heading {
    width: 100%;
    color: #3890bf;
  }
  .card-text {
    line-height: 1.5;
  }

  @media (max-width: 750px) {
    width: 100%;
  }

  @media (max-width: 350px) {
    .card-img {
      width: 100%;
    }
  }
`;

export const BgGradient = styled.div`
  position: absolute;
  height: 500px;
  width: 500px;
  border-radius: 50%;
  background: radial-gradient(
    #ff29c3,
    #174aff,
    transparent,
    #ff29c3,
    transparent
  );
  filter: blur(100px) opacity(0.5);

  &._1 {
    left: -5%;
    bottom: -10%;
  }

  &._2 {
    left: 30%;
    top: 15%;
  }

  &._3 {
    right: 10%;
    bottom: -20%;
  }
`;
