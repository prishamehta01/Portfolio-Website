export const personalInfo = {
  name: "Prisha Mehta",
  title: "Software Engineer Intern | Backend & AI Specialist",
  taglines: [
    "Backend Engineering with Java & Spring Boot",
    "Building Intelligent AI & Computer Vision Systems",
    "Centralized Log Analytics & Observability",
    "High-Performance System Architecture"
  ],
  bio: "Software Engineer Intern with hands-on experience developing robust backend systems using Java and Spring Boot, log analysis platforms with OpenSearch, and AI/Computer Vision solutions. Passionate about clean architecture, DSA, and building scalable production software.",
  location: "Bengaluru, India",
  email: "mehtaprisha99@gmail.com",
  phone: "+91 84314 19443",
  github: "https://github.com/prishamehta01",
  linkedin: "https://linkedin.com/in/prisha-mehta-a549b8259",
  twitter: "#",
  resumeUrl: "/PrishaMehtaResume.pdf",
  avatar: "/images/avatar.png",
  availableForHire: true,
  yearsOfExperience: 1,
  projectsCompleted: 8,
  codeCommits: "1,200+",
  cgpa: "9.4 CGPA"
};

export const aboutData = {
  summary: "I specialize in backend engineering using Java and Spring Boot, building REST APIs, relational databases, and centralized log processing tools. In addition to enterprise backend systems, I build end-to-end AI/computer vision applications and automated testing pipelines.",
  highlights: [
    { title: "Backend Systems", desc: "Java, Spring Boot, REST APIs, JPA/Hibernate, MySQL & OpenSearch." },
    { title: "AI & Computer Vision", desc: "YOLOv5 drone inference, semantic search with pgvector & multi-agent AI." },
    { title: "Log Processing & Observability", desc: "Built enterprise log search platform reducing reliance on external vendors." },
    { title: "Test Automation", desc: "Automated 600+ regression test cases using Playwright." }
  ],
  stats: [
    { label: "B.E. CSE CGPA", value: "9.4" },
    { label: "Regression Tests Automated", value: "600+" },
    { label: "Detection Accuracy (YOLOv5)", value: "90%" },
    { label: "Hackathon Winner", value: "1st Place" }
  ]
};

export const skillsData = [
  { name: "Java", level: 95, category: "Backend", icon: "Code2", popular: true },
  { name: "Spring Boot & REST APIs", level: 92, category: "Backend", icon: "Server", popular: true },
  { name: "Python", level: 90, category: "AI & ML", icon: "Terminal", popular: true },
  { name: "SQL (MySQL & PostgreSQL)", level: 88, category: "Backend", icon: "Database", popular: true },
  { name: "OpenSearch & Log Processing", level: 85, category: "Backend", icon: "Search", popular: true },
  { name: "Computer Vision & YOLOv5", level: 86, category: "AI & ML", icon: "Sparkles", popular: true },
  { name: "pgvector & Semantic Search", level: 84, category: "AI & ML", icon: "Cpu", popular: false },
  { name: "RabbitMQ & Asynchronous Workers", level: 82, category: "Backend", icon: "Box", popular: false },
  { name: "JavaScript / TypeScript", level: 85, category: "Frontend", icon: "FileCode", popular: true },
  { name: "React", level: 82, category: "Frontend", icon: "Palette", popular: false },
  { name: "Playwright Test Automation", level: 88, category: "DevOps & Tools", icon: "CheckSquare", popular: true },
  { name: "Docker & Git", level: 85, category: "DevOps & Tools", icon: "GitBranch", popular: false }
];

