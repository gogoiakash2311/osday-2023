export type TTalkCard = {
  id: string;
  description: string;
  link?: string;
  picture?: string;
};

export type TTypeCard = {
  id: string;
  title: string;
  typeClass: string;
};

export const previousTalks: TTalkCard[] = [
  {
    id: 'riva2021',
    description:
      'Zero effort, high performances and secure GraphQL APIs with Hasura',
    link: 'https://www.youtube.com/watch?v=8z6CRK61JLA&t=2675s',
    picture: ''
  },
  {
    id: 'bartolesi2021',
    description: 'How to create awesome VSCode extensions',
    link: 'https://www.youtube.com/watch?v=8z6CRK61JLA&t=6850s',
    picture: ''
  },
  {
    id: 'kerberus2021',
    description:
      'Project Kerberus for self-service resource provisioning and managament',
    link: 'https://www.youtube.com/watch?v=8z6CRK61JLA&t=4275s',
    picture: ''
  },
  {
    id: 'opensource2021',
    description: 'Contribute to Open Source: the right way',
    link: 'https://www.youtube.com/watch?v=8z6CRK61JLA&t=1157s',
    picture: ''
  },
  {
    id: 'augmentedreality2021',
    description: '3D e Argumented Reality with google model-viewer',
    link: 'https://www.youtube.com/watch?v=8z6CRK61JLA&t=10020s',
    picture: ''
  },
  {
    id: 'operatorkerberus2021',
    description: 'Capsule, storia di un operator kubernetes open source',
    link: 'https://youtu.be/8z6CRK61JLA',
    picture: ''
  }
];

export const cfpTypes: TTypeCard[] = [
  {
    id: 'jsts',
    title: 'Javascript / Typescript',
    typeClass: 'jsts'
  },
  {
    id: 'opensource',
    title: "Open Source (you don't say!)",
    typeClass: 'opensource'
  },
  {
    id: 'cloud',
    title: 'Cloud and Serverless',
    typeClass: 'cloud'
  },
  {
    id: 'rustgopython',
    title: 'Rust / Go / Python',
    typeClass: 'rustgopython'
  },
  {
    id: 'dei',
    title: 'Diversity and Inclusion',
    typeClass: 'dei'
  },
  {
    id: 'a11y',
    title: 'Accessibility',
    typeClass: 'a11y'
  },
  {
    id: 'greensustainability',
    title: 'Green and Sustainable Development',
    typeClass: 'greensustainability'
  }
];