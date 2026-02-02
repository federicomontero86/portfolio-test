import React from "react";
import { PiTestTube } from "react-icons/pi";
import { PiGraduationCap } from "react-icons/pi";
import { PiGear } from "react-icons/pi";
import { FaReact, FaShopify } from "react-icons/fa";
import wildOasisWebImg from "@/public/wild-oasis-web.png";
import wildOasisAdminPageImg from "@/public/wild-oasis-resort.png";
import fastReactPizzaImg from "@/public/fast-react-pizza.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Frontend Developer",
    location: "Ab4cus - Montevideo, UY (Remote)",
    description:
      "Worked as a front-end developer within a Scrum team, building new features for BAS Backoffice, a cryptocurrency exchange platform. The project involved component development and UI integrations using React and TypeScript. This was a contract role during May to July 2025.",
    icon: React.createElement(FaReact),
    date: "May 2025 - Jul 2025",
    techs: "React | TypeScript | Cypress",
  },
  {
    title: "Frontend Developer",
    location: "Sunshift - Montevideo, UY (Remote)",
    description:
      "Focused on developing new features for 'La Casa de Flopy,' a tourism website in Uruguay. My main activity involved front-end development using Shopify-Liquid. This was a freelance project during February and March 2025.",
    icon: React.createElement(FaShopify),
    date: "Feb 2025 - Mar 2025",
    techs: "HTML | CSS | JavaScript | Shopify",
  },
  {
    title: "Software Developer",
    location: "Cencosud SA - Montevideo, UY",
    description:
      "Working as part of the OMS Team from Marketplace Paris. My main activity was related to QA Development. This was a hybrid full-time position.",
    icon: React.createElement(PiTestTube),
    date: "Feb 2023 - May 2024",
    techs: "TypeScript | React | Nest.js | AWS | Kubernetes | New Relic",
  },
  {
    title:
      "Trainee - Digital Operations VCP DevOps Team General Electric Healthcare",
    location: "TATA Consultancy - Montevideo, UY",
    description:
      "I was part of the Digital Operations VCP DevOps Team, working for General Electric Healthcare. I worked on a full-time position.",
    icon: React.createElement(PiGear),
    date: "Aug 2022 - Feb 2023",
    techs: "SQL | PLSQL",
  },
  {
    title: "Graduated bootcamp - Hack Academy",
    location: "Montevideo, UY",
    description:
      "I graduated after 3 months of full-time dedication (+600hs). Full-stack development.",
    icon: React.createElement(PiGraduationCap),
    date: "Apr 2022 - Jul 2022",
    techs: "HTML | CSS | JavaScript | React | Node",
  },
] as const;

export const projectsData = [
  {
    title: "The Wild Oasis",
    description:
      "This project is about a Luxury Cabins Resort developed on Next.js framework.",
    tags: ["Next.js", "Context API", "Tailwind CSS", "Supabase"],
    imageUrl: wildOasisWebImg,
    url: "https://wildoasisweb.vercel.app/",
  },

  {
    title: "The Wild Oasis Admin Page",
    description:
      "This is the internal application used inside the resort to check in guests as they arrive.",
    tags: ["Styled Components", "React Query", "React Hook Form"],
    imageUrl: wildOasisAdminPageImg,
    url: "https://thewildoasisadminpage.vercel.app",
  },
  {
    title: "Fast React Pizza",
    description:
      "This application allows customers to order pizzas and get them delivered to their home.",
    tags: ["React Router", "Redux", "Tailwind CSS"],
    imageUrl: fastReactPizzaImg,
    url: "https://fastreactpizzaweb.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "React Router",
  "Context API",
  "Redux",
  "React Query",
  "React Hook Form",
  "Tailwind CSS",
  "Styled Components",
  "Bootstrap",
  "Nest.js",
  "Node.js",
  "NPM",
  "Express",
  "MongoDB",
  "Mongoose",
  "TypeORM",
  "PostgreSQL",
  "Swagger",
  "Postman",
  "Supabase",
  "AWS",
  "Docker",
  "Kubernetes",
  "New Relic",
  "Git",
  "Jira",
] as const;
