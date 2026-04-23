export type Skill = {
  name: string;
  level?: number;
};

export type SkillCategory = {
  category: string;
  skills: Skill[];
};

export const skills: SkillCategory[] = [
  {
    category: "AI & Generative AI",
    skills: [
      { name: "Agentic AI Frameworks" },
      { name: "RAG Pipelines" },
      { name: "Vector Search & Embeddings" },
      { name: "LLM APIs" },
      { name: "Model Context Protocol (MCP)" },
      { name: "Amazon Bedrock" },
      { name: "Multi-Agent Systems" },
      { name: "Autonomous Testing" },
      { name: "Prompt Engineering" },
      { name: "AI-Fueled Coding (AIFC)" },
    ],
  },
  {
    category: "BackEnd / API Development",
    skills: [
      { name: "Java (8/11/17/21)" },
      { name: "Spring Boot" },
      { name: "Spring Batch" },
      { name: "Node.js" },
      { name: "Hibernate" },
      { name: "Apache Kafka" },
      { name: "Spring JPA" },
      { name: "Microservices" },
      { name: "Spring REST" },
      { name: "Spring Security" },
      { name: "Spring WebFlux / Reactor" },
      { name: "Apache Camel" },
      { name: "Fast API" },
      { name: "Flask" },
      { name: "Redis" },
      { name: "Resilience4J" },
      { name: "Spring Cloud Gateway" },
      { name: "OAuth2 / JWT" },
      { name: "myBatis" },
      { name: "Jasper Reports" },
    ],
  },
  {
    category: "FrontEnd Development",
    skills: [
      { name: "React.js" },
      { name: "Angular (11/17)" },
      { name: "Next.js" },
      { name: "HTML & CSS" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "RxJS" },
      { name: "Figma" },
      { name: "jQuery" },
      { name: "Apache FTL" },
    ],
  },
  {
    category: "DevOps & Cloud",
    skills: [
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "Jenkins" },
      { name: "Git" },
      { name: "AWS (EC2, S3, ECS, Lambda, CloudWatch, Route 53, VPC)" },
      { name: "Azure (Key Vault, AZ-900)" },
      { name: "Terraform" },
      { name: "GitHub Actions" },
      { name: "OpenShift" },
      { name: "ELK Stack" },
      { name: "Splunk" },
      { name: "Dynatrace" },
      { name: "Sonar" },
      { name: "Maven" },
      { name: "Gradle" },
      { name: "Vercel" },
      { name: "Mulesoft" },
      { name: "API Gateway" },
      { name: "Eureka" },
    ],
  },
  {
    category: "Data Engineering & ML",
    skills: [
      { name: "Python" },
      { name: "Apache Spark" },
      { name: "Big Data Hadoop" },
      { name: "Apache Airflow" },
      { name: "Machine Learning" },
      { name: "NLP" },
      { name: "Data Analysis" },
      { name: "MATLAB" },
    ],
  },
  {
    category: "SQL & Databases",
    skills: [
      { name: "Oracle" },
      { name: "MySQL" },
      { name: "MariaDB" },
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "DynamoDB" },
      { name: "Cassandra" },
      { name: "MS SQL Server" },
    ],
  },
  {
    category: "QA & Testing",
    skills: [
      { name: "JUnit" },
      { name: "Mockito" },
      { name: "Spock / Groovy" },
      { name: "Playwright" },
      { name: "Karate" },
      { name: "Cucumber / Gherkin (BDD)" },
      { name: "Jasmine / Karma" },
      { name: "Postman" },
      { name: "Integration Testing" },
      { name: "TDD" },
    ],
  },
  {
    category: "Domain & Business",
    skills: [
      { name: "Healthcare" },
      { name: "Insurance" },
      { name: "Capital Markets" },
      { name: "Telecommunication" },
      { name: "Retail" },
      { name: "ECommerce" },
    ],
  },
  {
    category: "Blockchain & IoT",
    skills: [
      { name: "Blockchain" },
      { name: "Solidity" },
      { name: "IoT" },
      { name: "Golang" },
    ],
  },
];

export const techCompetency = {
  category: "Tech Competency",
  skills: [
    { name: "BackEnd API Development", level: 99 },
    { name: "BackEnd Batch Processing", level: 95 },
    { name: "AI & Generative AI", level: 80 },
    { name: "Data Structures & Algorithms", level: 75 },
    { name: "DevOps & Cloud", level: 75 },
    { name: "System Design & Architecture", level: 75 },
    { name: "SQL & Databases", level: 70 },
    { name: "QA & Testing", level: 70 },
    { name: "FrontEnd UI Development", level: 65 },
    { name: "Data Engineering & ML", level: 65 },
    { name: "Blockchain & IoT", level: 60 },
    { name: "Electronics & Embedded Systems", level: 50 },
  ],
};
