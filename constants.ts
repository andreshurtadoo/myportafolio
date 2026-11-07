import { Project } from './types';

// export const HERO_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuAotf0lcvGwrtF-M_JfIkNzjGoEdZeMIalGBJMmZj7VBtuXDGNbNDDHoOZCeUL2yv_DldSJuCS9Rv9DQGc47U0-pS8W8RwNPE07EXkaavRJRWWu7Pe0X_x4wxWpjhK1RX9wARKSgQngYKpoDiwteyhFx_30LmrH5xajXhjQp87BLhv2s_awq3tY55LamCv2ZUbmd0vlSG5BUw4_0jIrfnISaIE1lZa6wjLNxb_9dmqH5FjH2zmFmJI9ZpW_fNNDYjvIpZJFQ5P5rrk";
export const HERO_IMAGE = "./public/img/hero_photo.jpg";

export const EARLY_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Vanilla JS Weather App',
    year: '2021',
    category: 'personal',
    description: 'Fetching real-time data with OpenWeatherMap API.',
    tech: ['HTML5', 'SCSS', 'API'],
    repoLink: 'https://andreshurtadoo.github.io/WeatherAPI/',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDiRNbZTzKFshCeqKZ4zkwK2xciPuXRcyINMCwMQ_vRU2NiAEX90k7PeIRNv6aDMlwZPCxeYlbcD0PyEDRnthnwz0Pn9aMnW1xOI8SE2fzmh3qo4DK0o7viouZ6Cg941TWCxq7Pgh8UcEUHhuznRltzERlwTQEtxvEacRke_ZAjb3UY2Z-IOy3-eRA2nf3FtYgBXEouGEhUpVy83M6wlgMFDQnGlSw01bWRSc6ChbHa8xbCErtyEauMgDw2ckfYVV20RSqjuSuuKE0'
  },
  {
    id: '2',
    title: 'La Casa del GPS',
    year: '2023',
    category: 'personal',
    description: 'Page for a GPS company. Built with vanilla JavaScript, CSS Grid, and DOM manipulation.',
    tech: ['JavaScript', 'CSS Grid', 'DOM'],
    repoLink: 'https://andreshurtadoo.github.io/',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8FbPRhSIM_rIy3F5MHTHcG2CJSaoqzZLqFCyyU1YEhYb2HiPhtWwU2rLZ7TnmuQ5KxO13zLlMKRe87GTKfUvNkdDJyXaFFMdW0YJuD90C64DUuI7bVlK4uqWr8iv4CKIAvseStSdgOdBIt54W1-chMUA09R80sWn-Pvbn7Vz13rYNPotyFA2-iWI0f4hIVAUntnyUZOfhodJsCSycB7koRbFN3leyC5EpWki3S4Vxm-qT4D0ehylQb-sIEYRd2vpgQRfgLlPIBDs'
  },
  {
    id: '3',
    title: 'CRUD',
    year: '2021',
    category: 'personal',
    description: 'A full-stack CRUD application with RESTful API and MySQL database.',
    tech: ['REST', 'MySQL', 'Node.js'],
    repoLink: 'https://github.com/andreshurtadoo/Datatable',
    image: 'https://www.devwares.com/static/928857eeeb0ada9a48064fe1fdf01ad5/20982/datatable1.png'
  }
];

export const ACADEMIC_PROJECTS: Project[] = [
  {
    id: 'dfs',
    title: 'Distributed File System',
    year: '2022',
    category: 'academic',
    description: 'Handling concurrent reads/writes with high availability across multiple nodes. Implemented a master-worker architecture.',
    tech: ['C++', 'gRPC'],
    image: '' // No image needed for this card style
  },
  {
    id: 'compiler',
    title: 'Compiler Construction',
    year: '2022',
    category: 'academic',
    description: 'Optimizing abstract syntax tree (AST) generation for a custom domain-specific language using LLVM IR.',
    tech: ['Java', 'ANTLR'],
    image: ''
  },
  {
    id: 'nn',
    title: 'Neural Net from Scratch',
    year: '2023',
    category: 'academic',
    description: 'Implementing backpropagation algorithms without high-level ML libraries using matrix multiplication.',
    tech: ['Python', 'NumPy'],
    image: ''
  },
  {
    id: 'chat',
    title: 'Real-time Chat App',
    year: '2023',
    category: 'academic',
    description: 'Managing websocket state consistency, private rooms, persistent message history and live typing indicators.',
    tech: ['React', 'Socket.io'],
    image: ''
  }
];

