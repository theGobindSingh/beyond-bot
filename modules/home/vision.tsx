import CommonFullWidthWrapper from '@components/common-full-width-wrapper';
import Heading from '@components/heading';
import { P } from '@components/html';
import { homeVision, name } from '@data';
import {
  homeServiceContainerStyles,
  HomeServiceContent,
  homeServiceImgStyles,
  homeServiceLinkStyles,
} from '@modules/home/styles';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

const HomeVision = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const imgElem = imgRef.current;
    const callback: IntersectionObserverCallback = (entries) => {
      if (!imgElem) return;
      const { isIntersecting } = entries?.[0] ?? ({} as never);
      if (isIntersecting) {
        imgElem.classList.add('active');
      } else {
        imgElem.classList.remove('active');
      }
    };
    const observer = new IntersectionObserver(callback, {
      rootMargin: '-30% 0%',
      threshold: 0.5,
    });
    observer.observe(imgElem!);
    return () => observer.disconnect();
  }, []);
  const onLinkMouseEnter = () => {
    const imgElem = imgRef.current;
    if (!imgElem) return;
    imgElem.classList.add('forced-active');
  };
  const onLinkMouseLeave = () => {
    const imgElem = imgRef.current;
    if (!imgElem) return;
    imgElem.classList.remove('forced-active');
  };
  return (
    <CommonFullWidthWrapper
      bg="var(--color-gray-300)"
      css={homeServiceContainerStyles}
    >
      <HomeServiceContent>
        <Heading
          text={homeVision.title}
          cursiveTextIndex={homeVision.changedFont}
          className="vision-title"
        />
        <P className="vision-text">{homeVision.text}</P>
        <Link
          href={homeVision.link.url}
          css={homeServiceLinkStyles}
          onMouseEnter={onLinkMouseEnter}
          onMouseLeave={onLinkMouseLeave}
        >
          {homeVision.link.text}
        </Link>
      </HomeServiceContent>
      <Image
        src={homeVision.imgUrl}
        alt={`${name} - ${homeVision.title} | Designed by Freepik`}
        width={500}
        height={500}
        css={homeServiceImgStyles}
        ref={imgRef}
      />
    </CommonFullWidthWrapper>
  );
};

export default HomeVision;
