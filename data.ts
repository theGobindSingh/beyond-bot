import cartIcon from '@images/cart.png';
import dataImg from '@images/data.png';
import galleryIcon from '@images/gallery.png';
import labImg from '@images/lab.png';
import loadingIcon from '@images/loading.png';
import coloredLogo from '@images/logo-colored.png';
import backLogo from '@images/logo.png';
import searchIcon from '@images/search.png';
import teachImg from '@images/teach.png';
import userIcon from '@images/user.png';
import homeVisionImg from '@images/vision.png';
import { StaticImageData } from 'next/image';

export const name = 'Beyond Bot';

export const description = "It's Beyond Bot";

export const email = 'neo@beyondbot.ai';

export const location = 'Pune, India';

export const copyrightText = `© 2024 Beyond Bot Technology.
All rights reserved.`;

export const logo = {
  black: backLogo,
  colored: coloredLogo,
};

export const headerLinks: {
  title: string;
  url: string;
  isButton?: boolean;
  tryToFindClass?: string;
}[] = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Services',
    url: '/services',
  },
  {
    title: 'Partner',
    url: '/partner',
  },
  {
    title: 'Contact',
    url: '/contact',
    isButton: true,
    tryToFindClass: 'contact-section',
  },
];

export const homeHero = {
  text: 'Revolutionize your website with Our AI Agents',
  changedFont: [2, 22, 29, 41],
  link: {
    url: '/services',
    text: 'Try the demo now',
  },
};

const services: {
  img: string | StaticImageData;
  title: string;
  subTitle: string;
  description: string;
  bullets: {
    title: string;
    img: string | StaticImageData;
  }[];
}[] = [
  {
    title: 'E-Commerce',
    subTitle:
      'Our e-commerce agent is designed to elevate the shopping experience and improve customer satisfaction.',
    description: `Our solution empowers customers to directly interact with products, enabling them to ask abstract 
      questions and receive insightful responses. It enhances website search capabilities, offering a seamless 
      and intuitive experience. It also enables image-based recommendations and support for outfit building.`,
    img: teachImg,
    bullets: [
      {
        title: 'Outfit Matching and Recommendations',
        img: cartIcon,
      },
      {
        title: 'Context-aware Searches',
        img: searchIcon,
      },
      {
        title: 'Natural Language Queries',
        img: userIcon,
      },
      {
        title: 'Multilingual Support',
        img: loadingIcon,
      },
      {
        title: 'Image Reverse Search',
        img: galleryIcon,
      },
    ],
  },
  {
    title: 'Public Sector',
    subTitle:
      'Our public sector agent is designed to improve accessibility and streamline public services.',
    description: `Our solution offers comprehensive search and answers related to public policy and schemes. Our 
    intelligent agent can assist users by taking actions and helping them fill out forms. Additionally, we provide 
    multi-language support to ensure wider accessibility and inclusivity, making our service more versatile and 
    user-friendly.`,
    img: dataImg,
    bullets: [
      {
        title: 'Outfit Matching and Recommendations',
        img: cartIcon,
      },
      {
        title: 'Context-aware Searches',
        img: searchIcon,
      },
      {
        title: 'Natural Language Queries',
        img: userIcon,
      },
      {
        title: 'Multilingual Support',
        img: loadingIcon,
      },
    ],
  },
  {
    title: 'Healthcare Sector',
    subTitle: `Our healthcare agent are tailored to support both medical professionals and patients, enhancing care 
    and efficiency`,
    description: `Our solution assists patients in finding the right doctors and booking appointments with ease. It 
    provides comprehensive information on medications, treatments, and healthcare facilities. Additionally, it enables 
    symptom checking and health risk assessments to ensure timely care. We also support telemedicine consultations and 
    follow-up scheduling, making healthcare more accessible and convenient.`,
    img: labImg,
    bullets: [
      {
        title: 'Outfit Matching and Recommendations',
        img: cartIcon,
      },
      {
        title: 'Context-aware Searches',
        img: searchIcon,
      },
      {
        title: 'Natural Language Queries',
        img: userIcon,
      },
      {
        title: 'Multilingual Support',
        img: loadingIcon,
      },
    ],
  },
];

export const homeServices = {
  title: 'Our Services',
  changedFont: [1, 7],
  services,
};

export const homeVision = {
  title: 'Vision & Commitment',
  changedFont: [2, 17],
  link: {
    url: '/partner',
    text: 'Partner with us',
  },
  text: `At our core, we envision a future where website interactions are driven by advanced AI, creating online 
  experiences that are as intuitive and engaging as offline ones. We are pioneering the future of web interactions 
  with our cutting-edge AI-powered agents, providing seamless and intuitive online experiences that rival the best 
  offline interactions. Our commitment is to help industries, businesses, and sectors derive maximum benefit from 
  generative AI advancements, making this technology accessible and easy to integrate. By integrating advanced AI 
  technology, we help businesses across various sectors maximize their engagement and efficiency, providing tailored 
  solutions that enhance user satisfaction and drive growth. Join us in transforming digital experiences and unlocking 
  the full potential of AI for your business.`,
  imgUrl: homeVisionImg,
};

export const contactSection = {
  title: 'Get in touch',
  text: `Have questions? Reach out today and let's elevate your customer's experience together! We're here to help!`,
  link: {
    url: '/contact',
    text: 'Contact us',
  },
};

export const servicesPageData = {
  title: 'Transforming Industries with Advanced AI Agents',
  changedFont: [5, 16, 26, 33, 43],
  services,
};
