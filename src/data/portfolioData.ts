export interface SkillCategory {
  title: string;
  skills: string[];
}

export const HERO_STATS = [
  { label: "Years Experience", value: "2+" },
  { label: "Satisfaction Rate", value: "98%" },
  { label: "Completed Projects", value: "15+" },
];

export const profile = {
  name: "Fatma Gamal",
  role: "Frontend Developer",
  location: "Cairo, Egypt",
  email: "fatmagamal.webdev@gmail.com",
  phone: "+20 106 223 6623",
  linkedin: "https://www.linkedin.com/in/fatma-gamal-dev",
  github: "https://github.com/fatmaindex",
  portfolio: "https://fatmaindex.github.io/My-Portfolio/",
  summary:
    "Frontend Developer crafting intuitive, visually compelling applications backed by scalable architecture and clean, maintainable code. Comfortable across the full product lifecycle — from shaping UI concepts in Figma to responsive interfaces, backend integration and end-to-end delivery.",
  highlights: [
    "Expressive code, scalable structures and seamless user experiences with strong attention to detail.",
    "Full lifecycle delivery: Figma concepts, responsive UI, REST/WebSocket integration, shipping.",
    "Real-time systems: WebSocket alerting, IoT data streams and self-healing reconnection logic.",
    "Continuous learner exploring modern tooling and engineering best practices.",
  ],
};

export const services = [
  {
    title: "Angular Engineering",
    body: "Angular 18+ apps built on feature-based architecture, standalone components, lazy loading and RxJS streams for real-time responsiveness.",
    tag: "Angular · RxJS · SCSS",
  },
  {
    title: "React Interfaces",
    body: "React 19 products with TanStack Query, Zustand and Redux Toolkit, styled in Tailwind CSS v4 for fast, accessible, mobile-first UI.",
    tag: "React · TanStack · Tailwind",
  },
  {
    title: "API & Real-Time",
    body: "REST and WebSocket integration, JWT auth with HTTP interceptors and secure cookies, plus Node.js + Express backends in clean architecture.",
    tag: "Node · Express · Socket.io",
  },
];

export const experience = [
  {
    role: "Frontend Developer",
    org: "Freelance — Remote",
    period: "Aug 2024",
    points: [
      "Translated a high-fidelity design into responsive, clean code with Angular, SASS and TypeScript.",
      "Built scalable, modular UI components for infrastructure management dashboards.",
    ],
    link: "https://infra.gov.sa/",
  },
  {
    role: "Frontend Intern",
    org: "Agriculture Bank of Egypt — Dokki",
    period: "Aug 2025",
    points: [
      "Hands-on exposure to enterprise Angular development in a real banking environment.",
      "Technical sessions on Angular architecture, clean code practices and team workflows.",
    ],
  },
];

export const mindset = {
  title: "Engineering Mindset",
  intro:
    "I believe great software is more than just working code — it's code that is clear, maintainable, and built to evolve.",
  paragraphs: [
    "My focus is on creating scalable applications with clean architecture, reusable components, and intuitive user experiences. Every feature I build is designed with performance, readability, and long-term maintainability in mind.",
    "I enjoy solving real-world challenges, especially those involving real-time communication, interactive dashboards, and high-performance frontend applications.",
  ],
  quote:
    "I don't just build interfaces — I engineer experiences that remain reliable, scalable, and easy to maintain as products grow.",
  focus: [
    {
      icon: "Zap",
      text: "Building scalable Angular & React applications",
    },
    {
      icon: "Blocks",
      text: "Designing reusable and maintainable UI components",
    },
    {
      icon: "RefreshCw",
      text: "Real-time experiences with WebSockets & Socket.io",
    },
    {
      icon: "Plug",
      text: "Integrating robust REST APIs and backend services",
    },
    {
      icon: "Bot",
      text: "Exploring AI-powered features to improve user experience",
    },
  ],
};

