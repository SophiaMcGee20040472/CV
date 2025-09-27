import {
  AtSignIcon,
  StarIcon,
  TimeIcon,
  ChatIcon,
  EmailIcon,
} from "@chakra-ui/icons";
import { FaEnvelope, FaLinkedin, FaPhone, FaBook } from "react-icons/fa";

export const iconMap = {
  AtSignIcon: <AtSignIcon mr={2} />,
  FaBook: <FaBook style={{ marginRight: "8px" }} />,
  StarIcon: <StarIcon mr={2} />,
  TimeIcon: <TimeIcon mr={2} />,
  ChatIcon: <ChatIcon mr={2} />,
  EmailIcon: <EmailIcon mr={2} />,
  FaEnvelope: <FaEnvelope style={{ marginRight: "8px" }} />,
  FaLinkedin: <FaLinkedin style={{ marginRight: "8px" }} />,
  FaPhone: <FaPhone style={{ marginRight: "8px" }} />,
};

export const navItems = [
  {
    name: "HOME PAGE",
    icon: "AtSignIcon",
    path: "/home",
  },
  {
    name: "CURRENT EDUCATION",
    icon: "FaBook",
    path: "/education",
  },
  {
    name: "TECHNICAL SKILLS",
    icon: "StarIcon",
    path: "/skills",
  },
  {
    name: "WORK EXPERIENCE",
    icon: "TimeIcon",
    path: "/experience",
  },
  {
    name: "INTERESTS / HOBBIES",
    icon: "ChatIcon",
    path: "/hobbies",
  },
  {
    name: "CONTACT ME",
    icon: "EmailIcon",
    path: "/contact",
  },
];

export const softSkillsData = [
  {
    name: "Communication",
    description: "Clear and effective communication with teams and stakeholders.",
  },
  {
    name: "Collaboration",
    description: "Team player with experience in agile and cross-functional teams.",
  },
  {
    name: "Problem Solving",
    description: "Creative and analytical approach to solving challenges.",
  },
  {
    name: "Adaptability",
    description: "Quick to learn and adapt to new tools and workflows.",
  },
  {
    name: "Empathy",
    description: "User-focused mindset to create intuitive and inclusive experiences.",
  },
  {
    name: "Time Management",
    description: "Efficiently prioritize tasks and meet deadlines.",
  },
];

export const contacts = [
  {
    label: "Email Address",
    value: "sophiamcgee90@gmail.com",
    href: "mailto:sophiamcgee90@gmail.com",
    icon: "FaEnvelope",
  },
  {
    label: "LinkedIn Profile",
    value: "linkedin.com/in/sophiamcgee90/",
    href: "https://www.linkedin.com/in/sophiamcgee90/",
    icon: "FaLinkedin",
  },
  {
    label: "Phone Number",
    value: "+353 838760848",
    href: "tel:+353838760848",
    icon: "FaPhone",
  },
];

export const educationData = {
  higherDiploma: {
    title: "Higher Diploma in Computer Science",
    institution:
      "SETU (South East Technological University) – Waterford, Ireland",
    duration: "January 2021 – April 2023",
    grade: "1:1 First Class Honours",
    description:
      "An intensive conversion course covering full-stack development, cloud technologies, and collaborative problem-solving.",
    coreLearning: {
      software: [
        "Java (OOP, Processing)",
        "Python (automation, Raspberry Pi)",
        "Web (React, Node.js, Play Framework)",
        "Mobile (Kotlin, Ionic)",
        "Bash/Linux",
      ],
      systems: [
        "Databases (MySQL, MongoDB)",
        "Cloud (AWS, Heroku)",
        "CI/CD & IaC",
        "Git/GitLab",
        "Agile/testing",
      ],
    },
    projects: [
      "WeatherTop: Node.js/Hapi weather app (MVC, APIs).",
      "OtterDam: Java brick-breaker game (OOP, Processing).",
      "Hogwarts DB: MySQL ER-modeled database.",
      "React Film App: CRUD movie database (frontend state).",
      "IoT: Raspberry Pi + Python + Blynk integration.",
    ],
  },
  bachelor: {
    title: "Bachelor of Arts in Visual Communication & Design",
    institution: "Waterford Institute of Technology – Waterford, Ireland",
    duration: "September 2009 – August 2013",
    grade: "2:1 Upper Second Class Honours",
    description:
      "Creative degree in UX/UI, graphic design, and interactive media.",
    skills: [
      "UX/UI: Personas, wireframes, prototyping.",
      "Visual Design: Typography, branding, layout.",
      "Interactive Media: Motion graphics, HTML/CSS.",
      "Client Collaboration: Requirements, iterative solutions.",
      "Tools: Adobe Suite, Figma, XD.",
    ],
  },
  certifications: [
    "Oracle SQL Certification",
    "Red Hat System Administration I/II/III (RH124/RH134/RH254)",
    "Red Hat OpenShift I: Containers & Kubernetes (DO180)",
    "Red Hat Linux Automation with Ansible (RH294)",
  ],
  synergy: [
    {
      title: "🎨 Design Thinking",
      text: "Empathize with users; blend usability and aesthetics.",
    },
    {
      title: "💻 Technical Implementation",
      text: "Translate concepts into code with modern practices.",
    },
    {
      title: "🤝 Collaborative Problem-Solving",
      text: "Bridge design/engineering for cohesive outcomes.",
    },
  ],
  closing:
    '"Combining technical expertise with creative design thinking to build exceptional digital experiences."',
};

