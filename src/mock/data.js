import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hola, me llamo',
  name: 'Jose Enrique',
  subtitle: '',
  cta: 'Conoce mas',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Hola, mi nombre es Jose Enrique Padilla Roman actualmente tengo 20 años, soy estudiante de Ingenieria en Sistemas de Computacion en la Universidad Fidelitas y estoy en mi antepenúltimo cuatrimestre.',
  paragraphTwo: '',
  paragraphThree: '',
  resume: './curriculum_Jose_Enrique_Padilla_Roman.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project3.png',
    title: 'ADOPTME.CR',
    info: 'Aplicacion hecha como parte del TCU para Territorio de Zaguates',
    info2:
      'En este proyecto utilize React, Redux y en el servidor Node.js, con Express.js, MongoDB con Mongoose, AWS S3 para manejo de archivos y AWS SES para emails en TypeScript',
    url: '',
    repo: 'https://github.com/A1DS19/shelterTCU', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'FakeFlix',
    info: '"Copia" de netflix utilizando React',
    info2:
      'En este proyecto utilize React y el API de themoviedb para extraer informacion de diferentes peliculas y series.',
    url: 'https://kind-villani-768251.netlify.app/',
    repo: 'https://github.com/A1DS19/fake-flix.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'socialNET',
    info: 'socialNET es una red social para eventos.',
    info2:
      'En este proyecto utiliza React, Redux y Firebase para autenticacion, manejo de archivos en este caso imagenes, base de datos, y base de datos realtime para la seccion de chat para cada evento y notificaciones.',
    url: 'https://socialnet-301802.web.app/events',
    repo: 'https://github.com/A1DS19/socialNET', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Te gustaria trabajar conmigo?',
  btn: 'HABLEMOS',
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
