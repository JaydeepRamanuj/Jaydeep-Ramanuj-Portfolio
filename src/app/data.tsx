import { BsPersonFill } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { FaCode } from "react-icons/fa";
import { GiOvermind } from "react-icons/gi";
import { IoHome } from "react-icons/io5";

export const navItems = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Qualification", href: "#qualification" },
  { name: "Contact", href: "#contact" },
];

export type SkillType = {
  name: string;
  level?: number;
  icon: string;
};

export const PrimarySkills: Array<SkillType> = [
  { name: "React.js", level: 5, icon: "/techIcons/React.png" },
  { name: "JavaScript", level: 5, icon: "/techIcons/JavaScript.png" },
  { name: "Next.js", level: 4, icon: "/techIcons/Next.js.png" },
  { name: "Tailwind", level: 5, icon: "/techIcons/TailwindCSS.png" },
  { name: "TypeScript", level: 3, icon: "/techIcons/TypeScript.png" },
  { name: "HTML", level: 5, icon: "/techIcons/HTML5.png" },
  { name: "CSS", level: 5, icon: "/techIcons/CSS3.png" },
  { name: "Bootstrap", level: 4, icon: "/techIcons/Bootstrap.png" },
  { name: "SASS", level: 4, icon: "/techIcons/Sass.png" },
];

export const AdditionalToolsAndLibraries: Array<SkillType> = [
  { name: "Git & Github", level: 4, icon: "/techIcons/Git.png" },
  { name: "Node.js", level: 3, icon: "/techIcons/Node.js.png" },
  { name: "Express.js", level: 3, icon: "/techIcons/Express.png" },
  { name: "MongoDB", level: 3, icon: "/techIcons/MongoDB.png" },
  { name: "Firebase", level: 3, icon: "/techIcons/Firebase.png" },
  { name: "Redux", level: 4, icon: "/techIcons/Redux.png" },
  { name: "Recharts", level: 4, icon: "/techIcons/Recharts.png" },
  { name: "Shadcn", level: 3, icon: "/techIcons/Shadcn.png" },
  { name: "MUI", level: 3, icon: "/techIcons/MaterialUI.png" },
  { name: "Clerk", level: 3, icon: "/techIcons/Clerk.png" },
  { name: "Postman", level: 3, icon: "/techIcons/Postman.png" },
];

export const FamiliarAndExplored: Array<SkillType> = [
  { name: "Python", level: 3, icon: "/techIcons/Python.png" },
  { name: "MySQL", level: 3, icon: "/techIcons/MySQL.png" },
  { name: "C/C++", level: 4, icon: "/techIcons/Cpp.png" },
  { name: "Dart/Flutter", level: 3, icon: "/techIcons/Flutter.png" },
  { name: "Linux", level: 3, icon: "/techIcons/Linux.png" },
  { name: "Figma", level: 3, icon: "/techIcons/Figma.png" },
  { name: "WordPress", level: 4, icon: "/techIcons/WordPress.png" },
  { name: "Shopify", level: 3, icon: "/techIcons/Shopify.png" },
];

export type SideBarMenuType = {
  name: string;
  icon: React.ReactNode;
};

export const sideBarMenu: Array<SideBarMenuType> = [
  {
    name: "Home",
    icon: <IoHome />,
  },
  {
    name: "About",
    icon: <BsPersonFill />,
  },
  {
    name: "Skills",
    icon: <FaCode />,
  },
  {
    name: "Projects",
    icon: <CgWebsite />,
  },
  {
    name: "Mindset",
    // icon: <SiMinds />,
    icon: <GiOvermind />,
  },
];

export type ProjectsType = {
  title: string;
  description: string;
  img?: string;
  liveLink?: string;
  githubLink: string;
  tags: Array<string>;
};

