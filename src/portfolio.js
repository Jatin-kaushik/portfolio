const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Jatin Kaushik | Senior Backend & AI Engineer",
  description:
    "Senior Backend AI Engineer with 6+ years of experience designing and scaling Python backend systems, Generative AI applications and distributed microservices on AWS and Azure. Specialised in FastAPI, LLMs, RAG pipelines, Agentic AI, AWS Bedrock and event-driven architectures built on Kafka, NATS, RabbitMQ and Redis.",
  og: {
    title: "Jatin Kaushik | Senior Backend & AI Engineer",
    type: "website",
    url: "http://jatinkaushik.tk/",
  },
};

//Home Page
const greeting = {
  title: "Namaste!",
  sub: "Jatin Kaushik",
  logo_name: "Jatin Kaushik",
  resumeLink: "https://www.linkedin.com/in/jatin-kaushik/",
};

// Headline numbers - animated counters on the home page.
// Every figure here is drawn from the experience entries below.
const metrics = [
  {
    value: 6,
    suffix: "+",
    label: "Years building backend systems",
    caption: "Python \u00b7 FastAPI \u00b7 Java",
  },
  {
    value: 90,
    suffix: "%",
    label: "Cloud cost reduction",
    caption: "$31K \u2192 $3K annually at Infosys",
  },
  {
    value: 10,
    suffix: "K+",
    label: "Events per second",
    caption: "Fault-tolerant, zero data loss",
  },
  {
    value: 99.9,
    suffix: "%",
    decimals: 1,
    label: "Uptime at global scale",
    caption: "Live international tournaments",
  },
];

// Organisations shown as a trust strip under the hero.
const companies = [
  { name: "HERE Technologies", detail: "SDE-2, Python & AI" },
  { name: "Kellton Tech", detail: "Senior Software Engineer" },
  { name: "Infosys", detail: "Specialist Programmer" },
  { name: "ByteBlanket", detail: "Data Science Engineer" },
];

// Flagship work highlighted on the home page.
const highlights = [
  {
    tag: "Generative AI",
    title: "ATP GenAI Commentary Chatbot",
    body:
      "AWS Bedrock agents and knowledge bases over millions of historical match records, generating context-aware commentary in under 15 seconds at 95% accuracy.",
    stack: ["AWS Bedrock", "FastAPI", "RAG", "Python"],
    icon: "simple-icons:amazonaws",
  },
  {
    tag: "Infrastructure",
    title: "RabbitMQ \u2192 NATS migration",
    body:
      "Re-architected the messaging backbone behind the Australian Open, Roland Garros and Formula-E, cutting annual cloud spend by roughly 90% while holding 99.9% uptime.",
    stack: ["NATS", "AWS ECS", "Kafka", "Hazelcast"],
    icon: "simple-icons:apachekafka",
  },
  {
    tag: "Platform",
    title: "Enterprise JIRA Sync Platform",
    body:
      "A FastAPI platform connecting global automotive customers with Professional Services and engineering teams, accelerating issue resolution across organisations.",
    stack: ["FastAPI", "PostgreSQL", "Agentic AI", "Rovo"],
    icon: "simple-icons:fastapi",
  },
  {
    tag: "Security",
    title: "PII encryption framework",
    body:
      "AES-256 and RSA cryptography for multi-tenant SaaS, delivering GDPR/CCPA-compliant handling of sensitive customer data at 1M+ daily transactions.",
    stack: ["AES-256", "RSA", "JWT", "RBAC"],
    icon: "simple-icons:springsecurity",
  },
];

// home logos
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "white",
      },
      profileLink: "https://github.com/Jatin-kaushik",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/jatinkaushik_",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/jatinkaushikjk",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#24E7EE",
      },
      profileLink: "https://www.hackerearth.com/@Jatinkaushik",
    },
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077b5",
      },
      profileLink: "https://www.linkedin.com/in/jatin-kaushik/",
    },
    {
      siteName: "HashNode",
      iconifyClassname: "simple-icons:hashnode",
      style: {
        color: "#2962ff",
      },
      profileLink: "",
    },
  ],
};

