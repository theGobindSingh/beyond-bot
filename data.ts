import businessConsultantImg from '@images/business-consultant.png';
import contactImg from '@images/calendar.png';
import cartIcon from '@images/cart.png';
import clockImg from '@images/clock.png';
import collaborationImg from '@images/collaboration.png';
import dataImg from '@images/data.png';
import galleryIcon from '@images/gallery.png';
import isolationImg from '@images/isolation.png';
import labImg from '@images/lab.png';
import loadingIcon from '@images/loading.png';
import coloredLogo from '@images/logo-colored.png';
import backLogo from '@images/logo.png';
import managerImg from '@images/manager.png';
import receptionImg from '@images/reception.png';
import searchIcon from '@images/search.png';
import solutionProviderImg from '@images/solution-provider.png';
import teachImg from '@images/teach.png';
import userIcon from '@images/user.png';
import homeVisionImg from '@images/vision.png';
import { StaticImageData } from 'next/image';

export const name = 'Beyond Bot';

export const description = "It's Beyond Bot";

export const email = 'neo@beyondbot.ai';

export const location = 'Pune, India';

export const copyrightText = `© 2024 Beyondbot Technology 
Private Limited.
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
  },
];

export const headerContent = {
  title: 'Lets Transform Industries with Advanced AI Agents',
  changedFont: [2, 10, 18, 28, 35, 45],
  link: {
    url: '/services',
    text: 'Try the demo now',
  },
};

export const homeHero = {
  text: 'Revolutionize your website with Our AI Agents',
  changedFont: [2, 22, 29, 41],
  link: {
    url: '/services',
    text: 'Try the demo now',
  },
};

const services: {
  img: StaticImageData;
  title: string;
  subTitle: string;
  description: string;
  link?: {
    url: string;
    text: string;
  };
  bullets: {
    title: string;
    img: StaticImageData;
  }[];
}[] = [
  {
    title: 'E-Commerce',
    link: {
      url: '/contact',
      text: 'BOOK A DEMO',
    },
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
    link: {
      url: '/contact',
      text: 'BOOK A DEMO',
    },
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

export const contactPageData = {
  title: 'Request a Demo',
  changedFont: [3, 11],
  subtitle: `Fill out the form below to discover how BEYONDBOT can help you and your teams. We'll be in touch with you 
  shortly`,
  img: contactImg,
  successMsg: 'Form submitted successfully!',
};

export const partnerPageData: {
  title: string;
  changedFont: number[];
  link: {
    url: string;
    text: string;
  };
  whyPartner: {
    title: string;
    description: string;
    img: StaticImageData;
  }[];
  idealPartner: {
    title: string;
    changedFont: number[];
    cards: {
      title: string;
      description: string;
      img: StaticImageData;
    }[];
  };
} = {
  title: 'Why partner with us',
  changedFont: [1, 7, 13, 17],
  link: {
    url: '/contact',
    text: 'Become a partner',
  },
  whyPartner: [
    {
      title: `Access Cutting-Edge AI Technology`,
      description: `Stay ahead of the curve by gaining early access to our latest AI innovations and exclusive 
      advanced features. Implement cutting-edge AI solutions before your competitors and lead your industry with 
      advanced technological capabilities.`,
      img: isolationImg,
    },
    {
      title: `Shape Product Development`,
      description: `Your valuable input will directly influence the evolution of our AI solutions. We will develop 
      customized features tailored to your specific needs, ensuring perfect alignment with your business goals and 
      providing you with a competitive edge.`,
      img: managerImg,
    },
    {
      title: `Gain Market Visibility`,
      description: `Benefit from co-marketing opportunities that highlight our partnership and your leadership in 
      AI adoption. Enhance your market presence and reputation as an innovator, drawing attention to your 
      forward-thinking approach.`,
      img: receptionImg,
    },
    {
      title: `Receive Dedicated Support`,
      description: `Enjoy priority expert assistance to ensure smooth AI integration and operation. Access exclusive 
      training and resources designed to maximize the potential of our AI solutions in your business, providing you 
      with the support you need to succeed.`,
      img: clockImg,
    },
  ],
  idealPartner: {
    title: 'Our Ideal Partners',
    changedFont: [2, 5, 13],
    cards: [
      {
        title: `Innovative Thinkers`,
        description: `We seek partners who are eager to explore the potential of cutting-edge AI technology. 
        These partners are willing to adopt and innovate with new solutions to stay ahead in the market, driving 
        forward-thinking initiatives within their organizations.`,
        img: solutionProviderImg,
      },
      {
        title: `Customer-Centric`,
        description: `Our ideal partners prioritize their customers and constantly seek ways to enhance the customer 
        experience. They leverage innovative solutions and personalized services to meet the evolving needs of their 
        clients, ensuring satisfaction and loyalty.`,
        img: businessConsultantImg,
      },
      {
        title: `Collaborators`,
        description: `We value partners who are willing to collaborate closely with us, providing honest feedback and 
        insights. This collaboration helps us improve and refine our AI solutions to meet real-world needs, ensuring 
        our technology remains relevant and effective.`,
        img: collaborationImg,
      },
    ],
  },
};
