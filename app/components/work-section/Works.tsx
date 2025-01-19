import React, { useEffect } from "react";
import FolioCard from "./FolioCard";
import Title from "../ui/Title";
import { useView } from "@/contexts/ViewContext";

// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import Timeline from "./Timeline";

export default function Works() {
  const { setSectionInView } = useView();

  const works = [
    {
      title: "Udghosh",
      // gitLink: "https://github.com/adex-hub/url-shortening-api-landing",
      liveLink: " ",
      about:
        "Udghosh is a feature-rich mobile application developed for the sports fest of IIT Kanpur. It provides users with seamless navigation by showcasing their real-time location, offers instant access to live scores of ongoing competitions, and ensures they stay updated with timely notifications. Additionally, the app includes a comprehensive schedule of live events, enabling users to plan their participation and attendance effectively. This application serves as an integrated platform to enhance the fest experience by combining convenience, information, and real-time updates.",
      stack: ["Flutter", "mongodb", "firebase"],
      img: "/offset-folio.svg",
    },
    {
      title: "Techkriti App",
      // gitLink: "https://github.com/adex-hub/url-shortening-api-landing",
      liveLink: "https://lnk-shortener.netlify.app/",
      about:
        "Techkriti’s mobile application is a cornerstone of the fest’s digital presence, designed to provide a seamless and interactive experience for users. The app includes real-time location tracking to help users navigate event venues effortlessly, a detailed schedule management feature ensuring participants can plan their activities effectively across various events, a notification system for timely alerts and announcements enhancing coordination, and a user-friendly design delivering an intuitive interface for engaging with fest activities efficiently.",
      stack: ["Flutter", "mongodb", "firebase"],
      img: "/shortly.svg",
    },
    {
      title: "Techkriti Website",
      // gitLink: "https://github.com/adex-hub/where-in-the-world",
      liveLink: "https://where-in-the-world-ade.netlify.app/",
      about:
        "The website acts as a comprehensive portal to streamline fest operations and improve accessibility for participants. It offers hassle-free participant registration for individuals joining the fest, a system for managing workshop and competition registrations and participation, and a robust Content Management System (CMS) empowering the organizing team to update and manage event details, ensuring accurate and timely information throughout the fest.",
      stack: ["react", "react-router", "javascript", "tailwindcss","firebase","mongodb"],
      img: "/witw.svg",
    },
    // {
    //   title: "Yourtodo",
    //   gitLink: "https://github.com/adex-hub/Yourtodo",
    //   liveLink: "https://yourtodo-v1.vercel.app/",
    //   about:
    //     "This task management system lets you customize your name, add, delete, and edit tasks, and celebrates you when tasks are completed. It features built-in notifications and stores data in the browser, allowing you to resume tasks conveniently. Designed and developed by yours truly.",
    //   stack: ["react", "javascript", "figma", "sass"],
    //   img: "/todo.svg",
    // },
    {
      title: "IISM IIT Kanpur",
      // gitLink: "https://github.com/adex-hub/multi-step-form-main",
      liveLink: "https://ade-loremgaming.netlify.app/",
      about:
        "The IISc app, developed for the Inter IIT Sports Carnival, is a comprehensive platform designed to enhance the event experience for participants, staff, and spectators. It offers secure login and authentication tailored to users' roles, real-time updates on live scores, and location tracking to help navigate event venues. The app also features timely notifications, a participant directory for fostering interaction, and role-based access for staff and students. Additional functionalities include efficient management of meal billing for players and live streaming of sports events, ensuring an immersive and seamless experience for all involved.",
      stack: ["Flutter", "postgresql", "firebase"],
      img: "/multistep.svg",
    },
    {
      title: "Entrex",
      // gitLink: "https://github.com/adex-hub/multi-step-form-main",
      liveLink: "https://ade-loremgaming.netlify.app/",
      about:
        "Entrex is an entry-exit management app developed for IIT Kanpur, designed to streamline the process of student entry and exit at the main gate and hall gates. The app features two user versions: User and Admin. The User version allows students to scan a QR code, with their entry data and personal details being securely saved in the database. The Admin version is responsible for generating dynamic QR codes that change over time for enhanced security, as well as managing and overseeing the student entry process. Additionally, the app includes a login authentication feature, where students can log in using their institute ID, with email verification ensuring secure access. This system ensures smooth and secure entry management for students.",
      stack: ["Flutter", "postgresql", "firebase"],
      img: "/multistep.svg",
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("work");
  }, [inView, setSectionInView]);

  return (
    <section
      className="flex flex-col gap-6 md:gap-10 pt-[110px]"
      ref={ref}
      id="work"
    >
      <Title>Projects</Title>
      {works.map((work, index) => (
        <FolioCard
          key={index}
          img={work.img}
          title={work.title}
          // gitLink={work.gitLink}
          liveLink={work.liveLink}
          about={work.about}
          stack={work.stack}
        />
      ))}

      {/* <Timeline /> */}
    </section>
  );
}
