import coloredLogo from '@images/logo-colored.png';
import backLogo from '@images/logo.png';

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

export const headerLinks = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Service',
    url: '/service',
  },
  {
    title: 'Partner',
    url: '/partner',
  },
  {
    title: 'Contact',
    url: '/contact',
  },
];

export const homeHero = {
  text: 'Revolutionize your website with Our AI Agents',
  changedFont: [2, 22, 29, 41],
  link: {
    url: '/service',
    text: 'Try the demo now',
  },
};

export const homeServices = {
  title: 'Our Services',
  changedFont: [2, 9],
  services: [
    {
      title: 'E-Commerce',
      imgUrl: '/assets/images/e-com.png',
      text: `Our solution empowers customers to directly interact with products, enabling them to ask abstract 
      questions and receive insightful responses. It enhances website search capabilities, offering a seamless 
      and intuitive experience. It also enables image-based recommendations and support for outfit building.`,
    },
    {
      title: 'Public Sector',
      imgUrl: '/assets/images/public.png',
      text: `Our solution offers comprehensive search and answers related to public policy and schemes. Our 
      intelligent agent can assist users by taking actions and helping them fill out forms. Additionally, we 
      provide multi-language support to ensure wider accessibility and inclusively, making our service more 
      versatile and user-friendly.`,
    },
    {
      title: 'Healthcare Sector',
      imgUrl: '/assets/images/health.png',
      text: `Our solution assists patients in finding the right doctors and booking appointments with ease. 
      It provides comprehensive information on medications, treatments, and healthcare facilities. Additionally, 
      it enables symptom checking and health risk assessments to ensure timely care. We also support tele-medicine 
      consultations and follow-up scheduling, making healthcare more accessible and convenient.`,
    },
  ],
};
