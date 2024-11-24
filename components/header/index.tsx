import { Link } from '@components/common-button';
import CommonFullWidthWrapper from '@components/common-full-width-wrapper';
import {
  HamLine,
  HamWrapper,
  headerContainerStyles,
  headerImageStyles,
  headerLogoLinkStyles,
  HeaderNavWrapper,
  headerWrapperStyles,
  lowerLinkStyles,
  SideBarLower,
  SideBarUpper,
  SideBarWrapper,
} from '@components/header/styles';
import Heading from '@components/heading';
import { headerContent, headerLinks, logo, name } from '@data';
import { commonLinkStyles } from '@styles/global';
import Image from 'next/image';
import A from 'next/link';
import { useRouter } from 'next/router';
import { MouseEventHandler, useRef } from 'react';

const { changedFont, link, title } = headerContent;

const Header = () => {
  const { pathname } = useRouter();
  const sideBarRef = useRef<HTMLDivElement>(null);
  const headerNavRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const hamRef = useRef<HTMLButtonElement>(null);

  const hamClickHandler: MouseEventHandler<
    HTMLButtonElement | HTMLAnchorElement
  > = () => {
    hamRef.current?.classList.toggle('active');
    sideBarRef.current?.classList.toggle('active');
    headerNavRef.current?.classList.toggle('hidden');
    logoRef.current?.classList.toggle('hidden');
  };

  const sideNavLinksMapper = ({ title, url }: (typeof headerLinks)[0]) => {
    const key = 'side-' + url;
    return (
      <A
        href={url}
        key={key}
        className="side-link-upper"
        css={commonLinkStyles}
        onClick={hamClickHandler}
      >
        {title}
      </A>
    );
  };

  const linksMapper = ({
    title,
    url,
    isButton,
    // tryToFindClass,
  }: (typeof headerLinks)[0]) => {
    const getClassName = () => {
      const arr = [];
      if (isButton) {
        arr.push('button');
      } else {
        arr.push('link link-animation');
        if (pathname === url) {
          arr.push('link active-animation');
        }
      }
      return arr.join(' ');
    };

    return (
      <Link
        href={url}
        className={getClassName()}
        key={url}
        css={!isButton && commonLinkStyles}
      >
        {title}
      </Link>
    );
  };

  return (
    <CommonFullWidthWrapper
      wrapperCss={headerWrapperStyles}
      css={headerContainerStyles}
      element="header"
      notFps
    >
      <A css={headerLogoLinkStyles} href="/" aria-label="home">
        <Image
          ref={logoRef}
          src={logo.black}
          alt={name}
          css={headerImageStyles}
          height={42}
        />
      </A>
      <HeaderNavWrapper ref={headerNavRef}>
        {headerLinks.map(linksMapper)}
      </HeaderNavWrapper>
      <HamWrapper
        aria-label="menu"
        type="button"
        onClick={hamClickHandler}
        ref={hamRef}
      >
        <HamLine className="line _1" />
        <HamLine className="line _2" />
        <HamLine className="line _3" />
      </HamWrapper>
      <SideBarWrapper ref={sideBarRef}>
        <SideBarUpper>
          <Image src={logo.black} alt={name} height={70} />
          {headerLinks.map(sideNavLinksMapper)}
        </SideBarUpper>
        <SideBarLower>
          <Heading
            $size="1xl"
            text={title}
            cursiveTextIndex={changedFont}
            element="h2"
            $color="white"
            className="lower-heading"
          />
          <Link href={link.url} css={lowerLinkStyles} onClick={hamClickHandler}>
            {link.text}
          </Link>
        </SideBarLower>
      </SideBarWrapper>
    </CommonFullWidthWrapper>
  );
};

export default Header;
