import { css } from '@emotion/react';
import {
  FullWidthWrapper,
  FullWidthWrapperProps,
} from '@kami-ui/react-components';

const containerStyles = css`
  @media (max-width: 640px) {
    width: 90%;
  }
`;

const CommonFullWidthWrapper = (props: FullWidthWrapperProps) => {
  const newProps: FullWidthWrapperProps = {
    containerSize: '85%',
    ...props,
  };
  return <FullWidthWrapper css={containerStyles} {...newProps} />;
};

export default CommonFullWidthWrapper;