//what i do?
const skills = {
  data: [
    {
      title: "Backend & API Engineering",
      fileName: "FullStackImg",
      skills: [
        "\u26A1 Designing and scaling production Python backend systems with FastAPI, Flask and Pydantic serving millions of users",
        "\u26A1 Building secure RESTful APIs with JWT authentication, RBAC, API versioning, validation frameworks and audit logging",
        "\u26A1 Architecting event-driven microservices with Kafka, NATS, RabbitMQ, AWS SQS and Redis for high-throughput asynchronous workloads",
        "\u26A1 Modernizing legacy monoliths into modular, independently deployable microservice architectures",
        "\u26A1 Optimizing PostgreSQL, MongoDB and DynamoDB schemas, indexing and queries for 1M+ daily transactions at sub-100ms latency",
        "\u26A1 Implementing backpressure handling, in-memory queuing and circuit-breaker patterns for 10K+ events per second",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: {
            color: "#009688",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#E8EAF0",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:openjdk",
          style: {
            color: "#E8EAF0",
          },
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "simple-icons:springboot",
          style: {
            color: "#6DB33F",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#5A9BD5",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#7BB6DB",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Apache Kafka",
          fontAwesomeClassname: "simple-icons:apachekafka",
          style: {
            color: "#E8EAF0",
          },
        },
        {
          skillName: "RabbitMQ",
          fontAwesomeClassname: "simple-icons:rabbitmq",
          style: {
            color: "#FF6600",
          },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "simple-icons:redis",
          style: {
            color: "#DC382D",
          },
        },
      ],
    },
    {
      title: "Generative AI & LLM Engineering",
      fileName: "DataScienceImg",
      skills: [
        "\u26A1 Building production Generative AI platforms on AWS Bedrock with LLM orchestration and multi-chunk processing frameworks",
        "\u26A1 Designing RAG pipelines over enterprise knowledge bases using embeddings, vector databases and semantic retrieval",
        "\u26A1 Developing Agentic AI systems that automate code review, test-case generation and operational workflows",
        "\u26A1 Prompt engineering and LLM evaluation for accuracy, latency and cost across enterprise use cases",
        "\u26A1 Shipped a GenAI Commentary Chatbot processing millions of match records with 95% accuracy in under 15 seconds",
        "\u26A1 Integrating AI-assisted development workflows with GitHub Copilot, Kiro and Atlassian Rovo Agents",
      ],
      softwareSkills: [
        {
          skillName: "AWS Bedrock",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "LangChain",
          fontAwesomeClassname: "simple-icons:langchain",
          style: {
            color: "#4FD1B5",
          },
        },
        {
          skillName: "OpenAI",
          fontAwesomeClassname: "simple-icons:openai",
          style: {
            color: "#E8EAF0",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: {
            color: "#009688",
          },
        },
        {
          skillName: "Pydantic",
          fontAwesomeClassname: "simple-icons:pydantic",
          style: {
            color: "#E92063",
          },
        },
      ],
    },
    {
      title: "Cloud, DevOps & Distributed Systems",
      fileName: "DesignImg",
      skills: [
        "\u26A1 Architecting cloud-native systems on AWS (Lambda, ECS, ECR, S3, RDS, EC2, Kinesis, Bedrock) and Azure DevOps",
        "\u26A1 Containerization and orchestration with Docker and Kubernetes, plus CI/CD via Jenkins, GitHub Actions and Azure Pipelines",
        "\u26A1 Driving large-scale cloud cost optimization \u2014 reduced annual spend from $31K to $3K (~90%) at 99.9% uptime",
        "\u26A1 Implementing PII encryption with AES-256 and RSA for GDPR/CCPA compliance in multi-tenant platforms",
        "\u26A1 Observability and monitoring using CloudWatch, ELK Stack, Grafana and Prometheus",
        "\u26A1 Performance tuning and capacity planning across compute, messaging and database layers",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#2496ED",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "simple-icons:jenkins",
          style: {
            color: "#D24939",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#2088FF",
          },
        },
        {
          skillName: "NGINX",
          fontAwesomeClassname: "simple-icons:nginx",
          style: {
            color: "#009639",
          },
        },
        {
          skillName: "Grafana",
          fontAwesomeClassname: "simple-icons:grafana",
          style: {
            color: "#F46800",
          },
        },
        {
          skillName: "Prometheus",
          fontAwesomeClassname: "simple-icons:prometheus",
          style: {
            color: "#E6522C",
          },
        },
      ],
    },
    {
      title: "Data Science & Analysis",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production-ready models for various deep learning and statistical use cases",
        "⚡ Experience in working with Computer Vision using OpenCV and NLP projects(Chatterbot)",
        "⚡ Having good hands-on with Data Cleaning, processing & Analysing using Numpy, Pandas, Tableau & PowerBI",
        "⚡ Experience with Text-to-speech encoders/decoders (speech synthesis)",
        "⚡ Experienced in Flask Rest-API for deployment of ML Model",
        "⚡ Having good knowledge of Python Development",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "simple-icons:pytorch",
          style: {
            color: "#EE4C2C",
          },
        },
        {
          skillName: "scikit-learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: {
            color: "#F7931E",
          },
        },
        {
          skillName: "OpenCV",
          fontAwesomeClassname: "simple-icons:opencv",
          style: {
            color: "#5C3EE8",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            color: "#C5C8D1",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "logos-numpy",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "simple-icons:tableau",
          style: {
            color: "#E97627",
          },
        },
      ],
    },
    {
      title: "Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive websites using HTML5, CSS3 & BootStrap",
        "⚡ Creating application backend in Flask, Streamlit & Dash",
        "⚡ Having experience in Domain & Hosting using Netlify, Heroku, Github, Gitlab & Hostinger",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "BootStrap",
          fontAwesomeClassname: "logos-bootstrap",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "FLask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Streamlit",
          fontAwesomeClassname: "simple-icons:streamlit",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Gitlab",
          fontAwesomeClassname: "simple-icons:gitlab",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "Visualization Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Dashboard designing highly attractive user interfaces for mobile and web applications using python and Visualization tool",
        "⚡ Tableau Developer with highly skills interactive Dashboard developer",
        "⚡ Creating the flow of charts functionalities to optimize user experience",
        "⚡ Applying latest Design principles and experienced in product wireframing",
      ],
      softwareSkills: [
        {
          skillName: "Tableau",
          fontAwesomeClassname: "simple-icons:tableau",
          style: {
            color: "#E97627",
          },
        },
        {
          skillName: "Plotly",
          fontAwesomeClassname: "simple-icons:plotly",
          style: {
            color: "#2FA3F7",
          },
        },
        {
          skillName: "Python-Dash",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            color: "#C5C8D1",
          },
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Production platforms and side builds \u2014 from Generative AI systems on AWS Bedrock and event-driven microservices carrying live tournament traffic, to smaller experiments in data science and computer vision.",
};

//project cards
// colors:[primary,secondary,success,danger,warning,info,light,dark,]
const projectcards = {
  list: [
    {
      title: "OCR Streamlit",
      img_path: "project-06.png",
      description:
        "A WebApp for Extracting Text from Images and applying various thresholding methods with sentiment analysis using TextBlob",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "TextBlob",
          color: "#820032",
        },
        {
          lang: "OpenCV",
          color: "#00a100",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
        {
          lang: "Heroku",
          color: "#3c0095",
        },
      ],
      link: "",
      code: "",
      linkcolor: "white",
    },

    // {
    //   title: "Signature Verification Recognition",
    //   img_path: "voice.gif",
    //   description:
    //     "A streamlit webapp which detects user's gender and emotion based on realtime audio input.",
    //   tags: [
    //     {
    //       lang: "ongoing",
    //       color: "red",
    //     },
    //     {
    //       lang: "python",
    //       color: "#004782",
    //     },
    //     {
    //       lang: "matplotlib",
    //       color: "#c47206",
    //     },
    //     {
    //       lang: "tensorflow",
    //       color: "#4257f5",
    //     },
    //     {
    //       lang: "Streamlit",
    //       color: "#ff4b4b",
    //     },
    //   ],
    //   link: "",
    //   code: "",
    //   linkcolor: "white",
    // },
    // {
    //   title: "NeuralViz",
    //   img_path: "neural.gif",
    //   description:
    //     "A webapp to visualize Neural Networks based on no. of layers and neurons, calculate Loss and understand math behind Back Propagation algo.",
    //   tags: [
    //     {
    //       lang: "python",
    //       color: "#004782",
    //     },
    //     {
    //       lang: "numpy",
    //       color: "#8700b0",
    //     },
    //     {
    //       lang: "matplotlib",
    //       color: "#c47206",
    //     },
    //     {
    //       lang: "Streamlit",
    //       color: "#ff4b4b",
    //     },
    //     {
    //       lang: "Heroku",
    //       color: "#3c0095",
    //     },
    //   ],
    //   link: "https://neuralviz.herokuapp.com/",
    //   code: "https://github.com/rohankokkula/neuralviz",
    //   linkcolor: "white",
    // },
    // {
    //   title: "Semantic Search APP",
    //   img_path: "project-03.png",
    //   description:
    //     "Demo of OpenAI's GPT-3 model on Semantic search using streamlit.",
    //   tags: [
    //     {
    //       lang: "ongoing",
    //       color: "red",
    //     },
    //     {
    //       lang: "Streamlit",
    //       color: "#ff4b4b",
    //     },
    //   ],
    //   link: "",
    //   code: "",
    //   linkcolor: "white",
    // },
    // {
    //   title: "Youtube Thumbnail Generator & AutoUploader",
    //   img_path: "project-02.png",
    //   description:
    //     "A python streamlit webapp to automate generating & uploading youtube thumbnails using Youtube v3 API",
    //   tags: [
    //     {
    //       lang: "internal project",
    //       color: "red",
    //     },
    //     {
    //       lang: "youtube v3 api",
    //       color: "red",
    //     },
    //   ],
    //   link: "",
    //   code: "",
    //   linkcolor: "white",
    // },

    // {
    //   title: "Newsearcher",
    //   img_path: "news.gif",
    //   description:
    //     "Enter your search keyword and get a summary of news weblinks with images without actually opening the links.",
    //   tags: [
    //     {
    //       lang: "python",
    //       color: "#004782",
    //     },
    //     {
    //       lang: "newspaper3k",
    //       color: "#303030",
    //     },
    //     {
    //       lang: "Streamlit",
    //       color: "#ff4b4b",
    //     },
    //     {
    //       lang: "nltk",
    //       color: "#051c61",
    //     },
    //   ],
    //   link: "https://newsearcher.herokuapp.com/",
    //   code: "https://github.com/rohankokkula/Newsearcher",
    //   linkcolor: "white",
    // },
    // {
    //   title: "ActiWeight",
    //   img_path: "acti.gif",
    //   description:
    //     "ActiWeight is an Interactive Visualizer for understanding intuition behind 10 Activation Functions used in Neural Networks.",
    //   tags: [
    //     {
    //       lang: "python",
    //       color: "#004782",
    //     },
    //     {
    //       lang: "matplotlib",
    //       color: "#c47206",
    //     },
    //     {
    //       lang: "Streamlit",
    //       color: "#ff4b4b",
    //     },
    //     {
    //       lang: "Heroku",
    //       color: "#3c0095",
    //     },
    //   ],
    //   link: "https://www.youtube.com/watch?v=2vk9lQuX_1Q",
    //   code: "https://github.com/rohankokkula/Actiweight",
    //   linkcolor: "white",
    // },
  ],
};