export type Project = {
  title: string;
  /** key inside projectImages; a placeholder is shown if it has no image */
  image: string;
  kind: string;
  /** short description shown on the card (clamped to 4 lines) */
  blurb: string;
  stack: string[];
  demo?: string;
  demoLabel?: string;
  code?: string;
  /** label for the main code link (default "Code") */
  codeLabel?: string;
  /** extra links shown in the details modal (e.g. a second repo) */
  moreLinks?: { label: string; href: string }[];
  featured?: boolean;
  /** bullet points shown only in the details modal */
  highlights?: string[];
};

/**
 * Order matters: the strongest projects first.
 * Projects beyond INITIAL_COUNT (see Projects.tsx) appear behind "Show more".
 */
export const projects: Project[] = [
  {
    title: "Matrix Electronics",
    image: "matrixelectronics",
    kind: "Full Stack E-Commerce",
    blurb:
      "Full-stack e-commerce platform for electronics components and IoT kits, built with Next.js and Supabase. Custom product-variant system with a Quick View modal, atomic stock reservation on checkout, multiple payment flows (COD, WhatsApp, wallets, bank transfer) with one-tap WhatsApp order confirmation, guest-cart merge on login, and resilient email notifications via Resend.",
    highlights: [
      "Designed and built from scratch with custom UI/UX and branding: mobile-first, with a side-drawer menu, slide transitions and backdrop blur",
      "Catalog across Basic Components, Development Boards, Sensors and Kits, with smooth pagination",
      "Live search with dropdown suggestions plus a dedicated /search results page",
      "Custom product-variant system with a Quick View modal",
      "Kit detail pages that break down bundle contents, with dynamic pricing and stock validation",
      "Atomic stock reservation on checkout",
      "Cart with quantity selectors, persistent state, live price recalculation and guest-cart merge on login",
      "Checkout with COD, WhatsApp, wallets and bank transfer, one-tap WhatsApp order confirmation, and orders persisted in Supabase",
      "Authentication with Supabase Auth; PostgreSQL with Row Level Security and Storage buckets",
      "Resilient order-confirmation emails via Resend",
    ],
    stack: [
      "Next.js",
      "React",
      "Redux Toolkit",
      "Tailwind CSS",
      "Supabase",
      "Resend",
      "PostgreSQL",
    ],
    code: "https://github.com/fatmaindex/matrix-electronics",
    demo: "https://matrix-electronics-7etb.vercel.app/",
    featured: true,
  },
  {
    title: "Aman Smart City",
    image: "smartcity",
    kind: "Graduation Project (Full Stack)",
    blurb:
      "Real-time smart city monitoring platform detecting hazards via AI vision and IoT sensors. Designed the Police Dashboard in Figma, built global incident state with TanStack Query + Zustand, a hybrid REST/WebSocket air-quality module with self-healing reconnection, priority-sorted alert routing and live HLS.js camera streaming.",
    highlights: [
      "Team graduation project: I contributed to frontend and backend development, UI/UX design and software architecture",
      "Real-time incident updates over WebSockets, with automatic priority handling and routing to the relevant department dashboards",
      "Live camera streaming with AI-powered detection overlays using HLS.js",
      "Air Quality module combining 4 IoT sensors through a hybrid REST + WebSocket architecture with automatic reconnection",
      "Reports page integrated with 6 REST endpoints via TanStack Query: parallel fetching, per-endpoint caching and unified loading/error states",
      "Client state with Zustand and TanStack Query, including a dedicated store for real-time updates across dashboard views",
      "Scalable feature-based frontend architecture with reusable components and responsive layouts",
      "Backend: APIs for the Reports dashboard (incident summaries, analytics, weekly trends, average response time and geospatial visualizations) on a modular API architecture",
      "Backend: a unified, validated Incident model with the Builder Pattern to normalize AI and IoT payloads into one stable API contract, enabling parallel work across the team",
      "UI/UX: designed core interfaces in Figma before implementation, including the Police Dashboard, shared layouts and reporting screens",
    ],
    stack: [
      "React 19",
      "TypeScript",
      "TanStack Query",
      "Zustand",
      "Tailwind v4",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "HLS.js",
      "Figma",
    ],
    code: "https://github.com/fatmaindex/smart-city-project",
    demo: "https://smart-city-project-pi.vercel.app/",
    featured: true,
  },
  {
    title: "Infra",
    image: "infra",
    kind: "Frontend Project (Freelance)",
    blurb:
      "Single-page infrastructure management site for tracking resources and monitoring project progress, built from a high-fidelity design. Interactive components for real-time data visualization, with SASS-optimized styling for a fully responsive experience.",
    highlights: [
      "Translated a high-fidelity design into responsive, clean code using Angular, SASS and TypeScript",
      "Built a single-page site for tracking resources and monitoring project progress",
      "Developed interactive components for real-time data visualization",
      "Optimized SASS styling to keep the layout fully responsive across devices",
      "Delivered as freelance work and live in production",
    ],
    stack: ["Angular", "TypeScript", "SASS", "HTML"],
    demo: "https://infra.gov.sa/",
    demoLabel: "Live",
  },
  {
    title: "E-Commerce Angular",
    image: "ecommerce",
    kind: "Full Stack",
    blurb:
      "Feature-based architecture with standalone components and lazy loading, JWT auth via HTTP interceptors, HttpOnly cookies and Bcrypt, plus RxJS-powered filtering, sorting and pagination, on a custom Node.js + Express + MongoDB backend.",
    highlights: [
      "Standalone components and a modular Core / Shared / Feature directory structure, with lazy loading for better performance",
      "Reactive product filtering, sorting, pagination and dynamic cart management with RxJS streams",
      "Secure authentication with JWT, route guards and HTTP interceptors for seamless token handling, using HttpOnly secure cookies and Bcrypt hashing",
      "Responsive UI in SCSS (7-1 pattern) with reusable shared components for a consistent design system",
      "Notification service and user cart with real-time state sync through RESTful API integration",
      "Backend: Node.js + Express + MongoDB (Mongoose) with controllers, routes, services and models; access and refresh tokens, role-based authorization and error-handling middleware",
    ],
    stack: [
      "Angular 17",
      "TypeScript",
      "RxJS",
      "SCSS",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    code: "https://github.com/fatmaindex/ecommerce",
  },
  {
    title: "Lumea E-Commerce",
    image: "lumia",
    kind: "Frontend Project (Supabase Backend)",
    blurb:
      "Mobile-first storefront with Supabase Auth, personalized carts and wishlists, category filtering, search, pagination and lazy-loaded imagery.",
    highlights: [
      "Mobile-first, fully responsive app with a seamless cross-device experience",
      "Product browsing with detail pages, category filtering, keyword search and pagination",
      "Supabase Auth (sign up / sign in) with personalized carts and wishlists for signed-in users",
      "Redux Toolkit with createAsyncThunk for async operations, plus Redux Persist",
      "Toast notifications and loading states for clear user feedback",
      "Image loading optimized with lazy loading",
    ],
    stack: [
      "React",
      "JavaScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "Supabase",
    ],
    code: "https://github.com/fatmaindex/eccomerce_react_app",
    demo: "https://eccomerce-react-app-olmq.vercel.app/",
  },
  {
    title: "Travel",
    image: "travel",
    kind: "Frontend Project",
    blurb:
      "High-performance travel agency landing page built with React.js and SCSS: full-screen video hero, destination search with date and price filters, scroll animations and lazy-loaded images.",
    highlights: [
      "Full-screen video hero with a hard-light colour overlay, using preload, muted and playsInline for instant playback on mobile",
      "Search and filtering by destination, date and a custom-styled price range slider",
      "Scroll animations with AOS for smooth content transitions",
      "Lazy-loaded destination cards for a fast first load",
      "Reusable Card component fed from a data helper, with a responsive grid that adapts to mobile",
      "Advanced SCSS with BEM, CSS variables and mixins; hardware-accelerated transforms for smooth animation",
    ],
    stack: ["React.js", "SCSS", "AOS", "react-icons"],
    code: "https://github.com/fatmaindex/travel-app",
    demo: "https://travel-app-tpoa.vercel.app/",
  },
  {
    title: "Idea Bank",
    image: "ideabank",
    kind: "Frontend Project (Dual Portal)",
    blurb:
      "Two-portal idea platform: users register and submit ideas through a structured form, while admins evaluate and rank them with a custom four-metric scoring algorithm.",
    highlights: [
      "Dual-application system: a User Portal for submitting ideas and an Admin Dashboard for moderation, in two separate repos",
      "User Portal: registration and login, a structured submission form (title, description, category), a landing page and an idea details view",
      "Admin evaluation on 4 metrics (Alignment, Innovation, Feasibility, Scalability), scored out of 5 with ((A + I + F + S) / 20) × 5",
      "Automatic Top 3 ranking that updates live, without a page refresh, using RxJS Observables",
      "Sessions with localStorage and BehaviorSubject; navbar updates by auth status",
      "AuthGuard-protected routes with MatSnackBar feedback for restricted access",
      "JSON Server mock backend for users and ideas",
    ],
    stack: [
      "Angular",
      "TypeScript",
      "RxJS",
      "Angular Material",
      "JSON Server",
    ],
    // Both repos live only in the details modal, so the card stays clean
    moreLinks: [
      {
        label: "Portal code",
        href: "https://github.com/fatmaindex/ideaBankPortal",
      },
      {
        label: "Admin code",
        href: "https://github.com/fatmaindex/ideaBankAdmin",
      },
    ],
  },
];

export const skillGroups = [
  {
    label: "Frontend",
    icon: "Layers",
    items: [
      "Angular 18+",
      "React.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "RxJS",
      "Redux Toolkit",
      "TanStack Query",
      "Zustand",
    ],
  },
  {
    label: "Styling",
    icon: "Palette",
    items: [
      "HTML5",
      "CSS3",
      "SCSS/SASS",
      "Tailwind CSS",
      "Bootstrap",
      "Angular Material",
    ],
  },
  {
    label: "Backend",
    icon: "Server",
    items: [
      "Node.js",
      "Express.js",
      "Socket.io",
      "REST API",
      "JWT Auth",
      "MongoDB",
      "Supabase",
    ],
  },
  {
    label: "Practices",
    icon: "Sparkles",
    items: [
      "Clean Code",
      "SOLID principles",
      "OOP",
      "Conventional Commits",
      "Debugging",
    ],
  },
  {
    label: "Tools",
    icon: "Wrench",
    items: ["Git & GitHub", "Postman", "Figma", "Vercel"],
  },
  {
    label: "AI & Productivity",
    icon: "Brain",
    items: ["Generative AI Tools", "Prompt Engineering", "AI Agents"],
  },
];

export const marquee = [
  "TypeScript",
  "Angular",
  "React 19",
  "Tailwind CSS",
  "RxJS",
  "TanStack Query",
  "Zustand",
  "Node.js",
  "Socket.io",
  "MongoDB",
  "Figma",
  "Clean Code",
];

export const education = {
  degree: "B.Eng. — Systems & Computer Engineering",
  school: "Al-Azhar University, Cairo",
  period: "Oct 2021 – Jul 2026",
  notes: [
    "Coursework: Data Structures, OOP, Databases.",
    "AZEX 2023 Exhibition & IEEE Al-Azhar events — Certificate of Appreciation.",
  ],
  languages: "Arabic — Native · English — Intermediate",
};