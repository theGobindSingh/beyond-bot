import CommonFullWidthWrapper from '@components/common-full-width-wrapper';
import {
  childrenWrapperStyles,
  DotBgWrapper,
  wrapperStyles,
} from '@components/dot-bg-wrapper/styles';
import { SerializedStyles } from '@emotion/react';
import { FullWidthWrapperProps } from '@kami-ui/react-components';
import { useCallback, useEffect, useRef } from 'react';

const DotBg = ({
  children,
  wrapperCss,
  ...props
}: Omit<FullWidthWrapperProps, 'secondContainer'>) => {
  const dotElemRef = useRef<HTMLDivElement>(null);

  const mouseMoveHandler = useCallback((e: MouseEvent) => {
    const dotElem = dotElemRef.current;
    if (!(e && window && dotElem)) return;
    const { clientX, clientY } = e;
    const { innerWidth } = window;
    const moveFactor = (1.75 * innerWidth) / 100;
    const posX = -((clientX / innerWidth) * moveFactor - moveFactor / 2);
    const posY = -((clientY / innerWidth) * moveFactor - moveFactor / 2);
    dotElem.style.transform = `translate(${posX}px, ${posY}px)`;
  }, []);

  const resizeHandler = useCallback(() => {
    window.removeEventListener('mousemove', mouseMoveHandler);
    if (window.innerWidth > 640) {
      window.addEventListener('mousemove', mouseMoveHandler);
    }
  }, [mouseMoveHandler]);

  useEffect(() => {
    resizeHandler();
    window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
      window.removeEventListener('resize', resizeHandler);
    };
  }, [resizeHandler, mouseMoveHandler]);

  return (
    <CommonFullWidthWrapper
      secondContainer={<DotBgWrapper ref={dotElemRef} />}
      wrapperCss={[wrapperStyles, wrapperCss] as unknown as SerializedStyles}
      css={childrenWrapperStyles}
      element="div"
      {...props}
    >
      {children}
    </CommonFullWidthWrapper>
  );
};

export default DotBg;
