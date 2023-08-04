import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  socialinsider,
  keysight,
  best,
  allquest,
  angular,
  fastapi,
  flutter,
  python,
  ethereum,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Networking & Security Enthusiast",
    icon: backend,
  },
  {
    title: "Product Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Angular",
    icon: angular
  },
  {
    name: 'FastAPI',
    icon: fastapi
  },
  {
    name: 'Flutter',
    icon: flutter
  },
  {
    name: 'Ethereum',
    icon: ethereum
  },
  // {
  //   name: 'Python',
  //   icon: python
  // },
  {
    name: "HTML 5",
    icon: html,
  },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "IT Department Leader",
    company_name: "BEST Bucharest",
    icon: best,
    iconBg: "#383E56",
    date: "October 2019 - Jan 2021",
    points: [
      "Organized BESTEM hackathon withing a 6 member team where was in charge of the technical part of the hackathon, including" +
      "developing challanges, their systems and tech communication",
      "Gained management, teamwork and communication skills",
      "Developed a powerful sense of social interaction as well as discipline for meeting the required deadlines",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Socialinsider",
    icon: socialinsider,
    iconBg: "#383E56",
    date: "November 2020 - May 2022",
    points: [
      "In charge of designing & developing new features and services for the main product as well as the redesign of the architecture and performance improvements",
      "Responsible for migrating from AngularJS, new product features on Angular and NodeJS and services written in Python",
      "Understood how a small company works inside-out by interacting with all the company's departmants on a daily basis",
    ],
  },
  {
    title: "DevOps - R&D Engineer",
    company_name: "Keysight Technologies",
    icon: keysight,
    iconBg: "#E6DEDD",
    date: "June 2022 - Present",
    points: [
      "Worked on network tests design and implementation in Robot Framework",
      "Gained CI & CD experience using Jenkins, Ansible and Selenium",
      "Developed new features for the BreakingPoint main product using Sencha, Java and Angular",
    ],
  },

  {
    title: "CTO & Co-Founder",
    company_name: "AllQuest",
    icon: allquest,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products for clients.",
      "Researching, designing and building the architecture of the products.",
      "Responsible for all tech-side planning and execution of the company's projects and client discovery & deployment.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Blockchain Ticketing",
    description:
      "A cross-platform event ticket management system that allows the users  to buy and sell tickets in a secure and transparent way " +
      "using smart contracts and NFTs.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "android",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/stonelotus/Bachelor_certification_project",
  },
  {
    name: "Neo Chrome Extension",
    description:
      "Simple chrome extension to display the summary of a YouTube video, using the YouTube Data API and the Text Summarization API, as well as GPT4 model.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "fastAPI",
        color: "green-text-gradient",
      },
      {
        name: "elastic",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "_private_",
  },
  {
    name: "Skin Leisures Detection",
    description:
      "A ResNet-18 model trained to detect skin leisures using the HAM10000 dataset. The model was trained using PyTorch and the model was deployed using Flask.",
    tags: [
      {
        name: "ResNet-18",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "Flask",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/stonelotus/resnet_skin_leisures_vaf",
  },
];

export { services, technologies, experiences, testimonials, projects };