export const projectsData = [
  {
    id: "recall-knowledge-platform",
    title: "Recall — Personalized Knowledge & Memory Platform",
    category: "Full Stack & AI",
    shortDesc: "Personalized memory platform with Chrome extension, hybrid full-text & pgvector semantic search, and async RabbitMQ pipeline.",
    image: "/images/hyper_flow.png",
    stars: 128,
    forks: 24,
    demoUrl: "#",
    githubUrl: "https://github.com/prishamehta01/recall",
    featured: true,
    tags: ["Java", "Spring Boot", "React", "TypeScript", "PostgreSQL", "pgvector", "RabbitMQ"],
    details: {
      overview: "Recall is a personalized knowledge platform paired with a Chrome extension for saving webpages, selected text snippets, and notes. It empowers users to instantly retrieve saved information through semantic and keyword-based search.",
      challenges: "Engineered an asynchronous non-blocking worker pipeline using RabbitMQ and Spring Boot to extract, summarize, embed, and relate content seamlessly.",
      keyFeatures: [
        "Chrome extension integration for one-click saving of web pages & notes",
        "Asynchronous processing pipeline powered by RabbitMQ & Spring Boot workers",
        "Hybrid retrieval combining PostgreSQL full-text search & pgvector semantic embeddings",
        "Personalized ranking using user interaction signals and context windowing"
      ]
    }
  },
  {
    id: "aquasentinel-ai",
    title: "AquaSentinel — AI Coastal Trash Detection System",
    category: "AI & ML",
    shortDesc: "Drone-integrated computer vision system achieving 90% accuracy in detecting coastal garbage from live video feeds.",
    image: "/images/vision_ops.png",
    stars: 215,
    forks: 42,
    demoUrl: "#",
    githubUrl: "https://github.com/prishamehta01/aquasentinel",
    featured: true,
    tags: ["Python", "YOLOv5", "Computer Vision", "Google Colab", "Drone Prototype"],
    details: {
      overview: "AquaSentinel is an AI-powered environmental monitoring solution that processes full-frame drone video footage to detect coastal plastic and garbage pollution in real time.",
      challenges: "Trained and fine-tuned YOLOv5 models on Beach Garbage-2 and SEANOE datasets to achieve high 90% detection accuracy under varying lighting and water glare conditions.",
      keyFeatures: [
        "Real-time object detection model with 90% accuracy on coastal datasets",
        "End-to-end video inference pipeline generating annotated output maps for pollution zones",
        "Hardware integration prototype with aerial data capture drone system",
        "Automated coastal region risk assessment and reporting"
      ]
    }
  },
  {
    id: "student-info-system",
    title: "Student Information System (Backend)",
    category: "Backend Systems",
    shortDesc: "Spring Boot backend architecture for student management, course registration, authentication, and relational data handling.",
    image: "/images/nexus_cloud.png",
    stars: 84,
    forks: 16,
    demoUrl: "#",
    githubUrl: "https://github.com/prishamehta01/student-info-system",
    featured: false,
    tags: ["Java", "Spring Boot", "REST APIs", "MySQL", "JPA/Hibernate"],
    details: {
      overview: "A enterprise-ready REST backend application engineered with Spring Boot for managing students, departments, colleges, and secure user authentication.",
      challenges: "Designing normalized relational schemas in MySQL with strict JPA/Hibernate validations to ensure data consistency under high concurrent request loads.",
      keyFeatures: [
        "Comprehensive RESTful CRUD endpoints for students, courses, and department administration",
        "Secure user registration, authentication, and session handling",
        "OR Mapping with Spring Data JPA / Hibernate for efficient data persistence",
        "Relational schema validation and automated integration tests"
      ]
    }
  }
];

export const experienceData = [
  {
    role: "Software Engineering Intern",
    company: "Checkpoint Systems",
    period: "Jan 2026 - Present",
    location: "Bengaluru, India",
    description: "Developing production backend log analysis tools, L2/L3 support workflows, and test automation suites.",
    achievements: [
      "Engineered an in-house log analysis platform using Java, Spring Boot, REST APIs, and OpenSearch to provide centralized log search for QA/pre-prod environments, reducing Datadog observability costs.",
      "Built log search and troubleshooting workflows for L2/L3 support teams, accelerating log tracing and incident investigation.",
      "Automated 600+ of 3,000+ manual regression test cases (20% of the entire suite) using Playwright for enterprise inventory management systems."
    ],
    technologies: ["Java", "Spring Boot", "REST APIs", "OpenSearch", "Playwright", "Log Processing"]
  }
];

export const educationData = [
  {
    degree: "B.E. in Computer Science & Engineering (B.E. CSE)",
    institution: "RNS Institute of Technology",
    period: "2022 - 2026",
    details: "CGPA: 9.4 / 10. Outstanding academic performance. Coursework in Data Structures & Algorithms, Object-Oriented Programming, Relational Databases, Web Tech, and Software Engineering."
  },
  {
    degree: "Senior Secondary (PUC - XII)",
    institution: "Surana Independent PU College",
    period: "2020 - 2022",
    details: "Score: 96.5%. Focused on Physics, Chemistry, Mathematics, and Computer Science."
  },
  {
    degree: "Secondary School (CBSE - X)",
    institution: "St. Sophia Convent High School",
    period: "2020",
    details: "Score: 91.6% (CBSE X Board)."
  }
];

export const achievementsData = [
  {
    title: "1st Place - S.U.I.T.S Hackathon",
    desc: "Achieved 1st place in departmental DSA hackathon organized by Adroit & CSE department."
  },
  {
    title: "Certificate of Merit",
    desc: "Recognized for outstanding academic achievement by securing the 3rd highest SGPA among 200+ branch students."
  },
  {
    title: "Runner-Up - YESIST12 IEEE Open Project Expo 2025",
    desc: "Secured Runner-Up position out of 151 competing teams at IEEE Open Project Expo."
  }
];
