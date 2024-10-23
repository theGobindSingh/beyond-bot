import DotBgSection from '@components/dot-bg-section';
import Heading from '@components/heading';
import { homeHero } from '@data';
import heroImg from '@images/hero.png';
import {
  HomeGradient,
  homeHeroContainerStyles,
  HomeHeroContent,
  HomeHeroLinkContainer,
  homeHeroLinkStyles,
} from '@modules/home/styles';
import Image from 'next/image';
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
    <DotBgSection css={homeHeroContainerStyles}>
      <HomeHeroContent>
        <Heading
          text={homeHero.text}
          cursiveTextIndex={homeHero.changedFont}
          element="h1"
          className="home-title"
          $margin="auto 0 0.75em 0"
        />
        <HomeHeroLinkContainer>
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
        </HomeHeroLinkContainer>
      </HomeHeroContent>
      <Image src={heroImg} alt="" className="img" />
    </DotBgSection>
  );
};

export default HomeHero;
