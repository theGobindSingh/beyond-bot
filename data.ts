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
  changedFont: [1, 7],
  services: [
    {
      title: 'E-Commerce',
      imgUrl: '/assets/images/teach.png',
      text: `Our solution empowers customers to directly interact with products, enabling them to ask abstract 
      questions and receive insightful responses. It enhances website search capabilities, offering a seamless 
      and intuitive experience. It also enables image-based recommendations and support for outfit building.`,
    },
    {
      title: 'Public Sector',
      imgUrl: '/assets/images/data.png',
      text: `Our solution offers comprehensive search and answers related to public policy and schemes. Our 
      intelligent agent can assist users by taking actions and helping them fill out forms. Additionally, we 
      provide multi-language support to ensure wider accessibility and inclusively, making our service more 
      versatile and user-friendly.`,
    },
    {
      title: 'Healthcare Sector',
      imgUrl: '/assets/images/lab.png',
      text: `Our solution assists patients in finding the right doctors and booking appointments with ease. 
      It provides comprehensive information on medications, treatments, and healthcare facilities. Additionally, 
      it enables symptom checking and health risk assessments to ensure timely care. We also support tele-medicine 
      consultations and follow-up scheduling, making healthcare more accessible and convenient.`,
    },
  ],
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
  imgUrl:
    'https://img.freepik.com/free-photo/two-crop-hands-handshake_23-2147711143.jpg',
};

export const contactSection = {
  title: 'Get in touch',
  text: `Have questions? Reach out today and let's elevate your customer's experience together! We're here to help!`,
  link: {
    url: '/contact',
    text: 'Contact us',
  },
};
