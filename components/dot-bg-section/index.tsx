import {
  containerSize,
  wrapperStyles,
} from '@components/common-full-width-wrapper/styles';
import DotBg from '@components/dot-bg-wrapper';
import { css, SerializedStyles } from '@emotion/react';
import { FullWidthWrapper } from '@kami-ui/react-components';
import { commonWrapperStyles } from '@styles/global';
import { PropsWithChildren, ReactNode, useMemo } from 'react';

interface DotBgSectionProps {
  className?: string;
  wrapperCss?: SerializedStyles;
  secondContainer?: ReactNode;
  notFps?: boolean;
}

const containerStyles = css`
  z-index: 1;
`;

const DotBgSection = ({
  children,
  className,
  wrapperCss,
  secondContainer,
  notFps = false,
}: PropsWithChildren<DotBgSectionProps>) => {
  const finalWrapperCss = useMemo(
    () => [
      css`
        --padding-if-full: 0 calc((100% - min(${containerSize}, 1800px)) / 2);
        ${commonWrapperStyles}
        ${wrapperStyles()}
        overflow: hidden;
        .dot-wrapper {
          position: absolute;
        }
      `,
      wrapperCss,
    ],
    [wrapperCss],
  );

  return (
    <FullWidthWrapper
      secondContainer={
        <>
          {secondContainer}
          <DotBg withoutChildWrapper />
        </>
      }
      element="section"
      wrapperClassName={notFps ? (undefined as unknown as string) : 'fps'}
      wrapperCss={finalWrapperCss as any}
      css={containerStyles}
      className={className}
      containerSize={containerSize}
    >
      {children}
    </FullWidthWrapper>
  );
};

export default DotBgSection;
