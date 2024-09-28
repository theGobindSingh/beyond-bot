import styled from '@emotion/styled';
import { commonWrapperStyles } from '@styles/global';

export const InWrapperWithBgWrapper = styled.section`
  ${commonWrapperStyles}
`;

export const InWrapperBg = styled.div<{ $bgColor: string }>`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100%;
  background: ${({ $bgColor }) => $bgColor};
`;
