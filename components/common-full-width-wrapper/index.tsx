import { css } from '@emotion/react';
import {
  FullWidthWrapper,
  FullWidthWrapperProps,
} from '@kami-ui/react-components';
import { forwardRef, Ref } from 'react';

const containerStyles = css`
  @media (max-width: 640px) {
    width: 90%;
  }
`;

const CommonFullWidthWrapperWithoutRef = (
  props: FullWidthWrapperProps,
  ref: Ref<HTMLElement>,
) => {
  const newProps: FullWidthWrapperProps = {
    containerSize: '85%',
    ...props,
  };
  return <FullWidthWrapper css={containerStyles} {...newProps} ref={ref} />;
};

const CommonFullWidthWrapper = forwardRef(CommonFullWidthWrapperWithoutRef);
export default CommonFullWidthWrapper;
