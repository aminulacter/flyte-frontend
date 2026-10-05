import type { HireRole } from "@/lib/types";

const ICON =
  "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6]";

const BACKEND_SIBLING_LINKS = [
  { href: "nodejs-developer", label: "Hire Node.js Developers" },
  { href: "laravel-developer", label: "Hire Laravel Developers" },
  { href: "python-developer", label: "Hire Python Developers" },
];

function siblingExplore(slug: string) {
  return {
    title: "Explore More Developer Roles",
    links: BACKEND_SIBLING_LINKS.filter((link) => link.href !== slug),
  };
}

/** Specialty hire pages not yet extracted from legacy content — sensible defaults until full copy exists. */
export const HIRE_STUB_ROLES: HireRole[] = [
  {
    slug: "nodejs-developer",
    hero: {
      eyebrow: "HIRE NODE.JS DEVELOPERS",
      title: "Hire Dedicated Node.js Developers for Scalable Backend Systems",
      description:
        "Build fast, event-driven APIs and microservices with experienced Node.js engineers. We deliver secure integrations, real-time features, and cloud-ready backends tailored to your product.",
      image: "https://i.ibb.co.com/zTXjbc62/Frame-1000005999.png",
      ctaLabel: "Hire Node.js Developers Now",
      ctaHref: "/hire/application-form",
    },
    whyChoose: {
      title: "Why Choose Our Node.js Developers?",
      cards: [
        {
          icon: `${ICON} fa-solid fa-server`,
          title: "High-Performance APIs",
          description: "Express, NestJS, and Fastify for low-latency REST and GraphQL services.",
          variant: "transparent",
        },
        {
          icon: `${ICON} fa-solid fa-bolt`,
          title: "Event-Driven Architecture",
          description: "Real-time apps with WebSockets, queues, and async I/O at scale.",
          variant: "transparent",
        },
        {
          icon: `${ICON} fa-solid fa-database`,
          title: "Data Layer Expertise",
          description: "PostgreSQL, MongoDB, Redis, and ORMs matched to your stack.",
          variant: "transparent",
        },
        {
          icon: `${ICON} fa-solid fa-shield-alt`,
          title: "Security First",
          description: "Auth, rate limiting, and hardened deployments following best practices.",
          variant: "transparent",
        },
        {
          icon: `${ICON} fa-solid fa-cloud`,
          title: "Cloud Native",
          description: "Docker, AWS, and CI/CD pipelines for reliable releases.",
          variant: "transparent",
        },
        {
          icon: `${ICON} fa-solid fa-users-cog`,
          title: "Dedicated Teams",
          description: "Engineers who embed with your squad and ship on your roadmap.",
          variant: "transparent",
        },
      ],
    },
    developing: {
      title: "Node.js Backend Development",
      description: "Server-side applications powered by JavaScript/TypeScript on the Node.js runtime.",
      image: "/images/hire/backend.webp",
      imageAlt: "Node.js Development",
      stepsTitle: "Node.js Delivery Process",
      steps: [
        {
          title: "Architecture & Scope",
          description: "Define services, APIs, and data models aligned with product goals and scale targets.",
        },
        {
          title: "API & Service Build",
          description: "Implement routes, middleware, validation, and business logic with tested modules.",
        },
        {
          title: "Integrations",
          description: "Connect payment, auth, messaging, and third-party systems with stable contracts.",
        },
        {
          title: "Performance & Security",
          description: "Optimize queries, caching, and harden endpoints before production traffic.",
        },
        {
          title: "Deploy & Monitor",
          description: "Ship to cloud environments with logging, alerts, and ongoing iteration.",
        },
      ],
      ctaLabel: "Start Hiring",
      ctaHref: "/hire/application-form",
    },
    expertise: { title: "", cards: [], image: "" },
    technologies: { title: "Technologies We Work With", items: [] },
    exploreRoles: siblingExplore("nodejs-developer"),
  },
  {
    slug: "laravel-developer",
    hero: {
      eyebrow: "HIRE LARAVEL DEVELOPERS",
      title: "Hire Dedicated Laravel Developers for Robust PHP Applications",
      description:
        "Ship maintainable web apps and APIs with Laravel specialists. From admin portals to multi-tenant SaaS, we bring clean architecture, testing, and rapid delivery on PHP.",
      image: "https://i.ibb.co.com/zTXjbc62/Frame-1000005999.png",
      ctaLabel: "Hire Laravel Developers Now",
      ctaHref: "/hire/application-form",
    },
    whyChoose: {
      title: "Why Choose Our Laravel Developers?",
      cards: [
        {
          icon: `${ICON} fa-solid fa-layer-group`,
          title: "MVC & Clean Code",
          description: "Eloquent models, controllers, and services structured for long-term maintenance.",
          variant: "transparent",
        },
        {
          icon: `${ICON} fa-solid fa-cogs`,
          title: "Rich Ecosystem",
          description: "Queues, Horizon, Sanctum, and packages chosen for your use case.",
          variant: "transparent",
        },
        {
          icon: `${ICON} fa-solid fa-database`,
          title: "Database Design",
          description: "Migrations, indexing, and reporting on MySQL or PostgreSQL.",
          variant: "transparent",
        },
        {
          icon: `${ICON} fa-solid fa-lock`,
          title: "Secure by Default",
          description: "Policies, guards, and validation protecting user and business data.",
          variant: "transparent",
        },
        {
          icon: `${ICON} fa-solid fa-vial`,
          title: "Tested Releases",
          description: "PHPUnit and Pest coverage for critical paths and regressions.",
          variant: "transparent",
        },
        {
          icon: `${ICON} fa-solid fa-users`,
          title: "Product Partnership",
          description: "Collaborative delivery with product and design from sprint to launch.",
          variant: "transparent",
        },
      ],
    },
    developing: {
      title: "Laravel Development",
      description: "Full-stack and API-first applications built on the Laravel PHP framework.",
      image: "/images/hire/backend.webp",
      imageAlt: "Laravel Development",
      stepsTitle: "Laravel Delivery Process",
      steps: [
        {
          title: "Requirements & Modeling",
          description: "Map domains, roles, and workflows into Laravel-friendly module boundaries.",
        },
        {
          title: "Feature Implementation",
          description: "Build controllers, jobs, events, and Blade or API resources with conventions.",
        },
        {
          title: "Auth & Permissions",
          description: "Implement roles, OAuth, and API tokens suited to your clients.",
        },
        {
          title: "Quality Assurance",
          description: "Automated tests, staging checks, and performance tuning before go-live.",
        },
        {
          title: "Hosting & Handoff",
          description: "Deploy to Forge, VPS, or cloud with documentation for your team.",
        },
      ],
      ctaLabel: "Start Hiring",
      ctaHref: "/hire/application-form",
    },
    expertise: { title: "", cards: [], image: "" },
    technologies: { title: "Technologies We Work With", items: [] },
    exploreRoles: siblingExplore("laravel-developer"),
  },
  {
    slug: "python-developer",
    hero: {
      eyebrow: "HIRE PYTHON DEVELOPERS",
      title: "Hire Dedicated Python Developers for APIs, Data, and Automation",
      description:
        "Scale backends and data pipelines with Python experts. Django, FastAPI, and scripting for integrations — delivered by engineers who focus on clarity and reliability.",
      image: "https://i.ibb.co.com/zTXjbc62/Frame-1000005999.png",
      ctaLabel: "Hire Python Developers Now",
      ctaHref: "/hire/application-form",
    },
    whyChoose: {
      title: "Why Choose Our Python Developers?",
      cards: [
        {
          icon: `${ICON} fa-solid fa-code`,
          title: "Modern Frameworks",
          description: "Django, FastAPI, and Flask chosen for speed, typing, and team fit.",
          variant: "transparent",
        },
        {
          icon: `${ICON} fa-solid fa-chart-line`,
          title: "Data & Automation",
          description: "ETL, reporting, and workflow automation with pandas and task runners.",
          variant: "transparent",
        },
        {
          icon: `${ICON} fa-solid fa-plug`,
          title: "API Integrations",
          description: "Reliable connectors to CRMs, payment, and internal systems.",
          variant: "transparent",
        },
        {
          icon: `${ICON} fa-solid fa-shield-alt`,
          title: "Production Ready",
          description: "Observability, error handling, and secure configuration management.",
          variant: "transparent",
        },
        {
          icon: `${ICON} fa-solid fa-microchip`,
          title: "ML-Ready Backends",
          description: "Serve models and batch jobs when AI features belong in your stack.",
          variant: "transparent",
        },
        {
          icon: `${ICON} fa-solid fa-users-cog`,
          title: "Flexible Engagement",
          description: "Augment your team or own a workstream end to end.",
          variant: "transparent",
        },
      ],
    },
    developing: {
      title: "Python Development",
      description: "Backend services, internal tools, and data workflows using Python’s ecosystem.",
      image: "/images/hire/backend.webp",
      imageAlt: "Python Development",
      stepsTitle: "Python Delivery Process",
      steps: [
        {
          title: "Discovery",
          description: "Clarify domains, SLAs, and the right framework for APIs vs. batch work.",
        },
        {
          title: "Implementation",
          description: "Develop modules, serializers, and jobs with typing and linting standards.",
        },
        {
          title: "Data Layer",
          description: "Design schemas, migrations, and queries optimized for your workloads.",
        },
        {
          title: "Testing & Hardening",
          description: "pytest coverage, load checks, and security review before release.",
        },
        {
          title: "Deploy & Support",
          description: "Containerized or PaaS deploys with monitoring and iterative improvements.",
        },
      ],
      ctaLabel: "Start Hiring",
      ctaHref: "/hire/application-form",
    },
    expertise: { title: "", cards: [], image: "" },
    technologies: { title: "Technologies We Work With", items: [] },
    exploreRoles: siblingExplore("python-developer"),
  },
];
