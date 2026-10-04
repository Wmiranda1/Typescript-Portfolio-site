type Project = {
  name: string
  description: string
  link: string
  video?: string
  image?: string
  id: string
}

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Aquent',
    description:
      'Aquent is the top marketing, design, and creative staffing agency, and a pioneer in cutting-edge recruitment technology.',
    link: 'https://aquent.com',
    image: `${BASE_PATH}/aquent.jpg`,
    id: 'project1',
  },
  {
    name: 'Skill',
    description:
      'Skill is a next-generation talent acquisition company, combining purpose-built AI recruiting, staffing and recruiting experience, and human expertise.',
    link: 'https://skill.com/',
    image: `${BASE_PATH}/skill.png`,
    id: 'project2',
  },
  {
    name: 'Aquent Studios',
    description:
      'The global co-creation agency built on a new model of engagement. We help brands create breakthrough experiences with expertise from strategy to activation.',
    link: 'https://aquentstudios.com/',
    image: `${BASE_PATH}/aquent-studios.webp`,
    id: 'project3',
  },
  {
    name: 'Aquent Scout',
    description:
      'The all-in-one smart vendor management system that streamlines all your recruiting firms. See why leading HR and Talent Acquisition teams love Aquent Scout.',
    link: 'https://aquentscout.com/',
    image: `${BASE_PATH}/aquent-scout.png`,
    id: 'project4',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Aquent',
    title: 'Web Developer',
    start: '2016',
    end: 'Present',
    link: 'https://aquent.com',
    id: 'work1',
  },
  {
    company: 'PSAV/Encore',
    title: 'Audio Visual Technician',
    start: '2014',
    end: '2016',
    link: 'https://psav.com',
    id: 'work2',
  },
  {
    company: 'Freelance',
    title: 'Front-end Developer',
    start: '2016',
    end: 'Present',
    link: 'https://github.com/Wmiranda1',
    id: 'work3',
  },
]


export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/Wmiranda1',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/williammiranda1',
  },
]

export const EMAIL = 'w.miranda89@gmail.com'