export const experienceData = {
  mainRoles: [
    {
      title: "Associate Software Developer",
      company: "Charles River Laboratories (Remote)",
      period: "Jan 2023 – Sept 2025",
      responsibilities: [
        "Built responsive frontend (React/Next.js/TypeScript/Chakra UI) from Figma designs.",
        "Integrated with Node.js RESTful APIs.",
        "Developed WCAG-compliant UI components.",
        "Implemented Jest testing + Storybook docs.",
        "Collaborated with cross-functional teams.",
      ],
    },
    {
      title: "UI & UX Engineer Intern",
      company: "The Walton Institute, Waterford, Ireland",
      period: "Jun 2022 – Dec 2022",
      responsibilities: [
        "Developed Angular/HTML5/CSS3/SASS web/mobile apps.",
        "Translated wireframes into production-ready components.",
        "Designed accessible, performant interfaces.",
        "Created workflows/prototypes in Adobe XD.",
      ],
    },
  ],
  otherRoles: [
    [
      "Retail Manager",
      "Front Desk Receptionist",
      "Accounts Payable & Office Administrator",
    ],
    [
      "Financial Business Manager",
      "Front Desk Receptionist / Administration",
      "Administrative & Reception Assistant",
    ],
  ],
};

export const hobbies = [
  {
    title: "Graphic Design",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm30Eecq4nJMMpyMfZu5K7KcikgpijeuzUmA&s",
    list: [
      "Photoshop",
      "Poster Design",
      "Typography",
      "Calligraphy",
      "Illustration",
    ],
  },
  {
    title: "Adventure",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVmlM4cOwkqa95XuYml6OFgbn4gYHok96R1Q&s",
    list: ["Europe Trips", "Road Trips", "Beaches", "Camping", "City Breaks"],
  },
  {
    title: "Board Games",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZI7peOv1ACSm__GepXGsH1k9AJqpmPcvKCw&s",
    list: ["Monopoly", "Scrabble", "Chess", "Checkers", "Poker"],
  },
  {
    title: "Escape Rooms",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwGQOwME0CfB-gg32R0sagoXMWkIDS64HU9w&s",
    list: [
      "Mystery Puzzles",
      "Timed Challenges",
      "Teamwork",
      "Hidden Clues",
      "Logic Games",
    ],
  },
  {
    title: "Bouldering",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU9Tzq24xA8VABmzPFVF9zEP8ZBhoXvPxqcw&s",
    list: [
      "Indoor Walls",
      "Strength Training",
      "Climb Technique",
      "Safety Skills",
    ],
  },
  {
    title: "Singing",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtkbbHs0sJY-goFvlkhofkZl1mEVSbsznsBQ&s",
    list: [
      "Jazz",
      "Pop Music",
      "Musical Theatre",
      "Karaoke Nights",
      "Competitions",
    ],
  },
  {
    title: "VR Gaming",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlNhDIzOaGVaMuJGhTgcbLtVKEmCA4tFm4lA&s",
    list: [
      "Action Games",
      "Simulation",
      "Zombie Games",
      "Multiplayer",
      "Immersive",
    ],
  },
  {
    title: "Axe Throwing",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwGQOwME0CfB-gg32R0sagoXMWkIDS64HU9w&s",
    list: [
      "Safety Training",
      "Target Practice",
      "Competitions",
      "Strength & Focus",
      "Fun with Friends",
    ],
  },
];

export const skillsData = {
  pageTitle: "Technical Skills",
  pageDescription: "Technologies, tools, and methodologies I work with:",
  categories: [
    {
      title: "Frontend & UI Development",
      items: [
        { label: "Languages", value: "JavaScript (ES6+), TypeScript" },
        {
          label: "Frameworks",
          value: "React, Next.js, Angular, Vue.js, Svelte",
        },
        {
          label: "UI Libraries",
          value: "Chakra UI, Material-UI, Tailwind CSS",
        },
        {
          label: "Styling",
          value: "CSS3, SASS, CSS Modules, Styled Components",
        },
        { label: "Design Tools", value: "Figma, Adobe XD, Adobe Suite" },
        { label: "Accessibility", value: "WCAG 2.1" },
        { label: "Testing", value: "Jest, React Testing Library, Cypress" },
      ],
    },
    {
      title: "Backend & Databases",
      items: [
        { label: "Languages/Runtimes", value: "Node.js, Python" },
        { label: "Databases", value: "PostgreSQL, MySQL, MongoDB, Firebase" },
        { label: "APIs", value: "RESTful, GraphQL" },
        { label: "DevOps/Cloud", value: "Docker, AWS, Vercel, GitHub Actions" },
        { label: "Security", value: "OAuth2, JWT" },
      ],
    },
    {
      title: "DevOps & Collaboration",
      items: [
        { label: "CI/CD", value: "GitHub Actions, GitLab CI" },
        { label: "Cloud", value: "AWS, Azure, Google Cloud" },
        { label: "Collaboration", value: "Agile/Scrum, Jira, Trello" },
        { label: "Documentation", value: "Markdown, Swagger" },
      ],
    },
    {
      title: "AI/ML & Data",
      items: [
        { label: "AI Models", value: "ChatGPT, Gemini, Mistral, Claude" },
        { label: "AI Assistants", value: "GitHub Copilot, CodeWhisperer" },
        { label: "Frameworks", value: "TensorFlow" },
      ],
    },
  ],
  additionalSkills: [
    { label: "CS Fundamentals", value: "Algorithms, Data Structures, OOP" },
    { label: "Graphic Design", value: "Adobe Creative Suite" },
    { label: "Data-Driven Design", value: "A/B Testing, Analytics" },
  ],
};
