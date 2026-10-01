// Single source of truth for the portfolio's content.
// Edit this file to update text, projects, experience or links.

import punctivaImg from "@/public/assets/work/punctiva.webp";
import billexImg from "@/public/assets/work/billex.webp";
import farmgateImg from "@/public/assets/work/farmgate.webp";
import contractorproImg from "@/public/assets/work/contractorpro.webp";
import acesImg from "@/public/assets/work/aces-schools.webp";
import smartechImg from "@/public/assets/work/smartech.webp";
import zaksImg from "@/public/assets/work/zaks-foundation.webp";
import aisjeedImg from "@/public/assets/work/aisjeed.webp";
import poloImg from "@/public/assets/work/polo-club.webp";
import acruxImg from "@/public/assets/work/acrux.webp";
import ganjalwaImg from "@/public/assets/work/ganjalwa.webp";
import alsamImg from "@/public/assets/work/al-sam.webp";
import lesMaisonImg from "@/public/assets/work/les-maison.webp";
import naslubImg from "@/public/assets/work/naslub.webp";
import seedImg from "@/public/assets/work/seed-portal.webp";
import emsImg from "@/public/assets/work/employee-management.webp";
import continentalImg from "@/public/assets/work/continental-facilities.webp";
import portfolioImg from "@/public/assets/work/portfolio.webp";

export const profile = {
  name: "Abdulmajeed Okaka Jimoh",
  shortName: "Abdulmajeed",
  role: "Software Engineer",
  location: "Abuja, Nigeria",
  timeZone: "Africa/Lagos",
  email: "jimohabdulmajeed9@gmail.com",
  phone: "+234 816 725 6424",
  phoneHref: "tel:+2348167256424",
  cv: "/Abdulmajeed_Jimoh_FullStack_Developer_CV.pdf",
  site: "https://abdulmajeed-portfolio.vercel.app",
  company: "Thermolinks Concepts",
};

export const navLinks = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const socials = [
  { id: "github", label: "GitHub", href: "https://github.com/jimohabdulmajeed" },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abdulmajeed-okaka-jimoh-485327261",
  },
  { id: "x", label: "X (Twitter)", href: "https://x.com/Abdulmajeed6424" },
  { id: "youtube", label: "YouTube", href: "https://youtube.com/@jimohabdulmajeed729" },
];

export const heroWords = ["fast.", "accessible.", "beautiful.", "built to last."];

export const stats = [
  { value: 5, suffix: "+", label: "Years of experience" },
  { value: 20, suffix: "+", label: "Projects delivered" },
  { value: 8, suffix: "+", label: "Technologies mastered" },
  { value: 9, suffix: "", label: "Certifications earned" },
];

// `icon` keys map to components in components/TechIcon.jsx
export const toolbox = [
  {
    group: "Frontend",
    items: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "next" },
      { name: "TypeScript", icon: "ts" },
      { name: "JavaScript", icon: "js" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "HTML5", icon: "html" },
      { name: "CSS3", icon: "css" },
    ],
  },
  {
    group: "Backend & data",
    items: [
      { name: "Node.js", icon: "node" },
      { name: "Express", icon: "express" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "SQL", icon: "sql" },
    ],
  },
  {
    group: "CMS & design",
    items: [
      { name: "WordPress", icon: "wordpress" },
      { name: "Figma", icon: "figma" },
    ],
  },
];

export const services = [
  {
    icon: "code",
    title: "Web Development",
    description:
      "Responsive, fast and accessible websites and web apps — built with React, Next.js and WordPress, and easy to grow.",
    points: ["React & Next.js applications", "WordPress sites you can manage", "Performance & SEO best practices"],
  },
  {
    icon: "pen",
    title: "UI/UX Design",
    description:
      "Interfaces that are visually appealing and intuitive, designed in Figma and handed off pixel-perfect to code.",
    points: ["Wireframes & prototypes", "Reusable components & styles", "Mobile-first layouts"],
  },
  {
    icon: "palette",
    title: "Graphics Design",
    description:
      "High-quality visuals that strengthen your brand identity across the web and social media.",
    points: ["Brand & social graphics", "Website imagery & mockups", "Presentation design"],
  },
  {
    icon: "kanban",
    title: "Project Management",
    description:
      "Planning, team coordination and agile delivery that keeps projects on schedule and stakeholders in the loop.",
    points: ["Scoping & timelines", "Agile sprints & stand-ups", "Clear stakeholder updates"],
  },
];

