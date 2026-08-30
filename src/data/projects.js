const projects = [
  {
    id: 1,
    title: "Distributed API Rate Limiter",
    description:
      "A production-grade distributed API Rate Limiter built using Java, Spring Boot, Redis, PostgreSQL, and Redis Lua scripting.",
    shortDescription:
      "Production-grade distributed rate limiter using Token Bucket algorithm with Redis Lua scripting.",
    techStack: [
      "Java 17",
      "Spring Boot",
      "PostgreSQL",
      "Redis",
      "Lua",
      "Docker",
      "JUnit 5",
      "Mockito",
      "Testcontainers",
    ],
    tags: [
      "Distributed Systems",
      "Rate Limiting",
      "Redis",
      "Concurrency",
      "Backend",
      "Performance",
    ],
    github: "https://github.com/swarajborse/Api_Rate_Limiter",
    live: null,
    featured: true,
    highlights: [
      "Architected an API Rate Limiter using the Token Bucket algorithm",
      "Executed rate-limiting logic atomically inside Redis Lua scripts",
      "Designed the system to handle 1,000+ concurrent requests while preventing race conditions",
      "Implemented per-client rate limits through configurable REST APIs",
      "Migrated bucket state from PostgreSQL to Redis — improved throughput from 365 to 704 req/sec (~93% improvement)",
      "Reduced average latency from 255 ms to 123 ms (~52% reduction)",
      "Built a custom multithreaded benchmarking framework",
      "Achieved zero race conditions and zero HTTP errors during concurrent testing",
      "Dockerized the system using Docker Compose",
      "Added comprehensive testing using JUnit 5, Mockito, and Testcontainers",
    ],
    caseStudy: {
      problem:
        "Modern APIs need rate limiting to prevent abuse and ensure fair resource allocation. Existing solutions often rely on single-node in-memory counters, which don't scale across distributed deployments.",
      architecture:
        "Hybrid persistence architecture: PostgreSQL stores client configuration while Redis Hashes manage mutable bucket state. Redis Lua scripts ensure atomic operations across concurrent requests.",
      implementation:
        "Token Bucket algorithm implemented with Redis Lua scripting for atomic rate-limiting decisions. Per-client rate limits configured via REST APIs. Custom multithreaded benchmarking framework for validation.",
      performance:
        "Throughput improved from 365 req/sec to 704 req/sec (~93% improvement). Average latency reduced from 255 ms to 123 ms (~52% reduction). P95 latency of approximately 257 ms. Validated with 100 allowed / 900 rejected requests under concurrent load.",
      challenges: [
        "Ensuring atomicity of rate-limiting operations across distributed nodes",
        "Preventing race conditions with 1,000+ concurrent requests",
        "Migrating bucket state from PostgreSQL to Redis without downtime",
        "Designing configurable per-client rate limits via REST APIs",
      ],
    },
  },
  {
    id: 2,
    title: "Video Processing Queue",
    description:
      "An asynchronous, event-driven video processing system designed to decouple video uploads from resource-intensive FFmpeg processing.",
    shortDescription:
      "Event-driven video processing pipeline decoupling uploads from FFmpeg workers via Apache Kafka.",
    techStack: [
      "Java 21",
      "Spring Boot",
      "Apache Kafka",
      "PostgreSQL",
      "Spring Data JPA",
      "Hibernate",
      "AWS S3",
      "FFmpeg",
      "FFprobe",
      "Docker",
      "Docker Compose",
      "Maven",
    ],
    tags: [
      "Kafka",
      "Event-Driven Architecture",
      "Distributed Systems",
      "Video Processing",
      "AWS S3",
      "Backend",
    ],
    github: "https://github.com/swarajborse/video_processing_queue",
    live: null,
    featured: true,
    highlights: [
      "Architected an asynchronous video-processing pipeline using Apache Kafka",
      "Used Kafka with 3 partitions to decouple API requests from background processing",
      "Built an event-driven architecture connecting REST API, Kafka, PostgreSQL, S3, and FFmpeg workers",
      "Implemented durable job lifecycle management using PostgreSQL",
      "Hardened FFmpeg execution with 30-minute timeout, exit-code validation, and output verification",
      "Used isolated workspaces for video processing",
      "Measured approximately 0.23 seconds processing time for the test video",
      "Containerized the infrastructure using Docker Compose",
    ],
    caseStudy: {
      problem:
        "Video processing is resource-intensive and can block API responses. A synchronous approach doesn't scale for production workloads where uploads need to be accepted immediately while processing happens asynchronously.",
      architecture:
        "Event-driven architecture with Kafka as the message broker. REST API accepts uploads and publishes events. Kafka with 3 partitions distributes processing across FFmpeg workers. PostgreSQL tracks job lifecycle with status, progress, timestamps, and retry metadata.",
      implementation:
        "Apache Kafka decouples API layer from processing workers. FFmpeg workers consume from Kafka topics, process videos in isolated workspaces, and store results in AWS S3. PostgreSQL maintains durable job state with full lifecycle tracking.",
      performance:
        "Achieved approximately 0.23 seconds processing time for test video. Kafka partitions enable horizontal scaling of workers. Durable job state ensures no data loss during failures.",
      challenges: [
        "Decoupling synchronous uploads from asynchronous processing",
        "Managing FFmpeg process lifecycle with timeouts and error handling",
        "Ensuring durability of job state across system failures",
        "Coordinating multiple Kafka partitions for parallel processing",
      ],
    },
  },
  {
    id: 3,
    title: "Bank Management System",
    description:
      "A backend banking management system designed using Java and Spring Boot with REST APIs and relational database persistence.",
    shortDescription:
      "Backend banking system with customer management, transactions, and CRUD APIs.",
    techStack: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "Hibernate",
      "PostgreSQL",
      "REST APIs",
    ],
    tags: ["Spring Boot", "REST API", "CRUD", "Backend", "Database"],
    github: "https://github.com/swarajborse",
    live: null,
    featured: false,
    highlights: [
      "Customer management with CRUD operations",
      "Account creation and management",
      "Transaction management and history",
      "Database persistence with Spring Data JPA",
      "Exception handling and input validation",
    ],
  },
  {
    id: 4,
    title: "SahaSathi",
    description:
      "A hyperlocal platform designed to help senior citizens discover nearby activities, connect with people, and participate in community events.",
    shortDescription:
      "Hyperlocal social platform connecting senior citizens through activities, communities, and events.",
    techStack: [
      "Java 21",
      "Spring Boot",
      "React",
      "MySQL",
      "Firebase",
      "Tailwind CSS",
    ],
    tags: ["Social Impact", "Community", "Full Stack", "Web Application"],
    github: "https://github.com/swarajborse/SahaSathi_26",
    live: null,
    featured: false,
    highlights: [
      "Full-stack platform for senior citizen community engagement",
      "Firebase phone OTP authentication",
      "Activity and community management with CRUD operations",
      "Real-time chat and notifications",
      "Event calendar with month view",
      "Aadhaar-based age verification",
    ],
  },
  {
    id: 5,
    title: "Todo App – Spring Boot",
    description:
      "A Spring Boot based task management application demonstrating backend development fundamentals, REST APIs, database persistence, and CRUD operations.",
    shortDescription:
      "Server-rendered task management app with Spring Boot and Thymeleaf.",
    techStack: [
      "Java 17",
      "Spring Boot",
      "Thymeleaf",
      "Spring Data JPA",
      "MySQL",
      "Bootstrap",
    ],
    tags: ["Spring Boot", "REST API", "CRUD", "Backend", "Database"],
    github: "https://github.com/swarajborse/todo-app-springboot",
    live: null,
    featured: false,
    highlights: [
      "Task creation, completion toggle, and deletion",
      "Server-side rendering with Thymeleaf",
      "Database persistence via Spring Data JPA",
      "Responsive Bootstrap UI",
    ],
  },
];

export default projects;
