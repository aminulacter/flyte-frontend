// Auto-generated from app/hire/*/content.js by scripts/extract-hire-roles.mjs
import {
  getSpecialtyParentCategory,
  isHireSpecialty,
} from "@/lib/hire/catalog";
import { withSpecialtyExpertise } from "@/lib/hire/catalogue";
import type { HireRole } from "@/lib/types";

export const HIRE_ROLES = [
  {
    "slug": "ai-ml-developer",
    "hero": {
      "eyebrow": "HIRE AI & MACHINE LEARNING DEVELOPERS",
      "title": "Hire Dedicated AI & Machine Learning Developers for Seamless User Experiences",
      "description": "Build responsive, interactive, and high-performing web applications with our expert frontend developers. We specialize in seamless user experiences, cutting-edge frameworks, and optimized performance for fast, scalable, and visually stunning interfaces.",
      "image": "https://i.ibb.co.com/b5kgnLyz/Frame-1000005999-1.png",
      "ctaLabel": "Hire AI & ML Now",
      "ctaHref": "/hire/application-form"
    },
    "whyChoose": {
      "title": "Why Choose Our AI & ML Experts?",
      "cards": [
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-brain",
          "title": "Custom AI Solutions",
          "description": "Tailored models to solve specific business challenges.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-robot",
          "title": "Automation & Efficiency",
          "description": "Streamline operations with smart automation tools.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-chart-line",
          "title": "Predictive Analytics",
          "description": "Forecast trends and behaviors with high accuracy.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-database",
          "title": "Big Data Integration",
          "description": "Handle and process large datasets seamlessly.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-tools",
          "title": "End-to-End ML Pipelines",
          "description": "From data preprocessing to model deployment.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-users",
          "title": "AI Expertise",
          "description": "Skilled data scientists and engineers at your service.",
          "variant": "filled"
        }
      ]
    },
    "developing": {
      "title": "AI & Machine Learning",
      "description": "Creating intelligent systems that learn, predict, and automate processes using data-driven models.",
      "hiring_title": "Our Hiring process",
      "hiring_description": "From understanding your needs to onboarding the perfect team, we ensure a seamless hiring process customized to your project.",
      "image": "/images/hire/ai.webp",
      "imageAlt": "AI & Machine Learning",
      "stepsTitle": "Your Path to Hiring AI & ML Developers",
      "steps": [
        {
          "title": "Problem Definition",
          "description": "Identify business challenges and determine how AI/ML can bring efficient, scalable solutions."
        },
        {
          "title": "Data Collection & Preparation",
          "description": "Gather, clean, and preprocess structured or unstructured data to train machine learning models effectively."
        },
        {
          "title": "Model Selection & Training",
          "description": "Choose the right algorithms (e.g., regression, classification, neural networks) and train models using Python, TensorFlow, or PyTorch."
        },
        {
          "title": "Model Evaluation & Tuning",
          "description": "Evaluate accuracy, precision, and recall of models, then optimize with hyperparameter tuning or cross-validation."
        },
        {
          "title": "Deployment & Monitoring",
          "description": "Deploy models into production with REST APIs or cloud services, and monitor performance over time."
        }
      ],
      "ctaLabel": "Start Hiring",
      "ctaHref": "/hire/application-form"
    },
    "expertise": {
      "title": "AI Expertise",
      "cards": [
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-brain",
          "title": "Custom AI Solutions",
          "description": "Tailored models to solve specific business challenges.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-robot",
          "title": "Automation & Efficiency",
          "description": "Streamline operations with smart automation tools.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-chart-line",
          "title": "Predictive Analytics",
          "description": "Forecast trends and behaviors with high accuracy.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-database",
          "title": "Big Data Integration",
          "description": "Handle and process large datasets seamlessly.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-tools",
          "title": "End-to-End ML Pipelines",
          "description": "From data preprocessing to model deployment.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-users",
          "title": "AI Expertise",
          "description": "Skilled data scientists and engineers at your service.",
          "variant": "filled"
        }
      ],
      "image": ""
    },
    "technologies": {
      "title": "Technologies We Work With",
      "items": []
    },
    "exploreRoles": {
      "title": "Explore More Developer Roles",
      "links": [
        {
          "href": "reactjs-developer",
          "label": "Hire React.js Developers"
        },
        {
          "href": "angular-developer",
          "label": "Hire Angular Developers"
        },
        {
          "href": "vuejs-developer",
          "label": "Hire Vue.js Developers"
        },
        {
          "href": "nextjs-developer",
          "label": "Hire Next.js Developers"
        }
      ]
    }
  },
  {
    "slug": "angular-developer",
    "hero": {
      "eyebrow": "HIRE ANGULAR DEVELOPERS",
      "title": "Hire Dedicated Angular Developers for Robust Web Applications",
      "description": "Create seamless, single-page applications and dynamic websites with Angular. Our expert Angular developers ensure high performance, maintainable code, and user-friendly interfaces with the latest Angular technologies.",
      "image": "/images/hire/Angular-Banner-Image.webp",
      "ctaLabel": "Hire Angular Developers Now",
      "ctaHref": "/hire/application-form"
    },
    "whyChoose": {
      "title": "Why Choose Our Angular Developers?",
      "cards": [
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-cubes",
          "title": "Full-Fledged Framework",
          "description": "Includes routing, HTTP, forms, and more out of the box.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-sync-alt",
          "title": "Two-Way Data Binding",
          "description": "Synchronizes data between model and view instantly.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-toolbox",
          "title": "Powerful CLI",
          "description": "Boosts productivity with code scaffolding and testing tools.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-lock",
          "title": "Enterprise-Level Security",
          "description": "Ideal for large-scale, mission-critical applications.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-chart-line",
          "title": "Performance Optimization",
          "description": "AOT compilation and tree shaking for faster apps.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-users-cog",
          "title": "Strong Support & Community",
          "description": "Backed by Google with regular updates and LTS.",
          "variant": "filled"
        }
      ]
    },
    "developing": {
      "title": "Angular Development",
      "description": "Building scalable, high-performance, and dynamic applications using Angular.",
      "hiring_title": "Our Hiring process",
      "hiring_description": "From understanding your needs to onboarding the perfect team, we ensure a seamless hiring process customized to your project.",
      "image": "/images/hire/angular.webp",
      "imageAlt": "Angular Development",
      "stepsTitle": "Your Path to Hiring Angular Developers",
      "steps": [
        {
          "title": "Project Planning",
          "description": "Identify project goals and user needs while defining the structure of your Angular application."
        },
        {
          "title": "Component Design",
          "description": "Design reusable and maintainable UI components with Angular’s component-based architecture."
        },
        {
          "title": "State Management",
          "description": "Implement state management solutions like NgRx or Angular services to ensure consistency across the app."
        },
        {
          "title": "API Integration",
          "description": "Connect the frontend to RESTful APIs or third-party services for real-time data management."
        },
        {
          "title": "Testing & Deployment",
          "description": "Ensure application stability with testing tools like Jasmine, Karma, and deploy using Firebase or Heroku."
        }
      ],
      "ctaLabel": "Start Hiring",
      "ctaHref": "/hire/application-form",
      "hiring_image": "/images/hire/Hiring_Process-Graphics.svg",
      "hiring_image_alt": "Hiring process illustration"
    },
    "expertise": {
      "title": "Our React Developers Expertise",
      "cards": [
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-code",
          "title": "Single Page Applications (SPAs)",
          "description": "Build dynamic web applications with minimal page reloads for fast user interactions.",
          "variant": "transparent"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-cogs",
          "title": "Two-Way Data Binding",
          "description": "Easily sync the view and model for real-time updates with Angular’s powerful data binding.",
          "variant": "transparent"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-users",
          "title": "State Management (NgRx, Angular Services)",
          "description": "Use NgRx or Angular Services for managing and centralizing app state.",
          "variant": "transparent"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-database",
          "title": "API Integration",
          "description": "Connect with RESTful APIs and third-party services for rich, dynamic app functionality.",
          "variant": "transparent"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-server",
          "title": "Component-Based Architecture",
          "description": "Organize app features into manageable, reusable components for faster development.",
          "variant": "transparent"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-lock",
          "title": "Testing & Debugging",
          "description": "Leverage Angular testing tools like Jasmine and Karma to ensure app stability and high-quality code.",
          "variant": "transparent"
        }
      ],
      "image": "https://i.ibb.co/GQQQS9Rn/OBJECTS.png"
    }
  },
  {
    "slug": "backend-developer",
    "hero": {
      "eyebrow": "HIRE BACKEND DEVELOPERS",
      "title": "Hire Dedicated Backend Developers for Seamless User Experiences",
      "description": "Build responsive, interactive, and high-performing web applications with our expert frontend developers. We specialize in seamless user experiences, cutting-edge frameworks, and optimized performance for fast, scalable, and visually stunning interfaces.",
      "image": "https://i.ibb.co.com/zTXjbc62/Frame-1000005999.png",
      "ctaLabel": "Hire Backend Developers Now",
      "ctaHref": "/hire/application-form"
    },
    "whyChoose": {
      "title": "Why Choose Our Backend Developers?",
      "cards": [
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-server",
          "title": "Robust Architecture",
          "description": "Design scalable, fault-tolerant backend systems.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-database",
          "title": "Efficient Data Handling",
          "description": "Optimized for handling large volumes of structured data.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-cogs",
          "title": "API-First Approach",
          "description": "RESTful and GraphQL API development for flexible frontend integration.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-shield-alt",
          "title": "Security Best Practices",
          "description": "Built-in authentication, authorization, and data protection.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-clock",
          "title": "High Availability",
          "description": "Design with load balancing and failover strategies.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-users-cog",
          "title": "Scalable Teams",
          "description": "Microservices and modularity for large team collaboration.",
          "variant": "filled"
        }
      ]
    },
    "developing": {
      "title": "Backend Development",
      "description": "Powering web applications with secure, scalable, and high-performance server-side solutions.",
      "hiring_title": "Our Hiring process",
      "hiring_description": "From understanding your needs to onboarding the perfect team, we ensure a seamless hiring process customized to your project.",
      "image": "/images/hire/backend.webp",
      "imageAlt": "Backend Development",
      "stepsTitle": "Your Path to Hiring Backend Developers",
      "steps": [
        {
          "title": "System Architecture Planning",
          "description": "Define the backend architecture, database schema, and APIs based on project requirements and scalability."
        },
        {
          "title": "Database Design",
          "description": "Design and optimize relational (e.g., PostgreSQL, MySQL) or NoSQL (e.g., MongoDB) databases for efficient data handling."
        },
        {
          "title": "API Development",
          "description": "Build robust RESTful or GraphQL APIs using frameworks like Express.js, NestJS, or Laravel."
        },
        {
          "title": "Authentication & Security",
          "description": "Implement secure user authentication, authorization, and data protection using industry best practices."
        },
        {
          "title": "Testing & Deployment",
          "description": "Perform backend testing, optimize performance, and deploy on platforms like AWS, Heroku, or DigitalOcean."
        }
      ],
      "ctaLabel": "Start Hiring",
      "ctaHref": "/hire/application-form"
    },
    "expertise": {
      "title": "",
      "cards": [],
      "image": ""
    },
    "technologies": {
      "title": "Technologies We Work With",
      "items": []
    },
    "exploreRoles": {
      "title": "Explore More Developer Roles",
      "links": [
        {
          "href": "nodejs-developer",
          "label": "Hire Node.js Developers"
        },
        {
          "href": "laravel-developer",
          "label": "Hire Laravel Developers"
        },
        {
          "href": "python-developer",
          "label": "Hire Python Developers"
        }
      ]
    }
  },
  {
    "slug": "devops-engineer",
    "hero": {
      "eyebrow": "HIRE DEVOPS ENGINEERS",
      "title": "Hire Dedicated DevOps Engineers for Seamless User Experiences",
      "description": "Build responsive, interactive, and high-performing web applications with our expert frontend developers. We specialize in seamless user experiences, cutting-edge frameworks, and optimized performance for fast, scalable, and visually stunning interfaces.",
      "image": "https://i.ibb.co.com/xKxpBqsk/ss.png",
      "ctaLabel": "Hire DevOps Engineers Now",
      "ctaHref": "/hire/application-form"
    },
    "whyChoose": {
      "title": "Why Choose Our DevOps Engineers?",
      "cards": [
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-sync-alt",
          "title": "Continuous Integration & Delivery",
          "description": "Accelerated release cycles with automated pipelines.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-server",
          "title": "Infrastructure as Code",
          "description": "Efficient infrastructure management with tools like Terraform.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-shield-alt",
          "title": "Security & Monitoring",
          "description": "Track performance and threats using real-time monitoring.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-dharmachakra",
          "title": "Toolchain Flexibility",
          "description": "Support for Docker, Kubernetes, Jenkins, and more.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-cloud",
          "title": "Cloud Expertise",
          "description": "Deployment and scaling across AWS, Azure, GCP.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-users-cog",
          "title": "Collaborative Culture",
          "description": "Bridges dev and ops for faster feedback loops.",
          "variant": "filled"
        }
      ]
    },
    "developing": {
      "title": "DevOps",
      "description": "Accelerating software delivery through automation, continuous integration, and scalable infrastructure.",
      "hiring_title": "Our Hiring process",
      "hiring_description": "From understanding your needs to onboarding the perfect team, we ensure a seamless hiring process customized to your project.",
      "image": "/images/hire/dev-ops.webp",
      "imageAlt": "DevOps",
      "stepsTitle": "Your Path to Hiring DevOps Engineers",
      "steps": [
        {
          "title": "Infrastructure Planning",
          "description": "Design scalable, cloud-based infrastructure using tools like AWS, Azure, or Google Cloud."
        },
        {
          "title": "CI/CD Pipeline Setup",
          "description": "Automate code integration, testing, and deployment using Jenkins, GitHub Actions, GitLab CI, etc."
        },
        {
          "title": "Containerization",
          "description": "Use Docker and Kubernetes to containerize applications for consistency across environments."
        },
        {
          "title": "Monitoring & Logging",
          "description": "Implement tools like Prometheus, Grafana, and ELK Stack to monitor application health and performance."
        },
        {
          "title": "Security & Optimization",
          "description": "Ensure infrastructure security with proper access control, vulnerability scanning, and performance tuning."
        }
      ],
      "ctaLabel": "Start Hiring",
      "ctaHref": "/hire/application-form"
    },
    "expertise": {
      "title": "Cloud Expertise",
      "cards": [
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-sync-alt",
          "title": "Continuous Integration & Delivery",
          "description": "Accelerated release cycles with automated pipelines.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-server",
          "title": "Infrastructure as Code",
          "description": "Efficient infrastructure management with tools like Terraform.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-shield-alt",
          "title": "Security & Monitoring",
          "description": "Track performance and threats using real-time monitoring.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-dharmachakra",
          "title": "Toolchain Flexibility",
          "description": "Support for Docker, Kubernetes, Jenkins, and more.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-cloud",
          "title": "Cloud Expertise",
          "description": "Deployment and scaling across AWS, Azure, GCP.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-users-cog",
          "title": "Collaborative Culture",
          "description": "Bridges dev and ops for faster feedback loops.",
          "variant": "filled"
        }
      ],
      "image": ""
    },
    "technologies": {
      "title": "Technologies We Work With",
      "items": []
    },
    "exploreRoles": {
      "title": "Explore More Developer Roles",
      "links": [
        {
          "href": "reactjs-developer",
          "label": "Hire React.js Developers"
        },
        {
          "href": "angular-developer",
          "label": "Hire Angular Developers"
        },
        {
          "href": "vuejs-developer",
          "label": "Hire Vue.js Developers"
        },
        {
          "href": "nextjs-developer",
          "label": "Hire Next.js Developers"
        }
      ]
    }
  },
  {
    "slug": "frontend-developer",
    "hero": {
      "eyebrow": "HIRE FRONTEND DEVELOPERS",
      "title": "Hire Dedicated Frontend Developers for Seamless User Experiences",
      "description": "Build responsive, interactive, and high-performing web applications with our expert frontend developers. We specialize in seamless user experiences, cutting-edge frameworks, and optimized performance for fast, scalable, and visually stunning interfaces.",
      "image": "https://i.ibb.co.com/4gsDVSgp/hire-front-end-developer-1.webp",
      "ctaLabel": "Hire Frontend Developers Now",
      "ctaHref": "/hire/application-form"
    },
    "whyChoose": {
      "title": "Why Choose Our Frontend Developers?",
      "cards": [
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-code",
          "title": "Expertise in Modern Technologies",
          "description": "Proficient in HTML, CSS, JavaScript, React, Angular, Vue.js, and more.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-cogs",
          "title": "Custom Solutions",
          "description": "Tailored frontend development to meet your business needs.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-users",
          "title": "Agile Development",
          "description": "Flexible and collaborative approach to deliver projects on time.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-database",
          "title": "Robust Backend Systems",
          "description": "Expert in building scalable, secure, and high-performance server-side applications.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-server",
          "title": "API Development",
          "description": "Building efficient and reliable APIs for seamless integrations.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-lock",
          "title": "Security Focused",
          "description": "Ensuring your backend systems are secure and compliant with best practices.",
          "variant": "filled"
        }
      ]
    },
    "developing": {
      "title": "Frontend Developer",
      "description": "Crafting responsive, user-friendly, and high-performance web interfaces using modern technologies.",
      "hiring_title": "Our Hiring process",
      "hiring_description": "From understanding your needs to onboarding the perfect team, we ensure a seamless hiring process customized to your project.",
      "image": "/images/hire/frontend.webp",
      "imageAlt": "Frontend Developer",
      "stepsTitle": "Your Path to Hiring Frontend Developers",
      "steps": [
        {
          "title": "Requirement Analysis",
          "description": "Understanding client needs, target users, and project goals to shape the frontend structure."
        },
        {
          "title": "Wireframing & Design",
          "description": "Creating wireframes and visual designs that define layout, UI components, and user flow."
        },
        {
          "title": "Component Development",
          "description": "Building reusable UI components using React, Tailwind CSS, and other modern tools."
        },
        {
          "title": "Integration & Responsiveness",
          "description": "Connecting frontend with backend APIs and ensuring seamless performance across all devices."
        },
        {
          "title": "Testing & Optimization",
          "description": "Performing UI testing, fixing bugs, and optimizing for speed, accessibility, and SEO."
        }
      ],
      "ctaLabel": "Start Hiring",
      "ctaHref": "/hire/application-form"
    },
    "expertise": {
      "title": "Expertise in Modern Technologies",
      "cards": [
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-code",
          "title": "Expertise in Modern Technologies",
          "description": "Proficient in HTML, CSS, JavaScript, React, Angular, Vue.js, and more.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-cogs",
          "title": "Custom Solutions",
          "description": "Tailored frontend development to meet your business needs.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-users",
          "title": "Agile Development",
          "description": "Flexible and collaborative approach to deliver projects on time.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-database",
          "title": "Robust Backend Systems",
          "description": "Expert in building scalable, secure, and high-performance server-side applications.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-server",
          "title": "API Development",
          "description": "Building efficient and reliable APIs for seamless integrations.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-lock",
          "title": "Security Focused",
          "description": "Ensuring your backend systems are secure and compliant with best practices.",
          "variant": "filled"
        }
      ],
      "image": ""
    },
    "technologies": {
      "title": "Technologies We Work With",
      "items": []
    },
    "exploreRoles": {
      "title": "Explore More Developer Roles",
      "links": [
        {
          "href": "reactjs-developer",
          "label": "Hire React.js Developers"
        },
        {
          "href": "angular-developer",
          "label": "Hire Angular Developers"
        },
        {
          "href": "vuejs-developer",
          "label": "Hire Vue.js Developers"
        },
        {
          "href": "nextjs-developer",
          "label": "Hire Next.js Developers"
        }
      ]
    }
  },
  {
    "slug": "mobile-app-developer",
    "hero": {
      "eyebrow": "HIRE MOBILE APP DEVELOPERS",
      "title": "Hire Dedicated Mobile App Developers for Seamless User Experiences",
      "description": "Build responsive, interactive, and high-performing web applications with our expert frontend developers. We specialize in seamless user experiences, cutting-edge frameworks, and optimized performance for fast, scalable, and visually stunning interfaces.",
      "image": "/images/hire/mobile-app.webp",
      "ctaLabel": "Hire Mobile App Developers Now",
      "ctaHref": "/hire/application-form"
    },
    "whyChoose": {
      "title": "Why Choose Our Mobile App Developers?",
      "cards": [
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-mobile-alt",
          "title": "Cross-Platform Development",
          "description": "Build apps for iOS and Android from a single codebase.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-bolt",
          "title": "High Performance",
          "description": "Optimized native-like performance with frameworks like Flutter and React Native.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-sync",
          "title": "Real-Time Sync",
          "description": "Instant updates with real-time data syncing and notifications.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-paint-brush",
          "title": "Modern UI/UX",
          "description": "Stunning mobile designs that follow native guidelines.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-cloud-upload-alt",
          "title": "Seamless Deployment",
          "description": "Fast deployment to App Store and Play Store.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-tools",
          "title": "Maintenance & Upgrades",
          "description": "Ongoing support for bug fixes, updates, and features.",
          "variant": "filled"
        }
      ]
    },
    "developing": {
      "title": "Mobile Development",
      "description": "Creating fast, user-friendly, and feature-rich mobile applications for both Android and iOS platforms.",
      "hiring_title": "Our Hiring process",
      "hiring_description": "From understanding your needs to onboarding the perfect team, we ensure a seamless hiring process customized to your project.",
      "image": "/images/hire/mobile-app.webp",
      "imageAlt": "Mobile Development",
      "stepsTitle": "Your Path to Hiring Mobile App Developers",
      "steps": [
        {
          "title": "Requirement Gathering",
          "description": "Understand user needs, business goals, and define key features for the mobile application."
        },
        {
          "title": "UI/UX Design",
          "description": "Design intuitive and engaging mobile interfaces that provide a seamless user experience across devices."
        },
        {
          "title": "App Development",
          "description": "Develop high-performance apps using React Native, Flutter, or native technologies like Swift and Kotlin."
        },
        {
          "title": "Backend & API Integration",
          "description": "Connect the app to secure, scalable backend services and APIs for real-time data and functionality."
        },
        {
          "title": "Testing & App Store Deployment",
          "description": "Test thoroughly for performance and bugs, then publish the app to Google Play and Apple App Store."
        }
      ],
      "ctaLabel": "Start Hiring",
      "ctaHref": "/hire/application-form",
      "hiring_image": "/images/hire/Hiring_Process-Graphics.svg",
      "hiring_image_alt": "Hiring process illustration"
    },
    "expertise": {
      "title": "",
      "cards": [],
      "image": ""
    },
    "technologies": {
      "title": "Technologies We Work With",
      "items": []
    },
    "exploreRoles": {
      "title": "Explore More Developer Roles",
      "links": [
        {
          "href": "flutter-developer",
          "label": "Hire Flutter Developers"
        },
        {
          "href": "android-developer",
          "label": "Hire Android Developers"
        },
        {
          "href": "react-native-developer",
          "label": "Hire React Native Developers"
        }
      ]
    }
  },
  {
    "slug": "nextjs-developer",
    "hero": {
      "eyebrow": "HIRE NEXT.JS DEVELOPERS",
      "title": "Hire Dedicated Next.js Developers for Fast and Scalable Web Applications",
      "description": "Create high-performing, SEO-optimized, and dynamic web applications using Next.js. Our Next.js developers specialize in building applications that deliver fast performance and seamless user experiences.",
      "image": "/images/hire/nextjs-banner-image.webp",
      "ctaLabel": "Hire Next.js Developers Now",
      "ctaHref": "/hire/application-form"
    },
    "whyChoose": {
      "title": "Why Choose Our Next.js Developers?",
      "cards": [
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-forward",
          "title": "Server-Side Rendering (SSR)",
          "description": "Enhances performance and SEO with SSR and static site generation.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-network-wired",
          "title": "Built-in Routing",
          "description": "Simplifies routing with file-based system.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-rocket",
          "title": "Fast Refresh & Hot Reloading",
          "description": "Blazing fast development experience out of the box.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-globe",
          "title": "Internationalization Support",
          "description": "Built-in i18n routing and localization capabilities.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-cloud",
          "title": "Vercel Optimization",
          "description": "Deploy seamlessly on Vercel with performance tuning.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-code",
          "title": "Fullstack Ready",
          "description": "API routes and backend integration support.",
          "variant": "filled"
        }
      ]
    },
    "developing": {
      "title": "Next.js Development",
      "description": "Building fast, scalable, and SEO-friendly applications using Next.js.",
      "hiring_title": "Our Hiring process",
      "hiring_description": "From understanding your needs to onboarding the perfect team, we ensure a seamless hiring process customized to your project.",
      "image": "/images/hire/nextjs.avif",
      "imageAlt": "Next.js Development",
      "stepsTitle": "Your Path to Hiring Next.js Developers",
      "steps": [
        {
          "title": "Project Planning",
          "description": "Identify project goals, user requirements, and define the structure of the Next.js application."
        },
        {
          "title": "Page Design & Component Structure",
          "description": "Design the layout and reusable components using Next.js, ensuring scalability and maintainability."
        },
        {
          "title": "Routing & Navigation",
          "description": "Set up file-based routing with Next.js, ensuring seamless navigation between pages and components."
        },
        {
          "title": "API Integration & Dynamic Data",
          "description": "Integrate backend APIs with Next.js, and implement dynamic data fetching using SSR or SSG for performance optimization."
        },
        {
          "title": "Testing & Deployment",
          "description": "Ensure application stability with testing frameworks like Jest, and deploy to platforms like Vercel or Netlify for live production."
        }
      ],
      "ctaLabel": "Start Hiring",
      "ctaHref": "/hire/application-form",
      "hiring_image": "/images/hire/Hiring_Process-Graphics.svg",
      "hiring_image_alt": "Hiring process illustration"
    },
    "expertise": {
      "title": "Our React Developers Expertise",
      "cards": [
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-code",
          "title": "Static Site Generation (SSG)",
          "description": "Generate static pages at build time for faster page loads and SEO optimization.",
          "variant": "transparent"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-cogs",
          "title": "Server-Side Rendering (SSR)",
          "description": "Pre-render pages on the server before sending them to the client for better SEO and performance.",
          "variant": "transparent"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-users",
          "title": "API Routes",
          "description": "Create backend functionality like RESTful APIs directly within the Next.js application using API routes.",
          "variant": "transparent"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-database",
          "title": "Incremental Static Regeneration",
          "description": "Regenerate static content on-demand without rebuilding the entire site, ensuring fresh content.",
          "variant": "transparent"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-server",
          "title": "Performance Optimization",
          "description": "Leverage Next.js features like Image Optimization, Automatic Static Optimization, and Lazy Loading for top-tier performance.",
          "variant": "transparent"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-lock",
          "title": "Testing & Debugging",
          "description": "Ensure code reliability and app stability through automated tests using tools like Jest, Cypress, and React Testing Library.",
          "variant": "transparent"
        }
      ],
      "image": "https://i.ibb.co/GQQQS9Rn/OBJECTS.png"
    }
  },
  {
    "slug": "qa-engineer",
    "hero": {
      "eyebrow": "HIRE QUALITY ASSURANCE",
      "title": "Hire Dedicated Quality Assurance for Seamless User Experiences",
      "description": "Build responsive, interactive, and high-performing web applications with our expert frontend developers. We specialize in seamless user experiences, cutting-edge frameworks, and optimized performance for fast, scalable, and visually stunning interfaces.",
      "image": "https://i.ibb.co.com/xKxpBqsk/ss.png",
      "ctaLabel": "Hire Quality Engineers Now",
      "ctaHref": "/hire/application-form"
    },
    "whyChoose": {
      "title": "Why Choose Our QA Engineers?",
      "cards": [
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-bug",
          "title": "Comprehensive Testing",
          "description": "Manual and automated tests to ensure defect-free delivery.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-vial",
          "title": "Automated Testing Frameworks",
          "description": "Leverages tools like Selenium, Cypress, and Jest.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-shield-alt",
          "title": "Security & Compliance",
          "description": "Ensures data safety and compliance with standards.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-hourglass-half",
          "title": "Performance Testing",
          "description": "Stress tests to identify bottlenecks and optimize speed.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-cogs",
          "title": "CI/CD Integration",
          "description": "Integrated into DevOps pipelines for smooth delivery.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-users",
          "title": "Dedicated QA Teams",
          "description": "Experienced testers for each development stack.",
          "variant": "filled"
        }
      ]
    },
    "developing": {
      "title": "Quality Assurance",
      "description": "Ensuring reliable, bug-free, and high-performing software through structured testing processes.",
      "hiring_title": "Our Hiring process",
      "hiring_description": "From understanding your needs to onboarding the perfect team, we ensure a seamless hiring process customized to your project.",
      "image": "/images/hire/quality-assurance.webp",
      "imageAlt": "Quality Assurance",
      "stepsTitle": "Your Path to Hiring QA Engineers",
      "steps": [
        {
          "title": "Requirement Analysis",
          "description": "Review project requirements and user stories to define clear testing goals and strategies."
        },
        {
          "title": "Test Planning",
          "description": "Prepare detailed test plans, select appropriate tools, and define test cases for each functionality."
        },
        {
          "title": "Test Case Execution",
          "description": "Manually or automatically execute test cases to identify bugs, glitches, or performance issues."
        },
        {
          "title": "Bug Reporting & Tracking",
          "description": "Log issues in tracking systems like Jira or Trello, and collaborate with developers for quick resolution."
        },
        {
          "title": "Final Validation",
          "description": "Perform regression, load, and user acceptance testing to ensure the product is ready for release."
        }
      ],
      "ctaLabel": "Start Hiring",
      "ctaHref": "/hire/application-form"
    },
    "expertise": {
      "title": "",
      "cards": [],
      "image": ""
    },
    "technologies": {
      "title": "Technologies We Work With",
      "items": []
    },
    "exploreRoles": {
      "title": "Explore More Developer Roles",
      "links": [
        {
          "href": "reactjs-developer",
          "label": "Hire React.js Developers"
        },
        {
          "href": "angular-developer",
          "label": "Hire Angular Developers"
        },
        {
          "href": "vuejs-developer",
          "label": "Hire Vue.js Developers"
        },
        {
          "href": "nextjs-developer",
          "label": "Hire Next.js Developers"
        }
      ]
    }
  },
  {
    "slug": "reactjs-developer",
    "hero": {
      "eyebrow": "HIRE REACT JS DEVELOPERS",
      "title": "Hire Dedicated React Developers for Scalable and Dynamic Web Applications",
      "description": "Build responsive, interactive, and high-performing web applications with our expert React developers. We specialize in creating seamless user experiences using cutting-edge React frameworks, optimized performance, and visually stunning interfaces.",
      "image": "https://i.ibb.co.com/fdDsXnxw/Benefits-of-React-JS.jpg",
      "ctaLabel": "Hire React JS Developers Now",
      "ctaHref": "/hire/application-form"
    },
    "whyChoose": {
      "title": "Why Choose Our React JS Developers?",
      "cards": [
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-react",
          "title": "Reusable Components",
          "description": "Build modular UIs with reusable logic across your app.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-bolt",
          "title": "High-Speed Rendering",
          "description": "Leverages Virtual DOM for faster UI updates and performance.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-puzzle-piece",
          "title": "Rich Ecosystem",
          "description": "Seamless integration with Redux, React Router, and more.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-mobile-alt",
          "title": "Cross-Platform Support",
          "description": "Extend to mobile with React Native for true cross-platform power.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-expand-arrows-alt",
          "title": "Scalability",
          "description": "Easy to scale for enterprise-level applications.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-users",
          "title": "Massive Community",
          "description": "Vibrant open-source community and backed by Meta.",
          "variant": "filled"
        }
      ]
    },
    "developing": {
      "title": "React JS Development",
      "description": "Building high-performance, scalable, and interactive user interfaces using React JS.",
      "hiring_title": "Our Hiring process",
      "hiring_description": "From understanding your needs to onboarding the perfect team, we ensure a seamless hiring process customized to your project.",
      "image": "/images/hire/react-js.webp",
      "imageAlt": "React JS Development",
      "stepsTitle": "Your Path to Hiring React.js Developers",
      "steps": [
        {
          "title": "Project Planning",
          "description": "Identify project goals, user needs, and define the component architecture for the React application."
        },
        {
          "title": "Component Design",
          "description": "Design modular, reusable, and maintainable UI components using JSX and styled with Tailwind or CSS-in-JS."
        },
        {
          "title": "State Management",
          "description": "Implement efficient data flow using tools like React Context API, Redux, or Zustand depending on project needs."
        },
        {
          "title": "API Integration",
          "description": "Connect the frontend to RESTful APIs or GraphQL backends to fetch, display, and manage dynamic data."
        },
        {
          "title": "Testing & Deployment",
          "description": "Ensure app stability with unit and integration tests using Jest or React Testing Library, then deploy via Vercel or Netlify."
        }
      ],
      "ctaLabel": "Start Hiring",
      "ctaHref": "/hire/application-form",
      "hiring_image": "/images/hire/Hiring_Process-Graphics.svg",
      "hiring_image_alt": "Hiring process illustration"
    },
    "expertise": {
      "title": "Our React Developers Expertise",
      "cards": [
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-code",
          "title": "Single Page Applications (SPAs)",
          "description": "Develop dynamic web apps with smooth, fast user interactions and minimal page reloads.",
          "variant": "transparent"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-cogs",
          "title": "Server-Side Rendering (Next.js)",
          "description": "Improve SEO, performance, and initial page load speed with efficient server-side rendering.",
          "variant": "transparent"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-users",
          "title": "State Management (Redux, Context API)",
          "description": "Manage application state efficiently, ensuring data consistency and seamless user experience.",
          "variant": "transparent"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-database",
          "title": "API Integration & Third-Party Libraries",
          "description": "Seamlessly connect with RESTful APIs, GraphQL, and third-party services for enhanced functionality.",
          "variant": "transparent"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-server",
          "title": "Performance Optimization",
          "description": "Optimize rendering, minimize re-renders, and enhance load times for a fast, responsive UI.",
          "variant": "transparent"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-lock",
          "title": "Testing & Debugging",
          "description": "Ensure app stability with unit, integration, and end-to-end testing using Jest, React Testing Library, and Cypress.",
          "variant": "transparent"
        }
      ],
      "image": "https://i.ibb.co/GQQQS9Rn/OBJECTS.png"
    }
  },
  {
    "slug": "vuejs-developer",
    "hero": {
      "eyebrow": "HIRE VUE.JS DEVELOPERS",
      "title": "Hire Dedicated Vue.js Developers for High-Performance Web Applications",
      "description": "Develop seamless and responsive user interfaces with Vue.js. Our expert Vue.js developers specialize in creating interactive web applications that are both highly performant and easy to maintain.",
      "image": "/images/hire/vuejs-banner-image.webp",
      "ctaLabel": "Hire Vue.js Developers Now",
      "ctaHref": "/hire/application-form"
    },
    "whyChoose": {
      "title": "Why Choose Our Vue.js Developers?",
      "cards": [
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-leaf",
          "title": "Lightweight & Fast",
          "description": "A minimal core for lightning-fast performance.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-code-branch",
          "title": "Simple Integration",
          "description": "Easily integrate with existing projects or libraries.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-cogs",
          "title": "Reactive Data Binding",
          "description": "Built-in reactivity system for seamless UI updates.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-puzzle-piece",
          "title": "Component-Based Architecture",
          "description": "Develop modular and reusable UI components.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-wrench",
          "title": "Developer Friendly",
          "description": "Easy learning curve with extensive documentation.",
          "variant": "filled"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-users",
          "title": "Growing Ecosystem",
          "description": "Supported by an enthusiastic open-source community.",
          "variant": "filled"
        }
      ]
    },
    "developing": {
      "title": "Vue.js Development",
      "description": "Building fast, dynamic, and scalable applications using Vue.js.",
      "hiring_title": "Our Hiring process",
      "hiring_description": "From understanding your needs to onboarding the perfect team, we ensure a seamless hiring process customized to your project.",
      "image": "/images/hire/vuejs.webp",
      "imageAlt": "Vue.js Development",
      "stepsTitle": "Your Path to Hiring Vue.js Developers",
      "steps": [
        {
          "title": "Project Planning",
          "description": "Identify your project goals, user needs, and define the structure of your Vue.js application."
        },
        {
          "title": "Component Design",
          "description": "Design reusable and maintainable UI components with Vue.js’ flexible and modular component architecture."
        },
        {
          "title": "State Management",
          "description": "Use Vuex to manage application state and handle complex data flow in large-scale Vue.js projects."
        },
        {
          "title": "API Integration",
          "description": "Integrate your Vue.js frontend with RESTful APIs or GraphQL for fetching and managing dynamic data."
        },
        {
          "title": "Testing & Deployment",
          "description": "Ensure app stability with unit testing using Vue Test Utils and deploy using platforms like Netlify or Heroku."
        }
      ],
      "ctaLabel": "Start Hiring",
      "ctaHref": "/hire/application-form",
      "hiring_image": "/images/hire/Hiring_Process-Graphics.svg",
      "hiring_image_alt": "Hiring process illustration"
    },
    "expertise": {
      "title": "Our React Developers Expertise",
      "cards": [
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-code",
          "title": "Single Page Applications (SPAs)",
          "description": "Develop dynamic, fast-loading web apps with minimal page reloads using Vue.js.",
          "variant": "transparent"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-cogs",
          "title": "State Management (Vuex)",
          "description": "Use Vuex to manage complex state and handle data flow in large Vue.js applications.",
          "variant": "transparent"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-users",
          "title": "Component-Based Architecture",
          "description": "Break down the user interface into small, reusable components for faster development and easier maintenance.",
          "variant": "transparent"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-database",
          "title": "API Integration",
          "description": "Easily connect the frontend to RESTful APIs or GraphQL backends to fetch, display, and manage dynamic data.",
          "variant": "transparent"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-server",
          "title": "Performance Optimization",
          "description": "Optimize rendering, minimize re-renders, and enhance load times for a fast, responsive UI.",
          "variant": "transparent"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-lock",
          "title": "Testing & Debugging",
          "description": "Use tools like Vue Test Utils and Jest to ensure application stability and reliability.",
          "variant": "transparent"
        }
      ],
      "image": "https://i.ibb.co/GQQQS9Rn/OBJECTS.png"
    }
  },
  {
    "slug": "nodejs-developer",
    "hero": {
      "eyebrow": "HIRE NODE.JS DEVELOPERS",
      "title": "Hire Dedicated Node.js Developers for Scalable Backend Systems",
      "description": "Build fast, event-driven APIs and microservices with experienced Node.js engineers. We deliver secure integrations, real-time features, and cloud-ready backends tailored to your product.",
      "image": "https://i.ibb.co.com/zTXjbc62/Frame-1000005999.png",
      "ctaLabel": "Hire Node.js Developers Now",
      "ctaHref": "/hire/application-form"
    },
    "whyChoose": {
      "title": "Why Choose Our Node.js Developers?",
      "cards": [
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-server",
          "title": "High-Performance APIs",
          "description": "Express, NestJS, and Fastify for low-latency REST and GraphQL services.",
          "variant": "transparent"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-bolt",
          "title": "Event-Driven Architecture",
          "description": "Real-time apps with WebSockets, queues, and async I/O at scale.",
          "variant": "transparent"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-database",
          "title": "Data Layer Expertise",
          "description": "PostgreSQL, MongoDB, Redis, and ORMs matched to your stack.",
          "variant": "transparent"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-shield-alt",
          "title": "Security First",
          "description": "Auth, rate limiting, and hardened deployments following best practices.",
          "variant": "transparent"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-cloud",
          "title": "Cloud Native",
          "description": "Docker, AWS, and CI/CD pipelines for reliable releases.",
          "variant": "transparent"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-users-cog",
          "title": "Dedicated Teams",
          "description": "Engineers who embed with your squad and ship on your roadmap.",
          "variant": "transparent"
        }
      ]
    },
    "developing": {
      "title": "Node.js Backend Development",
      "description": "Server-side applications powered by JavaScript/TypeScript on the Node.js runtime.",
      "hiring_title": "Our Hiring process",
      "hiring_description": "From understanding your needs to onboarding the perfect team, we ensure a seamless hiring process customized to your project.",
      "image": "/images/hire/backend.webp",
      "imageAlt": "Node.js Development",
      "stepsTitle": "Your Path to Hiring Node.js Developers",
      "steps": [
        {
          "title": "Architecture & Scope",
          "description": "Define services, APIs, and data models aligned with product goals and scale targets."
        },
        {
          "title": "API & Service Build",
          "description": "Implement routes, middleware, validation, and business logic with tested modules."
        },
        {
          "title": "Integrations",
          "description": "Connect payment, auth, messaging, and third-party systems with stable contracts."
        },
        {
          "title": "Performance & Security",
          "description": "Optimize queries, caching, and harden endpoints before production traffic."
        },
        {
          "title": "Deploy & Monitor",
          "description": "Ship to cloud environments with logging, alerts, and ongoing iteration."
        }
      ],
      "ctaLabel": "Start Hiring",
      "ctaHref": "/hire/application-form",
      "hiring_image": "/images/hire/Hiring_Process-Graphics.svg",
      "hiring_image_alt": "Hiring process illustration"
    },
    "expertise": {
      "title": "",
      "cards": [],
      "image": ""
    },
    "technologies": {
      "title": "Technologies We Work With",
      "items": []
    },
    "exploreRoles": {
      "title": "Explore More Developer Roles",
      "links": [
        {
          "href": "laravel-developer",
          "label": "Hire Laravel Developers"
        },
        {
          "href": "python-developer",
          "label": "Hire Python Developers"
        }
      ]
    }
  },
  {
    "slug": "laravel-developer",
    "hero": {
      "eyebrow": "HIRE LARAVEL DEVELOPERS",
      "title": "Hire Dedicated Laravel Developers for Robust PHP Applications",
      "description": "Ship maintainable web apps and APIs with Laravel specialists. From admin portals to multi-tenant SaaS, we bring clean architecture, testing, and rapid delivery on PHP.",
      "image": "https://i.ibb.co.com/zTXjbc62/Frame-1000005999.png",
      "ctaLabel": "Hire Laravel Developers Now",
      "ctaHref": "/hire/application-form"
    },
    "whyChoose": {
      "title": "Why Choose Our Laravel Developers?",
      "cards": [
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-layer-group",
          "title": "MVC & Clean Code",
          "description": "Eloquent models, controllers, and services structured for long-term maintenance.",
          "variant": "transparent"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-cogs",
          "title": "Rich Ecosystem",
          "description": "Queues, Horizon, Sanctum, and packages chosen for your use case.",
          "variant": "transparent"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-database",
          "title": "Database Design",
          "description": "Migrations, indexing, and reporting on MySQL or PostgreSQL.",
          "variant": "transparent"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-lock",
          "title": "Secure by Default",
          "description": "Policies, guards, and validation protecting user and business data.",
          "variant": "transparent"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-vial",
          "title": "Tested Releases",
          "description": "PHPUnit and Pest coverage for critical paths and regressions.",
          "variant": "transparent"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-users",
          "title": "Product Partnership",
          "description": "Collaborative delivery with product and design from sprint to launch.",
          "variant": "transparent"
        }
      ]
    },
    "developing": {
      "title": "Laravel Development",
      "description": "Full-stack and API-first applications built on the Laravel PHP framework.",
      "hiring_title": "Our Hiring process",
      "hiring_description": "From understanding your needs to onboarding the perfect team, we ensure a seamless hiring process customized to your project.",
      "image": "/images/hire/backend.webp",
      "imageAlt": "Laravel Development",
      "stepsTitle": "Your Path to Hiring Laravel Developers",
      "steps": [
        {
          "title": "Requirements & Modeling",
          "description": "Map domains, roles, and workflows into Laravel-friendly module boundaries."
        },
        {
          "title": "Feature Implementation",
          "description": "Build controllers, jobs, events, and Blade or API resources with conventions."
        },
        {
          "title": "Auth & Permissions",
          "description": "Implement roles, OAuth, and API tokens suited to your clients."
        },
        {
          "title": "Quality Assurance",
          "description": "Automated tests, staging checks, and performance tuning before go-live."
        },
        {
          "title": "Hosting & Handoff",
          "description": "Deploy to Forge, VPS, or cloud with documentation for your team."
        }
      ],
      "ctaLabel": "Start Hiring Now",
      "ctaHref": "/hire/application-form",
      "hiring_image": "/images/hire/Hiring_Process-Graphics.svg",
      "hiring_image_alt": "Hiring process illustration"
    },
    "expertise": {
      "title": "",
      "cards": [],
      "image": ""
    },
    "technologies": {
      "title": "Technologies We Work With",
      "items": []
    },
    "exploreRoles": {
      "title": "Explore More Developer Roles",
      "links": [
        {
          "href": "nodejs-developer",
          "label": "Hire Node.js Developers"
        },
        {
          "href": "python-developer",
          "label": "Hire Python Developers"
        }
      ]
    }
  },
  {
    "slug": "python-developer",
    "hero": {
      "eyebrow": "HIRE PYTHON DEVELOPERS",
      "title": "Hire Dedicated Python Developers for APIs, Data, and Automation",
      "description": "Scale backends and data pipelines with Python experts. Django, FastAPI, and scripting for integrations — delivered by engineers who focus on clarity and reliability.",
      "image": "https://i.ibb.co.com/zTXjbc62/Frame-1000005999.png",
      "ctaLabel": "Hire Python Developers Now",
      "ctaHref": "/hire/application-form"
    },
    "whyChoose": {
      "title": "Why Choose Our Python Developers?",
      "cards": [
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-code",
          "title": "Modern Frameworks",
          "description": "Django, FastAPI, and Flask chosen for speed, typing, and team fit.",
          "variant": "transparent"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-chart-line",
          "title": "Data & Automation",
          "description": "ETL, reporting, and workflow automation with pandas and task runners.",
          "variant": "transparent"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-plug",
          "title": "API Integrations",
          "description": "Reliable connectors to CRMs, payment, and internal systems.",
          "variant": "transparent"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-shield-alt",
          "title": "Production Ready",
          "description": "Observability, error handling, and secure configuration management.",
          "variant": "transparent"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-microchip",
          "title": "ML-Ready Backends",
          "description": "Serve models and batch jobs when AI features belong in your stack.",
          "variant": "transparent"
        },
        {
          "icon": "transition-transform transform group-hover:scale-150 duration-500 fa-xl lg:text-3xl text-[#5856d6] fa-solid fa-users-cog",
          "title": "Flexible Engagement",
          "description": "Augment your team or own a workstream end to end.",
          "variant": "transparent"
        }
      ]
    },
    "developing": {
      "title": "Python Development",
      "description": "Backend services, internal tools, and data workflows using Python’s ecosystem.",
      "hiring_title": "Our Hiring process",
      "hiring_description": "From understanding your needs to onboarding the perfect team, we ensure a seamless hiring process customized to your project.",
      "image": "/images/hire/backend.webp",
      "imageAlt": "Python Development",
      "stepsTitle": "Your Path to Hiring Python Developers",
      "steps": [
        {
          "title": "Discovery",
          "description": "Clarify domains, SLAs, and the right framework for APIs vs. batch work."
        },
        {
          "title": "Implementation",
          "description": "Develop modules, serializers, and jobs with typing and linting standards."
        },
        {
          "title": "Data Layer",
          "description": "Design schemas, migrations, and queries optimized for your workloads."
        },
        {
          "title": "Testing & Hardening",
          "description": "pytest coverage, load checks, and security review before release."
        },
        {
          "title": "Deploy & Support",
          "description": "Containerized or PaaS deploys with monitoring and iterative improvements."
        }
      ],
      "ctaLabel": "Start Hiring",
      "ctaHref": "/hire/application-form",
      "hiring_image": "/images/hire/Hiring_Process-Graphics.svg",
      "hiring_image_alt": "Hiring process illustration"
    },
    "expertise": {
      "title": "",
      "cards": [],
      "image": ""
    },
    "technologies": {
      "title": "Technologies We Work With",
      "items": []
    },
    "exploreRoles": {
      "title": "Explore More Developer Roles",
      "links": [
        {
          "href": "nodejs-developer",
          "label": "Hire Node.js Developers"
        },
        {
          "href": "laravel-developer",
          "label": "Hire Laravel Developers"
        }
      ]
    }
  }
];

