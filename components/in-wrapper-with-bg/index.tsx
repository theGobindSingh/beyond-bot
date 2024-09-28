import {
  InWrapperBg,
  InWrapperWithBgWrapper,
} from '@components/in-wrapper-with-bg/styles';
import { PropsWithChildren } from 'react';

const InWrapperWithBg = ({
  children,
  className,
  bgColor = `var(--color-neutral-200)`,
}: PropsWithChildren<{ className?: string; bgColor?: string }>) => {
  return (
    <InWrapperWithBgWrapper className={className}>
      <InWrapperBg className="wrapper-bg" $bgColor={bgColor} />
      {children}
    </InWrapperWithBgWrapper>
  );
};

export default InWrapperWithBg;
