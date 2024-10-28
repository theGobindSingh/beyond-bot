import { containerSize } from '@components/common-full-width-wrapper/styles';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const servicesMainWrapperStyles = css`
  padding-bottom: 0;
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
`;

export const ServicesLowerWrapper = styled.div`
  height: 60%;
  background-color: var(--color-white);
`;

export const ServicesLowerContainer = styled.div`
  padding: 0 calc((100% - min(${containerSize}, 1800px)) / 2);
  height: 100%;
  width: 100%;
`;
