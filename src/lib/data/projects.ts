export type Project = {
  slug: string;
  title: string;
  description: string;
  content: string;
  external?: boolean;
  url?: string;
  thumbnail: string; 
};

export const projects: Project[] = [
  {
    slug: 'linktree-redesign',
    title: 'Linktree Redesign',
    description: 'A modern redesign of Linktree.',
    content: 'Full case study of Linktree redesign.',
    thumbnail: '/thumbnails/Decidr.png',
  },
  {
    slug: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'My personal portfolio website.',
    content: 'Details about portfolio project.',
    thumbnail: '/thumbnails/Marketplace.png',
  },
  {
    slug: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'My personal portfolio website.',
    content: 'Details about portfolio project.',
    thumbnail: '/thumbnails/Dinesafe.png',
  },
  {
    slug: 'linktree-redesign',
    title: 'Linktree Redesign',
    description: 'A modern redesign of Linktree.',
    content: 'Full case study of Linktree redesign.',
    thumbnail: '/thumbnails/Decidr.png',
  },
  {
    slug: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'My personal portfolio website.',
    content: 'Details about portfolio project.',
    thumbnail: '/thumbnails/Marketplace.png',
  },
  {
    slug: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'My personal portfolio website.',
    content: 'Details about portfolio project.',
    thumbnail: '/thumbnails/Dinesafe.png',
  },
];
