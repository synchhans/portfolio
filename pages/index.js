import ProjectsBtn from "../components/ProjectsBtn";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";
import ParticlesContainer from "../components/ParticlesContainer";

import SEO from "../components/SEO";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      <SEO
        title="Muhamad Farhan - Portfolio"
        description="Selamat datang di portfolio saya. Saya adalah seorang software engineer dengan spesialisasi dalam pengembangan web, mobile, dan game."
        path="/"
      />
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Fullstack and
            <br />
            Mobile <span className="text-accent">Developer</span>
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            I am a fullstack developer with a strong background in web
            development. I started as a mobile developer, but now I am dedicated
            to fullstack development, handling both front-end and back-end, all
            the way to server-side.
          </motion.p>
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge tralsate-z-0"></div>
        <ParticlesContainer />
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[3%] "
        ></motion.div>
      </div>
    </div>
  );
};

export default Home;
