import { containerSize } from '@components/common-full-width-wrapper/styles';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const contactMainWrapperStyles = css`
  padding-bottom: 0;
`;

export const contactMainContainerStyles = css`
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
`;

export const ContactUpperContainer = styled.div`
  height: 40%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  .heading {
    max-width: 17ch;
    font-size: calc(var(--fs-4xl) + var(--fs-4xs));
    position: relative;
  }

  .text {
    max-width: 62.5ch;
    font-size: var(--fs-m);
    font-weight: 600;
    color: #4d53a2;
    line-height: 2.5rem;
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
`;

export const ContactLowerWrapper = styled.div`
  height: 60%;
  background-color: var(--color-white);
`;

export const ContactLowerContainer = styled.div`
  padding: 0 calc((100% - min(${containerSize}, 1800px)) / 2);
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  --_cw: 60%;

  .img {
    width: calc(100% - var(--_cw) - 2rem);
    height: auto;
    max-height: 80%;
    object-fit: contain;
  }
`;

export const FormContainer = styled.form`
  width: var(--_cw);
  height: 80%;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, 1fr);
`;

export const CommonFormItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  font-size: var(--fs-2xs);

  &.long-item {
    grid-column: 1 / -1;
    grid-row: 3 / 5;
  }

  label {
    font-family: inherit;
    font-weight: 600;
  }

  textarea,
  input {
    height: 100%;
    width: 100%;
    font-size: var(--fs-1xs);
    font-family: inherit;
    border: 3px solid var(--color-gray-300);
    border-radius: 0.5rem;
    font-weight: 500;
    &::placeholder {
      color: var(--color-gray-600);
      font-size: var(--fs-2xs);
    }
  }
  input {
    padding: 0 1rem;
    min-height: 2.5rem;
  }
  textarea {
    padding: 1rem;
  }
`;

export const buttonStyles = css`
  grid-row: 5 / 6;
  grid-column: 2 / 3;
  margin-left: auto;
  height: fit-content;
  font-size: var(--fs-s);
`;