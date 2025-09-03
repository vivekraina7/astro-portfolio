import type { Site, Page } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

export const LINKS = {
  github: 'https://github.com/vivekraina7',
  linkedin: 'https://www.linkedin.com/in/vivekrainaa/',
  mail: 'mailto:vivekraina33.vr@gmail.com',
  instagram: 'https://www.instagram.com/viren.raina/',
  medium: 'https://www.linkedin.com/in/vivekrainaa/',
  discord: 'https://www.linkedin.com/in/vivekrainaa/',
}

// Global
export const SITE: Site = {
  TITLE: 'Astro Sphere',
  DESCRIPTION:
    'Welcome to Astro Sphere, a portfolio and blog for designers and developers.',
  AUTHOR: 'Mark Horn',
}

// Work Page
export const WORK: Page = {
  TITLE: 'Work',
  DESCRIPTION: 'Places I have worked.',
}

// Blog Page
export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: 'Writing on topics I am passionate about.',
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Projects',
  DESCRIPTION: 'Recent projects I have worked on.',
}

// Search Page
export const SEARCH: Page = {
  TITLE: 'Search',
  DESCRIPTION: 'Search all posts and projects by keyword.',
}

// Study Page
export const STUDIES = [
  {
    title: 'Computer Science',
    institution: 'B.Tech CSE Hons.: Graphic Era University',
    link: 'https://gehu.ac.in/',
    date: '2019 - 2027',
  },
  {
    title: 'X',
    institution: 'X : Shiksha Niketan',
    link: 'https://shikshaniketanjk.in/',
    date: '2018 - 2022',
  },
  {
    title: 'XII',
    institution: 'XII : Shiksha Niketan',
    link: 'https://shikshaniketanjk.in/',
    date: '2018 - 2022',
  }
]

export const EXPERIENCE = [
  {
    company: 'Qriocity Ventures',
    location: 'Chennai, India',
    position: 'ML/AI Engineer',
    start: 'Jan 2024',
    link: 'https://www.qriocity.in/',
    end: 'Current',
    tasks: [
      'Led a cross-functional team of 7–10 ML and full-stack developers for AI-powered solutions.',
      'Built YOLO & Custom models for real-time object detection and vision tasks.',
      'Developed HuggingFace-based NLP models for domain-specific applications.',
      'Delivered projects in retail analytics (shelf monitoring) and finance (OCR parsing).',
    ],
  },
  {
    company: 'Rellins',
    location: 'Chandigarh, India',
    position: 'AI Engineer',
    link: 'https://relinns.com/',
    start: 'May 2023',
    end: 'Oct 2023',
    tasks: [
      'Created a chatbot using ChatGPT-4, LlamaIndex, and Falcon for user support.',
      'Fine-tuned NLP models to boost chatbot performance and efficiency.'
    ],
  },
  {
    company: 'Omdana',
    link: 'https://www.omdena.com/',
    location: 'Remote - Omdana Berlin Chapter',
    position: 'ML developer',
    start: 'April 2023',
    end: ' May 2023',
    tasks: [
      'Development of the Imaginamos platform with the use of React, Redux, and Material UI',
      'Work in ETB project with the use of React, Redux, and Material UI',
    ],
  }
]