export const process = [
  { step: "01", title: "Discover", text: "We align on goals, audience and scope, then agree a clear timeline." },
  { step: "02", title: "Design", text: "Wireframes and high-fidelity UI in Figma, refined with your feedback." },
  { step: "03", title: "Develop", text: "Clean, responsive code with regular previews so you see progress." },
  { step: "04", title: "Launch", text: "Testing, deployment and hand-over — plus support after go-live." },
];

export const projectFilters = ["All", "Web apps", "Websites"];

// Cards show `image` (a laptop mockup) when there is one; private builds without
// screenshots fall back to a branded panel using `monogram` and `highlights`.
// `tint` is an RGB triplet used for each card's backdrop glow.
export const projects = [
  {
    title: "Punctiva",
    category: "Web apps",
    description:
      "Geofenced, biometric staff-attendance software for Nigerian companies — every check-in is verified with GPS location, a live face match and device biometrics. Built for Aisjeed Technologies.",
    stack: ["Next.js", "Tailwind CSS", "PWA", "Biometrics"],
    image: punctivaImg,
    live: "https://www.punctiva.com",
    tint: "20 184 166",
  },
  {
    title: "Billex",
    category: "Web apps",
    description:
      "Quotations, invoices, waybills, receipts and statements for Nigerian businesses — gapless numbering, VAT and withholding tax handled, and FIRS e-invoicing built in.",
    stack: ["Next.js", "Tailwind CSS", "PDF generation"],
    image: billexImg,
    live: "https://bilta-sigma.vercel.app",
    tint: "16 185 129",
  },
  {
    title: "Farmgate",
    category: "Web apps",
    description:
      "A Nigeria-first produce marketplace where verified farmers list produce and buyers order or negotiate directly — with escrow-protected payments, pay-on-delivery and permanent verified reviews.",
    stack: ["Next.js", "Tailwind CSS", "Escrow payments"],
    image: farmgateImg,
    live: "https://agro-connect-7nsu.vercel.app",
    tint: "101 163 13",
  },
  {
    title: "Client Profile Management System",
    category: "Web apps",
    description:
      "One source of truth for every client at Thermolinks — contacts, relationship managers, notes and compliance documents, with a completeness score, role-based access and one-click invoices.",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Auth.js"],
    monogram: "CP",
    highlights: ["Completeness score", "Role-based access", "PDF invoices"],
    live: "",
    note: "Private repository",
    tint: "13 148 136",
  },
  {
    title: "ContractorPro",
    category: "Web apps",
    description:
      "Project management for contractors, built for Aisjeed Technologies — clients, companies, projects, compliance documents and payments in one workspace, with a live analytics dashboard.",
    stack: ["Next.js", "TypeScript", "Prisma", "NextAuth", "Recharts"],
    image: contractorproImg,
    live: "https://aisjeed-app-wj4n.vercel.app",
    tint: "37 99 235",
  },
  {
    title: "ACES Schools",
    category: "Websites",
    description:
      "Multi-page website for ACES Nursery, Primary & Secondary School in Garki, Abuja — admissions, curriculum, facilities, leadership, events and a rotating hero slideshow.",
    stack: ["HTML", "CSS", "JavaScript", "SEO"],
    image: acesImg,
    live: "https://www.acesnps.com.ng",
    tint: "22 163 74",
  },
  {
    title: "Employee Lifecycle Management (ELMS)",
    category: "Web apps",
    description:
      "Multi-tenant HR platform: offer letters generated from templates, e-signing, self-service onboarding on any phone, verification, probation reviews and offboarding — all with a full audit trail.",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Playwright"],
    monogram: "E",
    highlights: ["E-signatures", "Self-service portal", "Audit trail"],
    live: "",
    note: "Private repository",
    tint: "99 102 241",
  },
  {
    title: "Smartech Construction",
    category: "Websites",
    description:
      "Website for a construction and IT company in Abuja — hero slideshow, divisions and services, and a filterable 53-photo project gallery with a lightbox viewer.",
    stack: ["HTML", "CSS", "JavaScript", "SEO"],
    image: smartechImg,
    live: "https://www.smartech.ng",
    tint: "220 38 38",
  },
  {
    title: "Zaks Foundation",
    category: "Websites",
    description:
      "Rebuilt the Zaks Foundation for Humanity website from WordPress into a fast static site — programmes, donations, volunteer sign-ups, gallery and blog.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: zaksImg,
    live: "https://www.zaksfoundation.org",
    tint: "249 115 22",
  },
  {
    title: "De-A's Price Book",
    category: "Web apps",
    description:
      "Internal price book for a provision store in Gwarinpa, Abuja — salespeople find any price in under two seconds; the manager sets prices, manages categories and photos, and approves staff.",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Auth.js"],
    monogram: "PB",
    highlights: ["2-second lookups", "Manager approvals", "Change history"],
    live: "",
    note: "Private repository",
    tint: "234 179 8",
  },
  {
    title: "Aisjeed Technologies",
    category: "Websites",
    description:
      "Company website for Aisjeed Technologies, a Nigerian IT firm building software, secure systems and IT infrastructure for businesses and government agencies.",
    stack: ["Next.js", "Tailwind CSS"],
    image: aisjeedImg,
    live: "https://aisjeed.ng",
    tint: "59 130 246",
  },
  {
    title: "Abuja Guards Polo Club",
    category: "Websites",
    description:
      "A responsive marketing website for the Abuja Guards Polo Club — with pages for events, the gallery and the club's management, designed in Figma and built in React.",
    stack: ["React", "Tailwind CSS", "Figma"],
    image: poloImg,
    live: "",
    tint: "34 197 94",
  },
  {
    title: "Acrux Engineering",
    category: "Websites",
    description:
      "Website for an engineering firm delivering construction, infrastructure, electrical engineering, consultancy and project management across Nigeria.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: acruxImg,
    live: "https://acrux-website.vercel.app",
    tint: "245 158 11",
  },
  {
    title: "Ganjalwa Global Investment",
    category: "Websites",
    description:
      "A modern multi-page site for a registered investment firm offering investment advisory, portfolio management and financial planning.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: ganjalwaImg,
    live: "https://ganjalwa-website.vercel.app",
    tint: "239 68 68",
  },
  {
    title: "AL-SAM Investment",
    category: "Websites",
    description:
      "Marketing site for an Abuja investment firm — advisory, real estate and portfolio management, with animated counters, an FAQ and an enquiry form.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: alsamImg,
    live: "https://al-sam-website.vercel.app",
    tint: "193 154 62",
  },
  {
    title: "Les Maison's Investment",
    category: "Websites",
    description:
      "Corporate website for a real estate and property development company — brand colours lifted from the logo, scroll animations and a validated enquiry form.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: lesMaisonImg,
    live: "https://les-maison.vercel.app",
    tint: "240 86 45",
  },
  {
    title: "NASLUB Nig. Ltd",
    category: "Websites",
    description:
      "Website for a general merchandise and trading company — services, a dependable-supply story and a quote request form.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: naslubImg,
    live: "https://naslub-website.vercel.app",
    tint: "21 128 61",
  },
  {
    title: "Project Seed Portal",
    category: "Web apps",
    description:
      "A full-stack portal for an orphan-support initiative, where donors can sign in and sponsor a child — powered by a Node/Express API and MongoDB.",
    stack: ["Next.js", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    image: seedImg,
    live: "",
    tint: "22 163 74",
  },
  {
    title: "Employee Management System",
    category: "Web apps",
    description:
      "An internal system for MC Turkish Hair Transplant to manage employee records, roles and workflows behind a secure admin sign-in.",
    stack: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
    image: emsImg,
    live: "",
    note: "Internal tool",
    tint: "99 102 241",
  },
  {
    title: "Continental Facilities",
    category: "Websites",
    description:
      "A brand-focused company website for a facilities business, built on WordPress so the team can update content themselves.",
    stack: ["WordPress"],
    image: continentalImg,
    live: "",
    tint: "14 165 233",
  },
  {
    title: "Personal Portfolio",
    category: "Websites",
    description:
      "This site — a fast, accessible single-page portfolio with light & dark themes, built with Next.js, Tailwind CSS and Framer Motion.",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: portfolioImg,
    live: "https://abdulmajeed-portfolio.vercel.app",
    tint: "16 185 129",
  },
];

export const experience = [
  {
    role: "Software Developer / Software Engineer",
    company: "Thermolinks Concepts Limited",
    location: "Garki, Abuja",
    period: "Nov 2025 — Present",
    current: true,
    points: [
      "Design, build and maintain web applications and internal tools end to end — from React and Next.js interfaces to Node.js APIs and MongoDB.",
      "Collaborate with IT managers, cybersecurity experts and fellow engineers to plan, ship and support client projects.",
    ],
  },
  {
    role: "Software Developer (Contract)",
    company: "Aisjeed Technologies",
    location: "Remote",
    period: "Ongoing",
    current: true,
    points: [
      "Build and maintain Aisjeed's software products, including Punctiva (biometric staff attendance) and ContractorPro (contractor project management).",
      "Built and maintain the company website, aisjeed.ng, in Next.js.",
    ],
  },
  {
    role: "Frontend Developer / Web Developer",
    company: "Thermolinks Concepts Limited",
    location: "Garki, Abuja",
    period: "Oct 2022 — Nov 2025",
    points: [
      "Built and maintained responsive websites and web applications with React, Next.js and WordPress.",
      "Worked closely with IT managers, cybersecurity experts and professional developers to deliver client projects.",
    ],
  },
  {
    role: "Web Developer / Programmer (Intern)",
    company: "Thermolinks Concepts Limited",
    location: "Garki, Abuja",
    period: "2021 — 2022",
    points: [
      "Worked with the development team across many projects, helping plan and set timelines for future work.",
      "Shadowed a senior developer for three months to learn the full development and testing process.",
    ],
  },
  {
    role: "IT Intern",
    company: "Federal Capital Territory Administration (FCTA)",
    location: "Abuja",
    period: "Nov 2019 — Feb 2020",
    points: ["Supported the professional IT team across a range of projects."],
  },
];

export const education = {
  degree: "B.Sc. Computer Science",
  school: "University of Abuja",
  period: "2016 — 2021",
  honours: "Second Class Upper Division",
  extra: "National Youth Service Corps (NYSC), 2021 — 2022",
};

export const certifications = [
  { title: "Endpoint Security", issuer: "Cisco Networking Academy", date: "Dec 2023" },
  { title: "Aspire Leadership Course", date: "Jun 2023" },
  { title: "JavaScript Fundamentals", date: "Jun 2023" },
  { title: "HTML5 Application Development", date: "Mar 2023" },
  { title: "Introduction to Cybersecurity", issuer: "Cisco Networking Academy", date: "Nov 2022" },
  { title: "AR/VR Technology Training", issuer: "NITDA", date: "Oct 2022" },
  { title: "Responsive Web Design & JS Algorithms", issuer: "freeCodeCamp", date: "2022" },
  { title: "Office Management & Administration", issuer: "Thermolinks Concepts", date: "Jun 2022" },
  { title: "Capacity Development Programme", issuer: "NITDA", date: "2020" },
];

export const courses =
  "Plus online courses in Next.js (2024), React & React Native (2023), WordPress (2022) and HTML, CSS & JavaScript (Mindluster, 2020 — 2021).";
