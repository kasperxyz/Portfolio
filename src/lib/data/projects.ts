export type Project = {
  slug: string;
  title: string;
  content: string;
  external?: boolean;
  url?: string;
  thumbnail: string; 
};

export const projects: Project[] = [
  {
    slug: 'decidr',
    title: 'DecidrAI',
    content: 'Full case study of Linktree redesign.',
    thumbnail: '/thumbnails/decidr.jpg',
  },
  {
    slug: 'linktree',
    title: 'Linktree Visitor Experience',
    content: 'Details about portfolio project.',
    thumbnail: '/thumbnails/linktree_2.jpg',
  },
  {
    slug: 'linktree-marketplace',
    title: 'Linktree Marketplace',
    content: 'Details about portfolio project.',
    thumbnail: '/thumbnails/marketplace.jpg',
  },
  {
    slug: 'truckmap',
    title: 'Truckmap',
    content: 'Full case study of Linktree redesign.',
    thumbnail: '/thumbnails/truckmap.jpg',
  },
  {
    slug: 'dinesafe',
    title: 'Dinesafe',
    content: 'Details about portfolio project.',
    thumbnail: '/thumbnails/dinesafe.jpg',
  },
  {
    slug: 'droplr',
    title: 'Droplr Chrome Extension',
    content: 'Details about portfolio project.',
    thumbnail: '/thumbnails/droplr.jpg',
  },
];
