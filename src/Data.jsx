import Project1 from './assets/project1.jpg';
import Project2 from './assets/project2.jpg';
import Project3 from './assets/project3.JPG';
import Project4 from './assets/project4.jpg';
import Project5 from './assets/project5.jpg';
import Project6 from './assets/project6.jpg';

import Testimonial1 from './assets/testimonial1.jpg';
import Testimonial2 from './assets/testimonial2.jpg';
import Testimonial3 from './assets/testimonial3.jpg';
import Testimonial4 from './assets/testimonial4.jpg';
import Testimonial5 from './assets/testimonial5.jpg';

export const links = [
  {
    name: 'Home',
    path: 'home',
  },
  {
    name: 'Services',
    path: 'services',
  },
  {
    name: 'Skills',
    path: 'skills',
  },
  {
    name: 'Works',
    path: 'work',
  },
  {
    name: 'Resume',
    path: 'resume',
  },
  {
    name: 'Testimonials',
    path: 'testimonial',
  },
  {
    name: 'Pricing',
    path: 'pricing',
  },
  {
    name: 'Blog',
    path: 'blog',
  },
  {
    name: 'Contact',
    path: 'contact',
  },
];

export const services = [
  {
    id: 1,
    name: 'Web Development',
    title: 'Web Design & Logo',
    description:
      'Web designers craft the overall vision & plan for a website layout. Professional logo development: Business, Company, or Personal.',
  },
  {
    id: 2,
    name: ' Apps Development ',
    title: ' iOS & Android ',
    description:
      'Design Software applications to run on mobile devices. Modern and mobile-ready application that will help you reach all of your marketing.',
  },
  {
    id: 3,
    name: ' Game Development ',
    title: ' Unity & Unreal Engine ',
    description:
      ' Creating games & describes the design, development and release of a game. Developing unique mobile android and ios games. ',
  },
  {
    id: 4,
    name: ' Advertising ',
    title: ' Google Ads ',
    description:
      ' Advertising services include: Google search result pages, gmails, YouTube and other websites participated in Google Ads program. ',
  },
  {
    id: 5,
    name: ' Music Writing ',
    title: ' Sound Track ',
    description:
      'Music copying, writing, creating, transcription and composition services.',
  },
];

export const skills = [
  {
    id: 1,
    name: 'Computer Aided Design (CAD)',
    percentage: 85,
    description:
      'Softwares: Fusion 360, Onshape and Inverter',
  },

  {
    id: 2,
    name: 'Coding',
    percentage: 75,
    description:
      'Languages: Java, Python and C++',
  },

  {
    id: 3,
    name: 'PCB Design',
    percentage: 90,
    description:
      'Softwares: Altium Designer',
  },

  {
    id: 4,
    name: 'Microcontrollers',
    percentage: 75,
    description:
      'Arduino Uno R3 and Raspberry Pi Pico W',
  },

  {
    id: 5,
    name: 'Machining',
    percentage: 70,
    description:
      'Tools: Lathe and Mill',
  },

  {
    id: 6,
    name: 'UI/UX Design',
    percentage: 80,
    description:
      'Tools: Figma, Photoshop, React and Javascript',
  },
];

export const projects = [
  {
    id: 1,
    img: Project1,
    category: 'hardware',
    title: 'Mechanical Clock',
    description:
      'built a custom designed mechanical clock using only 3d printed parts. Used Fusion 360 to CAD this part from scratch',
  },
  {
    id: 2,
    img: Project2,
    category: 'software',
    title: 'PacMan Game',
    description:
      'built a pacman game for my object oriented programming class. Used techincal skills like Java, GUI and OOP',
  },
  {
    id: 3,
    img: Project3,
    category: 'software',
    title: 'BeachWise',
    description:
      'built an app that allows people to find nearby beach cleans with an AI integrated system that differentiated between recyclables and non-recyclables.',
  },
  {
    id: 4,
    img: Project4,
    category: 'pcb design',
    title: 'Shutdown Test-Board',
    description:
      'developed a custom PCB design to test the shutdown board used in the racing car ARG-25 using Altium',
  },
  {
    id: 5,
    img: Project5,
    category: 'hardware',
    title: 'miniCG',
    description:
      'designed and developed a mini ECG device using Arduino and Op-Ams. This was a part of the Makeathon by Cornell',
  },
  {
    id: 6,
    img: Project6,
    category: 'hardware',
    title: 'Coaster',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
];

export const cv = [
  {
    id: 1,
    title: 'Cornell University',
    subtitle: 'BS in Electrical and Computer Engineering',
    date: '2024 - 2028',
    description:
      'courses taken: Physics I (Mechanics), Object-Oriented Programming, Calc II and III',
    category: 'education',
  },

  {
    id: 2,
    title: 'UWC Thailand International School',
    subtitle: 'IBDP',
    date: '2022 - 2024',
    description:
      'Higher Level Subjects: Physics, Math AA, Business Management, English A (Lang & Lit)',
    category: 'education',
  },

  {
    id: 3,
    title: 'Faujdarhat Cadet College',
    subtitle: 'Military Academy',
    date: '2018 - 2022',
    description:
      'went through National Curriculum in Bangladesh whilst going through rigorous military lifestyle',
    category: 'education',
  },

  {
    id: 4,
    title: 'Cornell Racing',
    subtitle: 'Member - Accumulator Subteam',
    date: 'Jan 2025 - PRESENT',
    description:
      'working in acc-electronics',
    category: 'experience',
  },

  {
    id: 5,
    title: 'Cornell Makers Club',
    subtitle: 'Events Planning & Design',
    date: 'Jan 2025 - PRESENT',
    description:
      'plan workshops, events and annual hackthon. Design mockups and manage social media.',
    category: 'experience',
  },

  {
    id: 6,
    title: 'Indorama Ventures LLC',
    subtitle: 'Intern',
    date: 'May 2025 - August 2025',
    description:
      'working to improve the monthly data collection from 150 sites all over the world through creating an automated system using PowerAutomate and PowerBI',
    category: 'experience',
  },
];

export const testimonials = [
  {
    id: 1,
    img: Testimonial1,
    name: 'Barbara Wilson',
    author: 'CEO Company',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    img: Testimonial2,
    name: 'Charlie Smith',
    author: 'Designer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    img: Testimonial3,
    name: 'Roy Wang',
    author: 'Manager GYM',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 4,
    img: Testimonial4,
    name: 'Jennifer Smith',
    author: 'CEO & Founder',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 5,
    img: Testimonial5,
    name: 'Paul Freeman',
    author: 'Photographer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];
