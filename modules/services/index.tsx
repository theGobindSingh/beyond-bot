import DotBgSection from '@components/dot-bg-section';
import Heading from '@components/heading';
import { P, Span } from '@components/html';
import { description, name, servicesPageData } from '@data';
import {
  ServiceCardBullet,
  ServiceCardBulletsWrapper,
  ServiceCardContent,
  serviceCardImgStyles,
  ServiceDot,
  ServicesCard,
  ServicesCardsWrapper,
  ServicesDotsContainer,
  ServicesLowerContainer,
  ServicesLowerWrapper,
  servicesMainContainerStyles,
  servicesMainWrapperStyles,
  ServicesUpperContainer,
} from '@modules/services/styles';
import Head from 'next/head';
import Image from 'next/image';
import { MouseEventHandler, useCallback, useEffect, useRef } from 'react';

const { title, changedFont, services } = servicesPageData;

const ServicesModule = () => {
  const dotsWrapperRef = useRef<HTMLDivElement>(null);
  const cardsWrapperRef = useRef<HTMLDivElement>(null);
  const currentIndex = useRef<number>(0);
  const interval = useRef<NodeJS.Timeout | undefined>(undefined);
  const timeout = useRef<NodeJS.Timeout | undefined>(undefined);

  const getElements = useCallback(() => {
    const dotsWrapper = dotsWrapperRef.current;
    const cardsWrapper = cardsWrapperRef.current;
    const allDots = Array.from(dotsWrapper?.children ?? []) as HTMLDivElement[];
    const allCards = Array.from(
      cardsWrapper?.children ?? [],
    ) as HTMLDivElement[];
    return { allDots, allCards };
  }, []);

  const dotsMapper = (_: unknown, index: number) => {
    const key = `services-dots-${index}`;
    const clickHandler: MouseEventHandler<HTMLDivElement> = ({
      currentTarget: target,
    }) => {
      const { allDots, allCards } = getElements();
      const targetIndex = allDots.indexOf(target);
      if (targetIndex === -1) return;
      const targetCard = allCards[targetIndex];
      targetCard?.scrollIntoView({ behavior: 'smooth' });
    };
    return (
      <ServiceDot
        key={key}
        className={index === 0 ? 'active' : ''}
        onClick={clickHandler}
      />
    );
  };

  const cardsMapper = (
    { bullets, title: cardTitle, subTitle, img }: (typeof services)[0],
    index: number,
  ) => {
    const key = `services-card-${index}`;

    const bulletsMapper = (
      { title: bulletTitle, img: bulletImg }: (typeof bullets)[0],
      bulletIndex: number,
    ) => {
      const bulletKey = `services-card-${index}-bullet-${bulletIndex}`;
      return (
        <ServiceCardBullet key={bulletKey}>
          <Image src={bulletImg} alt={bulletTitle} width={20} height={20} />
          <Span $size="2xs">{bulletTitle}</Span>
        </ServiceCardBullet>
      );
    };

    return (
      <ServicesCard key={key} className={index === 0 ? 'active' : ''}>
        <ServiceCardContent>
          <Heading
            $size="l"
            $weight="600"
            text={cardTitle}
            element="h2"
            className="title"
          />
          <P $margin="0 0 2em 0" $size="s" className="sub-title">
            {subTitle}
          </P>
          <ServiceCardBulletsWrapper>
            {bullets.map(bulletsMapper)}
          </ServiceCardBulletsWrapper>
        </ServiceCardContent>
        <Image
          src={img}
          alt={cardTitle}
          width={450}
          height={450}
          css={serviceCardImgStyles}
          priority={index < 2}
        />
      </ServicesCard>
    );
  };

  useEffect(() => {
    const { allDots, allCards } = getElements();

    const observerCallback: IntersectionObserverCallback = (entries) => {
      const intersectingEntry = entries.find((entry) => entry.isIntersecting);
      if (!intersectingEntry) return;
      currentIndex.current = allCards.indexOf(
        intersectingEntry.target as HTMLDivElement,
      );
      for (let i = 0; i < allDots.length; i += 1) {
        if (i === currentIndex.current) {
          allDots[i]?.classList.add('active');
        } else {
          allDots[i]?.classList.remove('active');
        }
      }
    };

    const observerOptions: IntersectionObserverInit = {
      root: cardsWrapperRef.current ?? null,
      threshold: 0.75,
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    allCards.forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, [getElements]);

  const startInterval = useCallback(() => {
    const { allCards } = getElements();
    interval.current = setInterval(() => {
      const nextIndex = currentIndex.current + 1;
      const nextCard = allCards[nextIndex];
      if (nextCard) {
        nextCard.scrollIntoView({ behavior: 'smooth' });
      } else {
        allCards[0]?.scrollIntoView({ behavior: 'smooth' });
      }
    }, 3000);
  }, [getElements]);

  useEffect(() => {
    startInterval();
    return () => {
      clearInterval(interval.current);
    };
  }, [startInterval]);

  const scrollHandler = () => {
    clearInterval(interval.current);
    clearTimeout(timeout.current);
    timeout.current = setTimeout(startInterval, 5000);
  };

  return (
    <>
      <Head>
        <title>{`${name} | Services`}</title>
        <meta name="description" content={description} />
      </Head>
      <DotBgSection
        wrapperCss={servicesMainWrapperStyles}
        css={servicesMainContainerStyles}
      >
        <ServicesUpperContainer>
          <Heading
            text={title}
            cursiveTextIndex={changedFont}
            element="h1"
            className="services-heading"
            $margin="0"
          />
        </ServicesUpperContainer>
        <ServicesLowerWrapper>
          <ServicesLowerContainer>
            <ServicesDotsContainer ref={dotsWrapperRef}>
              {services.map(dotsMapper)}
            </ServicesDotsContainer>
            <ServicesCardsWrapper
              ref={cardsWrapperRef}
              onScroll={scrollHandler}
            >
              {services.map(cardsMapper)}
            </ServicesCardsWrapper>
          </ServicesLowerContainer>
        </ServicesLowerWrapper>
      </DotBgSection>
    </>
  );
};

export default ServicesModule;