export const HIRE_ROLE_SLUGS = [
  "ai-ml-developer",
  "angular-developer",
  "backend-developer",
  "devops-engineer",
  "frontend-developer",
  "laravel-developer",
  "mobile-app-developer",
  "nextjs-developer",
  "nodejs-developer",
  "python-developer",
  "qa-engineer",
  "reactjs-developer",
  "vuejs-developer",
];

function findHireRoleRecord(slug: string): HireRole | undefined {
  return HIRE_ROLES.find((r) => r.slug === slug);
}

/** Category and specialty pages with dedicated copy in `HIRE_ROLES`. */
export function getHireRole(slug: string): HireRole | null {
  return findHireRoleRecord(slug) ?? null;
}

/**
 * Specialty route resolver: dedicated copy when present, otherwise parent category
 * content until `/hire-sp` copy is added (keeps static export paths working).
 */
export function getHireSpecialtyRole(slug: string): HireRole | null {
  const direct = findHireRoleRecord(slug);
  if (direct) return withSpecialtyExpertise(direct, slug);
  if (!isHireSpecialty(slug)) return null;
  const parentSlug = getSpecialtyParentCategory(slug);
  if (!parentSlug) return null;
  const parent = findHireRoleRecord(parentSlug);
  if (!parent) return null;
  return withSpecialtyExpertise(parent, slug);
}
