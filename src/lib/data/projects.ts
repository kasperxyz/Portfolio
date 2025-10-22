export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  content: string[];
  images: string[];
  external?: boolean;
  url?: string;
  thumbnail: string; 
};

export const projects: Project[] = [
  {
    slug: 'decidr',
    title: 'DecidrAI',
    description: 'Enhancing Linktree with partner app integrations using atomic design. Design by Jake Hogg, Matthew Ritchie and Kasper Slusarczyk.',
    tags: ['AI', 'Design', 'Integration'],
    content: [],
    images: [],
    thumbnail: '/thumbnails/decidr.png',
    external: true,
    url: 'https://decidr.ai',
  },
  {
    slug: 'linktree',
    title: 'Link apps and atomic design',
    description: 'Enhancing Linktree with partner app integrations using atomic design. Design by Jake Hogg, Matthew Ritchie and Kasper Slusarczyk.',
    tags: ['Product design', 'Design system'],
    content: [
      "The development of Maneken was driven by the need for a more streamlined and user-friendly mockup creation process.Traditional methods often involve complex software and time-consuming procedures. Recognizing these challenges, we create a solution that integrates a comprehensive catalog with an intuitive editor, all within a single application.",
      "The challenge was to visualize complex datasets in a way that was both useful and intuitive.",
      "I collaborated with data scientists and engineers to design interactive charts and workflows.",
      "I collaborated with data scientists and engineers to design interactive charts and workflows.",
      "I collaborated with data scientists and engineers to design interactive charts and workflows."
    ],
    images: [
      "/images/ai-dashboard-1.png",
      "/images/ai-dashboard-2.png",
      "/images/ai-dashboard-3.png"
    ],
    thumbnail: '/thumbnails/linktree.png',
  },
  {
    slug: 'marketplace',
    title: 'Linktree Marketplace',
    description: 'Designing a new one-stop directory for users to browse its platform integrations. Design by Jake Hogg, Matthew Ritchie and Kasper Slusarczyk.',
    tags: ['Web design', 'Product design'],
    content: [
      "This project focused on creating a dashboard for AI-powered analytics.",
      "The challenge was to visualize complex datasets in a way that was both useful and intuitive.",
      "I collaborated with data scientists and engineers to design interactive charts and workflows."
    ],
    images: [
      "/images/ai-dashboard-1.png",
      "/images/ai-dashboard-2.png",
      "/images/ai-dashboard-3.png"
    ],
    thumbnail: '/thumbnails/marketplace.png',
  },
  {
    slug: 'truckmap',
    title: 'Truckmap admin experience',
    description: 'Optimizing the navigation app with an admin panel to streamline workflows and enable the team to make informed decisions quickly.',
    tags: ['Product design'],
    content: [
      "This project focused on creating a dashboard for AI-powered analytics.",
      "The challenge was to visualize complex datasets in a way that was both useful and intuitive.",
      "I collaborated with data scientists and engineers to design interactive charts and workflows."
    ],
    images: [
      "/images/ai-dashboard-1.png",
      "/images/ai-dashboard-2.png",
      "/images/ai-dashboard-3.png"
    ],
    thumbnail: '/thumbnails/truckmap.png',
  },
  {
    slug: 'dinesafe',
    title: 'Safe dining reimagined',
    description: 'Designing a platform that helps diners make informed choices by enabling restaurants to communicate safety measures transparently.',
    tags: ['Product design'],
    content: [
      "This project focused on creating a dashboard for AI-powered analytics.",
      "The challenge was to visualize complex datasets in a way that was both useful and intuitive.",
      "I collaborated with data scientists and engineers to design interactive charts and workflows.",
      "I collaborated with data scientists and engineers to design interactive charts and workflows.",
      "I collaborated with data scientists and engineers to design interactive charts and workflows."
    ],
    images: [
      "/images/ai-dashboard-1.png",
      "/images/ai-dashboard-2.png",
      "/images/ai-dashboard-3.png"
    ],
    thumbnail: '/thumbnails/dinesafe.png',
  },
  {
    slug: 'droplr',
    title: 'Droplr Chrome extension',
    description: 'Bringing the Droplr experience to your browser, enhancing Chrome functionality for taking screenshots and making annotations.',
    tags: ['Product design', 'HTML&CSS', 'React'],
    content: [
      "This project focused on creating a dashboard for AI-powered analytics.",
      "The challenge was to visualize complex datasets in a way that was both useful and intuitive.",
      "I collaborated with data scientists and engineers to design interactive charts and workflows."
    ],
    images: [
      "/images/ai-dashboard-1.png",
      "/images/ai-dashboard-2.png",
      "/images/ai-dashboard-3.png"
    ],
    thumbnail: '/thumbnails/droplr.png',
    external: true,
    url: 'https://chromewebstore.google.com/detail/screenshot-screen-recorde/oncaapliomaamlbopdmhmdompfemljhm',
  },
];
