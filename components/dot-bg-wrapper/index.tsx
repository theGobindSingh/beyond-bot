import {
  DotBgMainWrapper,
  DotBgWrapper,
} from '@components/dot-bg-wrapper/styles';
import { FpsWrapper } from '@styles/global';
import { PropsWithChildren, useCallback, useEffect, useRef } from 'react';

const DotBg = ({
  children,
  withoutChildWrapper = false,
}: PropsWithChildren<{ withoutChildWrapper?: boolean }>) => {
  const childWrapperRef = useRef<HTMLDivElement>(null);
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
    <>
      {!withoutChildWrapper && (
        <FpsWrapper ref={childWrapperRef}>{children}</FpsWrapper>
      )}
      {withoutChildWrapper && children}
      <DotBgMainWrapper className="dot-wrapper">
        <DotBgWrapper ref={dotElemRef} />
      </DotBgMainWrapper>
    </>
  );
};

export default DotBg;
