export type Project = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  year: string;
  category: string;
  role: string;
  summary: string;
  intro: string;
  image: string;
  imageAlt: string;
  accent: string;
  stack: string[];
  services: string[];
  liveUrl?: string;
  repoUrl?: string;
  status?: string;
  facts: { label: string; value: string }[];
  sections: { eyebrow: string; title: string; body: string[] }[];
};

export const site = {
  name: "Worod Hazem",
  title: "Creative Frontend Developer & Software Engineer",
  shortTitle: "Frontend Developer · Software Engineer · AI Systems",
  location: "Abu Dhabi, United Arab Emirates",
  email: "wforcoding@gmail.com",
  phone: "+971 50 175 7360",
  github: "https://github.com/WorodHazim",
  linkedin: "https://www.linkedin.com/in/worod-hazem-05a0331b5",
  resume: "/worod-hazem-resume.pdf",
  availability: "Available for selected freelance work and software opportunities",
};

export const projects: Project[] = [
  {
    slug: "mamzar-real-estate-platform",
    number: "01",
    title: "Al Mamzar Real Estate Platform",
    shortTitle: "Mamzar Platform",
    year: "2024—25",
    category: "Full-stack product system",
    role: "Design · Frontend · Backend · API · Hosting",
    summary:
      "A connected real-estate website, administration dashboard and API layer built to manage properties, users, inquiries and content from one operational system.",
    intro:
      "The work moved beyond a public website. It became a complete operating layer connecting the customer-facing experience, internal dashboard, databases, external services and production infrastructure.",
    image: "/projects/mamzar-platform.png",
    imageAlt: "Abstract interface composition representing the Al Mamzar real estate platform",
    accent: "",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "REST APIs",
      "Databases",
      "Docker",
      "Vercel",
    ],
    services: [
      "Product architecture",
      "Responsive frontend",
      "Admin workflows",
      "API integration",
      "Hosting and operations",
    ],
    status: "Company platform",
    facts: [
      { label: "System", value: "Website + dashboard + API" },
      { label: "Scope", value: "End-to-end delivery" },
      { label: "Operations", value: "DNS, SSL, backups, support" },
      { label: "Region", value: "United Arab Emirates" },
    ],
    sections: [
      {
        eyebrow: "01 / Context",
        title: "One platform, several operational realities.",
        body: [
          "The public website needed to present properties clearly, while the internal team needed structured tools for managing listings, users, inquiries, communities and off-plan content.",
          "Instead of treating each surface as an isolated deliverable, I structured the work as a connected system with shared data, repeatable workflows and a production setup that could be maintained after launch.",
        ],
      },
      {
        eyebrow: "02 / Product system",
        title: "The interface was only one layer of the product.",
        body: [
          "I designed and developed responsive customer journeys for discovery, filtering and property detail views, then built dashboard workflows for content and business operations.",
          "REST APIs connected the website, dashboard, backend services and databases. Internal and external integrations were used to synchronize data and reduce repetitive manual work.",
        ],
      },
      {
        eyebrow: "03 / Production",
        title: "Deployment was designed as part of the experience.",
        body: [
          "The work included domains, DNS, SSL, hosting, backups, troubleshooting, updates and ongoing maintenance. This ensured the product remained usable beyond its initial release.",
          "I also delivered the Mamzar IT Consultation corporate website and supported additional client websites within the same professional context.",
        ],
      },
      {
        eyebrow: "04 / Outcome",
        title: "A clearer digital operation from public entry to internal control.",
        body: [
          "The final system brought the public property experience, operational dashboard and supporting infrastructure into one coherent product ecosystem.",
        ],
      },
    ],
  },
  {
    slug: "24-degree-interiors",
    number: "02",
    title: "24 Degree Interiors",
    shortTitle: "24 Degree",
    year: "2024",
    category: "Editorial studio website",
    role: "Creative direction · UI · Frontend · Deployment",
    summary:
      "A premium editorial website for an interior-design studio, built around spatial rhythm, precise typography, image-led storytelling and restrained interaction.",
    intro:
      "The website translates the studio’s work into a digital publication: architectural, quiet and image-led, while remaining responsive and easy to navigate across devices.",
    image: "/projects/24-degree.png",
    imageAlt: "Editorial visual representing the 24 Degree Interiors website",
    accent: "#090909",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Git", "Vercel"],
    services: [
      "Creative direction",
      "Editorial UI system",
      "Responsive development",
      "Interaction design",
      "Deployment",
    ],
    liveUrl: "https://24-degree-interior-design.vercel.app/",
    repoUrl: "https://github.com/WorodHazim/24DegreeInteriorDesign",
    status: "Live",
    facts: [
      { label: "Format", value: "Editorial portfolio" },
      { label: "Focus", value: "Spatial storytelling" },
      { label: "Delivery", value: "Design to deployment" },
      { label: "Platform", value: "Vercel" },
    ],
    sections: [
      {
        eyebrow: "01 / Direction",
        title: "A website that reads like a design publication.",
        body: [
          "The studio needed more than a gallery. The visual system had to communicate material sensitivity, restraint and a strong point of view without competing with the interiors.",
          "I established an editorial hierarchy using large typography, structured grids, generous image fields and precise supporting copy.",
        ],
      },
      {
        eyebrow: "02 / Interface",
        title: "Structure creates the feeling of calm.",
        body: [
          "Selected residences, services, studio identity, materials, process, journal and inquiry content were arranged as a coherent narrative rather than disconnected pages.",
          "Reusable components and responsive layouts preserved the same visual confidence on desktop, tablet and mobile.",
        ],
      },
      {
        eyebrow: "03 / Motion",
        title: "Movement supports the architecture.",
        body: [
          "Smooth reveals and controlled transitions guide attention between type, images and project information. Motion remains subtle so the work retains visual authority.",
        ],
      },
      {
        eyebrow: "04 / Production",
        title: "A maintainable site with a polished public finish.",
        body: [
          "I handled Git-based updates, production configuration, Vercel deployment and ongoing website maintenance.",
        ],
      },
    ],
  },
  {
    slug: "sakan-ai",
    number: "03",
    title: "SAKAN AI",
    shortTitle: "SAKAN AI",
    year: "2026",
    category: "AI public-service platform",
    role: "Product logic · Interface · AI workflow",
    summary:
      "An explainable housing-arrears decision platform that organizes documents, eligibility signals and officer review into a transparent decision workflow.",
    intro:
      "Developed during the Agentera × MOEI Hackathon, SAKAN AI explored how structured AI assistance could improve readiness checks and officer decision support without hiding the reasoning behind recommendations.",
    image: "/projects/sakan-ai.png",
    imageAlt: "Decision workflow visual representing SAKAN AI",
    accent: "",
    stack: ["Next.js", "TypeScript", "AI Agents", "Supabase", "REST APIs"],
    services: [
      "Product concept",
      "Eligibility logic",
      "AI workflow",
      "Decision interface",
      "Prototype delivery",
    ],
    status: "Hackathon prototype",
    facts: [
      { label: "Program", value: "Agentera × MOEI" },
      { label: "Domain", value: "Housing support" },
      { label: "Approach", value: "Explainable assistance" },
      { label: "Users", value: "Applicants + officers" },
    ],
    sections: [
      {
        eyebrow: "01 / Problem",
        title: "Complex eligibility should not become an opaque experience.",
        body: [
          "Applicants may face uncertainty around readiness, missing documents and conflicting information. Officers need a clear summary of the same signals without losing control of the final decision.",
        ],
      },
      {
        eyebrow: "02 / Logic",
        title: "The system turns scattered inputs into a reviewable path.",
        body: [
          "The prototype included readiness scoring, document validation, salary-mismatch handling, active-request detection, smart routing and structured key decision factors.",
          "Recommendations were designed to remain explainable so users could understand what was missing and officers could review why a route was suggested.",
        ],
      },
      {
        eyebrow: "03 / Interface",
        title: "Different users, one coherent decision language.",
        body: [
          "Applicant-facing states focused on clarity and next actions. Officer views surfaced risk, evidence and recommendation summaries in a more operational format.",
        ],
      },
      {
        eyebrow: "04 / Learning",
        title: "AI becomes more useful when its boundaries are visible.",
        body: [
          "The project reinforced a core product principle: decision-support systems should organize evidence and reasoning, not pretend to replace accountable human judgment.",
        ],
      },
    ],
  },
  {
    slug: "estateflow",
    number: "04",
    title: "EstateFlow",
    shortTitle: "EstateFlow",
    year: "2026",
    category: "Real-estate product prototype",
    role: "Product design · Frontend · Dashboard",
    summary:
      "A responsive property platform and management dashboard that turns listings, inquiries and content operations into one clear product system.",
    intro:
      "EstateFlow explores a more editorial and systematic real-estate experience, connecting public property discovery with the internal work required to keep listings and inquiries current.",
    image: "/projects/estateflow.png",
    imageAlt: "Editorial real-estate interface visual representing EstateFlow",
    accent: "",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "API Integration"],
    services: [
      "Product design",
      "Frontend architecture",
      "Search and filters",
      "Admin dashboard",
      "Database integration",
    ],
    status: "Independent project",
    facts: [
      { label: "Surfaces", value: "Website + dashboard" },
      { label: "Data", value: "Listings + inquiries" },
      { label: "Design", value: "Editorial real estate" },
      { label: "Backend", value: "Supabase" },
    ],
    sections: [
      {
        eyebrow: "01 / Product idea",
        title: "Property discovery and content operations belong together.",
        body: [
          "The project combines listings, search, filters, property pages, community content and inquiry workflows with an administration interface for managing the same system.",
        ],
      },
      {
        eyebrow: "02 / Experience",
        title: "Editorial clarity replaces visual noise.",
        body: [
          "The public interface uses strong image hierarchy, restrained metadata and clear search states. The dashboard shifts toward dense operational information without losing consistency.",
        ],
      },
      {
        eyebrow: "03 / Architecture",
        title: "Reusable structures keep the product coherent.",
        body: [
          "Frontend workflows connect to backend and database logic for listing management, inquiry tracking and content updates. Shared data models help reduce duplication between public and internal surfaces.",
        ],
      },
      {
        eyebrow: "04 / Value",
        title: "A stronger demonstration of product thinking beyond a single page.",
        body: [
          "EstateFlow demonstrates how visual design, responsive frontend work and business operations can be shaped as one product rather than separate deliverables.",
        ],
      },
    ],
  },
  {
    slug: "diagora",
    number: "05",
    title: "Diagora",
    shortTitle: "Diagora",
    year: "2026",
    category: "Multi-agent decision system",
    role: "AI orchestration · Product logic · Interface",
    summary:
      "A multi-agent decision-support system where specialized agents collaborate, challenge assumptions and produce structured, explainable analysis.",
    intro:
      "Diagora treats AI reasoning as a visible system. Instead of returning one unstructured answer, it coordinates specialized perspectives and turns them into a reviewable decision record.",
    image: "/projects/diagora.png",
    imageAlt: "Multi-agent network visual representing Diagora",
    accent: "",
    stack: ["Python", "Next.js", "APIs", "AI Agents"],
    services: [
      "System concept",
      "Agent orchestration",
      "Structured reasoning",
      "Risk highlighting",
      "Interface design",
    ],
    status: "AI systems project",
    facts: [
      { label: "Model", value: "Specialized agents" },
      { label: "Output", value: "Structured analysis" },
      { label: "Focus", value: "Explainable reasoning" },
      { label: "Format", value: "Decision workspace" },
    ],
    sections: [
      {
        eyebrow: "01 / Principle",
        title: "A useful answer should preserve its reasoning structure.",
        body: [
          "Diagora was designed around specialized agents that examine a problem from different perspectives instead of collapsing every concern into one response.",
        ],
      },
      {
        eyebrow: "02 / Orchestration",
        title: "Collaboration becomes part of the product architecture.",
        body: [
          "The system coordinates analysis, identifies disagreement, highlights risk and organizes outputs into a more legible final recommendation.",
          "The orchestration layer creates a traceable flow between agent roles, intermediate reasoning and the final result.",
        ],
      },
      {
        eyebrow: "03 / Interface",
        title: "Complexity is translated into a readable decision workspace.",
        body: [
          "The interface separates evidence, agent perspectives, risk signals and conclusions so users can move through the reasoning rather than receiving a single block of generated text.",
        ],
      },
      {
        eyebrow: "04 / Direction",
        title: "The project connects software architecture with AI interaction design.",
        body: [
          "Diagora reflects my interest in systems where interface design, orchestration logic and explainability have to work together.",
        ],
      },
    ],
  },
  {
    slug: "commerce-growth-systems",
    number: "06",
    title: "Commerce Growth Systems",
    shortTitle: "Commerce Systems",
    year: "2024—Now",
    category: "WordPress · Shopify · SEO",
    role: "SEO · Store optimization · Maintenance",
    summary:
      "Ongoing website, content and discoverability work for Kown Art and Emit Performance across WordPress and Shopify environments.",
    intro:
      "This client work focuses on the less visible systems behind commercial websites: content structure, product discoverability, metadata, platform improvements and reliable maintenance.",
    image: "/projects/commerce-systems.png",
    imageAlt: "Commerce and search interface composition representing Kown Art and Emit Performance",
    accent: "#090909",
    stack: ["WordPress", "Shopify", "SEO", "HTML", "CSS", "Content Optimization"],
    services: [
      "On-page SEO",
      "Content structure",
      "Product optimization",
      "Website maintenance",
      "Client support",
    ],
    status: "Ongoing client work",
    facts: [
      { label: "Clients", value: "Kown Art + Emit Performance" },
      { label: "Platforms", value: "WordPress + Shopify" },
      { label: "Focus", value: "Search + commerce" },
      { label: "Model", value: "Ongoing support" },
    ],
    sections: [
      {
        eyebrow: "01 / Work",
        title: "Commercial performance depends on structure as much as appearance.",
        body: [
          "For Kown Art, I supported on-page SEO across product and category content, metadata, information structure and discoverability within a WordPress marketplace.",
          "For Emit Performance, I supported SEO and store optimization for a Shopify automotive performance-parts business.",
        ],
      },
      {
        eyebrow: "02 / Approach",
        title: "Small technical and content decisions compound over time.",
        body: [
          "The work combines platform awareness, content editing, page structure, technical SEO fundamentals and practical maintenance rather than treating optimization as a one-time checklist.",
        ],
      },
      {
        eyebrow: "03 / Operations",
        title: "Support continues after a page goes live.",
        body: [
          "Ongoing updates, troubleshooting and maintenance keep the stores useful as content, products and business needs change.",
        ],
      },
      {
        eyebrow: "04 / Scope",
        title: "A practical view of digital work across different platforms.",
        body: [
          "These projects broadened my experience beyond custom React products into established commerce ecosystems and long-term client support.",
        ],
      },
    ],
  },
];

