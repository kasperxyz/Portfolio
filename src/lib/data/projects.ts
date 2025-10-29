export type Project = {
  slug: string;
  title: string;
  brand: string;
  description: string;
  tags: string[];
  role: string;
  deliverables: string;
  outcome: string;
  introduction: string;
  content: string[];
  hero: string;
  thumbnail?: string;
  video?: string;
};

export const projects: Project[] = [
  {
    slug: 'decidr',
    title: 'Decidr',
    brand: 'Decidr',
    description: 'Designing scalable patterns that could be reused across the entire product ecosystem.',
    tags: ['AI', 'Product design'],
    role: 'Product Designer',
    deliverables: 'Unified component library and interaction guidelines adaptable across multiple teams.',
    outcome: 'Improved design consistency and reduced delivery time for new features.',
    introduction: 'The product had grown fast — and so did its complexity. Each team was shipping independently, leading to fragmented experiences. The challenge was to create a shared foundation that enabled speed, coherence, and clarity across the entire product.',
    content: [
      "<p>Due to NDA restrictions, specific screens and flows can’t be shared publicly. However, my role focused on building the connective tissue of the product — the design patterns that made everything work together.</p>",
      "<p>I started by auditing existing UI fragments and mapping common interactions across multiple product areas. This helped uncover inconsistencies and opportunities to unify the experience.</p>",
      "<p>Working closely with product and engineering teams, I designed a library of reusable patterns — navigation structures, form logic, and feedback components — that could flex across diverse use-cases while keeping the brand’s unique character.</p>",
      "<p>The new system enabled faster delivery cycles, clearer collaboration, and a more cohesive experience across all surfaces. What began as a design exercise evolved into a shared language for the entire product organization.</p>"
    ],
    hero: "/decidr/01.png",
    thumbnail: '/decidr/thumbnail.png'
  },
  {
    slug: 'linktree',
    title: 'Link apps and atomic design',
    brand: 'Linktree',
    description: 'Enhancing Linktree with partner app integrations using atomic design principles.',
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
      "<div class='modal-metrics'><div class='metric'><p>25%</p><h4>increase in creator <br>monthly revenue</h4></div><div class='metric'><p>85%</p><h4>higher CTR <br>on animated links</h4></div></div>",
      "<p>In the end, we built more than a design system - we built a foundation for creators to earn more, connect more, and show up better online.</p>"
    ],
    hero: "/linktree/01.png",
    video: '/linktree/video.mp4',
  },
  {
    slug: 'marketplace',
    title: 'Linktree Marketplace',
    brand: 'Linktree',
    description: 'Designing a one-stop directory for users to browse and connect platform integrations.',
    tags: ['Web design', 'Product design'],
    role: 'Product Designer',
    deliverables: 'One-stop marketplace that connects creators with partner apps to enhance their Linktree.',
    outcome: 'Simplified discovery for creators linking to multiple platforms.',
    introduction: 'Linktree’s mission was to simplify how creators connect their digital world. Creators were linking out to an average of 9 different platforms, highlighting fragmentation and a chance to host various partner experiences within Linktree. The challenge was bring everything them together in one simple, scalable place.',
    content: [
      "<img src='/marketplace/02.png' alt='Linktree Hero Image' />",
      "<p>Creators struggled to discover and manage partner integrations efficiently, leading to duplicated effort and missed opportunities to monetize and engage audiences.</p>",
      "<p>Co-designed the marketplace directory, defining the interaction model, visual language, and content hierarchy for partner apps. Collaborated closely with stakeholders to ensure the system supported creators’ needs and discovery behaviors. </p>",
      "<img src='/marketplace/03.png' alt='Linktree Hero Image' />",
      "<p>Mapped user journeys to understand discovery patterns, sketched flows for app browsing and selection, and prototyped card and filter components. Tested iterations to ensure clarity, usability, and consistency within the Linktree ecosystem. </p>",
      "<p>The integrations directory streamlined how creators browse and connect apps, reducing friction and centralizing discovery. Early feedback showed improved navigation and higher engagement with partner apps. </p>",
      "<p>By centralizing fragmented tools into one marketplace, we empowered creators to manage their online presence with less friction and more confidence. </p>"
    ],
    hero: "/marketplace/01.png",
    thumbnail: '/marketplace/thumbnail.png'
  },
  {
    slug: 'truckmap',
    title: 'Truckmap admin experience',
    brand: 'Truckmap',
    description: 'Optimizing the navigation app with an admin panel to streamline workflows.',
    tags: ['Product design', 'HTML&CSS', 'React'],
    role: 'Lead Product Designer',
    deliverables: 'Admin panel for data maintenance, scraper monitoring, and error management.',
    outcome: '<span>30%</span> faster data updates, <span>40%</span> fewer undetected scraper issues',
    introduction: 'TruckMap helps truck drivers find reliable routes, parking, and facilities. Behind that simple interface lies a complex data engine — constantly scraping, verifying, and updating millions of data points. The team needed a way to keep that system running smoothly and transparently.',
    content: [
      "<p>As the Product Designer, I was responsible for designing the internal dashboard that powered those operations. The goal was to give the data and engineering teams clear visibility into scraper performance, data freshness, and system health — all in one place.</p>",
      "<p>I began by interviewing the TruckMap team, including engineers and data analysts, to understand their existing workflows and pain points. Much of the monitoring relied on scripts and manual checks, which made it difficult to detect issues early or share context across teams.</p>",
      "<p>Working closely with engineering, I designed a dashboard that surfaced live scraper statuses, highlighted stale data, and visualized error trends over time. A clear information hierarchy made it easy to scan system health at a glance while still allowing detailed drill-downs when needed.</p>",
      "<div class='modal-metrics'><div class='metric'><p>30%</p><h4>faster data <br>updates</h4></div><div class='metric'><p>40%</p><h4>fewer undetected <br>scraper issues</h4></div></div>",
      "<p>The result was a faster, more transparent workflow. Manual checks were reduced, alerts became actionable, and the team could push verified data updates about 30% faster. What used to be a black box became a living, visible system — one that helped TruckMap scale with confidence.</p>"
    ],
    hero: "/linktree/01.png",
    thumbnail: '/truckmap/thumbnail.png',
  },
  {
    slug: 'dinesafe',
    title: 'Safe dining reimagined',
    brand: 'Dinesafe',
    description: 'Helping diners make informed choices with transparent safety data.',
    tags: ['Product design', 'HTML&CSS', 'React'],
    role: 'Lead Product Designer',
    deliverables: 'End-to-end design for restaurant dashboard, verification flow, and certification system.',
    outcome: '<span>100+</span> restaurants onboarded, <span>40%</span> increase in diner confidence',
    introduction: 'Dinesafe set out to help restaurants navigate new health regulations while regaining public trust. The challenge was to design a platform that simplified compliance for owners and provided reassurance for diners — turning complex regulation into a simple daily routine.',
    content: [
      "<img src='/dinesafe/02.png' alt='Linktree Hero Image' />",
      "<p>As the lead designer, I shaped the product strategy and UX. My process began with in-depth conversations with restaurant owners to understand their pain points — from scattered checklists to inconsistent inspections — and the emotional weight of running a restaurant in a post-pandemic world.</p>",
      "<p>We designed a clear daily dashboard where owners could log and verify health protocols. Each submission contributed to a visible certification that signaled safety to diners. The flow balanced accountability and simplicity — designed to be usable even during a busy lunch rush.</p>",
      "<img src='/dinesafe/03.png' alt='Linktree Hero Image' />",
      "<p>The platform launched with over 100 Connecticut restaurants. Within months, surveys showed a 40% increase in customer confidence in certified venues.</p>",
      "<div class='modal-metrics'><div class='metric'><p>40%</p><h4>increase in <br>customer confidence</h4></div>",
      "<p>Beyond compliance, Dinesafe helped restaurants communicate transparency and care — setting a new baseline for trust in dining experiences.</p>"
    ],
    hero: "/dinesafe/01.png",
    thumbnail: '/dinesafe/thumbnail.jpg',
  },
  {
    slug: 'droplr',
    title: 'Droplr Chrome extension',
    brand: 'Droplr',
    description: 'Bringing the Droplr experience to Chrome for quick screenshots and annotations.',
    tags: ['Product design', 'HTML&CSS', 'React'],
    role: 'Product Designer',
    deliverables: 'Chrome extension experience for screenshots, annotations, and quick sharing.',
    outcome: '<span>+40%</span> adoption rate, cut support requests by <span>30%</span>, doubled task speed',
    introduction: 'Droplr wanted to make their screen capture and file-sharing tools instantly accessible — right inside the browser. The challenge: how to bring a robust desktop product into Chrome without clutter or friction.',
    content: [
      "<p>Power users relied on Droplr daily for collaboration, but switching between desktop and browser tools broke their flow. Usage data showed clear demand for a lightweight, always-on companion.</p>",
      "<p>As the Product Designer, I redesigned the extension from the ground up to mirror Droplr’s native feel while embracing Chrome’s constraints. The goal was to make capture, annotation, and sharing feel one click away.</p>",
      "<p>I mapped the core user journeys — from taking screenshots to annotating and sharing — and restructured them into a minimal interface with clear iconography and contextual actions. I collaborated with engineers to define UI patterns that balanced speed, clarity, and reliability.</p>",
      "<div class='modal-metrics'><div class='metric'><p>2×</p><h4>faster average <br>screenshot workflow</h4></div><div class='metric'><p>85%</p><h4>increase in daily <br>active extension users</h4></div><div class='metric'><p>-30%</p><h4>drop in <br>confusion-related tickets</h4></div></div>",
      "<p>We turned a single-purpose browser tool into a seamless part of the Droplr ecosystem — small in size, big in impact.</p>"
    ],
    hero: "/linktree/01.png",
    thumbnail: '/droplr/thumbnail.png',
  },
];
