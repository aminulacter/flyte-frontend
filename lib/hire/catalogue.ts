import type { ExpertiseSection, HireRole } from "@/lib/types";

const ICON =
  "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6]";

function expertiseCard(
  faClass: string,
  title: string,
  description: string,
  variant: "transparent" | "filled" = "transparent"
) {
  return {
    icon: `${ICON} fa-solid ${faClass}`,
    title,
    description,
    variant,
  };
}

/**
 * Expertise blocks for `/hire-sp/[slug]` pages.
 * Edit here to tune specialty role pages without touching category data in `roles.ts`.
 */
export const HIRE_SPECIALTY_EXPERTISE: Record<string, ExpertiseSection> = {
  "angular-developer": {
    title: "Our Angular Developers Expertise",
    image: "https://i.ibb.co/GQQQS9Rn/OBJECTS.png",
    cards: [
      expertiseCard("fa-code", "Single Page Applications (SPAs)", "Build dynamic web applications with minimal page reloads for fast user interactions."),
      expertiseCard("fa-cogs", "Two-Way Data Binding", "Easily sync the view and model for real-time updates with Angular’s powerful data binding."),
      expertiseCard("fa-users", "State Management (NgRx, Angular Services)", "Use NgRx or Angular Services for managing and centralizing app state."),
      expertiseCard("fa-database", "API Integration", "Connect with RESTful APIs and third-party services for rich, dynamic app functionality."),
      expertiseCard("fa-server", "Component-Based Architecture", "Organize app features into manageable, reusable components for faster development."),
      expertiseCard("fa-lock", "Testing & Debugging", "Leverage Angular testing tools like Jasmine and Karma to ensure app stability and high-quality code."),
    ],
  },
  "reactjs-developer": {
    title: "Our React Developers Expertise",
    image: "https://i.ibb.co/GQQQS9Rn/OBJECTS.png",
    cards: [
      expertiseCard("fa-code", "Single Page Applications (SPAs)", "Develop dynamic web apps with smooth, fast user interactions and minimal page reloads."),
      expertiseCard("fa-cogs", "Server-Side Rendering (Next.js)", "Improve SEO, performance, and initial page load speed with efficient server-side rendering."),
      expertiseCard("fa-users", "State Management (Redux, Context API)", "Manage application state efficiently, ensuring data consistency and seamless user experience."),
      expertiseCard("fa-database", "API Integration & Third-Party Libraries", "Seamlessly connect with RESTful APIs, GraphQL, and third-party services for enhanced functionality."),
      expertiseCard("fa-server", "Performance Optimization", "Optimize rendering, minimize re-renders, and enhance load times for a fast, responsive UI."),
      expertiseCard("fa-lock", "Testing & Debugging", "Ensure app stability with unit, integration, and end-to-end testing using Jest, React Testing Library, and Cypress."),
    ],
  },
  "vuejs-developer": {
    title: "Our Vue.js Developers Expertise",
    image: "https://i.ibb.co/GQQQS9Rn/OBJECTS.png",
    cards: [
      expertiseCard("fa-code", "Single Page Applications (SPAs)", "Develop dynamic, fast-loading web apps with minimal page reloads using Vue.js."),
      expertiseCard("fa-cogs", "State Management (Vuex)", "Use Vuex to manage complex state and handle data flow in large Vue.js applications."),
      expertiseCard("fa-users", "Component-Based Architecture", "Break down the user interface into small, reusable components for faster development and easier maintenance."),
      expertiseCard("fa-database", "API Integration", "Easily connect the frontend to RESTful APIs or GraphQL backends to fetch, display, and manage dynamic data."),
      expertiseCard("fa-server", "Performance Optimization", "Optimize rendering, minimize re-renders, and enhance load times for a fast, responsive UI."),
      expertiseCard("fa-lock", "Testing & Debugging", "Use tools like Vue Test Utils and Jest to ensure application stability and reliability."),
    ],
  },
  "nextjs-developer": {
    title: "Our Next.js Developers Expertise",
    image: "https://i.ibb.co/GQQQS9Rn/OBJECTS.png",
    cards: [
      expertiseCard("fa-code", "Static Site Generation (SSG)", "Generate static pages at build time for faster page loads and SEO optimization."),
      expertiseCard("fa-cogs", "Server-Side Rendering (SSR)", "Pre-render pages on the server before sending them to the client for better SEO and performance."),
      expertiseCard("fa-users", "API Routes", "Create backend functionality like RESTful APIs directly within the Next.js application using API routes."),
      expertiseCard("fa-database", "Incremental Static Regeneration", "Regenerate static content on-demand without rebuilding the entire site, ensuring fresh content."),
      expertiseCard("fa-server", "Performance Optimization", "Leverage Next.js features like Image Optimization, Automatic Static Optimization, and Lazy Loading for top-tier performance."),
      expertiseCard("fa-lock", "Testing & Debugging", "Ensure code reliability and app stability through automated tests using tools like Jest, Cypress, and React Testing Library."),
    ],
  },
  "nodejs-developer": {
    title: "Node.js Expertise",
    image: "https://i.ibb.co/GQQQS9Rn/OBJECTS.png",
    cards: [
      expertiseCard("fa-server", "REST & GraphQL APIs", "Design and ship versioned APIs with validation, auth, and observability."),
      expertiseCard("fa-bolt", "Real-Time Systems", "WebSockets, queues, and event-driven workflows for live product features."),
      expertiseCard("fa-database", "Data & Caching", "PostgreSQL, MongoDB, Redis, and ORM patterns tuned for your traffic."),
      expertiseCard("fa-shield-alt", "Security & Compliance", "Hardened auth, secrets management, and audit-friendly logging."),
      expertiseCard("fa-cloud", "Cloud Deployment", "Containerized deploys on AWS, Azure, or GCP with CI/CD pipelines."),
      expertiseCard("fa-users-cog", "Team Extension", "Senior Node engineers embedded in your sprint rhythm."),
    ],
  },
  "laravel-developer": {
    title: "Laravel Expertise",
    image: "https://i.ibb.co/GQQQS9Rn/OBJECTS.png",
    cards: [
      expertiseCard("fa-layer-group", "Application Architecture", "Clean MVC, service layers, and domain boundaries for growing products."),
      expertiseCard("fa-cogs", "Queues & Jobs", "Horizon, events, and background processing for reliable async work."),
      expertiseCard("fa-database", "Database & Eloquent", "Migrations, relationships, and query optimization at scale."),
      expertiseCard("fa-lock", "Auth & Policies", "Sanctum, Passport, and role-based access for web and API clients."),
      expertiseCard("fa-vial", "Automated Testing", "PHPUnit and Pest suites that protect releases and refactors."),
      expertiseCard("fa-users", "Product Delivery", "Laravel specialists who ship features with your product team."),
    ],
  },
  "python-developer": {
    title: "Python Expertise",
    image: "",
    cards: [
      expertiseCard("fa-code", "Django & FastAPI", "Typed APIs and admin-ready apps chosen for your delivery speed."),
      expertiseCard("fa-chart-line", "Data Pipelines", "ETL, reporting, and scheduled jobs with reliable orchestration."),
      expertiseCard("fa-plug", "Integrations", "CRM, billing, and internal tools connected through stable interfaces."),
      expertiseCard("fa-shield-alt", "Production Hardening", "Config, monitoring, and error handling built for uptime."),
      expertiseCard("fa-microchip", "ML-Adjacent Services", "Model serving and batch inference when AI belongs in your stack."),
      expertiseCard("fa-users-cog", "Dedicated Squads", "Python engineers aligned to your roadmap and code standards."),
    ],
  },
  "flutter-developer": {
    title: "Flutter Expertise",
    image: "",
    cards: [
      expertiseCard("fa-mobile-alt", "Cross-Platform UI", "Single codebase for iOS and Android with native-feel interactions."),
      expertiseCard("fa-paint-brush", "Custom Widgets", "Brand-aligned components and motion for polished mobile UX."),
      expertiseCard("fa-bolt", "Performance Tuning", "Smooth frames, efficient builds, and optimized asset loading."),
      expertiseCard("fa-cloud-upload-alt", "Store Release", "Build pipelines and store submission support for both platforms."),
      expertiseCard("fa-sync", "Backend Integration", "Secure API, auth, and offline-first patterns where needed."),
      expertiseCard("fa-users", "Embedded Mobile Teams", "Flutter developers who work inside your product squad."),
    ],
  },
  "android-developer": {
    title: "Android Expertise",
    image: "",
    cards: [
      expertiseCard("fa-mobile-alt", "Native Android Apps", "Kotlin-first development following Material and platform guidelines."),
      expertiseCard("fa-cogs", "Architecture Components", "ViewModel, Navigation, and modular structure for maintainability."),
      expertiseCard("fa-shield-alt", "Security & Privacy", "Secure storage, permissions, and compliance-aware implementations."),
      expertiseCard("fa-wifi", "Connectivity", "REST, GraphQL, and real-time sync with resilient offline handling."),
      expertiseCard("fa-vial", "Testing on Devices", "Unit, instrumentation, and release QA across device matrices."),
      expertiseCard("fa-users-cog", "Play Store Delivery", "Release trains from alpha through production on Google Play."),
    ],
  },
  "react-native-developer": {
    title: "React Native Expertise",
    image: "",
    cards: [
      expertiseCard("fa-mobile-alt", "Shared Mobile Codebase", "One React Native stack for iOS and Android feature parity."),
      expertiseCard("fa-code", "Native Modules", "Bridge to platform APIs when JavaScript alone is not enough."),
      expertiseCard("fa-bolt", "App Performance", "Startup time, list virtualization, and memory-conscious UI."),
      expertiseCard("fa-paint-brush", "Design Systems", "Reusable RN components aligned with your brand and accessibility goals."),
      expertiseCard("fa-cloud-upload-alt", "OTA & Store Releases", "CodePush-style updates and coordinated App Store / Play launches."),
      expertiseCard("fa-users", "Collaborative Delivery", "RN engineers paired with your designers and backend team."),
    ],
  },
};

export function getSpecialtyExpertise(slug: string): ExpertiseSection | null {
  return HIRE_SPECIALTY_EXPERTISE[slug] ?? null;
}

/** Prefer catalogue image on specialty pages; ignores blank strings. */
export function resolveSpecialtyExpertiseImage(
  slug: string,
  expertise?: ExpertiseSection | null
): string | null {
  const fromRole = expertise?.image?.trim();
  if (fromRole) return fromRole;
  const fromCatalogue = getSpecialtyExpertise(slug)?.image?.trim();
  return fromCatalogue || null;
}

/** Applies catalogue expertise onto a resolved specialty role (direct or parent fallback). */
export function withSpecialtyExpertise(role: HireRole, slug: string): HireRole {
  const expertise = getSpecialtyExpertise(slug);
  if (!expertise) return { ...role, slug };
  return { ...role, slug, expertise };
}

