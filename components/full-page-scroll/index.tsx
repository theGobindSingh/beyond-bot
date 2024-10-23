import { FpsWrapper } from '@styles/global';
import Lenis from 'lenis';
import Snap from 'lenis/snap';
import { Children, PropsWithChildren, useEffect, useRef } from 'react';

const FullPageScroll = ({ children }: PropsWithChildren<unknown>) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;

    const lenis = new Lenis({
      wrapper: ref.current,
    });

    const raf = (time: DOMHighResTimeStamp) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    const snap = new Snap(lenis, {
      type: 'mandatory',
    });

    const { innerHeight } = window;

    for (let i = 0; i < Children.count(children); i += 1) {
      snap.add(i * innerHeight);
    }

    return () => {
      lenis.destroy();
      snap.destroy();
    };
  }, [children]);
  return <FpsWrapper ref={ref}>{children}</FpsWrapper>;
};

export default FullPageScroll;
