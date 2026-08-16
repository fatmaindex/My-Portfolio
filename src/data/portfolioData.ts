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
  image: string;
  kind: string;
  blurb: string;
  stack: string[];
  demo?: string;
  demoLabel?: string;
  code?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Aman Smart City",
    image: "smartcity",
    kind: "Graduation Project ",
    blurb:
      "Real-time smart city monitoring platform detecting hazards via AI vision and IoT sensors. Designed the Police Dashboard in Figma, built global incident state with TanStack Query + Zustand, a hybrid REST/WebSocket air-quality module with self-healing reconnection, priority-sorted alert routing and live HLS.js camera streaming.",
    stack: [
      "React 19",
      "TypeScript",
      "TanStack Query",
      "Zustand",
      "Tailwind v4",
      "Node.js",
      "Socket.io",
    ],
    code: "https://github.com/fatmaindex/smart-city-project",
    demo: "https://smart-city-project-pi.vercel.app/",
    featured: true,
  },
  {
    title: "E-Commerce Angular",
    image: "ecommerce",
    kind: "Full Stack",
    blurb:
      "Feature-based architecture with standalone components and lazy loading, JWT auth via HTTP interceptors, HttpOnly cookies and Bcrypt, plus RxJS-powered filtering, sorting and pagination.",
    stack: ["Angular 17", "RxJS", "SCSS", "Express", "MongoDB"],
    code: "https://github.com/fatmaindex",
  },
  {
    title: "Lumea E-Commerce",
    image: "lumia",
    kind: "Frontend Project (with Supabase)",
    blurb:
      "Mobile-first storefront with Supabase Auth, personalized carts and wishlists, category filtering, search, pagination and lazy-loaded imagery.",
    stack: ["React", "Redux Toolkit", "Tailwind CSS", "Supabase"],
    code: "https://github.com/fatmaindex/eccomerce_react_app",
    demo: "https://eccomerce-react-app-olmq.vercel.app/",
  },
  // {
  //   title: "Idea Bank",
  //   image: "ideabank",
  //   kind: "Dual Portal",
  //   blurb:
  //     "User portal for idea submission and voting plus an admin moderation dashboard, with scoring on alignment, innovation, feasibility and scalability.",
  //   stack: ["Angular", "TypeScript", "RxJS", "JSON Server"],
  //   code: "https://github.com/fatmaindex/ideaBankPortal",
  // },

  {
    title: "Travel",
    image: "travel",
    kind: "Frontend Project",
    blurb:
      "Developed a fully responsive and visually appealing travel website using React.js and Sass. Showcased tours and packages with a focus on delivering an engaging user experience across devices.",
    stack: ["React.js", "Sass"],
    code: "https://github.com/fatmaindex/travel-app",
    demo: "https://travel-app-tpoa.vercel.app/"
  },
  {
    title: "University Website",
    image: "university",
    kind: "Frontend Project",
    blurb: "Built a responsive university website featuring academic info, announcements, and faculty details.",
    stack: ["HTML", "CSS", "JavaScript"],
    demo: "https://fatmaindex.github.io/university-website/",
    code: "https://github.com/fatmaindex/university.git",
  },
  // {
  //   title: "Bank Dashboard",
  //   image: "bank",
  //   kind: "Data Product",
  //   blurb:
  //     "High-fidelity Figma-to-code translation with interactive Chart.js financial visualizations and reusable sidebars, cards and tables.",
  //   stack: ["Angular", "SASS", "Chart.js"],
  // },
 {
  title: "Infra",
    image: "infra",
    kind: "Frontend Project (Freelance) ",
    blurb:
      "Developed an infrastructure management page for tracking resources and monitoring project progress. Built interactive components for real-time data visualization. Optimized SASS preprocessing to support a fully responsive design, ensuring a seamless user experience across devices.",
    stack: ["Angular", "HTML", "SASS", "TypeScript"],
    demo: "https://infra.gov.sa/",
  demoLabel: "Live",
  
},
];

export const skillGroups = [
  {
    label: "Frontend", icon: "Layers",
    items: ["Angular 18+", "React.js", "TypeScript", "JavaScript (ES6+)", "RxJS", "Redux Toolkit", "TanStack Query", "Zustand"],
  },
  {
    label: "Styling", icon: "Palette",
    items: ["HTML5", "CSS3", "SCSS/SASS", "Tailwind CSS", "Bootstrap", "Angular Material"],
  },
  {
    label: "Backend", icon: "Server",
    items: ["Node.js", "Express.js", "Socket.io", "REST API", "JWT Auth", "MongoDB"],
  },
  {
    label: "Practices", icon: "Sparkles",
    items: ["Clean Code", "SOLID principles ", "OOP", "Conventional Commits", "Debugging"],
  },
  { label: "Tools", icon: "Wrench", items: ["Git & GitHub", "Postman", "Figma", "Vercel"] },
  {
    label: "AI & Productivity", icon: "Brain",
    items: [
      "Generative AI Tools",
      "Prompt Engineering",
      // "AI-Assisted Development",
      "AI Agents"
    ],
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
