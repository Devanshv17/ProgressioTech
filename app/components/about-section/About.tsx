import React, { useEffect } from "react";
import Link from "next/link";
import { Syne } from "next/font/google";
import { useView } from "@/contexts/ViewContext";
import { useInView } from "react-intersection-observer";
import AnimatedBody from "../ui/AnimatedBody";
import AnimatedTitle from "../ui/AnimatedTitle";

const syne = Syne({ subsets: ["latin"] });

export default function About() {
  const { setSectionInView } = useView();

  const { ref, inView } = useInView({
    threshold: 0.2,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("about");
  }, [inView, setSectionInView]);

  return (
    <section ref={ref} className="pt-24 md:pt-[150px]" id="about">
      <AnimatedTitle
        wordSpace={"mr-[14px]"}
        charSpace={"mr-[0.001em]"}
        className={`uppercase ${syne.className} antialiased text-4xl md:text-5xl xl:text-6xl font-bold opacity-80`}
      >
        We amplify brand voices through our development
      </AnimatedTitle>

      <div className="grid grid-cols-1 lg:grid-cols-[8.5fr_3.5fr] gap-8 mt-6">
        <div className="grid grid-cols-1 antialiased gap-6 text-white/90 text-3xl md:text-2xl">
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
            Our passion lies in creating strong business solutions that aid
            business growth. Whether it's a website to boost brand publicity or
            software solutions that streamline otherwise manual processes, we
            love taking brands from point A to their dreamy point B.
          </AnimatedBody>
          <AnimatedBody className="inline leading-[34px] md:leading-[39px]">
            Each challenge is unique so we ensure that we learn and grow through
            each one ensuring that we not only put in our best but also deliver
            solutions that businesses are proud to call their own.
            <br className="hidden md:block" />
            {/* <Link
              className="underline"
              href={
                "https://drive.google.com/file/d/1Rd-IB_5pxsGj4RDtHjEggPB392ND29xB/view?usp=sharing"
              }
            >
              my résumè
            </Link> */}
          </AnimatedBody>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Frontend Development
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              JavaScript (ES6+), React, Next.js, TypeScript, Redux, Redux
              Toolkit, React Query, HTML5, Flutter, Tailwind CSS, Framer Motion,
              Bootstrap, Git/GitHub.
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Backend Development
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              Node.js, Express.js, Django, Flask, GraphQL, REST APIs, MongoDB,
              PostgreSQL, MySQL, Firebase, Firebase Messaging.
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Design & Cloud Tools
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              Figma, Tailwind CSS, Framer Motion, Bootstrap, AWS (S3, Lambda,
              EC2), Firebase.
            </AnimatedBody>
          </div>
        </div>
      </div>
    </section>
  );
}
