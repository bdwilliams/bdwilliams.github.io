export const siteData = {
  person: {
    name: "Brian Williams",
    shortTitle:
      "Principal Engineer • Distributed Systems • Platform Architecture • Large-Scale Systems",
    jobTitle: "Principal Engineer",
    location: "Sallisaw, Oklahoma, US",
    locality: "Sallisaw",
    region: "Oklahoma",
    country: "US",
    phone: "(918) 208-3133",
    email: "brian@mxapps.com",
    website: "https://www.iambrianwilliams.com/",
    linkedin: "https://www.linkedin.com/in/briandeewilliams/en",
    github: "https://www.github.com/bdwilliams",
    avatar: "https://www.iambrianwilliams.com/images/avatar.jpg",
    avatarPath: "images/avatar.jpg",
  },
  seo: {
    home: {
      title:
        "Brian Williams | Principal Engineer | Distributed Systems & Platform Architecture",
      description:
        "Brian Williams is a principal engineer and hands-on technical leader specializing in distributed systems, platform architecture, large-scale data pipelines, legacy modernization, and cloud-native application infrastructure.",
      keywords:
        "Principal Engineer, Staff Engineer, Distributed Systems, Platform Architecture, System Design, Data Pipelines, BigQuery, Cloud Functions, Backend Systems, Technical Leadership, Legacy Modernization",
      canonical: "https://www.iambrianwilliams.com/",
      ogTitle: "Brian Williams | Principal Engineer",
      ogDescription:
        "Principal engineer and hands-on technical leader specializing in distributed systems, platform architecture, large-scale data pipelines, and legacy modernization.",
      twitterDescription:
        "Distributed systems, platform architecture, high-scale data pipelines, and technical leadership.",
    },
    resume: {
      title: "Brian Williams - Resume",
      description:
        "Brian Williams - Principal Engineer, Distributed Systems, Platform Architecture, Technical Leadership",
      canonical: "https://www.iambrianwilliams.com/resume.html",
      ogTitle: "Brian Williams Resume",
      ogDescription:
        "Resume for Brian Williams, principal engineer focused on distributed systems, platform architecture, and technical leadership.",
    },
  },
  about: {
    home: [
      "Hands-on principal engineer with a track record building and modernizing systems that operate at meaningful scale. Contributed to two successful acquisitions: architecting the platform modernization central to TPV.com's acquisition by AnswerNet, and establishing enterprise credibility across Fortune 500 and government clients at Enstratius ahead of its acquisition by Dell. Today I build and own systems at Locally.com processing 250M+ UPCs and 7.5B+ catalog rows daily.",
      "I work at the intersection of architecture and execution: setting technical direction and standards, owning the hard design decisions, and building the critical systems myself. I do my best work in high-ambiguity environments - stabilizing failing platforms, modernizing legacy systems, and turning complex, chaotic requirements into durable, scalable implementations. My starting point is turning loose ideas into fully documented, testable proofs of concept - working code, flowcharts, and demonstrable test flows that make abstract problems tangible and decisions concrete. Build it to discover it, then build it right.",
    ],
    resume: [
      "Hands-on principal engineer with a proven track record across two acquired companies, systems processing billions of records daily, and client engagements spanning Fortune 500 enterprises and government entities. Technical architect behind the platform modernization central to TPV.com's acquisition by AnswerNet; contributed to enterprise growth driving Enstratius's acquisition by Dell.",
      "Operates at the intersection of architecture and execution - setting technical direction, defining standards, and owning critical implementation across distributed systems, cloud-native platforms, and high-throughput data pipelines. Most effective in high-ambiguity environments: stabilizing failing platforms, modernizing legacy systems, and translating complex business requirements into durable, scalable architecture.",
      "Approaches ambiguous problems by turning loose ideas into fully documented, demonstrable proofs of concept - working code, flowcharts, and test flows that surface real constraints early and establish shared understanding before full-scale execution.",
    ],
    highlight: "",
  },
  strengths: [
    {
      title: "Distributed Systems Architecture",
      description:
        "Designs application and platform architectures that hold up under high throughput, operational complexity, and evolving product demands.",
    },
    {
      title: "Legacy Rebuilds and Modernization",
      description:
        "Replaces aging or failing systems with maintainable, cloud-based platforms built for reliability, scale, and long-term flexibility.",
    },
    {
      title: "Scale, Cost, and Performance",
      description:
        "Evaluates technical tradeoffs with a strong bias toward efficiency, performance, horizontal scalability, and practical cost control.",
    },
    {
      title: "Data Pipelines and Validation",
      description:
        "Builds high-throughput data pipelines, validation layers, and analytics systems operating across billions of records and complex regional data variations.",
    },
    {
      title: "Turning Complexity into Scalable Systems",
      description:
        "Thrives in ambiguous or unstable environments. Typical starting point is a fully documented, demonstrable proof of concept - working code, flowcharts, and test flows that surface real constraints early and give teams something concrete to rally around.",
    },
    {
      title: "Execution and Technical Leadership",
      description:
        "Drives architecture and execution while contributing directly to implementation, debugging, and delivery across complex systems.",
    },
  ],
  selectedWork: [
    {
      title: "High-Scale Inventory and Catalog Pipelines",
      description:
        "Built independent inventory and catalog pipelines operating at 250M+ UPCs/day and 7.5B+ rows/day, supporting validation, promotion, image processing, and large-scale data workflows.",
    },
    {
      title: "Legacy Platform Rebuilds",
      description:
        "Stabilized failing systems and rebuilt long-lived legacy platforms into modern cloud-based applications with stronger reliability, maintainability, and delivery velocity.",
    },
    {
      title: "Workflow Orchestration and Integration Systems",
      description:
        "Designed orchestration layers, domain-specific languages, APIs, and integration platforms enabling dynamic workflows across operational systems, partner systems, and user-facing applications.",
    },
    {
      title: "Product Launches and Platform Delivery",
      description:
        "Drove technical execution for major public product launches, including Retail Campaign Studio and Storefronts, while aligning frontend experience, backend architecture, and platform-wide performance.",
    },
  ],
  exits: [
    {
      title: "Enstratius → Dell (acquisition)",
      description:
        "Operated in a hybrid engineering role spanning pre-sales, customer implementation, enterprise training, and platform development - driving adoption and technical credibility across Fortune 500 companies and government entities that contributed to the company’s growth from Series A through acquisition by Dell. The platform was rebranded and shipped as Dell Cloud Manager post-acquisition.",
    },
    {
      title: "Data Exchange, Inc. (TPV.com) → AnswerNet (acquisition)",
      description:
        "Architected and built the Focus platform - a full replacement for a 20+ year legacy system - enabling dramatically greater scale, client integrations, and mobile-link capabilities. The platform modernization was central to the company's acquisition by AnswerNet.",
    },
  ],
  experience: [
    {
      title: "Vice President of Engineering / Principal Architect",
      homeTitle: "VP of Engineering",
      company: "Locally.com",
      dateHome: "January 2022 - Present",
      dateResume: "Jan, 2022 - Present",
      summary: "Principal architecture role reporting to the CTO, with hands-on ownership of core platform design, implementation, data pipeline architecture, scalability, and technical standards across high-throughput inventory and catalog systems.",
      bullets: [
        "Architected and led development of a high-scale inventory pipeline, growing throughput from ~3M to 250M+ UPCs/day (83x) using an event-driven, Pub/Sub-based architecture triggered by file delivery.",
        "Architected and built the catalog bundle system, replacing error-prone manual CSV/Excel editing with a validation-enforced, automated pipeline that applies consistent normalization on every run - consuming, standardizing, processing, and promoting catalog data at 7.5B+ rows/day.",
        "Designed both systems using cloud function-based architectures to eliminate bottlenecks, enable horizontal scalability, and maintain strong cost efficiency with minimal operational overhead.",
        "Built intelligent header detection using heuristics with AI fallback to automatically identify and map incoming file structures, reducing onboarding complexity and human intervention; current system limiter is data availability, not processing capacity.",
        "Contributing to a taxonomy classification system backed by a proprietary trained LLM, including building the API service layer for LLM interaction; automates UPC taxonomy classification by feeding relevant product data to the model.",
        "Designed a BigQuery-based data validation and diffing layer operating across billions of records, enabling complex comparisons across languages, currencies, and regional datasets.",
        "Drove technical execution for Retail Campaign Studio and Storefronts, delivering major public product launches while aligning frontend experience with backend architecture and scaling platform performance.",
        "Set technical direction for the team through architecture reviews, API and integration design standards, and data modeling - establishing patterns adopted across the platform.",
        "Owned security, compliance, performance, and scalability review processes, defining acceptance criteria and architectural guardrails for new systems and integrations.",
        "Drove code quality and engineering best practices across the team through structured reviews and hands-on mentorship.",
      ],
    },
    {
      title: "Chief Technology Officer / Primary Architect & Lead Engineer",
      company: "Data Exchange, Inc. (TPV.com) • acquired by AnswerNet",
      dateHome: "March 2017 - August 2021",
      dateResume: "Mar, 2017 - Aug, 2021",
      summary:
        "Held CTO title in a small/mid-sized company while serving as the primary architect and hands-on lead engineer for the company's core verification platform, owning modernization, full-stack system design, infrastructure, and product delivery.",
      bullets: [
        "Stabilized platform following a failed enterprise migration and architected Focus - a full replacement for a 20+ year legacy system (FoxPro, co-located infrastructure) - delivering dramatically greater scale, client integration capabilities, and mobile-link availability that became central to the company's acquisition by AnswerNet.",
        "Designed and implemented a custom domain-specific language (DSL) to orchestrate call flows across human agents and IVR systems, enabling dynamic, runtime-driven behavior without code deployments.",
        "Led design and development of EZTPV, a hybrid web and call center system enabling customers to initiate or complete verification workflows via URL-based interfaces, including secure data capture and signature handling.",
        "Architected API platforms and integration layers supporting external partnerships and rapid expansion of product capabilities.",
        "Built and scaled cloud infrastructure to support business growth while improving reliability, deployment speed, and cost efficiency.",
        "Established CI/CD pipelines and DevOps practices that significantly reduced deployment friction and improved system stability.",
      ],
    },
    {
      title: "Software Systems Principal Engineer",
      company: "Dell Inc. (Dell Software division) • acquired by Quest Software Inc.",
      dateHome: "May 2013 - February 2017",
      dateResume: "May, 2013 - Feb, 2017",
      summary:
        "Hands-on principal engineer at Dell's software division. Operated as an IC architect and technical lead, designing enterprise platform infrastructure through the division's acquisition and relaunch as Quest Software.",
      homeBullets: [
        "Invented and developed a containerized appliance solution for enterprise software lifecycle management, significantly simplifying deployment complexity.",
        "Architected and developed a unified deployment platform for standardized application lifecycle management across multiple environments.",
        "Designed an extensible plugin architecture supporting multiple container orchestration and cloud platforms.",
        "Built comprehensive business intelligence and data engineering systems enabling predictive analytics, anomaly detection, and operational insights across large-scale distributed systems.",
        "Architected multi-cloud integration strategy supporting enterprise customers across diverse cloud platforms and hybrid environments.",
        "Established DevOps best practices, database optimization strategies, and automated deployment solutions that reduced setup time from days to minutes.",
      ],
      bullets: [
        "Invented and developed containerized appliance solution for enterprise software lifecycle management, significantly simplifying deployment complexity.",
        "Architected and developed a unified deployment platform for standardized application lifecycle management across multiple environments.",
        "Designed an extensible plugin architecture supporting multiple container orchestration and cloud platforms.",
        "Built comprehensive business intelligence platform enabling predictive analytics, anomaly detection, and operational insights for large-scale distributed systems.",
        "Led data engineering initiatives analyzing petabyte-scale datasets to drive product improvements and customer success outcomes.",
        "Architected multi-cloud integration strategy supporting enterprise customers across diverse cloud platforms and hybrid environments.",
        "Established DevOps best practices and database optimization strategies, improving system performance and reducing operational overhead.",
        "Designed and implemented fully automated deployment solutions reducing setup time from days to minutes while eliminating manual configuration errors.",
      ],
    },
    {
      title: "Sr. Cloud Systems Engineer",
      company: "Enstratius Inc.",
      dateResume: "Nov, 2011 - May, 2013",
      summary: "Hybrid engineering role at a cloud management startup acquired by Dell; platform rebranded as Dell Cloud Manager post-acquisition. Operated across pre-sales, enterprise implementation, training, support, and platform development - driving adoption across Fortune 500 companies and government entities from Series A through acquisition.",
      bullets: [
        "Drove pre-sales technical engagements, enterprise training, and proof-of-concept implementations across Fortune 500 companies and government entities, directly contributing to customer acquisition and platform credibility.",
        "Provided cloud architecture consulting to enterprise and government clients, establishing technical credibility and driving platform adoption.",
        "Architected and implemented infrastructure automation solutions supporting multi-cloud deployments at enterprise scale.",
      ],
    },
    {
      title: "Chief Technology Officer / Technical Co-founder & Lead Developer",
      company: "Crazygood LLC",
      dateResume: "Aug, 2010 - Nov, 2011",
      summary: "Held CTO title as technical co-founder and lead developer at a bootstrapped startup, owning full-stack architecture and hands-on implementation end-to-end while supplementing with outsourced development as needed.",
      bullets: [
        "Developed go-to-market strategy and product vision, achieving rapid growth to 11,000 paying subscribers in the first year.",
        "Architected and built scalable web platform from the ground up, establishing technical foundation for rapid customer acquisition.",
        "Designed and implemented automated financial systems processing high-volume transactions with payment providers.",
        "Established engineering practices and coordinated with distributed development teams to deliver products on aggressive timelines.",
      ],
    },
    {
      title: "Director of Information Technology",
      company: "enlyten LLC",
      dateResume: "Sep, 2009 - Aug, 2010",
      bullets: [
        "Led complete website re-architecture initiative, integrating vendor APIs and building comprehensive customer management systems.",
        "Developed analytics and reporting solutions leveraging MySQL databases to drive business insights and growth strategies.",
        "Reduced technology department overhead by 60% through strategic process improvements.",
        "Collaborated on compensation plan algorithm design and developed validation utilities ensuring mathematical accuracy.",
      ],
    },
    {
      title: "Director of Technology",
      company: "VYPE LLC",
      dateResume: "Jun, 2007 - Sep, 2009",
      summary:
        "Formerly known as High School Sports - The Magazine.",
      bullets: [
        "First technical leader hired to establish technology foundation for an established media company.",
        "Architected and built corporate website platform with modular content management system enabling franchise customization.",
        "Implemented high-performance infrastructure using MySQL and memcached, optimizing page load times for enhanced user experience.",
        "Developed comprehensive analytics platform providing franchise-level insights on traffic, views, and engagement metrics.",
        "Built custom advertising server with advanced targeting capabilities including duration, regional, and impression controls.",
      ],
    },
    {
      title: "System Administrator / Developer",
      company: "BigString Corporation",
      dateResume: "Nov, 2005 - Mar, 2007",
      bullets: [
        "Developed core patented technology powering innovative email security solution with self-destructing and recall capabilities.",
        "Architected and maintained production infrastructure across Debian-based server environment in enterprise data center.",
        "Served as primary developer for PHP-based application platform, delivering core product functionality.",
      ],
    },
  ],
  skills: [
    {
      title: "Development",
      items: [
        "Golang",
        "Python",
        "PHP",
        "JavaScript",
        "React",
        "VueJS",
        "Angular",
        "Node.js",
      ],
    },
    {
      title: "Databases",
      items: ["MySQL", "BigQuery", "Postgres", "Redis", "BoltDB", "MongoDB", "RethinkDB", "SQLite"],
    },
    {
      title: "Cloud & Infrastructure",
      items: [
        "Amazon Web Services",
        "Microsoft Azure",
        "Google Cloud Platform",
        "Docker",
        "Kubernetes",
        "Terraform",
        "Pub/Sub",
        "Grafana",
        "OpenTelemetry",
      ],
    },
    {
      title: "Operating Systems",
      items: [
        "Debian",
        "Ubuntu",
        "RHEL",
        "CentOS",
        "Alpine Linux",
      ],
    },
  ],
  education: [
    {
      title: "Information Technology, Bachelor of Business Administration",
      institution: "Colorado Technical University",
      date: "Jan, 2003 - May, 2005",
    },
  ],
  awards: [
    {
      title: "Michael Dell Champion Award",
      institution: "Dell Inc.",
      date: "Awarded on: Apr 01, 2015",
      shortDate: "Awarded April 2015",
      url: "https://dell.com",
      icon: "fa-trophy",
    },
    {
      title: "Michael Dell Champion Award",
      institution: "Dell Inc.",
      date: "Awarded on: Apr 01, 2014",
      shortDate: "Awarded April 2014",
      url: "https://dell.com",
      icon: "fa-trophy",
    },
    {
      title: "Magna Cum Laude",
      institution: "Colorado Technical University",
      date: "Awarded on: May 01, 2005",
      shortDate: "Awarded May 2005",
      url: "https://www.coloradotech.edu",
      icon: "fa-graduation-cap",
    },
  ],
  references: [
    {
      name: "Greg Moselle",
      company: "Amazon Web Services, Inc.",
      quote:
        "Brian is uniquely gifted with a technical business vision. His ability to understand chaotic business requirements and distill them into concrete value propositions for clients is matched only by his ability to share his knowledge with his colleagues in a way that makes the entire team stronger.",
    },
    {
      name: "John Willis",
      company: "Red Hat, Inc. & Docker, Inc. - Co-author, The DevOps Handbook; Co-founder, DevOps Days",
      quote:
        "Brian has shown a high degree of proficiency in numerous programming languages, databases, and platforms. In addition, he is an excellent communicator and has the skills and personality needed to be a leader.",
    },
    {
      name: "Tim Freeman",
      company: "Amazon Web Services, Inc.",
      quote:
        "Brian has a consistent, superior output. He can jump into any project, including frontend, and get the work done. He works very well independently and can be trusted to deliver or raise red flags when appropriate.",
    },
  ],
};
