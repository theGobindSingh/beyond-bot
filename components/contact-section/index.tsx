import {
  ContactSectionContainer,
  ContactSectionGradient,
  contactSectionLinkStyles,
  ContactSectionWrapper,
} from '@components/contact-section/styles';
import { H2, P } from '@components/html';
import { contactSection } from '@data';
import Link from 'next/link';
import { useRef } from 'react';

const ContactSection = () => {
  const gradientRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const onLinkMouseEnter = () => {
    const gradientElem = gradientRef.current;
    if (!gradientElem) return;
    gradientElem.classList.add('active');

    const containerElem = containerRef.current;
    if (!containerElem) return;
    containerElem.classList.add('active');
  };
  const onLinkMouseLeave = () => {
    const gradientElem = gradientRef.current;
    if (!gradientElem) return;
    gradientElem.classList.remove('active');

    const containerElem = containerRef.current;
    if (!containerElem) return;
    containerElem.classList.remove('active');
  };
  return (
    <ContactSectionWrapper>
      <ContactSectionContainer ref={containerRef}>
        <H2 className="contact-title" $margin="0">
          {contactSection.title}
        </H2>
        <P className="contact-text">{contactSection.text}</P>
        <Link
          className="contact-link"
          href={contactSection.link.url}
          css={contactSectionLinkStyles}
          onMouseEnter={onLinkMouseEnter}
          onMouseLeave={onLinkMouseLeave}
        >
          {contactSection.link.text}
        </Link>
      </ContactSectionContainer>
      <ContactSectionGradient ref={gradientRef} />
    </ContactSectionWrapper>
  );
};

export default ContactSection;
