export const portfolioData = {
  personal: {
    name: "Sree Tharshan S",
    title: "Backend Developer & Full-Stack Engineer",
    tagline: "Proficient in Java, Spring Boot, RESTful APIs & React.js Integration",
    location: "Nagercoil, Tamil Nadu, India",
    email: "sreetharshans@gmail.com",
    phone: "+91 8903988532",
    profileImage: "/profile.png",
    heroProfileImage: "/heroProfile.png",
    resumePdf: "/Sree_Tharshan_S_Resume.pdf",
    summary:
      "Final Year Electronics and Communication Engineering student with a strong interest in Software Engineering and Java Full Stack Development. Hands-on experience building web applications using Java, Spring Boot, REST APIs, React, MySQL, and MongoDB. Seeking opportunities as a Java Developer, Java Backend Developer, or Full Stack Developer.",
    socials: {
      github: "https://github.com/sreetharshanS",
      linkedin: "https://www.linkedin.com/in/sree-tharshan-s/",
      leetcode: "https://leetcode.com/u/sreetharshan1639/",
    },
  },
  education: {
    institution: "St Xavier's Catholic College of Engineering",
    location: "Nagercoil, Tamil Nadu",
    degree: "B.E. in Electronics and Communication Engineering",
    cgpa: "8.4 / 10.0",
    period: "Jun 2023 – Present",
  },
  skills: [
    {
      category: "Backend & Systems",
      items: [
        { name: "Java", icon: "Code2" },
        { name: "Spring Boot", icon: "Server" },
        { name: "Spring JPA", icon: "Layers" },
        { name: "REST APIs", icon: "Cpu" },
        { name: "Microservices", icon: "Boxes" },
        { name: ".NET Framework", icon: "Code" },
        { name: "ADO.NET", icon: "Database" },
      ]
    },
    {
      category: "Databases & Optimization",
      items: [
        { name: "SQL Server", icon: "Database" },
        { name: "MySQL", icon: "Database" },
        { name: "MongoDB", icon: "Database" },
        { name: "SQL Query Tuning", icon: "Zap" },
        { name: "Transaction Logic", icon: "Repeat" },
      ]
    },
    {
      category: "Frontend & Web",
      items: [
        { name: "React.js", icon: "Globe" },
        { name: "Angular", icon: "Layout" },
        { name: "JavaScript (ES6+)", icon: "FileCode" },
        { name: "HTML5 & CSS3", icon: "Layout" },
        { name: "Tailwind CSS", icon: "Palette" },
      ]
    },
    {
      category: "Engineering Fundamentals & Tools",
      items: [
        { name: "Data Structures & Algorithms", icon: "Cpu" },
        { name: "OOP Principles", icon: "Box" },
        { name: "Git & GitHub", icon: "GitBranch" },
        { name: "Postman", icon: "Send" },
        { name: "Docker (Basic)", icon: "Container" },
      ]
    }
  ],
  experience: [
    {
      company: "Larsen & Toubro (L&T)",
      role: "Full Stack Developer Intern",
      period: "Dec 2025 – Jan 2026",
      location: "Remote / On-site",
      highlights: [
        "Engineered .NET REST APIs and optimized SQL database queries, reducing system latency by 25%.",
        "Integrated Angular components via ADO.NET and tuned transaction logic, boosting data throughput by 30%.",
        "Collaborated with senior engineers to refactor core EDRC enterprise backend workflows, decreasing request processing time by 25%."
      ],
      skills: [".NET", "ADO.NET", "SQL Server", "Angular", "REST APIs", "SQL Tuning"]
    },
    {
      company: "Agile Tribers",
      role: "Frontend Developer Intern",
      period: "Jun 2025 – Jul 2025",
      location: "Remote / On-site",
      highlights: [
        "Built 15+ reusable React.js components, accelerating feature delivery timelines by 20%.",
        "Converted Figma wireframes into responsive web interfaces with 100% cross-browser compatibility.",
        "Partnered in agile teams to streamline REST API consumption and state management across 4+ core views."
      ],
      skills: ["React.js", "JavaScript", "Figma", "REST API", "Responsive Design"]
    }
  ],
  projects: [
    {
      id: "student-automation",
      title: "College Student Automation System",
      subtitle: "Full-Stack Enterprise Management Platform",
      tech: ["Java", "Spring Boot", "React.js", "SQL"],
      description:
        "Full-stack web application to manage student records, attendance, and academic results with high-performance REST APIs and optimized SQL data workflows.",
      githubUrl: "https://github.com/sreetharshanS",
      badgeText: "Full Stack"
    },
    {
      id: "edrc-enterprise",
      title: "EDRC Enterprise Module (L&T)",
      subtitle: "Backend Transaction & Query Optimization",
      tech: [".NET", "ADO.NET", "SQL Server", "Angular"],
      description:
        "Developed enterprise backend modules with optimized SQL database interactions, reducing API response time by 20% and tuning multi-step transaction handling.",
      githubUrl: "https://github.com/sreetharshanS",
      badgeText: "L&T Enterprise"
    }
  ],
  achievements: [
    {
      title: "25% Latency Reduction",
      description: "SQL Query & Backend Optimization at Larsen & Toubro",
      stat: "25% ↓"
    },
    {
      title: "30% Throughput Boost",
      description: "ADO.NET & Transaction Logic Tuning",
      stat: "30% ↑"
    },
    {
      title: "15+ React Components",
      description: "Reusable UI library accelerating sprint deliveries by 20%",
      stat: "15+"
    },
    {
      title: "8.4 CGPA Rank",
      description: "B.E. Electronics & Communication Engineering",
      stat: "8.4"
    }
  ]
};
