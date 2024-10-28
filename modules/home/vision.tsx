import CommonFullWidthWrapper from '@components/common-full-width-wrapper';
import Heading from '@components/heading';
import { P } from '@components/html';
import { homeVision, name } from '@data';
import {
  HomeServiceContent,
  homeServiceImgStyles,
  homeServiceLinkStyles,
  homeVisionContainerStyles,
} from '@modules/home/styles';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

const HomeVision = () => {
  const imgRef = useRef<HTMLImageElement>(null);
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
      bg="var(--color-gray-100)"
      css={homeVisionContainerStyles}
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
