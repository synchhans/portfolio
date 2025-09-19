import React, { useState } from "react";
import CountUp from "react-countup";

import SEO from "../../components/SEO";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaBootstrap,
  FaLaravel,
  FaGit,
  FaStackOverflow,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiRedux,
  SiTailwindcss,
  SiMysql,
  SiSqlite,
  SiDart,
  SiFlutter,
  SiFirebase,
  SiKotlin,
  SiVercel,
  SiNetlify,
} from "react-icons/si";

const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Mobile Development",
        icons: [<SiDart />, <SiFlutter />, <SiFirebase />, <SiKotlin />],
        link: [
          "https://dart.dev",
          "https://flutter.dev",
          "https://firebase.google.com",
          "https://kotlinlang.org",
        ],
      },
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaBootstrap />,
          <SiTailwindcss />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <FaLaravel />,
          <SiMysql />,
        ],
        link: [
          "https://html.spec.whatwg.org",
          "https://www.w3.org/Style/CSS/Overview.en.html",
          "https://getbootstrap.com",
          "https://tailwindcss.com",
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          "https://react.dev",
          "https://nextjs.org",
          "https://laravel.com",
          "https://www.mysql.com",
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
        link: [
          "https://www.figma.com",
          "https://www.adobe.com",
          "https://www.adobe.com",
        ],
      },
      {
        title: "Version Control",
        icons: [<FaGit />],
        link: ["https://git-scm.com"],
      },
      {
        title: "Technical Resources",
        icons: [<FaStackOverflow />],
        link: ["https://stackoverflow.com"],
      },
      {
        title: "Cloud Deployment",
        icons: [<SiVercel />, <SiNetlify />],
        link: ["https://vercel.com", "https://www.netlify.com"],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Fullstack Developer - PT. Winnicode",
        stage: "August to December - 2024",
      },
      {
        title: "Mobile Development - Bangkit Academy",
        stage: "February to June - 2024",
      },
      {
        title: "Freelance",
        stage: "2022 - 2024",
      },
    ],
  },
  {
    title: "education",
    info: [
      {
        title: "Diploma III - STMIK Mardira Indonesia",
        stage: "2022 - 2025",
      },
      {
        title: "Madrasah Aliyah - Ar-Rohman",
        stage: "2019 - 2022",
      },
      {
        title: "Madrasah Tsanawiyah - Ar-Rohman",
        stage: "2016 - 2019",
      },
    ],
  },
];

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

import Circles from "../../components/Circles";
import Link from "next/link";

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <SEO
        title="Tentang Saya | Muhamad Farhan"
        description="Pelajari lebih lanjut tentang perjalanan karir, latar belakang pendidikan, dan teknologi yang saya kuasai sebagai software engineer."
        path="/about"
      />
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      ></motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Captivating <span className="text-accent">stories</span> birth
            magnificents desings.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            2 years ago, I started freelancing as a web developer. Since then, I
            have been working remotely for clients and collaborating on digital
            programs to further hone my skills.
          </motion.p>
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:mx-w-xl xl:mx-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absoulte after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] landing-[1.4] max-w-[100px]">
                  years of experience
                </div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absoulte after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={4} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] landing-[1.4] max-w-[100px]">
                  Satisfied clients
                </div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absoulte after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] landing-[1.4] max-w-[100px]">
                  finished projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  }  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60 "
                >
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <Link
                          key={itemIndex}
                          href={item.link[itemIndex]}
                          target="_blank"
                          className="text-2xl text-white"
                        >
                          {icon}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
