/**
 * Global navigation / mega-menu data (reconstructed from the original build).
 * Consumed by components/Header.jsx.
 */

export const MEGA_MENUS = [
  {
    label: "Hire",
    title: "Hire",
    description:
      "Hire skilled developers to bring expertise and efficiency to your projects, ensuring outstanding results every time.",
    moreHref: "/hire",
    items: [
      { href: "/hire/frontend-developer", icon: "fa-briefcase", title: "Frontend Developers", desc: "Design and develop user-friendly interfaces for web applications." },
      { href: "/hire/backend-developer", icon: "fa-user-tie", title: "Backend Developers", desc: "Join us as a freelancer and work on exciting projects." },
      { href: "/hire/mobile-app-developer", icon: "fa-mobile-alt", title: "Mobile App Developers", desc: "Create mobile applications for iOS and Android platforms." },
      { href: "/hire/qa-engineer", icon: "fa-bug", title: "QA Engineers", desc: "Test software applications to ensure quality and performance." },
      { href: "/hire/devops-engineer", icon: "fa-tools", title: "DevOps Engineers", desc: "Streamline development processes and infrastructure with DevOps practices." },
      { href: "/hire/ai-ml-developer", icon: "fa-robot", title: "AI & ML Specialists", desc: "Leverage AI and ML technologies to build smart applications." },
    ],
  },
  {
    label: "Industries",
    title: "Industries",
    description:
      "Our expertise covers a wide range of industries, addressing the specific challenges of each sector. From healthcare and finance to e-commerce, education, and more, we create innovative, scalable solutions that drive efficiency and success in your industry.",
    moreHref: "/industries",
    items: [
      { href: "/industries/fintech", icon: "fa-heartbeat", title: "Fintech", desc: "Solutions for the healthcare sector to improve patient care." },
      { href: "/industries/startup", icon: "fa-university", title: "Startup", desc: "Innovative financial tools and services for the modern world." },
      { href: "/industries/logistics", icon: "fa-store", title: "Logistics", desc: "Transforming retail experiences with technology-driven solutions." },
      { href: "/industries/retail-and-manufacturing", icon: "fa-store", title: "Retail & Manufacturing", desc: "Transforming retail experiences with technology-driven solutions." },
      { href: "/industries/enterprise", icon: "fa-building", title: "Enterprise", desc: "Innovative solutions for businesses of all sizes." },
      { href: "/industries/education", icon: "fa-graduation-cap", title: "Education", desc: "Empowering educators and students with technology." },
      { href: "/industries/real-estate", icon: "fa-home", title: "Real Estate", desc: "Revolutionizing the real estate industry with tech solutions." },
      { href: "/industries/medical-and-healthcare", icon: "fa-heartbeat", title: "Medical & Healthcare", desc: "Enhancing healthcare services with technology." },
      { href: "/industries/technology-company", icon: "fa-laptop-code", title: "Technology Company", desc: "Tech solutions for companies looking to innovate." },
      { href: "/industries/media-and-entertainment", icon: "fa-film", title: "Media & Entertainment", desc: "Transforming media and entertainment with tech." },
      { href: "/industries/ngo", icon: "fa-hand-holding-heart", title: "NGO", desc: "Supporting NGOs with technology-driven solutions." },
    ],
  },
  {
    label: "Services",
    title: "Services",
    description:
      "We take care of all your technical needs, from concept to execution and beyond. Whether it's development, optimization, or scaling, we're committed to delivering and continuously improving your product so you can focus on growth.",
    moreHref: "/services",
    items: [
      { href: "/hire", icon: "fa-user-group", title: "Team Extension", desc: "Expanding your team with skilled professionals." },
      { href: "/services/custom-software-development", icon: "fa-cogs", title: "Custom Software Development", desc: "Building software solutions to meet unique business needs efficiently." },
      { href: "/services/enterprise-software-development", icon: "fa-chart-column", title: "Enterprise Software Development", desc: "Streamlining enterprise operations with robust software." },
      { href: "/services/mobile-app-development", icon: "fa-mobile-screen", title: "Mobile App Development", desc: "Creating engaging and user-friendly mobile experiences." },
      { href: "/services/qa-and-testing", icon: "fa-shield-halved", title: "QA & Testing", desc: "Ensuring quality through rigorous testing processes." },
      { href: "/services/mvp-development", icon: "fa-rocket", title: "MVP Development", desc: "Launching ideas faster with a minimum viable product." },
    ],
  },
  {
    label: "Products",
    title: "Products",
    description:
      "Explore innovative solutions designed to simplify processes, enhance efficiency, and drive growth across industries.",
    moreHref: "/products",
    items: [
      { href: "/products/time2task", icon: "fa-box", title: "Time2Task", desc: "A task management tool to plan, assign, and track project tasks efficiently." },
      { href: "/products/cloud-clockin", icon: "fa-clock", title: "Cloud Clock In", desc: "A digital system for tracking employee attendance and work hours in real time." },
      { href: "/products/uber-queue", icon: "fa-people-line", title: "Uber Queue", desc: "A digital queue management system to streamline customer flow and reduce waiting times." },
      { href: "/products/flyte-pos", icon: "fa-radiation", title: "Flyte POS", desc: "A reliable point-of-sale system for efficient retail transactions and inventory tracking." },
      { href: "/products/scb-priority", icon: "fa-poo-storm", title: "SCB Priority", desc: "Discover SCB Priority - a premium digital banking platform designed for high-net-worth clients." },
      { href: "/products/travel-management", icon: "fa-clone", title: "Procurement Software", desc: "A procurement management tool designed to optimize purchasing processes and supplier collaboration." },
    ],
  },
];

export const COMPANY_MENU = {
  label: "Company",
  title: "Discover Flyte",
  description:
    "Explore who we are, what we stand for, and how we're shaping the future. Stay informed with the latest updates, insights, and stories that define our journey and inspire innovation.",
  moreHref: "/company",
  items: [
    { href: "/company/about-us", icon: "fa-globe", title: "About Us", desc: "Learn about our mission, vision, and the values that drive our commitment to excellence. Discover the story behind our journey and what makes us a trusted partner for businesses worldwide.", cta: "Explore About Us" },
    { href: "/company/news-and-blogs", icon: "fa-newspaper", title: "News & Blogs", desc: "Stay updated with the latest company news, industry insights, and expert opinions. Dive into our blogs for valuable tips and updates shaping the future of technology and business.", cta: "Read News & Blogs" },
  ],
};