const resumeleft = {
  left: {
    title: ["Experience"],
    data: [
      {
        title:
          "Software Development Engineer II (SDE-2) | Python & AI Engineer",
        subtitle: "HERE Technologies, Delhi, India",
        date: "Feb 2026 - Present",
        content: [
          "Architected and delivered the enterprise-scale JIRA Sync Platform using Python FastAPI, enabling seamless collaboration between global automotive customers, Professional Services teams and engineering organizations.",
          "Designed and implemented Agentic AI solutions leveraging AWS Bedrock, Atlassian Studio Rovo, enterprise knowledge repositories and LLM-powered workflows to automate operational processes and accelerate decision-making.",
          "Engineered intelligent Product Journey Dashboards for executive automotive leadership, integrating AWS Bedrock and LLMs to generate actionable insights and automate reporting.",
          "Built an AI-powered Code Review and Quality Assurance Agent that analyses code changes, generates Zephyr Test Cases and streamlines testing workflows, improving release readiness.",
          "Built enterprise-grade Performance and KPI Dashboards using Python Dash, Plotly, SQL and custom data pipelines, giving real-time visibility into CI/CD health, deployment metrics and engineering productivity.",
          "Spearheaded modernization of a legacy monolithic Navigation Platform into a scalable modular architecture, improving maintainability, deployment velocity and long-term platform reliability.",
          "Leveraged GitHub Copilot, Kiro and Atlassian Rovo Agents to implement AI-assisted development workflows, significantly reducing development effort across multiple strategic initiatives.",
        ],
      },
      {
        title: "Senior Software Engineer | Python Backend Developer",
        subtitle: "Kellton Tech Solutions, Gurugram, India",
        date: "Jun 2025 - Feb 2026",
        content: [
          "Architected a high-availability AI Content Generation Platform leveraging AWS Bedrock, LLMs and a custom multi-chunk processing framework, improving content generation throughput by 35%.",
          "Designed enterprise-grade PII encryption and decryption frameworks using AES-256 and RSA cryptography, ensuring GDPR/CCPA compliance across multi-tenant environments.",
          "Built scalable Python microservices using FastAPI, PostgreSQL and MongoDB, supporting dynamic survey workflows, asynchronous processing and complex business logic for enterprise SaaS applications.",
          "Developed secure RESTful APIs with JWT authentication, Role-Based Access Control (RBAC), API versioning, validation frameworks and comprehensive audit logging.",
          "Optimized database architecture, indexing strategies and query performance for high-volume analytics workloads, supporting 1M+ daily transactions at sub-100ms response times.",
          "Implemented Redis caching and Apache Kafka event streaming for real-time survey processing and response ingestion for global users, reducing latency under peak traffic.",
          "Enhanced CI/CD and deployment infrastructure using Azure DevOps, integrating automated quality gates through SonarQube, security validations and deployment health checks.",
          "Designed an enterprise Insights & Reporting Dashboard for live survey analytics using Python, SQL and AI-powered review mechanisms delivering real-time response analysis and actionable business insights.",
        ],
      },
      {
        title: "Specialist Programmer | Backend Developer (SDE-1)",
        subtitle: "Infosys, Bengaluru, India",
        date: "Aug 2022 - May 2025",
        content: [
          "Led large-scale infrastructure modernization for global sporting events including Australian Open, Roland Garros, ATP Tours and Formula-E, migrating pipelines from RabbitMQ to NATS and optimizing AWS ECS, cutting annual cloud costs from $31K to $3K (~90%) while maintaining 99.9% uptime.",
          "Architected a GenAI Commentary Chatbot for ATP using AWS Bedrock, AI Agents, Knowledge Bases and Python FastAPI, processing millions of historical match records to generate context-aware commentary in under 15 seconds with 95% accuracy.",
          "Engineered and deployed 12 Java Spring Boot microservices on AWS Lambda, API Gateway and DynamoDB within 2.5 weeks, enabling real-time Augmented Reality (AR) fan experiences during live tournaments.",
          "Redesigned sports data ingestion platforms using Apache Kafka and Hazelcast for Hawk-Eye data streams, improving ingestion efficiency by 60% and cutting processing latency from 5 seconds to under 500 milliseconds.",
          "Resolved critical scalability bottlenecks using backpressure handling, in-memory queuing and circuit-breaker patterns, enabling reliable processing of 10K+ events per second with zero data-loss incidents.",
          "Implemented an intelligent AWS S3 caching layer and optimized PostgreSQL RDS workloads, reducing database load from 100% CPU utilization to 4 ACU at peak and improving API response times by 70%.",
          "Developed cloud-native Carbon Emissions Tracking Microservices for the Green Act Movement initiative, integrating third-party sustainability APIs and analytics dashboards.",
          "Led performance tuning and capacity planning across distributed systems, improving throughput and reliability during peak tournament traffic.",
        ],
      },
      {
        title: "Data Science & Analytics Engineer | Backend Developer",
        subtitle: "ByteBlanket Software and Solutions, Remote",
        date: "Jun 2020 - Sept 2021",
        content: [
          "Developed ML algorithms using Python (scikit-learn, TensorFlow, OpenCV) for a fintech banking client, automating signature verification and facial recognition authentication with 92% and 95% accuracy, reducing manual verification workload by 50%.",
          "Built a comprehensive Tableau Dashboard with Flask RESTful APIs for real-time ML model performance monitoring, reducing model degradation detection time by 80%.",
          "Engineered high-performance Flask APIs with optimized payloads and cached responses, improving reporting speed by 60% with rate limiting and request batching.",
          "Built robust ETL pipelines using pandas/NumPy to process large-scale financial datasets, implementing data validation and anomaly detection and reducing data-related errors by 40%.",
          "Contributed to fraud detection models and loan approval systems using Random Forest, XGBoost and Logistic Regression, helping reduce fraudulent transactions by 25%.",
          "Created interactive business intelligence dashboards using Tableau and Power BI for customer behaviour and transaction pattern analysis.",
          "Face Expression Detector: built a fast and scalable solution for expression detection using facial recognition.",
          "Merchant Web Dashboard: created a client-facing web dashboard using Python, Plotly and Dash to track and monitor merchant inventory.",
          "Chatbot Web App: created a chatbot to answer common order-related customer queries.",
          "Tableau Dashboards for Work Efficiency: designed Tableau dashboards to track and manage queries assigned, closed and pending, improving team work efficiency.",
        ],
      },
      {
        title: "Program Support Intern",
        subtitle: "LetsUpgrade, Remote",
        date: "Dec 2019 - May 2020",
        content: [
          "Collaborated with the engineering team to enhance the coding platform architecture, improving user engagement and platform stability for over 5,000+ active learners.",
          "Developed Python-based automation scripts to streamline data entry and validation, reducing manual data processing time by 70% and ensuring 99% data integrity.",
          "Optimized SQL queries and backend data structures for real-time tracking of student progress and assessment submissions, decreasing page load times by 30%.",
          "Automated generation of performance reports and digital certificates, eliminating manual overhead for program coordinators.",
        ],
      },
    ],
  },
};

