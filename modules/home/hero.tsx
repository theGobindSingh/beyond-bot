import Heading from '@components/heading';
import { homeHero } from '@data';
import {
  HomeGradient,
  homeHeroLinkStyles,
  HomeHeroWrapper,
} from '@modules/home/styles';
import Link from 'next/link';
import { MouseEventHandler, useRef } from 'react';

const HomeHero = () => {
  const linkElemRef = useRef<HTMLAnchorElement>(null);

  const gradientElemRef = useRef<HTMLDivElement>(null);

  const onLinkMouseEnter: MouseEventHandler<HTMLAnchorElement> = () => {
    const gradientElem = gradientElemRef.current;
    if (!gradientElem) return;
    gradientElem.classList.add('active');
  };

  const onLinkMouseLeave: MouseEventHandler<HTMLAnchorElement> = () => {
    const gradientElem = gradientElemRef.current;
    if (!gradientElem) return;
    gradientElem.classList.remove('active');
  };

  return (
    <HomeHeroWrapper>
      <Heading
        text={homeHero.text}
        cursiveTextIndex={homeHero.changedFont}
        element="h1"
        className="home-title"
      />
      <Link
        href={homeHero.link.url}
        css={homeHeroLinkStyles}
        ref={linkElemRef}
        onMouseEnter={onLinkMouseEnter}
        onMouseLeave={onLinkMouseLeave}
      >
        {homeHero.link.text}
      </Link>
      <HomeGradient ref={gradientElemRef} />
    </HomeHeroWrapper>
  );
};

export default HomeHero;
