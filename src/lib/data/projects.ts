export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  role: string;
  deliverables: string;
  outcome: string;
  introduction: string;
  content: string[];
  hero: string;
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
    role: 'Product Designer',
    deliverables: 'Design system that adapts to any integration and stays simple for users.',
    outcome: '<span>+25%</span> creator revenue, animated links <span>85%</span>  higher CTR',
    introduction: 'When I joined the Marketplace team, the ambition was clear: enable creators to connect, monetize, and grow. Behind the scenes, the challenge was different — how do you build a design system that scales fast, supports countless integrations, and still feels effortless for users?',
    content: [
      "<p>This is a <strong>bold</strong> paragraph with a <a href='https://example.com'>link</a>.</p>",
      "<h3>Subheading</h3><p>Another paragraph with <em>italic text</em>.</p>",
      "<ul><li>Bullet point 1</li><li>Bullet point 2</li></ul>"
    ],
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
    role: 'Product Designer',
    deliverables: 'Design system that adapts to any integration and stays simple for users.',
    outcome: '<span>+25%</span> creator revenue, animated links <span>85%</span>  higher CTR',
    introduction: 'When I joined the partnerships team, the ambition was clear: enable creators to connect, monetize, and grow. Behind the scenes, the challenge was different — how do you build a design system that scales fast, supports countless integrations, and still feels effortless for users?',
    content: [
      "<img src='/linktree/02.png' alt='Linktree Hero Image' />",
      "<p>At the time, creators on Linktree were linking out to an average of nine different platforms, a sign of just how fragmented their digital presence had become.</p>",
      "<p>As the Product Designer, I co-created the Visitor Experience Design System, a library of reusable patterns and components built to give creators power — and viewers value. My process included studying platforms like OpenSea, TikTok, and Cameo to understand how creator-driven ecosystems balance flexibility and simplicity.</p>",
      "<img src='/linktree/03.png' alt='Linktree Hero Image' />",
      "<p>The result was a marketplace framework that helped Linktree and its partners move faster and drive measurable impact:</p>",
      "<div class='modal-metrics'><div class='metric'><p>25%</p><h4>creator revenue</h4></div><div class='metric'><p>85%</p><h4>higher CTR</h4></div></div>",
      "<p>In the end, we built more than a design system - we built a foundation for creators to earn more, connect more, and show up better online.</p>"
    ],
    hero: "/linktree/01.png",
    thumbnail: '/linktree/thumbnail.png',
  },
  {
    slug: 'marketplace',
    title: 'Linktree Marketplace',
    description: 'Designing a new one-stop directory for users to browse its platform integrations. Design by Jake Hogg, Matthew Ritchie and Kasper Slusarczyk.',
    tags: ['Web design', 'Product design'],
    role: 'Product Designer',
    deliverables: 'Design system that adapts to any integration and stays simple for users.',
    outcome: '<span>+25%</span> creator revenue, animated links <span>85%</span>  higher CTR',
    introduction: 'When I joined the Marketplace team, the ambition was clear: enable creators to connect, monetize, and grow. Behind the scenes, the challenge was different — how do you build a design system that scales fast, supports countless integrations, and still feels effortless for users?',
    content: [
      "This project focused on creating a dashboard for AI-powered analytics.",
      "The challenge was to visualize complex datasets in a way that was both useful and intuitive.",
      "I collaborated with data scientists and engineers to design interactive charts and workflows."
    ],
    images: [
      "/linktree/3.png"
    ],
    thumbnail: '/thumbnails/marketplace.png',
  },
  {
    slug: 'truckmap',
    title: 'Truckmap admin experience',
    description: 'Optimizing the navigation app with an admin panel to streamline workflows and enable the team to make informed decisions quickly.',
    tags: ['Product design'],
    role: 'Product Designer',
    deliverables: 'Design system that adapts to any integration and stays simple for users.',
    outcome: '<span>+25%</span> creator revenue, animated links <span>85%</span>  higher CTR',
    introduction: 'When I joined the Marketplace team, the ambition was clear: enable creators to connect, monetize, and grow. Behind the scenes, the challenge was different — how do you build a design system that scales fast, supports countless integrations, and still feels effortless for users?',
    content: [
      "<p>This is a <strong>bold</strong> paragraph with a <a href='https://example.com'>link</a>.</p>",
      "<h3>Subheading</h3><p>Another paragraph with <em>italic text</em>.</p>",
      "<ul><li>Bullet point 1</li><li>Bullet point 2</li></ul>"
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
    role: 'Product Designer',
    deliverables: 'Design system that adapts to any integration and stays simple for users.',
    outcome: '<span>+25%</span> creator revenue, animated links <span>85%</span>  higher CTR',
    introduction: 'When I joined the Marketplace team, the ambition was clear: enable creators to connect, monetize, and grow. Behind the scenes, the challenge was different — how do you build a design system that scales fast, supports countless integrations, and still feels effortless for users?',
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
    role: 'Product Designer',
    deliverables: 'Design system that adapts to any integration and stays simple for users.',
    outcome: '<span>+25%</span> creator revenue, animated links <span>85%</span>  higher CTR',
    introduction: 'When I joined the Marketplace team, the ambition was clear: enable creators to connect, monetize, and grow. Behind the scenes, the challenge was different — how do you build a design system that scales fast, supports countless integrations, and still feels effortless for users?',
    content: [
      "<p>This is a <strong>bold</strong> paragraph with a <a href='https://example.com'>link</a>.</p>",
      "<h2>Subheading</h2><p>Another paragraph with <em>italic text</em>.</p>",
      "<ul><li>Bullet point 1</li><li>Bullet point 2</li></ul>"
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
