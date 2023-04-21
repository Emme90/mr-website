import {
  android,
  angular,
  basket,
  cooking,
  craon,
  css,
  expired,
  figma,
  git,
  github,
  html,
  java,
  javascript,
  jumbo,
  jumboapp,
  linkedin,
  luna,
  mobile,
  nodejs,
  reactjs,
  redux,
  rugby,
  snowboard,
  typescript,
  uigp,
  video_games,
  web,
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
    id: "hobbies",
    title: "Hobbies",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  // {
  //   title: "Backend Developer",
  //   icon: backend,
  // },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Android Studio",
    icon: android,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Angular2+ Developer",
    company_name: "Craon",
    icon: craon,
    iconBg: "#FFFFFF",
    date: "Jan 2020 - Sep 2020",
    points: [
      "Developing and maintaining web applications using Angular2+ and other related technologies.",
      "Collaborating with backend team and product managers to create high-quality products.",
      "Implementing cross-browser compatibility.",
    ],
  },
  {
    title: "Angular2+ | React.js Developer",
    company_name: "Luna Labs",
    icon: luna,
    iconBg: "#FFFFFF",
    date: "Sep 2020 - Present",
    points: [
      "Developing and maintaining web applications using React.js and Angular2+ and other related technologies.",
      "Collaborating with cross-functional teams including product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Founder | React Native Developer",
    company_name: "Jumbo",
    icon: jumbo,
    iconBg: "#BC7B09",
    date: "Apr 2022 - Present",
    points: [
      "Developing and maintaining mobile application using React.js and other related technologies.",
      "Collaborating with backend team including to create high-quality products.",
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
    name: "UBI Banca",
    description:
      "Web application that allows internal users to manage permissions, entitlements and interface with Identity System (IBM product).",
    tags: [
      {
        name: "angular2+",
        color: "orange-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
    ],
    image: expired,
    // source_code_link: "https://github.com/",
  },
  {
    name: "NEXI - UIGP",
    description:
      "Web application that allows internal users to manage permissions, entitlements and interface with Identity System (IBM product).",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: uigp,
    // source_code_link: "https://github.com/",
  },
  {
    name: "Jumbo Ripetizioni",
    description:
      "A mobile application that allow connection between students and tutor for private lessons.",
    tags: [
      {
        name: "reactNative",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jumboapp,
    // source_code_link: "https://github.com/",
  },
];

const hobbies = [
  {
    title: "basketball",
    description:
      "I palyed basketball since I was child. I love play this game with friends!",
    image: basket,
  },
  {
    title: "rugby",
    description:
      "I palyed rugby justo for a couple of year but it teach me a lot: about rules respect, frindship and trust in teammate.",
    image: rugby,
  },
  {
    title: "snowboard",
    description:
      "I use to go on snowboard when I can. I simply love surfing on snow and appreciate beautiful views",
    image: snowboard,
  },
  {
    title: "cooking",
    description:
      "As a respectful italian guy I love cooking and explore new receipes and techinques",
    image: cooking,
  },
  {
    title: "video games",
    description:
      "I love play video games with my friends and chill for a couple of hours.",
    image: video_games,
  },
];

const socials = [
  {
    title: "linkedin",
    image: linkedin,
    url: "https://it.linkedin.com/in/milos-ribera-8b307587",
  },
  {
    title: "github",
    image: github,
    url: "https://github.com/Emme90",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  hobbies,
  socials,
};