const resumeright = {
  right: [
    {
      title: ["Education"],
      data: [
        {
          title:
            "Bachelor of Technology in Electronics and Communication Engineering",
          subtitle: "Guru Gobind Singh Indraprastha University, New Delhi",
          date: "2018 - 2022",
          content: ["Overall GPA: 9.0/10"],
        },
        {
          title: "Higher Secondary School Certificate [HSSC]",
          subtitle: "Indraprastha Convent Sr. Secondary School, New Delhi",
          date: "2016 - 2018",
          content: ["CGPA: 7.6/10"],
        },
      ],
    },
    {
      title: ["Technical Achievements"],
      data: [
        {
          title: "AI Innovation Award",
          subtitle: "HERE Technologies",
          date: "Q2 2026",
          content: [
            "Recognized by senior leadership for delivering production-grade AI-powered enterprise automation initiatives using AWS Bedrock, Agentic AI workflows and intelligent engineering productivity solutions.",
          ],
        },
        {
          title: "Infrastructure Excellence",
          content: [
            "Achieved ~90% cloud cost optimization by redesigning AWS infrastructure and migrating messaging from RabbitMQ to NATS, cutting annual operating costs from $31K to $3K while maintaining 99.9% uptime.",
          ],
        },
        {
          title: "Generative AI Innovation",
          content: [
            "Architected and deployed an AWS Bedrock-powered ATP Commentary Portal and AI Chatbot, processing millions of historical match records and delivering AI-generated commentary with 95% accuracy during live international tournaments.",
          ],
        },
        {
          title: "Large-Scale Event Processing",
          content: [
            "Engineered distributed event-driven systems processing 10K+ events per second with fault tolerance, low latency and zero data-loss during peak tournament traffic.",
          ],
        },
        {
          title: "Enterprise Security Excellence",
          content: [
            "Implemented AES-256 and RSA-based encryption frameworks ensuring GDPR/CCPA compliance and secure handling of sensitive customer data across multi-tenant platforms.",
          ],
        },
        {
          title: "Global Sports Technology Impact",
          content: [
            "Delivered mission-critical systems supporting the Australian Open, Roland Garros, ATP Tours and Formula-E, serving millions of global users with high availability and real-time data processing.",
          ],
        },
        {
          title: "Technical Leadership",
          content: [
            "Led architecture modernization, AI adoption initiatives and cloud transformation programs while mentoring engineers across Python, FastAPI, cloud-native development and modern software engineering practices.",
          ],
        },
      ],
    },
    {
      title: ["Ranks and Achivements"],
      data: [
        {
          title: "Ranks",
          content: [
            "#3 in E-sports Championship Emblazon 2019",
            "#1 Rank Holder in NEO Olympiad 3.0",
          ],
        },
        {
          title: "Achievements",
          content: [
            "LinkedIn Python Assessmment Certified",
            "4\u2B50 Badges for Python, Python and RestAPI Certified at HackerRank ",
            "Cleared Infosys Certification for Certified Software Engineer",
            "AWS Certified Cloud Practitioner",
            "GCP Certified Cloud Practitioner",
            "GitHub Foundations Certified",
            "Generative AI & Prompt Engineering Certified",
          ],
        },
      ],
    },
    {
      title: ["Freelance Work"],
      data: [
        {
          title: "Data Analysis",
          subtitle: "fiverr.com",
          content: [
            "Created programm for Client for Big Data processing using DASK",
          ],
        },
        {
          title: "Data Visualization",
          subtitle: "fiverr.com",
          content: [
            "Created Graphs and chart and prepare a Web dashboard for Client for visualtization using DASH",
          ],
        },
        {
          title: "Portfolio Website",
          subtitle: "Personal project",
          content: [
            "Built a personal Portfolio Website with the help or @rohanKokkula and @mohitnegi",
          ],
        },
      ],
    },
  ],
};

