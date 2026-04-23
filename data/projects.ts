export type Project = {
  title: string;
  description: string;
  techStack: string[];
  status: "completed" | "in-progress";
  repoLink: string | null;
  liveDemoLink: string | null;
};

export const projects: Project[] = [
  {
    title: "Meeting Mind",
    description:
      "Multi-agent AI framework using Model Context Protocol (MCP), automating end-to-end functional test generation (Playwright, Karate) from Figma designs and Swagger/OpenAPI specifications.",
    techStack: [
      "TypeScript",
      "MCP",
      "AI Agents",
      "Playwright",
      "Karate",
      "Figma",
      "OpenAPI",
    ],
    status: "in-progress",
    repoLink: "https://github.com/craks31/meetingmind",
    liveDemoLink: null,
  },
  {
    title: "Full Stack Commerce (Angular + AWS)",
    description:
      "TMF-compliant microservices e-commerce platform with DDD architecture. Includes orderms, cartms, checkoutms, pricingms, productsms, offersms, inventoryms, billingms, customeraccountms (GraphQL), and geoms.",
    techStack: [
      "Angular 17",
      "Java",
      "Spring Boot",
      "AWS",
      "Kubernetes",
      "Docker",
      "GitHub Actions",
      "Kafka",
      "GraphQL",
    ],
    status: "in-progress",
    repoLink: "https://github.com/craks31/orderms",
    liveDemoLink: null,
  },
  {
    title: "Full Stack Commerce (React + Azure)",
    description:
      "Cloud-native e-commerce platform built with React frontend and Azure cloud services. Same microservices architecture with Spring Cloud Gateway routing across 5+ services.",
    techStack: [
      "React",
      "Java",
      "Spring Boot",
      "Azure",
      "Kubernetes",
      "Docker",
      "Spring Cloud Gateway",
    ],
    status: "in-progress",
    repoLink: "https://github.com/craks31/react-spa-demo",
    liveDemoLink: null,
  },
  {
    title: "RAG-based Doc Search",
    description:
      "PDF Q&A system with deterministic approach for document intelligence. Uses retrieval-augmented generation with serverless architecture for accurate, citation-backed answers.",
    techStack: [
      "Python",
      "AWS Lambda",
      "Bedrock",
      "RAG",
      "Vector DB",
      "Embeddings",
    ],
    status: "in-progress",
    repoLink: null,
    liveDemoLink: null,
  },
  {
    title: "Full Stack Test Suite MCP",
    description:
      "MCP-based framework for automated test suite generation. Leverages AI agents to analyze application specs and generate comprehensive test coverage.",
    techStack: ["TypeScript", "MCP", "AI Agents", "Test Automation"],
    status: "in-progress",
    repoLink: "https://github.com/craks31/fullstack-test-suite-mcp",
    liveDemoLink: null,
  },
  {
    title: "Cloud-Based Real-Time Traffic Monitoring",
    description:
      "Cloud-based traffic analysis system processing real-time and historical data. Big data pipeline built with Kafka for ingestion and Spark for distributed analytics.",
    techStack: ["Python", "Apache Kafka", "Apache Spark", "Big Data", "Cloud"],
    status: "completed",
    repoLink:
      "https://github.com/craks31/Cloud-based-Real-Time-Traffic-Monitoring",
    liveDemoLink: null,
  },
  {
    title: "College AI Chatbot",
    description:
      "Student chatbot application using NLP techniques including TF-IDF vectorization and Cosine similarity for intent matching, served via Flask web framework.",
    techStack: ["Python", "NLP", "TF-IDF", "Flask", "Cosine Similarity"],
    status: "completed",
    repoLink: "https://github.com/craks31/CollegeChatbot",
    liveDemoLink: null,
  },
  {
    title: "Quantum Safe Algorithm (XMSS)",
    description:
      "Implementation of XMSS (eXtended Merkle Signature Scheme) as a quantum-safe cryptographic algorithm for payment security in secure communications.",
    techStack: ["Python", "Cryptography", "XMSS", "Quantum Computing"],
    status: "completed",
    repoLink: "https://github.com/craks31/quantumsafexmssdemo",
    liveDemoLink: null,
  },
  {
    title: "Nine Men Morris Board Game",
    description:
      "Digital board game developed using Java and JavaFX, following software development life cycle and Agile methodologies with comprehensive testing.",
    techStack: ["Java", "JavaFX", "SDLC", "Agile"],
    status: "completed",
    repoLink: "https://github.com/craks31/NineMenMorrisDigitalBoardGame",
    liveDemoLink: null,
  },
];
