import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Jose Enrique',
  subtitle: '',
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Hello, my name is Jose Enrique Padilla Roman, I am a full-stack web developer. I am currently 21 years old, I am a Computer Systems Engineering student at Fidelitas University and I currently work as a web developer at Accenture.',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1VMLgNM_Ykwc6digQCWVel0qavElx-bGL/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'zaguates.png',
    title: 'Territorio de Zaguates',
    info: 'Application made as part of my University TCU for Territorio de Zaguates',
    info2:
      "In this project I used React, Redux and a NestJS server with MongoDB and Cloudinary for the images all in TypeScript. The project, although it's already approved by the people of Territorio de Zaguates, still needs more data of the remaining dogs.",
    url: 'https://rescatezaguates.netlify.app/adoptions',
    repo: 'https://github.com/A1DS19/shelterTCU', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'FakeFlix',
    info: 'UI copy of Netflix',
    info2:
      'In this project I used React and themoviedb API to extract information from different movies and series.',
    url: 'https://kind-villani-768251.netlify.app/',
    repo: 'https://github.com/A1DS19/fake-flix.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'rooms.png',
    title: 'ChatRooms',
    info: 'An application to create "rooms" and talk by video/audio or both.',
    info2:
      'In this project I used React with Next.js, NestJS on the server, the server has a Rest API and a sockets API for the messages in the rooms also it uses Agora to manage the video part of the chat.',
    url: 'https://videochat-five.vercel.app/auth?type=login',
    repo: 'https://github.com/A1DS19/videochat', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'heart-desease.png',
    title: 'Heart Disease Detector',
    info: 'Predicting heart disease using machine learning.',
    info2:
      'Given clinical parameters about a patient can we predict if that person has heart disease? I created a machine learning algorithm that uses a classification estimator to detect with 88% accuracy if a patient has heart disease, in this project I used scikit-learn and a Random Forest Classifier.',
    url:
      'https://github.com/A1DS19/heart-desease-detector-classifier/blob/Main/heart-disease-classification.ipynb',
    repo: 'https://github.com/A1DS19/heart-desease-detector-classifier', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: "Let's talk",
  email: 'jp06171@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/A1DS19',
    },
    {
      id: nanoid(),
      name: 'whatsapp',
      url: 'https://wa.me/50684040443',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