export const COMMERCIAL_PROJECT = {
  title: 'LogiFlow SaaS',
  description: 'Designed and deployed a scalable logistics analytics platform from scratch. Handled full-stack development, Stripe payment integration, and AWS cloud infrastructure setup.',
  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsHlfcEw9sLeQr0IH8aEI3msI6g7DZmevwDO-HSSl07TpJZXTquBtIwyZ_qZRD_Ybt-48O3V2ZMa7KlEnEXZpV05EMHrgV1D_1bdu-ddsLVd6EUoD_aeAtk3QTnJgJJ9Y0UaK685luRPoZxqplbQfrmMKIx9kj5YWZeipFlQoFc-YMZa8qr_SI3UBfXRkRWbEgHrah3MbGK0AcEwCouIPWkoHIeKf2I2JD9dJjAJGdtNViA2NnVlMl_wj5n5_jEVyVRoHDS4Ei6gQ',
  stats: {
    users: '10k+',
    growth: '150%',
    revenue: '$50k',
    uptime: '99.9%'
  },
  tech: ['React', 'TypeScript', 'PostgreSQL', 'Stripe', 'AWS']
};

export const LOGOS = [
  './public/img/magallanes.jpeg',
  // './public/img/cujap_logo.png',
  './public/img/sofos_logo.jpg',
  './public/img/ujap.png',
  // "https://lh3.googleusercontent.com/aida-public/AB6AXuBrWAHcpcVPRHYhfF7NItpkG404CX3mwu4JJGlVGkGOJaX5KcjZ-FBdkJ7ZticZA0JQIzsIBCkA6ZCY7RtdoR6y0fi1HPwgs3xewlQokp_mivXDQXwg1u8ewa_nU2vFhf0-04zK_iQt-2VafsrfM8IKMLVYB6WpLvseHby4B9YWChLtEuMz2wGEGiCXa47peF0hbkTeWdOWU6VeN9bm-cIp7HeOaQRPsIHss6Bsr5wA73UQzQXhyH4BZ9CwGlGTweBhUvqh7Dxl5JA",
  // "https://lh3.googleusercontent.com/aida-public/AB6AXuCfhagV5OD-ACzxAbkqnWK5a8dH9khCekOA-hJa7U7-yzD0WdVDl6HmLH6LiyJe45VZf0IOdTKIDehH7cdnklYYy_4GUO5Ry29XFsquttXsockx0auGR6kK-Lm9q2wCnWE4JtTLoqSKD8faQjPT6Ob1KISBRqtGKoV7V5-iqljg3fwhb79NKtJ7C_fXNvsNZFwT1Wk6LwwmZMBb3Kw9_bLSaRK7NYvK8d9L5h_UHu1ho87hlC7iZZg9rvo5ygWZo2G_wl-PDraBLG4",
  // "https://lh3.googleusercontent.com/aida-public/AB6AXuDt6iLXcw32X1jOKvocbwu9wc-J4l652sYEci1wMdgpEaygPeAvMy6Xv4NUrQuzm7ar40zzZQYdkOnor1vQvn9j5V0VtIo3Gopm2IGh7f6QvvH4H79bOOqZZMm8FskxAF5npibSVWyxbF4EAeyNVZlByI3zyBaIRLW1XI90vONkSK0xXSpwtIx2EUcJNi3xFjMDu-qtwUWXRfl4F-eTIodATVXzgWpDjeFTuDJqz1pIQq6sNnjuYR_LQ0qbAauX4f6FUFfSj9pXWM0",
  // "https://lh3.googleusercontent.com/aida-public/AB6AXuADmnuQBDSzScC-OaJiNqEgmCbZj3B_YtPcY8FdatMRIY5pdM1JCgF8mE7yB3Ays286spzjMTYjQAH46T6-8AXInl9y_rxZFcXt7R3QhwZ6g_WL6nuOZz8Zs5-6tZcg4IbmeUHx8E4FAdg8IAkzDhprv4k0gLxDpFEBwbwWLZXmBsN4ecyxmN4F-qJEZkpogxcAP9ZY5SYp5_Z9-9PH9IhBVGGyYX5WD583N2nRCd9HKQMnL7BJ7HiOcaCABkGNrw3MSWH64JwpYPI"
];