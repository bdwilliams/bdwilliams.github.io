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
      "Hands-on principal engineer specializing in distributed systems, high-throughput data pipelines, and platform modernization. Known for rebuilding systems that have hit their ceiling, replacing failing or manual processes with architectures that operate orders of magnitude beyond the original design. At Locally.com, scaled inventory throughput 83x and replaced fully manual catalog operations with an automated pipeline processing 7.5B+ rows daily. Technical architect behind platform modernizations central to two company acquisitions, with enterprise and government client engagements across Fortune 500 organizations.",
      "Operates hands-on across the full engineering stack - setting technical direction, defining standards, and building the critical systems personally. Brings a proof-of-concept-first approach to ambiguous problems: working code, flowcharts, and test flows before full commitment. Most effective when the system is broken, the requirements are unclear, or the scale has outgrown the original design.",
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
      title: "Vice President of Engineering",
      homeTitle: "VP of Engineering",
      company: "Locally.com",
      dateHome: "January 2022 - Present",
      dateResume: "Jan, 2022 - Present",
      summary: "Reports to the CTO. Owns architecture, implementation, and technical direction across core platform initiatives - designing and building the systems personally while setting the standards the team executes against.",
      bullets: [
        "Architected and built a high-scale inventory pipeline, growing throughput from ~3M to 250M+ UPCs/day (83x) using an event-driven, Pub/Sub-based architecture triggered by file delivery.",
        "Architected and built the catalog bundle system, replacing error-prone manual CSV/Excel editing with a validation-enforced, automated pipeline that applies consistent normalization on every run - consuming, standardizing, processing, and promoting catalog data at 7.5B+ rows/day.",
        "Replaced a legacy processor prone to OOM failures and with no horizontal scaling path with cloud function architectures written in Python and Golang, eliminating idle infrastructure cost and enabling on-demand scaling across a platform serving 60M+ monthly shoppers and 65k+ retail partners.",
        "Built intelligent header detection across 10,000s of unstandardized file formats using heuristics with AI fallback, achieving a 90%+ auto-mapping success rate and cutting per-client file mapping from 1-3 hours to under a minute.",
        "Built the API service layer for a proprietary trained LLM-based taxonomy classification system, replacing manual classification of every new UPC with instant automated classification driven by product data attributes.",
        "Designed a BigQuery-based validation and diffing layer across billions of records to catch data quality issues - duplicate and invalid UPCs, invalid pricing, missing data, and missing images - before they reach retail partners.",
        "Owned technical delivery of Retail Campaign Studio (2023) and Storefronts (2024), platform launches extending self-service advertising and retail presence capabilities to 65k+ retail partners and 1,000s of brands reaching 60M+ monthly shoppers.",
        "Set technical direction for 20+ engineers through architecture reviews, API and integration design standards, and data modeling; owned security, compliance, performance, and scalability reviews - defining the standards the full team builds against.",
      ],
    },
    {
      title: "Chief Technology Officer",
      company: "Data Exchange, Inc. (TPV.com) • acquired by AnswerNet",
      dateHome: "March 2017 - August 2021",
      dateResume: "Mar, 2017 - Aug, 2021",
      summary:
        "CTO and primary engineer at a bootstrapped call center platform. Owned all technical decisions, system architecture, infrastructure, and hands-on delivery from concept to production.",
      bullets: [
        "Stabilized platform following a failed enterprise migration and architected Focus - a full replacement for a 20+ year legacy system - delivering greater scale, client integration capabilities, and mobile-link availability that became central to the company's acquisition by AnswerNet.",
        "Designed and built a custom DSL for call flow orchestration, cutting script buildout from 30+ days to hours - enabling non-technical users to design and modify call flows at runtime with built-in A/B testing and staged rollout.",
        "Designed and built EZTPV, a hybrid web and call center verification system; the resulting model reduced the company's call center footprint from 3 facilities to 1 by shifting the majority of verification workflows to automated web-based processing.",
        "Designed and built API platforms and integration layers enabling external partnerships and product capability expansion.",
        "Replaced manual script uploads to co-located dedicated machines with a GitHub Actions and AWS Elastic Beanstalk CI/CD pipeline - enabling up to 30 zero-downtime deployments per day.",
      ],
    },
    {
      title: "Software Systems Principal Engineer",
      company: "Dell Inc. (Dell Software division) • acquired by Quest Software Inc.",
      dateHome: "May 2013 - February 2017",
      dateResume: "May, 2013 - Feb, 2017",
      summary:
        "Hands-on principal engineer at Dell's software division. IC architect and technical lead, designing enterprise platform infrastructure through the division's acquisition and relaunch as Quest Software.",
      homeBullets: [
        "Invented and developed a containerized appliance solution for enterprise software lifecycle management, reducing customer setup time from days to minutes and eliminating manual configuration errors.",
        "Architected a unified deployment platform for standardized application lifecycle management across multiple environments and cloud platforms.",
        "Designed an extensible plugin architecture supporting multiple container orchestration and cloud platforms.",
        "Built comprehensive business intelligence and data engineering systems enabling predictive analytics, anomaly detection, and operational insights across large-scale distributed systems.",
        "Architected multi-cloud integration strategy supporting enterprise customers across diverse cloud platforms and hybrid environments.",
        "Established DevOps best practices, database optimization strategies, and automated deployment solutions that reduced setup time from days to minutes.",
      ],
      bullets: [
        "Invented and developed a containerized appliance solution for enterprise software lifecycle management, reducing customer setup time from days to minutes and eliminating manual configuration errors.",
        "Architected a unified deployment platform for standardized application lifecycle management, enabling consistent deployments across multiple environments and cloud platforms.",
        "Designed an extensible plugin architecture supporting multiple container orchestration and cloud platforms.",
        "Built comprehensive business intelligence platform enabling predictive analytics, anomaly detection, and operational insights for large-scale distributed systems.",
        "Led data engineering initiatives analyzing petabyte-scale datasets to drive product improvements and customer success outcomes.",
        "Architected multi-cloud integration strategy supporting enterprise customers across diverse cloud platforms and hybrid environments.",
        "Established DevOps best practices and database optimization strategies, improving system performance and reducing operational overhead.",
      ],
    },
    {
      title: "Sr. Cloud Systems Engineer",
      company: "Enstratius Inc.",
      dateResume: "Nov, 2011 - May, 2013",
      summary: "Hybrid engineering role at a cloud management startup acquired by Dell; platform rebranded as Dell Cloud Manager post-acquisition. Operated across pre-sales, enterprise implementation, training, support, and platform development - driving adoption across Fortune 500 companies and government entities from Series A through acquisition.",
      bullets: [
        "Drove pre-sales engagements, on-site enterprise training, and proof-of-concept implementations across 20+ Fortune 500 and government clients - contributing to customer acquisition that fueled growth from Series A through acquisition by Dell.",
        "Delivered cloud architecture consulting and on-site technical engagements to enterprise and government clients, establishing the platform credibility that supported Dell Cloud Manager's post-acquisition commercial launch.",
        "Architected and implemented infrastructure automation solutions supporting multi-cloud deployments at enterprise scale.",
      ],
    },
    {
      title: "Chief Technology Officer",
      company: "Crazygood LLC",
      hideFromResume: true,
      dateResume: "Aug, 2010 - Nov, 2011",
      summary: "Technical co-founder and CTO at a bootstrapped startup. Lead developer and primary architect, owning full-stack design and implementation end-to-end while coordinating outsourced development as the product scaled.",
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
      hideFromResume: true,
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
      hideFromResume: true,
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
      hideFromResume: true,
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
