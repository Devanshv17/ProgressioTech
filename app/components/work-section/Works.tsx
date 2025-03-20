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
        "The IISM app, developed for the Inter IIT Sports Meet, is a comprehensive platform designed to enhance the event experience for participants, staff, and spectators. It offers secure login and authentication tailored to users' roles, real-time updates on live scores, and location tracking to help navigate event venues. The app also features timely notifications, a participant directory for fostering interaction, and role-based access for staff and students. Additional functionalities include efficient management of meal billing for players and live streaming of sports events, ensuring an immersive and seamless experience for all involved.",
      stack: ["Flutter", "mysql", "firebase"],
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
    {
      title: "We Grow Parenting App",
      // gitLink: "https://github.com/adex-hub/multi-step-form-main",
      liveLink: "https://ade-loremgaming.netlify.app/",
      about:
        "We Grow is a parenting-focused mobile application developed by one of the team member for a startup, providing parents with expert guidance, community engagement, and curated video content. Built using Flutter, the app delivers a seamless cross-platform experience and is available on both App Store and Play Store. The backend, powered by Go, ensures high performance and scalability. Key features include categorized parenting tips, video integration, and a user-friendly community section. With firebase for storage and database management, the app efficiently handles data. We Grow showcases our expertise in full-stack development, from robust backend architecture to an intuitive mobile UI.",
      stack: ["Flutter", "Go", "firebase"],
      img: "/multistep.svg",
    },
    {
      title: "RESTOX Website",
      // gitLink: "https://github.com/adex-hub/multi-step-form-main",
      liveLink: "https://ade-loremgaming.netlify.app/",
      about:
        "ReSTOX is a fully integrated real estate platform designed to simplify property listing and exploration. Built with an intuitive interface, it features 3D property views and pin-point mapping, offering an immersive browsing experience. The website includes a robust property management system, allowing users to list and showcase properties effortlessly with detailed information and high-quality visuals. It supports Google login for seamless access and provides advanced search and navigation features for both buyers and sellers. With a focus on user experience, ReSTOX ensures a smooth and efficient way to discover, manage, and explore real estate properties online.",
      stack:  ["react", "react-router", "javascript", "tailwindcss","firebase","mongodb"],
      img: "/multistep.svg",
    },
    {
      title: "EDUWISE Website",
      // gitLink: "https://github.com/adex-hub/multi-step-form-main",
      liveLink: "https://ade-loremgaming.netlify.app/",
      about:
        "EduWise is a secure web-based platform designed for IIT Kanpur students to upload and download course materials with exclusive access. Built with robust authentication and security measures, it ensures a spam-free environment for academic resource sharing. Students can log in and contribute lecture notes, assignments, and reference materials, fostering a collaborative learning ecosystem. With a centralized repository, EduWise simplifies access to essential study materials, making learning more efficient. Developed as a solo project, the platform is tailored to enhance academic engagement while maintaining privacy and content integrity within the IITK community.",
      stack:  ["next", "next-router", "javascript", "tailwindcss","firebase","mongodb"],
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
