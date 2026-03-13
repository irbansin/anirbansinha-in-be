import { FastifyReply, FastifyRequest } from "fastify";

export const resumeHandler = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  return reply.code(200).send({
    message: {
      userInfo: {
        name: "Anirban Sinha",
        jobTitle: "Software Development Engineer",
        city: "Bengaluru",
        state: "Karnataka",
        phones: ["94824 10312", "87594 71790"],
        links: [
          {
            linkType: "linkedin",
            link: "https://linkedin.com/in/irbansin",
            linkText: "linkedIn.com/in/irbansin",
            icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
          },
          {
            linkType: "github",
            link: "https://github.com/irbansin",
            linkText: "github.com/irbansin",
            icon: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
          },
          {
            linkType: "website",
            link: "https://anirbansinha.in",
            linkText: "anirbansinha.in",
            icon: "https://cdn-icons-png.flaticon.com/512/1006/1006771.png",
          },
          {
            linkType: "email",
            link: "mailto:reach@anirbansinha.in",
            linkText: "reach@anirbansinha.in",
            icon: "https://cdn-icons-png.flaticon.com/512/732/732200.png",
          },
        ],
        country: "India",
        summary:
          "Experienced Software Engineer specializing in JavaScript, Angular, React, Node.js, Java. Passionate about building scalable, high-performance applications with a strong focus on frontend and backend development. Proven ability to lead teams, mentor developers, and deliver impactful solutions.",
        technicalSkills: {
          technicalLanguages: ["JavaScript", "TypeScript", "Java", "Python"],
          backendFrameworks: ["Node.js", "ExpressJS", "Spring", "Spring Boot"],
          frontEndFrameworks: ["Angular", "React", "NextJS"],
          databases: ["PostgreSQL", "MongoDB", "DynamoDB", "Redis"],
          testing: ["Jest", "Jasmine", "Karma", "JUnit"],
          ORM: ["Prisma", "Hibernate"],
          Cloud: ["AWS", "GCP"],
          Others: ["Microservices", "REST APIs", "Agile", "Git", "Monorepo"],
        },
        professionalExperience: [
          {
            companyName: "Ivy",
            role: "Senior Software Development Engineer",
            dates: "Apr 2024 – May 2025",
            location: "Pune, India",
            responsibilities: [
              "Platform for VIP Customers for online Casino Application — developed module to enable VIP customers to get better deals using Angular, NxCloud, RxJS; mentored junior developers.",
              "Data Migration — prepared production DB for new VIP field (MongoDB, OracleDB).",
              "Backend API development with Spring Boot, OracleDB, Kafka.",
            ],
          },
          {
            companyName: "EPAM Systems",
            role: "Senior Software Development Engineer",
            dates: "Feb 2023 – Apr 2024",
            location: "Hyderabad, India",
            responsibilities: [
              "Led development of customer acquisition platform for a digital-first bank (Angular frontend, Java backend).",
              "Built an AI chatbot for HR queries — React frontend, NodeJS backend with LangChain.",
            ],
          },
          {
            companyName: "Synechron",
            role: "Technical Lead",
            dates: "Jul 2022 – Dec 2022",
            responsibilities: [
              "Frontend Technical Lead for React applications of a major bank — drove architecture and implementation decisions for RBAC features.",
            ],
          },
          {
            companyName: "EasyEat",
            role: "Technical Lead",
            dates: "Jan 2022 – Jul 2022",
            responsibilities: [
              "Central Menu Management System (CMM) for Restaurant Partner Application — Angular, Node.js, AWS.",
              "Led Internationalization of Restaurant Partner Application — Angular, Node.js, AWS, Lokalize.",
              "Maintenance of User Food Ordering app — React, NextJS.",
            ],
          },
          {
            companyName: "Maximl",
            role: "Senior Software Development Engineer",
            dates: "Mar 2021 – Jan 2022",
            location: "Chennai, India",
            responsibilities: [
              "Jobs Module for Connected Workers Platform — listing, tracking and reporting progress on daily jobs. Technologies: Angular, Ionic, microfrontends, TailwindCSS.",
            ],
          },
          {
            companyName: "eReinsure",
            role: "Software Engineer",
            dates: "Oct 2019 – Mar 2021",
            location: "Hyderabad, India",
            responsibilities: [
              "Negotiation Platform for Reinsurers — built negotiation platform using Angular, Material UI.",
              "Filing Cabinet for Reinsurers — archive storage for negotiation records (Angular, Material UI, RxJS, NgRx).",
              "Backend API development with Spring Boot.",
            ],
          },
          {
            companyName: "Tata Consultancy Services",
            role: "System Engineer",
            dates: "Oct 2017 – Oct 2019",
            responsibilities: [
              "CRM frontend leveraging MS Dynamics API — developed CRM application using React and MS Dynamics API.",
              "Improved website performance by 70% via SSR and bundle size reductions.",
            ],
          },
        ],
        education: [
          {
            institution: "Indian Institute of Technology, Jodhpur",
            degree: "MTech, Data Engineering and Artificial Intelligence",
            startYear: "2024",
            endYear: "2026",
          },
          {
            institution: "Asansol Engineering College",
            degree: "BTech, Computer Engineering",
            startYear: "2013",
            endYear: "2017",
          },
        ],
        achievements: [
          'TCS "On The Spot" Award',
          "Global Student Entrepreneurship Finalist",
          "Tata First Dot Top 25 Startups",
        ],
        certifications: [],
      },
    },
  });
};