//certificate cards
const certifications = {
  certifications: [
    // --- Added from latest resume (Aug 2026) ---
    // These entries have no logo file, so the card renders a typographic mark
    // built from the issuer name. certificate_link is empty where no public
    // verification URL was available -- add one and a "Verify" action appears.
    {
      title: "AWS Certified Cloud Practitioner",
      subtitle: "Amazon Web Services",
      logo_path: "",
      certificate_link: "",
      alt_name: "AWS",
      color_code: "#000000",
    },
    {
      title: "GCP Certified Cloud Practitioner",
      subtitle: "Google Cloud",
      logo_path: "",
      certificate_link: "",
      alt_name: "Google Cloud",
      color_code: "#000000",
    },
    {
      title: "Generative AI & Prompt Engineering",
      subtitle: "AI / ML",
      logo_path: "",
      certificate_link: "",
      alt_name: "Generative AI",
      color_code: "#000000",
    },
    {
      title: "GitHub Foundations Certification",
      subtitle: "GitHub",
      logo_path: "",
      certificate_link: "",
      alt_name: "GitHub",
      color_code: "#000000",
    },
    {
      title: "Infosys Certified Software Engineer",
      subtitle: "Infosys",
      logo_path: "",
      certificate_link: "",
      alt_name: "Infosys",
      color_code: "#000000",
    },
    {
      title: "Data Analyst (Power BI, Tableau)",
      subtitle: "Data Analytics",
      logo_path: "tabcon-01.png",
      certificate_link: "",
      alt_name: "Data Analyst",
      color_code: "#000000",
    },
    // --- Existing certifications (unchanged) ---
    {
      title: "Python 101 for Data Science",
      subtitle: "Data Science",
      logo_path: "cc.png",
      certificate_link:
        "https://courses.cognitiveclass.ai/certificates/45a95ca65436444e85e4485807d7b67f",
      alt_name: "Cognitive",
      color_code: "#000000",
    },
    {
      title: "SQL and Relational Databases 101",
      subtitle: "SQL",
      logo_path: "cc.png",
      certificate_link:
        "https://courses.cognitiveclass.ai/certificates/08a88c387dc44d2a88a6592cf83689cd",
      alt_name: "Cognitive",
      color_code: "#000000",
    },
    {
      title: "Access Denied'21",
      subtitle: "IETE-VIT Vellore",
      logo_path: "vitlogo.png",
      certificate_link:
        "https://verify.givemycertificate.com/verify/YC74-G7DR-CKQS-QJ7K",
      alt_name: "VIT",
      color_code: "#000000",
    },
    {
      title: "Data Science for Everyone",
      subtitle: "DataCamp",
      logo_path: "datacamp-01.png",
      certificate_link:
        "https://www.datacamp.com/statement-of-accomplishment/course/3bb303e6599e4cc83068f6b2e06347fba7e3b567",
      alt_name: "DataCamp",
      color_code: "#000000",
    },
    {
      title: "Python ",
      subtitle: "HackerRank",
      logo_path: "python-01.png",
      certificate_link: "https://www.hackerrank.com/jatinkaushik_?hr_r=1",
      alt_name: "HackerRank",
      color_code: "#000000",
    },
    {
      title: "Python Basic",
      subtitle: "HackerRank",
      logo_path: "hck.png",
      certificate_link: "https://www.hackerrank.com/certificates/c2e799452876",
      alt_name: "HackerRank",
      color_code: "#000000",
    },
    {
      title: "Rest API(Intermediate)",
      subtitle: "HackerRank",
      logo_path: "hck.png",
      certificate_link: "https://www.hackerrank.com/certificates/28339364775b",
      alt_name: "HackerRank",
      color_code: "#000000",
    },
    {
      title: "Python for Data Science",
      subtitle: "iNeuron.ai",
      logo_path: "ineuron-01.png",
      certificate_link:
        "https://academy.ineuron.ai/certificates/downloads/PY000156.pdf",
      alt_name: "HackerRank",
      color_code: "#000000",
    },
    {
      title: "Machine Learning Masters",
      subtitle: "iNeuron.ai",
      logo_path: "ineuron-01.png",
      certificate_link:
        "https://academy.ineuron.ai/certificates/downloads/ML005036.pdf",
      alt_name: "HackerRank",
      color_code: "#000000",
    },
    {
      title: "PowerBI Masters",
      subtitle: "iNeuron.ai",
      logo_path: "ineuron-01.png",
      certificate_link:
        "https://academy.ineuron.ai/certificates/downloads/PB012042.pdf",
      alt_name: "HackerRank",
      color_code: "#000000",
    },
    {
      title: "Tableau Masters",
      subtitle: "iNeuron.ai",
      logo_path: "ineuron-01.png",
      certificate_link:
        "https://academy.ineuron.ai/certificates/downloads/TB003355.pdf",
      alt_name: "HackerRank",
      color_code: "#000000",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contact.jpg",
    description:
      "Happy to talk about Python backend engineering, FastAPI, Generative AI and LLM applications, RAG and Agentic AI systems, AWS and cloud architecture, or event-driven microservice design. I usually reply within 24 hours.",
  },
  addressSection: {
    title: "Location",
    subtitle: "Rohini Sector 22, Delhi",
  },
  linkedinSection: {
    title: "LinkedIn",
    subtitle: "linkedin.com/in/jatin-kaushik",
    link: "https://www.linkedin.com/in/jatin-kaushik/",
  },
  emailSection: {
    title: "Email",
    subtitle: "Jatinchandkaushik@gmail.com",
    link: "mailto:Jatinchandkaushik@gmail.com",
  },
  // Phone number intentionally omitted from the public site. Anything left in
  // this file ships inside the JS bundle and is readable from view-source,
  // so it is removed rather than merely hidden from the UI.
};

//contact icons
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Jatin-kaushik",
    iconifyClassname: "simple-icons:github",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    // GitHub brand black. Was #ffffff, which rendered a white glyph on a
    // white tile and made the icon invisible.
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/jatin-kaushik/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:JatinchandKaushik@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/Jatinchandkaushik/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

export {
  settings,
  seo,
  greeting,
  metrics,
  companies,
  highlights,
  socialMediaLinks,
  skills,
  competitiveSites,
  projectsHeader,
  contactPageData,
  projectcards,
  certifications,
  resumeleft,
  resumeright,
};