export const experience = [
  {
    period: "2024—Now",
    title: "Freelance Web Developer & SEO Specialist",
    place: "Remote",
    text: "Client websites, e-commerce improvements, SEO, hosting, maintenance and ongoing digital support across WordPress, Shopify and custom web projects.",
  },
  {
    period: "2024—25",
    title: "Full Stack Developer",
    place: "Al Mamzar Real Estate & Mamzar IT Consultation · UAE",
    text: "Designed and built public websites, an administration dashboard, REST API integrations and the production infrastructure supporting domains, DNS, SSL, backups and maintenance.",
  },
  {
    period: "2024",
    title: "Software Engineer",
    place: "24 Degree Interiors · UAE",
    text: "Created an editorial studio website from visual direction through responsive frontend development, deployment and ongoing maintenance.",
  },
  {
    period: "2020—22",
    title: "Full Stack Developer",
    place: "Khales Engineering Consultancy · UAE",
    text: "Developed an internal CRM and HR system with Python, Django, REST APIs and PostgreSQL to support employee records and operational workflows.",
  },
];

export const activities = [
  {
    period: "APR 2026",
    title: "1st Place · Building AI Application Challenge",
    place: "Decoding Data Science",
    text: "Awarded first place for an AI-powered application focused on a real-world challenge.",
  },
  {
    period: "2026",
    title: "Volunteer AI Agent Trainer",
    place: "AgenticVersa AI Program",
    text: "Supported participants during hands-on AI-agent activities, explained workflows and helped troubleshoot implementation challenges.",
  },
  {
    period: "2024—Now",
    title: "Mentoring & Workshop Contributions",
    place: "42 Abu Dhabi",
    text: "Contributed to learning programs through Python mentoring, microcontroller workshop preparation, school AI-hackathon support and youth learning initiatives.",
  },
  {
    period: "2026",
    title: "AI Hackathons & Healthcare Challenges",
    place: "Agentera × MOEI · Agents Assemble · Cleveland Clinic",
    text: "Worked on explainable public-service decisions, multi-agent healthcare concepts and AI-driven triage or patient-workflow ideas.",
  },
  {
    period: "2026",
    title: "Cybersecurity Workshop",
    place: "Khalifa University × UAE Cybersecurity Council",
    text: "Participated in a practical workshop focused on cybersecurity concepts and current digital-security challenges.",
  },
];

export const capabilityGroups = [
  {
    index: "01",
    title: "Interface engineering",
    items: ["Next.js", "React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Responsive UI"],
  },
  {
    index: "02",
    title: "Product systems",
    items: ["Node.js", "Django", "REST APIs", "Authentication", "Admin dashboards", "API integration", "Automation"],
  },
  {
    index: "03",
    title: "Data and AI",
    items: ["Python", "Pandas", "NumPy", "Data preprocessing", "Machine-learning foundations", "AI agents"],
  },
  {
    index: "04",
    title: "Infrastructure",
    items: ["Docker", "Git", "GitHub", "Linux CLI", "Vercel", "DNS", "SSL", "Website migration"],
  },
  {
    index: "05",
    title: "Platforms and growth",
    items: ["WordPress", "Shopify", "PostgreSQL", "MySQL", "Supabase", "SEO", "Content optimization"],
  },
];

export const education = [
  {
    period: "2024—Now",
    title: "Software Engineering and AI Program",
    place: "42 Abu Dhabi",
  },
  {
    period: "2015—19",
    title: "Bachelor of Software Engineering",
    place: "University degree",
  },
];