export const projects: Array<ProjectsType> = [
  {
    title: "E-commerce app",
    description:
      "A full-featured online shopping platform built with Next.js, Firebase, Redux, and Clerk for authentication. Users can browse products by categories, add/update/remove items from cart, manage wishlist, and view detailed product pages with an Amazon-style UI. Authentication is handled via Clerk, allowing easy login and registration.",
    img: "/e-commerce-app.png",
    liveLink: "https://e-commerce-app-jaydeep-ramanujs-projects.vercel.app/",
    githubLink: "https://github.com/JaydeepRamanuj/e-commerce-app",
    tags: ["Next.js", "Firebase", "Clerk", "Redux", "TailwindCSS"],
  },

  {
    title: "Youtube Clone",
    description:
      "This YouTube Clone is built with React.js, Tailwind CSS, Context API, and the YouTube V3 API via RapidAPI. It features a Home Page for trending videos, a Search Results Page with real-time querying, a Video Page for watching content with related suggestions, and a Channel Page displaying creator info and their uploads.",
    img: "/youtube-clone.png",
    liveLink: "https://youtube-clone-jd.netlify.app/",
    githubLink: "https://github.com/JaydeepRamanuj/youtube-clone",
    tags: ["React.js", "YouTube v3 API", "ContextAPI", "TailwindCSS"],
  },
  {
    title: "Admin Dashboard",
    description:
      "A platform for comparing and finding affordable flights, as well as booking and purchasing tickets safely and easily in a few simple clicks.",
    img: "/admin-dashboard.png",
    liveLink: "https://admin-dashboard-jd.netlify.app/",
    githubLink: "https://github.com/JaydeepRamanuj/admin-dashboard",
    tags: ["React.js", "Recharts", "ContextAPI", "TailwindCSS"],
  },

  {
    title: "Flex Visulizer",
    description:
      "An interactive flexbox tool built using React.js, Shadcn/UI, and Context API which helps users learn and experiment with Flexbox visually. Users can  apply Flexbox properties using dropdowns and see how the layout behaves in real time. This project is a React-based upgrade of an earlier Vanilla JS version, aiming to make learning Flexbox easy and interesting",
    img: "/flex-visulizer.png",
    liveLink: "https://flexvisualizer.netlify.app/",
    githubLink: "https://github.com/JaydeepRamanuj/flex-visulizer",
    tags: ["React.js", "Shadcn", "ContextAPI"],
  },

  {
    title: "Mini Projects",
    description:
      "This project is a collection of small React.js projects/ features. It was an effort to practice and preserve reusable components / features.",
    img: "/mini-react-projects.png",
    liveLink: "https://mini-react-projects-jd.netlify.app/",
    githubLink: "https://github.com/JaydeepRamanuj/mini-react-projects",
    tags: ["React.js"],
  },
  {
    title: "Frontend step stones",
    description:
      "A curated collection of 25 mini web projects built using HTML, CSS, Vanilla JavaScript, and Tailwind CSS. This project showcases my journey through frontend development by exploring interactive UI elements, utilities, and visual experiments. Users can preview, explore, and edit each project via CodePen. Built with the purpose of hands-on learning, creativity, and continuous improvement.",
    img: "/frontend-step-stones.png",
    liveLink: "https://frontend-step-stones.vercel.app/",
    githubLink: "https://github.com/JaydeepRamanuj/frontend-step-stones",
    tags: ["HTML", "CSS", "Vanila JS", "TailwindCSS"],
  },
  {
    title: "Personal Portfolio",
    description:
      "A website to know little more about Me, my Projects and Skills. It shows both my technical side as well as mindset. Look for explored skills too, it holds some good gems.",
    img: "/portfolio.png",
    liveLink: "",
    githubLink: "https://github.com/JaydeepRamanuj/Jaydeep-Ramanuj-Portfolio",
    tags: ["Next.js", "TypeScript", "TailwindCSS"],
  },
];

export type QualificationType = {
  collageName: string;
  courseName: string;
  CGPA: number;
  passingYear: string;
};

export const qualifications: Array<QualificationType> = [
  {
    collageName: "Parul University",
    courseName: "M.Tech in Computer Engineering",
    CGPA: 8.72,
    passingYear: "Dec 2022",
  },
  {
    collageName: "C.U. Shah University",
    courseName: "B.Tech in Computer Engineering",
    CGPA: 7.35,
    passingYear: "Jan 2020",
  },
];

export type ExperienceCardType = {
  companyLogo: string;
  companyName: string;
  role: string;
  startDate: string;
  endDate: string;
  points: Array<string>;
};

export const experiences: Array<ExperienceCardType> = [
  {
    companyLogo: "/tops-technologies.png",
    companyName: "Tops Technologies",
    role: "Technical trainer",
    startDate: "Nov 2023",
    endDate: "Feb 2025",
    points: [
      "Conducted hands-on training for 70+ students in Web Designing using HTML5, CSS3, Bootstrap, Tailwind, JavaScript, jQuery, SASS/LESS, WordPress/Shopify and foundational programming with C, C++, and database basics using MySQL.",
      "Mentored students through real-world projects, focusing on UI design, responsive layouts and debugging.",
      "Delivered technical seminars and presentations to introduce web technologies and IT field to new students, showcasing strong communication and presentation skills. ",
    ],
  },
];
